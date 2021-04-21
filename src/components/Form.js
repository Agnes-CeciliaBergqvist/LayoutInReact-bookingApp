import React, { useState } from "react";

function Form() {
  const initialValues = {
    destination: " ",
    price: " ",
  };

  const [formValues, setFormValues] = useState(initialValues);

  function onSubmit(e) {
    e.preventDefault();
  }

  function onChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit}>
        <label for="price" className="text-sm font-medium text-gray-800">
          Please enter your details:
        </label>
        <div className="mt-2 rounded-md">
            
          <input
            value={formValues.destination}
            name="destination"
            onChange={onChange}
            className="bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Firstname"
          />
          
          <input            
            value={formValues.price}
            name="price"
            onChange={onChange}
            className="bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Lastname"
          />

          <button className="bg-gray-200 ">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
