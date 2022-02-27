import React from "react";

function ServerStatus() {
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div>
      {/* <h3>{!data ? " Server Status: Not Connected ❌" : data}</h3> */}
      <h1>Server turned off</h1>
    </div>
  );
}

export default ServerStatus;
