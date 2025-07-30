import React, { useState } from "react";
import "./MachineFacility.css";

const Facility = () => {
  const [activeTab, setActiveTab] = useState("grading");
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const machineData = {
    grading: {
      title: "Cell Grading/Capacity/Cycler Machine",
      subtitle: "Cylindrical Cell",
      mainTitle: "Production Equipment",
      description:
        "A high-precision machine designed for grading, testing, and cycling the capacity of cylindrical cells to ensure consistent performance, reliability, and optimal battery quality in various applications.",
      specifications: [
        { id: "01", name: "Channel Quantity", details: "Up to 512 Channels" },
        { id: "02", name: "Continuous Cycle Range", details: "1-1999 times" },
        {
          id: "03",
          name: "Input Power",
          details: "Three-phase four-wire system, AC380V ± 3%, 50Hz",
        },
        {
          id: "04",
          name: "Communication Method",
          details: "RS232, TCP/IP Protocol",
        },
        { id: "05", name: "Max. Output Power", details: "8kW, 12.8kW, 16kW" },
        {
          id: "06",
          name: "Sleep Time Setting Range",
          details: "1-720 minutes",
        },
        { id: "07", name: "Time Measurement Resolution", details: "1 second" },
        { id: "08", name: "Heat Dissipation Mode", details: "Cold wind" },
      ],
      features: [
        "For Incoming Cylindrical Cells Quality Check",
        "With Universal Horizontal Loading Unloading Trays - for Cylindrical Cells",
      ],
      image: "/assets/Cylinderical.png",
    },
    shorting: {
      title: "Automatic Cell Shorting Machine",
      subtitle: "All Cylindrical Size",
      mainTitle: "OCV & IR Testing System",
      description:
        "An advanced system designed to automatically test open circuit voltage (OCV) and internal resistance (IR) for all cylindrical cell sizes, ensuring safety, quality, and optimal performance in battery production.",
      specifications: [
        {
          id: "01",
          name: "Voltage Test Range & Accuracy",
          details: "8V, ± 0.05% FS, Display Resolution 0.01 mV",
        },
        { id: "02", name: "Input Power", details: "AC220V / 50HZ, 1KW" },
        {
          id: "03",
          name: "IR Test Range & Accuracy",
          details:
            "30 mΩ / 300 mΩ / 3 / 30 / 300 / 3 kΩ, ± 0.5% FS, ± 5 Digits, Display Resolution up to 1 μΩ",
        },
        {
          id: "04",
          name: "Voltage Test Range & Accuracy",
          details:
            "6V / 60V, ± 0.01% FS, ± 3 Digits, Display Resolution up to 10 μV",
        },
      ],
      features: [
        "Size 18650, 21700, 26650, 32700",
        "Sorting Based on Pneumatic System",
        "Comes with Inbuilt PC",
        "With Barcode Function (Optional)",
      ],
      image: "/assets/ShortingMachine.png",
    },
    manual: {
      title: "Manual IR Tester Cell Sorting",
      subtitle: "OCV & IR Machine - All Cylindrical Size",
      mainTitle: "Precision Testing Solution",
      description:
        "The Manual IR Tester Cell Sorting machine is designed for precise testing and sorting of cylindrical cells across all sizes. It efficiently measures the Open Circuit Voltage (OCV) and Internal Resistance (IR) of cells, ensuring high-quality standards in battery production. With its user-friendly interface, it allows accurate manual operation, making it ideal for laboratories, R&D facilities, and small-scale production environments.",
      specifications: [
        { id: "01", name: "Measurement Parameters", details: "OCV & ACIR" },
        { id: "02", name: "Interface", details: "LAN, RS232, and Analog" },
        {
          id: "03",
          name: "Internal Resistance",
          details: "From 1 μΩ up to 3 kΩ, ± 0.5% FS",
        },
        { id: "04", name: "Max. Voltage", details: "60V, 100V, 300V, 1000V" },
        { id: "05", name: "Voltage", details: "Up to 1000V, ± 0.01% FS" },
        {
          id: "06",
          name: "Functions",
          details: "Contact Check, Average, Memory Storage, etc",
        },
      ],
      features: [
        "Ideal for laboratories and R&D facilities",
        "User-friendly manual operation",
        "High-precision measurements",
        "Compact and portable design",
      ],
      image: "/assets/MaunalTester.png",
    },
    impedance: {
      title: "Battery Impedance Tester",
      subtitle: "BT 4560 Hioki (Japan Make)",
      mainTitle: "Precision Measurement System",
      description:
        "The Hioki BT 4560 Battery Impedance Tester is a precision instrument designed to measure the internal impedance of batteries with exceptional accuracy. Made in Japan, this tester supports high-frequency measurement, enabling detailed analysis of battery performance, degradation, and quality.",
      specifications: [
        {
          id: "01",
          name: "Measurement Parameters",
          details: "Impedance, Voltage, Temperature",
        },
        { id: "02", name: "Interface", details: "RS220 / USB, Ext. I/O" },
        { id: "03", name: "Temperature", details: "-10°C to 60°C, ± 0.5°C" },
        { id: "04", name: "Impedance", details: "Up to 100 μΩ" },
        { id: "05", name: "Voltage", details: "Up to 5V, ± 0.4% FS" },
        {
          id: "06",
          name: "Functions",
          details: "Comparator, Self Calibration, Sample Delay, Contact Check",
        },
      ],
      features: [
        "Ideal for R&D and quality assurance",
        "High-frequency measurement capability",
        "Advanced battery diagnostics",
        "Japanese precision engineering",
      ],
      image: "/assets/Battery.png",
    },
    insulation: {
      title: "Insulation Paper Sticking Machine",
      subtitle: "All in One (with separate moulds)",
      mainTitle: "Automated Insulation Solution",
      description:
        "The Insulation Paper Sticking Machine is an advanced solution designed for efficiently applying insulation paper to cylindrical cells. This all-in-one system, equipped with separate molds, ensures precise alignment and adhesion, catering to various cell sizes and configurations.",
      specifications: [
        {
          id: "01",
          name: "Voltage Supply",
          details: "Single Phase ~ 220V 50Hz",
        },
        {
          id: "02",
          name: "Battery Type",
          details: "18650/21700/26650/32700 battery cell",
        },
        {
          id: "03",
          name: "Surface Pad Material",
          details: "Highland barley paper or PVC material",
        },
        { id: "04", name: "Rated Power", details: "2kW" },
        {
          id: "05",
          name: "Material Specification",
          details: "The max diameter of barley paper roll material is 350MM",
        },
        { id: "06", name: "Feeding Method", details: "Electric or Pneumatic" },
        {
          id: "07",
          name: "Pneumatic Pressure",
          details: "0.4-0.8 Mpa barley paper machine",
        },
        {
          id: "08",
          name: "Control Device",
          details: "7.5 inch touch screen, PLC programmer, and servo motor",
        },
        {
          id: "09",
          name: "Speed",
          details: "4000-4500 pcs/hour, 4 pcs per punch",
        },
        {
          id: "10",
          name: "Dimensions & Weight",
          details: "L1110mm * W710mm * H1580mm, 200Kgs",
        },
        {
          id: "11",
          name: "Knife Mould",
          details: "Slow-moving wire processing method, high precision",
        },
      ],
      features: [
        "Precise alignment system",
        "Multiple cell size compatibility",
        "High-speed operation",
        "Automated feeding mechanism",
      ],
      image: "/assets/InsulationPaper.png",
    },
    ccd: {
      title: "CCD Tester / Polarity Detector",
      subtitle: "Offline & Inline",
      mainTitle: "Quality Control System",
      description:
        "The CCD Tester provides automatic polarity detection without manual intervention, ensuring 100% yield after spot welding. It can be integrated with existing assembly lines and customized with belt conveyor for inline operation.",
      specifications: [
        {
          id: "01",
          name: "Operation Mode",
          details: "Offline & Inline (With belt conveyor)",
        },
        { id: "02", name: "Detection Method", details: "CCD Camera Imaging" },
        { id: "03", name: "Throughput", details: "Up to 4000 cells/hour" },
        {
          id: "04",
          name: "Integration",
          details: "Can be integrated with existing assembly lines",
        },
      ],
      processSteps: [
        "Feeding and Positioning of Cells",
        "Positive and Negative Poles detection",
        "Positive and Negative solder joint detection (CCD)",
        "NG Automatic Sorting",
        "OK automatic Discharging",
      ],
      features: [
        "Inline (With belt conveyor) can be customized",
        "In process Quality control before Spot Welding",
        "Automatic Polarity Detection",
        "100% Yield after Spot Welding",
        "Can be Integrated with Existing assembly lines",
      ],
      image: "/assets/CCDTester.png",
    },
    spotWelding: {
      title: "Lithium Battery Pack Spot Welding Machine",
      subtitle: "With Rotation Head",
      mainTitle: "Precision Welding System",
      description:
        "Transistor based power supply up to 10000A with nickel wire thickness up to 0.3mm. Features servo controlled welding heads and customizable JIG sizes up to 600x600mm. Includes water cooling option and direct AutoCAD program upload capability.",
      specifications: [
        { id: "01", name: "Input Power", details: "220VAC ± 10%, 50Hz ± 10%" },
        { id: "02", name: "Max Output Power", details: "2.5 - 5KW" },
        {
          id: "03",
          name: "Single Hole Spot Welding Times",
          details: "Highland barley paper or PVC material",
        },
        { id: "04", name: "Equipment Utilization Rate", details: "99%" },
        {
          id: "05",
          name: "Welding Time",
          details: "1.0ms - 20.0ms adjustable, Accuracy 0.1m",
        },
        {
          id: "06",
          name: "Output Maximum Short Circuit Current",
          details: "Up to 1000A",
        },
        {
          id: "07",
          name: "Scope of Application",
          details:
            "0.03mm ~ 0.3mm, Max thickness of Nickel Wire (with & without bump)",
        },
        {
          id: "08",
          name: "Maximum Thickness of Upper and Lower Butt Welding",
          details: "0.3mm ~ 1mm",
        },
        { id: "09", name: "Air Pressure", details: "0.4 - 0.8Mpa" },
        {
          id: "10",
          name: "Transfer Method",
          details: "Servo + Stepping + Imported Precision Linear Guide",
        },
        { id: "11", name: "X-axis Travel", details: "500mm" },
        { id: "12", name: "Y-axis Travel", details: "600mm" },
        { id: "13", name: "Z-axis Travel", details: "Customizable (150mm)" },
        { id: "14", name: "Equipment", details: "Five-axis Servo Control" },
      ],
      features: [
        "Double Side Automatic Throughput",
        "Water Cooling Feature (Optional)",
        "Servo Controlled Welding Heads",
        "Maximum JIG Size 600x600 (customizable)",
        "AutoCAD program upload through controller",
      ],
      image: "/assets/LithiumBattery.png",
    },
    manualSpotWelding: {
      title: "Manual Spot Welding Machine",
      subtitle: "",
      mainTitle: "Manual Spot Welding Machine",
      description:
        "Single Electrode can weld up to 10,000 – 15,000 spots depending on the current rating. IGBT Based Technology with adjustable welding head height. Pneumatic controlled operation with adjustable pre-welding and welding current. Designed with a user-friendly interface for ease of use.",
      specifications: [],
      features: [
        "Single Electrode – 10,000 to 15,000 Spot Welds",
        "IGBT Based Technology",
        "Adjustable Welding Head Height",
        "Pneumatic Controlled Operation",
        "Pre-welding and Welding Current Adjustment",
        "User Friendly Interface",
      ],
      image: "/assets/MaualSpot.png",
    },
    laserWelding: {
      title: "Lithium Battery Pack Laser Welding Machine",
      subtitle: "",
      mainTitle: "Advanced Laser Welding System",
      description:
        "Consists of Fiber Laser, Laser Power Supply, Control System, Laser Indicating Positioning System, WOBBLE Laser Welding Head, Cooling System, etc., which has very High stability, Flexibility and can be rotated 360 degrees.",
      specifications: [
        {
          id: "01",
          name: "Power (Laser Source)",
          details: "1000W, 1500W, 2000W, 6000W",
        },
        { id: "02", name: "Repeat Positioning Accuracy", details: "0.05mm" },
        {
          id: "03",
          name: "Material Thickness",
          details: "SS, Aluminum Alloy ≤ 3mm",
        },
        { id: "04", name: "Wavelength", details: "1080nm" },
        {
          id: "05",
          name: "Aiming & Positioning",
          details: "CCD, Red Light Indicator",
        },
        { id: "06", name: "Cooling", details: "Water Cooling" },
      ],
      features: [
        "Automatic Robot Laser Welding",
        "High stability and flexibility",
        "360-degree rotation capability",
        "Precision laser welding technology",
      ],
      image: "/assets/LithiumBatteryPack.png",
    },
    busbarLaserWelding: {
      title: "Busbar Laser Welding Machine",
      subtitle: "",
      mainTitle: "High-Precision Busbar Welding System",
      description:
        "The Busbar Laser Welding Machine is a high-precision system designed for the efficient and durable welding of busbars in battery packs. Utilizing advanced laser technology, it ensures strong, clean, and consistent welds while minimizing thermal distortion. This machine is ideal for applications requiring high-quality connections, such as EV battery packs, energy storage systems, and industrial power solutions, delivering superior reliability and production efficiency.",
      specifications: [
        { id: "01", name: "Power", details: "Up to 12000W" },
        {
          id: "02",
          name: "Operation Mode",
          details: "Inline & Offline Operation",
        },
        { id: "03", name: "Production Cycle", details: "10CPM" },
        { id: "04", name: "Laser Source", details: "IPG or MAX Laser Source" },
        { id: "05", name: "Bed, Cabinet & Rack", details: "Herolaser" },
        { id: "06", name: "Dust Collector", details: "Villo / Puhua" },
        { id: "07", name: "Water Chiller", details: "S&A" },
        { id: "08", name: "Accuracy", details: "± 0.02mm" },
        { id: "09", name: "Galvo Welding Head", details: "OSPRI / WSX" },
        { id: "10", name: "Laser Range Finder", details: "Keyence" },
        { id: "11", name: "CCD Camera", details: "Keyence" },
        { id: "12", name: "Servo Motor (x, y, z)", details: "ANOVANCE" },
        { id: "13", name: "Stabilizer (50kVa)", details: "Nanlin" },
        { id: "14", name: "PLC", details: "Siemens / OMRON" },
        {
          id: "15",
          name: "Electrical Control System",
          details: "Siemens / Mitsubishi / Omron",
        },
      ],
      features: [
        "High-power laser welding capability",
        "Precision welding with minimal thermal distortion",
        "Suitable for EV battery packs and energy storage systems",
        "Advanced control systems for consistent quality",
      ],
      image: "/assets/BusbarLaser.png",
    },
    pcbaBmsTester: {
      title: "PCBA/BMS Tester",
      subtitle: "Up to 300A, up to 32 series",
      mainTitle: "Battery Management System Testing",
      description:
        "Applied in the testing of Power battery Pack Protection Board System, Testing of PCB Performance and its technical items along with complete report generation. Composed by Virtual Battery, Short Circuit free, safety guaranteed. Pluggable design of virtual batteries enables it to be expandable. The secondary development function enables it to develop testing items as required.",
      specifications: [
        {
          id: "01",
          name: "Number of Series",
          details: "Up to 48 strings (optional)",
        },
        {
          id: "02",
          name: "Overdischarge Protection Release",
          details: "0 - 5V ± 1mV",
        },
        {
          id: "03",
          name: "Overcharge Protection Release",
          details: "0 - 5V ± 1mV",
        },
        { id: "04", name: "Overcharge Protection", details: "0 - 5V ± 1mV" },
        { id: "05", name: "Overdischarge Protection", details: "0 - 5V ± 1mV" },
        {
          id: "06",
          name: "Over-discharge Current Protection Value",
          details: "Up to 200A ± 0.1A (continuous long-time discharge)",
        },
        {
          id: "07",
          name: "Overcurrent Protection Delay",
          details: "0-10S ± 1ms",
        },
        {
          id: "08",
          name: "Over-charge Current Protection Value",
          details: "1A-50A ± 0.1A",
        },
        {
          id: "09",
          name: "Short Circuit Protection",
          details: "400A (maximum duration 10ms)",
        },
        {
          id: "10",
          name: "Short Circuit Protection Delay",
          details: "0-10000µS ± 1µS",
        },
        {
          id: "11",
          name: "Temperature Protection",
          details: "60°C - 90°C ± 1°C",
        },
        {
          id: "12",
          name: "Equalization Function Turn On Voltage",
          details: "0 - 5V ± 1mV",
        },
        { id: "13", name: "Equalization Current", details: "0-1000mA ± 1mA" },
        {
          id: "14",
          name: "Total Self-Power Consumption Test",
          details: "0-10,000µA ± 1µA",
        },
        {
          id: "15",
          name: "Main Circuit Internal Resistance Test",
          details: "0-200 milliohms ± 0.1 milliohms",
        },
        {
          id: "16",
          name: "Single Cell Self-Power Consumption",
          details: "0-100µA ± 0.1µA",
        },
        { id: "17", name: "Dimensions", details: "50 * 43.5 * 21 cm" },
        { id: "18", name: "Net Weight", details: "15 kg" },
      ],
      features: [
        "Balanced current measurement verification",
        "Over-Charge & Over-discharge Measurement verification",
        "Quiescent Current Measurement",
        "Protection Delay Time Measurement",
        "Gas Gauge Data Comparison",
        "Charge & Discharge Production Current",
        "On Resistance Testing",
        "Current Limiting Testing",
        "Temperature Protection Testing",
        "Total Voltage Protection Testing",
        "Activation Function Testing",
        "Communication Instruction Transmission & Acquisition",
        "Support PLC start-up test, can be used in automation production line",
        "Complete and fully function high precision test results",
        "Software supports modular settings of test projects, production verification and R&D testing",
        "Test functions can be customised as required",
        "Highly compatible, supports different types of protection board testing",
      ],
      image: "/assets/PCBA.png",
    },
    batteryAging: {
      title: "Battery Pack Aging Machine",
      subtitle: "Regenerative Type",
      mainTitle: "Battery Testing System",
      description:
        "Suitable for Cylindrical, Prismatic and Pouch battery packs. Adopt the four-wire test method with anti-reverse connection function, Voltage upper and lower limit protection and maximum current protection. Complete charging and discharging as per field performance including charging (constant current/voltage), suspending, and discharging modes.",
      specifications: [
        {
          id: "01",
          name: "Channel Quantity",
          details: "Up to 96 Channels (depending on Current Rating)",
        },
        { id: "02", name: "Output Current Range", details: "Up to 1000A" },
        {
          id: "03",
          name: "Input Power",
          details: "Single Phase / Three Phase AC 220/380V ± 3%, 50Hz",
        },
        { id: "04", name: "Communication Method", details: "TCP/IP Protocol" },
        {
          id: "05",
          name: "Max. Output Power",
          details: "Depends on Current Rating and No. of Channels",
        },
        {
          id: "06",
          name: "Output Voltage Range",
          details: "12V - 1000V ± 10mV",
        },
        {
          id: "07",
          name: "Working Mode of Main Channel",
          details:
            "Constant Current Charging (CC), Constant Voltage Charging (CV), CCCV, Discharge Mode: Constant Current Discharge (CD)",
        },
        { id: "08", name: "Data Output Mode", details: "EXCEL, TXT" },
        {
          id: "09",
          name: "Equipment Protection Function",
          details:
            "Transformer Over-Temperature Protection, Output Short Circuit Protection, Power Module Over-Temperature Protection, Equipment Over-Voltage/Over-Current Protection, Battery Reverse Connection Protection, Emergency Shutdown",
        },
        {
          id: "10",
          name: "Voltage and Current Detection Sampling",
          details: "Four Wire Connection",
        },
        {
          id: "11",
          name: "Channel Control Mode",
          details: "Independent Control",
        },
        { id: "12", name: "Cooling Mode", details: "Forced Air Cooling" },
        { id: "13", name: "Working Temperature", details: "-10°C to 45°C" },
      ],
      features: [
        "Test Battery Open circuit Voltage",
        "Battery AC Internal Resistance",
        "Continuous Charging Current/Voltage",
        "Continuous Discharge Current/Voltage",
        "Charging/Discharge Overcurrent Protection",
        "Current and Short Circuit protection time",
        "Overcurrent Delay Time measurement",
        "Voltage after Test analysis",
        "Complete charging/discharging cycle testing",
      ],
      image: "/assets/BatteryAging.png",
    },
    cncRouter: {
      title: "CNC Router Machine",
      subtitle: "4.5KW",
      mainTitle: "Precision CNC Routing System",
      description:
        "High-performance CNC router with 4.5KW spindle for precision cutting and engraving applications across various materials.",
      specifications: [
        { id: "01", name: "Working Area", details: "8/4 Feet, Z-axis 300mm" },
        {
          id: "02",
          name: "Spindle Drivers",
          details: "Invt Inverter For Spindle Motor",
        },
        {
          id: "03",
          name: "Spindle Motor",
          details: "4.5kw HQD Air Cooling Spindle Motor",
        },
        {
          id: "04",
          name: "Driver And Motor",
          details: "Yakotech 1500watts AC Servo",
        },
        { id: "05", name: "Controller System", details: "NK105G2 System" },
        {
          id: "06",
          name: "Linear System",
          details: "Hiwin HG25 Linear and 25 Linear Rails",
        },
        { id: "07", name: "Power Input", details: "380v/50hz" },
      ],
      features: [
        "High precision cutting and engraving",
        "Robust construction for industrial use",
        "Advanced servo motor control",
        "Large working area",
        "Professional-grade spindle system",
      ],
      image: "/assets/CNCRouter.png",
    },
    laserCutting: {
      title: "Laser Cutting Machine",
      subtitle: "Plotboat Pro",
      mainTitle: "CO2 Laser Engraving & Cutting System",
      description:
        "PlotBot Pro, a versatile laser engraving and cutting machine equipped with 130W CO2 laser tubes. This state-of-the-art machine seamlessly blends precision and power, making it ideal for engraving and cutting various materials including wood, acrylic, leather, and more for creative and industrial applications.",
      specifications: [
        { id: "01", name: "Laser Type", details: "CO2 Laser Tube" },
        { id: "02", name: "Laser Power", details: "130W" },
        {
          id: "03",
          name: "Working Area",
          details: "Customizable sizes available",
        },
        { id: "04", name: "Engraving Speed", details: "Up to 1000mm/s" },
        { id: "05", name: "Cutting Speed", details: "Up to 500mm/s" },
        { id: "06", name: "Positioning Accuracy", details: "±0.01mm" },
        { id: "07", name: "Cooling System", details: "Water Cooling" },
      ],
      features: [
        "Engrave and cut various materials",
        "User-friendly interface for beginners and professionals",
        "Robust construction for durability",
        "Advanced safety features",
        "Precision engraving for detailed artwork",
        "Ideal for customized gifts and industrial components",
        "Granite engraving capability",
      ],
      image: "/assets/LaserCutting1.png",
    },
    airCompressor: {
      title: "Air Compressor",
      subtitle: "10HP 500L",
      mainTitle: "Industrial Air Compression System",
      description:
        "The 10HP 500L Air Compressor is a powerful and reliable solution for industrial applications requiring high air volume and pressure. With a 10-horsepower motor and a large 500-liter tank capacity, it ensures efficient and continuous operation for heavy-duty applications.",
      specifications: [
        { id: "01", name: "Tank Capacity", details: "500 Liters" },
        { id: "02", name: "No. of Cylinders", details: "3" },
        { id: "03", name: "Maximum Flow Rate", details: "30 CFM" },
        { id: "04", name: "Motor Power", details: "10 HP" },
        { id: "05", name: "Pressure", details: "12 Bar" },
        { id: "06", name: "Cooling System", details: "Air Cooled" },
        { id: "07", name: "Tank Type", details: "Tank Mounted" },
        { id: "08", name: "Driven By", details: "Oil Lubricated" },
        { id: "09", name: "Electrical Supply", details: "3 Phase" },
        { id: "10", name: "Auto Cut Features", details: "Yes" },
        { id: "11", name: "Motor Standard", details: "IE2" },
        { id: "12", name: "Belt", details: "Safety Belt Guard" },
      ],
      features: [
        "Continuous operation capability",
        "High air volume delivery",
        "Durable construction for industrial use",
        "Automatic pressure control",
        "Ideal for pneumatic tools and equipment",
        "Energy efficient operation",
        "Low maintenance design",
      ],
      image: "/assets/AirCompressor.png",
    },
    batteryComprehensiveTesting: {
      title: "Battery Comprehensive Testing Machine",
      subtitle: "Pre-dispatch Testing System",
      mainTitle: "Battery Pack Testing Solution",
      description:
        "Pre-dispatch comprehensive testing of battery packs with less than 1 minute cycle time per battery pack. Designed for lithium-ion batteries (CH+ P+ CH- P-) and all series of power batteries. Features calibration mode and can be integrated with Label Printer/Barcode Reader. This device has no inrush current during the working process and will not damage the BMS in the battery pack.",
      specifications: [
        {
          id: "01",
          name: "Voltage Range",
          details: "0-100V (customizable for higher voltages)",
        },
        {
          id: "02",
          name: "Voltage Accuracy",
          details: "1mV, RD ± 0.1% + FS ± 0.1%",
        },
        {
          id: "03",
          name: "Internal Resistance Range",
          details: "0-2000 milliohms",
        },
        {
          id: "04",
          name: "Internal Resistance Accuracy",
          details: "0.001 milliohms, RD ± 0.1% + FS ± 0.1%",
        },
        { id: "05", name: "Charging Current", details: "0-30A" },
        {
          id: "06",
          name: "Charging Current Accuracy",
          details: "0.001A, RD ± 0.1% + FS ± 0.1%",
        },
        {
          id: "07",
          name: "Discharge Current Range",
          details: "0-200A (at highest voltage)",
        },
        { id: "08", name: "Continuous Discharge Current", details: "200A" },
        {
          id: "09",
          name: "Discharge Current Accuracy",
          details: "RD ± 0.1% + FS ± 0.1%",
        },
        { id: "10", name: "Short-circuit Time Range", details: "0-2000µS" },
        { id: "11", name: "Short-circuit Time Accuracy", details: "1µS" },
        { id: "12", name: "Maximum Power", details: "3000W" },
        {
          id: "13",
          name: "Test Cycle Time",
          details: "<1 minute per battery pack",
        },
        {
          id: "14",
          name: "Data Output",
          details: "Excel format, MES system interface",
        },
      ],
      testItems: [
        "Test Open Circuit Voltage (3.6V-100V)",
        "Trial Charging Voltage Test",
        "Charging Current Test (0-30A)",
        "Internal Resistance Test (0-4000 Milliohms)",
        "Discharge Current Test (0-200A)",
        "Load Voltage Test",
        "Over discharge current Test (0-500A)",
        "Over current recovery Voltage Test",
        "Short circuit Test (8000A)",
        "Voltage Measurement",
        "Internal Resistance Measurement",
        "Charging Overcurrent Protection current",
        "Continuous Charging Current",
        "Discharge Overcurrent Protection Current",
        "Continuous Discharge Current",
        "Short Circuit Protection time",
      ],
      features: [
        "Battery Production Test Mode",
        "Calibration mode available",
        "Integration with Label Printer/Barcode Reader",
        "Customizable shelf time setting",
        "Discharge time & current adjustment",
        "Overcurrent protection delay time setting",
        "Overcurrent step current setting",
        "Visual test results (Green PASS/Red NG indicators)",
        "No inrush current - protects BMS systems",
        "High-speed testing capability",
        "Precision measurement systems",
        "Industrial-grade durability",
      ],
      image: "/assets/BatteryComprehensive.png",
    },
    batteryPackBalancer: {
      title: "Battery Pack Balancer",
      subtitle: "Advanced Balancing System",
      mainTitle: "Intelligent Battery Management Solution",
      description:
        "The Battery Pack Balancer extends battery lifetime through active charge/discharge balancing. Featuring modular design, hot-pluggable operation, and strong expandability, it provides reliable balancing for various battery applications with advanced protection features and touch controls.",
      features: [
        "Enlarges Battery Lifetime",
        "Support Charger and Discharge Balance",
        "Active Balance and Maintenance",
        "Modular Design, Hot Pluggable, Strong",
        "Expandability, Easy to Maintain",
      ],
      specifications: [
        {
          id: "01",
          name: "Charge/Discharge Current",
          details: "Supports up to 20A ± 0.5A",
        },
        { id: "02", name: "Supported Battery Types", details: "NMC, LFP" },
        {
          id: "03",
          name: "Battery Strings Supported",
          details: "2 to 32 strings of any string number",
        },
        {
          id: "04",
          name: "Display & Controls",
          details: "Display all cell voltages and touch control",
        },
        {
          id: "05",
          name: "Balanced Current",
          details: "1 to 20A current adjustable",
        },
        {
          id: "06",
          name: "Multi-machine Support",
          details: "Support multi-machine serial use",
        },
        { id: "07", name: "Working Voltage", details: "DC 12V" },
        {
          id: "08",
          name: "Temperature Protection",
          details: "Automatic control at 50°C internal temperature",
        },
        {
          id: "09",
          name: "Protection Method",
          details:
            "Instant protection for wrong connection, super series connection, reverse connection",
        },
        {
          id: "10",
          name: "Operating Mode",
          details:
            "Support charge equalization or discharge equalization, both modes compatible",
        },
      ],
      image: "/assets/Batterypack.png",
    },
    batteryPackTester: {
      title: "Battery Pack Charge-Discharge Tester",
      subtitle: "DNA-PT20 | 9-99V 10A Charging / 20A Discharging",
      mainTitle: "High-Precision Battery Testing System",
      description:
        "The Battery Pack Charge-Discharge Tester is an advanced tool for evaluating the charging and discharging capabilities of battery packs. It measures parameters like capacity, voltage, current, and cycle life to ensure optimal performance and reliability. Designed for R&D, production, and quality control, this tester supports various battery chemistries and configurations. Its precise, automated testing process makes it indispensable for battery development and validation.",
      features: [
        "High-precision capacity charging & discharging equipment",
        "Suitable for EV and static battery packs",
        "Computer-controlled management (single PC can manage multiple devices)",
        "Adjustable charging (0.5-10A) and discharging (0.5-20A) currents",
        "Supports constant current & constant voltage charging",
      ],
      specifications: [
        {
          id: "01",
          name: "Input Voltage",
          details: "Single-phase ~220V ±10% / 50Hz",
        },
        {
          id: "02",
          name: "Charging & Discharging Voltage",
          details: "9-99V (±10%)",
        },
        {
          id: "03",
          name: "Discharging Method",
          details: "Constant current (0.5-20A adjustable)",
        },
        {
          id: "04",
          name: "Charging Method",
          details: "Constant current & constant voltage (0.5-10A adjustable)",
        },
        { id: "05", name: "Maximum Power", details: "900W" },
        { id: "06", name: "Accuracy", details: "±0.03" },
        {
          id: "07",
          name: "Loop Idle Interval",
          details: "0-20 mins adjustable",
        },
        { id: "08", name: "Maximum Loop", details: "16 times" },
        { id: "09", name: "Communication Port", details: "LAN" },
        { id: "10", name: "Operating Mode", details: "Panel/Software" },
      ],
      image: "/assets/Batterypackcharge.png",
    },
    nickelWireCuttingMachine: {
      title: "Automatic Nickel Wire Cutting Machine",
      subtitle: "High-Speed Precision Cutting",
      mainTitle: "Programmable Nickel Wire Cutter",
      description:
        "The Automatic Nickel Wire Cutting Machine is designed for fast, accurate, and hassle-free cutting of nickel wires for battery packs and other applications. It features programmable length and quantity settings, ensuring consistent and precise cuts every time. With its durable construction and high-speed operation, this machine improves productivity while minimizing waste. Ideal for industrial and commercial use, it guarantees efficiency, precision, and reliability in wire processing tasks.",
      features: [
        "Programmable length & quantity settings",
        "High-speed cutting (3000 cycles/hour)",
        "Precision cutting for consistent results",
        "Durable construction for industrial use",
        "Minimizes material waste",
        "Stepper motor driven (suitable for PVC & nickel wire)",
      ],
      specifications: [
        { id: "01", name: "Cutting Length", details: "Up to 9999.9mm" },
        { id: "02", name: "Weight", details: "40 Kgs" },
        { id: "03", name: "Cutting Speed", details: "3000 Cycles / Hour" },
        { id: "04", name: "Cutting Width", details: "Up to 300mm" },
        { id: "05", name: "Dimensions", details: "900 x 450 x 450 mm" },
        { id: "06", name: "Power", details: "220V AC, 50Hz, 100W" },
        { id: "07", name: "Motor Type", details: "Stepper Motor Driven" },
        {
          id: "08",
          name: "Compatibility",
          details: "Suitable for cutting PVC & Nickel wire",
        },
      ],
      image: "/assets/NickelWireCutter.png",
    },
    heatShrinkMachine: {
      title: "Heat Shrink Machine",
      subtitle: "Professional Shrink Wrapping Solution",
      mainTitle: "Industrial Heat Shrink Tunnel",
      description:
        "A Heat Shrink Machine is a versatile tool designed to apply heat to shrinkable materials, providing secure and professional wrapping for cables, battery packs, and other components. It ensures a tight, durable seal, protecting items from moisture, dust, and mechanical damage. Ideal for industrial and commercial use, this machine delivers consistent performance and enhances the durability and appearance of your products.",
      features: [
        "Far infrared + circulating hot air heating",
        "Adjustable speed (0.1–6M/min)",
        "Precise temperature control (RT-180°C ±2°C)",
        "Mesh conveyor with 30kg load capacity",
        "ESD-safe operation (<60°C output temp)",
      ],
      specifications: [
        { id: "01", name: "Source Voltage", details: "AC 380V, 50Hz" },
        {
          id: "02",
          name: "Conveyor Type",
          details: "Mesh with 30Kgs loading capacity",
        },
        {
          id: "03",
          name: "Heating Mode",
          details: "Far infrared + circulating hot air",
        },
        { id: "04", name: "Power", details: "8.0 KW" },
        { id: "05", name: "Tunnel Size", details: "600mm x 400mm x 300mm" },
        {
          id: "06",
          name: "Speed",
          details: "0.1-6M/min, Infinitely adjustable",
        },
        {
          id: "07",
          name: "Temperature Range",
          details: "RT-180°C ±2°C (Closed Loop)",
        },
        { id: "08", name: "Output Temperature", details: "<60°C" },
      ],
      image: "/assets/HeatShrinkMachine.png",
    },
    esdWorkingTables: {
      title: "ESD Working Tables",
      subtitle: "Anti-Static Workstations",
      mainTitle: "Single-Side & Double-Side ESD Tables",
      description:
        "Single-Side ESD Working Table: Designed for compact setups,these tables provide an anti-static surface to protect sensitiveb electronic components from electrostatic discharge (ESD). They are perfect for individual workstations or smaller assembly areas, ensuring safety and precision during tasks like soldering and testing. Double-Side ESD Working Table: Optimized for collaborative or larger setups, these tables offer anti-static surfaces on both sides, allowing multiple operators to work efficiently. Ideal for production lines, they maximize workspace utilization while ensuring ESD protection for all devices.",
      features: [
        "ESD-safe surface (Mild Steel/Aluminum)",
        "Customizable dimensions & height",
        "Modular accessories (footrest, tool trays, etc.)",
        "Ideal for electronics/battery assembly",
      ],
      specifications: [
        {
          id: "01",
          name: "Material",
          details: "Mild Steel / Aluminum (ESD Safe)",
        },
        { id: "02", name: "Storage", details: "As per requirement" },
        { id: "03", name: "Height", details: "1800mm (customizable)" },
        {
          id: "04",
          name: "Table Top Size",
          details: "1200 x 600mm (customizable)",
        },
        {
          id: "05",
          name: "Usage",
          details: "Industrial/Electronics/Battery Assembly",
        },
        {
          id: "06",
          name: "Optional Accessories",
          details:
            "Footrest, Universal Socket, Swivel Light, Conductive Bins, Writing Board, Tool Tray, Modular Lock System",
        },
      ],
      image: "/assets/ESDWorkingTable.png",
    },
    materialMovementTrolleys: {
      title: "Material Movement Trolleys",
      subtitle: "ESD-Safe Transport Solution",
      mainTitle: "Industrial Battery Material Trolleys",
      description:
        "Stainless steel trolleys with ESD-safe surfaces designed for safe and efficient movement of battery components in industrial environments. Customizable dimensions and load capacities make them ideal for handling sensitive materials in E-vehicle, solar, and energy storage (BESS) applications.",
      applications: [
        "E-Vehicles",
        "Solar Energy Systems",
        "Energy Storage (BESS)",
      ],
      features: [
        "ESD-safe stainless steel construction",
        "Customizable dimensions",
        "High load capacity (50-100kg)",
        "Durable nylon/PU wheels for smooth movement",
      ],
      specifications: [
        {
          id: "01",
          name: "Material",
          details: "Stainless Steel with ESD Sheet",
        },
        { id: "02", name: "Dimensions", details: "Can be customised" },
        { id: "03", name: "Load Capacity", details: "50Kgs - 100Kgs" },
        { id: "04", name: "Wheels", details: "Nylon / PU" },
      ],
      image: "/assets/MaterialTrolley.png",
    },
    spotWeldingJigs: {
      title: "Jigs for Automatic Spot Welding",
      subtitle: "Precision Welding Fixtures",
      mainTitle: "Battery Cell Welding Jigs",
      description:
        "Specially designed fixtures that ensure accuracy, consistency, and speed in welding operations. These jigs securely hold battery cells and materials in place, allowing for precise alignment during the spot welding process. Built with durable Hylam material, they streamline repetitive tasks and improve productivity in battery pack assembly.",
      features: [
        "Compatible with single/double side welding",
        "Fits all cylindrical cell sizes (with/without holders)",
        "Customizable to welding machine fixtures",
        "Durable Hylam material construction",
        "Minimizes welding errors",
        "Enables high-speed automated welding",
      ],
      specifications: [
        {
          id: "01",
          name: "Compatibility",
          details: "Single & Double Side Welding",
        },
        {
          id: "02",
          name: "Cell Support",
          details: "All Cylindrical Cell Sizes (With/Without Holders)",
        },
        {
          id: "03",
          name: "Customization",
          details: "Adjustable to Welding Machine Fixtures",
        },
        { id: "04", name: "Material", details: "Hylam" },
      ],
      image: "/assets/WeldingJigs.png",
    },
    cylindricalCellHolders: {
      title: "Cylindrical Cell Holders",
      subtitle: "Secure Battery Mounting Solutions",
      mainTitle: "Battery Cell Organization System",
      description:
        "Cylindrical cell holders are essential components for safely mounting and organizing cylindrical batteries, ensuring secure placement and efficient assembly. These holders provide stability, prevent short circuits, and allow for proper airflow, aiding in thermal management. Designed to fit various cell sizes, they are ideal for battery packs in applications such as electric vehicles, drones, and energy storage systems.",
      features: [
        "Fits all cylindrical cell sizes",
        "Customizable series/parallel configurations",
        "High-temperature resistant (up to 150°C)",
        "Enhances battery safety and reliability",
        "Improves thermal management",
      ],
      specifications: [
        {
          id: "01",
          name: "Compatibility",
          details: "All Cylindrical Cell Sizes",
        },
        {
          id: "02",
          name: "Customization",
          details: "Adjustable to any Series/Parallel configuration",
        },
        { id: "03", name: "Temperature Resistance", details: "Up to 150°C" },
      ],
      image: "/assets/CellHolders.png",
    },
    spotWeldingElectrodes: {
      title: "Spot Welding Electrodes",
      subtitle: "High-Conductivity Welding Components",
      mainTitle: "Precision Battery Welding Electrodes",
      description:
        "Spot welding electrodes are specialized components designed for creating strong and reliable welds in battery assembly and metal joining applications. Made from high-conductivity materials like copper alloys, they ensure efficient heat transfer and consistent weld quality.",
      features: [
        "For automatic & manual spot-welding equipment",
        "Copper-beryllium alloy construction",
        "Customizable to welding machine fixtures",
        "Long lifespan (10,000-15,000 strokes)",
        "Excellent wear resistance",
      ],
      specifications: [
        { id: "01", name: "Material", details: "Copper and Beryllium Alloy" },
        {
          id: "02",
          name: "Lifespan",
          details: "10,000 to 15,000 strokes (program dependent)",
        },
        {
          id: "03",
          name: "Compatibility",
          details: "Customizable to welding machine fixtures",
        },
      ],
      image: "/assets/WeldingElectrodes.png",
    },
    cellSortingPins: {
      title: "Cell Sorting Pins",
      subtitle: "Precision Battery Organization Tools",
      mainTitle: "Battery Cell Alignment System",
      description:
        "Cell Sorting Pins are precision-engineered components used to organize and align battery cells within packs for optimal performance and safety. These pins ensure consistent spacing, prevent short circuits, and enhance thermal management.",
      features: [
        "For automatic cell sorting equipment",
        "Standard sizes available",
        "Ensures proper cell spacing",
        "Improves thermal management",
        "Enhances assembly efficiency",
      ],
      specifications: [
        {
          id: "01",
          name: "Type",
          details: "For Automatic Cell Sorting Equipment",
        },
        { id: "02", name: "Sizes", details: "Standard sizes available" },
      ],
      image: "/assets/CellSortingPins.png",
    },
    pureNickelStrips: {
      title: "Pure Nickel Strips",
      subtitle: "High-Conductivity Battery Connectors",
      mainTitle: "Nickel 200 N6 99.5% Pure Strips",
      description:
        "Pure Nickel Strips are essential components in various industrial and electronic applications, known for their exceptional conductivity, corrosion resistance, and durability. Designed to meet the demanding requirements of modern technology.",
      features: [
        "Nickel 200 N6 99.5% purity",
        "H Type 2P and 3P available",
        "0.15mm-0.20mm thickness",
        "Excellent corrosion resistance",
        "Superior conductivity",
      ],
      specifications: [
        { id: "01", name: "Material Grade", details: "Nickel 200 N6 99.5%" },
        { id: "02", name: "Available Types", details: "H Type 2P and 3P" },
        { id: "03", name: "Thickness", details: "0.15mm-0.20mm" },
      ],
      image: "/assets/NickelStrips.png",
    },
    ovenFacility: {
      title: "Oven Facility",
      subtitle: "Industrial-Scale Thermal Processing",
      mainTitle: "Short-Wave IR Heating System",
      description:
        "The oven facility boasts a robust and spacious chamber with dimensions of 24 x 12 x 8 feet, designed to handle large-scale applications with precision. Utilizing advanced short-wave infrared (IR) heating technology.",
      features: [
        "Massive 24'x12'x8' chamber",
        "Short-wave IR heating technology",
        "Rapid heat-up (15 mins to 120°C)",
        "Exceptional temperature accuracy",
        "Energy-efficient insulation",
      ],
      specifications: [
        { id: "01", name: "Chamber Volume", details: "24 x 12 x 8 feet" },
        { id: "02", name: "Heating Type", details: "Short wave IR" },
        {
          id: "03",
          name: "Temperature Range",
          details: "Ambient +10°C to 250°C",
        },
        { id: "04", name: "Accuracy", details: "±0.2°C at 120°C" },
        { id: "05", name: "Uniformity", details: "±1.0°C at 120°C" },
        {
          id: "06",
          name: "Heat-up Time",
          details: "Within 15 minutes to 120°C",
        },
        { id: "07", name: "Heater", details: "40kW" },
        { id: "08", name: "Sensor", details: "Pt 100" },
        {
          id: "09",
          name: "Insulation",
          details: "100mm mineral wool with woven aluminum barrier",
        },
      ],
      image: "/assets/IndustrialOven.png",
    },
    vacuumPump: {
      title: "3000LPM Belt Drive Vacuum Pump",
      subtitle: "Industrial-Grade Vacuum System",
      mainTitle: "Water-Cooled High-Capacity Pump",
      description:
        "The 3000LPM Belt Drive Vacuum Pump is a high-performance, water-cooled system designed for industrial applications requiring powerful suction and efficiency. Equipped with a 500-liter receiver tank and 7.5HP motor.",
      features: [
        "3000LPM capacity",
        "Water-cooled design",
        "0.02 mbar ultimate vacuum",
        "7.5HP 3-phase motor",
        "Low maintenance operation",
      ],
      specifications: [
        { id: "01", name: "Model", details: "3000 DB" },
        { id: "02", name: "Pump Capacity", details: "3000LPM" },
        { id: "03", name: "Ultimate Vacuum", details: "0.02 mbar" },
        { id: "04", name: "Oil Capacity", details: "20Ltrs" },
        { id: "05", name: "Motor", details: "7.5 HP (3 phase)" },
        { id: "06", name: "Type", details: "Water Cooled" },
      ],
      image: "/assets/VacuumPump.png",
    },
  };

  const compatibleSizes = [
    "18650",
    "21700",
    "26650",
    "32700",
    "32138",
    "33140",
    "34189",
  ];

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedSpecifications = [...machineData[activeTab].specifications].sort(
    (a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    }
  );

  return (
    <div className="pro-item-container">
      <div className="pro-item-card">
        <div className="machine-tabs">
          {Object.keys(machineData).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {machineData[key].title.split("(")[0].trim()}
            </button>
          ))}
        </div>

        <div className="machine-content">
          <h2 className="category-title">
            <span>{machineData[activeTab].title}</span>
            {machineData[activeTab].subtitle && (
              <>
                <span className="blue-arrow">→</span>
                <span>{machineData[activeTab].subtitle}</span>
              </>
            )}
          </h2>

          <h1 className="pro-item-title">{machineData[activeTab].mainTitle}</h1>

          <div className="image-description-container">
            <div className="pro-item-image">
              <img
                src={machineData[activeTab].image}
                alt={machineData[activeTab].title}
                className="machine-image"
              />
            </div>

            <div className="text-content">
              <p className="pro-item-description">
                {machineData[activeTab].description}
              </p>

              {activeTab === "grading" && (
                <div className="compatible-sizes">
                  <h3>Compatible Cell Sizes</h3>
                  <div className="size-bubbles">
                    {compatibleSizes.map((size) => (
                      <span key={size} className="size-bubble">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="specs-features-container">
            {machineData[activeTab].specifications?.length > 0 && (
              <div className="specifications-section">
                <h3 className="section-title">Specifications</h3>
                <div className="specs-table-container">
                  <table className="specs-table">
                    <thead>
                      <tr>
                        <th
                          className={`sortable ${
                            sortConfig.key === "id" ? sortConfig.direction : ""
                          }`}
                          onClick={() => requestSort("id")}
                        >
                          ID
                          <span className="sort-icon">
                            {sortConfig.key === "id"
                              ? sortConfig.direction === "asc"
                                ? "↑"
                                : "↓"
                              : "↕"}
                          </span>
                        </th>
                        <th
                          className={`sortable ${
                            sortConfig.key === "name"
                              ? sortConfig.direction
                              : ""
                          }`}
                          onClick={() => requestSort("name")}
                        >
                          Specification
                          <span className="sort-icon">
                            {sortConfig.key === "name"
                              ? sortConfig.direction === "asc"
                                ? "↑"
                                : "↓"
                              : "↕"}
                          </span>
                        </th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedSpecifications.map((spec) => (
                        <tr key={spec.id}>
                          <td className="spec-id" data-label="ID">
                            {spec.id}
                          </td>
                          <td className="spec-name" data-label="Specification">
                            {spec.name}
                          </td>
                          <td className="spec-details" data-label="Details">
                            {spec.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="features-section">
              <h3 className="section-title">Key Features</h3>
              <div className="features-grid">
                {machineData[activeTab].features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <div className="feature-text">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
