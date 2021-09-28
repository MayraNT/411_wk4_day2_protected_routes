import React from 'react';

const ProfileComponent = (props) => {
  return (
    <div>
      <h1>Yay, our Profile Dumb Component.</h1>
      <h1>{props.hello}</h1>
    </div>
  )
}

export default ProfileComponent;