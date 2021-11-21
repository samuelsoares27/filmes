import './index.css'
import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    
    async function CarregarFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    
    CarregarFilmes();

  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col sm="12">
            <div className="listaFilmes"> 
              {
                filmes.map((filme) => {
                  return (
                    <article key={filme.id}>
                      <h2 className="tituloFilmes">{filme.nome}</h2>
                      <img src={filme.foto} alt={filme.nome} />
                      <Link to="/filme"><Button variant="danger" className="btnFilme">Acessar</Button></Link>
                    </article>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}