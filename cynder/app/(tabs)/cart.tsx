import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import React, { useState } from "react";

const DATA = [
  {
    id: "1",
    title: "Female Beauty Necklace",
    description: "Pink, Size M",
    price: 8300,
    qty: 3,
    image: require("../../assets/images/product2.jpg"),
  },
  {
    id: "2",
    title: "Female Beauty Necklace",
    description: "Pink, Size M",
    price: 8400,
    qty: 2,
    image: require("../../assets/images/product2.jpg"),
  },
  {
    id: "3",
    title: "Female Beauty Necklace",
    description: "Pink, Size M",
    price: 8500,
    qty: 1,
    image: require("../../assets/images/product2.jpg"),
  },
];
type ItemProps = {
  title: string;
  description: string;
  price: number;
  qty: number;
  image: any;
};

export default function Tab() {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handlePress = () => {
    setIsSelected(!isSelected); // Toggle the selection state
  };
  const Item = ({ title, image, description, price, qty }: ItemProps) => (
    <View className="flex flex-row items-center mt-4 justify-between pr-4">
      <View className="w-[10%]">
        <RadioButton.Android
          value="option2"
          onPress={handlePress}
          status={isSelected ? "checked" : "unchecked"}
          color="#FF6EC7"
        />
      </View>
      <View
        className="rounded-[8px] w-[90%] bg-white flex flex-row  p-2"
        style={styles.card}
      >
        <Image
          source={image}
          className="w-[35%] h-[112px] border-[1px] border-[#E6E6E6] rounded-[8px] mr-2"
        />

        <View className="flex flex-col w-[63%]">
          <Text
            className=" text-[13px] text-[#373636] mb-[12px]"
            style={{ fontFamily: "Manrope_400Regular" }}
          >
            {title}
          </Text>
          <Text
            className=" text-[12px] text-[#050404]"
            style={{ fontFamily: "Manrope_600SemiBold" }}
          >
            {description}
          </Text>

          <View className="mt-10 flex flex-row  justify-between">
            <View className="w-[1/2]">
              <Text
                className="text-[#050404] text-[18px]"
                style={{ fontFamily: "Manrope_700Bold" }}
              >
                ₦{price}
              </Text>
            </View>
            <View className="w-[1/2] flex-row flex items-center justify-between">
              <View className="w-[24px] h-[24px] border-[#FF9ED9] border-[1px] rounded-full justify-center items-center">
                <Text
                  className=" text-[16px] text-[#FF9ED9]"
                  style={{ fontFamily: "Manrope_600SemiBold" }}
                >
                  -
                </Text>
              </View>
              <View className="w-[24px] h-[24px] bg-[#FFF1F9] mx-2 flex justify-center items-center rounded-[5px]">
                <Text
                  className=" text-[12px] text-[#050404] "
                  style={{ fontFamily: "Manrope_600SemiBold" }}
                >
                  {qty}
                </Text>
              </View>
              <View className="w-[24px] h-[24px] border-[#FF9ED9] border-[1px] rounded-full justify-center items-center">
                <Text
                  className=" text-[16px] text-[#FF9ED9]"
                  style={{ fontFamily: "Manrope_600SemiBold" }}
                >
                  +
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F8FF] "
      style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}
    >
      <View className="">
        <View className="flex flex-row justify-between pt-2 items-center px-4">
          <View className="flex flex-row items-center">
            <Text
              className=" text-[18px] mr-[4px] "
              style={{ fontFamily: "Manrope_700Bold" }}
            >
              Cart
            </Text>
            <View className="py-[2px] px-[4px] bg-[#FFD2EE] rounded-[24px] w-[24px] h-[24px] justify-center items-center">
              <Text
                className="font-[500] text-[14px]"
                style={{ fontFamily: "Manrope_500Medium" }}
              >
                0
              </Text>
            </View>
          </View>
          <Ionicons name="trash-outline" size={24} color="black" />
        </View>
        <View className="flex flex-row justify-between items-center w-full px-4 mt-4">
          <View className="w-[1/2] flex flex-row items-center">
            <RadioButton.Android
              value="option2"
              onPress={handlePress}
              status={isSelected ? "checked" : "unchecked"}
              color="#FF6EC7"
            />
            <Text
              style={{ fontFamily: "Manrope_700Bold" }}
              className=" text-[16px]"
            >
              All
            </Text>
          </View>
          <View className="w-[1/2] flex flex-row items-center justify-between ">
            <Text
              className=" text-[16px] text-[#050404] mr-[23px]"
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              ₦0.00
            </Text>
            <Pressable className="py-[8px] px-[16px] rounded-[4px] bg-[#FF6EC7]">
              <Text
                className=" text-[14px] text-white"
                style={{ fontFamily: "Manrope_400Regular" }}
              >
                Checkout (0)
              </Text>
            </Pressable>
          </View>
        </View>
        <FlatList
          style={{ paddingRight: 5 }}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              description={item.description}
              price={item.price}
              qty={item.qty}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 14,
  },
});
