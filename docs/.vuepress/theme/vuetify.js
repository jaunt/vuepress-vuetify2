import Vue from 'vue'

import Vuetify, {
  VApp,
  VCard,
  VAppBar,
  VNavigationDrawer,
  VList,
  VListGroup,
  VListItem,
  VListItemSubtitle,
  VListItemAvatar,
  VListItemContent,
  VListItemTitle,
  VListItemIcon,
  VContent,
  VFooter,
  VAppBarNavIcon,
  VToolbarTitle,
  VSpacer,
  VIcon,
  VBtn,
  VContainer,
  VRow,
  VCol
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

const opts = {
  icons: {
    iconfont: "mdi" || "md" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
};

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VAppBar,
    VNavigationDrawer,
    VList,
    VListGroup,
    VListItem,
    VListItemSubtitle,
    VListItemAvatar,
    VListItemContent,
    VListItemTitle,
    VListItemIcon,
    VContent,
    VFooter,
    VAppBarNavIcon,
    VToolbarTitle,
    VSpacer,
    VIcon,
    VBtn,
    VContainer,
    VRow,
    VCol
  },
  directives: {
    Ripple,
  },
})

export default new Vuetify(opts);
