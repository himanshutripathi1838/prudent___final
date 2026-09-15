export const capabilityBlocks = [
  {
    category: 'Hardware Engineering', icon: 'Cpu', tagline: 'Embedded systems and sensor interfaces',
    items: [
      { title: 'Sensor Interfaces', tech: 'Analog, digital and industrial inputs', detail: 'Interface design for acquiring data from field sensors and instruments.' },
      { title: 'Embedded Controllers', tech: 'Microcontroller and processor platforms', detail: 'Hardware and firmware integration for monitoring and control applications.' },
      { title: 'Power & Packaging', tech: 'Application-specific power and enclosure design', detail: 'System design considerations for field installation and operating conditions.' }
    ]
  },
  {
    category: 'Communication & Protocols', icon: 'Radio', tagline: 'Field and network connectivity',
    items: [
      { title: 'Industrial Communication', tech: 'Serial, Ethernet and field protocols', detail: 'Connections between sensors, controllers, gateways and existing equipment.' },
      { title: 'Wireless Connectivity', tech: 'Local, cellular and long-range options', detail: 'Connectivity choices based on range, power, bandwidth and site conditions.' },
      { title: 'Protocol Integration', tech: 'Field-to-software data exchange', detail: 'Translation and normalization of device data for monitoring applications.' }
    ]
  },
  {
    category: 'Software & Cloud Platform', icon: 'Server', tagline: 'Monitoring, storage and visualization',
    items: [
      { title: 'Data Services', tech: 'APIs and event processing', detail: 'Services for collecting, validating and delivering operational data.' },
      { title: 'Data Storage', tech: 'Relational and time-series systems', detail: 'Storage designs selected for device history, events and measurements.' },
      { title: 'Dashboards', tech: 'Responsive web interfaces', detail: 'Clear views for assets, measurements, alerts and reporting.' }
    ]
  }
];

export const securityFeatures = [
  { icon: 'ShieldCheck', title: 'Access Control', desc: 'Role and identity controls can be designed around the needs of each deployment.' },
  { icon: 'Lock', title: 'Secure Transport', desc: 'Industry-standard encrypted connections can protect data while it moves between systems.' },
  { icon: 'FileCheck', title: 'Validation & Logging', desc: 'Input validation and event records support reliable operation and troubleshooting.' }
];

export const techStackBadges = {
  Device: ['Microcontrollers', 'Embedded Linux', 'Sensor Interfaces'],
  Communication: ['Serial', 'Ethernet', 'Cellular', 'Long-range Wireless'],
  Software: ['APIs', 'Event Processing', 'Device Integration'],
  Data: ['Relational Storage', 'Time-series Storage', 'Dashboards']
};
