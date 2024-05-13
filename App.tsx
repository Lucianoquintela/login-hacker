import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

import { Linking } from 'react-native';

export default function App() {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');
  
  

  const [cpf, setCpf] = useState('');
  const [cpfField, setCpfField] = useState('');

  const handleSendCpf = () => {
    setCpf(cpfField);
  };

  // funcao esquici minha senha
  const handleForgotButton = () => {
    {
      alert(
        'Como assim esqueceu a senha? OBS: a senha e o email estão no README'
      );
    }
  };

  // funcao do  botao entrar
  const handleLoginButton = () => {
    setEmailField(emailField);

    

    if (emailField === 'hacker@email.com' && passwordField === 'hacker004') {
      alert('Você esta oficialmente no bando');
    } else {
      alert('SENHA ERRADA, CLIQUE EM ESQUECI MINHA SENHA OU CADASTRE-SE');
    }
  };

  // funcao do cadastre-se
  const handleSignUpButton = () => {
    
    setCadastreSe('false')
    setCadastreSe('true')

  };

  return (
    <ScrollView style={styles.scrollview}>
      {cpf == '' && (
        <>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('./assets/hacker.gif')}
            />
            <Text style={styles.h1}>Anonymous</Text>
            <Text style={styles.h2}>Bem vindo(a)! Entre para o bando.</Text>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Digite seu email"
                placeholderTextColor="#98FB98"
                 value={cpfField}
               onChangeText={(text) => setCpfField(text)}
                autoCapitalize="none"
                // autoCapitalize -  faz com que o teclado não venha maisculo
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
               
                style={styles.inputField}
                placeholder="************"
                value={passwordField}
                placeholderTextColor="#98FB98"
                onChangeText={(t) => setPasswordField(t)}
                autoCapitalize="none"
                secureTextEntry


                
              />
            </View>

            <View style={styles.aditionals}>
              <TouchableOpacity
                style={styles.forgotBtnArea}
                onPress={handleForgotButton}>
                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                onPress={() =>
                  Linking.openURL(
                    'https://lucianoquintela.github.io/qualidade-e-teste-de-software/'
                  )
                }>
                <Text style={styles.buttonText}>Entrar</Text>
              </Text>
            </TouchableOpacity>

            <View style={styles.signUpArea}>
              <Text style={styles.signUpText}>Não tem conta?</Text>

              <TouchableOpacity  onPress={handleSendCpf}>
                <Text style={styles.signUpBtnText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerArea}>
              <Text style={styles.footerText}>Criado por Anonymous</Text>
            </View>
          </View>
      </>
      )}
      

       {cpf === 'hacker@email.com'  && (
        <>
          <Text style={styles.teste}>Você esta oficialmente no bando!</Text>jhgjgj
        </>
      )}
       
    </ScrollView>
  );
}
