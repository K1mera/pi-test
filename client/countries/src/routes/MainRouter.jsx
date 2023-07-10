import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LandingPage } from "../pages/LandingPage";
import {NavBar} from "../UI/components/NavBar";
import {CountriesRoutes} from "../countries/router/CountriesRoutes";



export const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path='/*' element={ <CountriesRoutes /> } />
    </Routes>
    </>
  )
}
