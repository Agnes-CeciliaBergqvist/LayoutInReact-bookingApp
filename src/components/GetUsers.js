  import React from "react"; 
  import User from "./User"; 

  
//Stateless component 
const GetUsers = () => (
     
             <div className="h-screen bg-white">
                 <div className="bg-white overflow-auto">
                     <table className="min-w-full bg-white">
                         <thead className="bg-gray-800 text-white">
                             <tr>
                                 <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">UserId</th>
                                 <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                                 <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                             </tr>
                         </thead>
                     </table>
                 </div>
                    
                     <User />
                         
             </div>

       
    )

    export default GetUsers

 
