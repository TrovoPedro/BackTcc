import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';

export default function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const response = await fetch(url, options);
    console.log(response);
  }

  const routes = useRoute();
  return (
    <View>
      <Text>Cadastre-se</Text>
      <TextInput
        {...username}
        id='usuario'
        placeholder="Informe o usuario"
      />

      <TextInput
        {...email}
        id='email'
        placeholder="Informe o email"
      />

      <TextInput
        {...password}
        id='password'
        placeholder="Informe a senha"
        secureTextEntry={true}

      />


      <TouchableOpacity onPress={handleSubmit}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('cadastrar')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>

  )
}