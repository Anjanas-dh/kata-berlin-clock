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

module.exports = {
  colorOfLightSeconds,
  colorOfLightsFiveHours,
  colorOfLightsHours,
  colorOfLightsQuarterMinutes,
};
