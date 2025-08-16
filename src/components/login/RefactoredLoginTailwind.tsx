import {FormEvent, useState} from "react";

type LoginFormProps = {
    onLogin: (credentials: { email: string; password: string }) => void;
};

export default function RefactoredLoginTailwind({onLogin}: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onLogin({email, password});
    };

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <section className="flex min-h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md rounded-md border border-gray-300 bg-gray-50 p-6" aria-labelledby="login-form-title">
                <fieldset className="flex flex-col gap-4">
                    <legend id="login-form-title" className="mb-4 text-xl font-bold">Login</legend>

                    <div>
                        <label htmlFor="email" className="mb-1 block font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded border border-gray-400 px-2 py-2 text-base focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 block font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded border border-gray-400 px-2 py-2 text-base focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                        />
                    </div>

                    <button type="submit" disabled={!isFormValid}
                        className="mx-auto w-1/2 rounded bg-gray-500 px-4 py-2 text-base text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-300">
                        Login
                    </button>
                </fieldset>
            </form>
        </section>

    );
}
