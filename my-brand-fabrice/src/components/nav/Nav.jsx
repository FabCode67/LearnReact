import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {FcServices} from 'react-icons/fc'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const {activeNav,setActiveNav}= useState('#')
  return (
    <nav>
    <a href='#' className='active'><AiFillHome/></a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav == '#about'?'active':''}><AiOutlineUser/></a>
    <a href='#experience'><AiFillBook/></a>
    <a href='#services'><FcServices/></a>
    <a href='#contact'><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav