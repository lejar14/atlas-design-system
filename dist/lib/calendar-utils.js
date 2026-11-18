const WEEKDAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
function addMonths(date, amount) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function formatMonthLabel(date) {
  return `${MONTH_NAMES[date.getMonth()].slice(0, 3).toUpperCase()} ${date.getFullYear()}`;
}
function formatDateLabel(date) {
  return `${MONTH_NAMES[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`;
}
function getMonthGrid(month) {
  const first = startOfMonth(month);
  const startOffset = first.getDay();
  const gridStart = new Date(first.getFullYear(), first.getMonth(), 1 - startOffset);
  return Array.from(
    { length: 42 },
    (_, i) => new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i)
  );
}
export {
  WEEKDAY_HEADERS,
  addMonths,
  formatDateLabel,
  formatMonthLabel,
  getMonthGrid,
  isSameDay,
  isWeekend,
  startOfMonth
};
//# sourceMappingURL=calendar-utils.js.map