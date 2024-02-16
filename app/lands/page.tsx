"use client"
import { Container, Card } from "react-bootstrap"


export default function Lands() {
    return (

        <>
            <Container className="container-styles">
                <Card className='card-bg'>
                    <Card.Body>
                        <h3>Lands</h3>
                        <p>
                            The Lands plugin works pretty simply; just make a land with some of your friends with /land create, which will cost a good chunk of cash in the earlygame, but is most definitely worth it. It allows you to claim and protect your land from any evildoers and limit all aspects of what can go on in there, even going as far as to make people unable to cross into your land!
                        </p>
                        <p>
                            To go into more detail about some of the sheer capabilities of this plugin, you can specify subareas within your lands where only certain people can get into or open chests, or even kill mobs! Those are great if you've got a totem farm you don't want your enemies using. Create a big group and fight others for resources and money! Put people in jail for betraying you! Exile people! Your limit is your imagination!!!
                        </p>
                        <p>
                            You can even rent out or sell your land to people if you want to make a profit off of your builds! If you're in a faction that needs funds for supplies, you could even get taxes from your members! Set up roles to get leadership; make kings, servants, nobles, peasants, anything you can dream of, you can do with Lands.
                        </p>
                    </Card.Body>
                </Card>
            </Container >
        </>
    )
}