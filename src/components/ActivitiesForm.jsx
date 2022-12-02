import React, { useState } from 'react'
import useActivity from "../hooks/useActivity"
import Alert from "./Alert";

const TYPES = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

const ActivitiesForm = () => {
   const [type, setType] = useState('');
   const [participants, setParticipants] = useState(0);
   const { searchActivity } = useActivity()
   const [alert, setAlert] = useState({});

   const handleSubmit = e => {
      e.preventDefault()
      if(participants < 0) {
         setAlert({
            msg: 'The number of participants must be 1 or more',
            error: true
         })
         setTimeout(() => {
            setAlert({})
         }, 4000);
         return         
      }
      setAlert({})
      searchActivity( type, participants )
   }

   const { msg } = alert

   return (
      <div className="border-solid border-b-2 border-orange-500 pb-10">
         { msg && <Alert alert={alert} />}
         <form
            className=""
            onSubmit={ handleSubmit }
         >
            <h1 className="text-xl">Not necessary, but you can use these filters:</h1>
            <div className="my-5">
               <label 
                  htmlFor="type"
                  className="uppercase text-gray-600 blck text-xl font-bold"
               >Type</label>
               <select 
                  id="type" 
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={type}
                  onChange={e => setType(e.target.value)}
               >
                  <option value="">-- Select --</option>
                  { TYPES.map(type => (
                     <option 
                     key={type} 
                     value={type}
                     >{type}</option>
                  ) ) }
               </select>
            </div>
            <div className="my-5">
               <label 
                  htmlFor="participants"
                  className="uppercase text-gray-600 blck text-xl font-bold"
               >Participants</label>
               <input 
                  type="number" 
                  id="participants" 
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={participants}
                  onChange={e => setParticipants(e.target.value)}
               />
            </div>
            <input
               type="submit"
               className="bg-orange-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors"
               value="Search another Activity"
            />
         </form>
      </div>
   )
}

export default ActivitiesForm