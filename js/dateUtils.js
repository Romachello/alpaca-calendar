export function getDaysInMonth(month, year) {
   return new Date(year, month + 1, 0).getDate();
 }
 
 export function getFirstWeekday(month, year) {
   const day = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
   return day === 0 ? 6 : day - 1; // 0 (Sun) → 6, 1 (Mon) → 0, ..., 6 (Sat) → 5
 }
 