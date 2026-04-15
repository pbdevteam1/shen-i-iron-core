

# תוכנית: הוספת לוגו מי עירון לאתר ולדף כניסה

## מה ייעשה
העתקת תמונת הלוגו (`Meiah-Logo.png`) לתיקיית `src/assets/` והצגתה בשני מקומות:

### 1. Header (`src/components/Header.tsx`)
- החלפת אימוג'י טיפת המים 💧 בלוגו האמיתי
- תמונה בגודל ~40px בתוך ה-header

### 2. דף כניסה (`src/components/LoginForm.tsx`)
- החלפת אימוג'י 💧 בעיגול בלוגו האמיתי
- תמונה בגודל ~80px מעל כותרת ההתחברות

### פרטים טכניים
- קובץ: `src/assets/meiah-logo.png`
- ייבוא כ-ES6 module: `import logo from "@/assets/meiah-logo.png"`
- שימוש ב-`object-contain` לשמירת פרופורציות

