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

        let selectedVehicle = 'truck1';
    let isChatbotOpen = false;

    // Vehicle data
    const vehicleData = {
        truck1: {
            name: 'Truck #001',
            engine: { temp: 87, oil: 45, rpm: 2450, health: 94 },
            transmission: { temp: 68, efficiency: 97 },
            brakes: { padThickness: 6.2, fluidLevel: 'Good', responseTime: 0.8 },
            battery: { voltage: 12.6, charge: 89, alternator: 'Optimal' },
            fuel: { mpg: 24.5, trend: '+2.1%' },
            nextService: 2450,
            failureRisk: 8
        },
        van1: {
            name: 'Van #024',
            engine: { temp: 82, oil: 48, rpm: 2200, health: 91 },
            transmission: { temp: 65, efficiency: 95 },
            brakes: { padThickness: 8.1, fluidLevel: 'Good', responseTime: 0.7 },
            battery: { voltage: 12.4, charge: 85, alternator: 'Good' },
            fuel: { mpg: 28.2, trend: '+1.8%' },
            nextService: 1200,
            failureRisk: 12
        },
        car1: {
            name: 'Car #105',
            engine: { temp: 79, oil: 52, rpm: 1800, health: 96 },
            transmission: { temp: 62, efficiency: 98 },
            brakes: { padThickness: 9.5, fluidLevel: 'Excellent', responseTime: 0.6 },
            battery: { voltage: 12.8, charge: 92, alternator: 'Excellent' },
            fuel: { mpg: 35.1, trend: '+3.2%' },
            nextService: 3100,
            failureRisk: 5
        },
        bus1: {
            name: 'Bus #007',
            engine: { temp: 91, oil: 42, rpm: 2650, health: 89 },
            transmission: { temp: 72, efficiency: 93 },
            brakes: { padThickness: 5.8, fluidLevel: 'Low', responseTime: 0.9 },
            battery: { voltage: 12.2, charge: 78, alternator: 'Fair' },
            fuel: { mpg: 18.7, trend: '-0.5%' },
            nextService: 800,
            failureRisk: 18
        }
    };

    // Chatbot knowledge base
    const knowledgeBase = {
        greetings: [
            "Hello! I'm here to help with your vehicle monitoring system.",
            "Hi there! How can I assist you with your fleet today?",
            "Welcome! Ask me anything about your vehicle dashboard and diagnostics."
        ],
        
        vehicleInfo: {
            status: "I can see the current status of all your vehicles. Would you like me to check a specific vehicle's health?",
            health: "The vehicle health scores are calculated based on engine performance, transmission efficiency, brake condition, battery status, and overall system diagnostics.",
            alerts: "Currently showing active alerts for engine temperature and scheduled maintenance. The system monitors critical thresholds automatically."
        },
        
        features: {
            dashboard: "The dashboard shows real-time metrics for Engine Health, Transmission, Brake System, Battery & Electrical, AI Predictions, and Fuel Efficiency for your selected vehicle.",
            diagnostics: "Run Diagnostics performs comprehensive system checks including battery, tires, engine, and safety systems.",
            predictions: "AI Predictions use machine learning to forecast maintenance needs and potential failures before they occur.",
            maintenance: "The maintenance schedule shows upcoming service appointments and helps you plan vehicle downtime."
        },
        
        systems: {
            engine: "Engine monitoring includes temperature, oil pressure, RPM, and overall health score with real-time alerts.",
            transmission: "Transmission system tracks fluid temperature, pressure levels, and gear efficiency.",
            brakes: "Brake system monitors pad thickness, fluid levels, and response times for safety.",
            battery: "Battery & electrical system shows voltage, charge level, and alternator performance.",
            fuel: "Fuel efficiency tracking shows current MPG, trends, and AI optimization status."
        }
    };

    function selectVehicle(vehicleId) {
        selectedVehicle = vehicleId;
        
        // Update UI
        document.querySelectorAll('.vehicle-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Update dashboard data
        updateDashboard(vehicleId);
    }

    function updateDashboard(vehicleId) {
        const data = vehicleData[vehicleId];
        if (!data) return;

        document.getElementById('engineTemp').innerText = `${data.engine.temp}°C`;
        document.getElementById('oilPressure').innerText = `${data.engine.oil} PSI`;
        document.getElementById('rpm').innerText = data.engine.rpm.toLocaleString();
        document.getElementById('transTemp').innerText = `${data.transmission.temp}°C`;
        document.getElementById('voltage').innerText = `${data.battery.voltage}V`;
        document.getElementById('mpg').innerText = data.fuel.mpg;
    }

    function startDiagnostics() {
        alert('Running comprehensive diagnostics on ' + vehicleData[selectedVehicle].name + '...');
    }

    function generateReport() {
        alert('Generating detailed report for ' + vehicleData[selectedVehicle].name + '...');
    }

    function scheduleService() {
        alert('Opening service scheduler for ' + vehicleData[selectedVehicle].name + '...');
    }

    function toggleAI() {
        const chatbot = document.getElementById('chatbotContainer');
        isChatbotOpen = !isChatbotOpen;
        
        if (isChatbotOpen) {
            chatbot.classList.add('active');
            document.getElementById('chatbotInput').focus();
        } else {
            chatbot.classList.remove('active');
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    function sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Generate bot response
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }

    function addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <span>AI is typing</span>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Greeting responses
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
        }
        
        // Vehicle-specific questions
        if (lowerMessage.includes('vehicle') || lowerMessage.includes('truck') || lowerMessage.includes('van') || lowerMessage.includes('car') || lowerMessage.includes('bus')) {
            const currentVehicle = vehicleData[selectedVehicle];
            if (lowerMessage.includes('status') || lowerMessage.includes('health')) {
                return `${currentVehicle.name} currently has a health score of ${currentVehicle.engine.health}%. Engine temperature is ${currentVehicle.engine.temp}°C, which is within normal range. Next service is due in ${currentVehicle.nextService} miles.`;
            }
            if (lowerMessage.includes('temperature') || lowerMessage.includes('engine')) {
                return `${currentVehicle.name}'s engine temperature is currently ${currentVehicle.engine.temp}°C with ${currentVehicle.engine.oil} PSI oil pressure. The engine health score is ${currentVehicle.engine.health}%.`;
            }
            if (lowerMessage.includes('brake') || lowerMessage.includes('brakes')) {
                return `${currentVehicle.name}'s brake pads are ${currentVehicle.brakes.padThickness}mm thick. Brake fluid level is ${currentVehicle.brakes.fluidLevel} and response time is ${currentVehicle.brakes.responseTime}s.`;
            }
            if (lowerMessage.includes('battery')) {
                return `${currentVehicle.name}'s battery voltage is ${currentVehicle.battery.voltage}V with ${currentVehicle.battery.charge}% charge level. Alternator status is ${currentVehicle.battery.alternator}.`;
            }
            if (lowerMessage.includes('fuel') || lowerMessage.includes('mpg')) {
                return `${currentVehicle.name} is currently achieving ${currentVehicle.fuel.mpg} MPG with a trend of ${currentVehicle.fuel.trend}. AI optimization is active to improve efficiency.`;
            }
        }
        
        // System features
        if (lowerMessage.includes('dashboard')) {
            return knowledgeBase.features.dashboard;
        }
        if (lowerMessage.includes('diagnostic') || lowerMessage.includes('diagnostics')) {
            return knowledgeBase.features.diagnostics;
        }
        if (lowerMessage.includes('prediction') || lowerMessage.includes('predictions') || lowerMessage.includes('ai')) {
            return knowledgeBase.features.predictions;
        }
        if (lowerMessage.includes('maintenance') || lowerMessage.includes('service')) {
            return knowledgeBase.features.maintenance + " The next scheduled services are Oil Change for Vehicle #001 on Dec 15, Brake Pad Replacement on Dec 20, and Tire Rotation for Vehicle #024 on Dec 25.";
        }
        
        // Alert information
        if (lowerMessage.includes('alert') || lowerMessage.includes('alerts') || lowerMessage.includes('warning')) {
            return "There are currently 2 active alerts: Engine temperature rising on Vehicle #001 (95°C approaching critical threshold) and scheduled maintenance due for Vehicle #024 (oil change due in 500 miles).";
        }
        
        // How to use features
        if (lowerMessage.includes('how') && lowerMessage.includes('use')) {
            return "You can use the dashboard by selecting different vehicles with the vehicle buttons, running diagnostics with the 'Run Diagnostics' button, generating reports, and scheduling service. The system provides real-time monitoring and AI-powered insights.";
        }
        
        // Fleet overview
        if (lowerMessage.includes('fleet') || lowerMessage.includes('all vehicles')) {
            return "Your fleet consists of 4 vehicles: Truck #001 (94% health), Van #024 (91% health), Car #105 (96% health), and Bus #007 (89% health). Car #105 is performing best while Bus #007 may need attention soon.";
        }
        
        // Default responses for unrecognized queries
        const defaultResponses = [
            "I can help you with information about your vehicle dashboard, diagnostics, maintenance scheduling, and system alerts. What specific aspect would you like to know about?",
            "I'm designed to assist with vehicle monitoring questions. You can ask me about engine health, brake systems, battery status, fuel efficiency, or maintenance schedules.",
            "I can provide information about your vehicle fleet, system diagnostics, AI predictions, and maintenance planning. What would you like to explore?",
            "As your vehicle assistant, I can help with dashboard metrics, system health, alerts, and maintenance scheduling. How can I assist you today?"
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // Initialize dashboard with default vehicle
    updateDashboard(selectedVehicle);
