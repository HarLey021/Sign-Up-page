import styled from "styled-components";

const Input: React.FC<{
  name: string;
  userInfo: UserInfoInterface;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoInterface>>;
}> = ({ name, userInfo, setUserInfo }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <InputWrapper>
        <InputContainer
          onChange={handleChange}
          //   name={name}
          id={name}
          placeholder={name}
        ></InputContainer>
        <ErrorIcon src="icon-error.svg" />
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

  &::placeholder {
    opacity: 0.75;
  }
`;

const ErrorIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 24px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  position: relative;

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;
