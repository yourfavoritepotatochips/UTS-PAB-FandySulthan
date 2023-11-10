import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Lingkaran Biru sebagai dekorasi */}
      <View style={styles.blueCircle} />
      <View style={styles.header}>
        <Text style={styles.appName}>WASHWELL</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require("../assets/profile-icon.png")} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate()}
        >
          <Image source={require('../assets/icon-handuk.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Cuci Basah</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen2')}
        >
          <Image source={require('../assets/icon-setrika.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Setrika</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen3')}
        >
          <Image source={require('../assets/icon-mesin.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Cuci Kering</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen4')}
        >
          <Image source={require('../assets/icon-express.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Express</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  blueCircle: {
    position: 'absolute',
    top: -150, // Adjust the position as needed and increase the size
    left: -5,
    width: 350, // Increase the size as needed
    height: 350, // Increase the size as needed
    backgroundColor: '#2CA9E3',
    borderRadius: 175, // To create a circular shape
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Warna teks putih
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%', // Adjust as needed
    alignItems: 'center',
    marginVertical: 10,
    height: '50%',
    backgroundColor: 'white', // Background color for the button
    borderRadius: 15, // To create rounded corners
    borderWidth: 3, // Border width
    borderColor: '#2CA9E3', // Border color
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonText: {
    alignItems: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2CA9E3', // Text color
  },
});