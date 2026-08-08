class BankAccount:
    def __init__(self,accNo, name, accBal):
        self.accNo = accNo
        self.name = name
        self.accBal = accBal
        
    def deposit(self,amount):
        self.accBal += amount
        
    def show_balance(self):
        print(f"Account holder:{self.name} has Balance: {self.accBal}")
        
    def printHello(self):
        print(f"Hellooooooo")
        
acc1 = BankAccount(12345 , "manish", 50000)
acc1.show_balance()
acc1.deposit(2000)
acc1.show_balance()
acc1.printHello()