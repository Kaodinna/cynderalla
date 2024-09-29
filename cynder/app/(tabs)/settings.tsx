import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  Platform,
  StyleSheet,
  SectionListData,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Tab() {
  const profilepix = require("../../assets/images/Ellipse 4.png");
  const Data = [
    {
      title: "Settings",
      data: [],
    },
    {
      title: "Personal",
      data: [
        { id: "1", title: "Profile", link: "/profile" },
        { id: "3", title: "Shipping Address", link: "/shippingAddress" },
        { id: "4", title: "Payment Methods", link: "/paymentMethods" },
        { id: "5", title: "Period Tracker", link: "/periodTracker" },
      ],
    },
    {
      title: "Shop",
      data: [
        { id: "1", title: "My Orders", link: "/myOrders" },
        { id: "2", title: "Help Center", link: "/helpCenter" },
        { id: "3", title: "Privacy Policy", link: "/privacyPolicy" },
        { id: "4", title: "Terms and Conditions", link: "/termsAndConditions" },
        { id: "5", title: "Country" },
        { id: "6", title: "Currency" },
      ],
    },
  ];

  return (
    <SafeAreaView
      className="flex flex-1 bg-[#F8F8FF]"
      style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}
    >
      <View className="px-4">
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={Data}
          renderItem={({ item }) => (
            <Link href={`${item.link}`} asChild>
              <Pressable
                className="py-[16px] border-b-[1px] flex flex-row justify-between items-center"
                style={{ borderColor: "rgba(55, 54, 54, 0.1)" }}
              >
                <Text
                  className=" text-[16px]"
                  style={{ fontFamily: "Manrope_500Medium" }}
                >
                  {item.title}
                </Text>

                <Pressable>
                  <Octicons
                    name="chevron-right"
                    size={24}
                    color="#373636"
                    className=""
                  />
                </Pressable>
              </Pressable>
            </Link>
          )}
          renderSectionHeader={({ section }) => {
            const index = Data.findIndex((s) => s.title === section.title);
            return (
              <Text
                style={[
                  index === 0
                    ? styles.firstSectionHeader
                    : styles.sectionHeader,
                  { fontFamily: "Manrope_700Bold" },
                ]}
              >
                {section.title}
              </Text>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  firstSectionHeader: {
    fontSize: 24,
    color: "#202020",
    backgroundColor: "#F7F7F7",
  },
  sectionHeader: {
    fontSize: 20,
    color: "#050404",
    backgroundColor: "#F7F7F7",
    paddingTop: 20,
  },
});
