import { getDaysInMonth, getFirstWeekday } from './dateUtils.js';

const calendarGrid = document.getElementById('calendar__grid');
const monthLabel = document.querySelector('.calendar__month');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekday = getFirstWeekday(month, year) || 7;

  const prevMonth = new Date(year, month - 1);
  const daysInPrevMonth = getDaysInMonth(prevMonth.getMonth(), prevMonth.getFullYear());

  calendarGrid.innerHTML = '';

  // Предыдущий месяц
  for (let i = firstWeekday - 2; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    calendarGrid.innerHTML += `<div class="calendar__day calendar__day--other-month">${day}</div>`;
  }

  // Текущий месяц
  for (let d = 1; d <= daysInMonth; d++) {
    calendarGrid.innerHTML += `<div class="calendar__day">${d}</div>`;
  }

  // Следующий месяц (чтобы было 42 ячейки = 6 недель)
  const totalDisplayed = firstWeekday - 1 + daysInMonth;
  const nextDays = 42 - totalDisplayed;

  for (let d = 1; d <= nextDays; d++) {
    calendarGrid.innerHTML += `<div class="calendar__day calendar__day--other-month">${d}</div>`;
  }

  // Название месяца
  monthLabel.textContent = date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar(currentDate);
  document.documentElement.setAttribute('data-theme', 'dark'); 
});
