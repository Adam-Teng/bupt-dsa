export const SECOND = 1000
export const HOUR = 12

export function getHourTime(hour: number): string {
  return hour >= 12 ? 'PM' : 'AM'
}

export function getZeroPad(n: any) {
  return (parseInt(n, 10) >= 10 ? '' : '0') + n
}
