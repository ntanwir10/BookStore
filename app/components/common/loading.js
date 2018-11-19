import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import {colors, padding} from './../_base';
const Loading = (props) => {
    return (
        props.ActivityIndicator ? (
            <View style={styles.container}>
                   <ActivityIndicator
                   size="large"
                    color={colors.secondary}
                   />     
            </View>
        ) : false
        
    )
}

const styles = StyleSheet.create({
    container: {
        padding: padding.md
    }
});
 
export default Loading;