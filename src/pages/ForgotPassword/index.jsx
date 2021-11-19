import React, { useState } from "react";
import { userService } from "../../services/user";
import { ButtonCustom } from "../../components/ButtonCustom/styled-button-custom";
import { validateEmail } from "../../utils";

import * as S from "./styles";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const handlePasswordReset = (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailInvalid(false);
    if (email) {
      if (validateEmail(email) === true)
        userService
          .sendPwdReset(email)
          .then(() => {
            // Password reset email sent!
            setLoading(false);
          })
          .catch((err) => {
            console.log("errorCode :", err.code);
            console.log("errorMessage: ", err.message);
            setLoading(false);
          });
    } else {
      setEmailInvalid(true);
      setLoading(false);
    }
  };

  return (
    <>
      <S.Container>
        <S.Card>
          <S.CardTitle>Recupere a sua senha</S.CardTitle>
          <S.Form onSubmit={handlePasswordReset}>
            <S.FormGroup>
              <S.TitleDiv>
                <S.FormLabel isInvalid={emailInvalid} htmlFor="email">
                  E-mail
                </S.FormLabel>
                {emailInvalid && (
                  <S.LoginError> E-mail inválido* </S.LoginError>
                )}
              </S.TitleDiv>
              <S.FormInput
                id="email"
                type="email"
                value={email}
                isInvalid={emailInvalid}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={80}
                required
              />
            </S.FormGroup>

            <S.ButtonsDiv>
              <ButtonCustom
                width="50%"
                disabled={loading || validateEmail(email)}
                className="signup-button"
                id="signupBtn"
                type="submit"
                loading={loading}
                purple
              >
                Enviar
              </ButtonCustom>
            </S.ButtonsDiv>
          </S.Form>
        </S.Card>
      </S.Container>
    </>
  );
};

export default ForgotPassword;
