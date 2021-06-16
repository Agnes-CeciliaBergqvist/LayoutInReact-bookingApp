import React, {useState} from "react"; 

const ContactForm = () => {

    const [status, setStatus] = useState("Submit"); 
    
    
    
    const handleSubmit = async (e) => { 
        e.preventDefault(); 

        setStatus("Sending..."); 
        const { name, email, message} = e.target.elements; 

        let details = { 
            name: name.value, 
            email: email.value, 
            message: message.value
        }

        let response = await fetch("http://localhost:5000/contact", { 
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",

        }, 
        body: JSON.stringify(details), 
        })

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
  };







    return (
        <div className="h-screen">
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
                <form className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-8">CONTACT US</h1>
                    <div>
                        
                        <input type="text" name="name" placeholder="Name" required 
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
                    </div>
                    <div>
                   
                    <input type="email" name="email" placeholder="Email" required
                     className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                    </div>
                    <div>
                     
                        <textarea placeholder="Enter your message" required 
                        className="h-52 pt-3 pb-2 block w-full px-0 mt-2 bg-transparent border-2 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
                 </div>
                 <button className="bg-yellow-200 border-5 rounded-md mt-4 p-1 text-gray-700"type="submit">{status}</button>

                </form>
            </div>
        </div>
            
       
    )
}

export default ContactForm; 


