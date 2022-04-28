import * as React from "react";
import {
  useState,
  Button,
  Alert,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ width: 240 }}>
        <Button
          /* onPress={() => navigation.navigate('Configurações')} */
          title="CHAMAR SAMU"
          color="#eb8dd6"
        />
      </View>

      <View style={{ marginTop: 30, width: 240 }}>
        <Button
          /* onPress={simpleAlert} */
          color="#8be1e3"
          width="200"
          title="EXIBIR UNIDADES PRÓXIMAS"
        />
      </View>
    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Button onPress={() => navigation.goBack()} title="Voltar para Início"
        color="#FF1493"
        width="200"
      />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        fontSize: 50,
        padding: 28
      }}
    >
      <Text style={{fontSize: 20, textAlign: "center"}}>Assistência e assertividade para os momentos em que mais precisar!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Configurações" component={SettingScreen} />
        <Drawer.Screen name="Sobre" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

    /*<ScrollView>
        <ImageBackground
        style={{
          width: undefined,
          padding: 16,
          paddingTop: 48

        }}>
          <Text>Raylla S.</Text>
        </ImageBackground>
      </ScrollView>*/
