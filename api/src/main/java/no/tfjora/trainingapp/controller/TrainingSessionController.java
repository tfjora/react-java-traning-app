package no.tfjora.trainingapp.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TrainingSessionController {


    @RequestMapping(value = "/trainingsession")
    public String hello() {
        return "{\"results\":[{\"id\":1,\"name\":\"test1\",\"time\":\"11:11\",\"date\":\"11-11-2011\"}, " +
                "{\"id\":2,\"name\":\"test2\",\"time\":\"12:12\",\"date\":\"12-12-2012\"}, " +
                "{\"id\":3,\"name\":\"test3\",\"time\":\"13:13\",\"date\":\"13-12-2013\"}]}";

      }
}