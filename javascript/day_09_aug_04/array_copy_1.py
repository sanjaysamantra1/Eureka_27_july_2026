import copy

arr1 = [10,20]
arr2 = arr1 # reference Copy

arr1.append(30)
print('arr-1: ',arr1)
print('arr-2: ',arr2)

arr3 = [10, 20, [30, 31]]
arr4 = copy.copy(arr3) # Shallow Copy
arr3.append(40)
arr3[2].append(32)
print('arr-3: ',arr3)
print('arr-4: ',arr4)

arr5 = [10, 20, [30, 31]]
arr6 = copy.deepcopy(arr5) # Deep Copy
arr5.append(40)
arr5[2].append(32)
print('arr-5: ',arr5)
print('arr-6: ',arr6)


# Reference Copy (=) : No Copy is made, Both variables point to same Array
# Shallow Copy (copy.copy()) : Creates a new outer array, but nested arrays are shared
# Deep Copy (copy.deepcopy()) : Creates a completely independent copy, including nested arrays