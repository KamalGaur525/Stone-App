import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Categories() {
  const categories = [
    "Granite",
    "Marble",
    "Tiles",
    "Sandstone",
    "Quartz",
    "Limestone",
  ];

  return (
    <ScrollView className="flex-1 bg-stone-50 px-5 pt-14">
      {/* ── HEADER ── */}
      <View className="mb-8">
        <Text className="text-3xl font-bold text-stone-900 tracking-tight">
          Categories
        </Text>
        <Text className="text-stone-500 mt-1 text-sm">
          Explore premium stone collections
        </Text>
      </View>

      {/* ── GRID ── */}
      <View className="flex-row flex-wrap justify-between">
        {categories.map((item, index) => (
          <Pressable
            key={index}
            onPress={() =>
              router.push({
                pathname: "/(guest)/category-detail",
                params: { name: item },
              })
            }
            className="w-[48%] bg-white rounded-2xl border border-stone-100 mb-5 p-4 shadow-sm active:opacity-80"
          >
            {/* IMAGE */}
            <View className="h-24 w-full rounded-xl bg-stone-100 items-center justify-center mb-3">
              <Text className="text-stone-400 text-xs font-medium">
                IMG
              </Text>
            </View>

            {/* TEXT BLOCK */}
            <View className="flex flex-col">
              <Text className="text-[15px] font-semibold text-stone-900 leading-tight">
                {item}
              </Text>

             
            </View>

            {/* CTA */}
            <View className="mt-3 flex-row gap-2 justify-between items-center">
                 <Text className="text-xs text-stone-500 ">
                Browse collection
              </Text>
              <Text className="text-xs font-semibold text-amber-600">
                Explore →
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}