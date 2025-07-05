sum = 0

while True:
    number = int(input("enter number: "))
    if number == 0:
        break
    sum = sum+number

print("", sum)


day = input("enter any day of weekend: ")

if day == "monday":
    print("starter of weekend")
elif day == "tuesday" or day == "wednesday" or day == "thursday":
    print("beetwen weekend")
elif day == "friday":
    print("close to weekend")
elif day == "saturday" or day == "sunday":
    print("weekend!")
else:
    print('wrong day')




word = input("შეიყვანე სიტყვა: ")


vowels = "აეიოუ"


count = 0


for letter in word:
    if letter in vowels:
        count= count+1

print("", count)



