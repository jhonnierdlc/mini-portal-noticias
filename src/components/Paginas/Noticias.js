import { Container } from "@mui/material";
import React, { useState, useEffect,useRef } from "react";
import {axios} from 'axios';
import { Card, Button } from "antd";
const { Meta } = Card;


export const Noticias = () => {
    
    const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=co&apiKey=b4cd59bba9a0433aadec266ce62d7133"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);
    
    
    return (
        <>
          <h4>Noticias Actuales</h4>
        </>

    )
}