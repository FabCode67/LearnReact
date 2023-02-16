import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Blog/>
        <Contact/>
        <Login/>
        <Footer/>
    </>
  )
}

export default App