export function getDaysInMonth(month, year) {
   return new Date(year, month + 1, 0).getDate();
 }
 
 export function getFirstWeekday(month, year) {
   return new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
 }
 