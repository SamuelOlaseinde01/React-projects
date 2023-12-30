import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setState(data.vans));
  }, []);

  const body = state.map((item) => {
    return (
      <Link to={`/host/vans/${item.id}`} key={item.id}>
        <div className="host-vans">
          <img src={item.imageUrl} alt="" srcset="" className="host-vans-img" />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="hostvans">
      <h1>Your listed vans</h1>
      <div className="list">{body}</div>
    </div>
  );
}
