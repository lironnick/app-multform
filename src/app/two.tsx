import { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { router } from 'expo-router';

export default function FormStepTwo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);
  function handleNextStep(data: any) {
    console.log(data);
    router.push('/tree');
  }

  const phoneRef = useRef<TextInput>(null);

  return (
    <View
      style={{ flex: 1, backgroundColor: 'F4F5F6', justifyContent: 'center', padding: 24, gap: 16 }}
    >
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
      {/* ^((\\+\\d{2}\\s)?\\(\\d{2}\\)\\s?\\d{4}\\d?\\-\\d{4})?$ */}
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
