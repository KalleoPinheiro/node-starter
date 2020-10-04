export interface DateTimeFormatOptions {
  year: string
  month: string
  day: string
  hour: string
  minute: string
  second: string
  timeZone: string
  timeZoneName?: string
  hour12: boolean
}

export const dateFormat = (date: Date): string => {
  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_Paulo',
    hour12: false
  }

  return new Intl.DateTimeFormat('pt-BR', options).format(date)
}
