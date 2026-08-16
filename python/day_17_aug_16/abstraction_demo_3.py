
from abc import ABC, abstractmethod

class Notification(ABC):
    @abstractmethod
    def send(self,message):
        pass
    
    
class EmailNotification(Notification):
    def send(self,message):
        pass
        # print(f"Sending email: {message}")
        
class SMSNotification(Notification):
    def send(self,message):
        print(f"Sending email: {message}")
        
        
notification1 = EmailNotification()
notification2 = SMSNotification()

notification1.send("Your Order has been shipped")
notification2.send("You should receive your order soon")