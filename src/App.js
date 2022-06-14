import React, { useRef, useEffect } from 'react';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.to(
      element.querySelector(".content-block__eyebrow"),
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".content-block__eyebrow"),
          start: "top 70%",
          end: "bottom 30%",
          markers: true,
          scrub: true,
          pin: "content-block",
          // toggleActions: "play pause resume reset"
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.to(
      element.querySelector(".line"),
      {
        opacity: 1,
        transform: "rotateZ(0)",
        scrollTrigger: {
          trigger: element.querySelector(".line"),
          start: "top 70%",
          end: "bottom 30%",
          markers: true,
          scrub: true,
          pin: "content-block",
          // toggleActions: "play pause resume reset"
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.to(
      element.querySelector(".line2"),
      {
        opacity: 1,
        transform: "rotateZ(0)",
        scrollTrigger: {
          trigger: element.querySelector(".line2"),
          start: "top 70%",
          end: "bottom 30%",
          markers: true,
          scrub: true,
          pin: "content-block",
          // toggleActions: "play pause resume reset"
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.to(
      element.querySelector(".content-block__text"),
      {
        opacity: 1,
        transform: "rotateZ(0)",
        scrollTrigger: {
          trigger: element.querySelector(".content-block__text"),
          start: "top 70%",
          end: "bottom 30%",
          markers: true,
          scrub: true,
          pin: "content-block",
          // toggleActions: "play pause resume reset"
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="App">
      <header className="App-header">
        <div className="content-block">
          <p class="content-block__eyebrow">01/</p>
          <h2 class="content-block__title">
            <span class="line">Street fashion,</span>
            <span class="line2">your style</span>
          </h2>
          <p class="content-block__text">
              Switch up your HAPE's clothing with digital drops, rank up on the Fashion Index and build your look for the metaverse.
          </p> 
        </div>
      </header>
    </div>
  );
}

export default App;