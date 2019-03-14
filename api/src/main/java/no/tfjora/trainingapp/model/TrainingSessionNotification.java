package no.tfjora.trainingapp.model;

public class TrainingSessionNotification {

    private int id;
    private String type;

    public TrainingSessionNotification(int id, String type) {
        this.id = id;
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


    @Override
    public String toString() {
        return "TrainingSessionNotification{" +
                "id=" + id +
                ", name='" + type + '\'' +
                '}';
    }

    public static final class Builder {

        private int id;
        private String type;

        public TrainingSessionNotification.Builder setId(int id) {
            this.id = id;
            return this;
        }

        public TrainingSessionNotification.Builder setType(String type) {
            this.type = type;
            return this;
        }


        public TrainingSessionNotification build() {
            return new TrainingSessionNotification(id, type);
        }
    }
}
