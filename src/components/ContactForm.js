import React from "react"; 

export default function ContactForm() {
    return (
        <div className="h-screen">
            <form className="bg-gray-200">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea placeholder="Enter your message" required />
                </div>
                <button>Send</button>

            </form>
            </div>
            
       
    )
}


