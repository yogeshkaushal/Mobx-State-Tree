import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity,
    Animated,
} from 'react-native';

const Animation = ({ text }) => {
    return (
        <>
            <TouchableOpacity style={styles.containerStyle}>
                <Text style={{ fontSize: 16, paddingLeft: 10, }}>
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        width: '90%',
        alignSelf: 'center',
        aspectRatio: 4,
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})

export default Animation
