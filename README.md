# Kata BerlinClock

END-TO-END

Scenario 1:

Input String:
00:00:00

Output String:
Y
OOOO
OOOO
OOOOOOOOOOO
OOOO

Scenario 2:

Input String:
00:00:01

Output String:
O
OOOO
OOOO
OOOOOOOOOOO
OOOO

Scenario 3:

Input String:
05:00:00

Output String:
Y
ROOO
OOOO
OOOOOOOOOOO
OOOO

Scenario 4:

Input String:
11:00:00

Output String:
Y
RROO
ROOO
OOOOOOOOOOO
OOOO

Scenario 5:

Input String:
20:00:00

Output String:
Y
RRRR
OOOO
OOOOOOOOOOO
OOOO

Atomic behaviors:

- Top light turns yellow on even numbers
- Top light off on odd numbers

- Second row shows no lights when there are less than 5 hours
- Second row shows one lights when there are 5-9 hours
- Second row shows two lights when there are 10-14 hours
- Second row shows three lights when there are 15-19 hours
- Second row shows four lights when there are 20-24 hours

- Third row shows no lights every fifth hour: 0, 5, 10, 15, 20
- Third row shows one light every hour: 1, 6, 11, 16, 21
- Third row shows two lights every hour: 2, 7, 12, 17, 22
- Third row shows three lights every hour: 3, 8, 13, 18, 23
- Third row shows four lights every hour: 4, 9, 14, 19, 24

- Fourth row shows no lights when minutes < 5
- Fourth row shows first light yellow when minutes > 5
- Fourth row shows second light yellow when minutes > 10
- Fourth row shows third light red when minutes > 15
- Fourth row shows fourth light yellow when minutes > 20
- Fourth row shows fifth light yellow when minutes > 25
- Fourth row shows sixth light red when minutes > 30
- Fourth row shows zeventh light yellow when minutes > 35
- Fourth row shows eigth light yellow when minutes > 40
- Fourth row shows ninth light red when minutes > 45
- Fourth row shows tenth light yellow when minutes > 50
- Fourth row shows eleventh light yellow when minutes > 55

UNIT TESTS

- Top light turns yellow on even numbers
- Top light off on odd numbers
  ✔ 0 -> Y
  ✔ 1 -> O

- Second row shows no lights when there are less than 5 hours
  ✔ 0 -> OOOO
  ✔ 4 -> OOOO

- Second row shows one lights when there are 5-9 hours
  ✔ 5 -> ROOO
  ✔ 9 -> ROOO

- Second row shows two lights when there are 10-14 hours
  ✔ 10 -> RROO

- Second row shows three lights when there are 15-19 hours
  ✔ 17 -> RRRO

- Second row shows four lights when there are 20-24 hours
  ✔ 24 -> RRRR

- Third row shows no lights every fifth hour: 0, 5, 10, 15, 20
  ✔ 0 -> OOOO
  ✔ 5 -> OOOO
  ✔ 10 -> OOOO
  ✔ 15 -> OOOO
  ✔ 20 -> OOOO

- Third row, first light shows between hours: 1-4, 6-9, 11-14, 15-19, 21-24
  ✔ 1 -> ROOO
  ✔ 6 -> ROOO
  ✔ 11 -> ROOO
  ✔ 15 -> ROOO
  ✔ 21 -> ROOO

- Third row, second light shows between hours: 2-4, 7-9, 12-14, 16-19, 22-24
  ✔ 2 -> RROO
  ✔ 7 -> RROO
  ✔ 12 -> RROO
  ✔ 16 -> RROO
  ✔ 22 -> RROO

- Third row, third light shows between hours: 3-4, 8-9, 13-14, 17-19, 23-24
  ✔ 3 -> RRRO
  ✔ 8 -> RRRO
  ✔ 13 -> RRRO
  ✔ 17 -> RRRO
  ✔ 23 -> RRRO

- Third row, forth light shows on hour: 4, 9, 14, 19, 24
  ✔ 4 -> RRRR
  ✔ 9 -> RRRR
  ✔ 14 -> RRRR
  ✔ 19 -> RRRR
  ✔ 24 -> RRRR

- Fourth row shows no lights when minutes < 5
  ✔ 0 -> OOOOOOOOOOO
  ✔ 4 -> OOOOOOOOOOO
- Fourth row shows first light yellow when minutes > 5
- Fourth row shows second light yellow when minutes > 10
- Fourth row shows third light red when minutes > 15
- Fourth row shows fourth light yellow when minutes > 20
- Fourth row shows fifth light yellow when minutes > 25
- Fourth row shows sixth light red when minutes > 30
- Fourth row shows zeventh light yellow when minutes > 35
- Fourth row shows eigth light yellow when minutes > 40
- Fourth row shows ninth light red when minutes > 45
- Fourth row shows tenth light yellow when minutes > 50
- Fourth row shows eleventh light yellow when minutes > 55
