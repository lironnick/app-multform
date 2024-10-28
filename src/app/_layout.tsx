import { Stack } from 'expo-router';
import { AccountProvider } from '@/contexts/AccountFormContext';

export default function Layout() {
  return (
    <AccountProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="two" options={{ headerShown: false }} />
        <Stack.Screen name="tree" options={{ headerShown: false }} />
        <Stack.Screen name="finish" options={{ headerShown: false }} />
      </Stack>
    </AccountProvider>
  );
}
