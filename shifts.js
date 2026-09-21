function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, hourlyRate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);

  return Math.round(
    regularHours * hourlyRate +
    overtimeHours * hourlyRate * 1.5
  );
}

module.exports = { isValidShift, calculatePay };