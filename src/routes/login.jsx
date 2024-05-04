import { useState } from "react";
import {
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        const user = await loginUser({ email, password });
        const pathname =
            new URL(request.url).searchParams.get("redirectTo") || "/host";
        localStorage.setItem("loggedIn", "true");
        let response = redirect(pathname);
        response.body = true;
        return response;
    } catch (err) {
        return err;
    }
}

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export default function Login() {
    const message = useLoaderData();
    const error = useActionData();
    const navigation = useNavigation();

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && (
                <h3 style={{ color: "red" }}>
                    <i>{error.message}</i>
                </h3>
            )}
            <h3 style={{ color: "red" }}>{message && message}</h3>
            <Form className="login-form" method="post" replace>
                <input name="email" type="email" placeholder="Email address" />
                <input name="password" type="password" placeholder="Password" />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"}
                </button>
            </Form>
        </div>
    );
}
