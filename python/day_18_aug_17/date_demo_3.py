from datetime import date

dateObj = date.today()
print(dateObj.strftime("%d-%m-%Y"))
print(dateObj.strftime("%d-%B-%Y"))
print(dateObj.strftime("%A, %d-%b-%Y"))
print(dateObj.strftime("%a, %d-%b-%Y"))