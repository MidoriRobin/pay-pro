/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { magic } from "../lib/magic";

export async function handleLoginWithMagic(email) {
  const result = { status: 0, data: "" };

  const didToken = await magic.auth.loginWithMagicLink({
    email,
    redirectURI: new URL("/invoice", window.location.origin).href,
  });

  const userEmail = { email };

  // TODO: CHange url to alterneate between login and signup for use in home component as well
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + didToken,
    },
    body: JSON.stringify(userEmail),
  })
    .then(async (response) => {
      //! Changed to 201 to cuz signup hardcoded
      if (response.status === 201) {
        try {
          const userMetadata = await magic.user.getMetadata();
          result.status = 201;
          result.data = { ...userMetadata };
        } catch (error) {
          console.log(
            `An error occured trying to use magic login, Error: ${error}`,
          );
        }
      } else if (response.status === 202) {
        result.status = 202;
      }
    })
    .catch((error) => {
      console.log(`There was an error submitting your request: ${error}`);
      alert("There was an error submitting your request");
    });

  return result;
}
