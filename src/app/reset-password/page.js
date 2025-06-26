"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearError, clearStatus } from "../redux/slices/authSlice";
import Link from "next/link";

export default function ResetPasswordPage() {
  const dispatch = useDispatch();
  const { loading, error, resetSuccess } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", otp: "", newPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());
    await dispatch(resetPassword(form));
    dispatch(clearStatus());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {error}
            <button onClick={() => dispatch(clearError())} className="ml-2 text-xs text-blue-600">x</button>
          </div>
        )}
        {resetSuccess ? (
          <div className="text-green-600 text-center mb-4">Password reset successful! <Link href="/login" className="text-blue-600 underline">Login</Link></div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">OTP</label>
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
        <div className="mt-4 text-center text-sm">
          <Link href="/login" className="text-blue-600 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
