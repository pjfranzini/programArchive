csvColumns = (csv, indices) ->
  csvA = csv.split("\n").map (x) -> x.split(",")
  #console.log(csv.split("\n"))
  foo = csvA.map (x) -> indices.map (y) -> x[y]
  foo = foo.map (x) -> x.filter (y) -> y != null
  console.log(foo)
  bar = foo.map (x) -> x.join(",")
  console.log(bar)
  console.log(bar.join("\n"))
  bar.join("\n")