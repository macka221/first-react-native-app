import { TouchableOpacity, Image, View, Text } from 'react-native';
import { profileStyles } from './profile-card.style';
import { profileCardImageUrl } from './constants/constants';

export function ProfileCard() {
  return (
  <View style={ profileStyles.container }>
      <View style={ profileStyles.header }>
        <View>
          <Image style={ profileStyles.avatar } source={{ uri: profileCardImageUrl }} />
        </View>
        <View style={ profileStyles.textContent }>
          <Text style={ profileStyles.name }>Codiku TheDev</Text>
          <Text>Hi I am a React Native Developer, let's get in touch</Text>
        </View>
      </View>
      <View style={ profileStyles.social }>
      </View>
  </View>
  )
}
