import useActivity from "../hooks/useActivity"
import Activity from "../components/Activity";

const ActivitiesList = () => {
  const { changeView, addedActivities } = useActivity()

  return (
    <div className="bg-white shadow rounded-lg p-10">
      <div>
        {addedActivities.map(activity => {
          return (
            <Activity 
              key={activity.key}
              activity={activity}
              added={true}
            />
          )
        })}
      </div>
      <button 
        onClick={ changeView }
        className="bg-orange-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors"
      >Search another activity</button>
    </div>
  )
}

export default ActivitiesList