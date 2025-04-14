'use client';

import { useState } from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import UserProfile from '../components/UserProfile';

const mockUser = {
  name: "Travis Thompson",
  profilePic: "/test.png", 
  instrument: "Guitar, Vocals",
  genres: ["Jazz", "Funk", "Neo-Soul"],
  goals: "Looking to casually jam and maybe join a student band",
  bio: "Third-year music major. Into improv, grooves, and late-night sessions.",
  youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  soundcloud: "https://soundcloud.com/fakeuser123",
};

/** The Home page. */
const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <main>
      <Container id="landing-page" fluid className="py-3">
        <Row className="align-middle text-center">
          <Col xs={4}>
            <Image src="next.svg" width="150px" alt="" />
          </Col>

          <Col xs={8} className="d-flex flex-column justify-content-center">
            <h1>Welcome to this template</h1>
            <p>Now get to work and modify this app!</p>
            <Button variant="primary" onClick={() => setShowProfile(!showProfile)}>
              {showProfile ? 'Hide' : 'Show'}
              {' '}
              Profile
            </Button>
          </Col>
        </Row>

        {showProfile && (
          <Row className="mt-5">
            <Col>
              <UserProfile user={mockUser} />
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default Home;
