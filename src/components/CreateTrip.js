import React, {useState} from 'react'

function CreateTrip() {

    const initialValues = {
        destination: "", 
        description: "", 
        price: "", 
        file: ""
      }
      const initialFileValues = { 
          file: ""
      }
    
      const [formValues, setFormValues] = useState(initialValues);
      const [fileValues, setFileValues] = useState(initialFileValues)

    
      function handleOnSubmit(e) {
        e.preventDefault();
        
        console.log("fileUpload.handleOnSubmit", e.target.files[0])
        console.log(fileValues)
        
       
      }
    
      function handleOnChange(e) {
        
        console.log("fileUpload.handleOnChange", e.target.files)
          
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
          
        });
        setFileValues({...fileValues,[e.target.files]:e.target.value})
        
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
              <div class="md:w-2/3">
                <input
                  value={formValues.destination}
                  name="destination"
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
                <div class="md:w-2/3">
                  <input
                    value={formValues.description}
                    name="description"
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
                <div class="md:w-2/3">
                  <input
                    value={formValues.price}
                    name="price"
                    onChange={handleOnChange}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    placeholder="Enter price"
                  />
                </div>
              </div>
              <input name="file" type="file" value={formValues.file} onChange={handleOnChange}></input>
              
              
              <button className="m-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Add
              </button>
             
            </div>
          </form>
        </div>
      );
}






    

export default CreateTrip
