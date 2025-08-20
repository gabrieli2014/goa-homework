nums=[21,43,65,87]

#21 დგას 0 ელემენტზე, 43 დგას 1 ელემენტზე, 65 დგას 2 ელემენტზე, 87 დგას 3 ელემენტზე.

print(nums[-4])

print(nums[-1])



result=[]

for i in range(10):
    nums = int(input('pls enter a number:'))
    if nums % 10 == 0:
        result.append(nums)
print(result)






names = ["Gurami", "Gio", "Andria", "Mariami", "Dato"]

for i in names :
    if len(i) > 5:
     print(i)

