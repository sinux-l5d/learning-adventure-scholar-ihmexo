import React, { useEffect } from "react"
import axios from 'axios';
import ExerciceCard from "./exercice/ExerciceCard";
import "../css/Exercices.css"
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "./exercice/dataSlice"

const Exercices = () => {
    // const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    console.log(data);

    useEffect(() => {
        axios
            .get("http://localhost:3001/exercices")
            .then((res) => {
                dispatch(setData(res.data.exercices));
            });
    },[])

    return (
        <div className="exercices">
            <ul className="liste-exercices">
                {data.exercices.map((exo,key)=>{
                    return (
                        <ExerciceCard data={exo} key={key}/>
                    )
                })}
            </ul>
        </div>
    );
};
export default Exercices;