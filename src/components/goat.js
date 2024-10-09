import '../style.css'
import { useState } from "react";

function Goat(){

    const [goat, setGoat] = useState({name:'Cristiano Ronaldo', country: 'Portugal'});
    const [color, setColor] = useState('red');

    return(
        <> 
            <h1>Who is the G.O.A.T ?</h1>
            <h2 style={{color: color}}>{goat.name}, his country is {goat.country}</h2>
            <button onClick={()=> { setGoat({name:1, country:'Argentina'});
                                    setColor('gold') }}>
                Nice joke. click to see REAL G.O.A.T? 
            </button>
        </>
    )
}


export default Goat;