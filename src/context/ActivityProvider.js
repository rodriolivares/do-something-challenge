import axios from "axios";
import { createContext, useState } from "react";

const ActivityContext = createContext()
const ActivityProvider = ({children}) => {
   const [activity, setActivity] = useState({});
   const [addedActivities, setAddedActivities] = useState([]);
   const [viewHome, setViewHome] = useState(true);

   const changeView = () => {
      setViewHome(!viewHome)
   }

   const searchActivity = async (type, participants) => {
      let url
      if( (type.length && participants > 0) ) {
         url = `http://www.boredapi.com/api/activity?type=${type}&participants=${participants}`
      } else if( !(type.length) && participants > 0 ) {
         url = `http://www.boredapi.com/api/activity?participants=${participants}`
      } else if( type.length && participants < 1 ) {
         url = `http://www.boredapi.com/api/activity?type=${type}`
      } else {
         url = 'http://www.boredapi.com/api/activity'
      }
      try {
         const { data } = await axios.get(url)
         if(addedActivities.some(activity => activity.key === data.key)) {
            searchActivity(type, participants)
         } else {
            data.complete = false
            setActivity(data);
         }
      } catch (error) {
         console.log(error);
      }
   }

   const addToList = () => {
      if(addedActivities.some(act => act.key === activity.key)) {
         alert('You have this activity in your list.')
         return
      } else {
         setAddedActivities([ ...addedActivities, activity ])
         alert('You have successfully added this activity to your list!')
      }
   }

   const deleteFromList = (key) => {
      const actualList = addedActivities.filter( activity => activity.key !== key)
      setAddedActivities(actualList)
      alert('You have successfully removed this activity from your list!')
   }

   const changeState = (activity) => {
      activity.complete = !activity.complete

      const actualList = addedActivities.map( activityState => activityState.key === activity.key ? activity : activityState)

      setAddedActivities(actualList);
   }

   return (
      <ActivityContext.Provider
         value={{
            viewHome,
            activity,
            addedActivities,
            changeView,
            searchActivity,
            addToList,
            deleteFromList,
            changeState
         }}
      >
         {children}
      </ActivityContext.Provider>
   )
}
export {
   ActivityProvider
}
export default ActivityContext