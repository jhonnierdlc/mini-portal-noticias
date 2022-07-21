import { Container } from "@mui/material";
import React, { useState, useEffect,useRef } from "react";
import {Axios, axios} from 'axios';
import { Card, Button } from "antd";
import { Components } from "antd/lib/date-picker/generatePicker";
const { Meta } = Card;


export const Noticias = () => {
    
    const[articles,setArticles]=useState([]);

    useEffect(()=>{
      const getArticles= async ()=>{
        const res=await Axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4cd59bba9a0433aadec266ce62d7133");

        console.log(res);
      }
      getArticles();
    })
    
    return (
        <>
          <h4>Noticias Actuales</h4>
        </>

    )
}