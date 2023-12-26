import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

import Tabsrow from "./Tabsrow";
// we are using bootstrap navbar
const Header = () => {
  const [mainData, setMainData] = useState([]);

  const getDataFromDB = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/data/all");
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  //calling the above function on first render
  useEffect(() => {
    getDataFromDB();
  }, []);
  //where a state is updated, we will print the length of data received just for the test purposes
  useEffect(() => {
    console.log(mainData.length);
  }, [mainData]);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontWeight: 800 }}>
            <h1>Data Virtualization AJ-AY</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Tabsrow data={mainData} setMainData={setMainData} />
    </>
  );
};

export default Header;
