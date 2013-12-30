def prime(n)
  # base cases
  if n < 2
    primes = []
  elsif n == 2
    primes = [2]
  else
    primes = [2]
    full_test_set = prime(Math.sqrt(n).ceil)
    (3..n).each do |i|
      test_set = full_test_set.select {|x| x <= Math.sqrt(i)}
      is_prime = true
      test_set.each do |x|
        is_prime = false if i%x == 0
      end
      primes << i if is_prime
    end
  end
  primes
end

puts prime(300000).to_s