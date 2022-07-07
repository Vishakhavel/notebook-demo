// import { initial } from 'lodash'
import { createStore } from 'redux'
import { FolderOutlined, FileOutlined } from '@ant-design/icons'
import {
  ADD_FILE,
  ADD_FOLDER,
  RENAME_FILE,
  RENAME_FOLDER,
  DELETE_FILE,
  DELETE_FOLDER,
} from '../constants'

// import { createSlice } from '@reduxjs/toolkit'
// create a store
// create a reducer
// const initialState = {
//   folder1: [
//     {
//       notes_id: 'udicvujchdji',
//       title: 'file 1',
//       content: '<div>hi</div>',
//       raw_content: 'hi',
//     },
//     {
//       notes_id: 'udicvujchdji',
//       title: 'file 2',
//       content: '<div>hi</div>',
//       raw_content: 'hi',
//     },
//   ],
//   folder2: [
//     {
//       notes_id: 'udicvujchdji',
//       title: 'file 1',
//       content: '<div>hi</div>',
//       raw_content: 'hi',
//     },
//   ],
//   folder_3: [
//     {
//       notes_id: 'udicvujchdji',
//       title: 'file 1',
//       content: '<div>hi</div>',
//       raw_content: 'hi',
//     },
//     {
//       notes_id: 'udicvujchdji',
//       title: 'file 1',
//       content: '<div>hi</div>',
//       raw_content: 'hi',
//     },
//     {
//       notes_id: 'udicvujchdji',
//       title: 'file 1',
//       content: '<div>hi</div>',
//       raw_content: 'hi',
//     },
//   ],
// }

const initialState = {
  folder_1: {
    label: 'folder1',
    icon: <FolderOutlined />,
    key: Math.random().toString(),
    children: [],
  },

  folder_2: {
    label: 'folder2',
    icon: <FolderOutlined />,
    key: Math.random().toString(),
    children: [],
  },

  folder_3: {
    label: 'folder3',
    icon: <FolderOutlined />,
    key: Math.random().toString(),
    children: [],
  },
}

const folderReducer = (state = initialState, action) => {
  if (action.type === ADD_FOLDER) {
    const new_state = {
      ...state,
    }

    const folderName = action.payload

    // const new_folder_object = {
    //   label: action.payload,
    //   key: Math.random.toString(),
    //   icon: <FolderOutlined />,
    //   children: [],
    // }

    // new_state.push({
    //   label: action.payload,
    //   key: Math.random.toString(),
    //   icon: <FolderOutlined />,
    //   children: [],
    // })

    // new_state.folderName  = {
    //   label: folderName,
    //   icon: <FolderOutlined />,
    //   key: Math.random().toString(),
    //   children: [],
    // }

    new_state[folderName] = {
      label: folderName,
      icon: <FolderOutlined />,
      key: Math.random().toString(),
      children: [],
    }
    console.log(new_state)
    return new_state
  }
  // if (action.type === DELETE_FILE) {
  //   return {
  //     folders: state.folders.concat([
  //       { name: action.folderName, children: [] },
  //     ]),
  //   }
  // }
  // if (action.type === DELETE_FOLDER) {
  //   return {
  //     folders: state.folders.concat([
  //       { name: action.folderName, children: [] },
  //     ]),
  //   }
  // }
  // if (action.type === RENAME_FILE) {
  //   return {
  //     folders: state.folders.concat([
  //       { name: action.folderName, children: [] },
  //     ]),
  //   }
  // }
  // if (action.type === RENAME_FOLDER) {
  //   return {
  //     folders: state.folders.concat([
  //       { name: action.folderName, children: [] },
  //     ]),
  //   }
  // }
  else {
    return state
  }
}

const store = createStore(folderReducer)

export default store

// you can use state.counter++ return state in redux, but that would mutate the existing state. because objects and arrays are reference values in javascript. UNPREDICATBLE BEHAVIOURS, BUGS!
