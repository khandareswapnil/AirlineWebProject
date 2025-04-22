package com.airlineprice.controller;

import com.airlineprice.entity.FlightSchedule;
import com.airlineprice.service.FlightScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class FlightSchedulController {

    @Autowired
    FlightScheduleService flightScheduleService;

    @PostMapping("/addFlightSchedule")
    public String addFlightSchedule(@RequestBody FlightSchedule flightSchedule){
        return flightScheduleService.addFlightSchedule(flightSchedule);
    }

    @GetMapping("/viewFlightSchedule")
    public List<FlightSchedule> viewFlightSchedule(){
        return flightScheduleService.viewFlightSchedule();
    }
}
