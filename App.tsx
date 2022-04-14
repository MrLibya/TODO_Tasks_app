import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStack';
import { useStore } from './src/store';
import { getDBTodoList } from './src/utli/databaseHelper';

const App = () => {
	const [state, actions] = useStore();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			try {
				const savedTODO = await getDBTodoList();
				actions.updateList(savedTODO);
			} catch (err) {

			} finally {
				setLoading(false);
			}
		}

		init();
	}, [])

	if (loading)
		return null;
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<NavigationContainer>
					<MainStackNavigator />
				</NavigationContainer>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};



export default App;
