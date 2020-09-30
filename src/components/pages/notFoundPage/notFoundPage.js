import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const NotFoundPage = () => {
  return (
    <>
      <Button className="btn" color="primary">
        <Link to="/">Main page</Link>
      </Button>
      <h1 style={{ color: "#fff" }}>Page not found</h1>
    </>
  );
};

export default NotFoundPage;
