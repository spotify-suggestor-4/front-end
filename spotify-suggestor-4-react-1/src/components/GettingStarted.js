import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Button2 from "./Styles2/Button2";
const GettingStarted = () => {
  return (
    <div className='getting-started-container'>
      {/* //nav bar */}

      {/* <div className='gs-card'> */}
      <div className='image-card'></div>

      <div className='content-card'>
        <div className='content-heading-div'>
          <h1>Getting Started</h1>
          <h3>You're only seconds away from discovering new music!</h3>
        </div>

        <div>
          <h2>How it works...</h2>
          <ul>
            <li>Create your profile.</li>
            <li>Begin your search.</li>
            <li>Check out your results.</li>
            <li>Save your favorites!</li>
          </ul>
        </div>
        {/* close content card */}

        <span className='btn-2'>
          <Button2>Sign up</Button2>
        </span>
      </div>
    </div>
    //close getting started container
  );
};

export default GettingStarted;
