"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// Call this hook at the top of any protected page component
export function useRequireAuth() {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    // Check Redux token
    if (token) return;
    // Check localStorage/sessionStorage for persisted token
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (storedToken) return;
    }
    // If no token, redirect to login
    router.replace("/login");
  }, [token, router]);
}
// Utility to get auth headers from localStorage
export function getAuthHeaders() {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Utility to save user and token to localStorage
export function saveAuthToLocalStorage(user, token) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
  // Set token in cookie for SSR middleware
  document.cookie = `token=${token}; path=/; max-age=604800`; // 7 days expiry
}

// Utility to clear auth from localStorage
export function clearAuthFromLocalStorage() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}
