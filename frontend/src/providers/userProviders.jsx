import { createContext, useEffect, useState } from "react"


export const userContext = createContext(null)

export const UserProvider =({children}) =>{
const [user,setUser] = useState(null)
useEffect(()=>{
    const storedUserString = localStorage.getItem("user");
    if (storedUserString) {
      try {
        const storedUser = JSON.parse(storedUserString);
        setUser(storedUser);
      } catch (error) {
        console.error("Invalid user data in localStorage:", error);
        localStorage.removeItem("user");
      }
    }
},[])
useEffect(()=>{
    if(user){
        localStorage.setItem("user",JSON.stringify(user))
    }else{
        localStorage.removeItem("user")
    }
},[user])
return(
    <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
)
}

