import React, { useEffect, useState } from "react";

function Rides() {
  const [rides, setRides] = useState([]);
  const fetchData = async () => {
    fetch("http://localhost:5000/api/v1/rides")
      .then((response) => response.json())
      .then((data) => setRides(data?.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(rides);
  return (
    <div>
      <h2>Available Rides</h2>
      <button
        className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          fetchData();
        }}
      >
        Refresh
      </button>
      {rides?.map((ride) => (
        <div key={ride?._id} className="row mt-4">
          <p>Ride ID: {ride?._id}</p>
          <p>Passengers: {ride?.passengers.length}</p>
          <p>
            Start Location: Lat {ride?.startLocation.lat}, Long {ride?.startLocation.long}
          </p>
          <p>
            End Location: Lat {ride?.endLocation.lat}, Long {ride?.endLocation.long}
          </p>
          <p>Start Time: {new Date(ride.startTime).toLocaleString()}</p>
          <p>Total Cost: ${ride?.totalCost}</p>
        </div>
      ))}
    </div>
  );
}

export default Rides;
