package com.airlineprice.repository;

import com.airlineprice.entity.CityAirport;
import com.airlineprice.entity.FlightInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FlightInfoRepo implements FlightInfoInter {

    @Autowired
    private JdbcTemplate template;

    @Override
    public String flightInfo(FlightInfo flightinfo) {
        String query = "INSERT INTO Airlinename (airline_name) VALUES (?)";
        int value = template.update(query,flightinfo.getAirline_name());

        String query1 = "SELECT aid FROM Airlinename WHERE airline_name = ?";
        Integer aid = template.queryForObject(query1, new Object[]{flightinfo.getAirline_name()}, Integer.class);

        String query2="insert into aircraftType(aircra_name) values(?)";
        int val=template.update(query2,flightinfo.getAircra_name());
        String query3="select airId from aircraftType where aircra_name=?";
        Integer airId = template.queryForObject(query3, new Object[]{flightinfo.getAircra_name()}, Integer.class);

        String query4="insert into flightnumber(fnumber,aid,airId) values(?,?,?)";
        int val2=template.update(query4,
                flightinfo.getFnumber(),aid,airId);

        if (value > 0 && val>0 && val2>0) {
            return "Flight Info Added Successfully";
        } else {
            return "Flight Info Add Failed";
        }
    }

    @Override
    public List<FlightInfo> viewFlight() {
        String query = "SELECT fl.fid, a.airline_name AS airline_name, air.aircra_name AS aircra_name, fl.fnumber " +
                "FROM flightnumber fl " +
                "INNER JOIN Airlinename a ON a.aid = fl.aid " +
                "INNER JOIN aircraftType air ON air.airid = fl.airid";
        return template.query(query, new BeanPropertyRowMapper<>(FlightInfo.class));
    }
}
