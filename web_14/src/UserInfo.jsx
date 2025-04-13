// UserInfo.js
import React from 'react';

function UserInfo({ name, email, bio }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserInfo;

