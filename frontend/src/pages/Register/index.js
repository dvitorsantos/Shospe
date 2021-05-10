import React from 'react';
import { Link, withRouter } from "react-router-dom";

import './index.css'

class Register extends React.Component {

    render() {
        return (
            <div class="register-container">
                <div class="card p-4">
                <h1>Cadastrar</h1>
                    <form>
                        <h1 class="display-6 mb-4"></h1>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">Seus dados estão a salvo.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <p>Possui uma conta?  <Link to="/login">Sign in</Link></p>
                        <button type="submit" class="btn btn-primary">Registrar</button>
                    </form>
                </div>
                </div>
        )
    }
}

export default withRouter(Register)