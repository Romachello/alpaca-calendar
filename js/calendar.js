import { getDaysInMonth, getFirstWeekday } from './dateUtils.js';

const calendarGrid = document.querySelector('.calendar__grid');
const monthLabel = document.querySelector('.calendar__month-label');
const prevBtn = document.querySelector('.calendar__nav--prev');
const nextBtn = document.querySelector('.calendar__nav--next');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekday = getFirstWeekday(month, year);

  // Get previous month's trailing days
  const prevMonth = new Date(year, month - 1);
  const daysInPrevMonth = getDaysInMonth(prevMonth.getMonth(), prevMonth.getFullYear());

  calendarGrid.innerHTML = '';

  // Trailing days
  for (let i = firstWeekday - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    calendarGrid.innerHTML += `<div class="calendar__day calendar__day--other-month">${day}</div>`;
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    calendarGrid.innerHTML += `<div class="calendar__day">${d}</div>`;
  }

  // Next month placeholders (to fill 6 rows)
  const totalDisplayed = firstWeekday + daysInMonth;
  const nextDays = 42 - totalDisplayed;

  for (let d = 1; d <= nextDays; d++) {
    calendarGrid.innerHTML += `<div class="calendar__day calendar__day--other-month">${d}</div>`;
  }

  monthLabel.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);

document.documentElement.setAttribute('data-theme', 'dark'); // или 'light'

