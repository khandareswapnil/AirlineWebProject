package com.airlineprice.controller;

import com.airlineprice.entity.UserInfo;
import com.airlineprice.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserInfoController {
    @Autowired
    UserInfoService userInfoService;

    @PostMapping("/addUser")
    public String addUser(@RequestBody UserInfo userInfo){
        return userInfoService.addUser(userInfo);
    }

    @GetMapping("/getAllUsers")
    public List<UserInfo> getAllUser(){
        return userInfoService.getAllUser();
    }

}
