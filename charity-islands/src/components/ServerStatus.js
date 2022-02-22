import React, { useState } from "react";

function ServerStatus() {
  const [data, setData] = React.useState(null);
  const [toggle, setToggle] = useState("false");

  const toggleServer = () => {
    setToggle((prev) => !prev);
  };

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <button onClick={toggleServer}>Server Status</button>
      <h3 className={toggle ? "active" : ""}>{!data ? "Loading..." : data}</h3>
    </div>
  );
}

export default ServerStatus;
