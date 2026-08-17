from datetime import datetime

now = datetime.now()

print(now)
print(now.hour)
print(now.minute)
print(now.second)

print(now.strftime("%I:%M:%S %p"))