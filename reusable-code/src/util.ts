export const dateStringToDate = (dateString: string): Date => {
  const [date, month, year] = dateString
    .split('/')
    .map((value): number =>
      parseInt(value)
    )

    return new Date(year, month - 1, date)
}