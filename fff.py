def add_underscores(word):
new_word = "_" # Initialize with an underscore
for char in word:
new_word = char + "_" # Overwrites new_word instead of appending
return new_word

phrase = "hello"
print(add_underscores(phrase))
