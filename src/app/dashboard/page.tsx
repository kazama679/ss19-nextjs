import React from 'react'
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";

export default function page() {
    const { isLoaded, userId } = useAuth();
    if (!isLoaded || !userId) {
      return <RedirectToSignIn />;
    }
    return (
      <div>
        <h1>Dashboard</h1>
        <p>đăng nhập thành cong</p>
      </div>
    );
}
