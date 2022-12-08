import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const counter = useSelector((state) => state.counter.counter);
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {true && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
