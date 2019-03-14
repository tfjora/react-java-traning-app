package no.tfjora.trainingapp.repository;

import no.tfjora.trainingapp.model.TrainingSession;
import no.tfjora.trainingapp.model.TrainingSessionNotification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import javax.sql.DataSource;
import java.sql.*;

public class TrainingSessionNotificationsRepository {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public TrainingSessionNotificationsRepository(DataSource dataSource) {
        this();
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public int insert(TrainingSessionNotification trainingSessionNotification) {
        String sql = "INSERT INTO trainingsessionnotification(`type`) VALUES (?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        PreparedStatementCreator preparedStatementCreator = new InsertTrainingSessionPreparedStatementCreator(sql, trainingSessionNotification);
        jdbcTemplate.update(preparedStatementCreator, keyHolder);
        return keyHolder.getKey() != null ? keyHolder.getKey().intValue() : 0;
    }


    private class InsertTrainingSessionPreparedStatementCreator implements PreparedStatementCreator {

        private String sql;
        private TrainingSessionNotification trainingSessionNotification;

        InsertTrainingSessionPreparedStatementCreator(String sql, TrainingSessionNotification trainingSessionNotification) {
            this.sql = sql;
            this.trainingSessionNotification = trainingSessionNotification;
        }

        @Override
        public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
            PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            int i = 1;
            preparedStatement.setString(i++, trainingSessionNotification.getType());
            return preparedStatement;
        }
    }
}
