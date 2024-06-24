import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CreaTuTeeLogo from "../../img/CreaTuTee.png";
import "./navbar.css";  // Importa los estilos personalizados

export const Navbar = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <div className="container w-100">
                {/* Logo y título */}
                <div className="navbar-left">
                    <Link to="/" className="navbar-brand">
                        <img src={CreaTuTeeLogo} alt="CreaTuTee" className="navbar-logo" />
                        <span className="navbar-title">CreaTuTee</span>
                    </Link>
                </div>

                {/* Botón para colapsar en dispositivos móviles */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Elementos del navbar */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mx-auto navbar-center">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="./desing" className="nav-link">DiseñaTuTee</a>
                        </li>
                        <li className="nav-item">
                            <a href="#how-it-works" className="nav-link">Cómo funciona</a>
                        </li>
                        <li className="nav-item">
                            <a href="#eco-friendly" className="nav-link">EcoFriendly</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about-us" className="nav-link">Acerca de nosotros</a>
                        </li>
                    </ul>

                    {/* Opciones a la derecha */}
                    <ul className="navbar-nav ml-auto navbar-right">
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">
                                        <i className="fas fa-user"></i> Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link">
                                        <i className="fas fa-shopping-cart"></i> Cart
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="btn btn-link nav-link">
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-primary nav-link">
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="btn btn-outline-primary nav-link">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
