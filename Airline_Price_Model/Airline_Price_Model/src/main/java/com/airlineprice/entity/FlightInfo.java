package com.airlineprice.entity;

public class FlightInfo {
    private int fid;
    private String airline_name;
    private String aircra_name;

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

    public int getFid() {
        return fid;
    }

    public void setFid(int fid) {
        this.fid = fid;
    }

    private String fnumber;





}
