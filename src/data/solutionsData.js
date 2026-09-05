export const solutionsList = [
  {
    id: "smart-msme-retrofit",
    title: "Smart MSME Factory Retrofit & OEE",
    category: "Smart Manufacturing",
    shortDesc: "Non-intrusive Industry 4.0 retrofit for existing CNCs, pumps & compressors. Calculates real-time OEE (Availability × Performance × Quality).",
    icon: "Factory",
    badge: "MSME Retrofit",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    techChips: ["OEE Calculator", "Non-Intrusive Retrofit", "₹2-10L Modular Cost"],
    metrics: { primary: "OEE = A × P × Q", label: "Real-Time Factory OEE" },
    sensorsUsed: ["Current CT Clamps", "High-Speed Vibration ADC", "Machine Status Digital Inputs", "Energy Meters"],
    edgeProcessing: "Calculates OEE = Availability × Performance × Quality, computes idle time vs active duty cycles, detects motor overload.",
    cloudOutputs: "Plant OEE wallboard, downtime breakdown reports, automated WhatsApp/SMS operator alert triggers, SAP/ERP ticketing.",
    keyFeatures: [
      "Modular ₹2–10 Lakh retrofit — zero machine replacement needed",
      "Calculates OEE = Availability × Performance × Quality automatically",
      "Monitors machine idle time, cycle count, energy consumption & vibration",
      "Scales from 10 CNC machines in an MSME to thousands of sensors in steel/auto plants"
    ]
  },
  {
    id: "railway-monitoring",
    title: "Railway Track & Wheel Monitoring",
    category: "Railway Infrastructure",
    shortDesc: "Continuous vibration spectrum analysis, wheel-flat defect detection, and automated track integrity scoring.",
    icon: "Train",
    badge: "Mission Critical",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80",
    techChips: ["Piezo Vibration", "LoRaWAN + 4G", "Edge FFT Spectrograph"],
    metrics: { primary: "160 km/h", label: "Max Speed Detection" },
    sensorsUsed: ["Piezoelectric Accelerometers", "High-Frequency Acoustic Emission Sensors", "Laser Rail Profile Scanners", "Ambient Temp Probes"],
    edgeProcessing: "Edge FFT spectrograph filtering (RMS, Peak, FFT spectrum), real-time transient shock spike flagging, local wheel defect scoring.",
    cloudOutputs: "Zonal track health heatmaps, real-time derailment risk alerts, maintenance dispatch workorders via SMS/API.",
    keyFeatures: [
      "Wheel-flat impact detection up to 160 km/h train speeds",
      "Wireless LoRa trackside node telemetry to central gateway",
      "Solar MPPT + LiFePO4 battery backup for off-grid operation",
      "Automated track geometry degradation trend reports"
    ]
  },
  {
    id: "ohe-spark-monitoring",
    title: "OHE Pantograph Spark Monitoring",
    category: "Railway Infrastructure",
    shortDesc: "High-speed optical spark detection, catenary wire wear analysis, and pantograph contact arc monitoring.",
    icon: "Zap",
    badge: "High Speed",
    image: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=1000&q=80",
    techChips: ["UV Optical Arc", "120fps Thermal", "NavIC GPS Telemetry"],
    metrics: { primary: "< 1ms", label: "Arc Pulse Capture" },
    sensorsUsed: ["UV-Optical Spark Sensors", "High-Speed Thermal Cameras", "Hall Effect Current Sensors", "GPS Speed Telemetry"],
    edgeProcessing: "Sub-millisecond optical pulse counter, thermal hotspot detection at 120fps, localized GPS timestamp tagging.",
    cloudOutputs: "Overhead Equipment (OHE) spark severity GIS map, catenary wire friction reports, locomotive maintenance logs.",
    keyFeatures: [
      "Sub-millisecond UV arc duration measurement",
      "Synchronized GPS location logging for pinpoint wire defect location",
      "IP67 weatherproof housing built for loco roof mounting",
      "Direct integration with Railway SCADA and asset management"
    ]
  },
  {
    id: "bridge-monitoring",
    title: "Bridge Structural Health Monitoring",
    category: "Civil Infrastructure",
    shortDesc: "Real-time water level, tilt, vibration, and expansion joint monitoring for flood risk and structural safety.",
    icon: "GitBranch",
    badge: "Public Safety",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1000&q=80",
    techChips: ["80GHz Radar Level", "Sub-arcsec Tilt", "4G + Satellite"],
    metrics: { primary: "±1 mm", label: "Level Precision" },
    sensorsUsed: ["Ultrasonic & Radar Water Level Transmitters", "Tri-axial MEMS Accelerometers", "Sub-arcsecond Tilt Meters", "Anemometer Wind Speed"],
    edgeProcessing: "Modal frequency extraction, river scour depth estimation, threshold exceedance edge alarm triggers.",
    cloudOutputs: "Bridge Health Index (BHI) dashboard, automated high-water level emergency siren triggers, structural strain trends.",
    keyFeatures: [
      "Sub-millimeter pier tilt and structural settlement detection",
      "Dual 4G + Satellite fallback for zero outage during storm events",
      "Automated hydrodynamic flood surge risk forecasting",
      "Customizable warning levels for civic transport authorities"
    ]
  },
  {
    id: "machine-health",
    title: "Machine Health & Predictive Maintenance",
    category: "Manufacturing",
    shortDesc: "IMU vibration, current signatures, bearing fault frequency identification, and remaining useful life (RUL) forecasting.",
    icon: "Activity",
    badge: "Industry 4.0",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    techChips: ["10kHz Vibration", "Edge TFLite", "RUL Model"],
    metrics: { primary: "75%", label: "Downtime Cut" },
    sensorsUsed: ["Tri-axial Accelerometers (10kHz bandwidth)", "Infrared Surface Temp Probes", "3-Phase CT Current Clamps", "Acoustic Emissions"],
    edgeProcessing: "FFT spectrograph breakdown (BPFO, BPFI, BSF bearing frequencies), motor current signature analysis (MCSA).",
    cloudOutputs: "Mean Time To Failure (MTTF) forecast, plant-wide asset health wallboards, SAP/ERP maintenance ticket generation.",
    keyFeatures: [
      "Pre-trained Edge TFLite model execution (`bearing_model_v3.tflite`)",
      "Detects lubrication degradation, unbalance, misalignment, and gear wear",
      "Reduces unplanned factory downtime by up to 75%",
      "Non-intrusive magnetic sensor installation"
    ]
  },
  {
    id: "water-monitoring",
    title: "Smart Water Level & Flow Stations",
    category: "Water & Utilities",
    shortDesc: "Remote telemetry for reservoir levels, canal discharge rates, flood warnings, and urban drainage networks.",
    icon: "Droplets",
    badge: "Utilities",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    techChips: ["35m Radar Range", "±1mm Accuracy", "Solar MPPT"],
    metrics: { primary: "35m", label: "Radar Range" },
    sensorsUsed: ["Radar Level Transmitters (80GHz)", "Doppler Ultrasonic Flow Meters", "Water Quality Probes (pH, Turbidity, ORP)", "Solar Battery Voltage Monitors"],
    edgeProcessing: "Flow velocity polynomial integration, discharge volume totalizer, telemetry payload compression.",
    cloudOutputs: "Water resource allocation analytics, flood warning broadcasts, SCADA telemetry feeds.",
    keyFeatures: [
      "Non-contact radar measuring up to 35 meters with ±1mm accuracy",
      "Ultra-low power sleep states for multi-year unattended operation",
      "Integrated solar panel controller with remote battery telemetry",
      "Govt Hydro-telemetry protocol compliant"
    ]
  }
];

export const applicationsComparison = [
  {
    solution: "Smart MSME Retrofit",
    sensors: "Current CT, High-Speed Vibration ADC, Digital IO",
    edge: "OEE = Availability × Performance × Quality",
    connectivity: "Ethernet / WiFi / 4G Gateway",
    output: "Plant OEE Wallboard, WhatsApp Alerts"
  },
  {
    solution: "Railway Track & Wheel",
    sensors: "Piezoelectric Accelerometer, Acoustic",
    edge: "Vibration FFT, Transient Shock",
    connectivity: "LoRa trackside → 4G Gateway",
    output: "Track health score, Derailment risk"
  },
  {
    solution: "OHE Pantograph Spark",
    sensors: "UV Optical, High-speed Thermal Camera",
    edge: "Arc count, 120fps Hotspot capture",
    connectivity: "Locomotive 4G LTE + GPS",
    output: "OHE Spark GIS map, Wire wear"
  },
  {
    solution: "Bridge Structural Health",
    sensors: "Radar Level, MEMS Tilt, Strain gauge",
    edge: "Modal frequency, Scour depth",
    connectivity: "4G LTE / Satellite Fallback",
    output: "Bridge Health Index (BHI), Scour alert"
  },
  {
    solution: "Machine Predictive Maintenance",
    sensors: "10kHz Accelerometer, CT Current",
    edge: "Edge TFLite model, Bearing FFT",
    connectivity: "WiFi 6 / Ethernet / 4G",
    output: "Remaining Life (RUL), SAP Workorders"
  },
  {
    solution: "Smart Water Level Stations",
    sensors: "80GHz Radar Level, Ultrasonic Flow",
    edge: "Discharge volume integration",
    connectivity: "Cellular NB-IoT / 4G / LoRa",
    output: "Flood risk alert, Flow totalizer"
  }
];
