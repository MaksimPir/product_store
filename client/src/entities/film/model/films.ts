import { AxiosResponse } from 'axios';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "app/store/types";
import { responseSlice } from "entities/response";
import { IFilm } from "shared/api";
import  FilmService  from "shared/api/typicode/films";
import { authSlice } from 'entities/user/model';

const initialState:{films:IFilm[]}={
    films:[] as IFilm[]
}
export const filmSlice=createSlice({
    name:'films',
    initialState:initialState,
    reducers:{
        setFilms:(state, action:PayloadAction<IFilm[]>)=>{
            state.films=action.payload
        }
    }

})
export const {setFilms}=filmSlice.actions
export const reducer= filmSlice.reducer
export const fetchFilms =async(dispatch:AppDispatch)=>{
    const {fetching,fetchingStop}=responseSlice.actions
    const {setFilms}=filmSlice.actions
    try{
        dispatch(fetching())
        const response=await FilmService.getAll()
        dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:''}))
        dispatch(setFilms(response.data))
    }
    catch(e:any)
    {
        dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
        console.log(e.response?.data?.message);
    }
}
export const fetchFilmById =async(dispatch:AppDispatch, filmId:number)=>{
    const {fetching,fetchingStop}=responseSlice.actions
    const {setFilms}=filmSlice.actions
    try{
        dispatch(fetching())
        const response=await FilmService.getById(filmId)
        dispatch(fetchingStop({isError:false,isFetching:false,isSuccess:true,answer:'Произведен успешный поиск фильма'}))
        return response.data
    }
    catch(e:any)
    {
        dispatch(fetchingStop({isError:true,isFetching:false,isSuccess:false,answer:e.response.data.message}))
        console.log(e.response?.data?.message);
    }
}

