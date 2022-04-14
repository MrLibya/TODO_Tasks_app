import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, InputProps } from 'react-native-elements';

const TextInput = (props: InputProps) => <Input {...props} autoCompleteType='off'
    containerStyle={[styles.containerStyle, props.containerStyle]}
    inputContainerStyle={[styles.inputContainerStyle, props.inputContainerStyle]}
    inputStyle={[styles.label, props.inputStyle]}
    labelStyle={[styles.label, props.labelStyle]}
/>;

const styles = StyleSheet.create({
    containerStyle: {
        marginTop:8,
        // paddingHorizontal: 0,
    },
    inputContainerStyle: {
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderBottomWidth:0,
        borderRadius:10
        // borderBottomColor: '#E3E3E3'
    },
    label: {
        paddingStart:20,
        fontSize: 15,
        // color: '#86939e'
    }
})

export default TextInput;