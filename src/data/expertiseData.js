export const capabilityBlocks = [
  {
    category: "Hardware Engineering",
    icon: "Cpu",
    tagline: "Industrial-grade edge computing platforms",
    items: [
      {
        title: "Sensor Node MCUs",
        tech: "ESP32-S3, STM32H7, Nordic nRF52840, RP2040",
        detail: "Ultra-low-power microcontrollers optimized for sensor telemetry, deep sleep modes, and local DSP sensor conditioning."
      },
      {
        title: "Industrial Edge Gateways",
        tech: "Raspberry Pi CM4, NXP i.MX8M Plus, NVIDIA Jetson Orin Nano",
        detail: "Rugged quad-core platforms running industrial Linux (Yocto/Debian), handling multi-protocol bridging and local AI inference."
      },
      {
        title: "Dual-Partition Flash Architecture",
        tech: "A/B Partitioning, NOR/NAND Dual Flash, Failsafe Bootloader",
        detail: "Hardware-enforced storage partitioning ensuring 100% brick-proof remote OTA updates with auto-rollback capability."
      },
      {
        title: "Power Subsystems",
        tech: "Solar MPPT, LiFePO4 Battery Management, Wide Input 9-36V DC",
        detail: "Rugged power regulation built to withstand brownouts, power surges, and harsh field environments."
      }
    ]
  },
  {
    category: "Communication & Protocols",
    icon: "Radio",
    tagline: "Unbroken connectivity across field & cloud",
    items: [
      {
        title: "Industrial Fieldbuses",
        tech: "RS485, Modbus RTU / TCP, CAN Bus (J1939), SDI-12",
        detail: "Seamless interfacing with legacy PLCs, industrial meters, engine ECUs, and environmental sensor arrays."
      },
      {
        title: "Wireless & Telemetry",
        tech: "LoRaWAN (865-868MHz), WiFi 6, 4G LTE Cat-1 / Cat-4, 5G NR",
        detail: "Long-range low-power mesh networks with multi-carrier cellular failover for zero data loss in remote areas."
      },
      {
        title: "Protocol Conversion Engine",
        tech: "Modbus-to-MQTT, CAN-to-HTTPS, WebSockets, OPC-UA",
        detail: "High-performance edge daemon translating legacy binary fieldbus streams into lightweight JSON/Protobuf MQTT messages."
      },
      {
        title: "Network Resiliency",
        tech: "Store-and-Forward SQLite Cache, PPP/QMI Cellular Auto-Healing",
        detail: "Automatic local data queuing during network dropouts, instantly back-filling the cloud upon re-connection."
      }
    ]
  },
  {
    category: "Software & Cloud Platform",
    icon: "Server",
    tagline: "Scalable backend & predictive analytics",
    items: [
      {
        title: "Edge AI Analytics",
        tech: "TensorFlow Lite Micro, ONNX Runtime, FFT Vibration DSP",
        detail: "Deploying quantized ML models directly onto edge gateways for real-time bearing fault detection and acoustic anomaly scoring."
      },
      {
        title: "MQTT Messaging Core",
        tech: "Mosquitto Cluster, EMQX Broker, TLS 1.3 MQTTS",
        detail: "Ultra-low-latency broker setup handling millions of telemetry messages per minute with sub-50ms message routing."
      },
      {
        title: "Backend Microservices",
        tech: "Node.js (TypeScript), Python (FastAPI/Go), Docker Containers",
        detail: "Modular cloud architecture powering device management, alerting engines, and external REST/GraphQL API hooks."
      },
      {
        title: "Databases & Dashboards",
        tech: "PostgreSQL + TimescaleDB, AWS S3 / MinIO, React + Tailwind",
        detail: "High-throughput time-series storage paired with real-time web & mobile portals for asset visualization."
      }
    ]
  }
];

export const otaWorkflowSteps = [
  {
    step: "01",
    title: "Firmware Compilation & Cryptographic Signing",
    desc: "Developer builds new binary release (`gateway_fw_v3.2.bin`). The artifact is signed using private RSA-2048 / ECC keys."
  },
  {
    step: "02",
    title: "Staging on OTA Cloud Server",
    desc: "Signed binary is uploaded to secure S3/MinIO bucket. Target device clusters and update schedules are configured."
  },
  {
    step: "03",
    title: "Encrypted MQTTS Notification",
    desc: "OTA server publishes update payload containing SHA-256 hash and binary URL to target gateways over encrypted MQTTS."
  },
  {
    step: "04",
    title: "Background Chunk Download",
    desc: "Gateway downloads firmware chunks into Secondary Flash Partition B while Partition A continues normal plant operation."
  },
  {
    step: "05",
    title: "Cryptographic Verification & Boot Switch",
    desc: "Gateway verifies signature and SHA-256 hash. Flags Partition B as active and initiates warm reboot."
  },
  {
    step: "06",
    title: "Self-Test & Failsafe Rollback",
    desc: "Post-boot self-diagnostics execute. If network check or sensor driver fails within 60s, hardware bootloader reverts automatically to Partition A."
  }
];

export const securityFeatures = [
  {
    icon: "ShieldAlert",
    title: "Hardware Secure Boot",
    desc: "Root of Trust hardware fuses ensure only digitally signed bootloaders and kernel images can execute."
  },
  {
    icon: "Key",
    title: "Cryptographic Signatures",
    desc: "All firmware payloads and OTA patches require valid RSA-2048 / ECC signature verification prior to flashing."
  },
  {
    icon: "Lock",
    title: "TLS 1.3 / MQTTS Encryption",
    desc: "End-to-end transport layer security encrypts all field-to-cloud data frames against eavesdropping or man-in-the-middle attacks."
  },
  {
    icon: "FileCheck",
    title: "X.509 Device Certificates",
    desc: "Unique hardware-provisioned client certificates per gateway guarantee strict identity verification before cloud broker handshake."
  }
];

export const techStackBadges = {
  Device: ["ESP32", "STM32", "Nordic nRF52", "RP2040", "Raspberry Pi CM4", "NXP i.MX8", "NVIDIA Jetson"],
  Communication: ["RS485", "Modbus RTU", "CAN Bus", "LoRaWAN", "WiFi 6", "4G LTE", "Ethernet", "OPC-UA"],
  Gateway: ["Yocto Linux", "Python", "C++ Embedded", "SQLite", "TensorFlow Lite", "MQTT Client"],
  Cloud: ["EMQX Broker", "Node.js", "FastAPI", "Docker", "Kubernetes", "AWS S3 / MinIO"],
  Storage: ["PostgreSQL", "TimescaleDB", "Redis", "InfluxDB"],
  Dashboard: ["React.js", "Tailwind CSS", "Three.js / R3F", "Framer Motion", "Flutter Mobile"]
};
