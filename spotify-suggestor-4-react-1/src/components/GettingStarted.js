import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Button2 from "./Styles2/Button2";
const GettingStarted = () => {
  return (
    <div className='getting-started'>
      {/* //nav bar */}
      <div className='heading-gs'>
        <h1>Getting Started</h1>
        <h3>You're only seconds away from discovering new music!</h3>
      </div>
      {/* close heading div */}

      {/* open how it works div */}
      <div>
        <h2>How it works...</h2>
        <li>Create your profile.</li>
        <li>Begin your search.</li>
        <li>Check out your results.</li>
        <li>Save your favorites!</li>
      </div>
      {/* close how it works div */}

      <span className='btn-2'>
        <Button2>Sign up</Button2>
      </span>
    </div>
    //close getting started div
  );
};

export default GettingStarted;
