import Toast from 'react-native-toast-message';

type ToastType = 'error' | 'info' | 'success';

interface Props {
  type: ToastType;
  title: string;
  message?: string;
}

export const ToastMessage = ({ type, title, message }: Props) => {
  return Toast.show({
    type: type,
    text1: title,
    text2: message,
  });
};
