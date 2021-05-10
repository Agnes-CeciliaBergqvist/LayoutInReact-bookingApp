import React, {useState} from 'react';
import axios from "axios"; 

function CreateTrip() {

    const initialValues = {
        destination: "", 
        description: "", 
        price: 0
        
      }
     
    
      const [formValues, setFormValues] = useState(initialValues);
      const [fileData, setFileData] = useState(); 
      
      
    
      function handleOnChange(e) {
        
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
          
        }); 
      
      }
      function handleOnChangeImg(e) {
        
      
          
          setFileData(e.target.files[0]); 
          
        
      
      }


      function handleOnSubmit(e) {
        e.preventDefault();
       

        axios.post('http://localhost:1337/trips', {
            destination:formValues.destination,
            description:formValues.description,
            price:formValues.price
            //image: "http://localhost:1337/admin/plugins/upload" + formvalues.tripImage //Bilduppladdning funkar ej
            

        } ).then((res)=>{
            console.log(res.data)

            const data = new FormData();
            data.append("files", fileData) 
            //Vilken collection? 
            //Vilken docs i collection? 
            //Vilken field i collection? 
            data.append("ref", "trip")
            data.append("refId", res.data.id) //så att vi kan spara så den vet vilden den ska tillhöra
            data.append("field", "image") 

          //En till axios request för bilden
          axios.post("http://localhost:1337/upload", data)
          .then((image) => console.log(image))
          .catch((error) => console.log(error))



        }).then((err)=>{
            console.log('Well done');
            console.log(err)
        })
        
        
    
       
      }
    
      return (
        <div className="flex justify-center bg-white mt-8 mx-96 rounded">
          <form onSubmit={handleOnSubmit}>
            <label className="text-l font-medium text-gray-800">
              Add a new trip below: 
            </label>
            <div className="mt-2 rounded-md">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Destination: 
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  value={formValues.destination}
                  name="destination"
                  type="text"
                  onChange={handleOnChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Enter destination"
                />
              </div>
              <div className="mt-2 rounded-md">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Description: 
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    value={formValues.description}
                    name="description"
                    type="text"
                    onChange={handleOnChange}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    placeholder="Enter description"
                  />
                </div>
              </div>
              <div className="mt-2 rounded-md">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Price: 
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    value={formValues.price}
                    name="price"
                    type="number"
                    onChange={handleOnChange}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    placeholder="Enter price"
                  />
                </div>
              </div>
              <input name="image" type="file" onChange={handleOnChangeImg}></input>
              
              
              <button className="m-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Add
              </button>
             
            </div>
          </form>
        </div>
      );
}






    

export default CreateTrip
