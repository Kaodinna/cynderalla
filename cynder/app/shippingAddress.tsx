import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";

export default function shippingAddressScreen() {
  const DATA = [
    {
      id: "1",
      address:
        "3 Zeb Street, Ogbuodor Layout, Maryland,Enugu South, Enugu State, Nigeria, 400102.",
    },
    {
      id: "2",
      address:
        "Maryland Estate, Block C1, Flat 12, Enugu South, Enugu State, Nigeria, 400102.",
    },
  ];

  type ItemProps = { address: string };

  const Item = ({ address }: ItemProps) => (
    <View
      className="rounded-[8px] border-[0.25px] border-[rgb(230,230,230)] bg-white p-4 mb-3 mx-4"
      style={styles.card}
    >
      <View className="flex flex-row justify-between items-center">
        <View className="w-[90%]">
          <Text
            className="text-[12px] "
            style={{ fontFamily: "Manrope_600SemiBold" }}
          >
            {address}
          </Text>
        </View>

        <View className="flex flex-row w-[10%] items-end">
          <Feather name="edit" size={16} color="black" className="mr-[6px]" />
          <Ionicons name="trash-outline" size={16} color="black" />
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FF] ">
      <View className="flex-1 ">
        <FlatList
          className="pt-4"
          data={DATA}
          renderItem={({ item }) => <Item address={item.address} />}
          keyExtractor={(item) => item.id}
        />
        <Pressable className="bg-[#FF6EC7] py-[12px] rounded-[8px] mb-4 mx-4">
          <Text
            className="text-center text-[16px] text-white"
            style={{ fontFamily: "Manrope_400Regular" }}
          >
            Add New Address
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
