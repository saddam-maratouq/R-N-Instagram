import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

//icon
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.Header}>
      <Feather name="menu" size={24} color="#fff" />

      <Image
        source={require("../../assets/images/InstaLogo.png")}
        style={{ width: 140, height: 50 }}
      />

      <AntDesign name="plussquare" size={24} color="#fff" />

      <View style={styles.messnger}>
        <Text style={{ color: "#fff", fontWeight: "800" }}> 7 </Text>
      </View>
      <FontAwesome5 name="facebook-messenger" size={24} color="#fff" />

      <Fontisto name="power" size={24} color="#fff" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  messnger: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    position: "absolute",
    top: 2,
    right: 42,
    alignItems: "center",
    zIndex: 100,
  },
});
