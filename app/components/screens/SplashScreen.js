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
                    <StatusBar backgroundColor="#28F1A6"/>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appName}>Book Store</Text>
                        
                        <View>
                            <Text style={styles.subText}>Demo App</Text>
                        </View>
                    </View>
                    
                    <View>
                        <Text style={styles.footerText}>Built using React Na</Text>
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
        backgroundColor: '#28F1A6',
    },
    appNameContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    appName: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subText: {
        color: '#ffffff',
        fontSize: 18
    },
    footerText: {
        color: '#ffffff',
        fontSize: 16
    },
    
});

export default SplashScreen;