'use client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Card } from 'react-bootstrap';

const PlayerSearchComp = () => {
  const [username, setUsername] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePlayerSearch = () => {
    // Only update the image source when the search button is clicked
    setImageSrc(`https://starlightskins.lunareclipse.studio/skin-render/relaxing/${username}/full`);
  
    // req to api/playersearch if ok then request to api/users, and render
  };

  return (
    <>
      <Container>
        <Card className='container-styles card-bg'>
          <h3>Search for a Player</h3>
          <InputGroup className="mb-3">
            <Form.Control
              value={username}
              onChange={handleUsernameChange}
              placeholder="Player's username"
              aria-label="Player's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handlePlayerSearch}>
              Search
            </Button>
          </InputGroup>

          <Row>
            <Col sm={8}>
              <div id='player-data'>
                {imageSrc && <p><b>Player:</b> {username}</p>}

              </div>
            </Col>
            <Col sm={4}>
              {/* Render image only if imageSrc is set */}
              {imageSrc && <Image src={imageSrc} height="300" alt="Player" />}
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default PlayerSearchComp;
