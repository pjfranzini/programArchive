# Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
#  sumIntervals( [
#     [1,4],
#     [7, 10],
#     [3, 5]
#  ] ); //=> returns 7  ( Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.)

# first extend arrays to have an "unique" method
Array::unique = ->
  output = {}
  output[@[key]] = @[key] for key in [0...@length]
  value for key, value of output

sumIntervals = (intervals) ->
  ranges = intervals.map (x) -> [x[0]...x[1]]
  one = ranges.reduce (x,y) -> x.concat y
  one.unique().length