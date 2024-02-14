'use client';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Card } from 'react-bootstrap';
import axios from 'axios';

const PlayerSearchComp = () => {
  // search params
  const [usernameSearch, setUsernameSearch] = useState('');
  // exists in db
  const [username, setUsername] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [aboutMe, setAboutMe] = useState('')

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameSearch(event.target.value);
  };

  const handlePlayerSearch = async () => {

    // req to api/playersearch if ok then request to api/users, and render
    try {
      // does the person exist in the logger db
      const response = await axios.get(`/api/playersearch/?username=${usernameSearch}`);
      console.log(response.status)
      if (!response.data.length){
        throw new Error('User not logged in')
      }

      try {
        // if they do, pull data from the user db
        const response2 = await axios.get(`/api/users/?username=${usernameSearch}`)
        const player = response2.data[0];
        console.log(player)
        setAboutMe(player.about_me)
        setUsername(player.username)

        // update image with player skin if they are in user db
        setImageSrc(`https://starlightskins.lunareclipse.studio/skin-render/relaxing/${player.username}/full`);
      } catch {
        setAboutMe('This player has not created an account yet.')
        setUsername(usernameSearch)

        // update image with player skin if they exist in logger but no account
        setImageSrc(`https://starlightskins.lunareclipse.studio/skin-render/relaxing/${usernameSearch}/full`);
      }

    } catch (error) {
      console.error('Failed to fetch player data', error)
      setUsername('This player has not logged in before.');
      setAboutMe('');
      setImageSrc('');
      // add alert later saying player does not exist
    }

  };

  return (
    <>
      <Container>
        <Card className='container-styles card-bg'>
          <h3>Search for a Player</h3>
          <InputGroup className="mb-3">
            <Form.Control
              value={usernameSearch}
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
                {username && <p><b>Player:</b> {username}</p>}
                {aboutMe && <p><b>About {username}:</b> {aboutMe}</p>}

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
