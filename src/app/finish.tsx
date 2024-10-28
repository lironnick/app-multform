import { View, Text } from 'react-native';
import { useAccountForm } from '@/hooks/useAccountForm';

export default function Finish() {
  const { accountFormData } = useAccountForm();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {accountFormData.name}</Text>
      <Text>E-mail: {accountFormData.email}</Text>
      <Text>Data de nascimento: {accountFormData.birth}</Text>
      <Text>Telefone: {accountFormData.phone}</Text>
      <Text>Senha: {accountFormData.password}</Text>
    </View>
  );
}
