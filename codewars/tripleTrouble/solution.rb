def update(board,i,j,value)
  return  "Game over -- board full" unless (board.map{|x| x.include?(0)}).include?(true)
  return "Try again  -- invalid position" unless board[i]
  return "Try again  -- invalid position" if board[i][j] != 0
  valid_pieces = [1,2,3,4,5]
  max_value = valid_pieces.last
  return "Try again  -- invalid piece" if !(valid_pieces.include?(value))
  score = [5, 20, 100, 500, 1500]
  value_before = value
  if value_before < max_value
    value_after = iterate_board(board,i,j,value) # board gets modified too, do not need to pass it in return
  else
    value_after = value_before
    board[i][j] = value_before
  end
  score_incr = score[value_after-1]
  while value_after != value_before && value_after < max_value do
    value_before = value_after
    value_after = iterate_board(board,i,j,value_before)
    score_incr = score_incr + score[value_after-1] if value_before != value_after
  end
  return [board, score_incr, "Game over -- board full"] unless (board.map{|x| x.include?(0)}).include?(true)
  return [board, score_incr]
end

def iterate_board(board,i,j,value)
  level_before = [[i,j]]
  level_after =  (level_before + check_neighbors(board,i,j,value)).uniq
  while level_before.length < level_after.length do
    level_before = level_after
    level_before.each do |nn|
      c = check_neighbors(board,nn[0],nn[1],value)
      level_after = level_after + c
    end
    level_after.uniq!
  end
  if level_after.length > 2
    value = value+1
    level_after.each do |x|
      board[x[0]][x[1]] = 0
    end
  end
  board[i][j] = value
  return value
end

def check_neighbors(board,i,j,value)
  hh = board.length
  ww = board[0].length
  neighbors = [[i,j+1], [i,j-1], [i+1,j], [i-1,j]]
  inbounds = neighbors.reject{|x| x[0] < 0 || x[0] >= hh || x[1] <0 || x[1] >= ww}
  similar_n = inbounds.reject{|x| board[x[0]][x[1]] != value}
  similar_n
end