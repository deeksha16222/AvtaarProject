import React, { useState, useEffect } from "react";

export default function AvtarImage() {
  const [imag, setImg] = useState();

  const fetchImage = () => {
    fetch(
      "https://avatars.dicebear.com/v2/avataaars/${props.data.username}.svg?options[mood][]=happy"
    )
      .then((response) => response.json())
      .then((result) => {
        setImg(result);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div>
      <img src={imag} style={{ width: "100px", height: "120px" }} alt="icons" />
    </div>
  );
}
