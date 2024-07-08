import axios from 'axios';

const API_BASE_URL = 'https://devapi.beyondchats.com/api';

export const getAllChats = (page = 1) => {
  return axios.get(`${API_BASE_URL}/get_all_chats?page=${page}`).then(response => {
    console.log("API Call - getAllChats:", response.data); // Log the API response
    if (response.data && Array.isArray(response.data)) {
      return response.data; // Ensure the response data is an array
    }
    return []; // Return an empty array if data is not an array
  }).catch(error => {
    console.error("Error fetching chats:", error);
    return []; // Return an empty array in case of error
  });
};

export const getChatMessages = (chatId) => {
  return axios.get(`${API_BASE_URL}/get_chat_messages?chat_id=${chatId}`).then(response => {
    console.log("API Call - getChatMessages:", response.data); // Log the API response
    if (response.data && Array.isArray(response.data)) {
      return response.data; // Ensure the response data is an array
    }
    return []; // Return an empty array if data is not an array
  }).catch(error => {
    console.error("Error fetching chat messages:", error);
    return []; // Return an empty array in case of error
  });
};
