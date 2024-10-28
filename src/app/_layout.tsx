import { Stack } from 'expo-router';

// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="two" options={{ headerShown: false }} />
      <Stack.Screen name="tree" options={{ headerShown: false }} />
    </Stack>
  );
}
