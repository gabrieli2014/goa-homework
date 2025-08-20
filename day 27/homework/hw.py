#append- ამატებს ელემენტს ლისტის ბოლოში
#pop-მიცემულ ინდექსზე მდგომ ელემენტს შლის
#insert-ამატებს ახალ მნიშვლობას საჭირო ინდექსის ადგილას

nums=[89,67,45,23]

print(len(nums))


numbers = []


for i in range(5):
    num = int(input("enter num: "))
    numbers.append(num)  

print(numbers)


colors = ["red", "green", "blue", "yellow", "purple"]

colors.pop(4)

print(colors)

animals = ["dog", "cat", "elephant", "lion"]

animals.insert(1,'monkey')

print(animals)


student_names=[]

for i in range(3):
    names=int(input("enter student names: "))
    student_names.append(names)

print(student_names)