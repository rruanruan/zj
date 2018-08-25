import { Line,mixins  } from 'vue-chartjs'

export default ({
    extends:Line,
    props: ['data', 'options','chart-data'],
    mixins: [mixins.reactiveProp],
    mounted () {
        this.renderChart(this.data, this.options)
    }
})
