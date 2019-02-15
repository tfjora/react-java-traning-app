package no.tfjora.trainingapp.controller;

import no.tfjora.trainingapp.model.TrainingSession;
import no.tfjora.trainingapp.repository.TrainingSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/trainingsession", produces = MediaType.APPLICATION_JSON_VALUE)
public class TrainingSessionController {

    private TrainingSessionRepository trainingSessionRepository;

    @Autowired
    public TrainingSessionController(TrainingSessionRepository trainingSessionRepository) {
        this.trainingSessionRepository = trainingSessionRepository;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<TrainingSession> findAll() {
        return trainingSessionRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<TrainingSession> findById(@PathVariable int id) {
        return trainingSessionRepository.findById(id);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void insert(@RequestBody TrainingSession trainingSession) {
        trainingSessionRepository.insert(trainingSession);
    }
}