import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import PassengerForm from "./Passengers";
import Rides from "./Rides";
const Home = () => {
  return (
    <div>
      <h1 className="mb-4 flex items-center text-2xl font-bold">
        <Icon icon="mdi:man" className="mr-2" />
        Add Passengers Form
      </h1>
      <PassengerForm />

      <h1 className="mt-4 flex items-center text-2xl font-bold">
        <Icon icon="mdi:car" className="mr-2" />
        Show Rides
      </h1>
      <Rides />
    </div>
  );
};

export default Home;
