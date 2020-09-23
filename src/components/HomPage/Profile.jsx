import React from "react";
import Adds from "./Adds";
import SideNav from "./SideNav";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="row">
        <SideNav />
        <div className="col-sm-6">
          <h1>ngnbj</h1>
          <h1>ngnbj</h1>
        </div>
        <Adds />
      </div>
    </React.Fragment>
  );
};

export default Profile;