<template>
  <div class="main_sidebard">
    <b-sidebar id="sidebar-footer" no-header shadow visible>
      <div class="content_sidebard">
        <div class="content_logo justify-content-center">
          <div class="logo text-center">
            <div class="logo_input">
              <b-icon-card-image scale="2"/>
              <p>Tu Logo</p>
            </div>
          </div>
        </div>
        <div class="content_links">
          <b-link class="btn_link btn-block" :to="{ name:'indicadores' }"><b-icon-geo-alt-fill/> Indicadores</b-link>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<style lang="scss">
.main_sidebard {
  /* Menu izquierdo */
  @media (max-width: 600px) {
    display: none;
  }
  .b-sidebar{
    background-color: #113865 !important;
    width: 202px !important;
  }
  /* Contenido del sidebar */
  .content_sidebard{
    overflow: hidden;
    /* Contenido del Logo */
    .content_logo{
      padding: 36px;
      border-bottom: 1px solid #D2D9E5;
      opacity: 1;
      .logo{
        display: flex;
        align-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background: #FFFFFF;
        .logo_input{
          width: 100%;
          .b-icon{
            color: #448AFC;
          }
          p{
            color: #113865;
            font-weight: 500;
            font-size: 21px;
            margin-bottom: unset;
          }
        }
      }
    }
    /* Contenido del Botones */
    .content_links{
      padding: 9px;
      .btn_link{
        padding: 10px;
        width: 100%;
        border-radius: 10px;
        font-size: 14px;
        &.router-link-exact-active {
          color: #26D98C;
          background-color: #255284;
        }
      }
    }
  }
}
</style>
