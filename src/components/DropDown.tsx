import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropdownProps } from 'react-native-element-dropdown/src/Dropdown/type';

const DropDown = (props: DropdownProps) => <Dropdown {...props} maxHeight={200}
    style={styles.dropdown}
    placeholderStyle={styles.selectedTextStyle}
    selectedTextStyle={styles.selectedTextStyle}
/>;

const styles = StyleSheet.create({
    dropdown: {
        marginTop:8,
        height: 50,
        // backgroundColor:'#E3E3E3',
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    selectedTextStyle: {
        color:'gray',
        fontSize: 15,
    },
})

export default DropDown;