function berlinClock(timeString) {
  let validTimes = validateInput(timeString);
  if (!validTimes) {
    return "Invalid time input";
  }
  let berlinClockOutput = "";
  berlinClockOutput += colorOfLightSeconds(validTimes.seconds) + "\n";
  // hours() function to test as component?
  berlinClockOutput += colorOfLightsFiveHours(validTimes.hours) + "\n";
  berlinClockOutput += colorOfLightsHours(validTimes.hours) + "\n";
  // minutes() function to test as component?
  berlinClockOutput += colorOfLightsQuarterMinutes(validTimes.minutes) + "\n";
  berlinClockOutput += colorOfLightsMinutes(validTimes.minutes);
  return berlinClockOutput;
}

function validateInput(timeString) {
  let split = timeString.split(":");
  if (!Array.isArray(split) || split.length !== 3) {
    return undefined;
  }
  let hours = split[0];
  let minutes = split[1];
  let seconds = split[2];
  if (!hours || hours === "" || isNaN(Number(hours)) || Number(hours) > 23) {
    return undefined;
  }
  if (
    !minutes ||
    minutes === "" ||
    isNaN(Number(minutes)) ||
    Number(minutes) > 59
  ) {
    return undefined;
  }
  if (
    !seconds ||
    seconds === "" ||
    isNaN(Number(seconds)) ||
    Number(seconds) > 59
  ) {
    return undefined;
  }
  return {
    hours: Number(hours),
    minutes: Number(minutes),
    seconds: Number(seconds),
  };
}

function colorOfLightSeconds(seconds) {
  return seconds % 2 == 0 ? "Y" : "O";
}

function colorOfLightsFiveHours(hours) {
  const devideByFive = hours / 5;
  const roundUpToWholeNumber = Math.floor(devideByFive);
  var lights = "";

  for (let index = 0; index < 4; index++) {
    lights += index < roundUpToWholeNumber ? "R" : "O";
  }

  return lights;
}

function colorOfLightsHours(hours) {
  const remainderAfterDevisionOfFive = hours % 5;
  switch (remainderAfterDevisionOfFive) {
    case 0:
      return "OOOO";
    case 1:
      return "ROOO";
    case 2:
      return "RROO";
    case 3:
      return "RRRO";
    case 4:
      return "RRRR";
  }
}

function colorOfLightsQuarterMinutes(minutes) {
  var output = "";
  for (let position = 1; position < 12; position++) {
    var fiveMinutesIncrementPerLight = position * 5;
    if (minutes >= fiveMinutesIncrementPerLight) {
      const remainderAfterDevisionOfFifteen = fiveMinutesIncrementPerLight % 15;
      output += remainderAfterDevisionOfFifteen === 0 ? "R" : "Y";
    } else {
      output += "O";
    }
  }
  return output;
}

function colorOfLightsMinutes(minutes) {
  const remainderAfterDevisionOfFive = minutes % 5;
  switch (remainderAfterDevisionOfFive) {
    case 0:
      return "OOOO";
    case 1:
      return "ROOO";
    case 2:
      return "RROO";
    case 3:
      return "RRRO";
    case 4:
      return "RRRR";
  }
}

module.exports = {
  colorOfLightSeconds,
  colorOfLightsFiveHours,
  colorOfLightsHours,
  colorOfLightsQuarterMinutes,
  colorOfLightsMinutes,
  validateInput,
  berlinClock,
};
