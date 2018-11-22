import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import {colors, padding} from '../_base';
import SplashAnimation from '../SplashAnimation';

class SplashScreen extends Component {
    
    render() {
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
                <SplashAnimation navigation = {navigation}>
                    <StatusBar style={styles.StatusBar} />
                    <View style={styles.appName}>
                        <Text>Book Store</Text>
                    </View>
                    <View>
                        <Text>Demo App</Text>
                    </View>
                    <View>
                        <Text>Built using React Na</Text>
                    </View>
                </SplashAnimation>
            </View>
        );
    }
}

SplashScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    StatusBar: {
        backgroundColor: colors.primary,
    }
});

export default SplashScreen;