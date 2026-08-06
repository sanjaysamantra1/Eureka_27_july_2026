students = [
        { "sId": 401, "name": 'ravi', "marks": 72, "grade": 'B', "city": 'delhi' },
        { "sId": 403, "name": 'priya', "marks": 91, "grade": 'A', "city": 'mumbai' },
        { "sId": 402, "name": 'arjun', "marks": 55, "grade": 'C', "city": 'delhi' },
        { "sId": 405, "name": 'sneha', "marks": 88, "grade": 'A', "city": 'pune' },
        { "sId": 404, "name": 'rohit', "marks": 40, "grade": 'D', "city": 'mumbai' }
    ];

grouped_student = {}

for stud in students:
    city = stud["city"]
    if city not in grouped_student:
        grouped_student[city] = {"total": 0, "count": 0, "avg": 0 }
        
    grouped_student[city]["total"] = grouped_student[city]["total"] + stud["marks"]
    grouped_student[city]["count"] = grouped_student[city]["count"] + 1
    grouped_student[city]["avg"] = grouped_student[city]["total"] / grouped_student[city]["count"]

print(grouped_student)