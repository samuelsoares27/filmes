import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className="Logo" to="/">Filmaria</Link>        
        </header>
    )
}