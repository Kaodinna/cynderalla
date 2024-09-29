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
import { clientRegisterSchema } from "@/helpers/schema";
import React, { useState, useEffect, useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { router } from "expo-router";

export default function signupScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(clientRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      repeatPassword: "",
      agreeToTerms: false,
    },
  });
  const watchedValues = watch();

  useEffect(() => {
    const fieldsFilled = Object.values(watchedValues).every(
      (value) => value !== "" && value !== false
    );
    setAllFieldsFilled(fieldsFilled);
  }, [watchedValues, isChecked]);
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
    if (
      errors.firstName ||
      errors.lastName ||
      errors.email ||
      errors.password ||
      errors.repeatPassword ||
      errors.agreeToTerms
    ) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [
    errors.firstName,
    errors.email,
    errors.lastName,
    errors.password,
    errors.repeatPassword,
    errors.agreeToTerms,
  ]);

  const google = require("../assets/images/Google - Original.jpg");
  const apple = require("../assets/images/Apple - Original-2.jpg");
  const logo = require("../assets/images/logo.png");

  const handleSignUp = async (formData: any) => {
    const { repeatPassword, agreeToTerms, ...data } = formData;
    try {
      setLoading(true);
      const response = await axios.post(
        "https://users-piolifeng-be-staging.onrender.com/api/v1/auth/register",
        data
      );

      if (response.status === 200) {
        Alert.alert("Success!", "Signup successful.  You can now login.");
        setTimeout(() => {
          router.push("login");
        }, 2000);
      } else {
        Alert.alert(
          "Error!",
          "An unexpected error occurred. Please try again."
        );
        console.log("response", response);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      Alert.alert("Error!", errorMessage);
      console.log("errorMessage", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomStatusBar>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "white" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="">
          <View className="px-4 flex flex-col bg-[#FF6EC7]">
            <Link href={"/"}>
              <Ionicons color={"#FFFFFF"} name="arrow-back-outline" size={24} />
            </Link>

            <View className="flex justify-center items-center">
              <Image source={logo} />
            </View>
          </View>
          <ScrollView className="mb-20" alwaysBounceVertical={false}>
            <View className="flex flex-col gap-[8px] px-4 mt-5">
              <Text
                style={{ fontFamily: "Manrope_700Bold" }}
                className=" text-[24px] text-[#050404]"
              >
                Create account
              </Text>
              <View className="flex flex-row items-center">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: "Manrope_400Regular" }}
                >
                  Already have an account?
                </Text>
                <Link href={"/login"} asChild>
                  <Pressable className="m-0 p-0">
                    <Text
                      className="text-[#312ECB] text-[16px] ml-1"
                      style={{ fontFamily: "Manrope_400Regular" }}
                    >
                      Login
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
                      className="text-[16px] mb-[12px]"
                    >
                      First Name
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextInput
                          placeholderTextColor={"#B2B1B1"}
                          onChangeText={onChange}
                          value={value}
                          placeholder="Input your first  name"
                          className={`rounded-[4px] border-[1px] px-[16px] py-[13px] ${
                            !value ? "border-[#B2B1B1]" : "border-[#050404]"
                          }`}
                        />
                      )}
                      name="firstName"
                    />
                    <Animated.View
                      style={{
                        opacity: fadeAnim,
                      }}
                    >
                      <Text
                        className="font-600 text-[10px] leading-[10px] text-[#FF0000] mt-2"
                        style={{
                          fontFamily: "Manrope_400Regular",
                        }}
                      >
                        {errors.firstName ? errors.firstName.message : "   "}
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
                      Last Name
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextInput
                          placeholderTextColor={"#B2B1B1"}
                          onChangeText={onChange}
                          value={value}
                          placeholder="Input your last  name"
                          className={`rounded-[4px] border-[1px] px-[16px] py-[13px] ${
                            !value ? "border-[#B2B1B1]" : "border-[#050404]"
                          }`}
                        />
                      )}
                      name="lastName"
                    />
                    <Animated.View
                      style={{
                        opacity: fadeAnim,
                      }}
                    >
                      <Text
                        className="font-600 text-[10px] leading-[10px] text-[#FF0000] mt-2"
                        style={{
                          fontFamily: "Manrope_400Regular",
                        }}
                      >
                        {errors.lastName ? errors.lastName.message : "   "}
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
                      Email Address
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <TextInput
                          placeholderTextColor={"#B2B1B1"}
                          keyboardType="email-address"
                          onChangeText={onChange}
                          value={value}
                          placeholder="Input your email address"
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
                      <Text
                        className="font-600 text-[10px] leading-[10px] text-[#FF0000] mt-2"
                        style={{
                          fontFamily: "Manrope_400Regular",
                        }}
                      >
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
                            placeholderTextColor={"#B2B1B1"}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!isPasswordVisible}
                            placeholder="Input your password"
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
                      <Text
                        className="font-600 text-[10px] leading-[10px] text-[#FF0000] mt-2"
                        style={{
                          fontFamily: "Manrope_400Regular",
                        }}
                      >
                        {errors.password ? errors.password.message : "   "}
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
                      Confirm Password
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
                            placeholderTextColor={"#B2B1B1"}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!isRepeatPasswordVisible}
                            placeholder="Input your password for confirmation"
                          />
                          <Pressable
                            onPress={() =>
                              setIsRepeatPasswordVisible(
                                !isRepeatPasswordVisible
                              )
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
                      name="repeatPassword"
                    />
                    <Animated.View
                      style={{
                        opacity: fadeAnim,
                      }}
                    >
                      <Text
                        className="font-600 text-[10px] leading-[10px] text-[#FF0000] mt-2"
                        style={{
                          fontFamily: "Manrope_400Regular",
                        }}
                      >
                        {errors.repeatPassword
                          ? errors.repeatPassword.message
                          : "   "}
                      </Text>
                    </Animated.View>
                  </View>
                  <View className="flex flex-col gap-[4px]">
                    <Controller
                      control={control}
                      name="agreeToTerms"
                      render={({ field: { onChange, value } }) => (
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <Checkbox
                            value={value}
                            onValueChange={onChange}
                            color={value ? "#0E16FF" : undefined}
                          />
                          <Text
                            style={{ fontFamily: "Manrope_400Regular" }}
                            className=" text-[14px]"
                          >
                            I agree to Cynderalla
                            <Text
                              className="text-[#312ECB]"
                              style={{ fontFamily: "Manrope_400Regular" }}
                            >
                              Terms of service
                            </Text>
                            and
                            <Text
                              className="text-[#312ECB]"
                              style={{ fontFamily: "Manrope_400Regular" }}
                            >
                              Privacy policy
                            </Text>
                          </Text>
                        </View>
                      )}
                    />
                    <Animated.View
                      style={{
                        opacity: fadeAnim,
                      }}
                    >
                      <Text
                        className={`font-600 text-[10px] leading-[10px] text-[#FF0000] mt-2`}
                        style={{
                          fontFamily: "Manrope_400Regular",
                        }}
                      >
                        {errors.agreeToTerms
                          ? errors.agreeToTerms.message
                          : "   "}
                      </Text>
                    </Animated.View>
                  </View>
                </View>
                {/* <Link href={"/verifyEmail"} asChild> */}
                <Pressable
                  // disabled={!allFieldsFilled}
                  onPress={handleSubmit(handleSignUp)}
                  className={` h-[48px] rounded-[4px] justify-center ${
                    allFieldsFilled ? " bg-[#FF6EC7]" : "bg-[#B2B1B1]"
                  }`}
                >
                  <Text
                    className=" text-[16px] text-[#FFFFFF] text-center"
                    style={{ fontFamily: "Manrope_500Medium" }}
                  >
                    {loading ? "Loading..." : "Create Account"}
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
              <View className="flex flex-col gap-[20px] mb-10">
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
