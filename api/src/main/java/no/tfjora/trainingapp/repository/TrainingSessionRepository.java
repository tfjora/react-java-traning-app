package no.tfjora.trainingapp.repository;

import no.tfjora.trainingapp.model.TrainingSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

@Repository
public class TrainingSessionRepository {

    private JdbcTemplate jdbcTemplate;
    private RowMapper<TrainingSession> trainingSessionRowMapper;

    @Autowired
    public TrainingSessionRepository(DataSource dataSource) {
        this();
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    private TrainingSessionRepository() {
        trainingSessionRowMapper = new TrainingSessionRowMapper();
    }

    public List<TrainingSession> findAll() {
        try {
            return jdbcTemplate.query("SELECT * FROM trainingsession;", trainingSessionRowMapper);
        } catch (DataAccessException e) {
            return Collections.emptyList();
        }
    }

    public List<TrainingSession> findById(int id) {
        try {
            return jdbcTemplate.query("SELECT * FROM trainingsession WHERE id = ?",new Object[]{id}, trainingSessionRowMapper);
        } catch (DataAccessException e) {
            return  Collections.emptyList();
        }
    }

    public void insert(TrainingSession trainingSession) {
        String sql = "INSERT INTO trainingsession(`name`, `minutes`, `date`) VALUES (?, ?, ?, ?)";
        Object[] sqlParameters = {
                trainingSession.getName(),
                trainingSession.getMinutes(),
                trainingSession.getDate()
        };
        jdbcTemplate.update(sql, sqlParameters);
    }

    private class TrainingSessionRowMapper implements RowMapper<TrainingSession> {

        @Override
        public TrainingSession mapRow(ResultSet resultSet, int i) throws SQLException {
            TrainingSession trainingSession = new TrainingSession();
            trainingSession.setId(resultSet.getInt("id"));
            trainingSession.setName(resultSet.getString("name"));
            trainingSession.setMinutes(resultSet.getLong("minutes"));
            trainingSession.setDate(resultSet.getDate("date").toLocalDate());
            return trainingSession;
        }
    }
}