import { View, Text } from 'react-native';

import { useFormContext } from 'react-hook-form';

import { AccountProps } from '@/@types/account';

export default function Finish() {
  const { getValues } = useFormContext<AccountProps>();
  const { name, email, birth, phone, password } = getValues();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {name}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Data de nascimento: {birth}</Text>
      <Text>Telefone: {phone}</Text>
      <Text>Senha: {password}</Text>
    </View>
  );
}
