import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { styles } from './style';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from '../../config/FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";

export default function Cadastro({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const cadastro = async () => {
        setLoading(true);
        try {
            // Cria o usuário no Firebase Authentication
            const reponse = await createUserWithEmailAndPassword(auth, email, password);
            const docRef = await addDoc(collection(FIREBASE_DB, 'users'), {
                nome: name,
                email: email,
            });
            console.log("Conta Criada com Sucesso!");
            setEmail('');
            setPassword('');
            setName('');
            navigation.navigate('Login');
            console.log(reponse)
            return docRef.id;
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Falha ao cadastrar usuário');
        } finally {
            setLoading(false);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Image
                        alt="Logo"
                        resizeMode="contain"
                        source={require('../../assets/logo.png')}
                        style={styles.logoImg} />

                    <View style={styles.header}>
                        <Text style={styles.title}>Criar sua Conta</Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Nome</Text>

                            <TextInput
                                onChangeText={text => setName(text)}
                                placeholder="Adriano Barbosa"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={name} />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                onChangeText={text => setEmail(text)}
                                placeholder="adriano@example.com"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={email} />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Senha</Text>

                            <TextInput
                                autoCorrect={false}
                                onChangeText={text => setPassword(text)}
                                placeholder="********"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={password} />
                        </View>

                        <View style={styles.formAction}>
                            <TouchableOpacity
                                onPress={cadastro}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Criar Conta</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={{ marginTop: 'auto' }}>
                        <Text style={styles.formFooter}>
                            Already have an account?{' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    );
}