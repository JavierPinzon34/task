<template>
  <b-col class="graphic_content" md="12" lg="6">
    <b-card class="card_g_item">
      <b-row class="title">
        <h3>{{ content.title }}</h3>
        <b-col class="text-right">
          <b-button><span>Exportar </span><b-icon-download/></b-button>
        </b-col>
      </b-row>
      <div class="card_date">
        <b-row>
          <b-col cols="3">
            <b-form-group
              id="fieldset-1"
              label="Desde"
              label-for="input-1"
            >
              <b-form-datepicker
                id="from_date"
                v-model="fromDate"
                placeholder="MM-DD-YYYY"
                class="mb-2"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              cols="3"
              id="fieldset-2"
              label="Hasta"
              label-for="input-2"
            >
              <b-form-datepicker
                id="to_date"
                v-model="toDate"
                placeholder="MM-DD-YYYY"
                class="mb-2"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <div class="graphic_content">

      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fromDate: '',
      toDate: ''
    }
  }
}
</script>
<style lang="scss">
  .graphic_content{
    .card_g_item{
      border: 1px solid #D2D9E5;
      border-radius: 5px;
      opacity: 1;
      .title{
        padding: 10px;
        h3{
          margin-bottom: unset;
          height: 100%;
          padding: 10px;
          font-size: 16px;
          color: #636A76;
          font-weight: 500;
        }
        .btn{
          //padding: 10px;
          background: #EDF0F7 0% 0% no-repeat padding-box;
          border-radius: 20px;
          opacity: 1;
          border: unset;
          font-weight: 500;
        }
        span{
          font-size: 14px;
          color: #636A76;
        }
        .b-icon{
          margin-left: 5px;
          color: #448AFC;
        }
      }
      .card_date{
        margin-left: 25px;
        label{
          color: #A0B0CB;
          font-size: 12px;
          font-weight: 400;
        }
        .btn{
          color: #D2D9E5;
        }
        .bv-no-focus-ring{
          label{
            color: #636A76;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
