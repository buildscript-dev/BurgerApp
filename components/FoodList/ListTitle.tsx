import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type FoodParam = {
  name: string;
  color?: string;
//   handlePress: () => void; // ✅ This should be a function, not a string
};

const FoodTab: React.FC<FoodParam> = ({ name, 
    // handlePress 
}) => {
  return (
    <TouchableOpacity 
    // onPress={handlePress}
    >
      <Text style={{ color:? color : 'black', fontSize: 13, textDecorationLine: 'underline', margin: 10 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodTab;
