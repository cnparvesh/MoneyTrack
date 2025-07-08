  const chart1 = document.getElementById('myChart').getContext('2d');
        new Chart(chart1, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Value',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(0, 153, 112, 0.6)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Second Chart
        const chart2 = document.getElementById('myChart2').getContext('2d');
        new Chart(chart2, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Grow',
                    data: [5, 10, 8, 15, 12, 20],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });