const {
  colorOfLightSeconds,
  colorOfLightsFiveHours,
  colorOfLightsHours,
  colorOfLightsQuarterMinutes,
} = require("../src/template");

describe("Berlin Clock", () => {
  describe("The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds", () => {
    it("even seconds 0,2,4... -> light blinks ", () => {
      expect(colorOfLightSeconds(0)).toEqual("Y");
    });
    it("odd seconds 1,3,5... -> light doesnt blink ", () => {
      expect(colorOfLightSeconds(1)).toEqual("O");
    });
  });

  describe("The second row consisting of four red lights denote five full hours each", () => {
    describe("Second row shows no lights when there are less than 5 hours", () => {
      it("0 hours -> all lights off", () => {
        expect(colorOfLightsFiveHours(0)).toEqual("OOOO");
      });
      it("4 hours -> all lights off", () => {
        expect(colorOfLightsFiveHours(4)).toEqual("OOOO");
      });
    });
    describe("Second row shows one lights when there are 5-9 hours", () => {
      it("5 hours -> first light on", () => {
        expect(colorOfLightsFiveHours(5)).toEqual("ROOO");
      });
      it("9 hours -> first light on", () => {
        expect(colorOfLightsFiveHours(9)).toEqual("ROOO");
      });
    });
    describe("Second row shows two lights when there are 10-14 hours", () => {
      it("10 hours -> first two lights on", () => {
        expect(colorOfLightsFiveHours(10)).toEqual("RROO");
      });
    });
    describe("Second row shows three lights when there are 15-19 hours", () => {
      it("15 hours -> first three lights on", () => {
        expect(colorOfLightsFiveHours(15)).toEqual("RRRO");
      });
      it("19 hours -> first three lights on", () => {
        expect(colorOfLightsFiveHours(19)).toEqual("RRRO");
      });
    });
    describe("Second row shows four lights when there are 20-24 hours", () => {
      it("20 hours -> all lights on", () => {
        expect(colorOfLightsFiveHours(20)).toEqual("RRRR");
      });
      it("24 hours -> all lights on", () => {
        expect(colorOfLightsFiveHours(24)).toEqual("RRRR");
      });
    });
  });
  describe("Third row shows no lights every fifth hour: 0, 5, 10, 15, 20", () => {
    it("0 hours -> all lights off", () => {
      expect(colorOfLightsHours(0)).toEqual("OOOO");
    });
    it("5 hours -> all lights off", () => {
      expect(colorOfLightsHours(5)).toEqual("OOOO");
    });
    it("10 hours -> all lights off", () => {
      expect(colorOfLightsHours(10)).toEqual("OOOO");
    });
    it("15 hours -> all lights off", () => {
      expect(colorOfLightsHours(15)).toEqual("OOOO");
    });
    it("20 hours -> all lights off", () => {
      expect(colorOfLightsHours(20)).toEqual("OOOO");
    });
  });
  describe("Third row, first light shows between hours: 1-4, 6-9, 11-14, 15-19, 21-24", () => {
    it("1 hours -> first light on", () => {
      expect(colorOfLightsHours(1)).toEqual("ROOO");
    });
    it("6 hours -> first light on", () => {
      expect(colorOfLightsHours(6)).toEqual("ROOO");
    });
    it("11 hours -> first light on", () => {
      expect(colorOfLightsHours(11)).toEqual("ROOO");
    });
    it("16 hours -> first light on", () => {
      expect(colorOfLightsHours(16)).toEqual("ROOO");
    });
    it("21 hours -> first light on", () => {
      expect(colorOfLightsHours(21)).toEqual("ROOO");
    });
  });
  describe("Third row, second light shows between hours: 2-4, 7-9, 12-14, 16-19, 22-24", () => {
    it("2 hours -> first and second light on", () => {
      expect(colorOfLightsHours(2)).toEqual("RROO");
    });
    it("7 hours -> first and second light on", () => {
      expect(colorOfLightsHours(7)).toEqual("RROO");
    });
    it("12 hours -> first and second light on", () => {
      expect(colorOfLightsHours(12)).toEqual("RROO");
    });
    it("17 hours -> first and second light on", () => {
      expect(colorOfLightsHours(17)).toEqual("RROO");
    });
    it("22 hours -> first and second light on", () => {
      expect(colorOfLightsHours(22)).toEqual("RROO");
    });
  });
  describe("Third row, third light shows between hours: 3-4, 8-9, 13-14, 17-19, 23-24", () => {
    it("3 hours -> first and second light on", () => {
      expect(colorOfLightsHours(3)).toEqual("RRRO");
    });
    it("8 hours -> first and second light on", () => {
      expect(colorOfLightsHours(8)).toEqual("RRRO");
    });
    it("13 hours -> first and second light on", () => {
      expect(colorOfLightsHours(13)).toEqual("RRRO");
    });
    it("18 hours -> first and second light on", () => {
      expect(colorOfLightsHours(18)).toEqual("RRRO");
    });
    it("23 hours -> first and second light on", () => {
      expect(colorOfLightsHours(23)).toEqual("RRRO");
    });
  });

  describe("Third row, forth light shows on hour: 4, 9, 14, 19, 24", () => {
    it("4 hours -> first and second light on", () => {
      expect(colorOfLightsHours(4)).toEqual("RRRR");
    });
    it("9 hours -> first and second light on", () => {
      expect(colorOfLightsHours(9)).toEqual("RRRR");
    });
    it("14 hours -> first and second light on", () => {
      expect(colorOfLightsHours(14)).toEqual("RRRR");
    });
    it("19 hours -> first and second light on", () => {
      expect(colorOfLightsHours(19)).toEqual("RRRR");
    });
    it("24 hours -> first and second light on", () => {
      expect(colorOfLightsHours(24)).toEqual("RRRR");
    });
  });
  describe("Fourth row shows...", () => {
    it("no lights when minutes < 5", () => {
      expect(colorOfLightsQuarterMinutes(4)).toEqual("OOOOOOOOOOO");
      expect(colorOfLightsQuarterMinutes(0)).toEqual("OOOOOOOOOOO");
    });
    it("first light yellow when minutes >= 5", () => {
      expect(colorOfLightsQuarterMinutes(5)).toEqual("YOOOOOOOOOO");
      expect(colorOfLightsQuarterMinutes(9)).toEqual("YOOOOOOOOOO");
    });
    it("second light yellow when minutes >= 10", () => {
      expect(colorOfLightsQuarterMinutes(10)).toEqual("YYOOOOOOOOO");
      expect(colorOfLightsQuarterMinutes(14)).toEqual("YYOOOOOOOOO");
    });
    it("third light red when minutes >= 15", () => {
      expect(colorOfLightsQuarterMinutes(15)).toEqual("YYROOOOOOOO");
      expect(colorOfLightsQuarterMinutes(19)).toEqual("YYROOOOOOOO");
    });
    it("fourth light yellow when minutes >= 20", () => {
      expect(colorOfLightsQuarterMinutes(20)).toEqual("YYRYOOOOOOO");
      expect(colorOfLightsQuarterMinutes(24)).toEqual("YYRYOOOOOOO");
    });
    it("fifth light yellow when minutes >= 25", () => {
      expect(colorOfLightsQuarterMinutes(25)).toEqual("YYRYYOOOOOO");
      expect(colorOfLightsQuarterMinutes(29)).toEqual("YYRYYOOOOOO");
    });
    it("sixth light red when minutes >= 30", () => {
      expect(colorOfLightsQuarterMinutes(30)).toEqual("YYRYYROOOOO");
      expect(colorOfLightsQuarterMinutes(34)).toEqual("YYRYYROOOOO");
    });
    it("zeventh light yellow when minutes >= 35", () => {
      expect(colorOfLightsQuarterMinutes(35)).toEqual("YYRYYRYOOOO");
      expect(colorOfLightsQuarterMinutes(39)).toEqual("YYRYYRYOOOO");
    });
    it("eigth light yellow when minutes >= 40", () => {
      expect(colorOfLightsQuarterMinutes(40)).toEqual("YYRYYRYYOOO");
      expect(colorOfLightsQuarterMinutes(44)).toEqual("YYRYYRYYOOO");
    });
    it("ninth light red when minutes >= 45", () => {
      expect(colorOfLightsQuarterMinutes(45)).toEqual("YYRYYRYYROO");
      expect(colorOfLightsQuarterMinutes(49)).toEqual("YYRYYRYYROO");
    });
    it("tenth light yellow when minutes >= 50", () => {
      expect(colorOfLightsQuarterMinutes(50)).toEqual("YYRYYRYYRYO");
      expect(colorOfLightsQuarterMinutes(54)).toEqual("YYRYYRYYRYO");
    });
    it("eleventh light yellow when minutes >= 55", () => {
      expect(colorOfLightsQuarterMinutes(55)).toEqual("YYRYYRYYRYY");
      expect(colorOfLightsQuarterMinutes(59)).toEqual("YYRYYRYYRYY");
    });
  });
});
