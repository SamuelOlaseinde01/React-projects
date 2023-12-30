import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const state = useOutletContext();
  return (
    <div className="host-vans-info">
      <p>
        <span>Name</span>: {state.name}
      </p>
      <br />
      <p>
        <span>Category</span>: {state.type}
      </p>
      <br />
      <p>
        <span>Description</span>: {state.description}
      </p>
      <br />
      <p>
        <span>Visibility</span>: public
      </p>
    </div>
  );
}
