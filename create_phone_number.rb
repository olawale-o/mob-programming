def create_phone_number(numbers)
  "(#{numbers.slice!(0, 3).join}) #{numbers.slice!(0, 3).join}-#{numbers.join}"
end
