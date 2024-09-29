import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const TabBarLabel = ({ focused, title }: any) => {
    if (!focused) return null;
    return (
      <Text
        style={{ fontFamily: "Manrope" }}
        className="font-[600] text-[12px] text-[#FF6EC7] leading-[16.39px]"
      >
        {title}
      </Text>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6EC7",
        tabBarInactiveTintColor: "#8C8C8C",
        tabBarStyle: {
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons size={24} name="home" color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Category" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            // <FontAwesome size={28} name="shopping-cart" color={color} />
            <AntDesign
              name="shoppingcart"
              size={24}
              color={color}
              className=""
            />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Cart" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="settings-outline" color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Settings" />
          ),
        }}
      />
    </Tabs>
  );
}
