import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

// Importation du composant Button
import Button from '../../Button';

// Importation des fonctions de navigation
import { goToMainProcess1, goToMainProcess2, goToMainProcess3  } from '../../../navigation/navigation';


const MainPage = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>CLEAN US TRASH</Text>
      <Button
        title="Signaler un dépôt"
        onPress={() => goToMainProcess1(navigation)}
      />

      <Button
        title="Signaler une pollution"
        onPress={() => goToMainProcess2(navigation)}
      />

      <Button
        title="Proposer ses services"
        onPress={() => goToMainProcess3(navigation)}
      />
    </View>
  );
};

export default MainPage;