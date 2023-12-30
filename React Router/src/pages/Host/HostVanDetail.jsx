import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setState] = React.useState([]);
  const styling = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
    opacity: "1",
  };

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setState(data.vans));
  }, []);

  console.log(currentVan.id);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="host-van-detail-section">
      <Link to={".."} relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>

      <div className="host-vans-links">
        <NavLink
          to={"."}
          relative="path"
          end
          style={({ isActive }) => (isActive ? styling : null)}
        >
          <h3>Details</h3>
        </NavLink>

        <NavLink
          to={"pricing"}
          relative="path"
          style={({ isActive }) => (isActive ? styling : null)}
        >
          <h3>Pricing</h3>
        </NavLink>
        <NavLink
          to={"photos"}
          relative="path"
          style={({ isActive }) => (isActive ? styling : null)}
        >
          <h3>Photos</h3>
        </NavLink>
      </div>
      <Outlet context={currentVan} />
    </section>
  );
}
