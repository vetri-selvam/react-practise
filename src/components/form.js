import { useState } from "react";

function Form() {
  const [details, setDetails] = useState({});

  //console.log("Current Name: ",name);

  function doWhenSubmitted(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current Name, age and Country: ", details);
  }

  /**
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
        <input
          type="text"
          name="country"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
