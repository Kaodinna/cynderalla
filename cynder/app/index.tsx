import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";

const Index = () => {
  const [initialRoute, setInitialRoute] = useState<any>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");
        if (hasLaunched === null) {
          setInitialRoute("/onboardingOne");
          await AsyncStorage.setItem("hasLaunched", "true");
        } else {
          setInitialRoute("/(tabs)");
        }
      } catch (error) {
        console.error("Failed to check app launch status:", error);
      }
    };

    checkOnboardingStatus();
  }, []);

  if (initialRoute === null) {
    // You can render a loading screen or return null while checking the initial route
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Redirect href={initialRoute} />;
};

export default Index;
