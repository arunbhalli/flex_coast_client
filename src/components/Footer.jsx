import React from 'react'
import Grid from '@material-ui/core/Grid'
import logo from '../assets/logoWhite.svg'

const Footer = () => {
  return (
    <>
      <Grid data-cy='footer' id='footer' container alignItems='center'>
        <Grid className='footer-header' item xs={12}>
        <img src={logo} alt='logo' className='logo' data-cy='flex-coast' />
          <hr className='top-hr' />
        </Grid>
        <Grid data-cy='footer-categories' container alignItems='flex-start'>
          <Grid data-cy='footer-about' className='sub-header' item sm={4}>
          <h3>About Us</h3>
            <p className='footer-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam neque porro voluptatem nisi dolor debitis deserunt et
              vitae quam odio?
            </p>
            <hr className='sub-hr' />
          </Grid>
          <Grid
            data-cy='footer-contact'
            className='sub-header'
            item
            xs={12}
            sm={4}>
            <h3>Contact</h3>
            <p className='footer-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam neque porro voluptatem nisi dolor debitis deserunt et
              vitae quam odio?
            </p>
            <hr className='sub-hr' />
          </Grid>
          <Grid data-cy='links' className='sub-header' item xs={12} sm={4}>
            <h3>Links</h3>
            <p className='footer-link'>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>link</a>
            </p>
            <p className='footer-link'>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>link</a>
            </p>
            <p className='footer-link'>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>link</a>
            </p>
            <p className='footer-link'>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>link</a>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
