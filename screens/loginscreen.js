import * as React from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LOGIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <ImageBackground
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/imagecore.jpeg")}
      >
        <View style={styles.overlay}>
          <Text style={styles.loginText}>Login</Text>
          <Pressable style={styles.register} onPress={() => navigation.navigate("REGISTER")}>
            <Text style={styles.registerText}>Register</Text>
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry
          />
          <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Tabs")}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 520, // Menurunkan elemen-elemen ke bawah
  },
  loginText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "uppercase",
    color: Color.colorDeepskyblue,
    marginTop: -90, // Anda dapat menyesuaikan nilai ini sesuai kebutuhan
    marginBottom: 50,
    right: 95,
  },
  
  registerText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: Color.colorBlack,
    marginBottom: 20,
  },
  input: {
    width: 267, // Sesuaikan lebar sesuai kebutuhan
    height: 49,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: FontSize.size_base,
  },
  loginButton: {
    width: 267,
    height: 45,
    backgroundColor: '#2CA9E3',
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -450,
  },
  loginButtonText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textTransform: "uppercase",
    color: Color.colorWhite,
  },
  image1Icon: {
    position: 'absolute',
    width: '100%',
    height: 550,
    marginTop: -250,
  },
  register: {
    position: "absolute",
    top: 62,
    right: 70,
  },
});

export default LOGIN;
