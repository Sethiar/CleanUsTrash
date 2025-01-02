import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { formStyles } from '../../styles/formStyles';

// Importation du composant Button
import Button from '../Button';

const LoginPage = () => {
  // États pour suivre les valeurs des champs et les focus
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // Gestion du focus pour les champs
  const handleFocus = (field) => {
    if (field === 'username') {
      setIsUsernameFocused(true);
    } else if (field === 'password') {
      setIsPasswordFocused(true);
    }
  };

  const handleBlur = (field) => {
    if (field === 'username') {
      setIsUsernameFocused(false);
    } else if (field === 'password') {
      setIsPasswordFocused(false);
    }
  };

  const handleLogin = () => {
    console.log('Connexion en cours...');
    // Tu peux gérer la logique de connexion ici, par exemple vérifier les identifiants
  };

  return (
    <View style={globalStyles.container}>
      <View style={formStyles.formContainer}>
        <Text style={formStyles.title}>Page de connexion</Text>

        {/* Champ utilisateur */}
        <Text style={formStyles.label}>Nom d'utilisateur</Text>
        <TextInput
          style={[
            formStyles.input,
            isUsernameFocused && formStyles.inputFocused,
          ]}
          placeholder="Entrez votre pseudo"
          value={username}
          onChangeText={(text) => setUsername(text)}
          onFocus={() => handleFocus('username')}
          onBlur={() => handleBlur('username')}
        />

        {/* Champ mot de passe */}
        <Text style={formStyles.label}>Mot de passe</Text>
        <TextInput
          style={[
            formStyles.input,
            isPasswordFocused && formStyles.inputFocused,
          ]}
          placeholder="Entrez votre mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleBlur('password')}
          secureTextEntry
        />

        {/* Bouton de connexion */}
        <Button
          title="Se connecter"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default LoginPage;