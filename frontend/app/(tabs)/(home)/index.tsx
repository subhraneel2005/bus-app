import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="min-h-screen w-full justify-center items-center bg-white">
      <Text className="text-4xl font-bold">Welcome User</Text>
      <Link asChild href={"/details"}>
        <TouchableOpacity className="bg-[#407BFF] px-6 py-2 mt-4 rounded-xl">
          <Text className=" text-white ">Get started</Text>
        </TouchableOpacity>
      </Link>
      <Image
        className="mt-4"
        source={require("../../../assets/images/hero-banner-1.png")}
        style={{ width: 350, height: 300 }}
      />
    </SafeAreaView>
  );
}
