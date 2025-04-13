
import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

function ProfilePage() {
  const user = {
    name: 'Naveen Bharath',
    email: 'snaveenbharath2005@gmail.com',
    bio: 'Full-stack dev & cybersec enthusiast',
    posts: ['Post 1', 'Post 2', 'Post 3']
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <ProfileImage />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
}

export default ProfilePage;
