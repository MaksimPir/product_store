import LoginPage from "../pages/LoginPage/LoginPage"
import MainPage from "../pages/MainPage/MainPage"
import UserPage from "../pages/UserPage/UserPage"


interface IRoute{
    path:routesEnum,
    component:React.ComponentType
}
export enum routesEnum{
    LOGIN='/login',
    MAIN='/main',
    USER='/user'
} 
export const publicRoutes:IRoute[]=[
    {
        path:routesEnum.LOGIN,
        component:LoginPage
    },
    {
        path:routesEnum.MAIN,
        component:MainPage
    }
]

export const authRoutes:IRoute[]=[
    {
        path:routesEnum.USER,
        component:UserPage
    },
    {
        path:routesEnum.MAIN,
        component:MainPage
    }
]