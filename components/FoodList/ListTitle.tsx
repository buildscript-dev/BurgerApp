import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type FoodParam = {
  name: string;
  color?: string;
  handlePress: () => void
};

const FoodTab: React.FC<FoodParam> = ({ name, color, handlePress 
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: color || 'black', fontSize: 13, textDecorationLine: 'none', margin: 10 , fontWeight: 'bold'}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodTab;
