<template>
  <b-col class="card_content" md="6" sm="12" lg="3">
    <b-card :id="`card_${numero}`" class="card_item" @click="changeInfo(item ,numero)">
      <div class="title text-center">
        <h3>{{item.value}}</h3>
        <h5>{{item.title}}</h5>
      </div>
      <div class="item_content">
        <div v-for="(text, index) in item.text" :key="index" class="item_text">
          <div class="title">{{text.title}}</div>
          <div class="value text-right">{{text.value}}</div>
        </div>
      </div>
    </b-card>
  </b-col>
</template>
<script>
import EventBus from '../bus'
export default {
  data () {
    return {
      selected: 0
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    numero: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    selectCard () {
      return this.selected
    }

  },
  mounted () {
    this.$el.addEventListener('click', this.changeInfo(this.item, this.numero))
  },
  methods: {
    /* Click al cambiar de card */
    changeInfo (item, numero) {
      item.key = numero
      this.selected = numero
      EventBus.$emit('change-card', (item))
    }
  }
}
</script>
<style lang="scss">
  .card_content{
    .card_item{
      cursor: pointer;
      background-color: #F8FAFD;
      border-radius: 10px;
      box-shadow: 0px 3px 6px #00000029;
      border: 1px solid #448AFC;
      width: auto;
      .title{
        padding-bottom: 25px;
        h3{
          font-size: 45px;
          color: #448AFC;
          font-weight: 600;
        }
        h5{
          font-size: 16px;
          color: #636A76;
        }
      }
      .item_content{
        .item_text{
          display: flex;
          .title{
            padding-bottom: unset;
            width: 65%;
            color: #636A76;
            font-size: 12px;
          }
          .value{
            padding-bottom: unset;
            width: 35%;
            color: #A0B0CB;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
