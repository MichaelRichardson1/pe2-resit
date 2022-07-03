import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "bootstrap";

export default function GamesList() {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getGames() {
			try {
				const response = await http.get("wc/v3/products?ck_ce061db2c8cb4a5c4a774fa198705b570028afb1&cs_646c0f74beb502c80ab690322cc097935f6690c5");
				console.log("response", response);
				setGames(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getGames();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading Games List...</div>;

	if (error) return <div>{}</div>;

	return (
		<Container className="games">
			{games.map((game) => {

                if (game.categories.name === "Puzzle");

				return (
                    <>
                    
                    <Link to={`/games/${game.id}`}><img src={game.attributes.options[2]} alt="game background"/>
                        <Card style={{ width: '18rem' }}>                            
                            <Card.Body>
                                <Card.Title>{game.name}</Card.Title>
                                <Button>Add to Cart</Button>                           
                            </Card.Body>
                        </Card>
                    </Link>
                    
                    </>                    
				);
			})}
		</Container>
	);
}
