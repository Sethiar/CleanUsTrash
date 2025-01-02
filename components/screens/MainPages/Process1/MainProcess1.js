import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../../../styles/globalStyles';

// Importer la fonction utilitaire
import { requestCameraPermissions } from '../../../../utils/cameraPermissions';
import { takePhoto } from '../../../../utils/cameraUtils';
import { requestVideoPermission } from  '../../../../utils/videoPermissions';
import { recordVideo } from '../../../../utils/videoUtils';

const MainProcess1 = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

  // Permission caméra au chargement du composant
  useEffect(() => {
    const getCameraPermission = async () => {
      const permissionGranted = await requestCameraPermission();
      setHasCameraPermission(permissionGranted);
    };

    getCameraPermission();
  }, []);

  // Affichage du composant caméra ou du message de permission
  if (hasCameraPermission === null) {
    return <Text>Chargement...</Text>;
  }

  if (hasCameraPermission === false) {
    return <Text>Permission refusée pour utiliser la caméra.</Text>;
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>CLEAN US TRASH</Text>
      <Text style={globalStyles.text}>Signaler un dépôt</Text>

      {/* Bouton pour prendre une photo */}
      <TouchableOpacity style={styles.button} onPress={() => takePhoto(cameraRef, setPhoto, hasCameraPermission)}>
        <Icon name="photo-camera" size={30} color="white" />
        <Text style={styles.buttonText}>Prendre une photo</Text>
      </TouchableOpacity>

      {/* Afficher la photo prise (si elle existe) */}
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}

      {/* Bouton pour enregistrer une vidéo */}
      <TouchableOpacity style={styles.button} onPress={() => recordVideo(setVideo)}>
        <Icon name="videocam" size={30} color="white" />
        <Text style={styles.buttonText}>Enregistrer une vidéo</Text>
      </TouchableOpacity>

      {/* Afficher la vidéo enregistrée (si elle existe) */}
      {video && (
        <Video
          source={{ uri: video }}
          style={styles.video}
          controls={true}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  photo: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  video: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
});

export default MainProcess1;