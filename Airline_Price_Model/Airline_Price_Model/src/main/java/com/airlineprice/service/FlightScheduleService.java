package com.airlineprice.service;

import com.airlineprice.entity.FlightSchedule;
import com.airlineprice.repository.FlightScheduleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightScheduleService {
    @Autowired
    FlightScheduleRepo flightScheduleRepo;

    public String addFlightSchedule(FlightSchedule flightSchedule){
        return flightScheduleRepo.addFlightSchedule(flightSchedule);
    }
    public List<FlightSchedule> viewFlightSchedule(){
        return flightScheduleRepo.viewFlightSchedule();
    }
}
