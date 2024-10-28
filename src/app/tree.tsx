import { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function FormStepTree() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // console.log(errors);
  function handleNextStep(data: any) {
    console.log(data);
  }

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues();

    return password === passwordConfirmation || 'As Senhas devem ser iguais.';
  }

  const passwordConfirmation = useRef<TextInput>(null);

  return (
    <View
      style={{ flex: 1, backgroundColor: 'F4F5F6', justifyContent: 'center', padding: 24, gap: 16 }}
    >
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 44 }}>Escolha sua senha</Text>

      <Input
        icon="key"
        error={errors.password?.message}
        formProps={{
          name: 'password',
          control,
          rules: {
            required: 'Senha é obrigatorio.',
            minLength: {
              value: 6,
              message: 'A senha deve ter pelo menos 6 digitos',
            },
          },
        }}
        inputProps={{
          placeholder: 'Senha',
          onSubmitEditing: () => passwordConfirmation.current?.focus(),
          returnKeyType: 'next',
          secureTextEntry: true,
        }}
      />

      <Input
        ref={passwordConfirmation}
        error={errors.passwordConfirmation?.message}
        icon="key"
        formProps={{
          name: 'passwordConfirmation',
          control,
          rules: {
            required: 'Confirmação de senha é obrigatório.',
            validate: validationPasswordConfirmation,
          },
        }}
        inputProps={{
          placeholder: 'Confirmação',
          onSubmitEditing: handleSubmit(handleNextStep),
          secureTextEntry: true,
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
