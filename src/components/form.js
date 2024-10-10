import { useState } from "react"



function Form(){

    const [name, setName] = useState("");

    //console.log("Current Name: ",name);

    function doWhenSubmitted(e) {
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Current Name: ",name);
    }

    return (
        <>
            <form onSubmit={doWhenSubmitted}>
                Enter your name: 
                <input type="text" onChange={ (e)=>{setName(e.target.value)} }/>
                <input type="submit" value="Submit"/>

            </form>

        </>
        
    )
}

export default Form;