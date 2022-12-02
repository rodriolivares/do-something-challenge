import React from 'react'
import useActivity from "../hooks/useActivity"

const Activity = ({ activity, added }) => {
   const { addToList, deleteFromList, changeState } = useActivity()

   const { activity: name, accesibility, type, participants, price, link, key, complete } = activity

   if(activity) return (
      <div className="my-10 border-solid border-b-2 border-orange-500 pb-5">
         <p className="font-bold text-xl">{name}</p>
         <div className="my-5">
            {type && <div className="flex justify-start items-center">
               <p
                  className="text-lg mx-2 mr-7"
               >Type: {type} </p>
               <img 
                  src={`images/${type}.svg`} 
                  alt={`Type: ${type}`} 
                  className="w-10"
               />
            </div>}
            {accesibility && <p
               className="text-lg mx-2"
            >Accesibility: {accesibility}</p>}
            {participants && <p
               className="text-lg mx-2"
            >Participants: {participants}</p>}
            {price && <p
               className="text-lg mx-2"
            >Price: {price}</p>}
            {link && <p
               className="text-lg mx-2 break-words"
            >Link: {link}</p>}
         </div>
         { !added ? <button 
               onClick={ addToList }
               className="bg-orange-700 mb-5 p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors"
            >Add to list</button> 
         : <div>
            <button 
               onClick={() => changeState(activity)}
               className={`bg-${ complete ? 'green'  : 'orange'}-600 hover:bg-${complete ? 'green' : 'orange'}-800 mb-5 p-3 text-white uppercase font-bold rounded hover:cursor-pointer transition-colors mx-3`}
            >{ complete ? 'Complete' : 'Incomplete'}</button>
             <button 
               onClick={ () => deleteFromList(key) }
               className="bg-orange-700 mb-5 p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors mx-3"
            >Remove from list</button> 
         </div> }
      </div>
   )
}

export default Activity