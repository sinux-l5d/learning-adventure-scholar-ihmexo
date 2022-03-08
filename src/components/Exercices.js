import React, { useEffect, useState } from "react"
import axios from 'axios';
import ExerciceCard from "./ExerciceCard";
import "../css/Exercices.css"
const Exercices = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/exercices")
            .then((res) => setData(res.data.exercices));
    }, [])
    return (
            <div className="exercices">
            <ul className="liste-exercices">
                {data.map((exo,key)=>{
                    return (
                    <div>
                        <ExerciceCard data={exo}/>
                    </div>
                    )
                })}
            </ul>
        </div>
    );
};
export default Exercices;