import Cookies from 'js-cookie';

export function removeAuthCookie() {
  Cookies.remove('token', { path: '/' });
}
