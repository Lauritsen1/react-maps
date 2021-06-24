import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {

    return (
        <header className='header'>
            <h1>
                <Link to={'/'}>React <i className="fas fa-globe-americas"></i> Maps</Link>
            </h1>
        </header>
    );
}

export default Header;