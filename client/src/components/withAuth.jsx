import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AuthHelperMethods from "./AuthHelperMethods";

export default function withAuth(AuthComponent) {

  const auth = new AuthHelperMethods();

  function AuthWrapped() {

    const [confirm, setConfirm] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    const navigate = useNavigate()

    useEffect(() => {
      if (!auth.loggedIn()) {
        navigate.push("/login");
      } else {
        try {
          const confirm = auth.getConfirm();
          console.log("confirmation is:", confirm);
          setConfirm(confirm);
          setLoaded(true);
        } catch (err) {
          console.log(err);
          auth.logout();
          navigate.push("/login");
        }
      }
    }, []);

    if (loaded === true) {
      if (confirm) {
        console.log("confirmed!");
        return (
          <AuthComponent confirm={confirm} />
        );
      } else {
        console.log("not confirmed!");
        return null;
      }
    } else {
      return null;
    }
  }

  return AuthWrapped;
}
