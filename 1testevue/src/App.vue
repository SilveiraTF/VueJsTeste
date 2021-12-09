<template>
  <div id="app">
    <p>{{ nome }} {{ idade }} {{ valor }}</p>

    <p><input type="text" :disabled="controlador" v-model="nome" placeholder="Nome">
    <input type="text" :disabled="controlador" v-model="idade" placeholder="Idade"></p>
    <button v-on:click="contator()">+</button>
    <button @click="sub()">-</button>
    <button @click="ativador()">Ativador</button>
  </div>
</template>

<script>
  export default{
  data(){
    return{
      nome: '',
      idade: '',
      valor:0,
      controlador: true,
    }
  },
    methods:{
    contator(){
      this.valor++
    },
    sub(){
      this.valor--
    },
    ativador(){
      this.controlador = !this.controlador
    }
  }
}
</script>

<style>

  input{
    background-color: dodgerblue;
    text-align: center;
    border-radius: 10px;
  }

</style>
