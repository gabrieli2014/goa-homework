def greet(name):
    return f"გამარჯობა, {name}!"
print(greet("გაბრიელ"))


def square(n):
    return n * n
print(square(5))   
print(square(10))  

def is_even(n):
    if n % 2 == 0:
        print ("ლუწია")
    else:
        print ("კენტია")
is_even(7)
is_even(10)

def maximum(a, b, c):
    return max(a, b, c)
print(maximum(3, 7, 5))   
print(maximum(10, 2, 8))  

def reverse_text(txt):
    return txt[::-1]
print(reverse_text("Python"))   
print(reverse_text("group60")) 



