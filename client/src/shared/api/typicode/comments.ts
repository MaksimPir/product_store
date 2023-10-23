import axios, { AxiosResponse } from "axios";
import {  ICommentResponse, IFilm, IResponseFilmById } from "./models";
import { API_URL } from "shared/config";

export default  class CommentService
{
    static async getById(id:number):Promise<AxiosResponse<ICommentResponse>>
    {
        return axios.get<ICommentResponse>(`${API_URL}/comment/${id}`)
    }
    static async addComment(idFilm:number, idUser:number, text:string)
    {
        axios.post(`${API_URL}/comment`,{idFilm, idUser,text})
    }
}
