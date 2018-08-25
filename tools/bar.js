import { HorizontalBar,mixins } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    props: ['data', 'options','chart-data'],
    mixins: [mixins.reactiveProp],
    mounted () {
        this.renderChart(this.data, this.options);

    }
}

