import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [
        { orderNumber: '123', orderDate: '2023-01-01', orderType: 'Silver' },
        { orderNumber: '124', orderDate: '2023-01-02', orderType: 'Gold' },
        { orderNumber: '125', orderDate: '2023-01-03', orderType: 'Platinum' },
      ],
    };
  }

  renderOrderItem = ({ item }) => {
    let backgroundColor;
    switch (item.orderType) {
      case 'Silver':
        backgroundColor = '#FFD700';
        break;
      case 'Gold':
        backgroundColor = '#FF6347';
        break;
      case 'Platinum':
        backgroundColor = '#8A2BE2';
        break;
      default:
        backgroundColor = '#fff';
    }

    return (
      <TouchableOpacity
        style={[styles.cardContainer, { backgroundColor }]}
        onPress={() => this.handleOrderPress(item)}>
        <View>
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          <Text style={styles.orderDate}>{item.orderDate}</Text>
          <Text style={styles.orderType}>{item.orderType}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  handleOrderPress = (order) => {
    console.log(`Pesanan ${order.orderNumber} dipilih.`);
  };

  render() {
    const { orderHistory } = this.state;

    return (
      <View style={styles.container}>
        <Text>Riwayat Pesanan</Text>
        <FlatList
          data={orderHistory}
          keyExtractor={(item) => item.orderNumber.toString()}
          renderItem={this.renderOrderItem}
        />
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
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#888',
  },
  orderType: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default HistoryScreen;
