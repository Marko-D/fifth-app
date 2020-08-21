import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Appearance,
  useColorScheme,
  AppearanceProvider,
} from 'react-native-appearance';

import {About} from './../about/about';
import News from './../news/news';
import { Colors } from '../../styles';

// import Detail from './src/detail';

// import Screen1 from './src/screens/drawer/screen1';
// import Screen2 from './src/screens/drawer/screen2';
// import Screen3 from './src/screens/drawer/screen3';

// import Tab1 from './src/screens/tabs/tab1';
// import Tab2 from './src/screens/tabs/tab2';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

interface ConnectionsProps {

}

const Page = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>
        Nested Drawer Stack inside Stack Navigator
      </Text>
      <View style={styles.btnLink}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text style={styles.btnTxt}>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const Connections: React.FC<ConnectionsProps> = ({}) => {
  // const colorScheme = useColorScheme();

  // const MyTheme = {
  //   dark: false,
  //   colors: {
  //     primary: 'white',
  //     background: 'white',
  //     card: '#65509f',
  //     text: 'white',
  //     border: 'green',
  //   },
  // };

  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        children={createDrawer}
        options={({navigation}) => ({
          title: 'Home Screen',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name='menu'
                style={[{ color: 'white', marginLeft: 16 }]}
                size={25}
              ></Icon>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name='Detail'
        component={News}
        options={{
          title: 'Detail Screen',
        }}
      />
      {/* <Stack.Screen name='Bottom Tabs' component={Tab1} /> */}
      {/* <Stack.Screen name='Top Tabs' component={Tab2} /> */}
    </Stack.Navigator>
  );

  const createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name='Page' component={Page} />
      {/* <Drawer.Screen name='Contacts' component={Screen1} />
      <Drawer.Screen name='Favorites' component={Screen2} />
      <Drawer.Screen name='Settings' component={Screen3} /> */}
    </Drawer.Navigator>
  );

  return (
    <AppearanceProvider>
      {/* <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}> */}
        {createHomeStack()}
      {/* </NavigationContainer> */}
    </AppearanceProvider>
  );
};

export default Connections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  btnLink: {
    backgroundColor: Colors.EMG_PRIMARY,
    padding: 10,
    marginTop: 20
  },
  btnTxt: {
    color: '#fff'
  }
});