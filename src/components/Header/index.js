import './header.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Link className="Logo" to="/">Filmaria</Link>        
            <Link to="/favoritos"><Button variant="light">Salvos</Button></Link>
        </header>
    )
}