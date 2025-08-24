import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios
      .get("https://chat-gpt-ikbk.onrender.com/api/auth/check", { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>;   // wait for check
  if (!auth) return <Navigate to="/login" replace />; // not logged in → redirect

  return children;  // logged in → allow access
}

