import React from 'react';

import './Auth.css';

const auth = props =>
    <section className="auth-form">
        <h2 className="auth-form__title">Welcome to Bloggo - {props.title}</h2>
        {props.children}
    </section>;

export default auth;
