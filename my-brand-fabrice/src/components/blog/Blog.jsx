import React from 'react'
import './blog.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Blog = () => {
  return (
    <section id='blog'>
      <h5>My blogs</h5>
      <div className='container blog_container'>
        <article className='blog_item'>
          <div className='blog_item-image'>
          <img src={IMG1} alt='' />
          </div>
          <h3>This is first blog</h3>
          <a href='' className='btn1 btn-primary'>More</a>
        </article>
        <article className='blog_item'>
          <div className='blog_item-image'>
          <img src={IMG2} alt='' />
          </div>
          <h3>This is first blog</h3>
          <a href='' className='btn1 btn-primary'>More</a>
        </article>
        <article className='blog_item'>
          <div className='blog_item-image'>
          <img src={IMG3} alt='' />
          </div>
          <h3>This is first blog</h3>
          <a href='' className='btn1 btn-primary'>More</a>
        </article>
        <article className='blog_item'>
          <div className='blog_item-image'>
          <img src={IMG4} alt='' />
          </div>
          <h3>This is first blog</h3>
          <a href='' className='btn1 btn-primary'>More</a>
        </article>
        <article className='blog_item'>
          <div className='blog_item-image'>
          <img src={IMG5} alt='' />
          </div>
          <h3>This is first blog</h3>
          <a href='' className='btn1 btn-primary'>More</a>
        </article>
        <article className='blog_item'>
          <div className='blog_item-image'>
          <img src={IMG6} alt='' />
          </div>
          <h3>This is first blog</h3>
          <a href='' className='btn1 btn-primary'>More</a>
        </article>
      </div>
    </section>
  )
}

export default Blog