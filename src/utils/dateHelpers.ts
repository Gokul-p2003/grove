import { format, subDays, addDays, parseISO, isSameDay, isSunday, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

export const getTodayString = (): string => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const getYesterdayString = (): string => {
  return format(subDays(new Date(), 1), 'yyyy-MM-dd');
};

export const formatDateDisplay = (dateStr: string): string => {
  try {
    const d = parseISO(dateStr);
    return format(d, 'MMM d, yyyy');
  } catch {
    return dateStr;
  }
};

export const formatShortDate = (dateStr: string): string => {
  try {
    const d = parseISO(dateStr);
    return format(d, 'MMM d');
  } catch {
    return dateStr;
  }
};

export const getLast30DaysStrings = (): string[] => {
  const result: string[] = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    result.push(format(subDays(today, i), 'yyyy-MM-dd'));
  }
  return result;
};

export const isCurrentMonthString = (monthStr: string): boolean => {
  return monthStr === format(new Date(), 'yyyy-MM');
};

export const getCurrentMonthString = (): string => {
  return format(new Date(), 'yyyy-MM');
};
