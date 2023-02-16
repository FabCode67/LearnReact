import React from 'react'
import './login.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Login = () => {
  return (
    <section id='login'>
        <h5>Login Here</h5>
    <div className='container login_container'>
        <div className='login_options'>
            <article className='login_option'>
            <AiOutlineMail className='login_option-icon'/>
              <h4><a href='mailto:fab@gmail.com'>Login via Email</a> </h4>  
            </article>
            <article className='login_option'>
            <AiFillFacebook className='login_option-icon'/>
              <h4><a href='http://facebook.com'>Login Via Facebook</a> </h4>  
            </article>
            <article className='login_option'>
            <AiFillGithub className='login_option-icon'/> 
              <h4><a href='http://github.com'>Login Via github</a> </h4>  
            </article>
        </div>

        <form action=''>
            <input type='text' name='name' placeholder='username' required/>
            <input type='password' name='password' placeholder='password' required/>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
    </div>

    </section>

  )
}

export default Login