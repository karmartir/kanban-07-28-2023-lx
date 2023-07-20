import axios from "axios";

export async function fetchStatuses(){
    const response = await axios.get('https://expressjs-server.vercel.app/statuses')
    return response
}
