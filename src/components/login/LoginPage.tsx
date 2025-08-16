//import RefactoredLogin from "./RefactoredLogin.tsx";
import RefactoredLoginTailwind from "./RefactoredLoginTailwind.tsx";

export type Credentials = {
    email: string;
    password: string;
};

export default function LoginPage() {

    const handleLogin = (credentials: Credentials) => {
        console.log('Login submitted:', credentials);
    };

    return (
        <div>
            <h1>Welcome to the App</h1>
            <RefactoredLoginTailwind onLogin={handleLogin} />
        </div>
    );
}
