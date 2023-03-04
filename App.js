import React, {useState} from 'react';
{/* Variáveis do react*/}
import { Text,
 View, 
 StyleSheet,
  TextInput,
  TouchableOpacity,
   } from 'react-native';



export default function App() {
  {/*Vetores */}
   {/* useState('') -> significa ver/usar o estado da variavel (se está cheio etc.) */}
   {/*const [variavel principal, variavel que vai preenche-la] */}

  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');

 
  

  function soma(){
    const so_resultado = parseFloat(num1)+ parseFloat(num2);
    alert('O resultado é ' + so_resultado)
  }


  

  function subtracao(){
    const sub_resultado = parseFloat(num1) - parseFloat(num2);
     alert('O resultado é ' +  sub_resultado)
  }



  function multiplicacao(){
    const mult_resultado = parseFloat(num1) * parseFloat(num2);
     alert('O resultado é ' +  mult_resultado)
  }

  

  function divisao(){
    const div_resultado = parseFloat(num1) / parseFloat(num2);
     alert('O resultado é ' +  div_resultado)
  }
  return (
    <View style={styles.container}>
    <Text style ={styles.titulo}> Soma de Valores </Text>
{/*{()=>} -> ero function -- função anônima não precisa chamar o nome da função só se usa uma vez--*/}
    <TextInput
     style={styles.input0}keyboardType='numeric' 
     placeholder="Digite um número."
     //onChange--> quando o texto alterar--={(variavel )=> passe essa variavel para seu segundo vetor (e retorne o valor para ela)}
   onChangeText={(num1)=>setNum1(num1)}

   
     />
    
       
    <TextInput style={styles.input1} keyboardType='numeric'
    placeholder="Digite um número."
    onChangeText={(num2)=>setNum2(num2)}
    />
   
     <TouchableOpacity style={styles.btn0}  onPress={soma} >
     <Text style={styles.titulobtn}>+</Text>
     </TouchableOpacity>
   
  
<TouchableOpacity style={styles.btn1}  onPress={divisao}>
     <Text style={styles.titulobtn}>­÷</Text>
     </TouchableOpacity>
    
 
<TouchableOpacity style={styles.btn2}  onPress={subtracao}>
     <Text style={styles.titulobtn}>-</Text>
     </TouchableOpacity>
   
 

<TouchableOpacity style={styles.btn3}  onPress={multiplicacao}>
     <Text style={styles.titulobtn}>*</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 29,
    
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input0:{
    backgroundColor: '#add8e6',
    borderRadius:15,
    margin: 35,
    padding: 10,
    fontSize: 30
  },
  input1:{
    backgroundColor: '#add8e6' ,
    margin: 35,
    borderRadius: 15,
    fontSize: 30,
     padding: 10,
  },
 btn0:{
display:'inline-block',
 backgroundColor:"#ff0000",
 left:100,
 top:10,
 borderRadius:10,
 textAlign:'center',
height:39,
width:100,

 },
 btn1:{
   display:'inline-block',
 backgroundColor:"#ff0000",
 left:20,
 top:40,
 borderRadius:10,
 textAlign:'center',
height:39,
width:100,

 },
 btn2:{
 display:'inline-block',
 backgroundColor:"#ff0000",
 left:190,
 borderRadius:10,
 textAlign:'center',
height:39,
width:100,
 },
 btn3:{
display:'inline-block',
 backgroundColor:"#ff0000",
 left:100,
 top:40,
 borderRadius:10,
 textAlign:'center',
height:39,
width:100,
 },
 titulobtn:{
   fontSize: 25,
   color: "#fff"

 }
});