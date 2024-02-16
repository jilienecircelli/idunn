"use client"
import { Container, Card, Image } from "react-bootstrap"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function About() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex = +1) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <Container className="container-styles">
                <Card className='card-bg'>
                    <Card.Body>
                        <h3>About the Server</h3>
                        <p>
                            Welcome to Idunn, a Minecraft server devoted to fostering creativity and community. Dive into a world where fantasy is at its core and every story is worth telling. We embrace diversity and welcome all into our ever-growing Idunn family. This world was created in 2021 and has grown and evolved with its players. Idunn has never been reset, showcasing its history with old settlements, grand structures, and hidden works of art. We have a series of plug-ins that offer quality-of-life benefits like land claims and player warps. Benefit from new and exotic enchantments that change the way you play Minecraft. Dive into the complexity of SlimeFun, a robust system of unique machinery and items. Fish for exotic fish and mine for exquisite ores—your journey is yours to make. Immerse yourself in our story by finishing quests and participating in holiday events. Take a chance to earn powerful tools and weapons from our crates that can only be earned by playing the game. More to come soon like dungeons, mini-games, custom mobs, and custom textured items.
                        </p>
                    </Card.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image className="gallery d-block w-100" src="/gallery/Welcome_to_Idunnia.png" />
                            <Carousel.Caption>
                                <h2>Welcome to Idunnia</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="gallery d-block w-100" src="/gallery/Idunnia_World_Tree.png" />
                            <Carousel.Caption>
                                <h2>The World Tree</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="gallery d-block w-100" src="/gallery/Pride.png" />
                            <Carousel.Caption>
                                <h2>Idunn Pride</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Card>
            </Container >
        </>
    )
}