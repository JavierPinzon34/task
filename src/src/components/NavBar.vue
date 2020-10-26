<template>
  <b-navbar class="main_navbar" toggleable="lg" type="light">
    <b-navbar-brand href="#">
      <b-icon-list scale="2"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto title">
        <h5>INDICADORES</h5>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right toggle-class="text-decoration-none" no-caret>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon-person scale="2"/>
          </template>
          <b-dropdown-item href="#">Configuración</b-dropdown-item>
          <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style lang="scss">
  /* Contenido del navbar */
  .main_navbar{
    height: 60px;
    border-bottom: 1px solid #D2D9E5;
    padding-left: 29px;
    .b-icon{
      color: #A0B0CB;
    }
    .title{
      color: #636A76;
      h5{
        font-size: 14px;
        font-weight: 600;
        margin-bottom: unset;
      }
    }
  }
</style>
