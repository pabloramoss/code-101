import React,{useState} from "react";

function Contador(){
  const [contador, setContador]=useState(0);
  const sumar = ()=>setContador(contador+1);
  const restar = ()=>setContador(contador-1);

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <h2>{contador}</h2>
    </div>
  );
};

export default Contador;