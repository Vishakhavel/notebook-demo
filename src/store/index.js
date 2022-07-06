// import { initial } from 'lodash'
import { createStore } from 'redux'
// import { createSlice } from '@reduxjs/toolkit'
// create a store
// create a reducer
const initialState = {
  folders: [
    {
      name: 'folder1',
      id: 'fid1',
      files: [
        {
          title: 'file1',
          id: 'id1',
          content: ' content of file1',
          raw_content: ' <div>content of file1</div>',
          timestamp: 'time_goes_here',
          tags: ['important', 'work'],
        },
        {
          title: 'file2',
          id: 'id2',
          content: 'content of file2',
          raw_content: ' <div>content of file2</div>',
          timestamp: 'time_goes_here',
          tags: ['personal'],
        },
        {
          title: 'file3',
          id: 'id3',
          content: 'content of file3',
          raw_content: ' <div>content of file3</div>',
          timestamp: 'time_goes_here',
          tags: ['reminders'],
        },
      ],
    },
    {
      name: 'folder2',
      id: 'fid2',
      files: [
        {
          title: 'file1',
          id: 'id1',
          content: ' content of file1',
          raw_content: ' <div>content of file1</div>',
          timestamp: 'time_goes_here',
          tags: ['learning', 'work'],
        },
      ],
    },
    {
      name: 'folder3',
      id: 'fid3',
      files: [],
    },
  ],
}
const folderReducer = (state = initialState, action) => {
  if (action.type === 'ADD_FOLDER') {
    return {
      folders: state.folders.concat([
        { name: action.folderName, children: [] },
      ]),
      // counter: state.counter + 1,
      // showCounter: state.showCounter,
      // even though in this action we don't really care about the showCounter variable state, we have to enter it here because redux simply overwrites the old state with what you return here!
    }
  } else {
    return state
  }
}

const store = createStore(folderReducer)

export default store

// you can use state.counter++ return state in redux, but that would mutate the existing state. because objects and arrays are reference values in javascript. UNPREDICATBLE BEHAVIOURS, BUGS!
