import React from 'react';
import { logout, isAuthenticated } from '../../services/auth'

import { Link, Redirect } from 'react-router-dom'

import './index.css'

import ProfileImg from '../../assets/images/example-profile-img2.jpg'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClickLogout() {
        logout()
    }

    profileSettings() {
        if (isAuthenticated()) {
            return (
                <div class="dropdown me-4 ms-4">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={ProfileImg} class="profile-icon"></img>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link class="dropdown-item" to="/profile">Meu Perfil</Link>
                        <Link class="dropdown-item" to="/orders">Meus Pedidos</Link>
                        <li><a class="dropdown-item" onClick={this.handleClickLogout}>Sair</a></li>
                    </ul>
                </div>
            )
        } else {
            return <Link class="nav-link link-secondary" to="/login">Login</Link>
        }
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Shospe</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                                {this.profileSettings()}
                        </div>
                    </div>
                </nav>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link link-secondary" href="#">Masculino</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-secondary" href="#">Feminino</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-secondary" href="#">Camisetas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-secondary" href="#">Calças</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-secondary" href="#">Calçados</a>
                    </li>
                </ul>
            </div>

        )
    }
}

export default NavBar;