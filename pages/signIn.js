import React, {useEffect} from 'react'
import {
    StyleSheet, 
    View, 
    Text,
    Alert, 
    TextInput, 
    StatusBar, 
    Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
//import {icon} from 'react-native-elements'

export default class signIn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            UserEmail: '',
            UserPassword: '',
        }
    }

    userSignIn = () => {
        const {UserEmail} = this.state;
        const {UserPassword} = this.state;

        fetch('http://localhost/filmbox/signUpFormPhp/signInForm.php', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: UserEmail,
                password: UserPassword
            })
        }).then((response) => response.json())
                .then((responseJson) => {
                    Alert.alert(responseJson);
                }).catch((error) => console.log(error));
    }

    //useEffect(() => {
    //    StatusBar.setBarStyle('light-content', true); 
    //}, [])

    _displaySignUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    render(){
        const actif = this.props.actif
        return(
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <LinearGradient colors={['#223', '#222', '#222',]} style={styles.container}>
                    <Text style={styles.welcomeText}>Welcome Back !</Text>
                    <Text style={styles.loginText}>Login</Text>
                    <TextInput 
                        placeholder='Email Adress'  
                        placeholderTextColor='#808e9b'
                        style={styles.input}
                        autoCorrect={true}
                        autoCapitalize={false}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        onChangeText = {UserEmail => this.setState({UserEmail})}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#808e9b'
                        style={styles.input}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText = {UserPassword => this.setState({UserPassword})}
                    />
                    <TouchableOpacity>
                        <Text style={styles.fpText}>Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText} onPress={this.userSignIn}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpTextView}>
                        <Text style={styles.signUpText}>Don't have an account ?</Text>
                        <TouchableOpacity>
                            <Text style={[styles.signUpText, {color: '#B53471' }]}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 222,
    },
    welcomeText:{
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        alignSelf: 'center',
    },
    loginText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#808e9b',
    },
    fpText: {
        alignSelf: 'flex-end',
        color:'#B33771',
        fontSize:18,
        fontWeight: '600',
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: '#833471',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20,
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center'
    },
    signUpTextView: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        color: '#808e9b',
        fontSize: 20,
        fontWeight: '500'
    }
})