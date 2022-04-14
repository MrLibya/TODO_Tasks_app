import AsyncStorage from '@react-native-async-storage/async-storage';

export const TODO_DB_KEY = 'TODO_DB_KEY';

export const getDBTodoList = async () => {
    const list = await AsyncStorage.getItem('TODO_DB_KEY');
    return list != null ? JSON.parse(list) : [];
}

export const updateDBTodoList = async (list) => {
    return await AsyncStorage.setItem('TODO_DB_KEY', JSON.stringify(list));
}