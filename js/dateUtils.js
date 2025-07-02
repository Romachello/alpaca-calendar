export function getDaysInMonth(month, year) {
   return new Date(year, month + 1, 0).getDate();
 }
 
 export function getFirstWeekday(month, year) {
   const day = new Date(year, month, 1).getDay();
   return day === 0 ? 6 : day - 1; 
 }
 