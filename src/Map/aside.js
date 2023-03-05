
import React from "react";
import Rupee from './Rupee.jpg'
import './aside.css'
const Aside=()=>{
    let currency
  return(<>
  <aside>
    <label>Symbol:<img src={currency}></img></label><br/>
    <label>Unit of Speed:</label><br/>
    <label>Distance:</label><br/>
    <label>Volume:</label><br/>
    <label>Time Zone:</label><br/>
  </aside>
  </>)
}
export default Aside;