import { useState } from "react";

function Form() {
  const [details, setDetails] = useState({});

  //console.log("Current Name: ",name);

  function doWhenSubmitted(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current Name, age and Country: ", details);
  }

  return (
    <>
      <form onSubmit={doWhenSubmitted}>
        Enter your name:
        <input
          type="text"
          onChange={(e) => {
            setDetails((previousState) => {
              // Using `previousState` for keeping the rest of the state unchanged while ppdating the 'name' field.
              return { ...previousState, name: e.target.value };
            });
          }}
        />
        <br />
        Enter your age:
        <input
          type="text"
          onChange={(e) => {
            setDetails((previousState) => {
              // Update the 'age' field while keeping the rest of the state unchanged
              return { ...previousState, age: e.target.value };
            });
          }}
        />
        <br />
        Enter your country:
        <input
          type="text"
          onChange={(e) => {
            setDetails((previousState) => {
              // Update the 'country' field while keeping the rest of the state unchanged
              return { ...previousState, country: e.target.value };
            });
          }}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
