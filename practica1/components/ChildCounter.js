import React from "react";
import { Button, Text, View } from "react-native";

function ChildCounter({ contadorPadre, incrementarContador }) {
    return (
        <View style={{ marginTop: 20 }}>
            <Text>Contador desde el hijo: {contadorPadre}</Text>
            <Button title="Incrementar contador del padre" onPress={incrementarContador} />
        </View>
    );
}

export default ChildCounter;
