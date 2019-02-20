package no.tfjora.trainingapp.repository;

import no.tfjora.trainingapp.model.TrainingSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
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

    public TrainingSession findById(int id) {
        try {
            String sql = "SELECT * FROM trainingsession WHERE id = ?";
            return jdbcTemplate.queryForObject(sql, new Object[]{id}, trainingSessionRowMapper);
        } catch (DataAccessException e) {
            return null;
        }
    }

    public int insert(TrainingSession trainingSession) {
        String sql = "INSERT INTO trainingsession(`name`, `minutes`, `date`) VALUES (?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        PreparedStatementCreator preparedStatementCreator = new InsertTrainingSessionPreparedStatementCreator(sql, trainingSession);
        jdbcTemplate.update(preparedStatementCreator, keyHolder);
        return keyHolder.getKey() != null ? keyHolder.getKey().intValue() : 0;
    }

    public boolean deleteById(int id) {
        String sql = "DELETE FROM trainingsession WHERE id = "+id;
        int rowsAffected = jdbcTemplate.update(sql);
        return rowsAffected > 0;
    }

    private class TrainingSessionRowMapper implements RowMapper<TrainingSession> {

        @Override
        public TrainingSession mapRow(ResultSet resultSet, int i) throws SQLException {
            return new TrainingSession.Builder()
                    .setId(resultSet.getInt("id"))
                    .setName(resultSet.getString("name"))
                    .setMinutes(resultSet.getLong("minutes"))
                    .setDate(resultSet.getDate("date").toLocalDate())
                    .build();
        }
    }

    private class InsertTrainingSessionPreparedStatementCreator implements PreparedStatementCreator {

        private String sql;
        private TrainingSession trainingSession;

        InsertTrainingSessionPreparedStatementCreator(String sql, TrainingSession trainingSession) {
            this.sql = sql;
            this.trainingSession = trainingSession;
        }

        @Override
        public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
            PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            int i = 1;
            preparedStatement.setString(i++, trainingSession.getName());
            preparedStatement.setLong(i++, (trainingSession.getMinutes()));
            preparedStatement.setDate(i, Date.valueOf(trainingSession.getDate()));
            return preparedStatement;
        }
    }
}