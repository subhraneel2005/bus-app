import { View } from "react-native";
import React from "react";
import OTPScreen from "@/components/authComponents/OtpScreen";

export default function Otp() {
  return (
    <View className="min-h-screen justify-center items-center flex w-full">
      <OTPScreen />
    </View>
  );
}
