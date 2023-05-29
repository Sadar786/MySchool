import React from "react";
import "./courses.css";
import { CTA, Course, Facilities } from "../../components";
import playImage from "../../assets/playground.jpg";
import labImage from "../../assets/lab.jpg";
import libraryImage from "../../assets/library.jpg";

function Courses() {
  return (
    <div>
      <section id="home">
        <h2>Our Courses</h2>
      </section>

      <Course />
      <div class="criteria">
        <h2>General Eligibility:</h2>
        <p>
          Sixteen years of schooling or 4 years education after HSSC/A’ Level in
          relevant discipline with minimum CGPA of 2.0 out of 4.0 OR 55% marks
          (percentage will only be considered if CGPA is not mentioned on the
          transcript).
        </p>
        <p>
          GAT (General) conducted on or after 01 May 2021 till May 2023 by NTS
          with at least 50 accumulative test score or Higher Education Aptitude
          Test (HAT) conducted by HEC in or after May 2022 till May 2023 with at
          least 50 accumulative test score or GRE (General) conducted by ETS,
          USA, with following minimum score separately in each section:-
        </p>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Scale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quantitative</td>
              <td>151/170</td>
            </tr>
            <tr>
              <td>Verbal</td>
              <td>146/170</td>
            </tr>
            <tr>
              <td>Analytical Writing</td>
              <td>3.5/6.0</td>
            </tr>
          </tbody>
        </table>
        <p>
          Bachelors/Masters degree must be accredited by PEC/HEC (as applicable)
          in relevant disciplines as mentioned below:-
        </p>
        <ul>
          <li>
            Aerospace Engineering
            <ul>
              <li>
                BE in Aerospace / Mechanical / Mechatronics / Industrial /
                Manufacturing / Electrical.
              </li>
            </ul>
          </li>
          <li>
            Artificial Intelligence
            <ul>
              <li>
                Bachelors in Computer Sciences, Computational Sciences and
                Engineering, Geoinformatics / Engineering (Mechatronics,
                Electrical, Mechanical, Aerospace, Avionics or Computer /
                Software
              </li>
            </ul>
          </li>
          <li>
            Avionics Engineering
            <ul>
              <li>
                BE in Electrical / Electronics / Avionics / Computer / Software/
                Aerospace.
              </li>
            </ul>
          </li>
          <li>
            Biomedical Engineering
            <ul>
              <li>
                BE Biomedical / Chemical / Electrical / Mechanical /
                Mechatronics / Computer / Materials.
              </li>
            </ul>
          </li>
          <li>
            Bioinformatics
            <ul>
              <li>
                BS in Bioinformatics / Biosciences / Molecular Biology /
                Biotechnology / MBBS.
              </li>
              <li>
                MSc in Molecular Biology / Biotechnology / Computer Science.
              </li>
            </ul>
          </li>
          <li>
            Chemical Engineering
            <ul>
              <li>BE in Chemical / Petroleum.</li>
            </ul>
          </li>
          <li>
            Civil Engineering
            <ul>
              <li>
                Bachelor’s Degree in Civil Engineering / Environmental
                Engineering / Architecture / City and Regional Planning / Mining
                Engineering / Geological Engineering from PEC/HEC recognized
                institution.
              </li>
            </ul>
          </li>
          <li>
            Climate Change and Sustainable Development
            <ul>
              <li>
                16 years of education in Engineering / Natural Sciences /
                Business / Health Sciences / Life Sciences / Economics /
                Development Studies / Law
              </li>
            </ul>
          </li>
        </ul>
      </div>

     <Facilities/>

      <CTA />

      <footer class="about-footer ">
			<p>&copy; 2023 Skill Station. All rights reserved.</p>
		</footer>    </div>
  );
}

export default Courses;
