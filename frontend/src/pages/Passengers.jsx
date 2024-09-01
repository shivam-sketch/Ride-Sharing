import React, { useState } from "react";

function PassengerForm() {
  const [name, setName] = useState("");
  const [startLocation, setStartLocation] = useState({ lat: 0, long: 0 });
  const [endLocation, setEndLocation] = useState({ lat: 0, long: 0 });
  const [requestedTime, setRequestedTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/v1/passengers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, startLocation, endLocation, requestedTime }),
      });
      if (res.status == 200) {
        alert("Submitted");
      } else if (res.status == 500) {
        alert("Server error");
      }
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="startLat">Start Latitude:</label>
        <div>
          <input
            type="number"
            id="startLat"
            placeholder="Start Latitude"
            value={startLocation.lat}
            required
            onChange={(e) => setStartLocation({ ...startLocation, lat: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="startLong">Start Longitude:</label>
        <div>
          <input
            type="number"
            id="startLong"
            placeholder="Start Longitude"
            value={startLocation.long}
            required
            onChange={(e) => setStartLocation({ ...startLocation, long: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="endLat">End Latitude:</label>
        <div>
          <input
            type="number"
            id="endLat"
            placeholder="End Latitude"
            value={endLocation.lat}
            required
            onChange={(e) => setEndLocation({ ...endLocation, lat: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="endLong">End Longitude:</label>
        <div>
          <input
            type="number"
            id="endLong"
            placeholder="End Longitude"
            value={endLocation.long}
            required
            onChange={(e) => setEndLocation({ ...endLocation, long: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="requestedTime">Requested Time:</label>
        <div>
          <input
            type="datetime-local"
            id="requestedTime"
            value={requestedTime}
            required
            onChange={(e) => setRequestedTime(e.target.value)}
          />
        </div>
      </div>

      <button
        className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default PassengerForm;
