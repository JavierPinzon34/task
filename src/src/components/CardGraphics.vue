<template>
  <b-col class="graphic_content mb-4" md="12" lg="6">
    <b-card class="card_g_item">
      <b-row class="title">
        <h3>{{ content.title }}</h3>
        <b-col class="text-right">
          <b-button @click="modalInfo()"><span>Exportar </span><b-icon-download/></b-button>
        </b-col>
      </b-row>
      <div class="card_date">
        <b-row>
          <b-col cols="md-6" class="select">
            <b-form-group
              id="fieldset-1"
              label="Entidad"
              label-for="input-1"
            >
              <!-- Buscador-->
              <model-select
                class="select_content"
                :options="options"
                v-model="item"
                placeholder="Entidad 1"
              />
            </b-form-group>
          </b-col>
          <b-col cols="6" sm="6" md="3" class="from_date">
            <b-form-group
              id="fieldset-1"
              label="Desde"
              label-for="input-1"
            >
              <b-form-datepicker
                id="from_date"
                v-model="fromDate"
                placeholder="01/12/2014"
                class="mb-2"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
            </b-form-group>
          </b-col>
          <b-col cols="6" sm="6" md="3" class="to_date">
            <b-form-group
              id="fieldset-2"
              label="Hasta"
              label-for="input-2"
            >
              <b-form-datepicker
                id="to_date"
                v-model="toDate"
                placeholder="01/12/2014"
                class="mb-2"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <div class="graphic_content" cols="12">
        <vue-apex-charts type="bar" :options="optionsChart" :series="series" />
      </div>
    </b-card>
  </b-col>
</template>
<script>
import EventBus from '../bus'
import { ModelSelect } from 'vue-search-select'
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    ModelSelect,
    VueApexCharts
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fromDate: '',
      toDate: '',
      options: [
        { value: '1', text: 'Entidad 1' },
        { value: '2', text: 'Entidad 2' }
      ],
      item: {
        value: '',
        text: ''
      },
      optionsChart: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  methods: {
    modalInfo () {
      EventBus.$emit('show-modal')
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
      .card-body{
        padding: 20px;
        .title{
          padding: 10px;
          h3{
            margin-bottom: unset;
            height: 100%;
            font-size: 16px;
            color: #636A76;
            font-weight: 500;
          }
          .btn{
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
          label{
            color: #A0B0CB;
            font-size: 12px;
            font-weight: 400;
          }
          .btn{
            color: #D2D9E5;
          }
          .bv-no-focus-ring{
            .b-form-btn-label-control.form-control{
              height: 40px !important;
            }
            label{
              color: #636A76;
              font-size: 14px;
              padding-top: 10px;
              padding-right: 1px;
            }
            .btn{
              padding: 0 2px;
            }
          }
          .from_date{
            padding-right: 10px;
            padding-left: 5px;
            @media (max-width: 768px) {
              padding-left: 15px;
            }
          }
          .to_date{
            padding-right: 10px;
            padding-left: 5px;
          }
          .select{
            padding-right: 5px;
            @media (max-width: 768px) {
              padding-right: 10px;
            }
            .ui.selection.dropdown{
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
