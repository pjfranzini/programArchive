def seven(*args)
  return 7 if args.length == 0
  puts args[0][1]
  #eval "7*args[0][1]" if args[0][0] = "times"
  eval "7 #{args[0][0]} args[0][1]"
end

def times(num)
  return ["*",num]
end

#puts seven
#puts times(seven)
puts seven(times(seven))