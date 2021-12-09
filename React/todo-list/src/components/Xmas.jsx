import React, {useState} from "react";


export default function Xmas(){
  const [gifts, setGifts]=useState(["Medias","Caramelos","Vitel tone"]);

  function handleSubmit(e){
    e.preventDefault();

    const gift = e.currentTarget.gift.value;
    setGifts((gifts)=>gifts.concat(gift));
    e.currentTarget.gift.value="";
  }
//Falta agregar un handleDelete que se ejecute en un onClick

  const giftList = gifts.map((gift, index)=><li key={index}>{gift}<button>X</button></li>)

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Ingresa un regalo"
      name="gift"
      />
      <button type="submit">Agregar</button>
    </form>
    <ul>
      {giftList}
    </ul>

    </div>
  )
};