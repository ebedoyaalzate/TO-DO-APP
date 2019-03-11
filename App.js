import React from 'react';
import { StyleSheet, Text, View,AsyncStorage, Button } from 'react-native';
import Header from './Header'
import Body from './Body'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tareas:[],
      texto:"",
      cargando: true
    }
  }

  componentDidMount(){
    this.recuperarEnTelefono()
  }

  establecerTexto = (value)=>{
    this.setState({texto: value})
  } 
  agregarTarea = ()=>{
    const nuevasTareas =[...this.state.tareas, {texto:this.state.texto, key: Date.now().toString()}]
    this.guardarEnTelefono(nuevasTareas)
    this.setState({ 
      tareas: nuevasTareas,
      texto: ""
    })

  }
  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea =>{
      return tarea.key !== id
    })
    this.guardarEnTelefono(nuevasTareas)
    this.setState({
      tareas: nuevasTareas
    })
  }
  guardarEnTelefono = (tareas) =>{
    AsyncStorage.setItem('@AppCurso:tareas',JSON.stringify(tareas))
      .then((valor) =>{ 
        console.log(valor)
      })
      .catch((err)=>{
        console.log(err)
      }) 
  }
  recuperarEnTelefono = () =>{
    AsyncStorage.getItem('@AppCurso:tareas')
      .then((valor) =>{
        setTimeout(()=>{
          this.setState({
            cargando: false
          })
        },5000)
        if(valor){
          const nuevasTareas = JSON.parse(valor)
          this.setState({
            tareas: nuevasTareas,
          })
        } 
      })
      .catch((err)=>{
        console.log(err) 
        this.setState({
          cargando: false
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
        texto={this.state.texto}
        cambiarTexto={this.establecerTexto} 
        agregar={this.agregarTarea}/>
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} cargando={this.state.cargando}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
