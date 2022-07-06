import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { useSelector } from 'react-redux'
import {
  AppstoreOutlined,
  FolderOutlined,
  FileOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import {
  ADD_FILE,
  ADD_FOLDER,
  RENAME_FILE,
  RENAME_FOLDER,
  DELETE_FILE,
  DELETE_FOLDER,
} from '../constants'

import store from '../store'

// const selectorFunction = (state) => state

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('important', 'sub1', <FolderOutlined />, [
    getItem('deadlines', '1', <FileOutlined />),
    getItem('notes_stuff', '2', <FileOutlined />),
  ]),
  getItem('React', 'sub2', <FolderOutlined />, [
    getItem('hooks', '3', <FileOutlined />),
    getItem('states', '4', <FileOutlined />),
  ]),
  getItem('personal', 'sub3', <FolderOutlined />, [
    getItem('Option 9', '5', <FileOutlined />),
    getItem('Option 10', '6', <FileOutlined />),
  ]),
  getItem('nodejs', 'sub4', <FolderOutlined />, [
    getItem('Option 9', '7', <FileOutlined />),
    getItem('Option 10', '8', <FileOutlined />),
  ]),
  getItem('empty', 'sub5', <FolderOutlined />, []),
]

// key, icon, children
// const items = [{'key1', 'important_note', <FileOutlined />},{'key1', 'important_note', <FileOutlined />}
// {'key1', 'important_note', <FileOutlined />}
// {'key1', 'important_note', <FileOutlined />} ]

const onClick = (e) => {
  console.log('click', e)
}

const SideNavBar = () => {
  const folders = useSelector((state) => state)
  console.log(folders)
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      mode='vertical'
      items={items}
    />
  )
}

export default SideNavBar
