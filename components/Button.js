// Importation des styles
import { buttonStyles } from '../../styles/buttonStyles';

// Importation des couleurs
import { colors } from '../../styles/colors';

const Button = ({ title, onPress }) => {
  // Etat pour savoir si le bouton est pressé
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        {
           backgroundColor: isPressed ? colors.buttonLightBlue : colors.buttonGreen,
        }]
      }

      // Change l'opacité lors du clic
      activeOpacity={0.7}
      // Lorsque le bouton est pressé
      onPressIn={() => setIsPressed(true)}
      // Lorsque le bouton est relaché
      onPressOut={() => setIsPressed(false)}
      >

      <Text style={buttonStyles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  );
};

export default Button;