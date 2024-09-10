import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert  } from 'react-native';
import ListaContador from './components/ListaContador';
import Greeting from './components/Greeting' 
import Task from './components/Task';
import UserDetail from './components/UserDetails';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from "./components/ThemeSwitcher";
import AlertButton from "./components/AlertButton";
import ParentCounter from "./components/ParentCounter";
import ImageGallery from "./components/ImageGallery";
import Game from "./components/Game";

//pantalla principal 

export default function App() {
  const task = { completed: true };
   const mensaje = "hola"

  const [userData, setData] = useState(null);
  const [theme, setTheme] = useState(false);

  const handleRegister = (data) => {
    setData(data);
  };

  const switchTheme = () => {
    if(theme){
      setTheme(false)
    }
    else{
      setTheme(true)
    }
  };

    // ListaContador es un ejemplo que tiene todo lo visto en clase
    // el complemento de este ejmplo es el archivo codigoContador.js
    // Esta es como se veria en codigo sin la parte grafica. 
    // No es necesario que le den vueltas a este codigo. Es en caso de que les pueda ser util
    // La diea del taller es que los puntos los agreguen dentro del tag SafeAreaView
    // Notas:
    // Estos comentarios pueden borrarlos si les estorban. solo es para que entiendan el codigo
    // Si tienen dudas no duden en preguntar
    // Adiconlamente van agregando los componentes que se les piden en el taller
    // y luego los van comentando para que no se les mezclen los componentes
    // los componentes se comentan como esta el segundo componente de este archivo

    const containerStyle = theme ? styles.darkContainer : styles.lightContainer;
   
  return (
      <View style={containerStyle}>
      <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <ListaContador />
          <Greeting name="nombre" />
          <Task task={task} />
          <UserDetail nombre="juan" edad="25" trabajo="Desarrollador" />
          <ToggleText />
          <DynamicForm />
          <ClickCounter />
          <RegistrationForm onRegistro={handleRegister} />
          {userData && (
            <View>
              <Text>{userData.correo}</Text>
              <Text>{userData.contrasena}</Text>
            </View>
          )}
          <ThemeSwitcher onCambiarTema={switchTheme} />
          <AlertButton mensaje={mensaje} />
          <ParentCounter />
          <ImageGallery />
          <Game />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

