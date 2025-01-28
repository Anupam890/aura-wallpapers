import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "@/constants/resolution";
import { theme } from "@/constants/theme";
import Categories from "@/components/categories";
import { fetchImages } from "@/api/pixabay";
import ImageGrid from "@/components/imageGrid"; // Fixed import

const HomePage: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [searchText, setSearchText] = useState<string>("");
  const searchRef = useRef<TextInput>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [images, setImages] = useState<any[]>([]);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
  };

  console.log(activeCategory);

  const getImagesServer = async (
    params: { page: number } = { page: 1 },
    append: boolean = false
  ) => {
    try {
      let res = await fetchImages(params);
      if (res.success && res.data.hits) {
        setImages((prevImages) => (append ? [...prevImages, ...res.data.hits] : res.data.hits));
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Aura</Text>
        </Pressable>
        <Pressable>
          <FontAwesome6
            name="bars-staggered"
            size={24}
            color={theme.colors.neutral(0.7)}
          />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
          <TextInput
            placeholder="Search for Image..."
            style={styles.SearchInput}
            value={searchText}
            ref={searchRef}
            onChangeText={(text) => setSearchText(text)}
          />
          {searchText && (
            <Pressable style={styles.closeIcon} onPress={() => setSearchText("")}>
              <Ionicons name="close" size={24} color={theme.colors.neutral(0.4)} />
            </Pressable>
          )}
        </View>
        <Categories activeCategory={activeCategory} handleCategory={handleCategory} />
      </ScrollView>
      <View>{images.length > 0 && <ImageGrid images={images} />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: "600", // Fixed font weight
    color: theme.colors.neutral(0.9),
  },
  searchBar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    padding: 6,
    paddingLeft: 10,
    borderColor: theme.colors.grayBg,
  },
  SearchInput: {
    flex: 1,
    fontSize: hp(2),
    color: theme.colors.black,
  },
  closeIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: 8,
    borderRadius: theme.radius.sm,
  },
});

export default HomePage;
