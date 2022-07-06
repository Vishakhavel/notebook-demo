import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

// const items = [
//   getItem('important', 'sub1', <MailOutlined />, [
//     getItem('deadlines', '1'),
//     getItem('notes_stuff', '2'),
//   ]),
//   getItem('React', 'sub2', <MailOutlined />, [
//     getItem('hooks', '3'),
//     getItem('states', '4'),
//   ]),
//   getItem('personal', 'sub3', <MailOutlined />, [
//     getItem('Option 9', '5'),
//     getItem('Option 10', '6'),
//   ]),
//   getItem('nodejs', 'sub4', <MailOutlined />, [
//     getItem('Option 9', '7'),
//     getItem('Option 10', '8'),
//   ]),
//   getItem('empty', 'sub5', <MailOutlined />, []),
// ]

// const items = [{'important', 'sub1', <MailOutlined />,}]

const onClick = (e) => {
  console.log('click', e)
}

const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode='vertical'
    items={items}
  />
)

export default App
