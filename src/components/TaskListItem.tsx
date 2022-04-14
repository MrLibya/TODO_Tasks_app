import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useStore } from '../store';
import { IToDoList } from '../types/items';

function randomColor(brightness: number) {
    function randomChannel(brightness: number) {
        var r = 255 - brightness;
        var n = 0 | ((Math.random() * r) + brightness);
        var s = n.toString(16);
        return (s.length == 1) ? '0' + s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

const TaskListItem = ({ index, item }: { index: number, item: IToDoList }) => {
    const [, actions] = useStore();

    // const color = randomColor(Math.random() * 150);
    const color = randomColor(10);

    const onPress = () => {
        actions.toggleTask(index);
    }
    return (
        <CheckBox
            title={item.title}
            checked={item.completed as boolean}
            containerStyle={styles.container}
            textStyle={styles.text}
            checkedColor={color}
            uncheckedColor={color}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 16
    }
});

export default TaskListItem;