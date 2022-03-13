import React from "react";
import { Container } from "../../styles";
import {
  ButtonLogin,
  IconLogin,
  LogoLogin,
  Title,
  User,
  WrapperLogin,
} from "./styles";

export default function Login() {
  return (
    <>
      <WrapperLogin>
        <Container>
          <Title>
            <p>FIND THE MOST LOVED ACTIVITIES</p>
            <h3>BLACK CAT</h3>
          </Title>
          <LogoLogin>
            <img src="/img/icons/logo-cat.svg" alt="" />
          </LogoLogin>
          <div className="input-login">
            <User>
              <input type="text" placeholder="user@blackcat.co" />
              <IconLogin>
                <img src="./img/icons/user.svg" alt="" />
              </IconLogin>
            </User>
            <User>
              <input type="text" placeholder="Password" />
              <IconLogin>
                <img src="./img/icons/password.svg" alt="" />
              </IconLogin>
            </User>
          </div>
        </Container>
        <ButtonLogin href="#">SIGN IN</ButtonLogin>
      </WrapperLogin>
    </>
  );
}
