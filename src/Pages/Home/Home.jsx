import { useEffect, useLayoutEffect, useState } from "react";
import "./Home.css";
import { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.webp";

const Home = () => {
  const images = [image1, image2, image3, image4];
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  let timeOut = null;
  useEffect(() => {
    timeOut =
      playing &&
      setTimeout(() => {
        onNext();
      }, 3000);
  });
  const onNext = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const onPrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div className="home-container">
      <div className="image-slider">
        <ul className="image-list">
          {images.map((image, index) => (
            <li
              className={
                index === current
                  ? "image-item image-item-active"
                  : "image-item"
              }
            >
              <div className={"image-item-overlay"}>
                <div className={"text-overlay"}>
                  <h5 className="title">Lorem Ipsum</h5>
                  <p className="p-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi dignissimos earum debitis, asperiores, nemo
                    doloremque rem sint est perferendis commodi reprehenderit
                    provident at odit dolor vitae dolorum. Delectus, quaerat
                    voluptatem!
                  </p>
                </div>
              </div>
              <img src={image} alt="img1" />
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation-btns">
        <button
          onClick={() => {
            setPlaying(false);
            onPrev();
          }}
          className="prev"
        >
          <MdNavigateBefore />
        </button>
        <button
          onClick={() => {
            setPlaying(false);
            onNext();
          }}
          className="next"
        >
          <MdNavigateNext />
        </button>
      </div>
      <ul className="navigation-dots">
        {images.map((_, index) => (
          <li
            key={index}
            onClick={() => setCurrent(index)}
            className={index === current ? "dot active" : "dot"}
          ></li>
        ))}
        <button
          className="pause-btn"
          onClick={() => {
            if (playing) {
              setPlaying(false);
              clearTimeout(timeOut);
            } else {
              setPlaying(true);
            }
          }}
        >
          {playing ? <IoIosPause /> : <IoIosPlay />}
        </button>
      </ul>
    </div>
  );
};
export default Home;
