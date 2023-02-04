import axios from "axios";

const URL = `http://localhost:3002/users`

export const addUser = async(data)=>{
    try {
       return await axios.post(`${URL}/`,data)
    } catch (error) {
        console.log(`error while calling addUser api`,error);
    }
}

export const getUsers = async()=>{
    try {
       return await axios.get(`${URL}/`)
    } catch (error) {
        console.log(`error while calling getUsers api`,error);
    }
}

export const getUser = async(id)=>{
    try {
       return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(`error while calling getUser api`,error);
    }
}

export const editUser = async(data,id)=>{
    try {
       return await axios.put(`${URL}/${id}`,data)
    } catch (error) {
        console.log(`error while calling editUser api`,error);
    }
}

export const deleteUser = async(id)=>{
    try {
       return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log(`error while calling deleteUser api`,error);
    }
}
