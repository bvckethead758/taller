import React from "react";
import { Alert, Button } from "react-native";

function AlertButton({ mensaje }) {
    // Función que muestra una alerta con el mensaje pasado como prop
    const mostrarAlerta = () => {
        Alert.alert("Alerta", mensaje);
    };

    return (
        <Button title="Mostrar Alerta" onPress={mostrarAlerta} />
    );
}

export default AlertButton;
