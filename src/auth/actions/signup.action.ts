import comalXpressApi from '../../api/comalxpress.api';

export const signupAction = async (dataSignup: {
  name: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const { data } = await comalXpressApi.post('/auth/register', dataSignup);

  return data;
};
