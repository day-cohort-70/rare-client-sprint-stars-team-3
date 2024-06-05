import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import {Tags} from "../components/tags/Tags";
import {MyPosts} from '../components/posts/MyPosts.jsx'
import {AllPosts} from '../components/posts/AllPosts.jsx'
import {Categories} from '../components/categories/Categories.jsx'
import { Home } from "../components/posts/Home.jsx";
import { CategoryForm } from "../components/categories/CategoryForm.jsx";
import { useEffect, useState } from "react";
import PostDetails from "../components/posts/PostDetails.jsx";

export const ApplicationViews = ({ token, setToken }) => {
  
  // const [currentUser, setCurrentUser] = useState({})

  // useEffect(() => {
  //   const localUser = localStorage.getItem("auth_token")
  //   const UserObject = JSON.parse(localUser)
  //   setCurrentUser(UserObject)
  // }, [])
  
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
      <Route index element={<Home />} /> 
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/tags" element={<Tags token={token}/>} />
        
      </Route>
    </Routes>
  </>
}
