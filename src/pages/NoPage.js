import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="mainContentContainer" style={{paddingTop: "100px"}}>
      <div className="mainContent">
        <div className="mainContentFloat ">
          <p>404 Not Found Page</p>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            size="large"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
