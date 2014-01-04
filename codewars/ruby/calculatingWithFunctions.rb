# This time we want to write calculations using functions and get the results. Let's have a look at some examples:

# seven(times(five)) # must return 35
# four(plus(nine)) # must return 13
# eight(minus(three)) # must return 5
# six(divided_by(two)) # must return 3

# There must be a function for each number from 0 ("zero") to 9 ("nine")
# There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
# Each calculation consist of exactly one operation and two numbers
# The most outer function represents the left operand, the most inner function represents the right operand


# my solution (I muddled thru this and got it to work, but really don't see the point)
def zero(*args)
  return 0.0 if args.length == 0
  eval "0 #{args[0][0]} args[0][1]"
end
def one(*args)
  return 1.0 if args.length == 0
  eval "1 #{args[0][0]} args[0][1]"
end
def two(*args)
  return 2.0 if args.length == 0
  eval "2 #{args[0][0]} args[0][1]"
end
def three(*args)
  return 3.0 if args.length == 0
  eval "3 #{args[0][0]} args[0][1]"
end
def four(*args)
  return 4.0 if args.length == 0
  eval "4 #{args[0][0]} args[0][1]"
end
def five(*args)
  return 5.0 if args.length == 0
  eval "5 #{args[0][0]} args[0][1]"
end
def six(*args)
  return 6.0 if args.length == 0
  eval "6 #{args[0][0]} args[0][1]"
end
def seven(*args)
  return 7.0 if args.length == 0
  eval "7 #{args[0][0]} args[0][1]"
end
def eight(*args)
  return 8.0 if args.length == 0
  eval "8 #{args[0][0]} args[0][1]"
end
def nine(*args)
  return 9.0 if args.length == 0
  eval "9 #{args[0][0]} args[0][1]"
end
def plus(num)
  return ["+",num]
end
def minus(num)
  return ["-",num]
end
def times(num)
  return ["*",num]
end
def divided_by(num)
  return ["/",num]
end

# a compact solution
{ zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }.each do |m, n|
  Object.send(:define_method, m) { |proc = nil| proc ? proc.call(n) : n }
end
{ plus: :+, minus: :-, times: :*, divided_by: :/ }.each do |m, o|
  Object.send(:define_method, m) { |b| Proc.new { |a| a.send(o, b * 1.0) } }
end

# the author's solution
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].each_with_index do |number, index|
  self.class.send(:define_method, number) do |operation = nil|
    operation.nil? ? index : operation.call(index)
  end
end

{'plus' => '+', 'minus' => '-', 'times' => '*', 'divided_by' => '/'}.each_pair do |name, operation|
  self.class.send(:define_method, name) do |number2|
    lambda { |number1|
      eval(number1.to_s + '.to_f' + operation + number2.to_s)
    }
  end
end