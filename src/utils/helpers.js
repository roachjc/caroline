export function formatPostDate(date) {
  if (typeof Date.prototype.toLocaleDateString !== `function`) {
    return date
  }
  date = new Date(date)
  return date.toLocaleDateString(`en-US`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  })
}
