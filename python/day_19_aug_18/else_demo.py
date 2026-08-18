balance = 5000

try:
   amount = int(input("Enter Amount to withdraw: ")) 
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