"use client"
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const HomePage = () => {
    return (
        <>

            <Container className='home-styles'>
                <Card className='card-bg'>
                    <Card.Img variant="top" src="/assets/Idunn-Splash.png" alt="idunnsplashpage" />
                    <Card.Body>
                        <Card.Text>
                            <article>
                                <p>Idunn is where medieval grit meets fantasy in Minecraft, crafting a world where every block tells a story.
                                    It’s more than just gameplay; it’s about building a legacy in a vibrant, inclusive community.
                                    Regardless of your background or skill level, Idunn is where you're respected and valued.
                                </p>
                                <p>
                                    This server is a canvas for your imagination, offering a blend of breathtaking landscapes and
                                    architectural marvels. Whether you're constructing towering castles, quaint villages, or mysterious structures,
                                    Idunn’s building style pays homage to medieval and fantastical aesthetics, inviting you to leave your mark.
                                </p>
                                <p>
                                    But there’s more to Idunn than just building. It pulses with life, hosting dynamic events and
                                    games that test your skills and creativity. From epic battles to elaborate treasure hunts,
                                    every day brings a new adventure.
                                </p>

                                <p>
                                    Customization is key on Idunn, with unique enchantments and exclusive items setting
                                    your gameplay apart. It’s a place where your individuality shines, supported by a
                                    community that celebrates creativity and innovation.
                                </p>
                                <p>
                                Safety and respect are paramount, ensuring a supportive environment for every player.
                                Idunn constantly evolves with new features and updates, keeping the adventure fresh and engaging.
                                </p>
                                <p>
                                    If you’re seeking a Minecraft server that’s more than just a game—a place
                                    where creativity, adventure, and community converge—Idunn is your destination. 
                                    It’s not just about playing Minecraft; it’s about being part of something bigger.
                                    Welcome to your new home. Welcome to Idunn.
                                </p>
                            </article>
                        </Card.Text>
                    </Card.Body>
                </Card >
            </Container>
        </>
    )
}

export default HomePage