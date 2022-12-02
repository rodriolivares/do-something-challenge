import { createContext, useState } from "react";

const AuthContext = createContext()
const AuthProvider = ({children}) => {
   const [isAuthenticated, setIsAuthenticated] = useState( localStorage.getItem('isAuthenticated') ? true : false );
   const [userData, setUserData] = useState( localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {} );

   const signUp = (data) => {
      localStorage.setItem('userData', JSON.stringify(data))
      alert('You have successfully registered!')
      setUserData(data)
   }
   
   const logIn = (data) => {
      const { email, password } = userData
      if(email !== data.email) {
         alert('Your email does not exist')
         return
      }
      if(password !== data.password) {
         alert('Your password is incorrect!')
         return
      }
      localStorage.setItem('isAuthenticated', true)
      setIsAuthenticated(true)
   }

   const logOut = () => {
      localStorage.setItem('isAuthenticated', false)
      setIsAuthenticated(false)
   }

   return (
      <AuthContext.Provider
         value={{
            userData,
            isAuthenticated,
            signUp,
            logIn,
            logOut
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}
export {
   AuthProvider
}
export default AuthContext