import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBar extends React.Component {
  render() {
    return (
      <View>
        <View>
          <DrawerItems {...this.props} />
        </View>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              width: '100%',
            }}
            onPress={() => {
              this.props.navigation.navigate('LoginScreen');
              firebase.auth().signOut();
            }}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
