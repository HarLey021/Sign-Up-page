interface UserInfoInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface inputArrayInterface {
  key: keyof UserInfoInterface;
  placeholder: string;
  type: string;
}
