import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="text-center">
          <h1>Car Rental App</h1>

          <div className="mt-4">
            <Link to="/add" className="btn btn-primary me-3">
              Add Car
            </Link>

            <Link to="/view" className="btn btn-success">
              View Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
