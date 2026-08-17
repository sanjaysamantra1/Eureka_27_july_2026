from datetime import datetime

date_str = "17-08-2026"

print(date_str)

d = datetime.strptime(date_str,"%d-%m-%Y")

print(d)