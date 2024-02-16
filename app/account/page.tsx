import { Container } from "react-bootstrap";
import PlayerAccount from "../../components/PlayerAccount";
import React from "react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';


export default function Account() {
    return (
        <>
            <>
                <Container className="home-styles player-account">
                    <PlayerAccount />
                </Container>
            </>
        </>
    )

}