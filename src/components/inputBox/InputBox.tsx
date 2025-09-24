import styled from "styled-components";
import Input from "../input/Input";
import { useState } from "react";

const InputBox: React.FC = () => {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const inputArray: inputArrayInterface[] = [
    { key: "firstName", placeholder: "First Name", type: "text" },
    { key: "lastName", placeholder: "Last Name", type: "text" },
    { key: "email", placeholder: "Email Address", type: "email" },
    { key: "password", placeholder: "Password", type: "password" },
  ];

  const [userInfo, setUserInfo] = useState<UserInfoInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<UserInfoInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: userInfo.firstName.trim() ? "" : "First Name cannot be empty",
      lastName: userInfo.lastName.trim() ? "" : "Last Name cannot be empty",
      email: gmailRegex.test(userInfo.email)
        ? ""
        : "Looks like this is not an email",
      password: userInfo.password.trim() ? "" : "Password cannot be empty",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((e) => e !== "");

    if (!hasErrors) {
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <WhiteContainer>
        <form onSubmit={handleSubmit}>
          {inputArray.map(({ key, placeholder, type }) => (
            <Input
              key={key}
              name={key}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              placeholder={placeholder}
              errors={errors}
              type={type}
            />
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
  min-height: 442px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  padding: 24px;

  @media (min-width: 1440px) {
    min-height: 474px;
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
