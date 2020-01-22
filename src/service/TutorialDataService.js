import axios from 'axios';

const URL = 'http://localhost:8080';
const INSTRUCTOR_API_URL = `${URL}/api/auth/all`;

class TutorialDataService {
    retrieveAllTutorials() {
        return axios.get(`${INSTRUCTOR_API_URL}/tutorials`);
    }

    retrieveTutorial(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/tutorials/${id}`);
    }

    deleteTutorial(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/tutorials/${id}`);
    }

    updateTutorial(id, tutorial) {
        return axios.put(`${INSTRUCTOR_API_URL}/tutorials/${id}`, tutorial);
    }

    createTutorial(tutorial) {
        return axios.post(`${INSTRUCTOR_API_URL}/tutorials/`, tutorial);
    }
};

export default new TutorialDataService();