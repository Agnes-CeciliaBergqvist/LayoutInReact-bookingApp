import React, {useState} from "react";


function Form() { 

const initialValues = {
    destination: " ",
    price: " "
    
}

const [formValues,setFormValues] = useState(initialValues)

function onSubmit(e) {
    e.preventDefault();


}

function onChange(e) { 
    setFormValues( {
        ...formValues,
        [e.target.name]:e.target.value
    })


}

    return(
        // <div>
        //    <form onSubmit={onSubmit}>

        //        <input value={formValues.destination} name="destination" onChange={onChange} />
        //        

        //       

               

        //    </form>




        // </div>

<div>
    <form onSubmit={onSubmit}>
<label for="price" class="block text-sm font-medium text-gray-800">Please enter your details:</label>
<div class="mt-1 relative rounded-md shadow-sm">
  
  <input value={formValues.destination} name="destination" onChange={onChange}  class="focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Firstname"/>
  <input type="number" name="price" value={formValues.price} onChange={onChange} class="focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Lastname" />

  <button>Add</button>
</div>
</form>
</div>

       
  

    )
}

export default Form; 