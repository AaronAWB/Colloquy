import React, { useState, useEffect } from "react";
import AuthHelperMethods from "./AuthHelperMethods";

export default function withAuth(AuthComponent) {
  const Auth = new AuthHelperMethods();

  function AuthWrapped(props) {
    const [confirm, setConfirm] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (!Auth.loggedIn()) {
        props.history.replace("/login");
      } else {
        try {
          const confirm = Auth.getConfirm();
          console.log("confirmation is:", confirm);
          setConfirm(confirm);
          setLoaded(true);
        } catch (err) {
          console.log(err);
          Auth.logout();
          props.history.replace("/login");
        }
      }
    }, []);

    if (loaded === true) {
      if (confirm) {
        console.log("confirmed!");
        return (
          <AuthComponent history={props.history} confirm={confirm} />
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
