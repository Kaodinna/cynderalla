import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  SectionList,
  FlatList,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
const sections = [
  {
    title: "Baby Consumables",
    key: "babyConsumables",
    data: [
      {
        list: [
          {
            id: 1,
            type: "Baby Utilities",
            title: "Women Make-up Full Kit one",
            image: require("../../assets/images/product1.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 2500,
          },
          {
            id: 2,
            type: " Female Personal Wares",
            title: "Women Make-up Full Kit 2",
            image: require("../../assets/images/product1.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 2500,
          },
          {
            id: 3,
            type: "Drift Market Place",
            title: "School Bag Pack one",
            image: require("../../assets/images/product3.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 5500,
          },
          {
            id: 4,
            type: "Baby Utilities",
            title: "School Bag Pack 2",
            image: require("../../assets/images/product3.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 5500,
          },
          {
            id: 5,
            type: "Female Personal Wares",
            title: "School Bag Pack 2",
            image: require("../../assets/images/product3.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 5500,
          },
          {
            id: 6,
            type: "Drift Market Place",
            title: "School Bag Pack 2",
            image: require("../../assets/images/product3.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 5500,
          },
          {
            id: 7,
            type: "Baby Utilities",
            title: "School Bag Pack 2",
            image: require("../../assets/images/product3.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 5500,
          },
          {
            id: 8,
            type: "Female Personal Wares",
            title: "School Bag Pack 2",
            image: require("../../assets/images/product3.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 5500,
          },
        ],
      },
    ],
  },
  {
    title: "Baby Products and Food",
    key: "babyProductsAndFood",
    data: [
      {
        list: [
          {
            id: 9,
            type: "Drift Market Place",
            title: "Beauty Necklace one",
            image: require("../../assets/images/product2.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 7500,
          },
          {
            id: 10,
            type: "Baby Utilities",
            title: "Beauty Necklace 2",
            image: require("../../assets/images/product2.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 7500,
          },
          {
            id: 11,
            type: "Female Personal Wares",
            title: "Women Printed Kurta one",
            image: require("../../assets/images/product4.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 1500,
          },
          {
            id: 12,
            type: "Drift Market Place",
            title: "Women Printed Kurta 2",
            image: require("../../assets/images/product4.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 1500,
          },
          {
            id: 13,
            type: "Baby Utilities",
            title: "Women Printed Kurta 2",
            image: require("../../assets/images/product4.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 1500,
          },
          {
            id: 14,
            type: "Female Personal Wares",
            title: "Women Printed Kurta 2",
            image: require("../../assets/images/product4.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 1500,
          },
          {
            id: 15,
            type: "Drift Market Place",
            title: "Women Printed Kurta 2",
            image: require("../../assets/images/product4.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 1500,
          },
          {
            id: 16,
            type: "Baby Utilities",
            title: "Women Printed Kurta 2",
            image: require("../../assets/images/product4.jpg"),
            description: "Neque porro quisquam est qui dolore ipsum quia",
            price: 1500,
          },
        ],
      },
    ],
  },
];
type ProductProps = {
  title: string;
  image: any;
  description: string;
  price: number;
  key: string;
};
const Product = ({ item }: any) => (
  <Pressable className=" flex  p-[6px] bg-white w-[49%] mb-4 rounded-[6px]">
    <Image source={item.image} className="w-full h-[126px]  " />
    <View className="flex w-full">
      <Text
        className="text-[13px] text-[#050404]"
        style={{ fontFamily: "Manrope_600SemiBold" }}
      >
        {item.title}
      </Text>
      <Text
        className="text-[10px] text-[#585757]"
        style={{ fontFamily: "Manrope_400Regular" }}
      >
        {item.description}
      </Text>
      <View>
        <Text
          className="text-[13px] font-[600] text-[#585757]"
          style={{ fontFamily: "Manrope_600SemiBold" }}
        >
          ₦{item.price}
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
);

export default function Tab() {
  const [currentType, setCurrentType] = useState("Baby Utilities");
  type Product = {
    id: number;
    type: string;
    title: string;
    image: any;
    description: string;
    price: number;
  };

  type DataItem = {
    list: Product[];
  };

  type Section = {
    title: string;
    key: string;
    data: DataItem[];
  };

  const filterSectionsByType = (
    sections: Section[],
    type: string
  ): Section[] => {
    return sections
      .map((section: Section) => {
        const filteredData = section.data
          .map((dataItem: DataItem) => {
            const filteredList = dataItem.list.filter(
              (item: Product) => item.type === type
            );
            return {
              ...dataItem,
              list: filteredList,
            };
          })
          .filter((dataItem: DataItem) => dataItem.list.length > 0); // Remove empty data items

        return {
          ...section,
          data: filteredData,
        };
      })
      .filter((section: Section) => section.data.length > 0); // Remove empty sections
  };

  const renderSection = ({ item }: any) => {
    return (
      <FlatList
        data={item.list}
        numColumns={2}
        renderItem={Product}
        keyExtractor={keyExtractor}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: 5,
          marginRight: 15,
          marginLeft: 8,
        }}
      />
    );
  };
  const filteredSections = filterSectionsByType(sections, currentType);
  const renderSectionHeader = ({ section }: any) => {
    return (
      <View className="bg-[#F7F7F7] py-2 flex flex-row justify-between border-[#FFE7FE] border-b-[1px] border-t-[0.5px] pl-2 pr-4">
        <Text
          className="text-[#050404] font-[700] text-[10px] "
          style={{ fontFamily: "Manrope" }}
        >
          {section.title}
        </Text>
        <Text
          className="text-[#D22C2C] font-[400] text-[10px]"
          style={{ fontFamily: "Manrope" }}
        >
          View All
        </Text>
      </View>
    );
  };
  const keyExtractor = (item: any) => {
    return item.id;
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F8F8FF]"
      style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}
    >
      <View className=" pt-2">
        <View className="px-4 flex flex-row gap-2 justify-between">
          <View
            className="flex flex-row h-[48px] items-center justify-between bg-white rounded-[4px] py-[13px] px-[16px] w-[85%]"
            style={styles.card}
          >
            <Octicons name="search" size={24} color="#B2B1B1" className="" />
            <TextInput
              placeholder={`Search`}
              placeholderTextColor="#B2B1B1"
              className="flex-1 mx-[8px]"
            />
            <MaterialCommunityIcons
              name="briefcase-search-outline"
              size={24}
              color="#B2B1B1"
              className=""
            />
          </View>
          <View
            className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center"
            style={styles.card}
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <View className="bg-[#FFFFFF] py-[12px] mt-4 flex flex-row justify-between px-4 items-center border-[#FFE7FE] border-[1px]">
          <Text
            style={{ fontFamily: "Manrope_700Bold" }}
            className=" text-[14px]"
          >
            See All Products
          </Text>
          <Octicons
            name="chevron-right"
            size={24}
            color="#373636"
            className=""
          />
        </View>
        <View className="flex flex-row h-full">
          <View className="w-[22%] bg-[#FFFFFF]  h-full ">
            <Pressable onPress={() => setCurrentType("Baby Utilities")}>
              <View
                className={`pt-[26px] pb-[16] px-[16px]  ${
                  currentType === "Baby Utilities"
                    ? "bg-[#FFF1F9] border-[#FF6EC7] border-b-[1px]"
                    : ""
                }`}
              >
                <Text
                  className={`text-center text-[12px]  ${
                    currentType === "Baby Utilities"
                      ? "text-[#FF6EC7]"
                      : "text-[#8C8C8C]"
                  }`}
                  style={{ fontFamily: "Manrope_600SemiBold" }}
                >
                  Baby Utilities
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setCurrentType("Female Personal Wares")}>
              <View
                className={` py-[16] px-[16px]  ${
                  currentType === "Female Personal Wares"
                    ? "bg-[#FFF1F9] border-[#FF6EC7] border-b-[1px]"
                    : ""
                }`}
              >
                <Text
                  className={`text-center  text-[12px] ${
                    currentType === "Female Personal Wares"
                      ? "text-[#FF6EC7]"
                      : "text-[#8C8C8C]"
                  }`}
                  style={{ fontFamily: "Manrope_600SemiBold" }}
                >
                  Female Personal Wares
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setCurrentType("Drift Market Place")}>
              <View
                className={` py-[16] px-[16px] ${
                  currentType === "Drift Market Place"
                    ? "bg-[#FFF1F9] border-[#FF6EC7] border-b-[1px]"
                    : ""
                }`}
              >
                <Text
                  className={`text-center text-[12px] text-[#8C8C8C] ${
                    currentType === "Drift Market Place"
                      ? "text-[#FF6EC7]"
                      : "text-[#8C8C8C]"
                  }`}
                  style={{ fontFamily: "Manrope_600SemiBold" }}
                >
                  Drift Market Place
                </Text>
              </View>
            </Pressable>
          </View>
          <View className="w-[78%] h-full">
            <View className=" ">
              <SectionList
                sections={filteredSections}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSection}
                contentContainerStyle={{ paddingBottom: 250 }}
              />
            </View>
          </View>
        </View>
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
