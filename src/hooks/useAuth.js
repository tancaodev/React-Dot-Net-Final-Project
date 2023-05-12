import jwt_decode from 'jwt-decode';

export const useAuth = () => {
  const jwtToken = localStorage.getItem('jwtToken');

  let isAdmin = false;
  let isUser = false;
  let status = 'user';

  if (jwtToken) {
    const decodeJwt = jwt_decode(jwtToken);
    const username = decodeJwt.userName;
    const role = decodeJwt.role;

    isAdmin = role.includes('Admin');
    isUser = role.includes('User');

    if (isAdmin) status = 'admin';
    if (isUser) status = 'user';

    return { username, role, status, isAdmin, isUser };
  }
  return { username: '', role: [], isAdmin, isUser, status };
};
