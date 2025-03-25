import { TouchableOpacity, Image, View, Text } from 'react-native';
import { profileStyles } from './profile-card.style';
import { profileCardImageUrl } from './constants/constants';
import { FontAwesome } from '@expo/vector-icons';

export function ProfileCard({ firstName, lastName, age, children }) {
  return (
  <View style={ profileStyles.container }>
      <View style={ profileStyles.header }>
        <View>
          <Image style={ profileStyles.avatar } source={{ uri:  'https://i.pravatar.cc/300' }} />
        </View>
        <View style={ profileStyles.textContent }> 
          <Text style={ profileStyles.name }>
            { children } { firstName } { lastName }
          </Text>
          <Text>Hi I am a { age } React Native Developer, let's get in touch</Text>
        </View>
      </View>
      <View style={ profileStyles.social }>
        <TouchableOpacity style={ profileStyles.socialButton }>
          <FontAwesome name='twitter' size={24} color='#1DA1F2' />
        </TouchableOpacity>
        <TouchableOpacity style={ profileStyles.socialButton }>
          <FontAwesome name='linkedin-square' size={24} color='#0A66C2' />
        </TouchableOpacity>
        <TouchableOpacity style={ profileStyles.socialButton }>
          <FontAwesome name='github' size={24} color='#333' />
        </TouchableOpacity>
      </View>
  </View>
  )
}
