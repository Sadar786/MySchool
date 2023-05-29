import React from 'react'
import "./facilities.css"
import playImage from "../../assets/playground.jpg";
import labImage from "../../assets/lab.jpg";
import libraryImage from "../../assets/library.jpg";

function Facilties() {
  return (
    <div>
       <section className="facilities">
        <h1>Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          in inventore nam totam officia ea,
        </p>
        <div className="row">
          <div className="facilities-col">
            <img srcSet={playImage} alt="" srcset="" />
            <h3>Play Ground</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptas ex voluptatibus? Et maxime nostrum quod quibusdam
              voluptates modi repellendus quas reprehenderit.
            </p>
          </div>
          <div className="facilities-col">
            <img srcSet={libraryImage} alt="" srcset="" />
            <h3>Library</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptas ex voluptatibus? Et maxime nostrum quod quibusdam
              voluptates modi repellendus quas reprehenderit.
            </p>
          </div>
          <div className="facilities-col">
            <img srcSet={labImage} alt="" srcset="" />
            <h3>Labs</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptas ex voluptatibus? Et maxime nostrum quod quibusdam
              voluptates modi repellendus quas reprehenderit.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilties
