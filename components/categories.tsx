import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { data } from '@/constants/data';
import { theme } from '@/constants/theme';
import { hp } from '@/constants/resolution';

const Categories = () => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CategoryItem title={item} />}
    />
  );
};

const CategoryItem = ({ title }) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{title}</Text>
    </View>
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
    borderCurve:'continuous',
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  categoryText: {
    fontSize: hp(1.8),
   
  },
});

export default Categories;
