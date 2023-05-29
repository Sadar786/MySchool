import React from "react";
import "./home.css";
import { CTA, Course, Facilities } from "../../components";


const Home = () => {
  return (
    <div>
      <section id="home">
        <h2>Build up your Skills with SKILL STATION</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          voluptatibus maiores cupiditate ut veritatis quisquam, enim inventore
          dolore, eum odit rerum fuga dolor voluptate quos rem repellendus
          explicabo commodi illo?
        </p>
        <div className="btn btn-primery">
          <a className="blue BfontSize" href="#learn-more">
            Learn More
          </a>
          <a className="yellow BfontSize" href="#course">
            Visit Courses
          </a>
        </div>
      </section>
      <Course/>
      <Facilities />
      <CTA />
  
      <footer className="about-footer">
        <p>&copy; 2023 Skill Station. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
