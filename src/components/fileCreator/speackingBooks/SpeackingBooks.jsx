
import React, { useState } from 'react'
import axios from "axios"

const SpeackingBooks = () => {
  const [fileName, setFileName] = useState("")
  const [fileOwner, setFileOwner] = useState("")
  const [fileText, setFileText] = useState("")
  const [fileImage, setFileImage] = useState("")
  const [fileView, setFileView] = useState("")
  const [fileDownload, setFileDownload] = useState("")
  const [type, setType] = useState("speackingBooks")

  const sendFile = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/create/speackingBooks`, {
        fileName: fileName,
        fileOwner: fileOwner,
        fileText: fileText,
        fileImage: fileImage,
        fileView: fileView,
        fileDownload: fileDownload,
        type: type
      }).then((createdFile) => console.log(createdFile))
      .catch((err) => console.log(err))
    setFileName("")
    setFileOwner("")
    setFileText("")
    setFileImage("")
    setFileView("")
    setFileDownload("")
    setType("")
  }
  return (
    <div className='ieltsAdmin'>
      <form onSubmit={sendFile}>
        <input onChange={(e) => setFileName(e.target.value)} value={fileName} type="text" placeholder='File Name' />
        <input onChange={(e) => setFileOwner(e.target.value)} value={fileOwner} type="text" placeholder='File Owner' />
        <input onChange={(e) => setFileText(e.target.value)} value={fileText} type="text" placeholder='File Text' />
        <input onChange={(e) => setFileImage(e.target.value)} value={fileImage} type="text" placeholder='File Image' />
        <input onChange={(e) => setFileView(e.target.value)} value={fileView} type="text" placeholder='File view' />
        <input onChange={(e) => setFileDownload(e.target.value)} value={fileDownload} type="text" placeholder='download' />

        <label htmlFor="type">
          <select value={type} onChange={(e) => setType(e.target.value)} id="type">
            <option value="bannerBooks">bannerBooks</option>
            <option value="ieltsBooks">ieltsBooks</option>
            <option value="speackingBooks">speackingBooks</option>
            <option value="readingBooks">readingBooks</option>
            <option value="aduiBooks">aduiBooks</option>
            <option value="programming">Programming</option>

          </select>
        </label>
        <button type='submit'>Send </button>
      </form>
    </div>
  )
}

export default SpeackingBooks