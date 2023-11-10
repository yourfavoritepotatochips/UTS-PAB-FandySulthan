import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPackage: null,
    };
  }

  handlePackageSelect = (packageType) => {
    this.setState({ selectedPackage: packageType });
    console.log(`Paket ${packageType} telah dipilih.`);
  };

  render() {
    const { selectedPackage } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>PAKET LANGGANAN MEMBERSHIP</Text>

        <TouchableOpacity
          style={[styles.packageButton, styles.SilverPackage, selectedPackage === 'Silver']}
          onPress={() => this.handlePackageSelect('Silver')}>
          <Text style={styles.packageTitle}>Silver Package</Text>
          <Text style={styles.buttonText}>Diskon 10% untuk setiap laundry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.packageButton, styles.GoldPackage, selectedPackage === 'Gold']}
          onPress={() => this.handlePackageSelect('Gold')}>
          <Text style={styles.packageTitle}>Gold Package</Text>
          <Text style={styles.buttonText}>Diskon 20% untuk setiap laundry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.packageButton, styles.platPackage, selectedPackage === 'Platinum']}
          onPress={() => this.handlePackageSelect('Platinum')}>
          <Text style={styles.packageTitle}>Platinum Package</Text>
          <Text style={styles.buttonText}>Diskon 30% untuk setiap laundry</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2CA9E3',
  },
  packageButton: {
    width: windowWidth - 40, // Menyesuaikan lebar dengan lebar layar dikurangi padding
    height: 120, // Menyesuaikan tinggi sesuai kebutuhan
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10, // Menambah sudut lengkung pada tombol
  },
  SilverPackage: {
    backgroundColor: 'silver',
  },
  GoldPackage: {
    backgroundColor: 'gold',
  },
  platPackage: {
    backgroundColor: '#8A2BE2',
  },
  packageTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
  },
});

export default Membership;
