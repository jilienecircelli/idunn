"use client"
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

function PlayerAccount() {
    const { data: session } = useSession()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [isUsernameDisabled, setIsUsernameDisabled] = useState(false);
    const user = {
        email: session?.user?.email,
        username: '',
        aboutMe: ''
    }

    if (user.email === null || user.email === undefined) user.email = '';
    if (user.email !== '') {

    }
    useEffect(() => {
        const currentUsername = null;

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/api/getPlayerData?username=${currentUsername}`);
                const data = response.data;
                if (data && data.username && user.email !== null && user.email !== undefined) {
                    setUsername(data.username);
                    setEmail(user.email);
                    setAboutMe(data.about_me);
                    setIsUsernameDisabled(true); // Disable the username field if data is fetched successfully
                }
            } catch (error) {
                console.error('Failed to fetch user data', error);
                // Optionally handle user not found or other errors
            }
        };

        if (currentUsername) {
            fetchUserData();
        }
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            // Modify this URL to match your API endpoint for saving/updating user data
            const payload = isUsernameDisabled ? { email, about_me: aboutMe } : { username, email, about_me: aboutMe };
            const response = await axios.post('/api/users', payload);
            console.log(response.data.message);
            if (!isUsernameDisabled) {
                setIsUsernameDisabled(true); // Disable username field after successful save
            }
        } catch (error) {
            console.error('Failed to save user data', error);
        }
    };

    return (
        <Card className='container-styles card-bg'>
            <h2>Welcome to your Account!</h2>
            <Card.Text>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Minecraft Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={user.username === '' ? username : user.username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isUsernameDisabled}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            //value={email}
                            value={user.email === '' ? email : user.email}
                            disabled={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>About Me</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={user.aboutMe === '' ? aboutMe : user.aboutMe}
                            onChange={(e) => setAboutMe(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Text>
        </Card>
    );
}

export default PlayerAccount;