import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'prismjs/themes/prism-coy.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Divider from 'primevue/divider'
import Card from 'primevue/card'

export const app = createApp(App)
app.config.globalProperties.$appState = reactive({ inputStyle: 'filled' })

import './assets/sass/layout.scss'

app.use(PrimeVue, { ripple: true })

app.component('InputText', InputText)
app.component('Button', Button)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('Divider', Divider)
app.component('Card', Card)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)

app.mount('#app')
