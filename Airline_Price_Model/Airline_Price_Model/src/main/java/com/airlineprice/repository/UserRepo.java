package com.airlineprice.repository;

import com.airlineprice.entity.UserInfo;

import java.util.List;

public interface UserRepo {
    public String addUser(UserInfo userInfo);
    public List<UserInfo> getAllUser();
}

