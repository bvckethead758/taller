import React from 'react';
import { Text } from "react-native";

function Greeting (props){
    return(
        <>
            <Text>Hola, {props.name}</Text>
        </>
    )
}

export default Greeting;