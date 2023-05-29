import React from 'react'
import './about.css'
import meating from "../../assets/meeting.jpg"

function About() {
  return (
    <div>
    <section id="home">
      <h2>About Us</h2>
    </section>

    <section class="footer ">
      <h1 >About us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        impedit, quibusdam, nesciunt itaque, in sapiente dignissimos quo
        accusamus magnam odit optio suscipit culpa fugit consectetur ea dolorum
        iusto assumenda distinctio.<br />impedit, quibusdam, nesciunt itaque, in
        sapiente dignissimos quo accusamus magnam odit optio suscipit culpa
        fugit consectetur ea dolorum iusto assumenda distinctio.<br />impedit,
        quibusdam, nesciunt itaque, in sapiente dignissimos quo accusamus magnam
        odit opt consectetur ea dolorum iusto assumenda distinctio.<br />impedit,
        quibusdam, nesciunt itaque, in sapiente dignissimos quo accusamus magnam
        odit optio
      </p>
      <img src={meating} class="meeting-img" />
      <h1>Serving years</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        impedit, quibusdam, nesciunt itaque, in sapiente dignissimos quo
        accusamus magnam odit optio suscipit culpa fugit consectetur ea dolorum
        iusto assumenda distinctio.<br />impedit, quibusdam, nesciunt itaque, in
        sapiente dignissimos quo accusamus magnam odit optio suscipit culpa
        fugit consectetur ea dolorum iusto assumenda distinctio.<br />impedit,
        quibusdam, nesciunt itaque, in sapiente dignissimos quo accusamus magnam
        odit opt consectetur ea dolorum iusto assumenda distinctio.<br />impedit,
        quibusdam, nesciunt itaque, in sapiente dignissimos quo accusamus magnam
        odit optio
      </p>
      <h1>Events</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        impedit, quibusdam, nesciunt itaque, in sapiente dignissimos quo
        accusamus magnam odit optio suscipit culpa fugit consectetur ea dolorum
        iusto assumenda distinctio.<br />impedit, quibusdam, nesciunt itaque, in
        sapiente dignissimos quo accusamus magnam odit optio suscipit culpa
        fugit consectetur ea dolorum iusto assumenda distinctio.<br />impedit,
        quibusdam, nesciunt itaque, in sapiente dignissimos quo accusamus magnam
        odit opt consectetur ea dolorum iusto assumenda distinctio.<br />impedit,
        quibusdam, nesciunt itaque, in sapiente dignissimos quo accusamus magnam
        odit optio
      </p>
      <h1>Contact us to Explore more</h1>
      <a href="#" class="explore-btn">Explore more</a>
    </section>
    <footer class="about-footer">
      <p>&copy; 2023 Your Company Name. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default About
