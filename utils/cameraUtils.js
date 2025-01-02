import { Alert } from 'react-native';

export const takePhoto = async (cameraRef, setPhoto, hasCameraPermission) => {
  // Vérification de la permission à la caméra
  if (!hasCameraPermission) {
    Alert.alert('Permission refusée', 'Active la caméra dans les paramètres.');
    return;
  }

  // Vérification si la référence à la caméra existe
  if (cameraRef.current) {
    try {
      // Prendre la photo
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData.uri); // Stocke l'URI de la photo prise
      Alert.alert('Info', 'Photo prise avec succès!');
      console.log(photoData); // Affiche les informations de la photo dans la console
    } catch (error) {
      // Gestion des erreurs lors de la prise de la photo
      Alert.alert('Erreur', 'Impossible de prendre la photo. Veuillez réessayer.');
      console.error('Erreur lors de la prise de photo: ', error);
    }
  } else {
    // Si la référence à la caméra est manquante
    Alert.alert('Erreur', 'La caméra n\'est pas disponible.');
  }
};