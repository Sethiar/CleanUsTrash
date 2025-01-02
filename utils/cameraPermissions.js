// cameraPermissions.js
import { Camera } from 'expo-camera';

// Fonction pour demander la permission pour la caméra
export const requestCameraPermission = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();
  return status === 'granted';
};