import useAuth from "./hooks/useAuth";
import useActivity from "./hooks/useActivity";
import Layout from "./components/Layout";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import ActivitiesList from "./views/ActivitiesList";

function App() {
  const { isAuthenticated, userData } = useAuth()
  const { viewHome } = useActivity()

  return (
    <div className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <Layout>
        { !isAuthenticated ? 
          userData.name ? <Login /> : <SignUp />
        : 
          viewHome ? <Home /> : <ActivitiesList /> 
        }
      </Layout>
    </div>
  );
}

export default App;
