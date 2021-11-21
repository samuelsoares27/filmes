import './filme.css'
import { useHistory, useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import api from '../../Services/api';

export default function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

     useEffect(() => {
        
        async function LoadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                history.replace('/');
                return
            }

            setFilme(response.data);
            setLoading(false);
        }
        LoadFilme();

    }, [history, id]);

    if (loading) {
        return (
            <div className="filmeInfo">
                <h3>Carregando o seu filme...</h3>
            </div>
        )
    }


    return (
        <div className="divFilme">
            <Container>
                <Row>
                    <Col md="12">
                        <article key={filme.id} className="filmeInfo">
                            <h1>{filme.nome}</h1>
                            <img src={filme.foto} alt={filme.nome} /> <br/>                           
                            <h3>Sinopse</h3>
                            <p>{filme.sinopse}</p>
                        </article>
                    </Col>
                    <Col md="12" className="filmeButtons">
                        <div>
                            <Button variant="outline-danger" onClick={() => { }}>Salvar</Button>
                            <Button variant="outline-danger" target="_blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                                Trailer
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}