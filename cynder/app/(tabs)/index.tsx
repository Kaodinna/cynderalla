import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Platform,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CarouselCards from "@/components/carouselCards";
import { Link } from "expo-router";
import ImageSlider from "@/components/imageSlider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const images = [
  "https://picsum.photos/id/11/200/300",
  "https://picsum.photos/id/10/200/300",
  "https://picsum.photos/id/12/200/300",
];

const DATA = [
  {
    id: "1",
    title: "First Item",
    image: require("../../assets/images/category1.png"),
  },
  {
    id: "2",
    title: "Second Item",
    image: require("../../assets/images/category2.png"),
  },
  {
    id: "3",
    title: "Third Item",
    image: require("../../assets/images/category3.png"),
  },
  {
    id: "4",
    title: "Third Item",
    image: require("../../assets/images/category4.png"),
  },
  {
    id: "5",
    title: "Third Item",
    image: require("../../assets/images/category4.png"),
  },
  {
    id: "6",
    title: "Third Item",
    image: require("../../assets/images/category4.png"),
  },
];
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
type ItemProps = { title: string; image: any };
type ProductProps = {
  title: string;
  image: any;
  description: string;
  price: number;
};

const Item = ({ title, image }: ItemProps) => (
  <View className="w-[88px]  flex items-center justify-between gap-[4px]">
    <Image source={image} className="w-[56px] h-[56px] rounded-full " />
    <Text
      className="text-[10px]  text-[#050404]"
      style={{ fontFamily: "Manrope_500Medium" }}
    >
      {title}
    </Text>
  </View>
);
const Product = ({ title, image, description, price }: ProductProps) => (
  <Link href={"/product/product"} asChild>
    <Pressable className=" flex  gap-[4px] p-[8px] bg-white w-[49%] mb-4 rounded-[6px]">
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

export default function Tab() {
  const profilepix = require("../../assets/images/profilePhoto.jpg");
  const renderHeader = () => (
    <View className="pt-2 px-4">
      <View className=" flex flex-row gap-2 justify-between pr-4">
        <View
          className="flex flex-row h-[48px] items-center justify-between bg-white rounded-[4px] py-[13px] px-[16px] w-[80%]"
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

        <View className="w-[20%] flex items-end">
          <Link href={"/notification"}>
            <View
              className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center"
              style={styles.card}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
          </Link>
        </View>
      </View>
      <Text
        className="mt-4 text-[16px]"
        style={{ fontFamily: "Manrope_600SemiBold" }}
      >
        All Featured
      </Text>
      <View className="py-[10px] rounded-[4px] bg-white -mr-[16px] mt-4">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* <CarouselCards /> */}
      <ImageSlider images={images} />
    </View>
  );

  const renderFooter = () => (
    <View className=" rounded-[4px]  px-4 ">
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        horizontal={false}
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
  const logo = require("../../assets/images/logo2.png");
  return (
    <SafeAreaView
      className="flex flex-1 bg-[#F8F8FF]"
      style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}
    >
      <View className="flex flex-row justify-between items-center py-[8px] px-4">
        <View className="w-[40px] h-[40px] rounded-[100px] bg-[#FFFFFF] flex justify-center items-center border-[#FF6EC7] border-[1px]">
          <Pressable>
            <Ionicons name="menu" size={24} color="#FF6EC7" />
          </Pressable>
        </View>
        <View className="flex justify-center items-center">
          <Image source={logo} />
        </View>
        <Image source={profilepix} className="h-[40px] w-[40px]" />
      </View>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        data={[]}
        renderItem={null}
        keyExtractor={() => "dummy"} // Provide a dummy key extractor
      />
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
