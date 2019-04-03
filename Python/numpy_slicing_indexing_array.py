import numpy as np

#1

# a = np.arange(6).reshape(3,2)
# b = np.arange(6,12).reshape(3,2)

# print(a,'\n')
# print(b,'\n')

# print('After vertical stacking a & b:', '\n', np.vstack((a,b)), '\n')
# print('After horizontal stacking a & b:', '\n', np.hstack((a,b)), '\n')

#2

# a = np.arange(30).reshape(2,15)
# print('a:', '\n', a, '\n')

# b = np.hsplit(a,3)          # It will going to split array 'a' into 3 parts horizonatally 
# print('b:', '\n', b, '\n')

#3

# a = np.arange(12).reshape(3,4)
# print('a:', '\n', a, '\n')

# b = a > 4
# print('b:', '\n', b, '\n')

# print( a[b] )   # It will going to print those element from 'a' which have true value respatvilly in 'b'

# a[b] = -1       # It will going to replace element from 'a' which have true value respatvilly in 'b' with '-1'
# print(a)