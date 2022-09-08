data = []

with open('text.txt') as text:
        for line in text:
                data.append(line.replace("\n", ""))
        
def sortlist(unsorted):
        for i in range(len(unsorted) - 1):
                for j in range(i + 1, len(unsorted)):
                       if unsorted[i] > unsorted[j]:
                               temp = unsorted[i]
                               unsorted[i] = unsorted[j]
                               unsorted[j] = temp
                
print(f"Unsorted Data: {data}")
sortlist(data)
print(f"Sorted Data: {data}")
