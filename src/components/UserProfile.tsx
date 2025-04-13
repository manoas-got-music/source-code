'use client';

import React from 'react';

export interface UserProfileProps {
  user: {
    id?: string;
    name: string;
    profilePic?: string;
    instrument?: string;
    genres?: string[];
    goals?: string;
    bio?: string;
    youtube?: string;
    soundcloud?: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
  <div className="max-w-3xl mx-auto px-4 py-4 border rounded shadow-sm bg-white space-y-4">
    <div className="flex items-center gap-6">
      <img
        src={user.profilePic || '/test.png'}
        alt={`${user.name}'s profile`}
        className="rounded-circle border"
        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
      />
      <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        {user.instrument && <p className="text-muted">{user.instrument}</p>}
        {user.bio && <p className="mt-2">{user.bio}</p>}
      </div>
    </div>

    {user.genres && (
    <div>
      <h2 className="fw-semibold mb-2">Genres</h2>
      <div className="d-flex flex-wrap gap-2">
        {user.genres.map((genre, index) => (
          <span key={index} className="badge bg-primary bg-opacity-25 text-primary">
            {genre}
          </span>
        ))}
      </div>
    </div>
    )}

    {user.goals && (
    <div>
      <h2 className="fw-semibold mb-2">Musical Goals</h2>
      <p>{user.goals}</p>
    </div>
    )}

    {(user.youtube || user.soundcloud) && (
    <div>
      <h2 className="fw-semibold mb-2">Media Links</h2>
      <ul className="list-unstyled">
        {user.youtube && (
        <li>
          <a href={user.youtube} target="_blank" rel="noopener noreferrer">
            🎥 YouTube
          </a>
        </li>
        )}
        {user.soundcloud && (
        <li>
          <a href={user.soundcloud} target="_blank" rel="noopener noreferrer">
            🎵 SoundCloud
          </a>
        </li>
        )}
      </ul>
    </div>
    )}
  </div>
);

export default UserProfile;
