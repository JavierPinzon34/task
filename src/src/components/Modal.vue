<template>
  <b-modal id="modal_data" hide-footer size="lg" >
    <div class="modal_data">
      <h4>Nombre del proyecto</h4>
      <h5>Reporte personal requerido</h5>
      <b-row class="mt-4">
        <b-col cols="md-6 mb-2">
          <div class="info_items">
            <span>Entidad</span>
            <p>Nombre del vigilado 1</p>
          </div>
        </b-col>
        <b-col cols="6" sm="6" md="3">
          <div class="info_items">
            <span>Desde</span>
            <p>01/12/2014</p>
          </div>
        </b-col>
        <b-col cols="6" sm="6" md="3">
          <div class="info_items">
            <span>Hasta</span>
            <p>01/12/2014</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="buttons mt-4 mb-4">
        <b-col sm="6" md="4" class="btn_1">
          <b-button  class="mb-2" @click="modalInfo()"><span>Exportar PNG, JPG </span><b-icon-download/></b-button>
        </b-col>
        <b-col sm="6" md="4">
          <b-button class="mb-2" @click="modalInfo()"><span>Exportar XLS </span><b-icon-download/></b-button>
        </b-col>
        <b-col sm="6" md="4">
          <b-button class="mb-2" @click="modalInfo()"><span>Exportar PDF </span><b-icon-download/></b-button>
        </b-col>
      </b-row>
      <div class="item_graphic mb-4">
        <vue-apex-charts type="bar" :options="optionsChart" :series="series" />
      </div>
      <div class="table_info">
        <h5>Datos</h5>
        <b-table hover :items="items" class="mt-4 text-center"></b-table>
      </div>
      <div class="analisis">
        <h5>Análisis</h5>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Lorem ipsum dolar"
          rows="3"
          max-rows="3"
        ></b-form-textarea>
      </div>
      <b-row class="mt-4 footer_modal">
        <b-col cols="8" >
          <span class="title_footer">Generado por</span><span class="text_footer"> Lorem ipsum dolar</span>
        </b-col>
        <b-col  cols="4" class="text-right">
          <span class="title_footer">Fecha</span><span class="text_footer"> 10/21/10</span>
        </b-col>
      </b-row>
    </div>
    <div class="button_save mt-4 mx-auto col-md-3 col-6">
      <b-button variant="primary" pill class="btn-block">Guardar</b-button>
    </div>
  </b-modal>
</template>
<script>
import EventBus from '../bus'
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    VueApexCharts
  },
  data () {
    return {
      modal_data: '',
      text: '',
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
      }],
      items: [
        { 'Tipo de visitador': 'Dickerson', 'Personal requerido': 85, 'Personal contratado': 56 },
        { 'Tipo de visitador': 'Larsen', 'Personal requerido': 84, 'Personal contratado': 45 },
        { 'Tipo de visitador': 'Geneva', 'Personal requerido': 85, 'Personal contratado': 12 },
        { 'Tipo de visitador': 'Jami', 'Personal requerido': 85, 'Personal contratado': 45 }
      ]
    }
  },
  created () {
    EventBus.$on('show-modal', () => {
      this.$bvModal.show('modal_data')
    })
  },
  methods: {
    hideModal () {
      this.$bvModal.hide('modal_data')
    }
  }
}
</script>
<style lang="scss">
  /* clase reservada de la modal */
  .modal-content {
    background-color: #FBFBFB;
    box-shadow: 0px 3px 6px #8B818129;
    border-radius: 10px;
    h4{
      color: #636A76;
      font-size: 22px;
    }
    h5{
      color: #636A76;
      font-size: 16px;
    }
    .modal-header{
      border: unset;
    }
    .modal-body{
      padding: 0 150px 37px 95px;
      @media (max-width: 768px) {
        padding: 15px;
      }
    }
    .info_items{
      background-color: #fff;
      padding: 9px 10px 5px 20px;
      span{
        color: #A0B0CB;
        font-size: 12px;
      }
      p{
        color: #636A76;
        font-size: 14px;
        margin-bottom: unset;
        font-weight: 400;
      }
    }
    .buttons{
      .btn{
        background-color: #EDF0F7;
        border: unset;
        border-radius: 20px;
        width: 100%;
        padding: 5px 5px;
        span{
          color: #636A76;
          font-size: 14px;
          font-weight: 500;
        }
        .b-icon{
          color: #448AFC;
        }
      }
    }
    .item_graphic{
      border: 1px solid #D2D9E5;
      border-radius: 5px;
      padding: 15px;
    }
    .table_info{
      border-bottom: 1px solid #D2D9E5;
      color: #636A76;
      font-size: 14px;
      h5{
        color: #636A76;
        font-size: 16px;
      }
      .table{
        background-color: #fff;
        margin-bottom: unset;
      }
      .table thead th{
        background-color: #F8FAFD;
        color: #A0B0CB;
        font-weight: 400;
        font-size: 12px;
        border-bottom: 1px solid #D2D9E5;
      }
      .table td, .table th{
        border-top: unset;
      }
      .table tr {
        &:hover{
          background-color: #EDF0F7;
        }
      }
    }
    .analisis{
      margin-top: 37px;
      h5{
        color: #636A76;
        font-size: 16px;
      }
      textarea{
        color: #636A76;
        font-size: 14px;
      }
    }
    .footer_modal{
      .text_footer{
        color: #636A76;
        font-size: 14px;
      }
      .title_footer{
        color: #A0B0CB;
        font-size: 12px;
      }
    }
    .button_save{
      .btn{
        background-color: #448AFC;
      }
    }
  }
</style>
