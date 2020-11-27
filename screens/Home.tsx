import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native"

export default function Home() {
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ImageBackground source={require('../assets/houseflix_fundo.png')} style={styles.container}>
            <View style={styles.inputView1} >
                <TextInput
                    value={email}
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    value={password}
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Senha..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)} />
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate('Index')}
            >
                <Text style={styles.loginText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot}>Esqueceu a senha?</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "80%",
        backgroundColor: "#E6E6E6",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView1: {
        width: "80%",
        backgroundColor: "#E6E6E6",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        marginTop: 100
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#0098DB",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white",
        fontWeight: "bold"
    }
});
