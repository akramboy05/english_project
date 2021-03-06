import React, { useState, useEffect} from 'react'
import "./SinglePage.css"
import axios from 'axios'
import { HomeBooks } from '../../static/homeStatic'
import {useParams, useRouteMatch} from "react-router-dom"


function SinglePage({match}) {
    const { id } = useParams();
    const [singleFile, setSingleFile] = useState(null)
    useEffect (()=>{
  
      axios.get(`http://localhost:4000/create/booksIelts/${id}`)
      .then((bannerFiles)=> setSingleFile(bannerFiles.data))
      .catch((err)=> console.error(err))
    }, [])
    console.log(singleFile)
    return (
    <div className='single_page'>
      <h1>{singleFile?.fileName}</h1>
      <img src={singleFile?.fileImage} alt="" />
    </div>
  )
}

export default SinglePage