export const openPositions = [
  {
    id: "emb-eng-01",
    title: "Embedded Systems Engineer",
    department: "Hardware & Firmware",
    location: "Hyderabad, India (On-site)",
    type: "Full-Time",
    experience: "3 - 5 Years",
    summary: "Lead design of RTOS firmware, dual-partition bootloaders, and low-power MCU sensor telemetry for our next-gen universal gateway.",
    responsibilities: [
      "Develop C/C++ firmware on ESP32, STM32, and Nordic nRF52 microcontrollers.",
      "Implement hardware drivers for RS485 Modbus, CAN Bus, SPI, I2C, and LoRa modules.",
      "Architect failsafe A/B partition OTA bootloader routines with hardware watchdog backup.",
      "Conduct EMI/EMC compliance testing and hardware validation."
    ],
    requirements: [
      "B.Tech/M.Tech in Electrical, Electronics, or Embedded Systems.",
      "Proficiency in C/C++, FreeRTOS, and Git version control.",
      "Hands-on experience with logic analyzers, oscilloscopes, and circuit schematics."
    ]
  },
  {
    id: "iot-fw-02",
    title: "IoT Firmware Developer (Linux Edge)",
    department: "Edge Computing",
    location: "Hyderabad, India (Hybrid)",
    type: "Full-Time",
    experience: "2 - 4 Years",
    summary: "Build high-throughput edge daemons, protocol conversion engines, and local AI inferencing pipelines on Yocto Linux gateways.",
    responsibilities: [
      "Develop C++/Python microservices for Yocto Linux / Raspberry Pi CM4 platforms.",
      "Implement Modbus-to-MQTT protocol translation, SQLite store-and-forward caching, and PPP network handlers.",
      "Integrate TensorFlow Lite / ONNX Runtime for local vibration FFT analytics.",
      "Optimize power management and system telemetry logging."
    ],
    requirements: [
      "Experience with Embedded Linux, C++, Python, and Systemd daemons.",
      "Strong understanding of TCP/IP, MQTT, TLS 1.3 sockets, and serial communication.",
      "Familiarity with Docker containerization on ARM architectures."
    ]
  },
  {
    id: "fullstack-dev-03",
    title: "Full Stack Developer (React & Node.js)",
    department: "Cloud & Software",
    location: "Hyderabad / Remote (India)",
    type: "Full-Time",
    experience: "2 - 5 Years",
    summary: "Architect real-time IIoT web dashboards, telemetry visualization wallboards, and high-frequency time-series API services.",
    responsibilities: [
      "Develop responsive UI portals using React, Vite, Tailwind CSS, and Framer Motion.",
      "Build high-performance REST and WebSockets microservices in Node.js / TypeScript.",
      "Optimize TimescaleDB / PostgreSQL time-series queries for sub-second chart rendering.",
      "Integrate role-based access control (RBAC) and device management workflows."
    ],
    requirements: [
      "Solid experience in modern React.js, Tailwind CSS, Node.js, and SQL databases.",
      "Experience with charting libraries (Recharts, Chart.js, D3) and WebSockets.",
      "Familiarity with AWS, Docker, and CI/CD pipelines."
    ]
  },
  {
    id: "mobile-dev-04",
    title: "Mobile App Developer (Flutter / React Native)",
    department: "Software Platforms",
    location: "Hyderabad, India (Hybrid)",
    type: "Full-Time",
    experience: "2 - 4 Years",
    summary: "Create intuitive mobile monitoring applications for field engineers to perform Bluetooth pairing, gateway diagnostics, and alarm notifications.",
    responsibilities: [
      "Build cross-platform iOS & Android mobile apps using Flutter or React Native.",
      "Implement BLE (Bluetooth Low Energy) provisioning flows for edge gateway configuration.",
      "Integrate push notifications for instant critical industrial alerts.",
      "Ensure offline telemetry caching and background sync."
    ],
    requirements: [
      "Proven track record with Flutter (Dart) or React Native apps published on App Store / Play Store.",
      "Hands-on experience with Mobile BLE APIs and background services.",
      "Understanding of REST APIs and OAuth2 authentication."
    ]
  },
  {
    id: "aiml-eng-05",
    title: "AI / ML Edge Engineer",
    department: "Edge Intelligence",
    location: "Hyderabad, India (Hybrid)",
    type: "Full-Time",
    experience: "3 - 6 Years",
    summary: "Train and deploy lightweight neural network models for vibration fault diagnosis, thermal anomaly detection, and predictive RUL.",
    responsibilities: [
      "Train ML models (CNNs, Autoencoders, XGBoost) on time-series vibration and acoustic sensor data.",
      "Quantize and optimize models for edge deployment using TensorFlow Lite Micro & TensorRT.",
      "Collaborate with domain experts to build feature engineering pipelines (FFT, envelope analysis).",
      "Benchmark edge inference latency on ARM Cortex-M and Cortex-A processors."
    ],
    requirements: [
      "Master's or Bachelor's in Data Science, AI/ML, Signal Processing, or Computer Science.",
      "Deep expertise in Python, PyTorch / TensorFlow, NumPy, and Scipy Signal.",
      "Experience deploying ML models onto embedded edge devices."
    ]
  }
];

export const internshipOpportunities = [
  {
    title: "Embedded Systems & Hardware Intern",
    duration: "3 - 6 Months",
    stipend: "Competitive + PPO Opportunity",
    desc: "Gain hands-on experience designing PCB layouts, writing C drivers for sensor nodes, and testing LoRa telemetry."
  },
  {
    title: "IoT & Cloud Software Intern",
    duration: "3 - 6 Months",
    stipend: "Competitive + PPO Opportunity",
    desc: "Work alongside senior cloud engineers building MQTT pipelines, React frontends, and automated test harnesses."
  },
  {
    title: "Signal Processing & AI Intern",
    duration: "3 - 6 Months",
    stipend: "Competitive + PPO Opportunity",
    desc: "Analyze raw vibration dataset files, run spectral FFT decompositions, and assist in training anomaly detection models."
  }
];
