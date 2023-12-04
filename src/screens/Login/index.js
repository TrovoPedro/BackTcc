import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();
  const {userLogin} = React.useContext(UserContext);
  const navigation = useNavigation();
  const [count, setCount] = React.useState('');
  const onPress = () => setCount(prevCount => prevCount);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "90%" }}>
        <Text>Login Form</Text>
        <TextInput {...username}
          id='usuario'
          placeholder="Informe o usuario"

        />
        <TextInput {...password}
          id='password'
          placeholder="Informe a senha"
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => navigation.navigate('cadastrar')}>
          <Text>cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSubmit}>
          <Text>Entrar</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'

  },
});
