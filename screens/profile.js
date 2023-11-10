import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      address: 'Jl. Contoh No. 123',
      phoneNumber: '08123456789',
      // Anda dapat menambahkan lebih banyak informasi pengguna sesuai kebutuhan.
    };
  }

  handleSaveProfile = () => {
    // Di sini, Anda dapat menambahkan logika untuk menyimpan perubahan data pengguna ke database atau server.
    // Misalnya, menggunakan API untuk mengirim data perubahan ke server.
    // Anda juga dapat menambahkan validasi input sebelum menyimpan.
    // Contoh sederhana:
    const { username, email, address, phoneNumber } = this.state;
    if (username && email && address && phoneNumber) {
      // Simpan perubahan data pengguna atau lakukan tindakan lain sesuai kebutuhan.
      console.log('Perubahan data pengguna berhasil disimpan:', username, email, address, phoneNumber);
      // Tampilkan pesan sukses atau kembali ke halaman sebelumnya.
    } else {
      // Tampilkan pesan kesalahan jika ada input yang tidak valid.
      console.log('Input tidak valid. Lengkapi semua data.');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profil Pengguna</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          onChangeText={(text) => this.setState({ address: text })}
          value={this.state.address}
        />
        <TextInput
          style={styles.input}
          placeholder="Nomor Telepon"
          onChangeText={(text) => this.setState({ phoneNumber: text })}
          value={this.state.phoneNumber}
        />
        <Button title="Simpan Perubahan" onPress={this.handleSaveProfile} />
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
  input: {
    width: '80%',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Profile;