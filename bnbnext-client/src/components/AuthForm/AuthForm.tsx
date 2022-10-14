import { url } from "inspector";
import React from "react";
import styled from "styled-components";
import { localLogin } from '../../lib/api'

import NaverFav from "../../static/images/icon_sns_naver.png";
import KakaoFav from "../../static/images/icon_sns_kakao.png";
import GoogleFav from "../../static/images/icon_sns_google.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  width: 100%;
  font-family: "Favorit";

  .social-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  button {
    width: 100%;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    height: 50px;
    border-radius: 5px;
    outline: none;
    border: none;
    justify-content: center;
    margin: 0;
    font-weight: 600;
    cursor: pointer;

    .favicon {
      height: 100%;
    }

    &.facebook {
      color: #fff;
      background: rgb(59, 89, 152);
    }

    &.google {
      color: #000;
      background: transparent;
      border: 1px solid #878787;
    }

    &.naver {
      color: #fff;
      background: #03cf5d;
    }

    &.kakao {
      color: #000;
      background: #f8df00;
    }

    &.login {
      color: #fff;
      background: #000;
    }
  }

  .divide {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 15px 0;

    hr {
      display: inline-flex;
      margin: 12px 0 20px;
      flex: 1;
      border-top: 1px solid rgb(217, 218, 220);
    }

    span {
      flex: 0.3;
      font-size: 12px;
      line-height: 1px;
      background: #fff;
      text-align: center;
      align-self: center;
    }
  }

  .login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      width: 100%;
    }

    label {
      font-size: 14px;
    }

    input {
      width: 100%;
      height: 52px;
      padding: 14px;
      background: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      outline: none;
      box-shadow: 0 0 0 1px #878787;
      border: none;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: 16px;
      font-weight: 300;
    }
  }

  hr {
    width: 100%;
    margin: 12px 0 20px;
    border-top: 1px solid rgb(217, 218, 220);
  }

  .sign-up-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    button {
      background: transparent;
      border: 1px solid #878787;
    }
  }
`;

const AuthForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <p>계속하려면 Buyandbelieve에 로그인하세요.</p>

      <div className="social-wrapper">
        <button className="kakao">
          <img className="favicon" src={KakaoFav} />
          카카오로 계속하기
        </button>
        <button className="naver">
          <img className="favicon" src={NaverFav} />
          네이버로 계속하기
        </button>
        <button className="google">
          <img className="favicon" src={GoogleFav} />
          구글로 계속하기
        </button>
      </div>

      <div className="divide">
        <hr />
        <span>또는</span>
        <hr />
      </div>

      <div className="login-form">
        <div>
          <label>이메일 주소 또는 사용자 이름</label>
          <input />
        </div>

        <div>
          <label>비밀번호</label>
          <input style={{ background: "rgb(232, 240, 254)" }} type="password" />
        </div>

        <a href="/" style={{ fontSize: 14, marginTop: -10}}>비밀번호를 잊었나요?</a>

        <button className="login" onClick={() => localLogin(email, password)}>로그인하기</button>
        <hr />
      </div>

      <div className="sign-up-section">
        <p>계정이 없나요?</p>
        <button>Buyandbelieve에 가입하기</button>
      </div>
    </Container>
  );
};

export default AuthForm;
