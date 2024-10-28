import { Stack } from 'expo-router';

import { FormProvider, useForm } from 'react-hook-form';

export default function Layout() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="two" options={{ headerShown: false }} />
        <Stack.Screen name="tree" options={{ headerShown: false }} />
        <Stack.Screen name="finish" options={{ headerShown: false }} />
      </Stack>
    </FormProvider>
  );
}
