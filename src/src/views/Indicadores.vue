<template>
  <div>
    <NavBar />
    <div class="p-4">
      <SelectProject />
      <!--  Mostrar las Cards -->
      <b-row>
        <Card class="mt-4" v-for="(item, index) in cards" :item="item" :key="index" :numero="index"/>
      </b-row>
      <ContentInformation />
      <Modal />
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import SelectProject from '../components/SelectProject'
import Card from '../components/Card'
import ContentInformation from '../components/ContentInformation'
import Modal from '../components/Modal'
export default {
  components: {
    NavBar,
    SelectProject,
    Card,
    ContentInformation,
    Modal
  },
  data () {
    return {
      cards: [
        { value: '70 %', title: 'Equipo de trabajo', text: [{ title: 'Personal requerido', value: 300 }, { title: 'Personal contratado', value: 210 }, { title: 'Por contratar', value: 90 }] },
        { value: '70 %', title: 'Técnico operativo', text: [{ title: 'No. tiquetes', value: 300 }, { title: 'Aprobaciones', value: 210 }, { title: 'No aprobadas', value: 90 }] },
        { value: '70 %', title: 'Financiero', text: [{ title: 'Presupuesto', value: 300 }, { title: 'Ejecución', value: 210 }, { title: 'Pdte por usar', value: 90 }] },
        { value: '80 %', title: 'Jurídico', text: [{ title: 'PQR Recibidos', value: 300 }, { title: 'Resueltos', value: 210 }, { title: 'Por atender', value: 90 }] }
      ]
    }
  }
}
</script>
