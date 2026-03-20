import { Image, ScrollView, Text, View } from "react-native";
import { useVendorStore } from "../../store/vendorStore";

export default function MyProducts() {
  const { products } = useVendorStore();

  return (
    <ScrollView className="flex-1 bg-stone-100 px-5 pt-16">

      <Text className="text-2xl font-bold mb-6">My Products</Text>

      {products.length === 0 ? (
        <Text className="text-stone-400">No products added yet</Text>
      ) : (
        products.map((item) => (
          <View
            key={item.id}
            className="bg-white p-4 rounded-2xl mb-4 flex-row items-center"
          >
            <Image
              source={{ uri: item.image }}
              className="w-14 h-14 rounded-xl mr-4"
            />

            <View className="flex-1">
              <Text className="font-bold text-stone-900">
                {item.name}
              </Text>
              <Text className="text-xs text-stone-500">
                {item.category}
              </Text>
            </View>

            <Text className="font-bold">₹{item.price}</Text>
          </View>
        ))
      )}

    </ScrollView>
  );
}