import React from 'react'

function Testimonial() {
  return (
    <div>
        <div className="testimonial-section">
    <h2>What Our Clients Say About us  </h2>
   <div className="cardFlex">
   <div className="testimonial-card">
        <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Client 1"/>
        <h3>Client 1</h3>
        <p>"Lorem ipsum dolor sit amet."</p>
    </div>

    <div className="testimonial-card">
        <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Client 2"/>
        <h3>Client 2</h3>
        <p>" adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
    </div>

    <div className="testimonial-card">
        <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Client 3"/>
        <h3>Client 3</h3>
        <p>"Lorem ipsum dolor sit ame eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
    </div>
   </div>
</div></div>
  )
}

export default Testimonial