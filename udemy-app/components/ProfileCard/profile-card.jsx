import { TouchableOpacity, Image, View, Text, Linking } from 'react-native';
import { profileStyles } from './profile-card.style';
import { profileCardImageUrl } from './constants/constants';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

export function ProfileCard({ firstName, lastName, age, children }) {

  function goToSocialMedia(socialMedia) {
    let url;

    switch (socialMedia) {
      case 'twitter':
        url = 'http://example.com';
        break;
      case 'github':
        url = 'http://github.com/macka221';
        break;
      case 'linkedin':
        url = 'http://linkedin.com/in/zachare-lofton1997';
        break;
      default:
        break;
    }

    Linking.openURL(url)
  }

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
        <TouchableOpacity onPress={ () => goToSocialMedia('twitter') } style={ profileStyles.socialButton }>
          <FontAwesome6 name='x-twitter' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => goToSocialMedia('linkedin') } style={ profileStyles.socialButton }>
          <FontAwesome name='linkedin-square' size={24} color='#0A66C2' />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => goToSocialMedia('github') } style={ profileStyles.socialButton }>
          <FontAwesome name='github' size={24} color='#333' />
        </TouchableOpacity>
      </View>
  </View>
  )
}
