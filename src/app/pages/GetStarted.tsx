import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function GetStarted() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    // Basic validation
    if (!name || !email || !company) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    // Simulate sign up
    setTimeout(() => {
      setSuccess("Account created! Check your email.");
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Company"
            value={company}
            onChange={e => setCompany(e.target.value)}
            disabled={loading}
          />
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-500 mb-2">{success}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating Account..." : "Get Started"}
        </Button>
      </form>
    </div>
  );
}
