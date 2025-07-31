import axios from "axios";
import { HUGGING_FACE_KEY } from "../keys/keys";
const huggingFaceURL = "https://api.inference.huggingface.co/models"
export const  getHuggingFaceResponse = async (msg: string) =>{
    const response = await axios.post(huggingFaceURL + "/distilgpt2", {
        inputs: msg,
    }, 
    {
        headers:{
            Authorization : `Bearer ${HUGGING_FACE_KEY}`,
            "Content-Type" : "application/json"
        }
        
    })
    return response.data[0]?.generated_text;
};