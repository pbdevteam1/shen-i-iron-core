import { getStoredToken } from './api';

const API_BASE_URL = 'https://testapis-pb.api-connect.co.il';

export const registerUser = async (
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> => {
  const token = getStoredToken();
  if (!token) return { success: false, error: 'לא מחובר' };
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        access_token: token,
      },
      body: JSON.stringify({
        email,
        password,
        realm: 'meieiron',
        clientId: 'test',
      }),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return { success: false, error: data.message || 'שגיאה ברישום המשתמש' };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'שגיאה בתקשורת עם השרת' };
  }
};
