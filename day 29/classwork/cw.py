grades = []

for i in range (5):
    num = int(input('pls enter num 1-10:'))
    

if num>1 or num<10:
    print('ERROR')

else:
    grades.append(num)
    print(grades)


numbers = [5, 12, 7, 9, 20, 33, 41, 56, 78, 91, 100, 121, 150]

new=numbers[0:2]

odd_new=numbers[1:2]

rev_new = numbers[:-1][:2]


print(new)
print(odd_new)
print(rev_new)

text = "პითონის სლაისინგი მაგარია"

word1 = text[8:17]                      
word2 = text[:7] + " " + text[17:]   
word3 = text[:-2]   
word4 = text[:text.index(" ")]          

print(word1)
print(word2)
print(word3)
print(word4)

