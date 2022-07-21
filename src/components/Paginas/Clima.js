import { Container } from "@mui/material";
import React, {useEffect, useState,useRef} from "react";


export const Clima = () => {

    const [data,setdata]=useState({
        id_city:"",
        name_city:"",
        temperatura:"",
        humedad:"",
        
    })
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setdata(newdata);
        console.log(newdata);
    }

    //GET
    const url='https://localhost:44304/api/clima'
    const [todos,setTodos]= useState()
    const fecthApi = async () =>{
        const response = await fetch(url)
        const responseJSON=await response.json()
        setTodos(responseJSON)
    }

useEffect(()=>{
    fecthApi();
},[])


    return(
        <>
        <h4>Climas</h4>
        
        <div className="Climas">
        <Container>
            
            
            
            <table className="table">
                <thead>
                    <tr>
                        
                        <th>Ciudad</th>
                        <th>Temperatura</th>
                        <th>Humedad</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                    
                    
                    
                    {!todos ? 'Cargando...':todos.map((todos,index)=>{
                        return <tr>
                            
                            <td>{todos.name_city}</td>
                            <td><strong>{todos.temperatura}</strong></td>
                            <td>{todos.humedad}</td>
                            

                        </tr>
                    })}
                    
                </tbody>
            </table>

        </Container>
        </div>


        </>
    )

}