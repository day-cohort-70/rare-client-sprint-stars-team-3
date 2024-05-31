import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import {Tags} from "../components/tags/Tags";
import {MyPosts} from '../components/posts/MyPosts.jsx'
import {AllPosts} from '../components/posts/AllPosts.jsx'
import {Categories} from '../components/categories/Categories.jsx'
import { CategoryForm } from "../components/categories/CategoryForm.jsx";
import { useEffect, useState } from "react";

export const ApplicationViews = ({ token, setToken }) => {
  
  const [currentUser, setCurrentUser] = useState({})


  useEffect(() => {
    const localUser = localStorage.getItem("auth_token")
    const UserObject = JSON.parse(localUser)
    setCurrentUser(UserObject)
  }, [])

  
  
  
  
  
  
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
      <Route index element={<AllPosts />} /> 
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category-form" element={<CategoryForm currentUser={currentUser}/>}/>
        
        <Route path="/tags" element={<Tags />} />
        
      </Route>
    </Routes>
  </>
}
