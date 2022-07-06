import { relativeTimeRounding } from 'moment'
import React, { Fragment } from 'react'
import { useState } from 'react'
import Wrapper from './Wrapper'

const Form = () => {
  const [file, setFile] = useState('')
  const [folder, setFolder] = useState('')

  const submitFolderHandler = (event) => {
    event.preventDefault()
    console.log(folder)
    setFolder('')
  }

  const submitFileHandler = (event) => {
    event.preventDefault()
    console.log(file)
    setFile('')
  }

  const handleFileChange = (event) => {
    setFile(event.target.value)
    // console.log(file)
  }

  const handleFolderChange = (event) => {
    setFolder(event.target.value)
    // console.log(folder)
  }
  return (
    <Wrapper>
      <form onSubmit={submitFileHandler}>
        <label htmlFor='fileInput'>creat new file:</label>
        <input
          onChange={handleFileChange}
          value={file}
          type='text'
          id='fileInput'
        />
        <button type='submit'>Create</button>
      </form>

      <form onSubmit={submitFolderHandler}>
        <label htmlFor='folderInput'>Create new folder:</label>
        <input
          onChange={handleFolderChange}
          value={folder}
          type='text'
          id='folderInput'
        />
        <button type='submit'>Create</button>
      </form>
    </Wrapper>
  )
}

export default Form
