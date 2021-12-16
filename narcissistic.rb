def narcissistic?(value)
  numb = value.to_s.split('')
  len = numb.size
  value == numb.sum { |digit| digit.to_i.pow(len) }
end
