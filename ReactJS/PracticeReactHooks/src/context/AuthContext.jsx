import { createContext, useContext, useEffect, useState } from "react";
import { logout, login, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  // 사용자 정보가 남아있다면 로그인 유지
  useEffect(() => {
    onUserStateChange((user) => {
      // console.log('3',user.uid);
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout, uid: user && user.uid}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
