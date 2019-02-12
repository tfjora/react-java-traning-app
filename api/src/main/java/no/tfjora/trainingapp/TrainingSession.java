package no.tfjora.trainingapp;

import java.sql.Time;
import java.util.Date;

public class TrainingSession {

    private int id;
    private String name;
    private Date date;
    private Time time;

    public TrainingSession (int id, String name, Date date, Time time) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
    }
    public TrainingSession () {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getDate() {
        return date;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Time getTime() {
        return time;
    }

}