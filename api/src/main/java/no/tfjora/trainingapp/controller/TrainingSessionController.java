package no.tfjora.trainingapp.controller;

import no.tfjora.trainingapp.model.TrainingSession;
import no.tfjora.trainingapp.repository.TrainingSessionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/trainingsessions")
public class TrainingSessionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TrainingSessionController.class);

    private TrainingSessionRepository trainingSessionRepository;

    @Autowired
    public TrainingSessionController(TrainingSessionRepository trainingSessionRepository) {
        this.trainingSessionRepository = trainingSessionRepository;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<TrainingSession>> findAll() {
        try {
            return ResponseEntity.ok(trainingSessionRepository.findAll());
        } catch (Exception e) {
            LOGGER.error("Could not get all training sessions", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<TrainingSession> findById(@PathVariable int id) {
        try {
            TrainingSession trainingSession = trainingSessionRepository.findById(id);
            return trainingSession != null ? ResponseEntity.ok(trainingSession) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            LOGGER.error("Could not get all training sessions", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteById(@PathVariable int id) {
        try {
            return ResponseEntity.ok(trainingSessionRepository.deleteById(id));
        } catch (Exception e) {
            LOGGER.error("Could not delete a training session with id [" + id + "]");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity insert(@RequestBody TrainingSession trainingSession) {
        try {
            LOGGER.info(trainingSession.getDate().toString());
            int id = trainingSessionRepository.insert(trainingSession);
            if (id > 0) {
                UriComponents uriComponents = ServletUriComponentsBuilder.fromCurrentRequest().pathSegment(String.valueOf(id)).build();
                if (uriComponents.getPath() != null) {
                    return ResponseEntity.created(URI.create(uriComponents.getPath())).build();
                }
            }
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            LOGGER.error("Could not insert training session [{}]", trainingSession, e);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

