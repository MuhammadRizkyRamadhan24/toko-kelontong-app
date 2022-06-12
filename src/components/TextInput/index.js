import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from 'src/utils/colors';
import {Text} from 'components/index';
import Styles from './style';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {NavigationHelper} from 'helpers/';
// import screenName from 'config/screenName';

const CustomTextInput = ({
  placeholder,
  autoFocus,
  isNumber,
  isPassword,
  editable = true,
  onChangeText,
  type,
  style,
  icon,
  value,
  label,
  onPress,
  styleContainer,
  onSubmitEditing,
  isScan,
  itemName,
  ...props
}) => {
  const [state, setState] = useState({
    hide: true,
  });

  return (
    <View style={[Styles.container, styleContainer]}>
      <Text style={Styles.textLabel}>{label}</Text>
      <View style={Styles.wrapInput}>
        <TextInput
          value={value}
          editable={editable}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          style={[
            editable ? Styles.input(icon) : Styles.inputDisable(icon),
            Styles[type || 'default'],
            style,
          ]}
          keyboardType={isNumber ? 'phone-pad' : 'default'}
          secureTextEntry={isPassword ? state.hide : false}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setState({...state, hide: !state.hide})}
            style={Styles.hideButton}>
            <Feather
              color={Colors.grey}
              name={state.hide ? 'eye-off' : 'eye'}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const Search = ({
  placeholder,
  onChangeText,
  value,
  onPress,
  onSubmitEditing,
  ...props
}) => {
  return (
    <View style={Styles.containerSearch}>
      <Feather name="search" size={25} color={Colors.grey} />
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={Styles.textInputSearch}
        {...props}
      />
    </View>
  );
};

export default {CustomTextInput, Search};
