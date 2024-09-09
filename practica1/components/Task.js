import react from "react";
import { Text } from "react-native";

function Task(props){
        let estado

const verificar = (props) => {
if(props.task.completed == true){
        estado = "Completado"
        return;
}
else{
        estado = "No está completado"
}

}

verificar(props)

return(
        <Text>Estado de tarea: {estado}</Text>
    )
}

export default Task;