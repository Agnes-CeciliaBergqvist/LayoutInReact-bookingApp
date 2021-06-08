import React, {useState, useEffect} from 'react'
import axios from "axios"; 

function UpdateCard() {


        const initialValues = {
          destination: "",
          description: "",
          price: "",
        };
      
        const [formValues, setFormValues] = useState(initialValues);
        const [fileData, setFileData] = useState(null);
        const [success, setSuccess] = useState(false);
        const idToUpdate = Number(localStorage.getItem("updateTripId"))

        useEffect(() => {
          axios.get(`https://speedo-booking.herokuapp.com/trips/${idToUpdate}`)
          .then(res => {
            console.log("response", res)
            setFormValues({
            destination: res.data.destination,
            description: res.data.description,
            price: res.data.price,
            })
          })
        }, [])
      
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

      
          axios
            .put(`https://speedo-booking.herokuapp.com/trips/${idToUpdate}`, formValues
            )
            .then((res) => {
              if(fileData){
    
              const data = new FormData();
              data.append("files", fileData);
              data.append("ref", "trip");
              data.append("refId", idToUpdate);
              data.append("field", "image");
      
              //Axios request for the img
              axios
                .post("https://speedo-booking.herokuapp.com/upload", data)
                .then((image) => console.log(image))
                .catch((error) => console.log(error));}
            })
            .then(() => {
              setFormValues(initialValues);
              setFileData(null);
              setSuccess(true);
              
            });
        }
        
    return (
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Update trip</h1>

          <form onSubmit={handleOnSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                value={formValues.destination}
                name="destination"
                type="text"
                onChange={handleOnChange}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                placeholder="New destination"
                
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                value={formValues.description}
                name="description"
                type="text"
                onChange={handleOnChange}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                placeholder="New description"
                
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                value={formValues.price}
                name="price"
                type="number"
                onChange={handleOnChange}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                placeholder="New price"
                
              />
            </div>

            <div className="flex w-full h-32 items-center justify-center bg-grey-lighter">
              <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Select a new image
                </span>
                <input
                  name="image"
                  type="file"
                  onChange={handleOnChangeImg}
                  className="hidden"
                />
                
              </label>
            </div>

            <button className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
              Update
            </button>
            {success && (
              <p className="text-green-400 underline py-3 rounded-md mt-1">
                Trip Updated
              </p>
            )}
          </form>
        </div>
      </div>
    )
}

export default UpdateCard
