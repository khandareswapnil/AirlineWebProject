package com.airlineprice.repository;

import com.airlineprice.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepoIMPL implements UserRepo {
    @Autowired
    JdbcTemplate template;
    @Override
    public String addUser(UserInfo userInfo) {
        try {
            String query1 = "SELECT uid FROM userinfo WHERE email = ?";
            Integer uid = template.queryForObject(query1, new Object[]{userInfo.getEmail()}, Integer.class);

            if (uid != null) {
                return "User already exists";
            }
        } catch (EmptyResultDataAccessException e) {
            // Email not found, so safe to insert
            String query = "INSERT INTO userinfo(name, email, contact, gender,role) VALUES (?, ?, ?, ?,?)";
            int val = template.update(query,
                    userInfo.getName(),
                    userInfo.getEmail(),
                    userInfo.getContact(),
                    userInfo.getGender(),
                    "2");
            return val > 0 ? "User Add Success" : "User Add Unsuccess";
        } catch (Exception e) {
            e.printStackTrace();
            return "Server Error";
        }
        return "Something went wrong";
    }

    @Override
    public List<UserInfo> getAllUser() {
        String query="select *from userInfo where role='2'";
        return template.query(query,new BeanPropertyRowMapper<>(UserInfo.class));
    }
}
