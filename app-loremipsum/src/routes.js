import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";
import NotFoundScreen from "./screens/notFound";

const RoutesScreen = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen/>}/>
            <Route exact path='/planet/:id' element={<PlanetScreen/>}/>
            <Route path='*' element={<NotFoundScreen/>}/>

        </Routes>
    </BrowserRouter>
)

export default RoutesScreen;