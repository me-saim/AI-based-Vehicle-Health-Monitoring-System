let currentVehicle = 'truck1';
        let isRunning = true;

        function selectVehicle(vehicleId) {
            currentVehicle = vehicleId;
            
            // Update active button
            document.querySelectorAll('.vehicle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Simulate loading new vehicle data
            updateVehicleData(vehicleId);
            showNotification(`Switched to ${vehicleId.toUpperCase()}`, 'info');
        }

        function updateVehicleData(vehicleId) {
            // Simulate different data for different vehicles
            const vehicleData = {
                truck1: { temp: 87, oil: 45, rpm: 2450, voltage: 12.6, mpg: 24.5 },
                van1: { temp: 82, oil: 42, rpm: 2200, voltage: 12.4, mpg: 28.2 },
                car1: { temp: 79, oil: 38, rpm: 1800, voltage: 12.8, mpg: 32.1 },
                bus1: { temp: 91, oil: 48, rpm: 2600, voltage: 12.3, mpg: 18.7 }
            };

            const data = vehicleData[vehicleId];
            document.getElementById('engineTemp').textContent = `${data.temp}°C`;
            document.getElementById('oilPressure').textContent = `${data.oil} PSI`;
            document.getElementById('rpm').textContent = data.rpm.toLocaleString();
            document.getElementById('voltage').textContent = `${data.voltage}V`;
            document.getElementById('mpg').textContent = data.mpg;
        }

        function startDiagnostics() {
            showNotification('Running comprehensive diagnostics...', 'info');
            
            // Simulate diagnostic process
            setTimeout(() => {
                showNotification('Diagnostics complete - 2 issues found', 'warning');
                updateAlerts();
            }, 3000);
        }

        function generateReport() {
            showNotification('Generating detailed health report...', 'info');
            setTimeout(() => {
                showNotification('Report generated successfully', 'success');
            }, 2000);
        }

        function scheduleService() {
            showNotification('Opening service scheduler...', 'info');
            setTimeout(() => {
                showNotification('Service scheduled for next available slot', 'success');
            }, 1500);
        }

        function toggleAI() {
            showNotification('AI Assistant: How can I help with vehicle diagnostics?', 'info');
        }

        function showNotification(message, type) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `alert alert-${type}`;
            notification.style.position = 'fixed';
            notification.style.top = '100px';
            notification.style.right = '20px';
            notification.style.zIndex = '1001';
            notification.style.minWidth = '300px';
            notification.innerHTML = `
                <span>${type === 'info' ? 'ℹ️' : type === 'success' ? '✅' : '⚠️'}</span>
                <div><strong>${message}</strong></div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove after 4 seconds
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 4000);
        }

        function updateAlerts() {
            const alertsPanel = document.getElementById('alertsPanel');
            const newAlert = document.createElement('div');
            newAlert.className = 'alert alert-success';
            newAlert.innerHTML = `
                <span>✅</span>
                <div>
                    <strong>Diagnostics Completed</strong>
                    <p>All systems checked - Performance optimized by AI</p>
                </div>
            `;
            alertsPanel.appendChild(newAlert);
        }

        // Simulate real-time updates
        function simulateRealTimeUpdates() {
            if (!isRunning) return;
            
            // Random small variations in metrics
            const tempVariation = (Math.random() - 0.5) * 2;
            const currentTemp = parseInt(document.getElementById('engineTemp').textContent);
            const newTemp = Math.max(75, Math.min(95, currentTemp + tempVariation));
            document.getElementById('engineTemp').textContent = `${Math.round(newTemp)}°C`;
            
            // Update progress bars with slight animations
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const currentWidth = parseInt(bar.style.width);
                const variation = (Math.random() - 0.5) * 5;
                const newWidth = Math.max(20, Math.min(100, currentWidth + variation));
                bar.style.width = `${newWidth}%`;
            });
            
            setTimeout(simulateRealTimeUpdates, 5000);
        }

        // Start real-time simulation
        simulateRealTimeUpdates();

        // Add smooth scrolling for navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey) {
                switch(e.key) {
                    case 'd':
                        e.preventDefault();
                        startDiagnostics();
                        break;
                    case 'r':
                        e.preventDefault();
                        generateReport();
                        break;
                    case 's':
                        e.preventDefault();
                        scheduleService();
                        break;
                }
            }
        });

        // Welcome message
        setTimeout(() => {
            showNotification('Welcome to AI Vehicle Health Monitor - All systems active', 'success');
        }, 1000);