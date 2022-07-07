import { createStore } from 'redux'
import { FileOutlined } from '@ant-design/icons'
import {
  ADD_FILE,
  ADD_FOLDER,
  RENAME_FILE,
  RENAME_FOLDER,
  DELETE_FILE,
  DELETE_FOLDER,
} from '../constants'

const initialState = {
  folder_1: {
    label: 'folder1',
    icon: '<FileOutlined />',
    key: Math.random().toString(),
    children: [],
  },

  folder_2: {
    label: 'folder2',
    icon: '<FileOutlined />',
    key: Math.random().toString(),
    children: [
      {
        label: 'note1',
        key: Math.random().toString(),
        icon: '<FileOutlined />',
      },
      {
        label: 'note2',
        key: Math.random().toString(),
        icon: '<FileOutlined />',
      },
      {
        label: 'note3',
        key: Math.random().toString(),
        icon: '<FileOutlined />',
      },
    ],
  },

  folder_3: {
    label: 'folder3',
    icon: '<FileOutlined />',
    key: Math.random().toString(),
    children: [
      {
        label: 'note4',
        key: Math.random().toString(),
        icon: '<FileOutlined />',
      },
      {
        label: 'note5',
        key: Math.random().toString(),
        icon: '<FileOutlined />',
      },
    ],
  },
}

const folderReducer = (state = initialState, action) => {
  if (action.type === ADD_FOLDER) {
    const new_state = {
      ...state,
    }
    const folderName = action.payload
    new_state[folderName] = {
      label: folderName,
      icon: '<FileOutlined />',
      key: Math.random().toString(),
      children: [],
    }
    // console.log(new_state)
    return new_state
  }
  if (action.type === ADD_FILE) {
    const fileName = action.payload.fileName
    const folderName = action.payload.folderName
    const new_state = {
      ...state,
      [folderName]: {
        ...state[folderName],
        children: [
          ...state[folderName].children,
          {
            label: [fileName],
            icon: '<FileOutlined />',
            key: Math.random().toString(),
          },
        ],
      },
    }

    return new_state
  } else {
    return state
  }
}

const store = createStore(folderReducer)

export default store
