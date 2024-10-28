import { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { router } from 'expo-router';

export default function FormStepOne() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);
  function handleNextStep(data: any) {
    console.log(data);
    router.push('/two');
  }

  const emailRef = useRef<TextInput>(null);

  return (
    <View
      style={{ flex: 1, backgroundColor: 'F4F5F6', justifyContent: 'center', padding: 24, gap: 16 }}
    >
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 44 }}>Criar sua conta</Text>

      <Input
        icon="user"
        error={errors.name?.message}
        formProps={{ name: 'name', control, rules: { required: 'Nome é obrigatorio.' } }}
        inputProps={{
          placeholder: 'Nome',
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: 'next',
        }}
      />

      <Input
        ref={emailRef}
        error={errors.email?.message}
        icon="mail"
        formProps={{
          name: 'email',
          control,
          rules: {
            required: 'E-mail é obrigatório.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: 'E-mail inválido.',
            },
          },
        }}
        inputProps={{ placeholder: 'E-mail', onSubmitEditing: handleSubmit(handleNextStep) }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
