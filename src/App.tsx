import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PlayList from './components/PlayList';

const App: React.FC = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1 className='navbar__header'> Music </h1>
        <div className='navbar__container'>
          <li className='navbar__item'>
            <Link to={'/'} className='navbar__link'>
              PlayList
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to={'/genre'} className='navbar__link'>
              Genre
            </Link>
          </li>
        </div>
      </nav>

      <div className='body__container'>
        <Routes>
          <Route path='/' element={<PlayList/>} />
        </Routes>
      </div>
      <footer>
        <a
          href='https://github.com/KatyRosli/'
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Open sourced on Github{" "}
        </a>
        by
        <a
          href='https://www.katyrosli.com'
          target="_blank"
          rel="nopener noreferrer"
          className="name"
        >
          {" "}
          Katy Rosli
        </a>
      </footer>
    </div>
  )
};

export default App;
