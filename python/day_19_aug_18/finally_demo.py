balance = 5000

try:
   amount = int(input("Enter Amount to withdraw: ")) 
   if amount <= 0:
          raise ValueError("Amount must be greater than zero")
   if amount > balance:
       raise ValueError("Insufficient Balance")
  
except ValueError as error:
    print("Transaction failed: ",error)
except:
    print("something went wrong")
else:
    balance -= amount
    print("Withdrawl Successful")
    print("Remaining Balance: ",balance)
finally:
    print("Finally block gets executed everytime")    