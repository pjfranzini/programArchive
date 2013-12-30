getGeneration = (cells, generations) ->
  if generations != 0
    for i in [1..generations]
      cells = expand(cells)
      cells = iterateLife(cells)
      cells = crop(cells)
      cells = crop(cells)
  cells

iterateLife = (c) ->
  d = []
  d.push([]) for i in [0..c.length-1]
  for i in [0..c.length - 1] #height
    for j in [0..c[0].length - 1] #width
      cNcount = cN(c,i,j)
      if (c[i][j] == 1 and (cNcount == 2 or cNcount == 3)) or (c[i][j] == 0 and cNcount == 3)
        d[i][j] = 1
      else
        d[i][j] = 0
  d

cN = (cells, i, j) ->
  hh = cells.length
  ww = cells[0].length
  neighbors = [[i,j+1], [i,j-1], [i-1,j],[i-1,j+1], [i-1,j-1], [i+1,j],[i+1,j-1], [i+1,j+1]]
  inbounds = neighbors.filter (x) -> x[0] >= 0 and x[0] < hh and x[1] >= 0 and x[1] < ww
  liveCells = inbounds.filter (x) -> cells[x[0]][x[1]] == 1
  liveCount = liveCells.length
  liveCount

expand = (cells) ->
  l = cells[0].length + 1
  zeroRow = []
  zeroRow.push(0) for i in [0..l]
  zeroRow = [zeroRow]
  expanded = cells.map (e) => [0].concat(e).concat([0])
  expanded = zeroRow.concat(expanded).concat(zeroRow)

crop = (c) ->
  topRow = c[0]
  if (topRow.every (x)-> x == 0)
    c.shift()
  bottomRow = c[c.length - 1]
  if (bottomRow.every (x)-> x == 0)
    c.pop()
  if (c.every (x)-> x[0] == 0)
    c.map (e) => e.shift()
  l = c[0].length - 1
  if (c.every (x)-> x[l] == 0)
    c.map (e) => e.pop()
  c