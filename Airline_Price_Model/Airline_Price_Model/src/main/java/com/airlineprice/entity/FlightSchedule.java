package com.airlineprice.entity;

public class FlightSchedule {
    private int fsId;
    private String airline_name;
    private String aircra_name;
    private String fnumber;
    private String dep_city;
    private String arr_city;
    private String dep_date;
    private String dep_time;
    private String arr_date;
    private String arr_time;

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getArr_time() {
        return arr_time;
    }

    public void setArr_time(String arr_time) {
        this.arr_time = arr_time;
    }

    public String getArr_date() {
        return arr_date;
    }

    public void setArr_date(String arr_date) {
        this.arr_date = arr_date;
    }

    public String getDep_time() {
        return dep_time;
    }

    public void setDep_time(String dep_time) {
        this.dep_time = dep_time;
    }

    public String getDep_date() {
        return dep_date;
    }

    public void setDep_date(String dep_date) {
        this.dep_date = dep_date;
    }

    public String getArr_city() {
        return arr_city;
    }

    public void setArr_city(String arr_city) {
        this.arr_city = arr_city;
    }

    public String getDep_city() {
        return dep_city;
    }

    public void setDep_city(String dep_city) {
        this.dep_city = dep_city;
    }

    public String getFnumber() {
        return fnumber;
    }

    public void setFnumber(String fnumber) {
        this.fnumber = fnumber;
    }

    public String getAircra_name() {
        return aircra_name;
    }

    public void setAircra_name(String aircra_name) {
        this.aircra_name = aircra_name;
    }

    public String getAirline_name() {
        return airline_name;
    }

    public void setAirline_name(String airline_name) {
        this.airline_name = airline_name;
    }

    public int getFsId() {
        return fsId;
    }

    public void setFsId(int fsId) {
        this.fsId = fsId;
    }

    private int rate;
}
