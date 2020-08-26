import React from "react";
import { Button } from "antd";
import {  useHistory } from "react-router-dom";
export default function NotFoundPage() {
    let history = useHistory();

  const handleClick = () => {
    history.push("/booklibrary-project")
  }
  return (
    <div className="mainContentContainer" style={{paddingTop: "100px"}}>
      <div className="mainContent">
        <div className="mainContentFloat " style={{textAlign: "center"}}>
          <h2 >404 Not Found Page</h2>
          <Button
            variant="contained"
            onClick={handleClick}
            size="large"
            style={{width: "150px", color: "white", backgroundColor: "black" }}
          >
            Back to Home 
          </Button>
        </div>
      </div>
    </div>
  );
}
