import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Buttons, Typography } from '../styles';
import { Button, Divider, Icon } from 'react-native-elements';
import { useStore } from '../store';
import TextInput from '../components/TextInput';
import DatePicker from 'react-native-date-picker'
import DropDown from '../components/DropDown';
import { formatTime12 } from '../utli/helperFunction';

type Props = StackScreenProps<MainStackParamList, 'AddTask'>;

const AddTaskScreen = ({ route, navigation }: Props) => {
    const [, actions] = useStore();
    const [title, setTitle] = useState<string>('');
    const [deadline, setDeadline] = useState<Date>(new Date());
    const [dateModalOpen, setDateModalOpen] = useState(false);
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [startModalOpen, setStartModalOpen] = useState(false);
    const [endTime, setEndTime] = useState<Date>(new Date());
    const [endModalOpen, setEndModalOpen] = useState(false);
    const [remind, setRemind] = useState<string>('');
    const [repeat, setRepeat] = useState<string>('');

    const onSubmit = () => {
        const task = {
            title: title.length ? title : 'No Title Task',
            deadline,
            startTime,
            endTime,
            remind,
            repeat,
            completed: false
        };
        actions.addItem(task);
        navigation.pop();
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Icon tvParallaxProperties name='ios-chevron-back' type='ionicon'
                containerStyle={styles.backBtnStyle}
                onPress={() => navigation.pop()}
            />
            <Text style={Typography.Header}>Add task</Text>
        </View>
        <Divider width={1} style={{ marginVertical: 20 }} />
        <ScrollView>
            <Text style={Typography.InputTitle}>Title</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder='Design team meeting'
            />
            <Text style={Typography.InputTitle}>Deadline</Text>
            <TextInput
                disabled
                value={deadline?.toLocaleDateString('es-CL')}
                onPressIn={() => setDateModalOpen(true)}
            />
            <View style={styles.dateContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={Typography.InputTitle}>Start Time</Text>
                    <TextInput
                        disabled
                        value={formatTime12(startTime)}
                        onPressIn={() => setStartModalOpen(true)}
                        rightIcon={{ name: 'clock-outline', type: 'material-community', size: 22 }}
                        rightIconContainerStyle={{ opacity: 0.3 }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={Typography.InputTitle}>End Time</Text>
                    <TextInput
                        disabled
                        value={formatTime12(endTime)}
                        onPressIn={() => setEndModalOpen(true)}
                        rightIcon={{ name: 'clock-outline', type: 'material-community', size: 22 }}
                        rightIconContainerStyle={{ opacity: 0.3 }}
                    />
                </View>
            </View>
            <Text style={Typography.InputTitle}>Remind</Text>
            <DropDown
                data={[
                    { label: '10 Minutes early', value: '10 Minutes early' },
                    { label: '30 Minutes early', value: '30 Minutes early' },
                    { label: '60 Minutes early', value: '60 Minutes early' },
                ]}

                labelField="label"
                valueField="value"
                value={remind}
                onChange={item => { setRemind(item.value); }}
            />
            <Text style={Typography.InputTitle}>Repeat</Text>
            <DropDown
                data={[
                    { label: 'Daily', value: 'Daily' },
                    { label: 'Weekly', value: 'Weekly' },
                ]}

                labelField="label"
                valueField="value"
                value={repeat}
                onChange={item => { setRepeat(item.value); }}
            />
        </ScrollView>

        <DatePicker
            modal
            mode='date'
            open={dateModalOpen}
            date={deadline as Date}
            onConfirm={(date) => {
                setDateModalOpen(false)
                setDeadline(date)
            }}
            onCancel={() => {
                setDateModalOpen(false)
            }}
        />

        <DatePicker
            modal
            mode='time'
            open={startModalOpen}
            date={startTime as Date}
            onConfirm={(date) => {
                setStartModalOpen(false)
                setStartTime(date)
            }}
            onCancel={() => {
                setStartModalOpen(false)
            }}
        />

        <DatePicker
            modal
            mode='time'
            open={endModalOpen}
            date={endTime as Date}
            onConfirm={(date) => {
                setEndModalOpen(false)
                setEndTime(date)
            }}
            onCancel={() => {
                setEndModalOpen(false)
            }}
        />


        <Button title='Create a task' buttonStyle={Buttons.CreateButton} onPress={onSubmit} />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    header: {
        flexDirection: 'row'
    },
    backBtnStyle: {
        marginEnd: 20
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default AddTaskScreen;