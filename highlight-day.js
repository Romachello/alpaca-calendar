document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('calendar__grid');
  if (!grid) return;

  grid.addEventListener('click', (event) => {
    const day = event.target;
    if (!day.classList.contains('calendar__day')) return;

    // Убрать выделение со всех
    grid.querySelectorAll('.calendar__day--selected').forEach(el => {
      el.classList.remove('calendar__day--selected');
    });

    // Добавить выделение к выбранному
    day.classList.add('calendar__day--selected');
  });
});
