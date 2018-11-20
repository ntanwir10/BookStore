import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Category from '../Category';
import {colors} from '../_base';

class HomeScreen extends Component {

  static navigationOptions= {
    title: 'RN Books'
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Button 
          title="Check the categories" 
          onPress={() => {
            navigation.navigate('Categories');
          }} />
        <Category
          id={'0'}
          limit={3}
          disableInfiniteScroll={true}
          />
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


export default HomeScreen;