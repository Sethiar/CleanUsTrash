import { Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

export const recordVideo = (setVideo) => {
  launchCamera({ mediaType: 'video' }, (response) => {
    if (response.didCancel) {
      Alert.alert('Annulé', 'L\'enregistrement a été annulé.');
    } else if (response.error) {
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'enregistrement de la vidéo.');
    } else {
      // Stocke l'URI de la vidéo
      const videoUri = response.assets[0].uri;
      setVideo(videoUri);
      Alert.alert('Info', 'Vidéo enregistrée avec succès!');
      console.log('Vidéo enregistrée : ', videoUri);
    }
  });
};