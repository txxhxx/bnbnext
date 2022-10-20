import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:4000/login",
        {
          email: input.email,
          password: input.password,
        },
        { withCredentials: true }
      );

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@buyandbelieve.com"
            onChange={handleInputChange}
            value={input.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={input.password}
          />
        </div>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </Container>
  );
};

export default Login;
