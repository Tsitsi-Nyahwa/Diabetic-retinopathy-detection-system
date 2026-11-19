import Alert from '@/components/Alert'
import useLogin from '@/hooks/useLogin'
import { styles } from '@/styles'
import Hero from "@/styles/hero.png"
import React from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = () => {
  const {
    email,
    password,
    showPassword,
    errors,
    isValidating,
    loading,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    togglePasswordVisibility
  } = useLogin()

  return (
    <View style={[styles.screen]}>
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
        > 
            <View style={[styles.container]}>
                <View style={[styles.w100, styles.h100, styles.flexColumn, styles.centerItems,{ marginTop: 15, gap: 15 }]}>
                    <View style = {[styles.w100, styles.centerItems]}>
                        <Image
                            source = {Hero}
                            style = {{
                                width : 200,
                                height: 200,
                                resizeMode :"center"
                            }}
                        />
                        <Text style = {[styles.h6]}>Log in with us and continue your screening journey</Text>
                    </View>
                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Email</Text>
                        <TextInput
                        style={[
                            styles.defaultInput,
                            errors.email.length > 0 && styles.inputError
                        ]}
                        placeholder="abc@gmail.com"
                        value={email}
                        onChangeText={handleEmailChange}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        textContentType="emailAddress"
                        />
                        {errors.email.map((error, index) => (
                        <Text key={index} style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {error}
                        </Text>
                        ))}
                    </View>                
                    <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
                        <Text style={[styles.h6]}>Password</Text>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={[
                                styles.defaultInput,
                                errors.password.length > 0 && styles.inputError
                                ]}
                                placeholder="Enter your password"
                                value={password}
                                onChangeText={handlePasswordChange}
                                secureTextEntry={!showPassword}
                                passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                                autoComplete="new-password"
                                textContentType="newPassword"
                            />
                            
                            <TouchableOpacity
                                onPress={togglePasswordVisibility}
                                style={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: [{ translateY: -10 }]
                                }}
                            >
                                <Text style={[styles.p]}>
                                {showPassword ? 'Hide' : 'Show'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        {errors.password.map((error, index) => (
                        <Text key={index} style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                            {error}
                        </Text>
                        ))}
                    </View>
                    
                    {
                        error.length !== 0 &&
                        <View style = {[styles.w100]}>
                            <Alert variant = {"danger"} message={error} />
                        </View>
                    }
                    <TouchableOpacity
                        disabled = {loading}
                        onPress={handleLogin}
                        style={[styles.button,styles.w100, !loading ? styles.bg_success : styles.bg_success_30, styles.centerItems]}
                    >
                        {
                            loading ?
                            <ActivityIndicator size={18} color={styles.bg_success.backgroundColor}/>:
                            <Text style={[styles.btnText, styles.text_white, styles.textCenter]}>
                                Login
                            </Text>
                        }
                    
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    </View>
  )
}

export default Login