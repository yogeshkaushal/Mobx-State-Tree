import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../navigation/AuthParamList';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';
import { Root } from '../../modals/index'

const Dashboard = inject('rootTree')(observer((props) => {

    const { rootTree } = props

    type DashboardProp = StackNavigationProp<AuthParamList, 'Dashboard'>
    const navigation = useNavigation<DashboardProp>()

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('NotesDetailScreen')}
                style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Add
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={rootTree.employer.employees}
                    extraData={rootTree.employer.employees}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('NotesDetailScreen')}
                                style={styles.listStyle}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    marginVertical: 2
                                }}>
                                    {item.name}
                                </Text>
                                <Text>{item.location}</Text>
                            </TouchableOpacity>)
                    }} />
            </View>
        </SafeAreaView>
    );
}))

const styles = StyleSheet.create({
    listStyle: {
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingStart: 10,
        marginVertical: 5,
        aspectRatio: 5,
        borderRadius: 10,
        backgroundColor: 'lightgrey'
    }
})

export default Dashboard