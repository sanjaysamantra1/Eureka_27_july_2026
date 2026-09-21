import time

def get_user():
    time.sleep(2)
    return {"name": "John"}

def get_orders():
    time.sleep(2)
    return ["Order 1", "Order 2"]

def main():
    user = get_user()
    print(user)
    
    orders = get_orders()
    print(orders)

main()