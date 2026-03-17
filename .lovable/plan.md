

# תוכנית: שכפול מערכת Hagihon Connect והתאמתה ל"מי עירון"

## מה נבנה
העתקת הקוד מפרויקט Hagihon Connect לפרויקט הנוכחי, עם התאמות לעיצוב "מי עירון" לפי התמונה שהועלתה (גריד אייקונים על רקע מים כחול), ותמיכה ב-3 שפות (עברית, ערבית, אנגלית).

## שינויים עיקריים מ-Hagihon

### 1. ברנדינג ועיצוב
- שינוי שם מ"הגיחון" ל"מי עירון" / "مياه وادي عارة"
- פלטת צבעים כחולה בהירה (בהשראת התמונה: כותרת כחולה `207 78% 45%`, רקע מים בהיר)
- דף בית בסגנון גריד אייקונים (2 עמודות) במקום טאבים: תיק תושב, הזמנת תור, טפסים, חשבונית ירוקה, העברת דירה, קו מים חדש, מכרזים, תשלום חשבון
- שורת חיפוש בראש הדף

### 2. מערכת שפות (i18n)
- יצירת `LanguageContext` עם 3 שפות: עברית (ברירת מחדל), ערבית, אנגלית
- קובץ תרגומים `translations.ts` עם כל הטקסטים
- כפתור בחירת שפה בהדר (Select/Dropdown)
- כיוון RTL לעברית וערבית, LTR לאנגלית

### 3. קבצים שייווצרו / יועתקו

| קובץ | פעולה |
|---|---|
| `src/contexts/LanguageContext.tsx` | חדש - ניהול שפות |
| `src/data/translations.ts` | חדש - תרגומים |
| `src/contexts/ThemeContext.tsx` | העתקה מ-Hagihon (שם localStorage → `meieiron_theme`) |
| `src/contexts/AuthContext.tsx` | העתקה מ-Hagihon, התאמת שמות |
| `src/data/mockData.ts` | העתקה והתאמה לתוכן "מי עירון" |
| `src/components/Header.tsx` | חדש – לוגו מי עירון, בורר שפה, toggle ערכת נושא |
| `src/components/LoginForm.tsx` | העתקה והתאמה |
| `src/components/HomePage.tsx` | חדש – גריד אייקונים כמו בתמונה |
| `src/components/SearchBar.tsx` | חדש – שורת חיפוש |
| `src/components/VideoBackground.tsx` | העתקה (רקע מים) |
| `src/components/dashboard/*` | העתקה והתאמה |
| `src/index.css` | עדכון פלטת צבעים |
| `src/App.tsx` | עדכון עם providers חדשים |
| `src/pages/Index.tsx` | עדכון |

### 4. מבנה הניווט
- **דף בית**: גריד שירותים (8 כרטיסים עם אייקונים) + חיפוש
- **לחיצה על כרטיס**: מעבר לדף הרלוונטי (תיק תושב, תשלום, דיווח תקלה וכו')
- **הדר**: לוגו + בורר שפה + toggle theme + התנתקות

### 5. פרטים טכניים
- `dir` attribute דינמי: `rtl` לעברית/ערבית, `ltr` לאנגלית
- גופן IBM Plex Sans Hebrew לעברית, Noto Sans Arabic לערבית
- Mock data בלבד (ללא API בשלב זה)
- Recharts לגרפים (כמו ב-Hagihon)

