import React, { useState } from 'react';
import api from '../../api'
import { Link, withRouter } from "react-router-dom";
import { login } from "../../services/auth";

import './index.css'

function initialState() {
    return { email: '', password: '' }
}

function Login(props) {
    const [values, setValues] = useState(initialState)

    function onChange(event) {
        const { value, name } = event.target

        setValues({
            ...values,
            [name]: value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await api.post('/users/authenticate', {
                email: values.email,
                password: values.password
            }) 
            if (!response.data.error) {
                login(response.data.token)
                props.history.push('/')
            } else {
                setValues({ error: response.data.error, email: '', password: '' })
            }
        } catch (err) {
            setValues({ error: 'Usuário não existe!' })
        }
    }

    return (
        <div class="login-container">
            <div class="card p-4">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <p class="error">{values.error}</p>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"
                            onChange={onChange} value={values.email} />
                        <div id="emailHelp" class="form-text">Seus dados estão a salvo.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input name="password" type="password" class="form-control" id="password"
                            onChange={onChange} value={values.password} />
                    </div>
                    <p>Não possui uma conta? <Link to="/register">Sign up</Link></p> 
                    <button class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)