"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Identifiants incorrects");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-indigo-400 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-indigo-300 rounded-md bg-indigo-100 text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-indigo-300 rounded-md bg-indigo-100 text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
