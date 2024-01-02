import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="footer-icons">
        <a href="#" target="_blank"> <i class="fa fa-facebook"></i> </a>
        <a href="#" target="_blank"> <i class="fa fa-twitter"></i> </a>
        <a href="#" target="_blank"> <i class="fa fa-instagram"></i> </a>
        <a href="#" target="_blank"> <i class="fa fa-linkedin"></i> </a>
    </div>
    <div className='footer-Links'>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    </div>
    <p>&copy; 2023 Your Website. All rights reserved.</p>
</footer>
  )
}

export default Footer