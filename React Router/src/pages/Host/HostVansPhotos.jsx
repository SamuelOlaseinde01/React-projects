import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const state = useOutletContext();
  return (
    <img
      width={"150px"}
      style={{ paddingLeft: "30px" }}
      src={state.imageUrl}
      alt={`An image of  ${state.name}`}
    />
  );
}
