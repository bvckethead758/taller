import react from "react";
import { Text } from "react-native";

function UserDetail(props){
    return(
        <Text>Nombre:{props.nombre}, edad: {props.edad}, trabajo: {props.trabajo}</Text>
    )
}

export default UserDetail;