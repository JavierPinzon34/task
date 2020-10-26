<template>
  <div class="select_main">
    <h5>Proyecto</h5>
    <!-- Buscador-->
    <model-select
      class="select_content"
      :options="options"
      v-model="item"
      placeholder="Consorcio interpares 2019 - Objeto del contrato (250)"
    />
  </div>
</template>
<script>
import { ModelSelect } from 'vue-search-select'
export default {
  components: {
    ModelSelect
  },
  data () {
    return {
      options: [
        { value: '1', text: 'aa' + ' - ' + '1' },
        { value: '2', text: 'ab' + ' - ' + '2' },
        { value: '3', text: 'bc' + ' - ' + '3' },
        { value: '4', text: 'cd' + ' - ' + '4' },
        { value: '5', text: 'de' + ' - ' + '5' }
      ],
      item: {
        value: '',
        text: ''
      }
    }
  },
  methods: {
    reset () {
      this.item = {}
    },
    selectFromParentComponent1 () {
      // select option from parent component
      this.item = this.options[0]
    },
    reset2 () {
      this.item2 = ''
    },
    selectFromParentComponent2 () {
      // select option from parent component
      this.item2 = this.options2[0].value
    }
  }
}
</script>
<style lang="scss">
  .select_main{
    h5{
      font-size: 12px;
      color: #A0B0CB;
      font-weight: 300;
    }
    /* Componente del SelectModel */
    .select_content{
      border-color: #D2D9E5;
      height: 40px;
    }
  }
</style>
