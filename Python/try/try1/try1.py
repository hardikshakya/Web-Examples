import sys #You will get input from node in sys.argv(list)
import json
import pandas as pd #Import just to check if you dont have pandas module you can comment it or install pandas using pip install pandas

if __name__ == "__main__":
    traffic_df = pd.read_csv('/Users/hardik.shakya/Desktop/Web-Examples/Python/project/trafficdata.csv', delimiter = ';')

    j = sys.argv[1]
    # print("j: ",j)

    # traffic_df1 = traffic_df[traffic_df.City == sys.argv[1]]
    # traffic_df2 = traffic_df1[traffic_df1.Area == sys.argv[2]]
    # traffic_df3 = traffic_df2[traffic_df2.dCount == sys.argv[3]]
    # traffic_df4 = traffic_df3[traffic_df3.hours == int(sys.argv[4])]

    # car_num = traffic_df4['CAR'].sum()
    # bus_num = traffic_df4['BUS'].sum()
    # lgv_num = traffic_df4['LGV'].sum()
    # h2_num = traffic_df4['HGVR2'].sum()
    # h3_num = traffic_df4['HGVR3'].sum()
    # h4_num = traffic_df4['HGVR4'].sum()
    # v3_num = traffic_df4['HGVA3'].sum()
    # v5_num = traffic_df4['HGVA5'].sum()
    # v6_num = traffic_df4['HGVA6'].sum()
    # hgv_num = traffic_df4['HGV'].sum()
    # amv_num = traffic_df4['AMV'].sum()

    # veh_sum = car_num + bus_num + lgv_num + h2_num + h3_num + h4_num + v3_num + v5_num + v6_num + hgv_num + amv_num

    t = traffic_df[traffic_df.Area == sys.argv[1]]
    av_df1 = t[t.hours == int(sys.argv[2])]

    av_car_num = av_df1['CAR'].mean()
    av_bus_num = av_df1['BUS'].mean()
    av_lgv_num = av_df1['LGV'].mean()
    av_h2_num = av_df1['HGVR2'].mean()
    av_h3_num = av_df1['HGVR3'].mean()
    av_h4_num = av_df1['HGVR4'].mean()
    av_v3_num = av_df1['HGVA3'].mean()
    av_v5_num = av_df1['HGVA5'].mean()
    av_v6_num = av_df1['HGVA6'].mean()
    av_hgv_num = av_df1['HGV'].mean()
    av_amv_num = av_df1['AMV'].mean()

    av_veh_sum = (av_car_num + av_bus_num + av_lgv_num + av_h2_num + av_h3_num + av_h4_num + av_v3_num + av_v5_num + av_v6_num + av_hgv_num + av_amv_num)//11

    print(av_veh_sum)
