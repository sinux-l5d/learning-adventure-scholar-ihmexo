import React, { useEffect } from "react";
import axios from "axios";
import ExerciceCard from "./exercice/ExerciceCard";
import "../css/Exercices.css";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./exercice/dataSlice";
import { Grid } from "@mui/material";

const Exercices = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    axios.get("http://localhost:3001/exercices").then((res) => {
      dispatch(setData(res.data.exercices));
    });
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ paddingTop: "50px", justifyContent: "center" }}
    >
      {data.exercices.map((exo, key) => {
        return (
          <Grid item key={key}>
            <ExerciceCard data={exo} key={key} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Exercices;
