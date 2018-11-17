import Link from 'next/link'
import {signOut} from '../lib/auth'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';

import { Menu } from 'semantic-ui-react'

const fooDBStyle = {
    marginLeft: '8px'
}

const logoStyle = {
    width: '25px'
}

export default class Header extends Component {
  render() {

    return (
      <Menu stackable>
        <Menu.Item>
          <img style={logoStyle} src='https://i.imgur.com/HOACCe3.png' /> <span style={fooDBStyle}><b>FooDB</b></span>
        </Menu.Item>
        <Link href="/">
        <Menu.Item
          name='home'
        >
          Home
        </Menu.Item>
        </Link>
        {this.props.auth ?
            <>
            <Link href="/user">
            <Menu.Item
                name='profile'
            >Profile</Menu.Item>
            </Link>
            <Menu.Item
                name='sign-out'
                onClick={signOut}
            >Sign out</Menu.Item>
            </> : 
            <>
            <Link href="/user/signin">
            <Menu.Item
                name='sign-in'
            >Sign in</Menu.Item>
            </Link>
            <Link href="/user/register">
            <Menu.Item
                name='register'
            >Register</Menu.Item>
            </Link>
            </>
        }
      </Menu>
    )
  }
}
