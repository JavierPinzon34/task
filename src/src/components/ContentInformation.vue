<template>
  <div class="pt-5 content_information">
    <h4>{{cardInfo.title}}</h4>

    <CardGraphics :content="cardInfo"/>
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
    }
  }
</style>
