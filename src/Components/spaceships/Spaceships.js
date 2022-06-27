// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {useEffect, } from "react";
import {useState} from "react";

import {Spaceship} from "../spaceship/Spaceship";

function Spaceships() {
    const [spaceships, setSpaceships] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => setSpaceships(value.filter(value => value.launch_year !== '2020')))
    },[]);

    return (<div>
        {spaceships.map((spaceship, index) => <Spaceship key={index} item={spaceship}/>)}
        </div>
    );
}


export {Spaceships};