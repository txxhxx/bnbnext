import React from "react";
import styled from "styled-components";
import { Header } from "~/components/Header";
import TextInput from "~/components/auth/TextInput";

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 450px;
  margin: 96px auto;
  padding: 20px 20px 0 20px;

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }

  span {
    font-size: 42px;
    text-transform: capitalize;
  }
`;

const SignUp = () => {
  const [email, setEmail] = React.useState<string>("");
  const [nickname, setNickname] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [password2, setPassword2] = React.useState<string>("");

  const [error, setError] = React.useState<string>("");

  const onSubmit = () => {
    if (password !== password2) {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <Header bottomBorder />

      <Display>
        <form>
          <h2>회원가입</h2>
          <TextInput
            label="이메일 주소를 입력해주세요."
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
          <TextInput
            label="닉네임을 입력하세요."
            value={nickname}
            onChange={(e: any) => setNickname(e.target.value)}
          />
          <TextInput
            label="비밀번호를 입력해주세요"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type="password"
          />
          <TextInput
            label="비밀번호 확인을 입력해주세요"
            value={password2}
            onChange={(e: any) => setPassword2(e.target.value)}
            type="password"
          />
        </form>
      </Display>
    </>
  );
};

export default SignUp;
