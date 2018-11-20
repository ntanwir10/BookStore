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
            page: props.page || 1,
            limit: props.limit || 15,
            noMore: props.disableInfiniteScroll || false,
        }
    }

    componentDidMount() {
        this.getData(); 
    }

    getData() {
        const {page, limit, noMore} = this.state;
        const {id} = this.props;
        this.setState({loading: true}, () => {
            fetch(`https://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`)
            .then(response=>response.json())
            .then(data => {
                this.setState({
                    data:[...this.state.data, ...data],
                    noMore: noMore || data.length < limit
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
        const {onSelect} = this.props;
        return (
        <View >
            <FlatList 
                data= {data}
                keyExtractor = {item=>item.id}
                renderItem = {({item}) => 
                    <TouchableHighlight 
                        underlayColor={colors.primary}
                        style={styles.listItem}
                        onPress={onSelect.bind(this, item.id)}
                        >
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

Category.propTypes = {
    id: PropTypes.string.isRequired,
    limit: PropTypes.number,
    page: PropTypes.number,
    disableInfiniteScroll: PropTypes.bool,
    onSelect: PropTypes.func
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: padding.md,
        backgroundColor: colors.background
    },
});
 
export default Category;