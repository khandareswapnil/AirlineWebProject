package com.airlineprice.repository;

import com.airlineprice.entity.FlightSchedule;
import com.airlineprice.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FlightScheduleRepo {
    @Autowired
    JdbcTemplate template;

    public String addFlightSchedule(FlightSchedule flightSchedule) {
        String query=" select fl.fid from flightnumber fl inner join airlinename a on a.aid=fl.aid inner join aircrafttype air on air.airid=fl.airid where a.airline_name=? and  air.aircra_name=?";
        Integer fid=template.queryForObject(query,new Object[]{flightSchedule.getAirline_name(),flightSchedule.getAircra_name()},Integer.class);
        System.out.println(fid);

        // Departure City
        String depcityQuery="select cityid from citymaster where cityname=?";
        Integer depcityid=template.queryForObject(depcityQuery, new Object[]{flightSchedule.getDep_city()},Integer.class);

        // Arrival City
        String arrcityQuery="select cityid from citymaster where cityname=?";
        Integer arrcityid=template.queryForObject(arrcityQuery,new Object[]{flightSchedule.getArr_city()},Integer.class);

        String depArrCityId="select dep_arr_Id from dep_city_arr_city_distance where dept_city=? and arr_city=?";
        Integer dep_arr_id=template.queryForObject(depArrCityId,new Object[]{depcityid,arrcityid},Integer.class);

        String distanceQuery="select distance from dep_city_arr_city_distance where dep_arr_Id=?";
                Integer distance=template.queryForObject(distanceQuery,new Object[]{dep_arr_id},Integer.class);
        Integer rate= distance*30;
        String flightScheduleQuery="insert into flightschedule values('0',?,?,?,?,?,?,?)";
        int val=template.update(flightScheduleQuery,
                fid,
                dep_arr_id,
                flightSchedule.getDep_date(),
                flightSchedule.getDep_time(),
                flightSchedule.getArr_date(),
                flightSchedule.getArr_time(),
                rate);
        return val>0?"Added Sucess":"Added Unsucess";
    }

    public List<FlightSchedule> viewFlightSchedule(){
        String query="SELECT " +
                "  a.airline_name, " +
                "  air.aircra_name, " +
                "  f.fnumber, " +
                "  depCity.cityname AS dep_city, " +
                "  arrCity.cityname AS arr_city," +
                "  fl.dep_date," +
                "  fl.dep_time, " +
                "  fl.arr_date, " +
                "  fl.arr_time, " +
                "  fl.rate " +
                "FROM flightschedule fl " +
                "INNER JOIN flightnumber f ON f.fid = fl.fid " +
                "INNER JOIN airlinename a ON a.aid = f.aid " +
                "INNER JOIN aircrafttype air ON air.airId = f.airId " +
                "INNER JOIN dep_city_arr_city_distance dep ON dep.dep_arr_Id = fl.dep_arr_Id " +
                "INNER JOIN citymaster depCity ON depCity.cityid = dep.dept_city " +
                "INNER JOIN citymaster arrCity ON arrCity.cityid = dep.arr_city;";
        return template.query(query,new BeanPropertyRowMapper<>(FlightSchedule.class));
    }

}