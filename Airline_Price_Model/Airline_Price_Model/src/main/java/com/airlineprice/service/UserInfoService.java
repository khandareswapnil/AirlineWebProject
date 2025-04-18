package com.airlineprice.service;
import com.airlineprice.entity.UserInfo;
import com.airlineprice.repository.UserRepoIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoService {

    @Autowired
    UserRepoIMPL userRepoIMPL;
    public String addUser(UserInfo userInfo){
        return userRepoIMPL.addUser(userInfo);
    }

    public List<UserInfo> getAllUser(){
        return userRepoIMPL.getAllUser();
    }
}
