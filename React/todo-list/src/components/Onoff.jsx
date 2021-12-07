import React, {useState} from "react";

function Onoff(){
  const [onoff, setOnoff]=useState("Apagado");
  const on = ()=>setOnoff("Encendido");
  const off = ()=>setOnoff("Apagado");
  const puerco = function(){
    if(onoff==="Encendido"){
      setOnoff("Apagado")

    }else{
      setOnoff("Encendido");

    }
  };
  return (
    <div>
      <h2>{onoff}</h2>
      <button onClick={on}>Encender</button>
      <button onClick={off}>Apagar</button>
      <button onClick={puerco}>On/Off</button>
    </div>
  )
}




export default Onoff;