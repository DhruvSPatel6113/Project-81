import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';

export const MyHeader = props => {
  return (
    <Header
      leftComponent={
        <Icon
          name="bars"
          type="font-awesome"
          color="#ffffff"
          onPress={() => {
            props.navigation.toggleDrawer()
          }}
        />
      }
      centerComponent={{
        text: props.title,
        style: { color: '#ffffff', fontSize: 25, fontWeight: 'bold' },
      }}
    />
  );
};
