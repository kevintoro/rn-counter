import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

interface FloatingProps {
  position?: 'bottom_right' | 'bottom_left';
  title: string,
  onPress: () => void,
}

export const FloatingActionButton = ({ onPress, title, position = 'bottom_right' }: FloatingProps) => {

  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={position === 'bottom_left' ? styles.fabLocationBL : styles.fabLocationBR}
        activeOpacity={0.75}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={position === 'bottom_left' ? styles.fabLocationBL : styles.fabLocationBR}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#391C72', false, 30)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  fabLocationBR: {
    bottom: 25,
    position: 'absolute',
    right: 25,
  },
  fabLocationBL: {
    bottom: 25,
    position: 'absolute',
    left: 25,
  },
});
