<template>
  <div class="home">
    <sidebar-menu :menu="menu">
      <span slot="toggle-icon"
        ><i class="pi pi-bars" style="font-size: 1.3rem"></i
      ></span>
    </sidebar-menu>
    <div>
      <ButtonPV
        @click="logout"
        icon="pi pi-sign-out"
        label="Logout"
        id="botaoSair"
        class="p-button-outlined p-button-danger"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSideBar",
  components: {},
  props: {
    // Sidebar menu (required)
    // Sidebar Collapse state
    collapsed: {
      type: Boolean,
      default: false,
    },

    // Sidebar width (expanded)
    width: {
      type: String,
      default: "350px",
    },

    // Sidebar width (collapsed)
    widthCollapsed: {
      type: String,
      default: "50px",
    },

    // Keep only one child opened at a time (first level only)
    showOneChild: {
      type: Boolean,
      default: false,
    },

    // Keep all child open
    showChild: {
      type: Boolean,
      default: false,
    },

    // Sidebar right to left
    rtl: {
      type: Boolean,
      default: false,
    },

    // Make sidebar relative to the parent (by default the sidebar is relative to the viewport)
    relative: {
      type: Boolean,
      default: false,
    },

    // Hide toggle collapse btn
    hideToggle: {
      type: Boolean,
      default: false,
    },

    // Sidebar theme (available themes: 'white-theme')
    theme: {
      type: String,
      default: "",
    },

    // Disable hover on collapse mode
    disableHover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Maxipas",
          hiddenOnCollapse: true,
        },
        {
          title: "Home",
          icon: "pi pi-home",
          href: "/",
        },
        {
          title: "Solicitar Exame",
          icon: {
            class: "pi pi-calendar-plus",
          },
          href: "/solicitar",
        },
        {
          href: "/agenda",
          title: "Agenda",
          icon: "pi pi-calendar",
        },
        {
          title: "Solicitações",
          icon: "pi pi-list",
          href: "/solicitacoes",
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.v-sidebar-menu {
  align-items: center;
  text-align: center;
  width: 200px;
}

#botaoSair {
  float: right;
  cursor: pointer;
  margin-top: -60px;
  margin-right: 20px;
}
</style>