import React, { useState } from "react"
import {StyleSheet, TouchableOpacity, Text, Linking, Alert} from 'react-native'

export default function LinkButton([{text}, {url}]) {
    async function handleClick(){
        SetActive(!active);
        console.log("abas");
        const supported = await Linking.canOpenURL(url);
        if (supported) {
        await Linking.openURL(url);
        } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }
    const [active, SetActive] = useState(false);
    const dynamicStyle = {
        backgroundColor: !active ? '#8d4c17' : '#17668d',
        color: !active ? 'orange' : 'cyan',
        borderColor: !active ? 'orange' : 'cyan',
    }
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handleClick}>
        <Text style={[style.skill, dynamicStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
    skill: {
        padding: 3,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
        borderWidth: 1,
        textAlign: 'center'
    }
})