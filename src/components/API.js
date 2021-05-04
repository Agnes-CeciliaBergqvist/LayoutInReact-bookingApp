import React, {useEffect, useState} from "react"; 
import axios from "axios"; 

function API() { 

    const [data, setData] = useState([]); 

    useEffect(() => { 

        const fetchData = async() => { //denna funktionen måste ligga inuti useEffect annars funkar det ej
            try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")

            console.log(response.data)
            const res = response.data

            setData(res)
    
        }
        catch(err) {
            console.log(err)
        }
        }

        fetchData(); 


    }, []); 

    return( 
        <div>
            {data.map((singleData) => { 
                return <h1>{singleData.title}</h1>
            })}
            <button className="border black" >Klicka här </button>
            Detta är en API
        </div>
    )
}

export default API; 