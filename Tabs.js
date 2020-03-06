import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {useIsFocused, useNavigation} from 'react-navigation-hooks';
import {Button, StyleSheet, Text, View} from 'react-native';

const TabScreen = ({index}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Tab ${index} is focused: ${isFocused}`}</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

const Tabs = createBottomTabNavigator(
  {
    Tab1: {
      screen: props => <TabScreen {...props} index={1} />,
    },
    Tab2: {
      screen: props => <TabScreen {...props} index={2} />,
    },
    Tab3: {
      screen: props => <TabScreen {...props} index={3} />,
    },
  },
  {},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 16,
  },
});

export default Tabs;
