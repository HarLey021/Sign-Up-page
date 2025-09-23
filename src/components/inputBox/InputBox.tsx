import styled from "styled-components";
import Input from "../input/Input";
import { useState } from "react";

const InputBox: React.FC = () => {
  const inputArray: string[] = [
    "First Name",
    "Last Name",
    "Email Address",
    "Password",
  ];

  const [userInfo, setUserInfo] = useState<UserInfoInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  console.log(userInfo);
  return (
    <>
      <WhiteContainer>
        <form onSubmit={handleSubmit}>
          {inputArray.map((name: string) => (
            <Input name={name} userInfo={userInfo} setUserInfo={setUserInfo} />
          ))}
          <Submit type="submit">CLAIM YOUR FREE TRIAL</Submit>
        </form>
        <Terms>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </Terms>
      </WhiteContainer>
    </>
  );
};

export default InputBox;

const WhiteContainer = styled.div`
  width: 100%;
  height: 442px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  padding: 24px;

  @media (min-width: 1440px) {
    height: 474px;
    padding: 40px;
  }
`;

const Submit = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  border: none;
  background: #38cc8b;
  box-shadow: 0 -4px 0 0 rgba(0, 0, 0, 0.09) inset;

  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 8px;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const Terms = styled.p`
  color: #bab7d4;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  padding: 0 15px;

  span {
    color: #ff7979;
    font-size: 11px;
    font-weight: 700;
  }
`;
