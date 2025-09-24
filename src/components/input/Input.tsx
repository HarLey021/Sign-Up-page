import styled from "styled-components";

const Input: React.FC<{
  name: keyof UserInfoInterface;
  userInfo: UserInfoInterface;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoInterface>>;
  placeholder: string;
  errors: UserInfoInterface;
  type: string;
}> = ({ name, userInfo, setUserInfo, placeholder, errors, type }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <InputWrapper>
        <InputContainer
          onChange={handleChange}
          name={name}
          id={name}
          value={userInfo[name]}
          placeholder={placeholder}
          type={type}
        ></InputContainer>
        {errors[name] && <ErrorIcon src="icon-error.svg" />}
        {errors[name] && <Error>{errors[name]}</Error>}
      </InputWrapper>
    </>
  );
};

export default Input;

const InputContainer = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  border: 1px solid #dedede;
  padding: 15px 20px;

  color: #3d3b48;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.25px;
  margin-bottom: 6px;

  &::placeholder {
    opacity: 0.75;
  }
`;

const ErrorIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 24px;
`;

const Error = styled.p`
  color: #ff7979;
  text-align: right;
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  width: 100%;
  min-height: 56px;
  margin-bottom: 16px;
  position: relative;

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;
