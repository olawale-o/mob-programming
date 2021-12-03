def is_isogram(string)
  word_split = string.split('')
  chars = []
  word_split.each do |w|
    return false if chars.include? w.downcase
    chars << w.downcase
  end
  true
end
