import OtpScreen from "@/components/authComponents/OtpScreen";
import PhoneNumberScreen from "@/components/authComponents/PhoneNumberScreen";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="min-h-screen justify-center items-center flex w-full">
      <PhoneNumberScreen />
    </View>
  );
}
