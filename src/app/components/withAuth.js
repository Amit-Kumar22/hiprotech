"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    useEffect(() => {
      const hasToken = document.cookie
        .split(";")
        .some((c) => c.trim().startsWith("token="));
      if (!hasToken) {
        router.replace("/login");
      }
    }, [router]);
    return <Component {...props} />;
  };
}
