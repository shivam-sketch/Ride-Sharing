import RidesModel from "../Model/Rides.model.js";
const MAX_DISTANCE_KM = 5; // Define the maximum distance between passengers' locations

// haversine distance bw formula

function haversineDistance(loc1, loc2) {
  const toRad = (x) => (x * Math.PI) / 180;

  const lat1 = loc1.lat;
  const lon1 = loc1.long;
  const lat2 = loc2.lat;
  const lon2 = loc2.long;

  const R = 6371; // Earth's radius in kilometers

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  return distance;
}

export const matchPassengers = (passengers) => {
  const clusters = clusterPassengers(passengers);
  console.log(clusters);
  const rides = clusters.map((cluster) => createRide(cluster));
  return rides;
};


function clusterPassengers(passengers) {
  const clusters = [];

  passengers.forEach((passenger) => {
    let addedToCluster = false;

    // Try to add the passenger to an existing cluster
    for (let cluster of clusters) {
      const clusterStartLocation = averageLocation(
        cluster.map((p) => p.startLocation)
      );
      const clusterEndLocation = averageLocation(
        cluster.map((p) => p.endLocation)
      );

      if (
        haversineDistance(passenger.startLocation, clusterStartLocation) <=
          MAX_DISTANCE_KM &&
        haversineDistance(passenger.endLocation, clusterEndLocation) <=
          MAX_DISTANCE_KM
      ) {
        cluster.push(passenger);
        addedToCluster = true;
        break;
      }
    }

    // If the passenger wasn't added to any cluster, create a new cluster
    if (!addedToCluster) {
      clusters.push([passenger]);
    }
  });

  return clusters;
}

export function createRide(passengerCluster) {
  const ride = new RidesModel({
    passengers: passengerCluster.map((p) => p._id),
    startLocation: averageLocation(
      passengerCluster.map((p) => p.startLocation)
    ),
    endLocation: averageLocation(passengerCluster.map((p) => p.endLocation)),
    startTime: calculateStartTime(passengerCluster),
    totalCost: calculateTotalCost(passengerCluster),
  });

  return ride;
}

function averageLocation(locations) {
  const avgLat =
    locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
  const avgLong =
    locations.reduce((sum, loc) => sum + loc.long, 0) / locations.length;
  return { lat: avgLat, long: avgLong };
}

export function calculateStartTime(passengers) {
  return new Date(
    Math.min(...passengers.map((p) => p.requestedTime.getTime()))
  );
}

export function calculateTotalCost(passengers) {
  return passengers.length * 10; // Example: $10 per passenger
}
