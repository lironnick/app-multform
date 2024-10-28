import { View } from 'react-native';

type Props = {
  progress: number;
};

export function Progress({ progress }: Props) {
  return (
    <View style={{ width: '100%', height: 4, backgroundColor: '#DEDEDE' }}>
      <View style={[{ height: 4, backgroundColor: '#8257e5' }, { width: `${progress}%` }]} />
    </View>
  );
}
