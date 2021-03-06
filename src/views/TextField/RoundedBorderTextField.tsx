import React from 'react';
import { UIColor } from '../../themes/colors';
import { TextFieldProps } from './TextField';
import { StyleSheet, TextInput } from 'react-native';

export const RoundedBorderTextField: React.FC<TextFieldProps> = ({
  placeholder,
  text,
  onChangeText,
  frame = { width: null, height: null },
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        {
          width: frame.width,
          height: frame.height,
        },
      ]}
      placeholder={placeholder}
      value={text}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: UIColor.systemGray6,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: UIColor.black,
  },
});
