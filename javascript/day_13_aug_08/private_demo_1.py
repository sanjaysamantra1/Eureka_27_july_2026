class BankAccount:
    def __init__(self,accNo, name, accBal):
        self.accNo = accNo
        self.name = name
        self.__accBal = accBal # private variable
        
    def deposit(self,amount):
        self.__accBal += amount
        
    def show_balance(self):
        print(f"Account holder:{self.name} has Balance: {self.__accBal}")
        
acc1 = BankAccount(12345 , "manish", 50000)
acc1.show_balance()
acc1.deposit(2000)
acc1.show_balance()

# print(f"Account holder:{acc1.name} has balance:{acc1.__accBal}")