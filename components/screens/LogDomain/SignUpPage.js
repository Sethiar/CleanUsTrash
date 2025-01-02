import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { formStyles } from '../../../styles/formStyles';

// Importation du composant Button
import Button from '../../Button';

// Importation des fonctions de navigation
import { goToSignUpSuccess } from '../../../navigation/navigation';

const SignUpPage = ({ navigation }) => {

  // État pour suivre le focus des champs d'entrée
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isLocationFocused, setIsLocationFocused] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={globalStyles.container}>
        <View style={formStyles.formContainer}>
          <Text style={formStyles.title}>Page d'inscription</Text>

          <Text style={formStyles.label}>Nom d'utilisateur</Text>
          <TextInput
            style={[
              formStyles.input,
              isUsernameFocused && formStyles.inputFocused,
            ]}
            placeholder="Entrez votre Pseudo"
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
            />
          <Text style={formStyles.label}>Mot de passe</Text>
          <TextInput
            style={[
              formStyles.input,
              isPasswordFocused && formStyles.inputFocused,
            ]}
            placeholder="Entrer votre mot de passe"
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            secureTextEntry
          />

          <Text style={formStyles.label}>Adresse mail</Text>
          <TextInput
            style={[
              formStyles.input,
              isEmailFocused && formStyles.inputFocused,
            ]}
            placeholder="Renseignez votre email"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />

          <Text style={formStyles.label}>Localisation</Text>
          <TextInput
            style={[
              formStyles.input,
              isLocationFocused && formStyles.inputFocused,
            ]}
            placeholder="Entrer le code postal de votre commune"
            onFocus={() => setIsLocationFocused(true)}
            onBlur={() => setIsLocationFocused(false)}
          />

          <Button
            title="S'inscrire"
            onPress={() => {
             console.log('Inscription en cours...');
              goToSignUpSuccess(navigation);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpPage;