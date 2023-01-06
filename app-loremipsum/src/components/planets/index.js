import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./Form";

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1];
        setPlanets([...planets, last_planet]);
    }


    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

        return (
            <Fragment>
                <h3>Planet List</h3>
                <hr />
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={duplicateLastPlanet}>Duplicate Last</button>
                <hr />
                    <Form addPlanet={addPlanet}/>
                <hr />

                {planets.map((planet, index) => 
                    
                    <Planet 
                        id={planet.id}
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                        key={index}
                     />
                    
                )}
                
            </Fragment>
        )

}


export default Planets;