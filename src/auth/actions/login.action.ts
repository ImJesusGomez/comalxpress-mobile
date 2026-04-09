import comalXpressApi from '../../api/comalxpress.api';

export const loginAction = async (dataLogin: {
  email: string;
  password: string;
}) => {
  const { data } = await comalXpressApi.post('/auth/login', dataLogin);

  return data;
};
