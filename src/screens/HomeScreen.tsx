import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Buttons, Typography } from '../styles';
import { Button, Divider, Icon } from 'react-native-elements';
import { useStore } from '../store';
import TaskListItem from '../components/TaskListItem';

type Props = StackScreenProps<MainStackParamList, 'Home'>;

const HomeScreen = ({ route, navigation }: Props) => {
    const [state, actions] = useStore();

    return <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={Typography.Header}>To-Do App</Text>
            <View style={styles.iconsContainer}>
                <Icon tvParallaxProperties name='search' type='evilicons' />
                <Icon tvParallaxProperties name='ios-notifications-outline' type='ionicon' containerStyle={styles.iconStyle} />
                <Icon tvParallaxProperties name='list' type='font-awesome' />
            </View>
        </View>
        <Divider style={{ marginTop: 15, marginBottom: 25 }} width={1} />
        <ScrollView>
            <Text style={Typography.SubHeader}>Completed tasks</Text>
            {state.todoList.map((item, index) => Boolean(item.completed) && <TaskListItem key={index} index={index} item={item} />)}
            <View style={{ marginVertical: 15 }} />
            <Text style={Typography.SubHeader}>Pending tasks</Text>
            {state.todoList.map((item, index) => Boolean(!item.completed) && <TaskListItem key={index} index={index} item={item} />)}
        </ScrollView>

        <Button title='Add a task' buttonStyle={Buttons.CreateButton} onPress={() => navigation.navigate('AddTask')} />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        // backgroundColor:'red'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    iconsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconStyle: {
        marginHorizontal: 10
    },
})

export default HomeScreen;