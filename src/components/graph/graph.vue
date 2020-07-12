<!--Use in a comp to import graph (import LineChart from "./components/LineChart.vue";)-->

<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,

  props: {
    chartData: {
      type: Array,
      default: null,
    },

    bgcolor: "",
    label: "",
  },

  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          // Disable the on-canvas tooltip
          enabled: true,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },

  mounted() {
    const dates = this.chartData.map((d) => d.date);
    const data = this.chartData.map((d) => d.data);

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            backgroundColor: this.bgcolor,
            data: data,
          },
        ],
      },
      this.chartOptions
    );
  },
};
</script>
