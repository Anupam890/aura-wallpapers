import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "@/constants/resolution";
import { theme } from "@/constants/theme";
import { useState,useRef } from "react";
import Categories from "@/components/categories";

const HomePage = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [searchText, setSearchText] = useState("");
  const [clearText,setClearText] = useState(false);
  const searchRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);
  
  const handleCategory = (cat) => {
    setActiveCategory(cat);
  }

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
          {/* Fixed the icon name */}
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        <View style={styles.searchBar}>
          <View>
            <Feather
              name="search"
              size={24}
              color={theme.colors.neutral(0.4)}
            />
          </View>
          <TextInput
            placeholder="Search for Image..."
            style={styles.SearchInput}
            value={searchText}
            ref={searchRef}
            onChangeText={(text) => setSearchText(text)}
          />
          {searchText && (
            <Pressable style={styles.closeIcon}>
              <Ionicons
                name="close"
                size={24}
                color={theme.colors.neutral(0.4)}
              />
            </Pressable>
          )}
        </View>
        <View >
          <Categories />
        </View>
      </ScrollView>
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
    fontWeight: "semibold",
    color: theme.colors.neutral(0.9),
  },
  searchBar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
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
