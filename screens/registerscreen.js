import * as React from "react";
import {Pressable, Text, StyleSheet, TextInput, View, ImageBackground,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const REGISTER = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <ImageBackground
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/imagecore.jpeg")}
      >
        <View style={styles.overlay}>
          <Text style={styles.registerText}>REGISTER</Text>
          <Pressable style={styles.login} onPress={() => navigation.navigate("LOGIN")}>
            <Text style={styles.loginText}>LOGIN</Text>
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            placeholderTextColor="#000"
          />
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
          <TextInput
            style={styles.input}
            placeholder="Nomor Telepon"
            placeholderTextColor="#000"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Alamat"
            placeholderTextColor="#000"
          />
          <Pressable style={styles.registerButton} onPress={() => navigation.navigate("Tabs")}>
            <Text style={styles.registerButtonText}>REGISTER</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    register: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: 650,
    },
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 600, // Menurunkan elemen-elemen ke bawah
    },
    registerText: {
      fontSize: FontSize.size_xl,
      fontFamily: FontFamily.interBold,
      fontWeight: "700",
      textTransform: "uppercase",
      color: Color.colorDeepskyblue,
      marginTop: -90, // Anda dapat menyesuaikan nilai ini sesuai kebutuhan
      marginBottom: 50,
      right: 80,
    },
    
    loginText: {
      fontSize: FontSize.size_xl,
      fontFamily: FontFamily.interSemiBold,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: Color.colorBlack,
      marginTop: -95,
    },
    input: {
      width: 267, // Sesuaikan lebar sesuai kebutuhan
      height: 49,
      borderColor: Color.colorBlack,
      borderWidth: 1,
      borderRadius: Border.br_xl,
      paddingHorizontal: 10,
      marginBottom: 10,
      fontSize: FontSize.size_base,
    },
    registerButton: {
      width: 267,
      height: 45,
      backgroundColor: '#2CA9E3',
      borderRadius: Border.br_xl,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: -450,
    },
    registerButtonText: {
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
    login: {
      position: "absolute",
      top: 62,
      right: 70,
    },
  });

export default REGISTER;
