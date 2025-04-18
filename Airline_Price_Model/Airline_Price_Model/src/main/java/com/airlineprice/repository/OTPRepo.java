package com.airlineprice.repository;

import org.springframework.stereotype.Repository;

import java.util.Random;

@Repository
public class OTPRepo {

    public String getOtp(){
        Random ramdom=new Random();
        int otp=1000+ ramdom.nextInt(9000);
        return String.valueOf(otp);
    }
}
