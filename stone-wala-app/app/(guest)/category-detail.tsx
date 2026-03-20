import { useGuestStore } from "@/store/guestStore";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function CategoryDetail() {
  const { name } = useLocalSearchParams();
  const { setSelectedFirm } = useGuestStore();

  return (
    <ScrollView className="flex-1 bg-stone-50 px-5 pt-14">

      <View className="mb-6">
        <Text className="text-3xl font-bold text-stone-900">
          {name}
        </Text>

        <Text className="text-stone-400 mt-1">
          Showing suppliers & products
        </Text>
      </View>

      {[1, 2, 3].map((item, index) => (
        <Pressable
          key={`firm-${index}`}
          onPress={() => {
            setSelectedFirm({
              id: `${index}`,
              name: `${name} Supplier`,
              city: "Kishangarh",
              image: "https://via.placeholder.com/150",
              rating: 4.5,

              category: name as string,
              phone: "9876543210",
              email: "firm@email.com",
              location: "Kishangarh, Rajasthan",
              website: "https://example.com",
              instagram: "https://instagram.com",
              facebook: "https://facebook.com",
            });

            router.push("/(guest)/firm-detail");
          }}
          className="bg-white border border-stone-100 rounded-3xl p-5 mb-4 shadow-sm"
        >
          <Text className="text-stone-900 font-semibold text-base">
            {name} Supplier
          </Text>

          <Text className="text-stone-400 text-sm mt-1">
            Kishangarh • Rajasthan
          </Text>

          <Text className="text-amber-600 text-xs mt-3 font-semibold">
            View Products →
          </Text>
        </Pressable>
      ))}

    </ScrollView>
  );
}