import React from "react";
// Optional: Import a CSS file for styling

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default Profile;
