class RomanNumerals
    @@hundreds = {9 => 'CM', 8 => 'DCCC', 7 => 'DCC', 6 => 'DC', 5 => 'D', 4 => 'CD', 3 => 'CCC', 2 => 'CC', 1 => 'C', 0 => ''}
    @@tens = {9 => 'XC', 8 => 'LXXX', 7 => 'LXX', 6 => 'LX', 5 => 'L', 4 => 'XL', 3 => 'XXX', 2 => 'XX', 1 => 'X', 0 => ''}
    @@ones = {9 => 'IX', 8 => 'VIII', 7 => 'VII', 6 => 'VI', 5 => 'V', 4 => 'IV', 3 => 'III', 2 => 'II', 1 => 'I', 0 => ''}
  def self.to_roman(arabic)
    roman = 'M' * (arabic / 1000) + @@hundreds[(arabic % 1000)/100] + @@tens[(arabic % 100)/10] + @@ones[(arabic % 10)/1]
  end
  def self.from_roman(roman)
    slices = roman.match(/(M+)([CD]+M?)([LX]+C?)([VI]+X?)/)
    puts slices[3]
    arabic = 1000*slices[1].length + 100*@@hundreds.key(slices[2]) + 10*@@tens.key(slices[3]) + @@ones.key(slices[4])
  end
end
puts RomanNumerals.to_roman(4600)
puts RomanNumerals.from_roman('MMMMDC')