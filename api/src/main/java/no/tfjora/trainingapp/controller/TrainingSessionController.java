package no.tfjora.trainingapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/foo")
public class TrainingSessionController {

    @RequestMapping(value = "/bar")
    public String hello() {
        return "Hello foo";
    }

}
