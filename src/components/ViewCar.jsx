import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewCar = () => {
  const [data, changeData] = useState([]);
  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/cars")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b>View Cars</b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">registration_number</th>
              <th scope="col">brand</th>
              <th scope="col">model</th>
              <th scope="col">vehicle_type</th>
              <th scope="col">fuel_type</th>
              <th scope="col">transmission</th>
              <th scope="col">seating_capacity</th>
              <th scope="col">rent_per_day</th>
              <th scope="col">city</th>
              <th scope="col">availability_status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={value._id || index}>
                  <td>{value.registration_number}</td>
                  <td>{value.brand}</td>
                  <td>{value.model}</td>
                  <td>{value.vehicle_type}</td>
                  <td>{value.fuel_type}</td>
                  <td>{value.transmission}</td>
                  <td>{value.seating_capacity}</td>
                  <td>{value.rent_per_day}</td>
                  <td>{value.city}</td>
                  <td>{value.availability_status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCar;
