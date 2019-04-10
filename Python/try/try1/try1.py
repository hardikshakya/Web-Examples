import sys #You will get input from node in sys.argv(list)
import json
import pandas as pd #Import just to check if you dont have pandas module you can comment it or install pandas using pip install pandas

# def add_two(a, b):
#     sum = 0
#     for i in range(a, b):
#         sum += i
#     print(sum)  

if __name__ == "__main__":
    traffic_df = pd.read_csv('/Users/hardik.shakya/Desktop/Web-Examples/Python/project/trafficdata.csv', delimiter = ';')

    j = sys.argv[1]
    # print("j: ",j)

    traffic_df1 = traffic_df[traffic_df.City == j]
    traffic_df2 = traffic_df1[traffic_df1.Area == 'Merseyside']
    traffic_df3 = traffic_df2[traffic_df2.dCount == sys.argv[2]]
    traffic_df4 = traffic_df3[traffic_df3.hours == int(sys.argv[3])]

    car_num = traffic_df4['CAR'].sum()
    bus_num = traffic_df4['BUS'].sum()
    lgv_num = traffic_df4['LGV'].sum()
    h2_num = traffic_df4['HGVR2'].sum()
    h3_num = traffic_df4['HGVR3'].sum()
    h4_num = traffic_df4['HGVR4'].sum()
    v3_num = traffic_df4['HGVA3'].sum()
    v5_num = traffic_df4['HGVA5'].sum()
    v6_num = traffic_df4['HGVA6'].sum()
    hgv_num = traffic_df4['HGV'].sum()
    amv_num = traffic_df4['AMV'].sum()

    veh_sum = car_num + bus_num + lgv_num + h2_num + h3_num + h4_num + v3_num + v5_num + v6_num + hgv_num + amv_num
    # print("Here...!")
    # print(sys.argv)
     #sys.argv[0] is filename
    print(veh_sum)
    # add_two(20000, 5000000) #I make this function just to check 
# So for all print done here you will get a list for all print in node, here-> console.log(i, "---->", typeof i)