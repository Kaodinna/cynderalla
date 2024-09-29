import {
  View,
  SafeAreaView,
  Pressable,
  Text,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { addCommasToNumber } from "@/helpers/function";

export default function myOrdersScreen() {
  const [filter, setFilter] = useState("toReceive");

  const DATA = [
    {
      id: "1",
      state: "toReceive",
      orderId: "#92287157",
      status: "shipped",
      total: 345565,
      item: 4,
    },
    {
      id: "2",
      state: "cancelled",
      orderId: "#92287157",
      status: "shipped",
      total: 345565,
      item: 4,
    },
    {
      id: "3",
      state: "processed",
      orderId: "#92287100",
      status: "shipped",
      total: 555565,
      item: 10,
    },
    {
      id: "4",
      state: "toReceive",
      orderId: "#92287100",
      status: "Received",
      total: 555565,
      item: 10,
    },
    {
      id: "5",
      state: "cancelled",
      orderId: "#95547157",
      status: "shipped",
      total: 705565,
      item: 89,
    },
    {
      id: "6",
      state: "processed",
      orderId: "#95547157",
      status: "shipped",
      total: 705565,
      item: 89,
    },
  ];
  const filteredData = DATA.filter((data) => data.state === filter);

  type ItemProps = {
    state: string;
    orderId: string;
    status: string;
    total: number;
    item: number;
  };
  const prodcut = require("../assets/images/product2.jpg");
  const Item = ({ orderId, status, total, item }: ItemProps) => (
    <View className="border-[0.75px] border-[#E6E6E6] p-[6px] rounded-[8px] bg-white mb-2">
      <View className="flex flex-row items-center justify-between">
        <View className="mr-[3%] rounded-[6px] border-[#E6E6E6] border-[1px] py-[3px] px-[3px] w-[30%]">
          <Image source={prodcut} className="w-full h-[93px]" />
        </View>
        <View className="w-[67%]">
          <View className="mb-[16px]">
            <View className="flex flex-row justify-between items-center  mb-[4px]">
              <Text
                style={{ fontFamily: "Manrope_700Bold" }}
                className="text-[13px] text-[#050404]"
              >
                Order {orderId}
              </Text>
              <View className="py-[2px] px-[10px] bg-[#F9F9F9]">
                <Text
                  className="text-[10px] text-[#050404]"
                  style={{ fontFamily: "Manrope_500Medium" }}
                >
                  {item} Item
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center">
              <Text
                className="text-[10px] text-[#585757]"
                style={{ fontFamily: "Manrope_400Regular" }}
              >
                Status:
              </Text>
              <Text
                className="text-[10px] text-[#585757]"
                style={{ fontFamily: "Manrope_400Regular" }}
              >
                {status}
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between">
            <View className="flex flex-row items-center">
              <Text
                className="text-[14px] text-[#050404]"
                style={{ fontFamily: "Manrope_400Regular" }}
              >
                Total:
              </Text>
              <Text
                className="text-[16px] text-[#050404]"
                style={{ fontFamily: "Manrope_700Bold" }}
              >
                ₦{addCommasToNumber(total)}
              </Text>
            </View>
            {status === "Received" ? (
              <Pressable className="border-[#FF6EC7] border-[1px] py-[6px]  rounded-[4px] w-[77px]">
                <Text
                  className="text-[#FF6EC7] text-center"
                  style={{ fontFamily: "Manrope_400Regular" }}
                >
                  Review
                </Text>
              </Pressable>
            ) : (
              <Pressable className="bg-[#FF6EC7] py-[6px]  rounded-[4px]  w-[77px]">
                <Text
                  className="text-white text-center"
                  style={{ fontFamily: "Manrope_400Regular" }}
                >
                  Track
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FF] ">
      <View className="px-4">
        <View className="flex flex-row p-[2.13px] border-[#FFD2EE59] border-[1px] bg-[#FFF1F9] mt-4 rounded-[4px]">
          <Pressable
            className={`w-1/3  p-[4.25px] rounded-[4px]  ${
              filter === "toReceive" ? "bg-[#FF6EC7]" : "bg-[#FFF1F9]"
            }`}
            onPress={() => setFilter("toReceive")}
          >
            <Text
              className={`text-center text-[14px] text-white ${
                filter === "toReceive" ? "text-white" : "text-[#373636]"
              }`}
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              To Receive
            </Text>
          </Pressable>
          <Pressable
            className={`w-1/3  p-[4.25px] rounded-[4px] ${
              filter === "cancelled" ? "bg-[#FF6EC7]" : "bg-[#FFF1F9]"
            }`}
            onPress={() => setFilter("cancelled")}
          >
            <Text
              className={`text-center text-[14px] ${
                filter === "cancelled" ? "text-white" : "text-[#373636]"
              }`}
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              Cancelled
            </Text>
          </Pressable>
          <Pressable
            className={`w-1/3  p-[4.25px] rounded-[4px] ${
              filter === "processed" ? "bg-[#FF6EC7]" : "bg-[#FFF1F9]"
            }`}
            onPress={() => setFilter("processed")}
          >
            <Text
              className={`text-center text-[14px] ${
                filter === "processed" ? "text-white" : "text-[#373636]"
              }`}
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              Processed
            </Text>
          </Pressable>
        </View>
        <FlatList
          className="mt-4"
          data={filteredData}
          renderItem={({ item }) => (
            <Item
              state={item.state}
              orderId={item.orderId}
              status={item.status}
              total={item.total}
              item={item.item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
