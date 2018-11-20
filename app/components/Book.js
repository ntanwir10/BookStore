import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert, Image } from 'react-native';

import PropTypes from 'prop-types';

import {colors, padding, fonts} from './_base';
const Book = (props) => {
    const {image, author, description, url} = props;
    return (
        <View style={styles.bookContainer}>
            < View style = {styles.bookHeaderContainer}>
                <View style={styles.bookImage}>
                    <Image 
                        style={{width: 60, height:90}}
                        source={{uri: image }} />
                </View>
                <View style={styles.bookAuthor}>
                    <Text> by <Text style={styles.bookAuthorText}> {author}</Text></Text>
                </View>

            </ View >
            < View style = {styles.bookDesciprtionContainer}>
                <Text>{description}</Text>
            </View>
            < View style = {styles.bookButtonsContainer}>
                <Button title="Check on Amazon" 
                onPress={() => {
                    Linking.openURL(url)
                    .catch(err => {
                        Alert.alert('oh snap !', 'something went wrong');
                    })
                }} />
            </View>
        </View>
    )
}

Book.propTypes = {
    author: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    bookContainer : {
        flex: 1,
        alignSelf: 'stretch',
    },
    bookHeaderContainer: {
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: colors.primary
    },
    bookDesciprtionContainer: {
        flex: 3,
        padding: padding.sm,
        backgroundColor: colors.background
    },
    bookButtonsContainer: {
        
        height: 50 ,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bookImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthorText: {
        fontSize: fonts.lg
    }
});
 
export default Book;