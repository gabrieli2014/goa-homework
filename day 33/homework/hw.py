#return ის გამოყენება მხოლოდ ერთხელ შეგვიძლია
#print ის გამოყენება რამდენჯერაც გვინდა იმდენჯერ

def check_age(age):
    if age >= 18:
        return "Access Granted"
    else:
        return "Access Denied"

print(check_age(20))  
print(check_age(15))  


def user_info(name, surname, address):
    return f"მომხმარებლის სახელი: {name}, მომხმარებლის გვარი: {surname}, მომხმარებლის მისამართი: {address}"


print(user_info("გაბრიელ", "ხელაია", "ქვემო ქვალონი"))



def number(num1,num2):
    return num1*num2

print(number(5,8))

def  arithmetic_average(a,b,c,d,e):
    return a+b+c+d+e/5
print(arithmetic_average(1,2,3,4,5))

