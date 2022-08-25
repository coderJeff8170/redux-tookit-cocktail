import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleCocktail } from "../redux/features/cocktailSlice";
import { Link, useParams } from "react-router-dom";//if the route uses a parameter, you need useParams hook

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector();//access the store/state
  const dispatch = useDispatch();

  
  return (
    <div>
      <h2>SingleCocktail</h2>
    </div>
  );
};

export default SingleCocktail;
