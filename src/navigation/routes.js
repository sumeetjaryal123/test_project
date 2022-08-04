import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, ReduxScreen, PublicAPI, GreatDesign} from '../ screens';
import {RouteName} from '../utils/constant';

// Navigation routes
export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RouteName.kHome} component={Home} />
        <Stack.Screen name={RouteName.kPublicAPI} component={PublicAPI} />
        <Stack.Screen name={RouteName.kRedux} component={ReduxScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name={RouteName.kGreatDesign}
          component={GreatDesign}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
