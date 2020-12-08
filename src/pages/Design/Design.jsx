import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { getDesignPage } from "../../network/contentful";

import CustomNavbar from "../../components/Navbar/Navbar";

const Design = () => {
  useEffect(() => {
    const fetchData = async () => {
      const designPage = await getDesignPage();
      console.log(designPage);
    };
    fetchData();
  }, []);

  return <CustomNavbar></CustomNavbar>;
};

export default Design;
