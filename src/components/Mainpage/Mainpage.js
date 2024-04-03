import "./Mainpage.css";
import React, { useState, useEffect } from "react";
import Image1 from "../../Images/RID_4102-Recovered.jpg";
import Image2 from "../../Images/Copy of RID_7074.jpg";
import Image3 from "../../Images/RID_0426.jpg";

// export default function Mainpage() {
//   return (
//     <>
//       <main className="gallery">
//         <img src={Image1} alt="Image1" />
//         <img src={Image2} alt="Image2" />
//         <img src={Image3} alt="Image3" />
//       </main>
//     </>
//   );
// }

const imagesUrl = [{ Image1 }, { Image2 }, { Image3 }];

const images = [
  "../../Images/RID_4102-Recovered.jpg",
  "../../Images/Copy of RID_7074.jpg",
  "../../Images/RID_0426.jpg",
];

export default function Mainpage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const newIndex = (currentIndex + 1) % imagesUrl.length;
  //     setCurrentIndex(newIndex);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [currentIndex, imagesUrl.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <main
      className="background-slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
        border: "2px solid red",
        position: "relative",
      }}
    >
      <h1>Okay!!</h1>
    </main>
  );
}
