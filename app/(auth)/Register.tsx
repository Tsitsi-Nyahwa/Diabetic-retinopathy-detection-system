import Alert from '@/components/Alert'
import DatePicker from '@/components/DatePicker'
import useRegister from '@/hooks/useRegister'
import { styles } from '@/styles'
import Hero from "@/styles/hero.png"
import React from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const CreateAccount = () => {
  const{
    showConfirmPassword,
    confirmPassword,
    isValidating,
    showPassword,
    password,
    hospitalName,
    address,
    loading,
    errors,
    error,
    email,
    handleEmailChange,
    handleChangeAddress,
    handleCreateAccount,
    handleHospitalNameChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleConfirmPasswordChange,
    toggleConfirmPasswordVisibility,
  } = useRegister()
  
  return (
    <View style={[styles.screen]}>
      <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraScrollHeight={45} 
        > 
        <View style={[styles.container]}>
          <View style={[styles.w100, styles.h100, styles.flexColumn, styles.centerItems, { marginTop: 15, gap: 15 }]}>
            <View style={[styles.w100, styles.centerItems]}>
              <Image
                source={Hero}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: "center"
                }}
              />
              <Text style={[styles.h6]}>Register Hospital and start screening</Text>
            </View>

            <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
              <Text style={[styles.h6]}>Hospital Name</Text>
              <TextInput
                style={[
                  styles.defaultInput,
                  errors.hospitalName.length > 0 && isValidating && styles.inputError
                ]}
                placeholder="The eye clinic"
                value={hospitalName}
                onChangeText={handleHospitalNameChange}
                autoCapitalize="words"
                autoComplete="name"
                textContentType="name"
              />
              {isValidating && errors.hospitalName.map((error, index) => (
                <Text key={index} style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                  {error}
                </Text>
              ))}
            </View>

            <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
              <Text style={[styles.h6]}>Email</Text>
              <TextInput
                style={[
                  styles.defaultInput,
                  errors.email.length > 0 && isValidating && styles.inputError
                ]}
                placeholder="abc@gmail.com"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
              />
              {isValidating && errors.email.map((error, index) => (
                <Text key={index} style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                  {error}
                </Text>
              ))}
            </View>
            <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
            <Text style={[styles.h6]}>Address (Optional)</Text>
              <TextInput
                style={[ styles.defaultInput]}
                placeholder="123 First Street, Robert Mugabe, Harare CBD"
                value={address}
                onChangeText={handleChangeAddress}
                autoComplete="address-line1"
                textContentType="addressCity"
              />
            </View>
            
            <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
              <Text style={[styles.h6]}>Password</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={[
                    styles.defaultInput,
                    errors.password.length > 0 && isValidating && styles.inputError
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
              
              {isValidating && errors.password.map((error, index) => (
                <Text key={index} style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                  {error}
                </Text>
              ))}
            </View>

            <View style={[styles.w100, styles.flexColumn, { gap: 5 }]}>
              <Text style={[styles.h6]}>Confirm Password</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={[
                    styles.defaultInput,
                    errors.confirmPassword.length > 0 && isValidating && styles.inputError
                  ]}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChangeText={handleConfirmPasswordChange}
                  secureTextEntry={!showConfirmPassword}
                  autoComplete="new-password"
                  textContentType="newPassword"
                />
                
                <TouchableOpacity
                  onPress={toggleConfirmPasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: [{ translateY: -10 }]
                  }}
                >
                  <Text style={[styles.p]}>
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </Text>
                </TouchableOpacity>
              </View>
              
              {isValidating && errors.confirmPassword.map((error, index) => (
                <Text key={index} style={[styles.p, styles.fontSemiBold, styles.text_danger]}>
                  {error}
                </Text>
              ))}
            </View>
            {
              error.length !== 0 &&
              <View style = {styles.w100}>
                <Alert variant='danger' message={error}/>
              </View>
            }
            <TouchableOpacity
              disabled = {loading}
              onPress={handleCreateAccount}
              style={[styles.button, styles.w100, styles.bg_success, styles.centerItems]}
            >
              {
                loading ?
                <ActivityIndicator size={15} color={styles.bg_white.backgroundColor}/>:
                <Text style={[styles.btnText, styles.text_white, styles.textCenter]}>
                  Create Account
                </Text>
              }
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default CreateAccount