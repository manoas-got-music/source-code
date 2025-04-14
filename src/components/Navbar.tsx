'use client';

import { useSession } from 'next-auth/react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

interface NavBarProps {
  onSelect: (key: string) => void;
  currentView: 'home' | 'browse' | 'jam' | 'logout' | string;
}

// eslint-disable-next-line react/prop-types
const AppNavbar: React.FC<NavBarProps> = ({ onSelect, currentView }) => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => onSelect('home')} style={{ cursor: 'pointer' }}>
          Manoa&apos;s Got Music
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link
              onClick={() => onSelect('home')}
              className={currentView === 'home' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => onSelect('browse')}
              className={currentView === 'browse' ? 'active' : ''}
            >
              Browse Musicians
            </Nav.Link>
            <Nav.Link
              onClick={() => onSelect('jam')}
              className={currentView === 'jam' ? 'active' : ''}
            >
              Jam Sessions
            </Nav.Link>

            {currentUser && (
              <>
                <Nav.Link href="/add">Add Stuff</Nav.Link>
                <Nav.Link href="/list">List Stuff</Nav.Link>
              </>
            )}

            {currentUser && role === 'ADMIN' && (
              <Nav.Link href="/admin">Admin</Nav.Link>
            )}
          </Nav>

          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
