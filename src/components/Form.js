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
        <div>
           <form onSubmit={onSubmit}>

               <input value={formValues.destination} name="destination" onChange={onChange} />
               <input type="number" name="price" value={formValues.price} onChange={onChange} />

               <button>Add</button>

               

           </form>




        </div>
    )
}

export default Form; 