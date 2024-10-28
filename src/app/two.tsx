import { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import { Progress } from '@/components/progress';

import { AccountProps } from '@/@types/account';

export default function FormStepTwo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AccountProps>();

  function handleNextStep(data: AccountProps) {
    router.push('/tree');
  }

  const phoneRef = useRef<TextInput>(null);

  return (
    <View
      style={{ flex: 1, backgroundColor: 'F4F5F6', justifyContent: 'center', padding: 24, gap: 16 }}
    >
      <Progress progress={60} />
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 44 }}>Suas informações</Text>

      <Input
        icon="calendar"
        error={errors.birth?.message}
        formProps={{
          name: 'birth',
          control,
          rules: {
            required: 'Data de nascimento é obrigatorio.',
            pattern: {
              value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
              message: 'Data de nascimento inválida',
            },
          },
        }}
        inputProps={{
          placeholder: 'Data de nascimento',
          onSubmitEditing: () => phoneRef.current?.focus(),
          returnKeyType: 'next',
        }}
      />

      <Input
        ref={phoneRef}
        error={errors.phone?.message}
        icon="phone"
        formProps={{
          name: 'phone',
          control,
          rules: {
            required: 'Telefone é obrigatório.',
            pattern: {
              value:
                /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
              message: 'Telefone inválido',
            },
          },
        }}
        inputProps={{ placeholder: 'E-mail', onSubmitEditing: handleSubmit(handleNextStep) }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
