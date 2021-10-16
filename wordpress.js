const axios = require('axios');

const baseUrl = process.env.API_URL;

const auth = { 
    username: process.env.API_USER,
    password: process.env.API_KEY
}

async function addUser(user) {
    const response = await axios.post(`${baseUrl}/wp/v2/users`, user, { auth });
    return response.data;
}

async function addUserToCourse(userIds, courseId) {
    const data = { user_ids: userIds }
    const response = await axios.post(`${baseUrl}/ldlms/v1/sfwd-courses/${courseId}/users`, data, { auth });
    return response.data;
}

module.exports = {
   addUser,
   addUserToCourse
}