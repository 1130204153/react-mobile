module.exports = {
  uaaPath:
    process.env.NODE_ENV === 'development'
      ? 'https://172.16.85.3'
      : window.location.origin,
  backendContextPath: '/bssgw',
  refreshTokenPath: '/user/v1/auth/refreshToken',
  loginPath: '/customer/user/v1/auth/login',
  logoutPath: '/customer/user/v1/auth/logout',
  // 是否支持可跨域设置cookie
  withCredentials: true,
  SALT: '0102030405060708',
  PUBLIC_KEY:
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2xhZ9YP2GhO1jxb8a1aPP7i6ZjfjD6kTS++9/HfFb9KhUGt1zr3m5H7WQ/8oNUaJqaDHpjmKQ5hFUpHYVGQWjBlM+P1Ut2Y8EzKu6Kjra1tRC1r3YhoI7erLhRuv+8TZd+yswmn0ZnCskK6bUaFKlzXRaiZGzQKYQdDPJ12hubwIDAQAB',
  doSessionTimeout: () => {
    window.g_app._store.dispatch({
      type: 'login/logout',
      payload: {
        noCallLogout: true,
      },
    });
  },
  doSessionTimeoutStop2: () => {
    window.g_app._store.dispatch({
      type: 'login/logout',
    });
  },
};
