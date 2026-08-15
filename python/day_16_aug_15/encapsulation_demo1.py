class BankAccount:
    def __init__(self, balance):
        self.__balance = balance
        
    def deposit(self,amtToDeposit):
        if amtToDeposit > 0:
            self.__balance += amtToDeposit
    def get_balance(self):
        return self.__balance
    
    
account1 = BankAccount(3000);
print('Balance Before Deposit: ',account1.get_balance())
account1.deposit(2000)
account1.deposit(-2000)
print('Balance After Deposit: ',account1.get_balance())