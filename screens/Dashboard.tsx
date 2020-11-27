import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


export default function Dashboard() {

        return (
            <View style={styles.container}>
                <Card containerStyle={styles.card} title="Projeto X">
                    <Text style={styles.paragraph}>
                        React Native Card View for Android and IOS using
                        "react-native-elements"
                    </Text>
                </Card>
            </View>
        );
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 25,
        height: "85%",
    },
});