import React from 'react';
import { StyleSheet } from 'react-native';

const ButtonComponent: React.FC = () => {  
  return (    
    <div className={classes.container}>      
      Нажми на меня    
    </div>  
  );
};
export default ButtonComponent;
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#272525',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    padding: 6px 24px,
    text-align: center,
    color: #FFFFFF,
    background-color: #4A90E2,
    font-size: 18px,
    font-weight: 600,
    border-radius: 12px;  
    cursor: pointer;
  },
})