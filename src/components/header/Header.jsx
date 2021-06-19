import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    return ( 
        <header className='header'>
            <Link to={'/'}><i className="fas fa-arrow-left"></i></Link>
            <h1>React Maps</h1>
        </header>
     );
}
 
export default Header;