<template>
  <div class="pt-5 mt-4 content_information">
    <h4>{{cardInfo.title}}</h4>
    <b-row class="mt-4">
      <CardGraphics :content="data" v-for="(data, index) in cardInfo.text" :key="index"/>
    </b-row>
    <h4>Otros Indicadores</h4>
    <b-row class="mt-4">
      <CardGraphics :content="data" v-for="(data, index) in cardInfo.text" :key="index"/>
    </b-row>
  </div>
</template>
<script>
import EventBus from '../bus'
import CardGraphics from '../components/CardGraphics'
export default {
  components: {
    CardGraphics
  },
  data () {
    return {
      cardInfo: ''
    }
  },
  created () {
    EventBus.$on('change-card', (item) => {
      this.cardInfo = item
    })
  }
}
</script>
<style lang="scss">
  .content_information{
    h4{
      font-size: 22px;
      color: #636A76;
      padding-left: 15px;
    }
  }
</style>
