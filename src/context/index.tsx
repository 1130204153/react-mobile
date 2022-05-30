import React, {
  createContext,
  useState,
  Dispatch,
  ReactNode,
  useMemo,
} from 'react';

interface Injected {
  userInfo: any;
  setUserInfo: Dispatch<any>;
  isLogin: boolean;
}

export const ctx = createContext<Injected>({
  userInfo: {},
  setUserInfo: () => false,
  isLogin: false,
});

interface Props {
  children?: ReactNode;
}

export function Provider({ children }: Props) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      userInfo,
      isLogin,
      setIsLogin,
      setUserInfo,
    }),
    [isLogin, userInfo],
  );

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
}
