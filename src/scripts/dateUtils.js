export function toIsoYearMonth(mmYYYY) {
    if (!/^\d{1,2}\/\d{4}$/.test(mmYYYY)) {
        throw new Error(`Invalid date format: ${mmYYYY}`)
    }

    const [month, year] = mmYYYY.split('/')
    const m = Number(month)

    if (m < 1 || m > 12) {
        throw new Error(`Invalid month: ${month}`)
    }

    return `${year}-${String(m).padStart(2, '0')}`
}
