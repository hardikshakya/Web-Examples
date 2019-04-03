import numpy as np

#1

x = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])
v = np.array([1, 0, 1])
y = np.empty_like(x)   # Create an empty matrix with the same shape as x

print('y:', '\n', y, '\n')

for i in range(4):
    y[i, :] = x[i, :] + v

print('y:', '\n', y, '\n')