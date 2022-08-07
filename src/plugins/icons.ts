import { mapKeys, kebabCase } from 'lodash'
import { filename } from '@/utils/string'
import type { Component } from 'vue'

import {
  mdiAlert,
  mdiAlertOctagon,
  mdiAccount,
  mdiAccountOutline,
  mdiAccountGroup,
  mdiEye,
  mdiEyeOff,
  mdiChevronUp,
  mdiContentSave,
  mdiContentCopy,
  mdiDelete,
  mdiFileDownload,
  mdiFileUpload,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiHelpCircle,
  mdiKeyVariant,
  mdiLogin,
  mdiLogout,
  mdiLockOutline,
  mdiMenuDown,
  mdiPinOutline,
  mdiPinOffOutline,
  mdiPenOff,
  mdiPencil,
  mdiPaletteOutline,
  mdiRefresh,
  mdiTable,
  mdiTableRowPlusAfter,
  mdiTableRowPlusBefore,
  mdiTableOff,
  mdiTriangle,
  mdiTableEdit,
  mdiBackburger,
  mdiMenuOpen,
  mdiAlphabeticalVariant,
  mdiTranslate,
  mdiIdeogramCjkVariant,
  mdiClockOutline,
  mdiBellRemove,
  mdiBellBadgeOutline,
  mdiBellOutline,
  mdiMonitorDashboard,
  mdiViewList,
} from '@mdi/js'

const mdi = {
  mdiAccount,
  mdiAccountOutline,
  mdiAccountGroup,
  mdiEye,
  mdiEyeOff,
  mdiChevronUp,
  mdiContentSave,
  mdiContentCopy,
  mdiDelete,
  mdiFileDownload,
  mdiFileUpload,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiHelpCircle,
  mdiKeyVariant,
  mdiLogin,
  mdiLogout,
  mdiLockOutline,
  mdiMenuDown,
  mdiPinOutline,
  mdiPinOffOutline,
  mdiPenOff,
  mdiPencil,
  mdiPaletteOutline,
  mdiRefresh,
  mdiTable,
  mdiTableRowPlusAfter,
  mdiTableRowPlusBefore,
  mdiTableOff,
  mdiTriangle,
  mdiTableEdit,
  mdiBackburger,
  mdiMenuOpen,
  mdiAlphabeticalVariant,
  mdiTranslate,
  mdiIdeogramCjkVariant,
  mdiClockOutline,
  mdiBellRemove,
  mdiBellBadgeOutline,
  mdiBellOutline,
  mdiMonitorDashboard,
  mdiViewList,
}

const mdIcons = mapKeys(mdi, (v, k) => kebabCase(k))
// fix vuetify#14327(https://github.com/vuetifyjs/vuetify/issues/14327)
mdIcons['warning'] = mdiAlert
mdIcons['error'] = mdiAlertOctagon

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob<Component>('@/assets/icons/*.svg', {
      eager: true,
      import: 'default',
    })
  ).map(([k, v]) => [filename(k), { component: v }])
)

export default {
  ...svgIcons,
  ...mdIcons,
}
