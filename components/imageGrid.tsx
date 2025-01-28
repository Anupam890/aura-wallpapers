import { View, StyleSheet } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./imageCard"; // Fixed component name
import { wp } from "@/constants/resolution";
import { getColumnCount } from "@/constants/resolution";

interface ImageGridProps {
  images: any[]; 
}


const columnCount = getColumnCount()
const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columnCount}
        contentContainerStyle={styles.Listcontainer}
        initialNumToRender={1000}
        renderItem={({ item }) => <ImageCard index={index} columns={columnCount} item={item} />} 
        estimatedItemSize={200}
        keyExtractor={(item, index) => item.id || index.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100), 
  },
  Listcontainer:{
    paddingHorizontal: wp(3),
  }
});

export default ImageGrid;
