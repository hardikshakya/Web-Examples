import numpy as np 
#1
# arr = np.array( [[ 1, 2, 3], [ 4, 2, 5]] ) 

# print("Array is of type: ", type(arr)) 

# print("No. of dimensions: ", arr.ndim) 

# print("Shape of array: ", arr.shape) 
 
# print("Size of array: ", arr.size) 

# print("Array stores elements of type: ", arr.dtype)

#2

# a = np.zeros((2,2)) 
# print(a, '\n')

# b = np.ones((1,2))
# print(b, '\n')

# c = np.full((2,2), 7)
# print(c, '\n')

# d = np.eye(3)
# print(d, '\n')

# e = np.random.random((2,2)) 
# print(e, '\n')

#3

# a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])

# b = a[:2, 1:3]
# row_r1 = a[1, :] # Rank 1 view
# row_r2 = a[1:2, :] # Rank 2 view

# print(row_r1, row_r1.shape)
# print(row_r2, row_r2.shape)

# col_r1 = a[: , 1] # Rank 1 view
# col_r2 = a[:, 1:2] # Rank 2 view

# print(col_r1, col_r1.shape)
# print(col_r2, col_r2.shape)

#4

# a = np.arange(1,5)
# print(a)

# a = np.arange(1,5,2)
# print(a)

#5

# a = np.linspace(1,5,10) # it create array from 1 to 5 with 10 elements of same space between them
# print(a)

#6

# a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])
# print(a,'\n')
# print(a.shape,'\n')
# print(a.reshape(4,3))

#7

# a = np.array([[1,2] , [3,4], [5,6]])    # 1 2
# print(a.max(),'\n')                     # 3 4 
# print(a.min(),'\n')                     # 5 6
# print(a.sum(axis=0),'\n')
# print(a.sum(axis=1),'\n')
# print(np.sqrt(a),'\n')

#8 

# a = np.array([[1,2,3], [4,5,6], [7,8,9]])
# print(a[[0,1,2], [0,1,0]])   # It will find a[0, 0], a[1, 1], a[2, 0] elements

#9

# x = np.array([1, 2], dtype=np.int32)
# print(x.dtype)

#10

x = np.array([[1,2], [3,4]])
print('x :','\n', x,'\n')
print('transpose of x :','\n', x.T,'\n')
