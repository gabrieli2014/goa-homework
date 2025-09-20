#უნქციებს იმიტომ ვიყენებთ რომ კოდები თვითონ შევქმნათ და იმაში გვეხმარება რომ უფრონ ნაკლები კოდია და ნაკლები პრბლემა შესაძლოა იყოს

def average_of_three(a, b, c):
    
    total = a + b + c
    average = total /3
    return average


result = average_of_three(4, 7, 10)
print("The arithmetic:", result)


tool ='chainsaw'
print(tool.capitalize())#1 ასო დიდი
print(tool.upper())#ყველა ასო დიდი
print(tool.lower())#ყველა ასო პატარა
print(tool.strip())#შლის ცარიელ ადგილებს
print(tool.lstrip())#შლის ცარიელ ადგილს მარცხნივ
print(tool.rstrip())#შლის ცარიელ ადგილს მარჯვნივ
print(tool.index())#აბრუნებს იმ ინდექს სადაც ასო არის
print(tool.find())#აბრუნებს იმ ინდექს სადაც არის ასო თუ ასო არ არის გამოიტანს ერთს
