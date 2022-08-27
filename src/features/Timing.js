import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { buttonSizes } from '../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton title="3s" size={buttonSizes.sm} onPress={() => onChangeTime(0.05)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="1m" size={buttonSizes.sm} onPress={() => onChangeTime(1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="5m" size={buttonSizes.sm} onPress={() => onChangeTime(5)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="10m" size={buttonSizes.sm} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="15m" size={buttonSizes.sm} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton title="20m" size={buttonSizes.sm} onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
