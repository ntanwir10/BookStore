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

import {colors, padding, fonts} from './_base';
import Loading from './common/loading';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
            limit: 5,
            noMore: false
        }
    }

    componentDidMount() {
        this.getData(); 

    }

    getData() {
        const {page, limit} = this.state;
        this.setState({loading: true}, () => {
            fetch(`https://acamicaexample.herokuapp.com/books?category_id=0&_page=${page}&_limit=${limit}`)
            .then(response=>response.json())
            .then(data => {
                this.setState({
                    data:[...this.state.data, ...data],
                    noMore: data.length < limit
                });
            })
            .catch(error => {
                Alert.alert('oh snap', 'something went wrong');
            })
            .finally(() => {
                this.setState({loading:false});
            })
        });
    }

    loadMore() {
        const {page, loading, noMore} = this.state;
        if(loading || noMore) return;
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.getData();
        });
    }

    render() {
        const {data, loading} = this.state;
        return (
        <View >
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
                        </TouchableHighlight> 
                    }
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent= {<Loading isLoading={loading} />}
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
 
export default Category;