import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";



const imageCard = ({ item, index }) => {
  return (
    <Pressable>
      <Image style={style.image} />
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
});

export default imageCard;
