import {
  Text,
  View,
  Image,
  Pressable,
  Platform,
  UIManager,
  Animated,
  LayoutAnimation,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import CustomStatusBar from "@/components/statusbar";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/helpers/schema";
import React, { useState, useEffect, useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

export default function loginScreen() {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const watchedValues = watch();

  useEffect(() => {
    const fieldsFilled = Object.values(watchedValues).every(
      (value) => value !== ""
    );
    setAllFieldsFilled(fieldsFilled);
  }, [watchedValues]);
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (errors.email || errors.password) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [errors.email, errors.password]);

  const handleLogin = async (formData: any) => {
    console.log("formData", formData);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://users-piolifeng-be-staging.onrender.com/api/v1/auth/login",
        { ...formData, role: "user" }
      );

      if (response.status === 200) {
        // Alert.alert("Success!", "Signup successful. You can now login.");
        // console.log("Signup successful:", response.data);
      } else {
        console.log("Unexpected response:", response);
        Alert.alert(
          "Error!",
          "An unexpected error occurred. Please try again."
        );
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message;
      console.log("error.response?.data?.message", error);
      // "An unexpected error occurred. Please try again.";
      Alert.alert("Error!", errorMessage);
      console.log("Signup failed:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const google = require("../assets/images/Google - Original.jpg");
  const apple = require("../assets/images/Apple - Original-2.jpg");
  const logo = require("../assets/images/logo.png");
  return (
    <CustomStatusBar>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "white" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="">
          <View className="px-4 flex flex-col bg-[#FF6EC7]">
            <Link href={"/"}>
              <Ionicons name="arrow-back-outline" size={24} color={"#FFFFFF"} />
            </Link>
            <View className="flex justify-center items-center">
              <Image source={logo} />
            </View>
          </View>
          <ScrollView className="" alwaysBounceVertical={false}>
            <View className="flex flex-col gap-[8px] px-4 mt-5">
              <Text
                style={{ fontFamily: "Manrope_700Bold" }}
                className="text-[24px] text-[#050404]"
              >
                Log into your account
              </Text>

              <View className="flex flex-row items-center">
                <Text
                  className=" text-[16px]"
                  style={{ fontFamily: "Manrope_400Regular" }}
                >
                  Already have an account?
                </Text>
                <Link href={"/signup"} asChild>
                  <Pressable className="m-0 p-0">
                    <Text
                      className="text-[#312ECB]  text-[16px] ml-1"
                      style={{ fontFamily: "Manrope_400Regular" }}
                    >
                      Create Account
                    </Text>
                  </Pressable>
                </Link>
              </View>
            </View>
            <View className="flex flex-col px-4 mt-10">
              <View className="flex flex-col mb-[40px]">
                <View className="flex flex-col mb-[40px]">
                  <View className="flex flex-col mb-[16px]">
                    <Text
                      style={{
                        fontFamily: "Manrope_400Regular",
                      }}
                      className=" text-[16px] mb-[12px]"
                    >
                      Email Address
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextInput
                          keyboardType="email-address"
                          onChangeText={onChange}
                          value={value}
                          placeholder="Input your first  name"
                          className={`rounded-[4px] border-[1px] px-[16px] py-[13px] ${
                            !value ? "border-[#B2B1B1]" : "border-[#050404]"
                          }`}
                        />
                      )}
                      name="email"
                    />
                    <Animated.View
                      style={{
                        opacity: fadeAnim,
                      }}
                    >
                      <Text className="font-600 text-[10px] leading-[10px] text-[#FF0000]">
                        {errors.email ? errors.email.message : "   "}
                      </Text>
                    </Animated.View>
                  </View>
                  <View className="flex flex-col mb-[16px]">
                    <Text
                      style={{
                        fontFamily: "Manrope_400Regular",
                      }}
                      className=" text-[16px] mb-[12px]"
                    >
                      Password
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <View
                          className={`rounded-[4px] border-[1px] px-[16px] py-[13px] flex flex-row items-center ${
                            !value ? "border-[#B2B1B1]" : "border-[#050404]"
                          }`}
                        >
                          <TextInput
                            style={{
                              flex: 1,
                            }}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!isPasswordVisible}
                            placeholder="Input your first  name"
                          />
                          <Pressable
                            onPress={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }
                          >
                            <MaterialCommunityIcons
                              name={isPasswordVisible ? "eye" : "eye-off"}
                              size={20}
                              color="#ADBED8"
                            />
                          </Pressable>
                        </View>
                      )}
                      name="password"
                    />
                    <Animated.View
                      style={{
                        opacity: fadeAnim,
                      }}
                    >
                      <Text className="font-600 text-[10px] leading-[10px] text-[#FF0000]">
                        {errors.password ? errors.password.message : "   "}
                      </Text>
                    </Animated.View>
                  </View>

                  <View className="flex flex-row gap-[4px]">
                    <Link href={"/forgotPassword"} asChild>
                      <Pressable>
                        <Text
                          style={{ fontFamily: "Manrope_400Regular" }}
                          className=" text-[14px] text-[#050404]"
                        >
                          Forgot Password
                        </Text>
                      </Pressable>
                    </Link>
                  </View>
                </View>
                {/* <Link href={"/verifyEmail"} asChild> */}
                  <Pressable
                   onPress={handleSubmit(handleLogin)}
                    // disabled={!allFieldsFilled}
                    className={`${
                      allFieldsFilled ? " bg-[#FF6EC7]" : "bg-[#B2B1B1]"
                    } h-[48px] rounded-[4px] justify-center`}
                  >
                    <Text
                      className=" text-[16px] text-[#FFFFFF] text-center"
                      style={{ fontFamily: "Manrope_500Medium" }}
                    >
                      Login
                    </Text>
                  </Pressable>
                {/* </Link> */}
              </View>
              <View className="flex flex-row items-center justify-between mb-[30px]">
                <View className="w-[45%] border-[#373636] border-t-[1px]"></View>
                <Text
                  style={{ fontFamily: "Manrope_400Regular" }}
                  className="text-[16px]"
                >
                  Or
                </Text>
                <View className="w-[45%] border-[#373636] border-t-[1px]"></View>
              </View>
              <View className="flex flex-col gap-[20px] mb-32">
                <Pressable className="rounded-[4px] flex flex-row justify-center border-[#050404] border-[1px] py-[15px] px-[20px]">
                  <View className="flex flex-row items-center gap-3">
                    <Image source={google} className="h-[19px] w-[19px]" />
                    <Text
                      style={{ fontFamily: "Manrope_500Medium" }}
                      className="text-[16px]"
                    >
                      Continue with Google
                    </Text>
                  </View>
                </Pressable>
                <Pressable className="rounded-[4px] flex flex-row justify-center border-[#050404] border-[1px] py-[15px] px-[20px]">
                  <View className="flex flex-row items-center gap-3">
                    <Image source={apple} className="h-[19px] w-[19px]" />
                    <Text
                      style={{ fontFamily: "Manrope_500Medium" }}
                      className="text-[16px]"
                    >
                      Continue with Apple
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </CustomStatusBar>
  );
}
