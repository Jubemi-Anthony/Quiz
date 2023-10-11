import "./Nav.css";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <Link to="/">
          <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-64.png" alt="HOME" />
        </Link>
        <Link>
          <img src="https://cdn1.iconfinder.com/data/icons/neutro-interface/32/about-64.png" alt="HELP" />
        </Link>
        <Link>
          <img src="https://cdn0.iconfinder.com/data/icons/cosmo-culture/40/leader-64.png" alt="LEADER BOARD" />
        </Link>
        <Link>
          <img src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/user-64.png" alt="PROFILE" />
        </Link>
    </nav>
  )
}

export default Nav