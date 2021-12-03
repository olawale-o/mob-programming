def descending_order(n)
  number = n.to_s
  return number.to_i if number.size < 2

  arr = number.split('')

  arr.sort! { |a, b| b <=> a }.join.to_i
end
