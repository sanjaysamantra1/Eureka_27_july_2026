class A:
    def demo(self):
        print("I am Demo method from A class")
        
class B:
    def demo(self):
        print("I am Demo method from B class")
        
class C(B,A):
    def test(self):
        print("I am test method from C class")
        
cObj = C()
cObj.test()
cObj.demo()