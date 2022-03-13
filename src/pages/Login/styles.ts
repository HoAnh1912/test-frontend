import styled from "styled-components";

export const WrapperLogin = styled.div`
  background: url(/img/Street-Dance-01.jpg) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  position: fixed;
  height: 100vh;
`;
export const Title = styled.div`
  margin: 69px 0 37px 0;
  text-align: center;
  p {
    font-size: 16px;
    color: #d5ef7f;
    font-family: Source Sans Pro Regular;
  }
  h3 {
    font-size: 24px;
    font-family: Source Sans Pro Bold;
    color: #d5ef7f;
  }
`;
export const LogoLogin = styled.div`
  margin: 0 auto 116px;
  width: 64px;
  height: 64px;
`;
export const User = styled.div`
  position: relative;
  input {
    width: -webkit-fill-available;
    border-color: #d3c1e5;
    padding: 10px 0 10px 34px;
    border-radius: 20px;
    ::placeholder {
      color: #453257;
      font-size: 16px;
      font-family: Source Sans Pro Regular;
    }
  }
  input:nth-child(1) {
    margin-bottom: 16px;
  }
`;
export const IconLogin = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translate(0, -100%);
`;
export const ButtonLogin = styled.a`
  display: block;
  width: 100%;
  background: #d5ef7f;
  text-decoration: none;
  text-align: center;
  padding: 20px 0;
  font-size: 16px;
  color: #453257;
  cursor: pointer;
  text-transform: uppercase;
  font-family: Source Sans Pro SemiBold;
  margin-top: 55px;
  position: absolute;
  bottom: 0;
`;
