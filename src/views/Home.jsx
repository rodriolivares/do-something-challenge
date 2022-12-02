import { useEffect } from 'react'
import ActivitiesForm from "../components/ActivitiesForm";
import Activity from "../components/Activity";
import useActivity from "../hooks/useActivity";

const Home = () => {
  const { changeView, searchActivity, activity } = useActivity()

  useEffect(() => {
    searchActivity('', 0)
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-10">
      <ActivitiesForm />
      <Activity activity={activity} added={false} />
      <button 
        onClick={changeView}
        className="bg-orange-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors"
      >Activities to do</button>
    </div>
  )
}

export default Home