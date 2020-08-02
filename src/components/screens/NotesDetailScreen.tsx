import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, TextInput, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../navigation/AuthParamList';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';

const NotesDetailScreen = inject('rootTree')(observer((props) => {

    const { rootTree } = props
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    type DashboardProp = StackNavigationProp<AuthParamList, 'NotesDetailScreen'>
    const navigation = useNavigation<DashboardProp>()

    navigation.setOptions({
        title: 'Notes Detail',
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    rootTree.employer.newEmployee(name, location)
                    navigation.goBack()
                }}
                style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Done
                </Text>
            </TouchableOpacity>
        )
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <TextInput
                    onChangeText={(text) => setName(text)}
                    style={{
                        marginVertical: 15,
                        paddingHorizontal: 10,
                        fontSize: 16,
                    }}
                    placeholder='Write a name...'
                />
                <TextInput
                    onChangeText={(text) => setLocation(text)}
                    style={{
                        marginVertical: 15,
                        paddingHorizontal: 10,
                        fontSize: 16,
                    }}
                    placeholder='Write a location...'
                />
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

export default NotesDetailScreen