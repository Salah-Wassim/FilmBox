import React from 'react'
import {
    StyleSheet,  
    TextInput, 
    Alert, 
    Text,
    Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

export default class registrationUser extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: '',
        }
    }

    userRegistration = () => {
        const {UserName} = this.state;
        const {UserEmail} = this.state;
        const {UserPassword} = this.state;

        fetch('http://localhost/filmbox/signUpFormPhp/signUpForm.php', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: UserName,
                email: UserEmail,
                password: UserPassword
            })
        }).then((response) => response.json())
        //Affichage du message de réponse provenant du serveur après l'insertion d'enregistrements.
                .then((responseJson) => {
                    Alert.alert(responseJson);
                }).catch((error) => console.log(error));
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <LinearGradient colors={['#223', '#222', '#222']} style={styles.containerRegistration}>
                    <Text style={styles.titleText}>Welcome !</Text>
                    <Text style={styles.signUpText}>SignUp</Text>
                    <TextInput 
                        placeholder='Username'  
                        placeholderTextColor='#808e9b'
                        style={styles.inputRegistration}
                        autoCapitalize={false}
                        onChangeText={UserName => this.setState({UserName})}
                    />
                    <TextInput 
                        placeholder='Email Adress'  
                        placeholderTextColor='#808e9b'
                        style={styles.inputRegistration}
                        autoCorrect={true}
                        autoCapitalize={false}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        onChangeText={UserEmail => this.setState({UserEmail})}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#808e9b'
                        style={styles.inputRegistration}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={UserPassword => this.setState({UserPassword})}
                    />
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonTextRegistration} onPress={this.userRegistration}>SignUp</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    containerRegistration: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 222,
    },
    titleText: {
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        alignSelf: 'center',
    },
    signUpText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    inputRegistration: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#808e9b',
    },
    signUpButton: {
        backgroundColor: '#833471',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20,
    },
    signUpButtonTextRegistration: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center'
    }
})