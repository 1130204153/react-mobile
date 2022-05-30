import request from '@/request';

export async function publicMenus(params: any) {
  return request.authRequest('/user/v1/auth/queryPublicMenus', {
    method: 'GET',
    params,
  });
}
