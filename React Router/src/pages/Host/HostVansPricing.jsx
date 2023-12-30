import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const state = useOutletContext();

  return (
    <div className="host-vans-info">
      <h1>${state.price}/day</h1>
    </div>
  );
}
