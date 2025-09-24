import { Link } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-[#6F00FF]">
      <SafeAreaView className="min-h-screen w-full justify-center items-center ">
        <Text className="text-white text-2xl mb-4">Terminal</Text>

        <Link href={"/bus"} asChild>
          <TouchableOpacity className="bg-white px-6 py-3 rounded-xl">
            <Text className="text-black font-semibold">Go to Buses</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </View>
  );
}
