from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def pay(self,amount):
        pass
    
class CreditCard(Payment):
    def pay(self,amount):
        print(f"Paid amount {amount} using CreditCard")
        
class UPI(Payment):
    def pay(self,amount):
        print(f"Paid amount {amount} using UPI")
        
# Can't instantiate abstract class Payment without an implementation for abstract method 'pay'       
# p1 = Payment()
# p1.pay()

p2 = CreditCard()
p3 = UPI()

p2.pay(1000)
p3.pay(2000)