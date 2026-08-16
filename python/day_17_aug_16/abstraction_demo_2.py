# Multiple abstract methods

from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod 
    def connect(self):  # abstract method can contain implementation also
        print("Initiating Databse Connection...")
    
    @abstractmethod
    def save(self,data):
        pass
    
    @abstractmethod
    def disconnect(self,data):
        pass
    

class MySQLDatabase(Database):
    def connect(self):
        super().connect()
        print('You are connected to MySQL Database')
        
    def save(self,data):
        print(f"your data {data} is saved")
        
    def disconnect(self):
        print('You are dis-connected from MySQL Database')
        

db = MySQLDatabase();
db.connect()
db.save('Some Data')
db.disconnect()

