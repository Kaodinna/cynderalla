import {
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Pressable,
  Platform,
  UIManager,
  Animated,
  LayoutAnimation,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Products = [
  {
    id: "1",
    title: "Women Make-up Full Kit",
    image: require("../../assets/images/product1.jpg"),
    description: "Neque porro quisquam est qui dolore ipsum quia",
    price: 2500,
  },
  {
    id: "2",
    title: "Beauty Necklace",
    image: require("../../assets/images/product2.jpg"),
    description: "Neque porro quisquam est qui dolore ipsum quia",
    price: 7500,
  },
  {
    id: "3",
    title: "School Bag Pack",
    image: require("../../assets/images/product3.jpg"),
    description: "Neque porro quisquam est qui dolore ipsum quia",
    price: 5500,
  },
  {
    id: "4",
    title: "Women Printed Kurta",
    image: require("../../assets/images/product4.jpg"),
    description: "Neque porro quisquam est qui dolore ipsum quia",
    price: 1500,
  },
];
type ProductProps = {
  title: string;
  image: any;
  description: string;
  price: number;
};
const Product = ({ title, image, description, price }: ProductProps) => (
  <Link href={"/product/product"} asChild>
    <Pressable className=" flex  gap-[4px] p-[8px] bg-white mr-4 rounded-[6px]">
      <Image source={image} className="w-full h-[126px]  " />
      <View className="flex gap-[8px]">
        <Text
          className="text-[13px]  text-[#050404]"
          style={{ fontFamily: "Manrope_600SemiBold" }}
        >
          {title}
        </Text>
        <Text
          className="text-[10px] text-[#585757]"
          style={{ fontFamily: "Manrope_400Regular" }}
        >
          {description}
        </Text>
        <View>
          <Text
            className="text-[13px] font-[600] text-[#585757]"
            style={{ fontFamily: "Manrope_600SemiBold" }}
          >
            ₦{price}
          </Text>
          <View className="flex flex-row gap-2">
            <Text
              className="text-[13px] font-[600] text-[#8C8C8C]"
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              ₦4000
            </Text>
            <Text
              className="text-[13px] font-[600] text-[#FE735C]"
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              40%Off
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  </Link>
);
export default function verifyEmailScreen() {
  const sample = require("../../assets/images/Image.png");
  const renderHeader = () => (
    <View className="pt-2 px-4">
      <Image source={sample} className="rounded-[12px] h-[213px] w-full" />
      <View>
        <View className="mt-4">
          <Text
            style={{ fontFamily: "Raleway_700Bold_Italic" }}
            className="leading-[22px] text-[#050404] text-[20px] mb-[8px]"
          >
            Office Lady Top and Blouses
          </Text>
          <Text
            style={{ fontFamily: "Manrope_400Regular" }}
            className="text-[12px] text-[#585757]"
          >
            Women Top Long Sleeve Button Elegance Shirts
          </Text>
        </View>
        <View>
          <Text
            className="text-[12px] text-[#8C8C8C]"
            style={{ fontFamily: "Manrope_500Medium" }}
          >
            102 sold
          </Text>
        </View>
        <View className="flex flex-row">
          <Text
            style={{ fontFamily: "Manrope_700Bold" }}
            className="text-[20px]"
          >
            1500
          </Text>
          <View className="p-[2px] bg-[#FF0000] rounded-tl-[3px] rounded-tr-[3px] rounded-bl-[3px] ">
            <Text
              className="text-[#FFFFFF] text-[8px] text-center"
              style={{ fontFamily: "Manrope_600SemiBold" }}
            >
              40%Off
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center mt-6">
          <Text
            style={{ fontFamily: "Manrope_700Bold" }}
            className="text-[14px] text-[#050404] mr-1"
          >
            Colour: White, Size: XL
          </Text>
          <Octicons
            name="chevron-right"
            size={12}
            color="#373636"
            className=""
          />
        </View>
        <View className="mt-6">
          <Text
            style={{ fontFamily: "Manrope_700Bold" }}
            className="text-[14px] leading-[16px]"
          >
            Product Details
          </Text>
          <Text
            style={{ fontFamily: "Manrope_400Regular" }}
            className="text-[12px] mt-[8px]"
          >
            Perhaps the most iconic sneaker of all-time, this original
            "Chicago"? colorway is the cornerstone to any sneaker collection.
            Made famous in 1985 by Michael Jordan, the shoe has stood the test
            of time, becoming the most famous colorway of the Air Jordan 1. This
            2015 release saw the ...See more
          </Text>
        </View>
        <View className="mt-6">
          <Text
            style={{ fontFamily: "Manrope_700Bold" }}
            className="text-[14px] leading-[16px]"
          >
            Return Policy
          </Text>
          <Text
            style={{ fontFamily: "Manrope_400Regular" }}
            className="text-[12px] mt-[8px]"
          >
            Free return within 7 days for all eligible items and full refund
          </Text>
        </View>
        <View className="mt-6">
          <Text
            style={{ fontFamily: "Manrope_700Bold" }}
            className="text-[14px] leading-[16px]"
          >
            Rating & Reviews
          </Text>
          <Text
            style={{ fontFamily: "Manrope_400Regular" }}
            className="text-[12px] mt-[8px]"
          >
            No Reviews and Ratings yet
          </Text>
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View className=" rounded-[4px]  px-4 mt-6 pb-6">
      <Text
        style={{ fontFamily: "Manrope_700Bold" }}
        className="text-[18px] leading-[22px] mb-4"
      >
        Most Popular Products
      </Text>
      <FlatList
        horizontal={true}
        data={Products}
        renderItem={({ item }) => (
          <Product
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
        // style={{ height: 300 }}
      />
    </View>
  );
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FF]">
      <View className="flex flex-row justify-between pt-2 items-center px-4">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Octicons
            name="chevron-left"
            size={24}
            color="#373636"
            className=""
          />
        </Pressable>
        <Link href={"/cart"}>
          <AntDesign
            name="shoppingcart"
            size={24}
            color="#373636"
            className=""
          />
        </Link>
      </View>
      <FlatList
        className="bg-[#F8F8FF]"
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        data={[]}
        renderItem={null}
        keyExtractor={() => "dummy"} // Provide a dummy key extractor
      />
      <View className="bg-[#FFFFFF] py-[20px] px-[16px] border-[#FFF1F9] border-[1px]">
        <View className="flex flex-row justify-between gap-[8px]">
          <Pressable className="px-[40px] w-[48%] py-[8px] border-[#FF6EC7] border-[1px] rounded-[4px] bg-white">
            <Text
              style={{ fontFamily: "Manrope_400Regular" }}
              className="text-[14px] text-[#FF6EC7] text-center"
            >
              Add to cart
            </Text>
          </Pressable>
          <Pressable className="px-[40px] w-[48%] py-[8px] rounded-[4px] bg-[#FF6EC7]">
            <Text
              style={{ fontFamily: "Manrope_400Regular" }}
              className="text-[14px] text-white text-center"
            >
              Buy now
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
