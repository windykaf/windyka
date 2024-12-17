// Kalkulator Estimasi Energi
function calculateEnergy() {
    const oilAmount = document.getElementById('oilInput').value;
    if (oilAmount > 0) {
        const energy = oilAmount * 5.8; // 1 barel minyak menghasilkan sekitar 5.8 MWh energi
        document.getElementById('energyOutput').innerText = `Estimasi energi yang dihasilkan: ${energy} MWh`;
    } else {
        document.getElementById('energyOutput').innerText = 'Masukkan jumlah minyak yang valid.';
    }
}

// Grafik Produksi Minyak Global dengan Warna Cerah
const ctx = document.getElementById('oilChart').getContext('2d');
const oilChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['USA', 'Saudi Arabia', 'Russia', 'China', 'Canada'],
        datasets: [{
            label: 'Produksi Minyak (Juta Barel/Hari)',
            data: [11.5, 10.2, 9.7, 4.9, 4.6],
            backgroundColor: [
                '#FF5733', // USA
                '#FFC300', // Saudi Arabia
                '#DAF7A6', // Russia
                '#33FF57', // China
                '#33CFFF'  // Canada
            ],
            borderColor: [
                '#C70039', // USA
                '#FF5733', // Saudi Arabia
                '#FFC300', // Russia
                '#33FF57', // China
                '#33CFFF'  // Canada
            ],
            borderWidth: 2,
            hoverBackgroundColor: [
                '#FF6F61', // USA hover
                '#FFB84D', // Saudi Arabia hover
                '#B5E7A0', // Russia hover
                '#66FF66', // China hover
                '#66C2FF'  // Canada hover
            ],
            hoverBorderColor: [
                '#FF2A68', // USA hover border
                '#FF8C00', // Saudi Arabia hover border
                '#B5E7A0', // Russia hover border
                '#33CC33', // China hover border
                '#3399FF'  // Canada hover border
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#fff',
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    color: '#e0e0e0',
                    borderColor: '#e0e0e0'
                }
            },
            x: {
                ticks: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                },
                grid: {
                    color: '#e0e0e0',
                    borderColor: '#e0e0e0'
                }
            }
        }
    }
});
