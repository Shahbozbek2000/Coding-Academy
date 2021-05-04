import React from 'react'
import Image from 'next/image'

export function Courses() {
  return (
    <div className="our-portfolio">
      <div className="container">
        <div className="theme-title">
          <h2>Bizning trenddagi kurslarimiz</h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="portfolio-slider">
            <div className="item">
              <div className="image">
                <img src="https://miro.medium.com/max/1200/0*KALTjN6VK2fYSbGA" alt="programming" />
              </div>
              <div className="card-name">
                <h5>WEB DASTURLASH</h5>
              </div>
              <div className="card-mentor">
                <p>Muhammadamin Tolibov</p>
              </div>
              <div className='read-more'>
              <button type="button" className='mentor-btn'>Batafsil</button>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img src="https://pbs.twimg.com/media/DR9lbWGWsAAaqge.jpg" alt="" />
              </div>
              <div className="card-name">
                <h5>ROBOTOTEXNIKA</h5>
              </div>
              <div className="card-mentor">
                <p>Lazizbek</p>
              </div>
              <div className='read-more'>
              <button type="button" className='mentor-btn'>Batafsil</button>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img src="https://superlearningsystem.com/wp-content/uploads/2020/10/Training-For-Adults-1.jpg" alt="" />
              </div>
              <div className="card-name">
                <h5>INGLIZ TILI</h5>
              </div>
              <div className="card-mentor">
                <p>Aziza Yovqocheva</p>
              </div>
              <div className='read-more'>
              <button type="button" className='mentor-btn'>Batafsil</button>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <img src="https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="" />
              </div>
              <div className="card-name">
                <h5>PYTHON</h5>
              </div>
              <div className="card-mentor">
                <p>Axror G'aniyev</p>
              </div>
              <div className='read-more'>
              <button type="button" className='mentor-btn'>Batafsil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
