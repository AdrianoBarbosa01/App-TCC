import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { styles } from './style';
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";
import { FIREBASE_AUTH } from '../../config/FirebaseConfig';
import auth from '@react-native-firebase/auth';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;


    const login = async () => {
        setLoading(true);
        try {
            const reponse = await signInWithEmailAndPassword(auth, email, password);
            console.log(reponse)
            alert("sucesso")
            navigation.navigate('MainTabs');
        } catch (error) {
            console.log(error);
            alert('falha ao cadastrar')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('MainTabs')
                console.log('Usuário está autenticado:', user.uid);
            } else {
                navigation.navigate('Login')
                console.log('Usuário não está autenticado');
            }
        });

        return unsubscribe;
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome back!</Text>

                    <Text style={styles.subtitle}>Sign in to your account</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email</Text>

                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder="john@example.com"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Senha</Text>

                        <TextInput
                            autoCorrect={false}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.formAction}>
                        <TouchableOpacity onPress={login}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Logar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.formFooter}>
                            Não tem uma conta?{' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Cadastrar</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

