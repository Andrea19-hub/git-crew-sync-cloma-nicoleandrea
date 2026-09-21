function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  const overtimeMultiplier = 1.5;

  const totalPay =
    regularHours * rate +
    overtimeHours * rate * overtimeMultiplier;

  return Math.round(totalPay);
}

module.exports = { isValidShift, calculatePay };