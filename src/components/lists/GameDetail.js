import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { Image } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { BASE_URL } from "../../../constants/api";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "bootstrap";

export default function GameDetail() {
	const [game, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    let history = useHistory();

    const http = useAxios();

    const { id } = useParams();

    if (!id) {
        history.push("/");
    }

    const url = BASE_URL + id;

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
	}, [url]);

	if (loading) return <div>Loading Game...</div>;

	if (error) return <div>{}</div>;

	return (
		<Container className="game">			
				 (
                    <>
                    <img src={game.attributes.options[2]} alt="game background"/>
                    <span>
                        <div>
                            <h3>{game.name}</h3>
                            <Image variant="top" src={game.attributes.options[1]} />                                  
                        </div>
                        <div>
                            <p>{game.description}</p>
                            <span><p>{game.price}</p><p>{game.stock_quantity}</p><p>{game.attributes.options[0]}</p></span>                            
                            <Button>Add to Cart</Button> 
                        </div>
                        
                    </span>
                        

                    </>                    
				);
			
		</Container>
	);
}
