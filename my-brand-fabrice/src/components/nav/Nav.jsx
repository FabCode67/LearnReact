import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {FcServices} from 'react-icons/fc'
import {BiMessageDetail} from 'react-icons/bi'
import {AiOutlineLogin} from 'react-icons/ai'
import {ImBlog} from 'react-icons/im'
import { useState } from 'react'
const Nav = () => {
  const {activeNav,setActiveNav}= useState('#')
  return (
    <nav>
    <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiFillHome/></a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
    <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><AiFillBook/></a>
    <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services'?'active':''}><FcServices/></a>
    <a href='#blog' onClick={()=>setActiveNav('#blog')} className={activeNav === '#blog'?'active':''}><ImBlog/></a>
    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageDetail/></a>
    <a href='#login' onClick={()=>setActiveNav('#login')} className={activeNav === '#login'?'active':''}><AiOutlineLogin/></a>
    </nav>
  )
}

export default Nav