export function CorrectTime(time: string): Date {
  const dayMonthYearRest = time.split(". ");
  const day: number = Number(dayMonthYearRest[0]);
  const month: number = Number(dayMonthYearRest[1]);
  const year: number = Number(dayMonthYearRest[2]);

  const hourMinute = dayMonthYearRest[3].split(":");
  const hour = Number(hourMinute[0]);
  const minute = Number(hourMinute[1]);

  return new Date(year, month - 1, day, hour, minute, 0);
}
