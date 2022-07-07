import { relativeTimeRounding } from 'moment'
import React, { Fragment } from 'react'
import { useState } from 'react'
import Wrapper from './Wrapper'
import { useDispatch } from 'react-redux'
import {
  AppstoreOutlined,
  FolderOutlined,
  FileOutlined,
} from '@ant-design/icons'
import store from '../store'
import {
  ADD_FILE,
  ADD_FOLDER,
  RENAME_FILE,
  RENAME_FOLDER,
  DELETE_FILE,
  DELETE_FOLDER,
} from '../constants'

const Form = () => {
  const [file, setFile] = useState('')
  const [folder, setFolder] = useState('')
  const dispatch = useDispatch()

  const submitFolderHandler = (event) => {
    event.preventDefault()
    console.log(folder)
    setFolder('')
    // const payload_object = {
    //   label: folder,
    //   key: Math.random().toString(),
    //   icon: <FolderOutlined />,
    // }
    // console.log(payload_object)

    const payload_object = {
      label: folder,
      key: Math.random.toString(),
      icon: <FolderOutlined />,
      children: [],
    }

    console.log('payload object:', payload_object)
    // ;(payload_object[label] = folder),
    dispatch({ type: ADD_FOLDER, payload: folder })
    // console.log({ store })
  }

  const submitFileHandler = (event) => {
    event.preventDefault()
    console.log(file)
    setFile('')
    dispatch({ type: ADD_FILE, payload: file })
  }

  const handleFileChange = (event) => {
    setFile(event.target.value)
  }

  const handleFolderChange = (event) => {
    setFolder(event.target.value)
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
