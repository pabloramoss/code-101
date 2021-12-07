import React, {useState} from "react";

const gifts = ["abundancia","salud","gratitud"]
const submit = (e)=>{
  e.preventDefault();
  const newGift = {
    id: new Date().getTime(),
    text: gift
  }
  setNewGift([...newGift]).concat(newGift);

}
const Xmas = ()=>{
  const [newGift, setNewGift]=useState();
  const giftList = gifts.map((gift,index)=><li key={index}>{gift}</li>);
  
  return (
    <div>
      <h2>REGALOS</h2>
      <form>
        <ul>{giftList}</ul>
        <button onClick={submit}>Agregar</button>
      </form>
    </div>
  );
};

export default Xmas;