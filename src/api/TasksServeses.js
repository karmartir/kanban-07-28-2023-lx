import axios from "axios";
const url = 'https://expressjs-server.vercel.app/tasks'

export async function fetchTasks(){
    return await axios.get(url)
}

export async function postTask(newTask) {
   return await axios.post(url, newTask)
}

export async function deleteTask(id) {
    const taskUrl = `${url}/${id}`
    return await axios.delete(taskUrl)
}

export const updateTask = async (id, updatedTask) => {
    const taskUrl = `${url}/${id}`
    return await axios.patch( taskUrl, updatedTask)
}