import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={{
        height: 56,
        width: '100%',
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <Text style={{ color: '#FFF', fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
}

//
