import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {colors} from '../_base';

import Categories from '../Categories';

class CategoriesScreen extends Component {

  static navigationOptions= {
    title: 'Categories'
  }

  render() {
    const {navigation} = this.props;    
    return (
      <View style={styles.container}>
        <Categories/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground
  },
});


export default CategoriesScreen;