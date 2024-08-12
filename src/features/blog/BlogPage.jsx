import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBlogs} from "./blogSlice"
import { nanoid } from "@reduxjs/toolkit"
import { faker } from "@faker-js/faker"



const BlogPage = () => {

  const {blogs}=useSelector((state)=>state.blogSlice)
  
  const dispatch = useDispatch()
  console.log(blogs)
  return (
    <div>
      <h1>hi</h1>
      <button onClick={()=>{
        dispatch(addBlogs({
          id:nanoid(),
          user:faker.animal.bird(),
          email:faker.internet.emoji()

        }))
      }}>Add Blog</button>
      
    </div>
  )
}
export default BlogPage