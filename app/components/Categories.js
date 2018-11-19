import React, { Component} from 'react';
import { View, 
    Text,
    StyleSheet, 
    Button, 
    Linking, 
    Alert, 
    Image, 
    FlatList,
    TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';

import {colors, padding} from './_base';
import Loading from './common/loading';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();

    }

    getData() {
        this.setState({loading: true}, () => {
            fetch('https://acamicaexample.herokuapp.com/categories')
            .then(response=>response.json())
            .then(data => {
                this.setState({data});
            })
            .catch(error => {
                Alert.alert('oh snap', 'something went wrong');
            })
            .finally(() => {
                this.setState({loading:false});
            })
        });
    }

    render() {
        const {data, loading} = this.state;
        return (
        <View >
            <Loading isLoading={loading}/>
            <FlatList 
                data= {data}
                keyExtractor = {item=>item.id}
                renderItem = {({item}) => 
                    <TouchableHighlight underlayColor={colors.primary}
                    style={styles.listItem}
                    onPress={() => {
                        console.log('pressed');
                    }}>
                        <Text>{item.name}</Text>
                    </TouchableHighlight> }
                 />
        </View>
        ) 
    }
   
    
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: padding.md,
        backgroundColor: colors.background
    },
});
 
export default Categories;