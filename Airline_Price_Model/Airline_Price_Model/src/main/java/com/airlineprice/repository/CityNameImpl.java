package com.airlineprice.repository;

import com.airlineprice.entity.City;
import com.airlineprice.entity.CityAirport;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CityNameImpl {

    @Autowired
    JdbcTemplate template;

    @Transactional
    public String addCityAirport(CityAirport airport) {
        try {
            // Try fetching cityId
            String selectCity = "SELECT cityId FROM citymaster WHERE cityname=?";
            Integer cityId;
            try {
                cityId = template.queryForObject(selectCity, new Object[]{airport.getCityName()}, Integer.class);
            } catch (EmptyResultDataAccessException e) {
                // If city not found, insert new city
                String insertCity = "INSERT INTO citymaster (cityname) VALUES(?)";
                template.update(insertCity, airport.getCityName());

                // Fetch the newly inserted cityId
                cityId = template.queryForObject(selectCity, new Object[]{airport.getCityName()}, Integer.class);
            }

            // Insert airport
            String insertAirport = "INSERT INTO airport(airportname, cityId) VALUES (?, ?)";
            int result = template.update(insertAirport, airport.getAirportName(), cityId);

            return result > 0 ? "Airport Added Successfully" : "Failed to Add Airport";

        } catch (Exception e) {
            e.printStackTrace();
            return "Error occurred: " + e.getMessage();
        }
    }




    public List<CityAirport> viewCity(){
        String query="select c.cityname, a.airportname from airport a inner join citymaster c on c.cityid=a.cityid";
        return template.query(query,new BeanPropertyRowMapper<>(CityAirport.class));


    }

}
