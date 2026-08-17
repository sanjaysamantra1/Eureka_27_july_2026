from datetime import date

traingStartDate = date(2026,7,27)
today = date.today()

diff = today - traingStartDate

print(diff.days)