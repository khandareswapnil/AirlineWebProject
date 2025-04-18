package com.airlineprice.repository;

import com.airlineprice.entity.FlightInfo;

import java.util.List;

public interface FlightInfoInter {
    public String flightInfo(FlightInfo flightinfo);
    public List<FlightInfo> viewFlight();
}
