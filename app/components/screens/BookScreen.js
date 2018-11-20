import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {colors} from '../_base';

import Book from '../Book';
import Loading from '../common/loading';

class BookScreen extends Component {

  static navigationOptions= {
    title: 'Book'
  }

  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    const {navigation} = this.props;
    fetch(`https://acamicaexample.herokuapp.com/books/${navigation.state.params.id}`)
    .then(respsonse => respsonse.json())
    .then(data => {
      this.setState({
        data
      });
    })
    .catch(error => {
      Alert.alert('oh snap !', 'something went wrong')
    })
    .finally(()=>{
        this.setState({loading:false});
    })
  }

  render() {
    let {loading, data: book} = this.state;   
    return loading ? <Loading isLoading={true}/> : (
      <View style={styles.container}>
        <Book
          author={book.author}
          image={book.image}
          description={book.description}
          url={book.url}
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


export default BookScreen;