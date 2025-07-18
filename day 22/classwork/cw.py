age= int(input('enter your age:'))

experience=int(input('enter your experience year:'))


if age>22 and experience>2:
    print('Hired')

elif age>25 and experience>1:
    print('Hired')

elif age>20 and experience>3:
    print('Hired')

else:
    print('not hired')


name=input('enter  your name:')

if name=='gurami':
    print('hired')

else:
    print('not hired')



nums=[1,2,3,4,5,6,7,8,9,10]

print(len(nums))

print(sum(nums))

print(min(nums))

print(max(nums))

nums.append(35)

nums.reverse()

nums.remove(5)

print(nums)


nums=[]

for i in range(5):
    nums.append(int(input('pls input num:')))

for i in nums:
    if i % 2 ==0:
        print(i)















































