# The goal is to implement simple calculator which uses fluent syntax:
# Calc.new.one.plus.two             # Should return 3
# There are only four operations that are supported (plus, minus, times, divided_by) and 10 digits (zero, one, two, three, four, five, six, seven, eight, nine).
# Each calculation consists of one operation only.

# My (long simpleminded implementation) solution:
class Calc
  def initialize
    @x = nil
    @operator = nil
  end
  def zero
    number(0.0)
  end
  def one
    number(1.0)
  end
  def two
    number(2.0)
  end
  def three
    number(3.0)
  end
  def four
    number(4.0)
  end
  def five
    number(5.0)
  end
  def six
    number(6.0)
  end
  def seven
    number(7.0)
  end
  def eight
    number(8.0)
  end
  def nine
    number(9.0)
  end
  def number(n)
    if @x == nil
      @x = n
      return self
    else
      eval "#{@x} #{@operator} #{n}"
    end
  end
  def plus
    @operator = "+"
    return self
  end
  def minus
    @operator = "-"
    return self
  end
  def times
    @operator = "*"
    return self
  end
  def divided_by
    @operator = "/"
    return self
  end
end

# How to do this better:
class Calc
  def initialize
    @operation = ""
    @methods = {zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', plus: '+', minus: '-', times: '*', divided_by: '/'}
  end

  def method_missing(m)
    @methods[m].nil? ? raise(NoMethodError) : @operation << @methods[m]
    @operation.size < 3 ? self : eval(@operation)
  end
end

# Or another way:
class Calc
  def initialize(ops=[])
    @ops = ops
  end

  {zero: 0, one: 1, two: 2, three: 3,
  four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, plus: :+, minus: :-,
  times: :*, divided_by: :/}.each do |name, value|
    define_method name do
      if @ops.length == 2
        @ops[0].send @ops[1], value
      else
        Calc.new(@ops + [value])
      end
    end
  end
end