import { AuthResponse } from 'src/types/auth.type';
import http from 'src/utils/http';

export const registerAccount = (body: {
  email: string;
  password: string;
  phone: string;
  address: string;
}) => {
  return http.post<AuthResponse>('/register', body);
};
