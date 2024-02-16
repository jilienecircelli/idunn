"use client"
import { Container, Card } from "react-bootstrap"


export default function PyroFishing() {
    return (
        <>
            <Container className="container-styles">
                <Card className='card-bg'>
                    <Card.Body>
                        <h3>Pyro Fishing</h3>
                        <p>
                            Pyro Fishing is an addon that completely changes the way you fish in Minecraft by introducing many new features relating to the originally bland portion of the game. These range from catching brand new custom fish, to a currency gained through fishing to a levelling system and related skill tree, to intricate augments for your fishing rod to increase your capacities for fishing, to even making a fishing totem to seriously up your fishing game!
                        </p>
                        <p>
                            Getting started is just as easy as casting your rod and catching a fish like normal, but you might notice something different around the second or third time you reel one in; you have some new fish! By running /fish menu, you can see all the options for the future, ranging from weighing and selling your fish for pure cash or gutting it for Entropy, the plugin's currency.
                        </p>
                        <p>
                            Once you get a good few fish brought in, you might level up! Running the command /fish skills will open up a menu where you can see the many different skills you can level up, of which there are two types; one time buys that scale with your fishing level, or stacking skills that slowly build up over time to a bigger cause. One time buys are much more of an investment, but provide a larger buff with more levels while stacking skills are consistent no matter the level.
                        </p>
                        <p>
                            Next up, let's assume you're a good bit into the fishing game. You've caught a few crabs from fishing randomly, killed some squids and dolphins for this plugin's new drop with them, and gathered some various other items all the while levelling up. By putting some of these ingredients from the mobs and around your base into a cauldron according to the recipes in the GUI, you can make augments, which serve as permanent buffs for your fishing rod once applied.
                        </p>
                        <p>
                            Lastly, the fishing totem. This is a super endgame item, which lets you activate super powerful buffs for a short period of time to maximize your burst fishing, which is helpful for those higher levels that take forever to get through.

                        </p>
                    </Card.Body>
                </Card>
            </Container >
        </>
    )
}