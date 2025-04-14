'use client';

import { Container, Row, Col } from 'react-bootstrap';
import UserProfile from './UserProfile'; // 注意路径：因为它在 components 文件夹中

const mockUsers = [
  {
    name: 'Li Hua',
    profilePic: '/china-musician.png',
    instrument: 'Erhu, Piano',
    genres: ['Classical', 'Chinese Folk'],
    goals: '想和其他学生一起尝试跨文化融合音乐。',
    bio: '中央音乐学院交换生，热爱二胡与中国民乐，同时也弹钢琴。',
    youtube: 'https://www.youtube.com/watch?v=china-music-demo',
    soundcloud: 'https://soundcloud.com/lihua',
  },
  {
    name: 'Jacob Miller',
    profilePic: '/us-musician.png',
    instrument: 'Guitar, Vocals',
    genres: ['Indie Rock', 'Jazz'],
    goals: 'Looking to join a chill jam group for weekend sessions.',
    bio: 'Second-year student majoring in music production. I write original songs.',
    youtube: 'https://www.youtube.com/watch?v=us-music-demo',
    soundcloud: 'https://soundcloud.com/jacobmiller',
  },
  {
    name: 'Travis Thompson',
    profilePic: '/test.png',
    instrument: 'Guitar, Vocals',
    genres: ['Jazz', 'Funk', 'Neo-Soul'],
    goals: 'Looking to casually jam and maybe join a student band',
    bio: 'Third-year music major. Into improv, grooves, and late-night sessions.',
    youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    soundcloud: 'https://soundcloud.com/fakeuser123',
  },
];

export default function BrowseMusicians() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">🎼 Browse Musicians</h1>
      <Row className="g-4">
        {mockUsers.map((user, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Col md={6} key={index}>
            <UserProfile user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
