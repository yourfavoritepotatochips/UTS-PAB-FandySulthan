import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const History = ({ orders, onPressOrder }) => {
  const renderOrderItem = ({ item }) => {
    let backgroundColor;
    switch (item.orderType) {
      case 'cuci_basah':
        backgroundColor = '#FFD700';
        break;
      case 'express':
        backgroundColor = '#FF6347';
        break;
      case 'VIP':
        backgroundColor = '#8A2BE2';
        break;
      default:
        backgroundColor = '#fff';
    }

    return (
      <TouchableOpacity
        style={[styles.cardContainer, { backgroundColor }]}
        onPress={() => onPressOrder(item)}
      >
        <View>
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          <Text style={styles.orderDate}>{item.orderDate}</Text>
          <Text style={styles.orderType}>{item.orderType}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderNumber.toString()}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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

export default History;
