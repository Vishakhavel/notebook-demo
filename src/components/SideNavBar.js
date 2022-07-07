// import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
// import { useSelector } from 'react-redux'
// import {
//   AppstoreOutlined,
//   FolderOutlined,
//   FileOutlined,
// } from '@ant-design/icons'
// import { Menu } from 'antd'
// import React from 'react'
// import {
//   ADD_FILE,
//   ADD_FOLDER,
//   RENAME_FILE,
//   RENAME_FOLDER,
//   DELETE_FILE,
//   DELETE_FOLDER,
// } from '../constants'

// import store from '../store'
// import { useReducer } from 'react'

// const items2 = [
//   {
//     label: 'folder1',
//     key: Math.random.toString(),
//     icon: <FolderOutlined />,
//     children: [],
//   },
// ]

// const onClick = (e) => {
//   console.log('click', e)
// }

// const SideNavBar = () => {
//   const folders = useSelector((state) => {
//     const folder_data = []
//     for (const item in state) {
//       folder_data.push(state[item])
//     }
//     return folder_data
//   })

//   const fullState = useSelector((state) => state)
//   // console.log(fullState)
//   return (
//     <Menu
//       onClick={onClick}
//       style={{
//         width: 256,
//       }}
//       mode='inline'
//       // items={items2}
//       items={folders}
//     />
//   )
// }

// export default SideNavBar

// // import 'antd/dist/antd.css'
// // import {
// //   AppstoreOutlined,
// //   MailOutlined,
// //   SettingOutlined,
// // } from '@ant-design/icons'
// // import { Menu } from 'antd'

// // import React from 'react'

// // function getItem(label, key, icon, children, type) {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //     type,
// //   }
// // }

// // const items = [
// //   getItem('Navigation One', 'sub1', <MailOutlined />, [
// //     getItem(
// //       'Item 1',
// //       'g1',
// //       null,
// //       [getItem('Option 1', '1'), getItem('Option 2', '2')],
// //       'group'
// //     ),
// //     getItem(
// //       'Item 2',
// //       'g2',
// //       null,
// //       [getItem('Option 3', '3'), getItem('Option 4', '4')],
// //       'group'
// //     ),
// //   ]),
// //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// //     getItem('Option 5', '5'),
// //     getItem('Option 6', '6'),
// //     getItem('Submenu', 'sub3', null, [
// //       getItem('Option 7', '7'),
// //       getItem('Option 8', '8'),
// //     ]),
// //   ]),
// //   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
// //     getItem('Option 9', '9'),
// //     getItem('Option 10', '10'),
// //     getItem('Option 11', '11'),
// //     getItem('Option 12', '12'),
// //   ]),
// // ]

// // const SideNavBar = () => {
// //   const onClick = (e) => {
// //     console.log('click ', e)
// //   }

// //   return (
// //     <Menu
// //       onClick={onClick}
// //       style={{
// //         width: 256,
// //       }}
// //       defaultSelectedKeys={['1']}
// //       defaultOpenKeys={['sub1']}
// //       mode='inline'
// //       items={items}
// //     />
// //   )
// // }

// // export default SideNavBar

import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

const SideNavBar = () => {
  // submenu keys of first level
  var rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

  var state = {
    openKeys: ['sub1'],
  }

  // const onOpenChange = (openKeys) => {
  //   const latestOpenKey = openKeys.find(
  //     (key) => state.openKeys.indexOf(key) === -1
  //   )
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setState({ openKeys })
  //   } else {
  //     setState({
  //       openKeys: latestOpenKey ? [latestOpenKey] : [],
  //     })
  //   }
  // }

  return (
    <Menu
      mode='inline'
      // openKeys={state.openKeys}
      // onOpenChange={onOpenChange}
      style={{ width: 256 }}
    >
      <SubMenu
        key='sub1'
        title={
          <span>
            <Icon type='mail' />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu.Item key='1'>Option 1</Menu.Item>
        <Menu.Item key='2'>Option 2</Menu.Item>
        <Menu.Item key='3'>Option 3</Menu.Item>
        <Menu.Item key='4'>Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        key='sub2'
        title={
          <span>
            <Icon type='appstore' />
            <span>Navigation Two</span>
          </span>
        }
      >
        <Menu.Item key='5'>Option 5</Menu.Item>
        <Menu.Item key='6'>Option 6</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key='sub4'
        title={
          <span>
            <Icon type='setting' />
            <span>Navigation Three</span>
          </span>
        }
      >
        <Menu.Item key='9'>Option 9</Menu.Item>
        <Menu.Item key='10'>Option 10</Menu.Item>
        <Menu.Item key='11'>Option 11</Menu.Item>
        <Menu.Item key='12'>Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default SideNavBar
