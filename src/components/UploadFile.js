import React, {useState} from 'react'
import axios from "axios"; 

function UploadFile() {
    const [fileData, setFileData] = useState();

    function changeHandler(e) {
        console.log(e.target.files[0])
        setFileData(e.target.files[0])
            
            }
        
        function FileUpload(e){

        e.preventDefault();
        
        const formData = new FormData();
        formData.append("files", fileData);
        
        
        console.log(formData);
        
        axios.post(`http://localhost:1337/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }


    return (
        <div>
            <form onSubmit={FileUpload}>
            <input onChange={changeHandler} type="file" accept="image/png, image/jpeg" name="product" required=""   />

            <button>upload file</button>
            </form>
            
        </div>
    )
}

export default UploadFile


