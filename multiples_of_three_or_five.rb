def multiples_of_three_or_five(number)
  return 0 if number < 0

  sum = 0
  0.upto(number - 1) do |n|
    sum += n if n % 3 == 0 || n % 5 == 0
  end
  sum
end
