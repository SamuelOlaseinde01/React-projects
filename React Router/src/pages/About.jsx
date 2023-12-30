import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="about">
        <img src="src/assets/images/about-hero.png" />
        <div className="word1">
          <span className="span1">
            <h1>Don't squeeze in a sedan when you could relax in a van</h1>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </span>
          <div className="span2">
            <div className="div2">
              <h2>Your destination is waiting</h2>
              <h2>Your van is ready</h2>
            </div>
            <div className="link">
              <Link className="btn-about">Explore our vans</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
