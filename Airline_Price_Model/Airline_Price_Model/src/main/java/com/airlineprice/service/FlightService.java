package com.airlineprice.service;

import com.airlineprice.entity.FlightInfo;

import java.util.List;

public interface FlightService {
    public String flightInfoAdd(FlightInfo flight);
    public List<FlightInfo> viewFlight();
}

