import React from "react";
import {Routes, Route} from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Equipo from "./Pages/Equipo";
import Partidos from "./Pages/Partidos";

const RouteManager = () =>{
    return (
        <Routes>
            <Route path="/" element={<Inicio />}> </Route>
            <Route path="/Equipo" element={<Equipo></Equipo>}> </Route>
            <Route path="/Partidos" element={<Partidos></Partidos>}> </Route>
        </Routes>

    );
}

export default RouteManager;