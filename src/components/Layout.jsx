import React from 'react'
import useActivity from "../hooks/useActivity"
import useAuth from "../hooks/useAuth"

const Layout = ({ children }) => {
   const { isAuthenticated, userData, logOut } = useAuth()
   const { changeView } = useActivity()
   
   return (
      <div className="md:w-2/3 lg:w-2/5">
         <div>
            <h1 
               className="text-orange-600 font-black text-6xl capitalize"
               onClick={() => { if(isAuthenticated) changeView() }}
            >Do Something!</h1>
            
            { isAuthenticated && 
               <div className="my-5">
                  <h1 className="font-black text-2xl capitalize">Hi {userData?.name}
                  <span className="text-2xl text-slate-700"> ({userData?.age} years old)</span></h1>
                  <button 
                     onClick={logOut}
                     className="bg-orange-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors
                     block text-center text-sm mt-3"
                  >Log Out</button> 
               </div> 
            }
         </div>
         { children }
      </div>
   )
}

export default Layout