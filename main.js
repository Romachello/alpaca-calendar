import './style/style.scss';
import './js/calendar.js';

const grid = document.getElementById('calendar-grid');
const daysInMonth = 30;
grid.innerHTML = '';

for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement('div');
  day.className = 'calendar__day';
  day.textContent = i;
  grid.appendChild(day);
}