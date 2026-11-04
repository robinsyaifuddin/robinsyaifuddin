import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kirim request ke backend
    const res = await fetch("http://localhost:3001/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok && data.token) {
      onLogin(data.token);
    } else {
      setError(data.message || "Login gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-card rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-center text-primary mb-2">Admin Login</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-medium text-muted-foreground">Username</label>
          <input
            id="username"
            type="text"
            className="input input-bordered w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Masukkan username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-muted-foreground">Password</label>
          <input
            id="password"
            type="password"
            className="input input-bordered w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Masukkan password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}