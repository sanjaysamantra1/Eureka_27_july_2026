class Payment:
    def pay(self,amount):
        print("Processing the payment")
        
class CreditCard(Payment):
    def pay(self,amount):
        print(f"Paid amount {amount} using CreditCard")
        
class UPI(Payment):
    def pay(self,amount):
        print(f"Paid amount {amount} using UPI")
        
class Cash(Payment):
    def pay(self,amount):
        print(f"Paid amount {amount} using Cash")

payments = [CreditCard() , UPI() , Cash() ]

for payment in payments:
    payment.pay(2000) 