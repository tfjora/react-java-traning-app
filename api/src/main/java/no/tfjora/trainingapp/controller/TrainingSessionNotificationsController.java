package no.tfjora.trainingapp.controller;


import no.tfjora.trainingapp.model.TrainingSession;
import no.tfjora.trainingapp.model.TrainingSessionNotification;
import no.tfjora.trainingapp.repository.TrainingSessionNotificationsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping
public class TrainingSessionNotificationsController {

    private static final Logger LOGGER = LoggerFactory.getLogger(TrainingSessionNotificationsController.class);

    private TrainingSessionNotificationsRepository trainingSessionNotificationsRepository;

    @Autowired
    public TrainingSessionNotificationsController(TrainingSessionNotificationsRepository trainingSessionNotificationsRepository) {
        this.trainingSessionNotificationsRepository = trainingSessionNotificationsRepository;
    }

    /*@RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<TrainingSessionNotification>> findAll() {
        try {
            return ResponseEntity.ok(trainingSessionNotificationsRepository.findAll());
        } catch (Exception e) {
            LOGGER.error("Could not get all training sessions", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity insert(@RequestBody TrainingSessionNotification trainingSessionNotification) {
        try {
            LOGGER.info(trainingSessionNotification.getType();
            int id = trainingSessionNotificationsRepository.insert(trainingSessionNotification);
            if (id > 0) {
                UriComponents uriComponents = ServletUriComponentsBuilder.fromCurrentRequest().pathSegment(String.valueOf(id)).build();
                if (uriComponents.getPath() != null) {
                    return ResponseEntity.created(URI.create(uriComponents.getPath())).build();
                }
            }
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            LOGGER.error("Could not insert training session notification [{}]", trainingSessionNotification, e);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
