function shouldIBeTired(dailySchedule) {
  let drivingPresent = dailySchedule.filter((event) => event.includes('Drive'));
  if (drivingPresent.length === 0) return false;

  let hoursDriven = dailySchedule
    .filter((event) => event.includes('Drive'))
    .map((drive) =>
      drive[0]
        .replace(/:/g, '')
        .split('-')
        .reduce((a, b) => parseInt(a) - parseInt(b))
    )
    .reduce((a, b) => Math.abs(a) + Math.abs(b));

  return Math.abs(hoursDriven) > 900 ? true : false;
}
