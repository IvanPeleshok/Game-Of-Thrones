import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const NotFoundPage = () => {
  return (
    <>
      <Button className="btn" color="primary">
        <Link to="/">Домашняя страница</Link>
      </Button>
      <h1 style={{ color: "#fff" }}>Страница на найдена</h1>
    </>
  );
};

export default NotFoundPage;
