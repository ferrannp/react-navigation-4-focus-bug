import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {useIsFocused, useNavigation} from 'react-navigation-hooks';
import Tabs from './Tabs';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  Detail: {
    screen: DetailsScreen,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);
