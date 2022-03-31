import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Scandistore</a>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="ProductAdd">Add Products
                        <span className="visually-hidden">(current)</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  );
};
