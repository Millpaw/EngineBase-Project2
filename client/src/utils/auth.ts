import { jwtDecode } from "jwt-decode";

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);
    // Check if token is expired
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
