import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export const registerUser = async(username) => {
    const res = await axios.post(`${API_BASE}/register`, { username });
    return res.data;
};

export const checkUsage = async(username) => {
    const res = await axios.post(`${API_BASE}/usage`, { username });
    return res.data;
};


// If you want to generate a new API key for the CLI, you can reuse registerUser or add a new endpoint if needed.