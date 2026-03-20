import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput } from "react-native";
import { useVendorStore } from "../../store/vendorStore";

export default function UploadProduct() {
  const { addProduct } = useVendorStore();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !category || !price) return;

    addProduct({
      id: Date.now().toString(),
      name,
      category,
      price: Number(price),
      image: "https://via.placeholder.com/150",
    });

    router.back(); // go back to dashboard
  };

  return (
    <ScrollView className="flex-1 bg-white px-5 pt-16">

      <Text className="text-2xl font-bold mb-6">Add Product</Text>

      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        className="border border-stone-200 p-4 rounded-xl mb-4"
      />

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        className="border border-stone-200 p-4 rounded-xl mb-4"
      />

      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        className="border border-stone-200 p-4 rounded-xl mb-6"
      />

      <Pressable
        onPress={handleAdd}
        className="bg-black py-4 rounded-xl items-center"
      >
        <Text className="text-white font-bold">Add Product</Text>
      </Pressable>

    </ScrollView>
  );
}