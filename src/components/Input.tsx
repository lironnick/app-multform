import { forwardRef } from 'react';
import { TextInput, View, TextInputProps, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Controller, UseControllerProps } from 'react-hook-form';
import { clsx } from 'clsx';

type Props = {
  error: string;
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

const Input = forwardRef<TextInput, Props>(({ icon, formProps, inputProps, error = '' }, ref) => {
  return (
    <Controller
      render={({ field }) => (
        <View
          style={{
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              height: 56,
              width: '100%',
              backgroundColor: '#FFF',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                height: 56,
                width: 56,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderRightWidth: 3,
                borderRightColor: '#F4F5F6',
              }}
            >
              <Feather
                name={icon}
                size={24}
                color={clsx({
                  ['#DC1637']: error.length > 0,
                  ['#8257e5']: field.value === 0 && field.value,
                  ['#999']: !field.value && error.length === 0,
                })}
              />
            </View>

            <TextInput
              ref={ref}
              value={field.value}
              onChangeText={field.onChange}
              style={{ flex: 1, paddingLeft: 16, fontSize: 16 }}
              {...inputProps}
            />
          </View>

          {error.length > 0 && (
            <Text style={{ fontSize: 14, marginTop: 7, color: '#DC1637' }}>{error}</Text>
          )}
        </View>
      )}
      {...formProps}
    />
  );
});

export { Input };
