const {
  colorOfLightSeconds,
  colorOfLightsFiveHours,
  colorOfLightsHours,
  colorOfLightsQuarterMinutes,
  colorOfLightsMinutes,
  berlinClock,
  validateInput,
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
    it("3 hours -> first, second and third light on", () => {
      expect(colorOfLightsHours(3)).toEqual("RRRO");
    });
    it("8 hours -> first, second and third light on", () => {
      expect(colorOfLightsHours(8)).toEqual("RRRO");
    });
    it("13 hours -> first, second and third light on", () => {
      expect(colorOfLightsHours(13)).toEqual("RRRO");
    });
    it("18 hours -> first, second and third light on", () => {
      expect(colorOfLightsHours(18)).toEqual("RRRO");
    });
    it("23 hours -> first, second and third light on", () => {
      expect(colorOfLightsHours(23)).toEqual("RRRO");
    });
  });

  describe("Third row, forth light shows on hour: 4, 9, 14, 19, 24", () => {
    it("4 hours -> all lights turn on", () => {
      expect(colorOfLightsHours(4)).toEqual("RRRR");
    });
    it("9 hours -> all lights turn on", () => {
      expect(colorOfLightsHours(9)).toEqual("RRRR");
    });
    it("14 hours -> all lights turn on", () => {
      expect(colorOfLightsHours(14)).toEqual("RRRR");
    });
    it("19 hours -> all lights turn on", () => {
      expect(colorOfLightsHours(19)).toEqual("RRRR");
    });
    it("24 hours -> all lights turn on", () => {
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

  describe("Fifth row shows no lights every fifth minute: 0, 5, (...), 50, 55", () => {
    it("0 minutes -> all lights off", () => {
      expect(colorOfLightsMinutes(0)).toEqual("OOOO");
    });
    it("5 minutes -> all lights off", () => {
      expect(colorOfLightsMinutes(5)).toEqual("OOOO");
    });
    it("50 minutes -> all lights off", () => {
      expect(colorOfLightsMinutes(50)).toEqual("OOOO");
    });
    it("55 minutes -> all lights off", () => {
      expect(colorOfLightsMinutes(55)).toEqual("OOOO");
    });
  });

  describe("Fifth row, first light shows between minutes: 1-4, 6-9, (...), 51-54, 56-59", () => {
    it("1 minute -> first light on", () => {
      expect(colorOfLightsMinutes(1)).toEqual("ROOO");
    });
    it("6 minutes -> first light on", () => {
      expect(colorOfLightsMinutes(6)).toEqual("ROOO");
    });
    it("51 minutes -> first light on", () => {
      expect(colorOfLightsMinutes(51)).toEqual("ROOO");
    });
    it("56 minutes -> first light on", () => {
      expect(colorOfLightsMinutes(56)).toEqual("ROOO");
    });
  });

  describe("Fifth row, second light shows between minutes: 2-4, 7-9, (...), 52-54, 57-59", () => {
    it("2 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(2)).toEqual("RROO");
    });
    it("7 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(7)).toEqual("RROO");
    });
    it("52 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(52)).toEqual("RROO");
    });
    it("57 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(57)).toEqual("RROO");
    });
  });

  describe("Fifth row, third light shows between minutes: 3-4, 8-9, (...), 53-54, 58-59", () => {
    it("3 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(3)).toEqual("RRRO");
    });
    it("8 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(8)).toEqual("RRRO");
    });
    it("53 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(53)).toEqual("RRRO");
    });
    it("58 minutes -> first and second light on", () => {
      expect(colorOfLightsMinutes(58)).toEqual("RRRO");
    });
  });

  describe("Fifth row, all four light are on, minutes: 4, 9, (...), 54, 59", () => {
    it("4 minutes -> all lights on", () => {
      expect(colorOfLightsMinutes(4)).toEqual("RRRR");
    });
    it("9 minutes -> all lights on", () => {
      expect(colorOfLightsMinutes(9)).toEqual("RRRR");
    });
    it("54 minutes -> all lights on", () => {
      expect(colorOfLightsMinutes(54)).toEqual("RRRR");
    });
    it("59 minutes -> all lights on", () => {
      expect(colorOfLightsMinutes(59)).toEqual("RRRR");
    });
  });

  describe("Component: berlin clock", () => {
    describe("Validate time string input", () => {
      describe("Validate string format", () => {
        it("should return undefined if splitted string is not array", () => {
          expect(validateInput("aa")).toEqual(undefined);
        });
        it("should return undefined if splitted string array length is not 3", () => {
          expect(validateInput("11:11")).toEqual(undefined);
          expect(validateInput("11:11:11:11")).toEqual(undefined);
        });
        it("should not return undefined if splitted string is array && length === 3", () => {
          expect(validateInput("11:11:11")).toEqual({
            hours: 11,
            minutes: 11,
            seconds: 11,
          });
        });
      });
      describe("Validate hours", () => {
        it("should return undefined if hours are not numbers", () => {
          expect(validateInput("aa:44:44")).toEqual(undefined);
        });
        it("should return undefined if hours are not given", () => {
          expect(validateInput(":44:44")).toEqual(undefined);
        });
        it("should return undefined if hours are > 23", () => {
          expect(validateInput("44:44:44")).toEqual(undefined);
        });
        it("should return object if hours are valid", () => {
          expect(validateInput("00:44:44")).toEqual({
            hours: 0,
            minutes: 44,
            seconds: 44,
          });
          expect(validateInput("23:44:44")).toEqual({
            hours: 23,
            minutes: 44,
            seconds: 44,
          });
        });
      });
      describe("Validate minutes", () => {
        it("should return undefined if minutes are not numbers", () => {
          expect(validateInput("01:aa:44")).toEqual(undefined);
        });
        it("should return undefined if minutes are not given", () => {
          expect(validateInput("01::44")).toEqual(undefined);
        });
        it("should return undefined if minutes are > 59", () => {
          expect(validateInput("01:66:44")).toEqual(undefined);
        });
        it("should return object if minutes are valid", () => {
          expect(validateInput("01:01:44")).toEqual({
            hours: 1,
            minutes: 1,
            seconds: 44,
          });
          expect(validateInput("01:59:44")).toEqual({
            hours: 1,
            minutes: 59,
            seconds: 44,
          });
        });
      });
      describe("Validate seconds", () => {
        it("should return undefined if seconds are not numbers", () => {
          expect(validateInput("01:01:aa")).toEqual(undefined);
        });
        it("should return undefined if seconds are not given", () => {
          expect(validateInput("01:01:")).toEqual(undefined);
        });
        it("should return undefined if seconds are > 59", () => {
          expect(validateInput("01:01:66")).toEqual(undefined);
        });
        it("should return object if seconds are valid", () => {
          expect(validateInput("01:01:01")).toEqual({
            hours: 1,
            minutes: 1,
            seconds: 1,
          });
          expect(validateInput("01:01:59")).toEqual({
            hours: 1,
            minutes: 1,
            seconds: 59,
          });
        });
      });
    });
    describe("String output", () => {
      it("should output a string representation of the berlin clock time notation", () => {
        expect(berlinClock("22:44:31")).toEqual(
          "O\nRRRR\nRROO\nYYRYYRYYOOO\nRRRR"
        );
        expect(berlinClock("05:45:30")).toEqual(
          "Y\nROOO\nOOOO\nYYRYYRYYROO\nOOOO"
        );
        expect(berlinClock("23:59:59")).toEqual(
          "O\nRRRR\nRRRO\nYYRYYRYYRYY\nRRRR"
        );
        expect(berlinClock("00:00:00")).toEqual(
          "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO"
        );
      });
      it("should output an error message when input is invalid", () => {
        expect(berlinClock("aaa")).toEqual("Invalid time input");
        expect(berlinClock(":44:31")).toEqual("Invalid time input");
        expect(berlinClock("aa:44:31")).toEqual("Invalid time input");
        expect(berlinClock("11:aa:31")).toEqual("Invalid time input");
        expect(berlinClock("11:44:aa")).toEqual("Invalid time input");
      });
    });
  });

  describe("Component: hours", () => {});

  describe("Component: minutes", () => {});
});
