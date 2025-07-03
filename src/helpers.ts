export function formatNumberWithCommas(value: number | string): string {
  const number = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(number)) return '0';
  return number.toLocaleString('en-US');
}

export const getDateRangeForQuery = (timeRange: string) => {
  const end = new Date();
  let start = new Date();

  switch (timeRange) {
    case '24H':
      start.setHours(start.getHours() - 24);
      break;
    case '7D':
      start.setDate(start.getDate() - 7);
      break;
    case '14D':
      start.setDate(start.getDate() - 14);
      break;
    case '30D':
      start.setDate(start.getDate() - 30);
      break;
    case '12M':
      start.setMonth(start.getMonth() - 12);
      break;
    case 'ALL':
      start = new Date(0);
      break;
  }

  return {
    start: start.toISOString(),
    end: end.toISOString()
  };
};

export function getShortNumber(value: number) {
  if (value >= 1_000_000_000_000) return (value / 1_000_000_000_000).toFixed(1); // T
  if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1); // B
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1); // M
  if (value >= 1_000) return (value / 1_000).toFixed(1); // K
  return value.toString();
}

export function getUnitSuffix(value: number) {
  if (value >= 1_000_000_000_000) return 'T';
  if (value >= 1_000_000_000) return 'B';
  if (value >= 1_000_000) return 'M';
  if (value >= 1_000) return 'K';
  return '';
}
export function convertDate(input: string): string {
  const date = new Date(input);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(date);

  const month = parts.find(p => p.type === 'month')?.value ?? '01';
  const day = parts.find(p => p.type === 'day')?.value ?? '01';
  const year = parts.find(p => p.type === 'year')?.value ?? '1970';
  const hour = parts.find(p => p.type === 'hour')?.value ?? '00';
  const minute = parts.find(p => p.type === 'minute')?.value ?? '00';

  return `${month}/${day}/${year}, ${hour}:${minute}`;
}

export const capitalize = (str?: string | null): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};