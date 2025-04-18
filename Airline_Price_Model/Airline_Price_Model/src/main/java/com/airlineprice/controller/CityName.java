package com.airlineprice.controller;

import com.airlineprice.entity.City;
import com.airlineprice.entity.CityAirport;
import com.airlineprice.service.CityNameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CityName {
    @Autowired
    CityNameService cityNameService;

    @PostMapping("/addCityAirport")
    public String addCityAirport(@RequestBody CityAirport airport){
        return cityNameService.addCityAirport(airport);
    }

    @GetMapping("/viewAirport")
    public List<CityAirport> viewCity(){
        return cityNameService.viewCity();
    }
}
