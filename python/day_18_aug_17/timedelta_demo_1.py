from datetime import datetime, timedelta

today = datetime.today()

yesterday = today - timedelta(days=1)
tomorrow = today + timedelta(days=1)

print('yesterday: ', yesterday)
print('Today: ', today)
print('tomorrow: ', tomorrow)