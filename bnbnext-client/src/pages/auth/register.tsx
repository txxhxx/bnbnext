import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        font-size: 14px;
      }
    }
  }
`;

const Register = () => {
  const [input, setInput] = React.useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = React.useState<null | string>("");
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (
      input.email &&
      input.nickname &&
      input.password &&
      input.passwordConfirm
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [input]);

  function handleInputChange(e: any) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (input.password !== input.passwordConfirm) {
      setError("Check your password again.");
    } else {
      setError(null);

      try {
        const response = await axios.post(
          "http://localhost:4000/register",
          {
            email: input.email,
            password: input.password,
            nickname: input.nickname,
          },
          { withCredentials: true }
        );

        navigate("/");
      } catch (err: any) {
        console.log(err);
        setError(err.response.data.error.message);
      }
    }
  }

  return (
    <Container>
      <form>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={input.email}
            type="text"
            placeholder="example@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Nickname</label>
          <input
            value={input.nickname}
            name="nickname"
            type="text"
            placeholder=""
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            value={input.password}
            type="password"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password Confirm</label>
          <input
            name="passwordConfirm"
            value={input.passwordConfirm}
            type="password"
            placeholder=""
            onChange={handleInputChange}
          />
          <span>{error}</span>
        </div>

        <input disabled={disabled} type="submit" onClick={handleSubmit} />
      </form>
    </Container>
  );
};

export default Register;
