import react, { useState } from "react";
import { Button, Text } from "react-native";

function ToggleText(){
    const [esVisible, setEsVisible] = useState(false) 
    const [texto, setTexto] = useState("") 

    const visibilidad = (esVisible) => {
        if(esVisible){
            setEsVisible(false)
            setTexto("")
        }
        else{
            setEsVisible(true)
            setTexto("hola")
        }
    }

    return(
        <>
            <Text>{texto}</Text>
            <Button onPress={() => visibilidad(esVisible)} title="Cambiar visibiliadad"></Button>
        </>
    )
}


export default ToggleText;