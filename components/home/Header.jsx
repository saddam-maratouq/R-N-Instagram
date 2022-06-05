import { StyleSheet, Text, View, Image ,TouchableOpacity } from "react-native";
import React from "react";

//icon
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//navigation control 
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Header = () => {


  const navigation = useNavigation();


  return (
    <View style={styles.Header}>
    <TouchableOpacity
    onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={24} color="#fff" />
    </TouchableOpacity>

      <Image
        source={require("../../assets/images/InstaLogo.png")}
        style={{ width: 140, height: 50 }}
      />

      <AntDesign name="plussquare" size={24} color="#fff" />

      <View style={styles.messnger}>
        <Text style={{ color: "black", fontWeight: "800" }}> 7 </Text>
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
    marginTop:30
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
