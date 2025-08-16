import {FormEvent, useState} from "react";

import styles from './RefactoredLogin.module.css';


type LoginFormProps = {
    onLogin: (credentials: { email: string; password: string }) => void;
};

export default function RefactoredLogin({onLogin}: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onLogin({email, password});
    };

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <section className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form} aria-labelledby="login-form-title">
                <fieldset>
                    <legend id="login-form-title">Login</legend>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>


                    <button type="submit" disabled={!isFormValid}>
                        Login
                    </button>


                </fieldset>
            </form>
        </section>

    );
}
