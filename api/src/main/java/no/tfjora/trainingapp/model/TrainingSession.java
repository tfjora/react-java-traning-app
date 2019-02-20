package no.tfjora.trainingapp.model;

import java.time.LocalDate;

public class TrainingSession {

    private int id;
    private String name;
    private long minutes;
    private LocalDate date;

    private TrainingSession(int id, String name, long minutes, LocalDate date) {
        this.id = id;
        this.name = name;
        this.minutes = minutes;
        this.date = date;
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

    public long getMinutes() {
        return minutes;
    }

    public void setMinutes(long minutes) {
        this.minutes = minutes;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "TrainingSession{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", minutes=" + minutes +
                ", date=" + date +
                '}';
    }

    public static final class Builder {

        private int id;
        private String name;
        private long minutes;
        private LocalDate date;

        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setMinutes(long minutes) {
            this.minutes = minutes;
            return this;
        }

        public Builder setDate(LocalDate date) {
            this.date = date;
            return this;
        }

        public TrainingSession build() {
            return new TrainingSession(id, name, minutes, date);
        }
    }

}