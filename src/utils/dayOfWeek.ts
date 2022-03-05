import { locale } from '../config'

// takes a date (YYYY-MM-DD) and returns a day of the week
const dayOfWeek = (IsoDate: string): string => {
  const date = new Date(IsoDate)
  return date.toLocaleDateString(locale, { weekday: 'long' })
}

export default dayOfWeek
