import { Doughnut,mixins } from 'vue-chartjs'

export default {
    extends: Doughnut,
    props: ['data', 'options','chart-data'],
    mixins: [mixins.reactiveProp],
    mounted () {
        this.renderChart(this.data, this.options)
    }
}

