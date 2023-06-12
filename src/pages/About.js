import React from "react";
import "./About.css";
import Rujman from "../images/rujman.png";
import Shivam from "../images/Shivam.png";
import Mayank from "../images/mayank.png";
import Yash from "../images/yash.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          We are a team of skilled web developers dedicated to creating
          high-quality, responsive websites that meet our clients' unique needs.
          With our expertise in coding and design, we strive to deliver
          innovative solutions that help businesses succeed online.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Developers</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src={Mayank}
              alt="rujman"
              style={{ width: "100%", height: "60vh" }}
            />
            <div className="container">
              <h2>Mayank Solanki </h2>
              <p className="title">Founder</p>
              <p>
                I have extensive knowledge and experience with the MERN stack,
                which is a set of technologies used for building web
                applications. I take a creative approach to develop these
                applications, focusing on creating user-friendly designs and
                using the latest technologies to make them interactive and
                interesting.
              </p>
              <p>mynksinghsolanki@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={Shivam}
              alt="shivam"
              style={{ width: "100%", height: "60vh" }}
            />
            <div className="container">
              <h2>Shivam Mudgal</h2>
              <p className="title">Co-Founder</p>
              <p>
                As a skilled navigator of the MERN stack, I seamlessly traverse
                the realms of MongoDB, Express.js, React, and Node.js. With a
                touch of creativity, I sculpt user experiences that mesmerize
                and engage. Embracing the latest technologies, I weave dynamic
                web applications that leave a lasting impression. Let's embark
                on a collaborative journey, where innovation meets elegance, and
                together, we'll craft digital wonders that push boundaries and
                inspire.
              </p>
              <p>mudgalshivam0@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src={Rujman}
              alt="rahul"
              style={{ width: "100%", height: "60vh" }}
            />
            <div className="container">
              <h2>Rujman Khan </h2>
              <p className="title">CEO</p>
              <p>
                I am a MERN stack virtuoso, blending MongoDB, Express.js, React,
                and Node.js seamlessly. With a creative touch, I sculpt
                intuitive user experiences, infusing life into every line of
                code. I embrace cutting-edge technologies, crafting dynamic web
                applications that captivate and inspire. Let's collaborate and
                paint a digital masterpiece together, where innovation meets
                elegance in the ever-evolving online realm.
              </p>
              <p>rujman9617@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={Yash}
              alt="yash"
              style={{ width: "100%", height: "60vh" }}
            />
            <div className="container">
              <h2>Yash Tripathi</h2>
              <p className="title">Intern</p>
              <p>
                With my expertise, I approach web development with a creative
                mindset, finding innovative ways to design and build
                applications that provide intuitive and enjoyable experiences
                for users. I stay up-to-date with the latest trends and
                technologies, ensuring that I can leverage cutting-edge tools
                and techniques to deliver dynamic and engaging projects.
              </p>
              <p>punkcm525@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
