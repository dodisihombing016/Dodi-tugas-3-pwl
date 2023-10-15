import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
        <h1>Dodi Rifai Sihombing</h1>
        <nav>
            <ul>
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/tentang">Tentang</Link></li>
                <li><Link to="/kontak">Kontak</Link></li>
            </ul>
        </nav>
        </header>

    );
};

export default Header;