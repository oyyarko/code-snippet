import React, { useRef, useState, useEffect } from "react";
  
const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      className={`image-skeleton ${loaded ? "loaded" : ""}`}
      style={{ position: "relative"}}
    >
      {!loaded && <div className="loading-image-skeleton spinner"></div>}
      <img
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default LazyImage;

// -------------- CSS --------------
// .loading-image-skeleton {
//   background-color: #c3c3c3;
//   width: 140px;
//   height: 90px;
//   border-radius: 4px;
// }

// @keyframes skeleton {
//   0% {
//     background-color: hsl(0, 0%, 70%);
//   }
//   50% {
//     background-color: hsl(0, 0%, 80%);
//   }
//   100% {
//     background-color: hsl(0, 0%, 90%);
//   }
// }

// .spinner {
//   animation: skeleton 1s linear infinite alternate;
// }

// .spinner .loading-image-skeleton{
//   visibility: hidden
// }

// .image-skeleton.loaded .spinner{
//   animation: none
// }

// .image-skeleton.loaded .spinner .content{
//   visibility: visible
// }

