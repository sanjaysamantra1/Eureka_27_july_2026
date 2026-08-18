class InsufficientBalanceError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f"can not withdraw {amount}, balance is {balance}")

balance = 5000

try:
   amount = int(input("Enter Amount to withdraw: ")) 
   if amount <= 0:
        raise ValueError("Amount must be greater than zero")
   if amount > balance:
       exceptionObj = InsufficientBalanceError(balance,amount)
       raise exceptionObj
  
except ValueError as error:
    print("Transaction failed: ",error)
except InsufficientBalanceError as e:
    print("Transaction failed: ",e)
except:
    print("something went wrong")
else:
    balance -= amount
    print("Withdrawl Successful")
    print("Remaining Balance: ",balance)
finally:
    print("Finally block gets executed everytime")    