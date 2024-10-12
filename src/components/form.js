import { useState } from "react";

function Form() {
  const [details, setDetails] = useState({phone:"+91", country:"India", about: "I love coding"});

  //console.log("Current Name: ",name);

  function doWhenSubmitted(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current Name, age and Country: ", details);
  }

  /*comment*
   * Handles the change event for form inputs.
   * Updates the state with the new value of the input field.
   *
   * @param {Event} e - The event object from the input field.
   */
  function handleChange(e){

    const name = e.target.name;
    const value = e.target.value;

    setDetails((previousState)=>{
      return{
        ...previousState , [name] : value // Spread the previous state to retain all existing state properties,
                                          // then update the property specified by 'name' with the new 'value'
      } 

    })
  }

  return (
    <>
      <form onSubmit={doWhenSubmitted}>
        Enter your name:
        <input
          type="text"
          name="name"
          onChange={handleChange}   
        />
        <br />
        Enter your age:
        <input
          type="text"
          name="age"
          onChange={handleChange}
        />
        <br />
        Enter your country:
        <select type="text" name="country" onChange={handleChange} value={details.country}>
          <option value="">Select</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select>
        <br />
        Enter your phone no:
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={details.phone}
        />
        <br/>
        Tell about Yourself:
        <textarea
          name="about"
          onChange={handleChange}
          value={details.about}
        />  
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
