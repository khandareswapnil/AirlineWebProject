package com.airlineprice.controller;

import com.airlineprice.entity.CityAirport;
import com.airlineprice.entity.FlightInfo;
import com.airlineprice.service.FlightInfoIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class FlightController {
    @Autowired
    FlightInfoIMPL flightInfoIMPL;

    @PostMapping("/addFlightDetails")
    public String flightInfo(@RequestBody FlightInfo flight) {
        return flightInfoIMPL.flightInfoAdd(flight);
    }

    @GetMapping("/viewFlights")
    public List<FlightInfo> viewFlights() {
        return flightInfoIMPL.viewFlight();
    }
}
