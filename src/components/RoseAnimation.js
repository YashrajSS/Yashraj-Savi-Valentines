import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti"; // Import the library
import "./RoseAnimation.css";

const RoseAnimation = () => {
  const [clickCount, setClickCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [shake, setShake] = useState(false);
  const [fadeText, setFadeText] = useState(""); // The text to be shown
  const [textVisible, setTextVisible] = useState(false); // Controls opacity
  const [topText, setTopText] = useState(""); // For showing "Not an option"

  const handleImageClick = () => {
    setClicked(true);
  };

  const incClickCount = () => {
    setClickCount((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Change the text based on clickCount
  useEffect(() => {
    if (clickCount > 5) {
      if (fadeText !== "Will you be my valentine?") {
        setTextVisible(false);
        const timer = setTimeout(() => {
          setFadeText("Will you be my valentine?");
          setTextVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else if (clickCount > 4 && clickCount <= 5) {
      setFadeText("But for now...");
      setTextVisible(true);
    } else if (clickCount > 0 && clickCount <= 4) {
      setFadeText("Click again");
      setTextVisible(true);
    } else {
      setFadeText("");
      setTextVisible(false);
    }
  }, [clickCount, fadeText]);

  // When user clicks "Yes", trigger fireworks from the bottom
  const handleYesClick = (e) => {
    e.stopPropagation();
    setTopText("");
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 1 }, // Sets the explosion to originate from the bottom
      colors: ["#bb0000", "#ffffff", "#f862e2"],
    });
  };

  // When user clicks "No", show notification at the top
  const handleNoClick = (e) => {
    e.stopPropagation();
    setTopText("Not an option");
  };

  return (
    <div className="rose-container" onClick={incClickCount}>
      {/* Top notification */}
      {topText && <div className="top-notification">{topText}</div>}

      <div
        className={`rose-image ${shake ? "shake" : ""} ${clicked ? "hide-image" : ""}`}
        onClick={handleImageClick}
      >
        <img
          src="https://www.makeneonsign.com/cdn/shop/products/Roseneonsign_1500x1500.jpg?v=1621427305"
          alt="Rose"
        />
      </div>

      <div className="rose">
        <div className={`photo top-left-photo ${clicked && clickCount >= 1 ? "show-photo" : ""}`}>
          <img
            className="rose-top-left"
            src="/pictures/photo1.jpeg"
            style={{ width: "15vw", height: "35vh" }}
            alt="Photo 1"
          />
          <figcaption style={{ textAlign: "center" }}>You are my hottie...</figcaption>
        </div>

        <div className={`photo top-right-photo ${clicked && clickCount >= 2 ? "show-photo" : ""}`}>
          <img
            src="/pictures/photo3.jpeg"
            style={{ width: "15vw", height: "35vh" }}
            alt="Photo 3"
          />
          <figcaption style={{ textAlign: "center" }}>You are my vibe...</figcaption>
        </div>

        <div className={`photo bottom-left-photo ${clicked && clickCount >= 3 ? "show-photo" : ""}`}>
          <figure className="figure-container">
            <img
              src="/pictures/photo2.jpeg"
              style={{ width: "15vw", height: "35vh" }}
              alt="Photo 2"
            />
            <figcaption>If you promise such beautiful days...</figcaption>
          </figure>
        </div>

        <div className={`photo bottom-right-photo ${clicked && clickCount >= 4 ? "show-photo" : ""}`}>
          <img
            src="/pictures/photo4.jpeg"
            style={{ width: "15vw", height: "35vh" }}
            alt="Photo 4"
          />
          <figcaption style={{ textAlign: "center" }}>I might make you my wife...</figcaption>
        </div>

        {fadeText && (
          <div className={`center-text ${textVisible ? "fade-in" : ""}`}>
            <p className="new-text">{fadeText}</p>
            {/* Show buttons only when the final question is displayed */}
            {fadeText === "Will you be my valentine?" && (
              <div className="button-container">
                <button className="yes-button" onClick={handleYesClick}>
                  Yes
                </button>
                <button className="no-button" onClick={handleNoClick}>
                  No
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoseAnimation;
