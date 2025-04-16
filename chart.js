const personalGraph = document.getElementById("personalGraph");

const xValues = ["stats", "axie", "sensiple", "photon"];
const yValues = [12, 15, 20, 45];
const colors = ["red", "green", "Yellow", "Black"];

new Chart("personalGraph", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Presonal Growth in carrer",
    },
  },
});
