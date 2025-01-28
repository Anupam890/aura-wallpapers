import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { data } from "@/constants/data";
import { theme } from "@/constants/theme";
import { hp } from "@/constants/resolution";
import Animated, { FadeInRight } from "react-native-reanimated";
import Index from "@/app";

interface CategoriesProps {
  activeCategory: string | null;
  handleCategory: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ activeCategory, handleCategory }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryItem
          title={item}
          isActive={activeCategory === item}
          handleChangeCategory={handleCategory}
        />
      )}
    />
  );
};

interface CategoryItemProps {
  title: string;
  isActive: boolean;
  handleChangeCategory: (category: string | null) => void;
  index: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title,index, isActive, handleChangeCategory }) => {
  let color = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  let bgColor = isActive ? theme.colors.neutral(0.8) : theme.colors.white;
  return (
    <Animated.View entering={FadeInRight.delay(index*200).duration(1000).springify().damping(14)} style={[styles.categoryItem, isActive && styles.activeCategory]}>
      <Pressable onPress={() => handleChangeCategory(isActive ? null : title)}>
        <Text style={styles.categoryText}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryItem: {
    backgroundColor: theme.colors.grayBg,
    padding: 12,
    borderRadius: theme.radius.lg,
    marginHorizontal: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  activeCategory: {
    borderColor: theme.colors.grayBg,
    borderWidth: 2,
  },
  categoryText: {
    fontSize: hp(1.8),
  },
});

export default Categories;
