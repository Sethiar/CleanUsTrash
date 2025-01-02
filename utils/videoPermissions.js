// videoPermissions.js
import { launchCamera } from 'react-native-image-picker';

// Fonction pour demander la permission pour enregistrer une vidéo
export const requestVideoPermission = async () => {
  // Exemple d'usage de la bibliothèque pour obtenir une permission vidéo.
  const response = await launchCamera({ mediaType: 'video' });
  return response.didCancel || response.error ? false : true;
};