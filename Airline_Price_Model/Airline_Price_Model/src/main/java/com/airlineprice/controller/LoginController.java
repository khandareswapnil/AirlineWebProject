package com.airlineprice.controller;

import com.airlineprice.service.EmailService;
import com.airlineprice.service.OTPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
public class LoginController {

    private final JdbcTemplate template;
    private final OTPService otpService;
    private final EmailService emailService;
    private final Map<String, String> otpStorage = new HashMap<>();

    @Autowired
    public LoginController(JdbcTemplate template, OTPService otpService, EmailService emailService) {
        this.template = template;
        this.otpService = otpService;
        this.emailService = emailService;
    }

    @PostMapping("/verifyEmail")
    public ResponseEntity<Map<String, String>> verifyEmail(@RequestBody Map<String, String> request) {
        String email = request.get("email");

        String sql = "select r.userrole from role r inner join userinfo u on u.role=r.role_id where u.email=?";
        try {
            String role = template.queryForObject(sql, new Object[]{email}, String.class);

            if (role != null) {
                String otp = otpService.getOtp();
                System.out.println("Generated OTP: " + otp);

                emailService.sendOtpEmail(email, otp);

                Map<String, String> response = new HashMap<>();
                response.put("otp", otp);
                response.put("role", role);

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(404).body(null);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(404).body(null);
        }
    }

    @PostMapping("/verifyOtp")
    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String enteredOtp = request.get("otp");

        String storedOtp = otpStorage.get(email);

        if (storedOtp != null && storedOtp.equals(enteredOtp)) {
            otpStorage.remove(email);
            return ResponseEntity.ok("OTP Verified Successfully!");
        } else {
            return ResponseEntity.status(400).body("Invalid OTP. Please try again.");
        }
    }
}
