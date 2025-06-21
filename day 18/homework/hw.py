for i in range(1,100):
    print(i)

num =1
while num <= 50:
    num=num+1
    print(num)

num=int(input("input 10 numbers:"))

sum = 0
for i in range(1,num):
    sum = sum + i
    print(sum)


correct_pass=("hey321")
guess = str (input('guess pass:'))
while correct_pass <= guess:
    guess=(input('guess pass:'))
while correct_pass == guess:
    print('congrats you got it right')