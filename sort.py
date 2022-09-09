import sys
import fileinput

data = []

#with open('text.txt') as text:
#        for line in text:
#                data.append(line.replace("\n", ""))

for line in fileinput.input():
        if 'exit' == line.rstrip():
                break
        data.append(line.rstrip('\n'))
                
def swap(list, i, j):
        list[i], list[j] = list[j], list[i]
        return list
                
def sortlist(unsorted):
        for i in range(len(unsorted) - 1):
                for j in range(i + 1, len(unsorted)):
                       if unsorted[i] > unsorted[j]:
                               swap(unsorted, i, j)

print(f"Unsorted Data: {data}")
sortlist(data)
print(f"Sorted Data: {data}")
