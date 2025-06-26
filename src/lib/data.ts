
import { Alert } from '@/components/ui/alert';
import type { Product, CaseStudy, Industry, NavItem, MegaMenuCardItem, WhyChooseUsItem, Testimonial, TeamMember, ClientLogo, CoreOfferingItem, FAQItem, SolutionCategory } from '@/types';
import { ShieldCheck,Wifi, Layers, KeyRound, Network,Lock, Building2,Fingerprint,House, Landmark, Factory, Users, TrendingUp, Award, Video, HardDrive, Route, Mail, Home, Info, Star, ThumbsUp, Lightbulb, Users2, Briefcase, Palette, MessageSquare, Bell, Settings, HelpCircle, Rss, CheckCircle, Grid, ArrowRight, Camera, Eye, Mic, Cpu, Flame, Siren, SignalZero, ScreenShare, AlertTriangle, DoorOpen, Pen, Volume, Server, Phone, AlarmCheck, Monitor } from 'lucide-react';

export const products: Product[] = [
  // --- CCTV Cameras ---
  {
    id: '1',
    slug: 'panasonic-dua5mwa-5mp-ip-camera',
    name: 'Panasonic DUA5MWA 5MP IP Dome Camera',
    category: 'CCTV Cameras',
    shortDescription: '5MP wireless dome camera with motion detection and night vision.',
    longDescription: 'Panasonic DUA5MWA offers reliable 5MP surveillance for both indoor and outdoor environments. With features like motion detection, night vision, and local storage, it supports smart analysis and multiple communication protocols, ensuring secure and efficient monitoring.',
    images: [
      
      '/Solutions/Surveillance/CCTV/dome_fixed.png',
      '/Solutions/Surveillance/CCTV/dome_fixed2.png'

    ],
    dataAiHints: ['wireless dome camera', 'panasonic security cam', 'smart surveillance'],
    specifications: [
      { key: 'Resolution', value: '5MP (1/2.9” Progressive CMOS)' },
      { key: 'Night Vision', value: 'Up to 25 meters' },
      { key: 'Connectivity', value: 'Wi-Fi & PoE' },
      { key: 'Storage', value: 'Local Recording' },
      { key: 'Smart Features', value: 'Motion Detection, Privacy Masking, Line Crossing' }
    ],
    benefits: [
      'High-resolution video monitoring',
      'Wireless and PoE flexibility',
      'Smart detection and alerts',
      'Indoor & outdoor usability',
      'Compatible with multiple devices'
    ],
    icon: Video,
  },
  {
    id: '2',
    slug: 'hikvision-4mp-ip-camera',
    name: 'HIKVISION 4MP Wireless IP Camera',
    category: 'CCTV Cameras',
    shortDescription: 'Robust 4MP wireless camera with varifocal lens and night vision.',
    longDescription: 'The HIKVISION 4MP IP Camera is built for both indoor and outdoor surveillance. With advanced H.265+ compression, WDR for backlight clarity, and a motorized varifocal lens, it offers efficient and flexible monitoring. Its IP67 and IK10 ratings ensure durability in harsh environments.',
    images: [
       '/Solutions/Surveillance/CCTV/dome_varifocal.png'
    ],
    dataAiHints: ['hikvision camera', 'wireless surveillance', 'varifocal cctv'],
    specifications: [
      { key: 'Resolution', value: '4MP' },
      { key: 'Lens', value: '2.8 to 12 mm Motorized Varifocal' },
      { key: 'Compression', value: 'H.265+ Efficient Compression' },
      { key: 'Night Vision & WDR', value: '120 dB WDR, Clear Night Imaging' },
      { key: 'Storage', value: 'Up to 256 GB (MicroSD)' },
      { key: 'Durability', value: 'IP67 Water & Dust Proof, IK10 Vandal Proof' }
    ],
    benefits: [
      'Clear imaging in varied lighting conditions',
      'Wireless connectivity and remote access',
      'Supports high-capacity local storage',
      'Rugged and weather-resistant design',
      'Easy installation with motorized lens'
    ],
    icon: Video,
  },
  {
    id: '3',
    slug: 'cp-plus-2-4mp-hd-camera',
    name: 'CP PLUS 2.4MP HD Outdoor Camera',
    category: 'CCTV Cameras',
    shortDescription: 'Wired 2.4MP HD camera with night vision and robust outdoor protection.',
    longDescription: 'The CP PLUS 2.4MP HD Camera delivers clear full HD video with a 3.6mm fixed lens and enhanced night vision. Designed for outdoor usage, it features smart IR, DWDR, and IP67 weatherproofing for reliable surveillance in varying conditions.',
    images: [
      '/Solutions/Surveillance/CCTV/bullet_fixed_2.png',
      '/Solutions/Surveillance/CCTV/bullet_fixed.png',

    ],
    dataAiHints: ['cp plus night camera', 'outdoor wired cctv', 'bnc camera'],
    specifications: [
      { key: 'Resolution', value: '2.4MP Full HD with CMOS Sensor' },
      { key: 'Lens', value: '3.6 mm Fixed Lens' },
      { key: 'Night Vision', value: 'IR Range up to 20 meters with Smart IR' },
      { key: 'Frame Rate', value: 'Max 25/30fps at 2.4MP' },
      { key: 'Connectivity', value: 'Wired (BNC)' },
      { key: 'Protection', value: 'IP67 Rated Weatherproof' }
    ],
    benefits: [
      'High-definition surveillance with stable wired connection',
      'Reliable night vision up to 20 meters',
      'Weather-resistant for outdoor installations',
      'Supports image enhancements like DWDR, 2D-DNR, BLC',
      'Plug-and-play compatibility with DVR systems'
    ],
    icon: Video,
  },

  {
    id: '4',
    slug: 'ramex-5mp-outdoor-camera',
    name: 'RAMEX 5MP Outdoor Security Camera',
    category: 'CCTV Cameras',
    shortDescription: '5MP wired outdoor camera with motorized vari-focal lens and HD imaging.',
    longDescription: 'The RAMEX 5MP Outdoor Camera is designed for high-performance security monitoring. With advanced H.265 compression, 5X motorized vari-focal lens, and support for both 2D/3D noise reduction, it delivers clear visuals and flexible installation. Ideal for outdoor security with CMS and SDK support.',
    images: [
      '/Solutions/Surveillance/CCTV/bullet_varifocal.png',
      '/Solutions/Surveillance/CCTV/bullet_varifocal2.png',
      '/Solutions/Surveillance/CCTV/bullet_varifocal2.png',
      '/Solutions/Surveillance/CCTV/bullet_varifocal2.png',

      
    ],
    dataAiHints: ['ramex cctv', 'vari-focal lens camera', '5mp outdoor surveillance'],
    specifications: [
      { key: 'Resolution', value: '5MP HD' },
      { key: 'Lens', value: '5X Motorized Optical Vari-Focal' },
      { key: 'Compression', value: 'H.265 / H.264' },
      { key: 'Noise Reduction', value: '2D/3D Noise Reduction, Wide Dynamic' },
      { key: 'Connectivity', value: 'Wired (Ethernet)' },
      { key: 'Software Support', value: 'Web, CMS, MYEYE, SDK' }
    ],
    benefits: [
      'Crystal-clear 5MP video resolution',
      'Flexible zoom with motorized vari-focal lens',
      'Low bandwidth usage with advanced compression',
      'Wide dynamic and noise reduction for clarity',
      'Supports centralized monitoring software and SDK'
    ],
    icon: Video,
  },
  {
    id: '97',
    slug: 'ptz-cameras-pan-tilt-zoom',
    name: 'PTZ Cameras (Pan-Tilt-Zoom)',
    category: 'CCTV Cameras',

  
    shortDescription: 'High-performance PTZ surveillance cameras with pan, tilt, and optical zoom for large-area monitoring.',
    longDescription: 'PTZ (Pan-Tilt-Zoom) cameras offer flexible and dynamic surveillance by enabling remote or automated movement across wide areas. These cameras support powerful optical and digital zoom capabilities, making them ideal for monitoring expansive zones like campuses, stadiums, industrial areas, or city intersections. Equipped with night vision, smart tracking, and high-resolution imaging, PTZ cameras integrate easily with NVRs and VMS platforms for comprehensive video surveillance.',
    
    images: [
      '/Solutions/Surveillance/CCTV/ptz4.png',

    ],
  
    dataAiHints: [
      'ptz surveillance camera',
      'pan tilt zoom cctv',
      'high zoom ip camera',
      '4k ptz security cam',
      'night vision ptz camera'
    ],
  
    specifications: [
      { key: 'Image Sensor', value: '2MP (1080p), 4MP, 8MP (4K) or higher' },
      { key: 'Video Resolution', value: '1920×1080, 2560×1440, 3840×2160 (4K)' },
      { key: 'Optical Zoom', value: '10x to 40x (optical clarity)' },
      { key: 'Digital Zoom', value: '4x–16x (software-based)' },
      { key: 'Pan Range', value: '0°–360° continuous' },
      { key: 'Tilt Range', value: '-15° to 90° (some up to 180°)' },
      { key: 'Pan/Tilt Speed', value: '0.1° to 300°/sec' },
      { key: 'Focal Length', value: '4.7–94mm (varies by model)' },
      { key: 'Aperture', value: 'F1.6–F4.0 for low-light performance' },
      { key: 'IR Range', value: '30m to 250m night vision' },
      { key: 'Low Light Support', value: 'True WDR, 3D DNR' },
      { key: 'Local Storage', value: 'microSD/SDHC/SDXC slot up to 256GB' },
      { key: 'Cloud/NVR Support', value: 'ONVIF compatible' },
      { key: 'Power Source', value: '12V DC, PoE, PoE+, AC24V' }
    ],
  
    benefits: [
      'Covers large surveillance zones with pan and tilt control',
      'Zoom in on distant objects without losing clarity',
      'Night vision support up to 250 meters',
      'Flexible storage options: local, cloud, or NVR',
      'Remote control and automated tracking support'
    ],
  
    icon: Video
  }
,

{
  id: '98',
  slug: 'infrared-night-vision-cameras',
  name: 'Infrared (IR) / Night Vision Cameras',
  category: 'CCTV Cameras',


  shortDescription: 'Infrared surveillance cameras for clear video in low-light or no-light environments.',
  longDescription: 'Infrared (IR) or Night Vision Cameras are designed to capture high-quality video in low-light or complete darkness. They utilize infrared LEDs to illuminate scenes invisible to the human eye but visible to the camera sensor. Featuring automatic IR cut filters and smart motion detection, these cameras provide reliable 24/7 surveillance for both indoor and outdoor applications.',

  images: [
    '/Solutions/Surveillance/CCTV/ir1.png',

  ],

  dataAiHints: [
    'infrared security camera',
    'night vision cctv',
    'no light surveillance camera',
    'starlight camera for dark areas',
    'low light ir camera'
  ],

  specifications: [
    { key: 'Image Sensor Type', value: 'CMOS or CCD' },
    { key: 'Resolution', value: '2MP (1080p), 4MP, 5MP, 8MP (4K)' },
    { key: 'IR Range', value: '10–100 meters' },
    { key: 'IR LED Wavelength', value: '850nm (slight glow) / 940nm (invisible)' },
    { key: 'Night Vision Mode', value: 'Black & white with IR / Color with Starlight sensor' },
    { key: 'IR Cut Filter', value: 'Automatic ICR day/night switch' },
    { key: 'Lens Type', value: 'Fixed or Varifocal' },
    { key: 'Focal Length', value: '2.8mm – 12mm (varifocal)' },
    { key: 'Field of View (FoV)', value: '30° to 120° depending on lens' },
    { key: 'Frame Rate', value: '15–30 fps @ full resolution' },
    { key: 'Compression', value: 'H.265 / H.264 / MJPEG' },
    { key: 'Input Voltage', value: '12V DC or PoE' },
    { key: 'Local Storage', value: 'microSD slot (up to 256GB), NVR/Cloud compatible' },
    { key: 'Smart Features', value: 'Motion detection, alerts, night schedule (IP models)' }
  ],

  benefits: [
    'Capture clear footage in darkness using infrared illumination',
    'Automatic day/night switching with IR cut filter',
    'Supports long-range IR (up to 100 meters)',
    'Compatible with cloud/NVR for continuous recording',
    'Smart motion detection for enhanced alerts and automation'
  ],

  icon: Camera
}
,
{
  id: '99',
  slug: 'ip-cameras-internet-protocol',
  name: 'IP Cameras (Internet Protocol)',
  category: 'CCTV Cameras',


  shortDescription: 'High-definition IP cameras with remote access, real-time alerts, and cloud/local recording.',
  longDescription: 'IP Cameras, or Internet Protocol Cameras, are modern digital surveillance devices that transmit video data over Ethernet or Wi-Fi networks. Offering HD to 4K video resolution, they support real-time monitoring, AI-powered motion detection, and remote access from mobile and desktop devices. Ideal for both residential and enterprise use, IP cameras work standalone or as part of NVR-based systems.',

  images: [
    '/Solutions/Surveillance/CCTV/ip1.png',

  ],

  dataAiHints: [
    'ip cctv camera',
    'wifi surveillance camera',
    'ethernet camera with hd recording',
    'onvif supported ip camera',
    'remote access security camera'
  ],

  specifications: [
    { key: 'Image Quality', value: '2MP (1080p), 4MP, 5MP, 8MP (4K)' },
    { key: 'Lens Type', value: 'Fixed (e.g. 2.8mm) or Varifocal (2.8–12mm)' },
    { key: 'Field of View', value: '30°–120° depending on lens' },
    { key: 'Video Compression', value: 'H.264, H.265, MJPEG' },
    { key: 'Frame Rate', value: 'Up to 30 fps' },
    { key: 'Input Voltage', value: '12V DC or PoE (Power over Ethernet)' },
    { key: 'Network Support', value: 'Ethernet (RJ45), Wi-Fi (select models)' },
    { key: 'Supported Protocols', value: 'ONVIF, RTSP, HTTP, TCP/IP' },
    { key: 'IR Range', value: '10m to 100m with IR LEDs' },
    { key: 'Infrared Cut Filter', value: 'Yes (for day/night switching)' }
  ],

  benefits: [
    'Stream video over LAN or Wi-Fi with high clarity',
    'Remote access via mobile apps or browsers',
    'Real-time motion detection alerts and event logging',
    'Supports cloud storage or integration with NVRs',
    'Ideal for both indoor and outdoor environments'
  ],

  icon: Camera
}
,
{
  id: '100',
  slug: 'wireless-cameras',
  name: 'Wireless Cameras',
  category: 'CCTV Cameras',


  shortDescription: 'Wi-Fi-enabled wireless surveillance cameras with HD to 4K video, smart alerts, and flexible power options.',
  longDescription: 'Wireless cameras offer cable-free video transmission using Wi-Fi (2.4GHz or 5GHz), enabling flexible placement and easy installation. Suitable for indoor and outdoor monitoring, they deliver HD to 4K video, night vision, and smart features like motion detection and mobile alerts. Powered by rechargeable batteries, solar panels, or DC adapters, they support cloud, SD card, or NVR-based storage.',

  images: [
    '/Solutions/Surveillance/CCTV/wireles1.png',

  ],

  dataAiHints: [
    'wireless security camera',
    'wifi surveillance camera',
    'battery powered camera with night vision',
    'cloud camera with motion detection',
    'smart home wireless camera'
  ],

  specifications: [
    { key: 'Image Quality', value: '2MP (1080p), 4MP, 5MP, 8MP (4K)' },
    { key: 'Wireless Protocol', value: 'Wi-Fi (2.4GHz, dual-band on premium models)' },
    { key: 'Network Range', value: '10–50 meters (depending on interference)' },
    { key: 'Power Source', value: 'Rechargeable battery, solar panel, or 12V DC adapter' },
    { key: 'Storage Options', value: 'microSD (up to 256GB), Cloud, or NVR' },
    { key: 'IR Night Vision', value: '10–30 meters (some models offer color night vision)' },
    { key: 'Lens Type', value: 'Fixed or Varifocal (2.8–4mm)' },
    { key: 'Field of View', value: '80°–130°' },
    { key: 'Smart Detection', value: 'Motion, person, vehicle, zone intrusion, line crossing' },
    { key: 'Alerts', value: 'Mobile push, email, in-app notifications' },
    { key: 'Battery Life', value: '1–6 months per charge (usage-dependent)' }
  ],

  benefits: [
    'Cable-free installation and flexible placement',
    'Remote access and smart motion alerts via mobile app',
    'Supports SD card, cloud, or wireless NVR recording',
    'Rechargeable battery and solar-powered options',
    'Ideal for both indoor and outdoor surveillance'
  ],

  icon: Wifi
}
,
{
  id: '101',
  slug: 'thermal-cameras',
  name: 'Thermal Cameras',
  category: 'CCTV Cameras',


  shortDescription: 'Thermal imaging cameras that visualize heat signatures for security, industrial, and rescue applications—even in total darkness.',
  longDescription: 'Thermal cameras capture infrared radiation emitted by objects, enabling visualization of temperature variations in complete darkness, smoke, fog, or dust. Using uncooled or cooled sensors, they provide high thermal resolution, wide temperature range detection, and are crucial in surveillance, maintenance diagnostics, wildlife monitoring, and search & rescue. Models often include built-in optical cameras for dual-view display and support USB, Wi-Fi, Ethernet, and PoE connectivity.',

  images: [
    '/Solutions/Surveillance/CCTV/thermal1.png',

  ],

  dataAiHints: [
    'thermal surveillance camera',
    'infrared heat detection camera',
    'night vision thermal imaging',
    'dual view thermal and optical camera',
    'thermal camera for outdoor security'
  ],

  specifications: [
    { key: 'Sensor Type', value: 'Uncooled microbolometer or cooled infrared sensor' },
    { key: 'Thermal Resolution', value: '80×60, 160×120, 320×240, 640×512' },
    { key: 'Temperature Range', value: '-40°C to +550°C' },
    { key: 'Sensitivity (NETD)', value: '≤50 mK' },
    { key: 'Frame Rate', value: '9Hz or 30Hz (export restricted)' },
    { key: 'Field of View', value: '25° – 50°' },
    { key: 'Image Display', value: 'Color palettes (Ironbow, Rainbow, White Hot, etc.)' },
    { key: 'Visual Camera', value: 'Available in dual-lens models for blended image' },
    { key: 'Connectivity', value: 'USB, Wi-Fi, Ethernet, SD card, HDMI, or mobile app' },
    { key: 'Power Supply', value: 'Rechargeable battery or PoE' },
    { key: 'Mounting Options', value: 'Handheld, tripod, or fixed housing' },
    { key: 'Protection Rating', value: 'IP65 / IP67 (for outdoor use)' }
  ],

  benefits: [
    'Detects temperature anomalies in total darkness or smoke',
    'No visible light or IR LED required',
    'Visual + thermal blending for improved analysis',
    'Ideal for security, fire detection, and inspection',
    'Weatherproof options for outdoor deployment'
  ],

  icon: Flame
}
,
{
  id: '102',
  slug: 'fisheye-surveillance-camera',
  name: 'Fisheye Cameras',
  category: 'CCTV Cameras',


  shortDescription: '360° fisheye surveillance cameras for panoramic area coverage with digital dewarping and smart analytics.',
  longDescription: 'Fisheye cameras offer ultra-wide-angle monitoring with a single lens, providing 180° or 360° panoramic views. Ideal for large open areas, they reduce blind spots and eliminate the need for multiple cameras. Built-in dewarping features and smart functions like heatmaps and people counting make these cameras suitable for commercial, retail, and public surveillance applications.',

  images: [
    '/Solutions/Surveillance/CCTV/fish1.png',

  ],

  dataAiHints: [
    '360 degree fisheye surveillance camera',
    'ultra wide angle security camera',
    'dewarping panoramic IP camera',
    'fisheye cctv with heatmap and analytics',
    'retail fisheye security monitoring'
  ],

  specifications: [
    { key: 'Field of View', value: '180° (wall-mounted), 360° (ceiling-mounted)' },
    { key: 'Resolution', value: '5MP, 6MP, 8MP, 12MP' },
    { key: 'Lens Type', value: 'Fixed fisheye (1.05mm to 1.8mm)' },
    { key: 'Image Modes', value: 'Full-view, panoramic, quad-view, ePTZ' },
    { key: 'Dewarping Support', value: 'VMS, NVR, browser, or app' },
    { key: 'IR/Night Vision', value: 'Yes, 10m–30m IR range' },
    { key: 'Audio', value: 'Optional 2-way audio' },
    { key: 'Power', value: 'PoE or 12V DC' },
    { key: 'Smart Features', value: 'Motion detection, heatmap, people counting, line crossing' },
    { key: 'Storage', value: 'microSD (up to 256GB), NVR, or cloud' },
    { key: 'Installation', value: 'Ceiling, wall, or corner mount' },
    { key: 'Durability', value: 'IP66 weatherproof, IK10 vandal-proof' },
    { key: 'Integration', value: 'ONVIF compatible' }
  ],

  benefits: [
    '360° view with one camera—eliminates blind spots',
    'Digital dewarping for clearer, usable footage',
    'Reduces number of cameras needed per location',
    'Ideal for malls, offices, banks, and open areas',
    'Smart analytics like people counting and heatmaps'
  ],

  icon: Camera
},





  {
    id: '5',
    slug: 'mx-1080p-indoor-camera',
    name: 'MX 1080p Indoor Security Camera',
    category: 'CCTV Cameras',
    shortDescription: '360° indoor surveillance camera with two-way audio and ONVIF support.',
    longDescription: 'The MX 1080p Indoor Security Camera features a 360-degree fisheye lens for full-room coverage, two-way audio for real-time communication, and night vision for around-the-clock monitoring. With plug-and-play setup and ONVIF compatibility, it’s ideal for smart indoor security.',
    images: [
      '/Solutions/Surveillance/CCTV/imageindoor_mx_1080p_1.png',
      '/Solutions/Surveillance/CCTV/imageindoor_mx_1080p_2.png',
      '/Solutions/Surveillance/CCTV/imageindoor_mx_1080p_3.png',
      '/Solutions/Surveillance/CCTV/imageindoor_mx_1080p_1.png'


    ],
    dataAiHints: ['mx indoor camera', 'fisheye security cam', '2 way audio cctv'],
    specifications: [
      { key: 'Resolution', value: '1080p Full HD with 1/3" CMOS Sensor' },
      { key: 'Lens', value: '360° Wide-Angle Fisheye Lens' },
      { key: 'Audio', value: 'Built-in Two-Way Audio' },
      { key: 'Connectivity', value: 'Wired (Ethernet), ONVIF Compatible' },
      { key: 'Mounting', value: 'Embedded – Indoor Use Only' },
      { key: 'Night Vision', value: 'Digital Zoom with Night Monitoring' }
    ],
    benefits: [
      'Covers entire room with a single camera',
      'Communicate live through two-way audio',
      'High-definition recording in all lighting',
      'Easy to set up – plug and play',
      'Remote monitoring via mobile app'
    ],
    icon: Video,
  },
  {
    id: '6',
    slug: 'hikvision-indoor-outdoor-camera',
    name: 'HIKVISION Indoor/Outdoor Night Vision Camera',
    category: 'CCTV Cameras',
    shortDescription: 'Wireless night vision camera suitable for both indoor and outdoor use.',
    longDescription: 'The HIKVISION Indoor/Outdoor Camera offers flexible security coverage with high-quality imaging and built-in night vision. Its weather-resistant design ensures durability, while remote access via mobile app allows for seamless monitoring from anywhere.',
    images: [
      '/Solutions/Surveillance/CCTV/speed_dome.png',
      '/Solutions/Surveillance/CCTV/speed_dome2.png',
      '/Solutions/Surveillance/CCTV/speed_dome3.png',

    ],
    dataAiHints: ['hikvision night camera', 'indoor outdoor wireless cctv', 'hikvision mobile view'],
    specifications: [
      { key: 'Resolution', value: 'High-Quality Image Sensor' },
      { key: 'Night Vision', value: 'Infrared (IR) for Low-Light Monitoring' },
      { key: 'Usage', value: 'Indoor & Outdoor' },
      { key: 'Connectivity', value: 'Wireless, AC Powered' },
      { key: 'Remote Access', value: 'Mobile App Compatible' },
      { key: 'Build Quality', value: 'Weather-Resistant Construction' }
    ],
    benefits: [
      'Versatile installation indoors or outdoors',
      'Clear night-time footage with IR night vision',
      'Access live feed remotely from mobile devices',
      'Durable weather-resistant body for harsh environments',
      'Sharp and crisp video output for effective surveillance'
    ],
    icon: Video,
  },
  {
    id: '7',
    slug: 'trueview-4mp-smart-dual-lens-camera',
    name: 'Trueview 4MP Smart Dual Lens 4G Pan/Tilt Camera',
    category: 'CCTV Cameras',
    shortDescription: 'Dual-lens 4MP smart surveillance camera with pan/tilt, color vision, and motion tracking.',
    longDescription: 'The Trueview 4MP Smart Dual Lens Camera offers intelligent, full-color surveillance with 4G support, motion tracking, and pan/tilt control. Its dual lenses allow wide-angle and zoomed-in views, while features like strobe siren, two-way audio, and real-time alerts make it ideal for both indoor and outdoor monitoring, including homes, farms, and pet security.',
    images: [
      '/Solutions/Surveillance/CCTV/ptz.png',
      '/Solutions/Surveillance/CCTV/ptz3.png',
      '/Solutions/Surveillance/CCTV/ptz2.png'

    ],
    dataAiHints: ['trueview pan tilt camera', '4g dual lens surveillance', 'all time color security cam'],
    specifications: [
      { key: 'Lenses', value: 'Dual Lens: 2.8mm + 12mm for Wide & Zoom View' },
      { key: 'Coverage', value: 'Pan 350°, Tilt 90° with 10 Preset Points' },
      { key: 'Vision', value: 'All-Time-Color Vision with IR Night Mode' },
      { key: 'Motion Detection', value: 'Humanoid Detection & Intelligent Motion Tracking' },
      { key: 'Audio', value: '2-Way Audio, Custom Audio Alerts, Mic & Speaker' },
      { key: 'Security Features', value: 'Built-in Strobe Siren, Real-time Notifications via App' }
    ],
    benefits: [
      'Pan/tilt control ensures complete area coverage',
      'Color surveillance even in low-light conditions',
      'Tracks intruders in real-time with smart motion detection',
      'Dual lens allows both wide-angle and zoomed-in views',
      'Full duplex audio for live communication and deterrence',
      'Ideal for home, pet, farm, and outdoor security'
    ],
    icon: Video,
  },
  {
    id: '8',
    slug: 'fluke-thermal-imaging-camera',
    name: 'Fluke Thermal Imaging Camera',
    category: 'CCTV Cameras',
    shortDescription: 'Compact thermal imaging camera with real-time temperature tracking and advanced analysis.',
    longDescription: 'The Fluke Thermal Imaging Camera delivers high-quality 256x192 pixel resolution with a fast 25Hz frame rate, making it ideal for professional thermal diagnostics. With a wide temperature range, adjustable emissivity, and real-time analysis, it provides accurate, reliable data in various environments.',
    images: [
      '/Solutions/Surveillance/CCTV/thermal.png',
      '/Solutions/Surveillance/CCTV/thermal2.png',
      '/Solutions/Surveillance/CCTV/thermal3.png',
      
    ],
    dataAiHints: ['thermal imaging camera', 'fluke temperature sensor', 'infrared thermal cctv'],
    specifications: [
      { key: 'Resolution', value: '256 x 192 Pixels, 25Hz Frame Rate' },
      { key: 'Temperature Range', value: '-10°C to 550°C with ±2% Accuracy' },
      { key: 'Screen Size', value: '1 Inch Display, Real-Time Analysis' },
      { key: 'Thermal Features', value: 'Adjustable Emissivity, High/Low Temp Capture' },
      { key: 'Image Modes', value: '10+ Color Palettes, Custom View Options' },
      { key: 'Software Support', value: 'Mobile App with Spot/Line/Area Analysis' }
    ],
    benefits: [
      'Capture fine thermal details with high pixel resolution',
      'Reliable diagnostics with wide temperature range and accuracy',
      'Real-time video recording and alarm on abnormal temps',
      'Share and analyze results instantly via mobile app',
      'Customizable visuals using multiple color palettes',
      'Compact and lightweight design for easy field use'
    ],
    icon: Video,
  },
  {
    id: '9',
    slug: 'swan-k1-4k-long-range-drone',
    name: 'Swan-K1 4K Long Range Drone',
    category: 'CCTV Cameras',
    shortDescription: '4K camera drone with 60-minute flight time, immersive FPV goggles, and 40km range.',
    longDescription: 'The Swan-K1 is a high-endurance, feature-rich drone equipped with a 4K HEQ camera, FPV goggles, and intelligent flight modes. With up to 60 minutes of flight time and a range of 40km, it’s ideal for aerial photography, exploration, and multiplayer drone experiences. Its VTOL capability and multi-drone networking add unmatched flexibility.',
    images: [
      '/Solutions/Surveillance/CCTV/vtol.png',
      '/Solutions/Surveillance/CCTV/vtol2.png',
      
    ],
    dataAiHints: ['long range drone', 'swan-k1 fpv drone', '4k aerial photography drone'],
    specifications: [
      { key: 'Flight Time', value: 'Up to 60 minutes' },
      { key: 'Camera', value: '4K HEQ 12MP, 1/2.49” CMOS, 3-axis gimbal' },
      { key: 'Range & Speed', value: 'Up to 40km, 10–25 m/s flight speed' },
      { key: 'Flight Tech', value: 'Vertical Takeoff & Landing, Wind Resistance Level 5' },
      { key: 'Image Transmission', value: '1080p up to 8km, 5.8GHz' },
      { key: 'Interactive Features', value: 'Multi-drone networking, FPV Goggles, One-Key Return' }
    ],
    benefits: [
      'Capture high-resolution 4K aerial footage',
      'Enjoy extended flights with up to 60-minute battery life',
      'Fly long distances with up to 40km control range',
      'Seamless immersive flying with HD FPV goggles',
      'Simplified takeoff and return with one-key operations',
      'Coordinate with other drones using multiplayer mode'
    ],
    icon: Video,
  },
  {
    id: '10',
    slug: '2-port-voice-logger',
    name: '2 Port Voice Logger',
    category: 'Voice Logger',
    shortDescription: 'USB-powered device to record two phone lines simultaneously with real-time monitoring.',
    longDescription: 'The 2 Port Voice Logger is a compact and efficient solution for recording audio from two phone lines at once. With real-time call monitoring, distortion-free audio capture, and secure storage, it’s ideal for call centers, offices, and legal compliance use cases. Simple plug-and-play setup via USB ensures quick deployment.',
    images: [
      '/Solutions/Surveillance/VoiceLogger/2port.png',
      '/Solutions/Surveillance/VoiceLogger/2port2.png'
    ],
    dataAiHints: ['2 port call recorder', 'dual line voice logger', 'usb phone recording device'],
    specifications: [
      { key: 'Recording Capacity', value: '2 phone lines simultaneously' },
      { key: 'Audio Quality', value: 'Clear and distortion-free recording' },
      { key: 'Installation', value: 'Plug-and-play via USB' },
      { key: 'Monitoring', value: 'Real-time active call monitoring' },
      { key: 'Storage', value: 'Secure local storage for recordings' }
    ],
    benefits: [
      'Monitor and record two lines at once',
      'High-quality voice capture for accuracy',
      'Quick USB setup without technical hassle',
      'Real-time insights into ongoing calls',
      'Perfect for compliance and call auditing'
    ],
    icon: Video,
  },
  {
    id: '11',
    slug: '4-port-voice-logger',
    name: '4 Port Voice Logger',
    category: 'Voice Logger',
    shortDescription: 'Record and monitor up to 4 phone lines simultaneously with USB plug-and-play setup.',
    longDescription: 'The 4 Port Voice Logger is a powerful solution for businesses needing to record four phone lines at once. It features high-quality audio capture, real-time call monitoring, and secure data storage. With its USB interface and plug-and-play design, it ensures hassle-free installation and reliable performance for compliance, training, or auditing purposes.',
    images: [
      '/Solutions/Surveillance/VoiceLogger/4port.png',
      '/Solutions/Surveillance/VoiceLogger/4port2.png',
      '/Solutions/Surveillance/VoiceLogger/4port3.png',

    ],
    dataAiHints: ['4 line call recorder', 'usb 4 port voice logger', 'multi-line phone audio recorder'],
    specifications: [
      { key: 'Recording Capacity', value: '4 phone lines simultaneously' },
      { key: 'Audio Quality', value: 'Clear and high-fidelity voice recordings' },
      { key: 'Installation', value: 'USB plug-and-play setup' },
      { key: 'Monitoring', value: 'Real-time call monitoring & status tracking' },
      { key: 'Storage', value: 'Secure local data storage with playback access' }
    ],
    benefits: [
      'Capture 4 lines with one device',
      'High-quality recordings for legal/compliance',
      'Simple setup without technical skills',
      'Track call activity live',
      'Efficient storage and retrieval of audio files'
    ],
    icon: Video,
  },
  {
    id: '12',
    slug: '8-port-voice-logger',
    name: '8 Port Voice Logger',
    category: 'Voice Logger',
    shortDescription: 'Simultaneous 8-line call recording with real-time monitoring and secure storage.',
    longDescription: 'The 8 Port Voice Logger is designed for enterprise-level call recording needs, allowing simultaneous recording of up to eight phone lines. With crystal-clear audio capture, real-time call monitoring, and USB plug-and-play connectivity, it is ideal for large-scale operations requiring dependable voice logging for compliance, auditing, or training.',
    images: [
      '/Solutions/Surveillance/VoiceLogger/8port.png',
      '/Solutions/Surveillance/VoiceLogger/8port2.png',
      '/Solutions/Surveillance/VoiceLogger/8port3.png',

    ],
    dataAiHints: ['8 line voice logger', 'usb multi-line call recorder', 'high-capacity phone recorder'],
    specifications: [
      { key: 'Recording Capacity', value: '8 phone lines simultaneously' },
      { key: 'Audio Quality', value: 'Crystal-clear voice recordings' },
      { key: 'Installation', value: 'USB plug-and-play connectivity' },
      { key: 'Monitoring', value: 'Real-time call monitoring and analysis' },
      { key: 'Storage', value: 'Secure and searchable audio storage' }
    ],
    benefits: [
      'Efficient recording of 8 phone lines',
      'Enterprise-grade audio quality',
      'Quick and easy setup via USB',
      'Live monitoring with analysis support',
      'Easy retrieval and playback of recordings'
    ],
    icon: Video,
  },
  
  {
    id: '13',
    slug: 'intel-ai-accelerated-hpc',
    name: 'AI-Accelerated HPC Solutions',
    category: 'HPC',
    shortDescription: 'Accelerate scientific discovery with AI-powered high-performance computing solutions from Intel.',
    longDescription: 'Intel’s AI-accelerated HPC solutions empower organizations to tackle the world’s toughest problems by combining high-performance computing with advanced AI capabilities. With support for exascale computing, high-bandwidth memory, and next-gen accelerators, these systems enable faster insights, deeper analytics, and increased efficiency in modeling, simulation, and AI workloads. Ideal for research, weather prediction, fusion modeling, and complex analytics, Intel’s HPC technologies are trusted by global institutions like ALCF, TACC, and SMN.',
    images: [
      '/Solutions/Surveillance/HPC/image.png',
    ],
    dataAiHints: ['AI-HPC solutions', 'Intel HPC accelerators', 'scientific computing', 'exascale computing', 'high-performance AI infrastructure'],
    specifications: [
      { key: 'CPU Architecture', value: 'Intel® Xeon® Scalable & Max Series processors' },
      { key: 'AI Accelerators', value: 'Intel® Gaudi® AI accelerators, Intel® Data Center GPU Max Series' },
      { key: 'Memory Bandwidth', value: 'High-bandwidth memory (HBM) enabled' },
      { key: 'Software Toolkits', value: 'Intel® oneAPI Base, HPC, and AI Analytics Toolkits' },
      { key: 'Use Cases', value: 'Scientific computing, fusion modeling, fluid dynamics, weather prediction, drug discovery' },
      { key: 'Performance Boost', value: 'Up to 4.8x faster for memory-bound HPC workloads with Xeon Max CPUs' }
    ],
    benefits: [
      'Faster insights and reduced time-to-value for scientific workloads',
      'Robust AI integration for deeper analysis and accurate modeling',
      'Open, cross-architecture software development with oneAPI',
      'Scalable, sustainable performance for large-scale environments',
      'Trusted by leading research institutions and supercomputing centers'
    ],
    icon: Cpu,
  },
  
  {
    id: '14',
    slug: 'safepro-abc-fire-extinguisher-4kg',
    name: 'Safe Pro ABC Type Fire Extinguisher (Red, 4 Kg)',
    category: 'Fire Extinguisher',
    shortDescription: 'Multipurpose ABC Powder Fire Extinguisher with 5-Year Warranty – Ideal for Homes, Offices & Vehicles.',
    longDescription: 'The Safe Pro ABC Type Fire Extinguisher (4 Kg) is a multipurpose fire safety device ideal for tackling Class A, B, and C fires involving solids, flammable liquids, and gases. It uses ABC dry powder in a stored pressure format and requires no maintenance. Certified with ISO and CE standards, it includes a wall clamp, hose pipe, and safety ring. A clear instruction label ensures easy usage in emergencies. Perfect for homes, offices, shops, or industrial setups.',
    images: [
      '/Solutions/FireSafety/Extinguisher/4kg.png',
      '/Solutions/FireSafety/Extinguisher/4kg2.png',
    ],
    dataAiHints: ['4kg abc fire extinguisher', 'safe pro fire safety', 'no maintenance fire extinguisher', 'multipurpose fire extinguisher', 'home fire extinguisher'],
    specifications: [
      { key: 'Type', value: 'ABC Powder (Stored Pressure)' },
      { key: 'Weight', value: '4 Kg (5.6 Kg with packaging)' },
      { key: 'Certification', value: 'ISO & CE Certified' },
      { key: 'Warranty', value: '5 Years' },
      { key: 'Country of Origin', value: 'India' },
      { key: 'Dimensions', value: '50.01 x 10.01 x 10.01 cm' },
      { key: 'Included Components', value: 'Wall Clamp, Hose Pipe, Safety Ring' }
    ],
    benefits: [
      'Multipurpose use for Class A, B, and C fires',
      'No maintenance required throughout the lifespan',
      'Clear instruction label for easy emergency handling',
      'ISO and CE certified for quality assurance',
      'Long 5-year warranty for extended protection'
    ],
    icon: ShieldCheck,
  },  
  {
    id: '15',
    slug: 'afo-auto-fire-off-ball-3kg',
    name: 'AFO (Auto Fire Off) Fire Extinguisher Ball – 3 Kg',
    category: 'Fire Extinguisher',
    shortDescription: 'Self-activating fire extinguisher ball with 360° coverage and 5-year no-maintenance shelf life – Safe, eco-friendly solution for fire emergencies.',
    longDescription: 'The AFO (Auto Fire Off) Fire Extinguisher Ball is a self-activating fire suppression device designed to automatically extinguish flames within 3–5 seconds upon contact with fire. Covering a 360° radius (140–160 sq. ft), it is effective against Class A, B, and E fires involving solids, liquids, and electrical equipment. Compact and lightweight with a 210mm diameter, it requires no maintenance for 5 years and is 100% eco-friendly and biodegradable. Includes a case and wall-mount bracket. Emits a loud 101dB alarm when triggered, making it ideal for homes, kitchens, cars, factories, and warehouses.',
    images: [
      '/Solutions/FireSafety/Extinguisher/ball.png',
      '/Solutions/FireSafety/Extinguisher/ball2.png',
      '/Solutions/FireSafety/Extinguisher/ball3.png',

    ],
    dataAiHints: ['fire extinguisher ball', 'auto fire off ball', '3kg afo ball', 'self-activating fire extinguisher', 'eco-friendly fire safety device'],
    specifications: [
      { key: 'Type', value: 'Auto Fire Off Ball (Self-Activating)' },
      { key: 'Weight', value: '3 Kg' },
      { key: 'Diameter', value: '210 mm' },
      { key: 'Coverage Area', value: '140–160 sq. ft. (360° angle)' },
      { key: 'Activation Time', value: '3–5 seconds' },
      { key: 'Alarm Sound', value: '101 dB upon activation' },
      { key: 'Shelf Life', value: '5 Years (No Maintenance Required)' },
      { key: 'Material', value: 'Environmental Harmless Dry Powder' },
      { key: 'Certifications', value: 'Certified, Trademarked, Patented – Made in India' },
      { key: 'Manufacturer', value: 'Puniya Consultants' },
      { key: 'Country of Origin', value: 'India' },
      { key: 'Dimensions', value: '25 x 25 x 25 cm' },
      { key: 'Included Components', value: 'Case, Wall Mount Bracket' }
    ],
    benefits: [
      'Self-activates within seconds of detecting fire',
      '360-degree coverage for larger area protection',
      'No maintenance needed for 5 years',
      'Eco-friendly and biodegradable materials',
      'Emits loud alarm for quick alert during emergencies',
      'Safe to use – no wiring, no close contact with fire required',
      'Ideal for homes, cars, warehouses, factories, and electrical cabinets'
    ],
    icon: ShieldCheck
  },  
  {
    id: '16',
    slug: 'eco-fire-co2-extinguisher-4-5kg',
    name: 'ECO FIRE CO₂ Fire Extinguisher – 4.5 Kg',
    category: 'Fire Extinguisher',
    shortDescription: 'Carbon Dioxide (CO₂) Fire Extinguisher ideal for electrical fires – 4.5 Kg, ISI & CE certified, no residue, safe on sensitive equipment.',
    longDescription: 'The ECO FIRE CO₂ Fire Extinguisher (4.5 Kg) is a highly effective, residue-free solution ideal for combating electrical fires. Filled with carbon dioxide in liquid form, it transforms into gas upon discharge, smothering flames without damaging sensitive equipment. ISI, ISO, BIS, and CE-certified, it ensures safety, compliance, and ease of use. This extinguisher is perfect for office spaces, server rooms, laboratories, and other areas with electrical installations. Comes with a wall hook and discharge pipe for quick access during emergencies.',
    images: [
      '/Solutions/FireSafety/Extinguisher/6kg.png',
      '/Solutions/FireSafety/Extinguisher/6kg2.png'
    ],
    dataAiHints: ['co2 fire extinguisher', 'carbon dioxide fire safety', 'electrical fire extinguisher', 'eco fire co2 4.5kg', 'no residue fire extinguisher'],
    specifications: [
      { key: 'Type', value: 'Carbon Dioxide (CO₂)' },
      { key: 'Weight', value: '4.5 Kg (12 Kg with packaging)' },
      { key: 'Certification', value: 'ISI, ISO, BIS & CE Certified' },
      { key: 'Application', value: 'Ideal for electrical fires' },
      { key: 'Safe for', value: 'Sensitive electronic equipment' },
      { key: 'Usage', value: 'Offices, Server Rooms, Labs, Control Panels' },
      { key: 'Included Components', value: 'Fire Extinguisher, Wall Hook, Discharge Pipe' },
      { key: 'Dimensions', value: '68.6 x 10.2 x 68.6 cm' },
      { key: 'Manufacturer', value: 'ECO FIRE' },
      { key: 'Country of Origin', value: 'India' }
    ],
    benefits: [
      'Effective against Class B and E (electrical) fires',
      'Leaves no residue – safe for electronic equipment',
      'Transforms from liquid to gas for efficient smothering',
      'Clear instruction label for user guidance',
      'ISI, ISO, BIS & CE certifications ensure reliability',
      'Requires minimal maintenance'
    ],
    icon: ShieldCheck
  },  
  {
    id: '17',
    slug: 'ananda-fire-hydrant-system',
    name: 'ANANDA Fire Hydrant System',
category: 'Fire Hydrant System',
    shortDescription: 'Industrial-grade Fire Hydrant System – MS Body, BIS Certified, Rust Proof & Durable. Ideal for outdoor & indoor fire safety infrastructure.',
    longDescription: 'The ANANDA Fire Hydrant System is a robust and high-performance fire safety solution designed for industrial and commercial applications. Manufactured using high-grade mild steel (MS) and coated in fire-resistant red, this BIS Certified unit ensures long-term durability and rust resistance. With easy operation and double outlet support, it is suitable for both indoor and outdoor setups. The hydrant system is trusted across India for its build quality and is supplied by ANANDA FIRE INDUSTRIES – a leading fire protection equipment manufacturer. Comes with a fixed price, no return policy, and fast delivery within 10 days.',
    images: [
      '/Solutions/FireSafety/Hydrant/image1.png'
    ],
    dataAiHints: ['fire hydrant system', 'industrial fire protection', 'ananda fire hydrant', 'double outlet fire hydrant', 'rust-proof fire hydrant'],
    specifications: [
      { key: 'Material', value: 'MS (Mild Steel)' },
      { key: 'Product Type', value: 'Fire Hydrant System' },
      { key: 'Application', value: 'Industrial Fire Safety' },
      { key: 'Color', value: 'Red' },
      { key: 'Type', value: 'Indoor & Outdoor Fire Hydrant (Double Outlet)' },
      { key: 'Shape', value: 'Round' },
      { key: 'Condition', value: 'New' },
      { key: 'Certifications', value: 'BIS Certified' },
      { key: 'MOQ', value: '1 Unit' },
      { key: 'Delivery Time', value: '10 Days' },
      { key: 'Returnable', value: 'No' },
      { key: 'Currency', value: 'INR' },
      { key: 'Price', value: '₹90,000.00 (Approx.)' },
      { key: 'Payment Terms', value: 'T/T, Western Union, PayPal, Sight L/C, Others' },
      { key: 'Stock Quantity', value: '10 Units' },
      { key: 'GSTIN', value: '0%' },
      { key: 'Brand Name', value: 'ANANDA FIRE INDUSTRIES' },
      { key: 'Country of Origin', value: 'India' }
    ],
    benefits: [
      'BIS Certified for quality assurance',
      'Highly durable MS construction',
      'Rust-proof design for long-term use',
      'Easy to operate during emergencies',
      'Fast delivery across India',
      'Reliable for industrial fire protection setups'
    ],
    icon: ShieldCheck
  },
  {
    id: '18',
    slug: 'indusroof-ci-fire-hydrant-valve',
    name: 'Indusroof CI Fire Hydrant Valve (65mm)',
    category: 'Fire Hydrant System',
    shortDescription: 'Cast Iron Fire Hydrant Valve – 65mm, Hand Wheel Operated, Durable CI Construction. Ideal for industrial & commercial fire protection.',
    longDescription: 'The Indusroof Cast Iron Fire Hydrant Valve is a sturdy and reliable fire safety component designed for industrial-grade fire protection systems. Built using high-quality cast iron, this valve features a 65mm (2 1/2 inch) diameter and a hand wheel-operated mechanism for easy control during emergencies. It is categorized under fire hydrant valves and manufactured to ensure optimal performance and durability in high-risk fire-prone areas. Suitable for factories, warehouses, and large infrastructure setups requiring dependable fire safety control.',
    images: [   
         '/Solutions/FireSafety/Hydrant/image2.png',

    ],
    dataAiHints: ['cast iron hydrant valve', 'fire hydrant valve 65mm', 'indusroof fire valve', 'ci fire valve', 'manual fire hydrant valve'],
    specifications: [
      { key: 'Product Type', value: 'Fire Hydrant Valve' },
      { key: 'Body Material (MOC)', value: 'Cast Iron (CI)' },
      { key: 'Operator', value: 'Hand Wheel Operated' },
      { key: 'Size', value: '65mm (2 1/2 inch)' },
      { key: 'Brand', value: 'Indusroof' },
      { key: 'Department', value: 'Valves' },
      { key: 'Sub Category', value: 'CI Fire Hydrant Valve' },
      { key: 'Price', value: '₹7,000.00' },
      { key: 'Country of Origin', value: 'India' }
    ],
    benefits: [
      'Durable cast iron construction for longevity',
      '65mm standard size fits most industrial systems',
      'Hand wheel operation for easy manual control',
      'Ideal for both commercial and industrial applications',
      'Reliable pressure handling during fire emergencies'
    ],
    icon: ShieldCheck
  },
  {
    id: '19',
    slug: 'quantic-outdoor-fire-hydrant-system',
    name: 'Quantic Outdoor Fire Hydrant System (Cast Iron, Red)',
    category: 'Fire Hydrant System',
    shortDescription: 'Manual Outdoor Fire Hydrant System – Cast Iron Build, Rust Proof, Ideal for Industrial and Commercial Applications.',
    longDescription: 'The Quantic Safety Solutions Outdoor Fire Hydrant System is a manually operated, rust-proof fire hydrant system crafted from durable cast iron. Designed for industrial, hospital, warehouse, and commercial office use, it is suitable for temperatures ranging from -5°C to 60°C. With its red finish and robust construction, this system ensures effective fire safety response in outdoor settings. Manufactured in India, it provides dependable operation and is delivered with standard packaging within one week.',
    images: [
      '/Solutions/FireSafety/Hydrant/image3.png',

    ],
    dataAiHints: ['outdoor fire hydrant system', 'quantic safety hydrant', 'cast iron hydrant system', 'manual fire safety hydrant', 'rust proof fire hydrant'],
    specifications: [
      { key: 'Product Type', value: 'Outdoor Fire Hydrant System' },
      { key: 'Material', value: 'Cast Iron' },
      { key: 'Color', value: 'Red' },
      { key: 'Automation Grade', value: 'Manual' },
      { key: 'Temperature Range', value: '-5°C to 60°C' },
      { key: 'Rust Proof', value: 'Yes' },
      { key: 'Brand', value: 'Quantic Safety Solutions' },
      { key: 'Application', value: 'Hospital, Office, Warehouse, Industrial' },
      { key: 'Price', value: '₹15,000.00' },
      { key: 'Country of Origin', value: 'India' }
    ],
    benefits: [
      'Manual operation for reliable control during fire emergencies',
      'Rust-proof cast iron construction ensures long-lasting use',
      'Suitable for extreme temperatures ranging from -5°C to 60°C',
      'Ideal for various commercial and industrial environments',
      'Quick delivery and easy installation across India'
    ],
    icon: ShieldCheck
  },
  {
    id: '20',
    slug: 'solitech-industrial-fire-hydrant-system',
    name: 'Solitech Fire Hydrant System (Mild Steel, Industrial Use)',
    category: 'Fire Hydrant System',
    shortDescription: 'Heavy-duty Industrial Fire Hydrant System made of Mild Steel – Robust, Reliable, and Ideal for Large-Scale Installations.',
    longDescription: 'The Solitech Industrial Fire Hydrant System is engineered for high-performance fire safety in industrial environments. Constructed from durable mild steel, this fire hydrant system is designed for long-term reliability and effectiveness. It is ideal for factories, warehouses, and large-scale industrial operations. With a 7-day delivery timeline and wide availability across India, it ensures readiness for critical fire safety infrastructure needs. Proudly made in India and offered at a fixed price, this unit does not require return or replacement.',
    images: [
      '/Solutions/FireSafety/Hydrant/image4.png',
      
    ],
    dataAiHints: ['industrial fire hydrant system', 'solitech fire safety', 'mild steel fire hydrant', 'large-scale fire hydrant system', 'factory fire protection'],
    specifications: [
      { key: 'Product Type', value: 'Fire Hydrant System' },
      { key: 'Material', value: 'Mild Steel' },
      { key: 'Usage', value: 'Industrial' },
      { key: 'Application', value: 'Industrial' },
      { key: 'Brand', value: 'Solitech' },
      { key: 'Price', value: '₹3,00,000.00' },
      { key: 'Delivery Time', value: '7 Days' },
      { key: 'Country of Origin', value: 'India' },
      { key: 'Returnable', value: 'No' },
      { key: 'GSTIN', value: '0%' }
    ],
    benefits: [
      'Heavy-duty construction using premium mild steel',
      'Tailored for industrial-scale fire safety applications',
      'Delivered within 7 days for quick deployment',
      'Fixed pricing ensures transparent procurement',
      'Trusted performance across India’s industrial sectors'
    ],
    icon: ShieldCheck
  },  
  {
    id: '21',
    slug: 'parmar-fire-alarm-hooter-flasher-24v',
    name: 'Parmar Fire Alarm Hooter with Flasher (24V, Wall Mounted)',
    category: 'Fire Alarm System',
    shortDescription: 'Wall-mounted 24V Fire Alarm Hooter with LED Flasher – Loud Siren with Flashing Light for Immediate Fire Alerts.',
    longDescription: 'The Parmar Enterprises Fire Alarm Hooter with Flasher is a 24V wall-mounted device ideal for conventional fire alarm systems. Made from durable plastic and stainless steel in a red finish, it features a flashing LED strobe light and a loud siren for clear emergency alerts. Designed for DC power systems, it emits both high-decibel sound and bright flashes to signal fire emergencies effectively. Perfect for use in residential, commercial, or industrial settings requiring quick and clear fire alerts.',
    images: [
      '/Solutions/FireSafety/Alarm/image1.png',
      '/Solutions/FireSafety/Alarm/image2.png',
      '/Solutions/FireSafety/Alarm/image3.png',
    ],
    dataAiHints: ['fire alarm hooter flasher', '24v fire alarm device', 'parmar fire safety device', 'strobe hooter fire alarm', 'wall mount fire siren'],
    specifications: [
      { key: 'Mounting Type', value: 'Wall Mount' },
      { key: 'Power Source', value: 'DC Power' },
      { key: 'Voltage', value: '24 Volts' },
      { key: 'Control Method', value: 'Touch' },
      { key: 'Material', value: 'Plastic Stainless Steel' },
      { key: 'Color', value: 'Red' },
      { key: 'Brand', value: 'Parmar Enterprises' },
      { key: 'Country of Origin', value: 'India' },
      { key: 'Dimensions', value: '13 x 8 x 21 cm' }
    ],
    benefits: [
      'Flashing LED strobe with loud siren for immediate fire alerts',
      '24V compatibility with conventional fire alarm systems',
      'Durable construction with stainless steel and plastic body',
      'Compact design for wall mounting',
      'Ideal for homes, offices, and industrial spaces'
    ],
    icon: ShieldCheck
  },
  {
    id: '22',
    slug: 'fst-compact-fire-alarm-siren',
    name: 'FST Compact Fire Alarm Siren – Multi-Coloured',
    category: 'Fire Alarm System',
    shortDescription: 'Compact and Loud Industrial Fire Alarm Siren with Visual Alert – Suitable for Schools, Refineries, and Dams.',
    longDescription: 'The FST Compact Fire Alarm Siren is a robust and high-decibel safety device suitable for industrial and commercial setups. Designed for extreme sound output and visual alert, this multi-coloured siren is ideal for industries, schools, refineries, dams, and other high-risk areas. Its compact and proven design ensures durability and efficient performance during emergencies.',
    images: [
      '/Solutions/FireSafety/Alarm/image21.png',
      '/Solutions/FireSafety/Alarm/image21.png',
      '/Solutions/FireSafety/Alarm/image21.png',

    ],
    dataAiHints: ['compact fire alarm siren', 'fst fire safety device', 'loud fire alarm industrial', 'multi-coloured fire siren', 'school fire alert system'],
    specifications: [
      { key: 'Brand', value: 'FST' },
      { key: 'Style', value: 'Compact' },
      { key: 'Color', value: 'Multi-Coloured' },
      { key: 'Alarm Type', value: 'Visual and Audible' },
      { key: 'Number of Items', value: '1' },
      { key: 'Country of Origin', value: 'India' },
      { key: 'Model Number', value: 'FST_04' }
    ],
    benefits: [
      'Extremely loud sound ensures high-alert visibility',
      'Ideal for critical areas like schools, refineries, and dams',
      'Compact design for easy installation',
      'Durable and proven in industrial environments',
      'Provides both visual and audio alarms'
    ],
    icon: ShieldCheck
  },  
  {
    id: '23',
    slug: 't3-conventional-fire-alarm-system',
    name: 'T3 Enterprise Conventional Fire Alarm System',
    category: 'Fire Alarm System',
    shortDescription: 'Automatic Conventional Fire Alarm System with Control Panel – Ideal for Offices, Residences & Malls.',
    longDescription: 'The T3 Enterprise Conventional Fire Alarm System is a high-quality automatic fire detection and alert solution. Designed with a robust MS body, it features a fire alarm control panel suitable for offices, residences, and shopping malls. The system delivers reliable performance with visual and audio alerts. Available in a white and red design, it ensures safety across various infrastructures and complies with key safety standards. Comes with a durable packaging and supports pan-India shipping.',
    images: [      
      '/Solutions/FireSafety/Alarm/image31.png',

    ],
    dataAiHints: ['fire alarm control panel', 'conventional fire alarm system', 't3 enterprise fire safety', 'office fire alarm system', 'shopping mall fire detection'],
    specifications: [
      { key: 'Brand', value: 'T3 Enterprise' },
      { key: 'System Type', value: 'Conventional Fire Alarm System' },
      { key: 'Material', value: 'MS Body' },
      { key: 'Color', value: 'White, Red and White' },
      { key: 'Weight', value: '12 kg (Net), 25 kg (Gross)' },
      { key: 'Automation Grade', value: 'Auto' },
      { key: 'Alarm', value: 'Yes' },
      { key: 'Application', value: 'Office, Residential, Shopping Mall' },
      { key: 'Country of Origin', value: 'India' },
      { key: 'Package Dimensions (inches)', value: '24 x 18 x 6' },
      { key: 'GST', value: '18%' }
    ],
    benefits: [
      'Automated alarm detection for fire safety',
      'Durable MS body for long-term reliability',
      'Includes control panel for centralized monitoring',
      'Ideal for multiple applications – offices, homes, malls',
      'Available with pan-India supply and support'
    ],
 
  },





  // --- Access Control ---
  {
  id: '24',
  slug: 'team-office-biometric-attendance-device',
  name: 'Team Office Biometric Attendance Device (Wi-Fi, Fingerprint, Card)',
  category: 'Attendance System',
  shortDescription: 'Cloud-based attendance device with fingerprint, card, and Wi-Fi support, ideal for offices and memberships.',
  longDescription: 'The Team Office Biometric Attendance Device offers seamless attendance management using fingerprints, cards, and passwords. With a large capacity to store 3000 users and 1,00,000 transactions, it supports communication via USB, TCP/IP, and Wi-Fi. A 2.4" TFT color display ensures easy usability. It includes professional access control features for restricted access and is ideal for use in gyms, clubs, and office environments. Compatible with cloud-based software and mobile apps for remote attendance tracking.',
  images: [
    
    '/Solutions/Access Control/1st_part/finger.png',
    '/Solutions/Access Control/1st_part/finger12.png',
    '/Solutions/Access Control/1st_part/finger13.png',

  ],
  dataAiHints: [
    'biometric attendance system',
    'wifi fingerprint device',
    'cloud attendance system',
    'gym access control',
    'team office attendance device'
  ],
  specifications: [
    { key: 'User Capacity', value: '3000 Fingerprints/Cards/Passwords' },
    { key: 'Transaction Capacity', value: '1,00,000 logs' },
    { key: 'Display', value: '2.4 inch TFT Color Display' },
    { key: 'Connectivity', value: 'USB, TCP/IP, Wi-Fi' },
    { key: 'Access Control', value: 'Supports time-limited access control' },
    { key: 'Software Support', value: 'Cloud-based with Mobile App' },
    { key: 'Color', value: 'Black' },
    { key: 'Battery', value: 'Built-in for power backup' },
    { key: 'Ideal For', value: 'Offices, Gyms, Clubs, Membership-Based Services' }
  ],
  benefits: [
    'Supports fingerprint, card, and password authentication',
    'Real-time attendance tracking via mobile app',
    'Multiple connectivity options including Wi-Fi',
    'Large user and transaction capacity',
    'Professional access control system for door authorization'
  ],
  icon: Fingerprint
},
{
  id: '25',
  slug: 'essl-k90-pro-biometric-attendance',
  name: 'eSSL K90 Pro Biometric Time Attendance Machine',  
  category: 'Attendance System',

  shortDescription: 'Fingerprint, Card, and PIN-based attendance machine with inbuilt battery and access control features.',
  longDescription: 'The eSSL K90 Pro is a compact and reliable biometric attendance machine that supports fingerprint, card, and PIN-based verification. It comes with a built-in battery offering up to 2 hours of backup, making it ideal for uninterrupted operation. The system supports access control integrations such as EM locks, bolt locks, and exit switches. With a user capacity of 800, it is suitable for small to mid-sized organizations. Its sleek black design and compact build make it easy to install in any environment.',
  images: [
    '/Solutions/Access Control/1st_part/finger20.png',
    '/Solutions/Access Control/1st_part/finger21.png',
    '/Solutions/Access Control/1st_part/finger22.png',
  ],
  dataAiHints: [
    'essl k90 attendance machine',
    'biometric time attendance system',
    'fingerprint and card attendance device',
    'office access control system',
    'battery backup attendance machine'
  ],
  specifications: [
    { key: 'Verification Mode', value: 'Fingerprint / Card / PIN' },
    { key: 'User Capacity', value: '800 Users' },
    { key: 'Access Control Support', value: 'EM Lock, Exit Switch, Bolt Lock' },
    { key: 'Battery Backup', value: 'Inbuilt, Up to 2 Hours' },
    { key: 'Size', value: '185 x 140 x 30 mm' },
    { key: 'Weight', value: '500 g' },
    { key: 'Color', value: 'Black' },
    { key: 'Brand', value: 'eSSL' },
    { key: 'Model Number', value: 'Identix K90 Pro' }
  ],
  benefits: [
    'Multiple verification options: Finger, Card, and PIN',
    'Reliable battery backup ensures operation during power loss',
    'Supports integration with access control hardware',
    'Compact and modern design suitable for small spaces',
    'Trusted brand in biometric attendance systems'
  ],
  icon: Fingerprint
},
{
  id: '26',
  slug: 'zkteco-lx50-biometric-attendance',
  name: 'ZKTeco LX50 Biometric Fingerprint Time Attendance Clock',
  category: 'Attendance System',

  shortDescription: 'Compact fingerprint attendance recorder with built-in SSR Excel software and 500-user capacity.',
  longDescription: 'The ZKTeco LX50 is a biometric fingerprint time attendance device designed for small to medium-sized businesses. It supports up to 500 users and features built-in SSR Excel software for seamless attendance reporting—no monthly fees or external software required. Its sleek silver design makes it a modern addition to any workspace. Ideal for employee check-in/out management, this device offers easy setup and reliable fingerprint recognition.',
  images: [
    '/Solutions/Access Control/1st_part/finger30.png',
    '/Solutions/Access Control/1st_part/finger31.png',
    '/Solutions/Access Control/1st_part/finger32.png',
    '/Solutions/Access Control/1st_part/finger33.png',

  ],
  dataAiHints: [
    'zkteco lx50 attendance machine',
    'fingerprint check-in system',
    'employee time tracking device',
    'biometric attendance no monthly fee',
    'compact fingerprint recorder'
  ],
  specifications: [
    { key: 'Verification Mode', value: 'Fingerprint' },
    { key: 'User Capacity', value: '500 Users' },
    { key: 'Software', value: 'Built-in SSR Excel Software' },
    { key: 'Color', value: 'Silver' },
    { key: 'Connectivity', value: 'USB' },
    { key: 'Power Source', value: 'DC Adapter (Plug-in)' },
    { key: 'Monthly Fees', value: 'None' },
    { key: 'Display', value: 'LCD Display' }
  ],
  benefits: [
    'Easy setup with built-in software',
    'No monthly fees required for operation',
    'Accurate and fast fingerprint recognition',
    'Compact and sleek design for any office',
    'Ideal for small to medium-sized businesses'
  ],
  icon: Fingerprint
},
{
  id: '27',
  slug: 'access-control-fingerprint-card-reader',
  name: 'Access Control System – Fingerprint & Card Reader',
  category: 'Attendance System',

  shortDescription: 'Biometric and RFID-based Access Control System with 100,000 logs capacity and 80mm read distance.',
  longDescription: 'This Access Control System combines fingerprint and card reader authentication to ensure high-level security across corporate offices, government buildings, gates, elevators, and more. With a logging capacity of 100,000 entries and an 80mm read distance, it offers quick access and precise data capture. Operating on 13.56 MHz frequency with 12V DC power input, it is robust, reliable, and easily integrable with attendance tracking systems. Designed for durability, it meets the security needs of modern infrastructures at an affordable cost.',
  images: [
    '/Solutions/Access Control/1st_part/card.png',
    '/Solutions/Access Control/1st_part/card.png',
    '/Solutions/Access Control/1st_part/card.png',


    
  ],
  dataAiHints: [
    'fingerprint card reader system',
    'rfid biometric access device',
    'access control for offices',
    '13.56 MHz reader access system',
    'secure access gate solution'
  ],
  specifications: [
    { key: 'Authentication Type', value: 'Fingerprint, Card Reader' },
    { key: 'Logs Capacity', value: '100,000' },
    { key: 'Read Distance', value: '80 mm' },
    { key: 'Operating Voltage', value: '±12 VDC' },
    { key: 'Operating Current', value: '100 mA' },
    { key: 'Frequency', value: '13.56 MHz' },
    { key: 'Applications', value: 'Doors, Gates, Boom Barriers, Elevators' }
  ],
  benefits: [
    'Supports both fingerprint and RFID card access',
    'Handles up to 100,000 logs for large-scale use',
    'Fast authentication with 80mm read distance',
    'Easily integrates with attendance systems',
    'Reliable performance for corporate and government security'
  ],
  icon: Lock
},
{
  id: '28',
  slug: 'card-access-system-password-protected',
  name: 'Card Access System – Password Protected',
  category: 'Attendance System',

  shortDescription: 'Password protected proximity card access system with 2.5" digital display and USB power.',
  longDescription: 'The Card Access System is a cost-effective, password-protected proximity access solution designed to safeguard physical facilities, assets, and digital resources. Featuring a 2.5-inch digital display and USB-powered operation, it supports Weigand interface for integration. Built using high-quality components and housed in a durable plastic body, it offers robust performance and low maintenance. Ideal for use in offices, commercial premises, and institutional security applications. Customizable to client needs and built under strict quality checks.',
  images: [   
     '/Solutions/Access Control/1st_part/card2.png',
     '/Solutions/Access Control/1st_part/card22.png',
     '/Solutions/Access Control/1st_part/card23.png',


  ],
  dataAiHints: [
    'card access control',
    'password protected proximity system',
    'usb powered card reader',
    'digital display access control',
    'office door card reader'
  ],
  specifications: [
    { key: 'System Type', value: 'Password Protected Access Control' },
    { key: 'Reader Type', value: 'Proximity' },
    { key: 'Fingerprint Sensor', value: '550 DPI' },
    { key: 'Display', value: '2.5 Inch Digital Display' },
    { key: 'Interfaces', value: 'Weigand' },
    { key: 'Power Source', value: 'USB BUS Power' },
    { key: 'Language Support', value: 'English' },
    { key: 'Body Material', value: 'Plastic' },
    { key: 'Country of Origin', value: 'India' }
  ],
  benefits: [
    'Secure password-protected access control',
    'Supports proximity card reading for quick entry',
    'Compact and durable plastic body',
    'USB powered for easy installation',
    'Low maintenance and customizable to client needs'
  ],
  icon: KeyRound
},
{
  id: '29',
  slug: 'essl-door-access-control-biometric',
  name: 'eSSL Door Access Control – Biometric System',
  category: 'Attendance System',

  shortDescription: 'Wall-mounted biometric fingerprint access control system with LCD display for office security.',
  longDescription: 'The eSSL Door Access Control system is a secure and reliable biometric solution designed for office and commercial environments. Featuring a fingerprint access mechanism and broad-spectrum frequency-hopping communication, it provides enhanced security and smooth operation. The system includes an LCD display and supports Weigand interface for integration. With easy wall-mounted installation, it is ideal for professional settings requiring controlled access and real-time monitoring.',
  images: [
    
    '/Solutions/Access Control/1st_part/card30.png',
    '/Solutions/Access Control/1st_part/card32.png',
  ],
  dataAiHints: [
    'essl biometric access control',
    'fingerprint door lock system',
    'office biometric entry',
    'wall-mounted fingerprint access',
    'lcd access control system'
  ],
  specifications: [
    { key: 'System Type', value: 'Biometric Fingerprint Access Control' },
    { key: 'Brand', value: 'eSSL' },
    { key: 'Application', value: 'Office' },
    { key: 'Display Type', value: 'LCD' },
    { key: 'Frequency Mode', value: 'Broad-Spectrum Frequency-Hopping' },
    { key: 'Interfaces', value: 'Weigand' },
    { key: 'Installation Type', value: 'Wall Mounted' },
    { key: 'Country of Origin', value: 'India' },
    { key: 'Price', value: '₹22,500/Piece' }
  ],
  benefits: [
    'Reliable biometric security for office access',
    'Fast fingerprint recognition and authentication',
    'Seamless integration with existing systems',
    'LCD interface for easy operation',
    'Durable and easy to install wall-mounted design'
  ],
  icon: KeyRound
},
{
  id: '30',
  slug: 'zkteco-minita-face-attendance-access',
  name: 'ZKTeco MiniTA Touchless Face Recognition Terminal',
  category: 'Attendance System',

  shortDescription: 'Compact face recognition terminal with WiFi, mobile app, and access control integration — ideal for modern office attendance.',
  longDescription: 'The ZKTeco MiniTA is a compact, touchless face recognition terminal designed for modern office environments. Featuring a 2.8-inch touchscreen and two 2MP WDR cameras, it offers lightning-fast facial recognition under 1 second. With support for WiFi, Ethernet, and mobile apps, it’s compatible with Easy Time Pro, Biotime Cloud 2.0, and ZKBioSecurity. Ideal for attendance tracking and secure access control, it supports up to 800 users and 150,000 transaction logs. Its compact build, robust hardware, and advanced security features make it a perfect fit for professional workplaces.',
  images: [
    '/Solutions/Access Control/1st_part/face.png',
    '/Solutions/Access Control/1st_part/face11.png',
    '/Solutions/Access Control/1st_part/face13.png',


  ],
  dataAiHints: [
    'zkteco face recognition attendance',
    'touchless access control terminal',
    'minita zkteco biometric device',
    'wifi attendance system',
    'facial recognition access control'
  ],
  specifications: [
    { key: 'Display', value: '2.8-inch Touch Screen' },
    { key: 'Face / User Capacity', value: '800' },
    { key: 'Transactions', value: '150,000' },
    { key: 'OS', value: 'Linux' },
    { key: 'Facial Recognition Speed', value: 'Less than 1 second' },
    { key: 'Communication', value: 'WiFi, Ethernet' },
    { key: 'Power Supply', value: '12V / 2A' },
    { key: 'Operating Temperature', value: '0°C to 45°C (10-90% Humidity)' },
    { key: 'Dimensions', value: '10 x 10 x 2.7 cm' },
    { key: 'Supported Softwares', value: 'Easy Time Pro, Biotime Cloud 2.0, ZKBioSecurity' },
    { key: 'Output Ports', value: 'NO, NC, AUX, Exit Button, Door Sensor' },
    { key: 'Hardware Specs', value: '900 MHz Dual-Core CPU, 512MB RAM/Flash, 2x 2MP WDR Cameras' },
    { key: 'Standard Functions', value: 'ADMS, T9 Input, Anti-passback, Tamper Alarm, Access Groups' }
  ],
  benefits: [
    'Touchless and hygienic face recognition system',
    'Lightning-fast identification in under 1 second',
    'Supports access control and attendance tracking',
    'WiFi connectivity for easy cloud-based integration',
    'Compact and modern design suitable for any office'
  ],
  icon: KeyRound
},
{
  id: '31',
  slug: 'teamoffice-touchless-face-attendance',
  name: 'Team Office Touch-Less Face Attendance Device (Face + Wi-Fi)',
  category: 'Attendance System',

  shortDescription: 'Advanced multi-biometric face attendance device with cloud software, Wi-Fi, and mobile app support – ideal for modern workforce management.',
  longDescription: 'The Team Office Touch-Less Face Attendance Device offers comprehensive biometric authentication with support for face recognition, fingerprints, RFID cards, and passwords. It can store up to 1,000 face templates and 5,000 fingerprint records, with a transaction log capacity of 300,000. Equipped with USB, TCP/IP, and Wi-Fi connectivity, the device ensures seamless data transmission. It integrates with cloud-based attendance software and a mobile app for real-time monitoring. With its 2.8-inch TFT color display and intuitive interface, this device is perfect for offices, institutions, and commercial facilities.',
  images: [
    '/Solutions/Access Control/1st_part/face20.png',
    '/Solutions/Access Control/1st_part/face21.png',
    '/Solutions/Access Control/1st_part/face22.png',


  ],
  dataAiHints: [
    'face recognition attendance machine',
    'wifi biometric device',
    'cloud based attendance system',
    'team office touchless face attendance',
    'multi biometric access control'
  ],
  specifications: [
    { key: 'Authentication Modes', value: 'Face, Fingerprint, RFID Card, Password' },
    { key: 'Face Template Capacity', value: '1,000' },
    { key: 'Fingerprint Capacity', value: '5,000' },
    { key: 'Transaction Capacity', value: '300,000' },
    { key: 'Connectivity', value: 'USB, TCP/IP, Wi-Fi' },
    { key: 'Display', value: '2.8-inch TFT Color Screen' },
    { key: 'Software', value: 'Cloud-based with Mobile App' },
    { key: 'Dimensions', value: '17.2 x 3.4 x 12.5 cm' },
    { key: 'Weight', value: '830 g' },
    { key: 'Model', value: 'TM23C01' },
    { key: 'Country of Origin', value: 'China' }
  ],
  benefits: [
    'Touchless facial recognition for hygienic attendance',
    'Cloud-based tracking with real-time mobile access',
    'Multi-biometric security ensures flexibility and safety',
    'Large user and transaction storage for big teams',
    'Compact design with easy installation and intuitive UI'
  ],
  icon: KeyRound
},
{
  id: '32',
  slug: 'teamoffice-biopark-d01-dynamic-face-attendance',
  name: 'Team Office Bio-Park D01 AI-Based Dynamic Face Recognition Attendance Device',
  category: 'Attendance System',

  shortDescription: 'AI-based face recognition attendance device with Wi-Fi, LAN, USB support, and cloud-based monitoring – ideal for high-security and smart offices.',
  longDescription: 'The Team Office Bio-Park D01 is an advanced AI-based dynamic face recognition device designed for fast and secure identification. With an ultra-fast identification time of less than 0.2 seconds and a user capacity of 5,000 faces, it is built to meet the demands of modern access control. This device features a 4.3-inch touch display and multiple connectivity options including Wi-Fi, TCP/IP, and USB. It integrates seamlessly with a cloud-based attendance platform for real-time tracking and analysis, making it ideal for offices, institutions, and high-security premises. Professional-grade access control features further enhance safety and operational efficiency.',
  images: [
    '/Solutions/Access Control/1st_part/face30.png',
    '/Solutions/Access Control/1st_part/face31.png',
    '/Solutions/Access Control/1st_part/face32.png',
    '/Solutions/Access Control/1st_part/face33.png',

  ],
  dataAiHints: [
    'dynamic face recognition attendance system',
    'AI-based biometric device',
    'cloud-based attendance device',
    'team office d01 face recognition',
    'wifi lan usb face recognition attendance'
  ],
  specifications: [
    { key: 'Authentication Mode', value: 'AI-Based Dynamic Face Recognition' },
    { key: 'Face Capacity', value: '5,000 Users' },
    { key: 'Identification Time', value: '< 0.2 seconds' },
    { key: 'Connectivity', value: 'Wi-Fi, TCP/IP, USB' },
    { key: 'Display', value: '4.3-inch Touch Screen' },
    { key: 'Access Control', value: 'Professional Door Access Integration' },
    { key: 'Software', value: 'Cloud-Based Attendance Platform' },
    { key: 'Dimensions', value: '18.7 x 8.7 x 2.6 cm' },
    { key: 'Weight', value: '760 g' },
    { key: 'Model', value: 'TM23D01' },
    { key: 'Manufacturer', value: 'Chiptronics Solutions' },
    { key: 'Country of Origin', value: 'China' }
  ],
  benefits: [
    'AI-powered dynamic face recognition with ultra-fast response',
    'Cloud-based attendance tracking with real-time analytics',
    'Large 4.3-inch touch display for smooth interaction',
    'Multiple connectivity options: Wi-Fi, LAN, USB',
    'Enhanced access control security for professional use'
  ],
  icon: KeyRound
},
{
  id: '33',
  slug: 'hawkvision-hv-sr-602a-rfid-door-access-control',
  name: 'HAWKVISION RFID Door Access Control Lock System Kit (HV-SR-602A)',
  category: 'Attendance System',

  shortDescription: 'Compact RFID-based access control system with card and PIN authentication – ideal for doors, gates, and cabinets.',
  longDescription: 'The HAWKVISION HV-SR-602A is a compact and efficient RFID Door Access Control Lock System designed for secure entry control. This standalone device supports both card-based and PIN-based authentication methods, offering users flexibility and enhanced security. With a sleek and lightweight design, it fits discreetly on doors, gates, or cabinets. It features easy installation with wired connectivity and can also run on batteries, making it ideal for locations where wired power is not available.',
  images: [
    '/Solutions/Access Control/1st_part/pass11.png',
    '/Solutions/Access Control/1st_part/pass12.png',

  ],
  dataAiHints: [
    'hawkvision rfid access control',
    'hv-sr-602a door access lock',
    'card and pin based access system',
    'standalone rfid door lock',
    'battery powered access control device'
  ],
  specifications: [
    { key: 'Model Number', value: 'HV-SR-602A' },
    { key: 'Authentication Method', value: 'RFID Card, PIN Code' },
    { key: 'Connectivity', value: 'Wired' },
    { key: 'Power Source', value: 'Battery Powered' },
    { key: 'Mounting Type', value: 'Wall Mount' },
    { key: 'Material', value: 'Plastic' },
    { key: 'Dimensions', value: '12 x 8 x 2 cm' },
    { key: 'Weight', value: '110 g' },
    { key: 'Country of Origin', value: 'India' }
  ],
  benefits: [
    'Compact and lightweight design for discreet installations',
    'Supports both card and PIN access modes for flexible security',
    'Ideal for single-door or multiple access point control',
    'Battery-powered option for locations without wired power',
    'Simple setup and easy integration with existing systems'
  ],
  icon: KeyRound
},
{
  id: '34',
  slug: 'godrej-advantis-rimtronic-smart-lock',
  name: 'Godrej Smart Lock | Advantis Rimtronic Digital Lock',
  category: 'Attendance System',


  shortDescription: '360° Biometric Fingerprint Digital Lock with Spycode, Auto-Locking, RFID Card Access & 3-Year Warranty – by Godrej.',
  longDescription: 'The Godrej Advantis Rimtronic Smart Lock is a cutting-edge digital security solution featuring 360° fingerprint recognition, password protection, RFID access, and auto-locking features. Designed for both residential and commercial spaces, it supports up to 99 fingerprints, 4 user PINs, 100 RFID cards, and includes enhanced privacy features like Spycode and remote control options. With a sleek alloy steel body and polished finish, this smart lock is ideal for modern security needs. Comes with a 3-year warranty and low battery alerts for hassle-free use.',
  images: [
    '/Solutions/Access Control/1st_part/pass21.png',
    '/Solutions/Access Control/1st_part/pass22.png',
    '/Solutions/Access Control/1st_part/pass23.png',
    '/Solutions/Access Control/1st_part/pass24.png',
  ],
  dataAiHints: [
    'godrej smart lock',
    'digital fingerprint door lock',
    'advantis rimtronic lock',
    'spycode digital lock',
    'auto locking smart lock',
    'rfid card access lock'
  ],
  specifications: [
    { key: 'Brand', value: 'Godrej Locking Solutions and Systems' },
    { key: 'Lock Type', value: 'Digital Lock' },
    { key: 'Material', value: 'Alloy Steel' },
    { key: 'Color', value: 'Black' },
    { key: 'Dimensions', value: '17.7 x 7.1 x 1.8 cm' },
    { key: 'Weight', value: '1.4 kg' },
    { key: 'Fingerprint Capacity', value: '99' },
    { key: 'Password Capacity', value: '4 User Passwords + 1 OTP + 1 Master' },
    { key: 'RFID Cards Supported', value: '100' },
    { key: 'Country of Origin', value: 'Republic of Korea' },
    { key: 'Warranty', value: '3 Years' }
  ],
  benefits: [
    '360° fingerprint recognition ensures reliable and easy access',
    'Spycode for password secrecy in public',
    'Auto-locking for effortless security',
    'Low battery alerts via mobile/app notification',
    'Supports multiple access methods: Fingerprint, PIN, RFID',
    'Ideal for homes, offices, and commercial setups'
  ],
  icon: Lock,
},
{
  id: '35',
  slug: 'team-office-z912-face-attendance-device',
  name: 'Team Office Z912 Face Recognition Attendance Device with Dual Camera',
  category: 'Attendance System',

  shortDescription: 'Face, Card, and Password Based Attendance System with Dual HD Camera, 1500 Users & Wi-Fi/Cloud Support.',
  longDescription: 'The Team Office Z912 is a powerful biometric face recognition attendance system featuring face, card, and password authentication for up to 1500 users. With support for 1.5 lakh transaction logs and a 3.5" touch screen, it is perfect for professional access control environments. Equipped with dual HD cameras and auto-adjusting LED lighting, it ensures accurate recognition even in low light conditions. Cloud-compatible with Wi-Fi, USB, and TCP/IP connectivity, it enables real-time remote attendance tracking and backup.',
  images: [
    '/Solutions/Access Control/1st_part/face40.png',
    '/Solutions/Access Control/1st_part/face41.png',
    '/Solutions/Access Control/1st_part/face42.png',
    '/Solutions/Access Control/1st_part/face43.png',

  ],
  dataAiHints: [
    'team office z912 attendance device',
    'face recognition attendance with wifi',
    'dual camera biometric attendance system',
    'cloud-based attendance terminal',
    '1500 user capacity biometric device'
  ],
  specifications: [
    { key: 'Authentication Modes', value: 'Face, Card, Password' },
    { key: 'User Capacity', value: '1500 Users' },
    { key: 'Transaction Capacity', value: '1,50,000 Logs' },
    { key: 'Display', value: '3.5" Touch Screen' },
    { key: 'Camera', value: 'Dual HD with Auto LED Adjustment' },
    { key: 'Connectivity', value: 'USB, TCP/IP, Wi-Fi' },
    { key: 'Cloud Software Support', value: 'Yes' },
    { key: 'Dimensions', value: '22.8 x 14.4 x 7.8 cm' },
    { key: 'Weight', value: '510 g' },
    { key: 'Manufacturer', value: 'Chiptronics Solutions, Vadodara' },
    { key: 'Country of Origin', value: 'China' }
  ],
  benefits: [
    'Accurate face recognition even in low-light environments',
    'Supports flexible authentication methods: Face, Card, Password',
    'Large user and log capacity suitable for offices and organizations',
    'Wi-Fi and Cloud support for remote management and backup',
    'Dual HD cameras ensure high-precision recognition',
    'Touch screen interface for smooth navigation'
  ],
  icon: Fingerprint,
},
{
  id: '36',
  slug: 'lavna-la44-smart-door-lock-camera',
  name: 'LAVNA 7-Way Premium Smart Door Lock with Camera & Screen (LA44)',
  category: 'Attendance System',

  shortDescription: 'Smart Biometric Door Lock with 7 Access Modes – Fingerprint, WiFi, Bluetooth, Camera, OTP, PIN & Manual Key with 5-Bolt Security',
  longDescription: 'The LAVNA LA44 is a next-generation premium smart door lock offering 7-way unlocking: Fingerprint, Mobile App (Wi-Fi + Bluetooth), RFID Card, PIN, OTP, and Manual Key. Designed for maximum home security, it features a 360° fingerprint sensor with 0.4s response time, inbuilt camera for visitor snapshot, and remote unlock functionality. Ideal for wooden doors, this 5-bolt automatic mortise lock integrates a modern touchscreen, mobile app control, and robust stainless steel-aluminium build. Supports up to 100 fingerprints, 100 PINs, 100 RFID cards, and remote OTP-based unlocking.',
  images: [
    '/Solutions/Access Control/1st_part/pass30.png',
    '/Solutions/Access Control/1st_part/pass31.png',
    '/Solutions/Access Control/1st_part/pass32.png',
  ],
  dataAiHints: [
    'lavna la44 smart lock',
    'smart lock with camera and screen',
    'wifi bluetooth fingerprint door lock',
    'otp based smart lock for home',
    'lavna smart door lock for wooden doors'
  ],
  specifications: [
    { key: 'Access Modes', value: 'Fingerprint, Wi-Fi App, Bluetooth, RFID Card, PIN, OTP, Manual Key' },
    { key: 'Fingerprint Capacity', value: 'Up to 100' },
    { key: 'PIN Capacity', value: 'Up to 100' },
    { key: 'RFID Capacity', value: 'Up to 100 Cards' },
    { key: 'Special Features', value: 'Inbuilt Camera with Mobile Sync, Automatic Locking, 5-Bolt Mortise Lock' },
    { key: 'Display', value: 'Internal Screen & Mobile View' },
    { key: 'Connectivity', value: 'Wi-Fi, Bluetooth' },
    { key: 'Control Method', value: 'Mobile App + Fingerprint Control' },
    { key: 'Material', value: 'Stainless Steel, Aluminium' },
    { key: 'Dimensions', value: '6.5 x 7.5 x 41 cm' },
    { key: 'Weight', value: '4.4 kg' },
    { key: 'Recommended Use', value: 'Wooden Doors (Min. 38mm Thickness)' },
    { key: 'Model', value: 'LA44' },
    { key: 'Brand', value: 'LAVNA' },
    { key: 'Country of Origin', value: 'China' }
  ],
  benefits: [
    '7-way smart access including camera, app, and OTP for enhanced flexibility',
    'Real-time visitor image via app and internal screen improves security',
    'Wi-Fi + Bluetooth app control allows remote unlocking from anywhere',
    '360° biometric scanner unlocks in just 0.4 seconds',
    'Supports a large number of users – ideal for homes and offices',
    'Heavy-duty 5-bolt security with stylish modern finish'
  ],
  icon: Lock,
},
{
  id: '37',
  slug: 'face-recognition-swing-turnstile-mt342',
  name: 'Face Recognition Turnstile Swing Turnstile MT342',
  category: 'Turnstiles',

  shortDescription: 'Smart swing turnstile gate with face recognition, fingerprint, RFID, QR support — ideal for factories, schools, offices, and more.',
  longDescription: 'The MT342 Face Recognition Turnstile Swing Gate offers secure and efficient access control for high-traffic areas. Designed with 304 stainless steel, brushless motor, and acrylic swing arms, it supports face recognition cameras, RFID readers, QR scanners, and fingerprint modules. Ideal for smart buildings, offices, construction sites, and schools. This bidirectional gate ensures 40 persons/min passing speed, emergency auto-open with power loss, and high mechanical reliability up to 5 million cycles. Customization available for dimensions, LED indicators, and access control integration.',
  images: [
    '/Solutions/Access Control/1st_part/turns10.png',
    '/Solutions/Access Control/1st_part/turns11.png',
    '/Solutions/Access Control/1st_part/turns12.png',
    '/Solutions/Access Control/1st_part/turns13.png',
    '/Solutions/Access Control/1st_part/turns14.png',
    '/Solutions/Access Control/1st_part/turns15.png',
  ],
  dataAiHints: [
    'face recognition turnstile gate',
    'swing gate with rfid biometric',
    'smart turnstile gate with camera',
    'biometric access control gate',
    'turnstile mt342 access system'
  ],
  specifications: [
    { key: 'Size', value: '1400 x 180 x 1000 mm (customizable)' },
    { key: 'Lane Width', value: '600 mm (standard), 900 mm (handicapped)' },
    { key: 'Arm Material', value: 'Acrylic' },
    { key: 'Material', value: '304 Stainless Steel' },
    { key: 'Motor', value: 'Brushless Motor, 24V' },
    { key: 'Opening Time', value: '0.2 seconds' },
    { key: 'Passing Speed', value: '40 persons/minute' },
    { key: 'Communication Interface', value: 'RS485, ≤1200m distance' },
    { key: 'Power Supply', value: '110V/220V, 50/60Hz' },
    { key: 'Weight', value: '70 kg/piece' },
    { key: 'Operating Temp', value: '-20°C to 60°C' },
    { key: 'Working Direction', value: 'Bidirectional / Single Directional' },
    { key: 'Emergency Response', value: 'Auto-open on power cut (with capacitor)' },
    { key: 'Reliability', value: '3 to 5 million cycles (no fault)' },
    { key: 'Optional Features', value: 'LED on arms & sideboard, UPS backup' },
    { key: 'Access Options', value: 'Face Recognition, RFID, QR, Fingerprint, Barcode' },
    { key: 'Applications', value: 'Community, Factory, School, Office, Resort, Site' }
  ],
  benefits: [
    'Compatible with third-party biometric and RFID systems',
    'Supports multiple access methods including facial recognition and QR scanning',
    'Emergency failsafe: auto open on power outage',
    'Durable stainless steel build with acrylic arms',
    'Smooth and fast throughput – up to 40 users/minute',
    'Customizable dimensions, lighting, and features for varied environments'
  ],
  icon: Lock,
},
{
  id: '38',
  slug: 'flap-barrier-gate-turnstile-mt237',
  name: 'New Flap Barrier Gate Turnstile MT237',
  category: 'Turnstiles',
  shortDescription: 'Bidirectional flap barrier turnstile with biometric & RFID support for high-traffic secure access.',
  longDescription: 'The MT237 Flap Barrier Turnstile offers advanced access control with support for face recognition, RFID cards, QR scanners, fingerprint scanners, and more. With a brushed DC motor and 6 pairs of sensors, it ensures secure and smooth passage at 30 persons per minute. Made from 1.2mm thick 304 stainless steel and powder-coated iron, it is ideal for indoor applications like offices, factories, communities, and schools. This barrier system features emergency auto-open functionality, customizable direction, LED lighting, and RS485 communication for integration into any access management setup.',
  images: [
    '/Solutions/Access Control/1st_part/turns21.png',
    '/Solutions/Access Control/1st_part/turns22.png',
    '/Solutions/Access Control/1st_part/turns23.png',
    '/Solutions/Access Control/1st_part/turns24.png',
  ],
  dataAiHints: [
    'flap barrier turnstile gate',
    'biometric access control flap gate',
    'mt237 access gate with RFID and face scanner',
    'indoor turnstile gate for factory school office',
    'customizable flap gate with sensors'
  ],
  specifications: [
    { key: 'Size', value: '1000 x 300 x 980 mm (customizable)' },
    { key: 'Lane Width', value: '550 mm' },
    { key: 'Passing Speed', value: '30 persons/minute' },
    { key: 'Motor Type', value: 'DC Brushed Motor, 24V' },
    { key: 'Sensors', value: '6 pairs of infrared sensors' },
    { key: 'Power Supply', value: '110V/220V, 50/60Hz' },
    { key: 'Material', value: '304 Stainless Steel (1.2mm) + Powder-Coated Iron' },
    { key: 'Gate Open Signal', value: 'Dry Contact / Relay' },
    { key: 'Direction', value: 'Bidirectional / Single Directional' },
    { key: 'Emergency Mode', value: 'Auto-open on power cut with capacitor' },
    { key: 'Humidity', value: '≤ 90%' },
    { key: 'Operating Temperature', value: '-20°C to 60°C' },
    { key: 'Opening Time', value: '0.2 seconds' },
    { key: 'Communication', value: 'RS485, ≤1200 m' },
    { key: 'Application Areas', value: 'Community, Factory, Construction Site, School, Resorts' },
    { key: 'Certifications', value: 'CE, ISO9001' }
  ],
  benefits: [
    'Supports face recognition, RFID, QR, and fingerprint scanners',
    'Smooth and fast access – 30 users/minute throughput',
    'Automatic gate release during power failure for safety',
    'Durable stainless steel + coated iron for long life',
    'Ideal for indoor secure access environments',
    'Optional LED indicators for better visibility and guidance'
  ],
  icon: Lock,

},
{
  id: '39',
  slug: 'tripod-turnstile-access-control-mt152',
  name: 'TRIPOD TURNSTILE FOR ACCESS CONTROL MT152 / MT142',
  category: 'Turnstiles',
  shortDescription: 'Durable semi-automatic tripod turnstile for controlled access, compatible with biometric & RFID systems.',
  longDescription: 'The MT152/MT142 Tripod Turnstile is a robust and semi-automatic access control solution, ideal for high-traffic indoor and outdoor environments. It supports biometric integrations such as fingerprint scanners, face recognition cameras, RFID readers, QR code scanners, and more. Built with waterproof IP56 standards, hydraulic dampers, and a fault-free mechanism tested for up to 3 million cycles, it is perfect for long-term security infrastructure in schools, factories, communities, and construction sites. The tripod turnstile comes with OEM/ODM customization, optional protective arm sleeves, and emergency drop-arm functionality for safe exits.',
  images: [
    '/Solutions/Access Control/Turnstiles/turns30.png',
    '/Solutions/Access Control/Turnstiles/turns32.png',
    '/Solutions/Access Control/Turnstiles/turns31.png',
    '/Solutions/Access Control/Turnstiles/turns33.png',
  ],
  dataAiHints: [
    'tripod turnstile for access control',
    'mt152 tripod gate biometric integration',
    'turnstile for schools factories community entry',
    'semi-automatic access turnstile with drop arm',
    'customizable tripod barrier gate'
  ],
  specifications: [
    { key: 'Size', value: '1400 x 280 x 980 mm (customizable)' },
    { key: 'Lane Width', value: '550 mm (customizable)' },
    { key: 'Passing Speed', value: '35 persons/minute' },
    { key: 'Weight', value: '60 kg' },
    { key: 'Arm Length', value: '510 mm' },
    { key: 'Operation', value: 'Semi-Automatic with Hydraulic Damper' },
    { key: 'Solenoid Valve', value: 'DC24V ±5%' },
    { key: 'Gate Open Signal', value: 'Dry Contact / Relay' },
    { key: 'Power Supply', value: '110V/220V, 50/60Hz' },
    { key: 'Operating Voltage', value: 'DC 24V ±5%' },
    { key: 'Indicator Light Voltage', value: 'DC12V ±5%' },
    { key: 'Emergency Exit', value: 'Drop Arm on Power Cut' },
    { key: 'Direction', value: 'Bidirectional / Single Direction' },
    { key: 'Opening Time', value: '0.2 seconds' },
    { key: 'Waterproof', value: 'IP56 Rated' },
    { key: 'Operating Temperature', value: '-30°C to 60°C' },
    { key: 'Humidity', value: '5% to 90%' },
    { key: 'Supported Features', value: 'IC/ID reader, Barcode, Face Recognition, Fingerprint, UPS' },
    { key: 'Application Areas', value: 'Community, Factory, Construction Site, School, Resorts' },
    { key: 'Certifications', value: 'CE, ISO9001' }
  ],
  benefits: [
    'Durable for up to 3 million fault-free operations',
    'Emergency safety with auto drop-arm on power failure',
    'Supports biometric and RFID integrations',
    'Weatherproof and suitable for both indoor and outdoor use',
    'Shock-absorbing hydraulic mechanism for smooth operation',
    'OEM/ODM customization with drawings and 3D renderings provided'
  ],
  icon: DoorOpen,

},
{
  id: '40',
  slug: 'double-lane-full-height-turnstile-mt403-1',
  name: 'DOUBLE LANE SS FULL HEIGHT TURNSTILE MT403-1',
  category: 'Turnstiles',
  shortDescription: 'Robust double-lane full height turnstile for high-security areas, compatible with biometric and RFID systems.',
  longDescription: 'The MT403-1 Double Lane Full Height Turnstile is a heavy-duty access control solution designed for high-traffic, high-security environments such as factories, construction sites, communities, and resorts. It supports biometric integrations including fingerprint scanners, face recognition, RFID readers, QR scanners, and more. Featuring a stainless-steel build, brushless motor, hydraulic shock-absorbing mechanism, and 5 million fault-free cycles, this semi-automatic turnstile is built to last. With emergency fail-safe or fail-lock options, it ensures safety during power outages. OEM/ODM supported with full layout and installation documentation.',
  images: [
    '/Solutions/Access Control/Turnstiles/turns40.png',
    '/Solutions/Access Control/Turnstiles/turns42.png',
    '/Solutions/Access Control/Turnstiles/turns41.png',
    '/Solutions/Access Control/Turnstiles/turns43.png',
  ],
  dataAiHints: [
    'double lane full height turnstile mt403-1',
    'high security access gate biometric RFID',
    'industrial full height turnstile gate',
    'automatic stainless steel turnstile with fail-safe',
    'mt403-1 dual lane full height access control'
  ],
  specifications: [
    { key: 'Size', value: '2400 x 1500 x 2310 mm (customizable)' },
    { key: 'Lane Width', value: '650 mm (customizable)' },
    { key: 'Passing Speed', value: '30 persons/minute' },
    { key: 'Weight', value: 'Varies by configuration' },
    { key: 'Drive', value: 'Semi-Automatic with Hydraulic Damper' },
    { key: 'Solenoid', value: 'DC24V' },
    { key: 'Gate Open Signal', value: 'Dry Contact / Relay' },
    { key: 'Logic Voltage', value: 'DC24V' },
    { key: 'Power Supply', value: '110V/220V, 50/60Hz' },
    { key: 'Emergency Mode', value: 'Fail-Safe or Fail-Lock on Power Cut' },
    { key: 'Direction', value: 'Bidirectional' },
    { key: 'Opening Time', value: '0.2 seconds' },
    { key: 'Material', value: '304 Stainless Steel' },
    { key: 'Reliability', value: '5 million no-fault operations' },
    { key: 'Operating Temperature', value: '-25°C to 60°C' },
    { key: 'Humidity', value: '≤95%' },
    { key: 'Supported Features', value: 'IC/ID reader, Barcode, Face Recognition, Fingerprint, UPS' },
    { key: 'Application Areas', value: 'Community, Factory, Construction Site, School, Resorts' },
    { key: 'Certifications', value: 'CE, ISO9001' }
  ],
  benefits: [
    'Dual-lane design for higher throughput',
    'Reliable operation up to 5 million cycles',
    'Fail-safe or fail-lock security in emergencies',
    'Biometric, RFID, and QR compatibility',
    'Shock-absorbing hydraulic drive system',
    'Ideal for rugged outdoor and indoor use',
    'Customizable with layout drawings and full OEM/ODM support'
  ],
  icon: DoorOpen
},
{
  id: '41',
  slug: 'radar-turnstile-swing-barrier-mt313',
  name: 'Radar Turnstile Swing Barrier Gate MT313',
  category: 'Turnstiles',
  shortDescription: 'Compact swing barrier gate with radar-based auto-open, suitable for indoor/outdoor access control.',
  longDescription: 'The MT313 Radar Turnstile Swing Barrier Gate is designed for modern access control systems, offering fast, radar-assisted automatic opening and compatibility with biometric and RFID systems. Built with 304 stainless steel and brushless motor technology, it ensures smooth operation, durability, and reliability. Ideal for use in communities, schools, factories, and construction sites, it also supports OEM/ODM customization and includes safety features like power failure auto-open and LED indicators.',
  images: [
    '/Solutions/Access Control/Turnstiles/turns50.png',
    '/Solutions/Access Control/Turnstiles/turns51.png',
    '/Solutions/Access Control/Turnstiles/turns52.png',
    '/Solutions/Access Control/Turnstiles/turns53.png',
    '/Solutions/Access Control/Turnstiles/turns54.png',

  ],
  dataAiHints: [
    'swing barrier gate with radar auto open',
    'mt313 access control radar turnstile',
    'biometric swing gate with brushless motor',
    'entry gate for school factory community',
    'turnstile with face recognition and RFID support'
  ],
  specifications: [
    { key: 'Size', value: '250 x 190 x 980 mm' },
    { key: 'Pass Width', value: 'Max 1000 mm' },
    { key: 'Material', value: '304 Stainless Steel with Acrylic Arms' },
    { key: 'Operation', value: 'Brushless Motor with Radar Auto-Open' },
    { key: 'Power Supply', value: '110V/220V, 50/60Hz' },
    { key: 'Emergency Mode', value: 'Auto-Open on Power Cut with Battery Backup' },
    { key: 'Passing Speed', value: '40 persons/minute' },
    { key: 'Opening Time', value: '0.2 seconds' },
    { key: 'Supported Access', value: 'Face, RFID, QR, Fingerprint, Barcode' }
  ],
  benefits: [
    'Compact, stylish design ideal for modern spaces',
    'Radar-based auto opening for hands-free entry',
    'Smooth and quiet operation with brushless motor',
    'Integrates with all standard biometric systems',
    'Auto-open during power failures for emergency exit',
    'Durable stainless steel body with acrylic arms',
    'OEM/ODM customization with drawings and renderings',
    'Low power consumption and high reliability (3M+ cycles)'
  ],
  icon: DoorOpen
},
{
  id: '42',
  slug: 'silver-ss-tripod-turnstile-kp',
  name: 'Silver SS Automatic Tripod Turnstile',
  category: 'Turnstiles',
  shortDescription: 'Stainless steel semi-automatic tripod turnstile with bidirectional access and smooth, silent operation.',
  longDescription: 'The SS Tripod Turnstile by K P ENTERPRISES is a premium access control system crafted from high-grade stainless steel. It supports bidirectional access and integrates seamlessly with electronic systems like RFID and biometric scanners. Built for high-traffic environments, it offers silent operation, emergency exit features, LED indicators, and customizable aesthetics. Ideal for corporate, transport, and government facilities, this turnstile enhances both security and user convenience.',
  images: [
    '/Solutions/Access Control/Turnstiles/turns60.png',
    '/Solutions/Access Control/Turnstiles/turns61.png',
    '/Solutions/Access Control/Turnstiles/turns62.png',
  ],
  dataAiHints: [
    'ss tripod turnstile stainless steel',
    'semi automatic tripod access control',
    'kp enterprises access barrier gate',
    'turnstile for government corporate use',
    'bi-directional turnstile gate integration'
  ],
  specifications: [
    { key: 'Material', value: 'Stainless Steel' },
    { key: 'Color', value: 'Silver' },
    { key: 'Model', value: 'KP-TT-001' },
    { key: 'Operation', value: 'Semi-Automatic / Automatic' },
    { key: 'Access Direction', value: 'Bi-directional' },
    { key: 'Access Integration', value: 'RFID, Fingerprint, Card, Biometric' },
    { key: 'Power Type', value: 'Single Phase' },
    { key: 'Emergency Mode', value: 'Override for Free Exit' },
    { key: 'LED Indicators', value: 'Status Lights for Guidance' }
  ],
  benefits: [
    'High-grade stainless steel ensures durability and corrosion resistance',
    'Supports integration with various electronic access control systems',
    'Smooth, low-noise operation suitable for quiet environments',
    'LED indicators provide intuitive guidance to users',
    'Emergency override for quick evacuation or power failures',
    'Bi-directional flow management improves traffic handling',
    'Sleek and modern design suitable for premium infrastructure',
    'Customizable finishes and branding available from KP Enterprises'
  ],
  icon: DoorOpen
},
{
  id: '43',
  slug: 'zkteco-boom-barrier-cmp200',
  name: 'ZKTeco Boom Barrier CMP200 (4.5 to 6 Meter)',
  category: 'Door Automation',
  shortDescription: 'Automatic boom barrier for vehicle access control with 4.5 to 6-meter arm, ideal for parking and security management.',
  longDescription: 'The ZKTeco CMP200 Boom Barrier is an automatic entry solution designed for vehicle access control at high-traffic areas such as airports, schools, hotels, and railway stations. Built with cold-rolled steel, it operates reliably across extreme temperatures from -25°C to +75°C. With a boom length ranging from 4.5 to 6 meters, it provides efficient entry management in parking systems and secure zones. Its rugged design, simple installation, and wide compatibility with access systems make it a preferred choice for outdoor security applications.',
  images: [
    '/Solutions/Access Control/Door/boom1.png',

  ],
  dataAiHints: [
    'automatic boom barrier for parking',
    'zkteco cmp200 boom gate',
    'vehicle access control barrier',
    'cold rolled steel boom barrier',
    'boom barrier for school hotel airport'
  ],
  specifications: [
    { key: 'Boom Length', value: '4.5 to 6 meters' },
    { key: 'Material', value: 'Cold Rolled Steel' },
    { key: 'Temperature Range', value: '-25°C to +75°C' },
    { key: 'Dimensions (L×W×H)', value: '350 × 280 × 1010 mm' },
    { key: 'Weight', value: '45 kg' },
    { key: 'Application Areas', value: 'Airports, Schools, Hotels, Theaters, Outdoor' },
    { key: 'Power Supply', value: 'Auto Entry System (Standard)' },
    { key: 'Usage', value: 'Parking and Entry Management' },
    { key: 'Brand', value: 'ZKTeco' }
  ],
  benefits: [
    'Supports arm lengths from 4.5 to 6 meters for flexible setups',
    'Rugged cold-rolled steel construction for long-term durability',
    'Withstands extreme temperatures from -25°C to +75°C',
    'Ideal for commercial, government, and public infrastructure use',
    'Seamless integration with access control systems',
    'Fast opening time and efficient entry/exit management',
    'Low maintenance design with high reliability',
    'Compact form factor suitable for limited space installation'
  ],
  icon: DoorOpen
},
{
  id: '44',
  slug: 'essl-boom-barrier-bg108-rfid-uhf',
  name: 'eSSL BG108 Automatic Boom Barrier System with RFID UHF TAG',
  category: 'Door Automation',

  shortDescription: 'Heavy-duty automatic boom barrier with RFID UHF support, 8m aluminum arm, IP54 rated with advanced access control interfaces.',
  longDescription: 'The eSSL BG108 is a robust automatic boom barrier system designed for efficient vehicle access control. With support for RFID UHF TAGs, it offers a boom length of up to 8 meters and fast arm movement with an 8-second up/down cycle. Featuring IP54 ingress protection and compatibility with photocells, loop detectors, and standalone access panels, this barrier system is ideal for parking lots, gated societies, commercial buildings, and industrial complexes. Built with a powerful 90W motor and aluminium boom arm, the BG108 combines security, durability, and automation for seamless traffic control.',
  images: [
    '/Solutions/Access Control/Door/boom2.png',
  ],
  dataAiHints: [
    'essl bg108 boom barrier',
    'automatic rfid uhf boom gate',
    '8m parking boom gate system',
    'ip54 access control boom barrier',
    'barrier gate for parking and RFID control'
  ],
  specifications: [
    { key: 'Boom Length', value: '5.8 to 8 meters' },
    { key: 'Arm Material', value: 'Aluminium' },
    { key: 'Ingress Protection', value: 'IP54' },
    { key: 'Up/Down Time', value: '8 seconds (8m)' },
    { key: 'Motor Power', value: '90W, 220V AC' },
    { key: 'Control Signal', value: 'Dry Contact' },
    { key: 'Operating Temperature', value: '-20°C to +50°C' },
    { key: 'Control Interfaces', value: 'Photocell, Loop Detector, Remote, Access Panel' },
    { key: 'Dimension (L×W×H)', value: '268 × 348 × 1050 mm' }
  ],
  benefits: [
    'Supports RFID UHF TAG for seamless vehicle entry',
    'Strong aluminum boom arm with 8m max length',
    'Fast open/close operation with auto-closing timer',
    'Advanced safety features like bump bounce-back',
    'Ingress protection IP54 – suitable for outdoor use',
    'Remote control up to 25 meters for convenience',
    'Compatible with eSSL access control panels',
    'Ideal for residential, commercial, and industrial settings'
  ],
  icon: DoorOpen
},
{
  id: '45',
  slug: 'mas-engineers-automatic-boom-barrier',
  name: 'Automatic Boom Barrier - Metal, Yellow & White | MAS Engineers',
  category: 'Door Automation',
  shortDescription: 'High-quality metal automatic boom barrier in yellow and white, designed for secure access control with customizable size options.',
  longDescription: 'MAS Engineers offers a premium automatic boom barrier designed for robust security and traffic management at entry/exit points. Made from durable metal with a high-visibility yellow and white finish, it supports various sizes to suit different installation environments. Ideal for commercial, residential, and industrial zones, the barrier ensures controlled vehicle access with a reliable mechanism. Supplied across India with a weekly capacity of 50 units, it’s a cost-effective, heavy-duty solution for high-traffic access control.',
  images: [
    '/Solutions/Access Control/Door/boom3.png',
  ],
  dataAiHints: [
    'mas engineers boom barrier',
    'automatic yellow white boom gate',
    'metal security boom barrier',
    'entry control boom gate india',
    'access control gate automatic barrier'
  ],
  specifications: [
    { key: 'Material', value: 'High-quality Metal' },
    { key: 'Colors Available', value: 'Yellow, White' },
    { key: 'Size Options', value: 'Different Sizes Available' },
    { key: 'Application', value: 'Security & Access Control' },
    { key: 'Delivery Time', value: '10 Days' },
    { key: 'Supply Capacity', value: '50 Units Per Week' },
    { key: 'Brand', value: 'MAS Engineers' },
    { key: 'Price', value: '₹55,000.00' },
    { key: 'Market Availability', value: 'All India' }
  ],
  benefits: [
    'Highly visible yellow and white color scheme for safety',
    'Durable metal body ensures long-lasting performance',
    'Available in multiple sizes for different gate widths',
    'Ideal for parking lots, gated communities, factories, and offices',
    'Fast delivery with high weekly supply capacity',
    'Trusted Indian brand with nationwide availability',
    'Smooth automatic operation for reliable access control'
  ],
  icon: DoorOpen
},
{
  id: '46',
  slug: 'secureye-sbb300-automatic-toll-boom-barrier',
  name: 'AUTOMATIC TOLL BOOM BARRIER S-BB300 | Secureye',
  category: 'Door Automation',
  shortDescription: 'Secureye S-BB300 automatic toll boom barrier with 3m aluminum boom and foam padding for safe vehicle access control.',
  longDescription: 'The Secureye S-BB300 Automatic Toll Boom Barrier is engineered for efficient and safe toll plaza operations and high-traffic access points. It features a 3-meter boom constructed from durable 2mm thick aluminum, enhanced with foam padding for vehicle protection. With smooth automatic operation and solid build quality, this boom barrier offers both safety and performance in toll collection and controlled entry systems.',
  images: [
    '/Solutions/Access Control/Door/boom41.png',
    '/Solutions/Access Control/Door/boom40.png',
  ],
  dataAiHints: [
    'secureye toll boom barrier',
    'automatic toll gate s-bb300',
    '3m aluminum boom barrier with foam',
    'secureye access control system',
    'high-speed toll barrier india'
  ],
  specifications: [
    { key: 'Boom Length', value: '3 meters' },
    { key: 'Boom Material', value: '2 mm Round Aluminum' },
    { key: 'Boom Protection', value: 'Foam Padded' },
    { key: 'Usage', value: 'Toll Plazas, Entry/Exit Points' },
    { key: 'Operation Type', value: 'Automatic' },
    { key: 'Brand', value: 'Secureye' },
    { key: 'Model', value: 'S-BB300' },
    { key: 'Category', value: 'Toll Boom Barrier' }
  ],
  benefits: [
    'Foam-padded boom for vehicle safety',
    'Ideal for toll gates and high-traffic control',
    'Durable 2mm aluminum boom resists impact',
    'Smooth and fast automatic barrier operation',
    'Trusted brand with reliable performance'
  ],
  icon: DoorOpen
},
{
  id: '47',
  slug: 'boom-barrier-gate-housing-society',
  name: 'Boom Barrier Gate | 6m Automatic Aluminum Gate',
  category: 'Door Automation',

  shortDescription: 'Automatic aluminum boom barrier gate ideal for housing societies with 6-meter arm and 6-second open/close time.',
  longDescription: 'This Boom Barrier Gate is an ideal access control solution for housing societies and residential complexes. Made from durable aluminum and designed for 6-meter wide entries, the gate opens and closes in just 6 seconds. It operates on 220V with an 80W power rating and supports automated operation, ensuring convenience, safety, and security in daily vehicle movement.',
  images: [
    '/Solutions/Access Control/Door/boom5.png',

  ],
  dataAiHints: [
    'automatic boom barrier 6m',
    'housing society boom gate',
    'barrier gate 80W 220V aluminum',
    '6 second open close boom gate',
    'automatic entry exit boom barrier'
  ],
  specifications: [
    { key: 'Boom Length', value: '6 meters' },
    { key: 'Material', value: 'Aluminum' },
    { key: 'Power', value: '80W' },
    { key: 'Voltage', value: '220V' },
    { key: 'Opening Time', value: '6 seconds' },
    { key: 'Closing Time', value: '6 seconds' },
    { key: 'Usage', value: 'Housing Societies' },
    { key: 'Operation', value: 'Automatic' }
  ],
  benefits: [
    'Smooth and fast operation in 6 seconds',
    'Durable aluminum boom for long-term use',
    'Ideal for residential entry/exit control',
    'Energy-efficient 80W motor',
    'Designed for Indian power standards (220V)'
  ],
  icon: DoorOpen
},
{
  id: '48',
  slug: 'dorma-automatic-swing-door',
  name: 'Dorma Automatic Swing Door',
  category: 'Door Automation',

  shortDescription: 'High-quality stainless steel automatic swing door with glass filling, remote operation, and sleek design.',
  longDescription: 'The Dorma Automatic Swing Door offers a modern and efficient entry solution for commercial and residential spaces. Crafted with a stainless steel frame and glass filling, it features remote-controlled operation and supports 50-60Hz frequency. The system ensures smooth, quiet motion and is ideal for high-traffic areas like malls, offices, and hospitals.',
  images: [
    '/Solutions/Access Control/Door/swing1.png',
  ],
  dataAiHints: [
    'dorma automatic swing door',
    'remote swing door opener',
    'glass and stainless steel door',
    'automatic entry door with remote',
    'commercial swing door dorma'
  ],
  specifications: [
    { key: 'Material', value: 'Stainless Steel' },
    { key: 'Pattern', value: 'Swing (Sliding Design Mentioned)' },
    { key: 'Weight', value: '5-10 kg' },
    { key: 'Frequency', value: '50-60 Hz' },
    { key: 'Remote Operator', value: 'Yes' },
    { key: 'Inside Filling', value: 'Glass' }
  ],
  benefits: [
    'Smooth and quiet automatic operation',
    'Modern stainless steel design with glass finish',
    'Remote control for added convenience',
    'Suitable for high-traffic environments',
    'Easy integration with access control systems'
  ],
  icon: DoorOpen
},
{
  id: '49',
  slug: 'automatic-sensor-glass-door',
  name: 'Automatic Sensor Glass Door',
  category: 'Door Automation',

  shortDescription: 'Elegant automatic glass door with sensor-based swing operation and aluminum frame.',
  longDescription: 'The Automatic Sensor Glass Door by Future Plus is a premium solution for modern entrances. Featuring a sleek glass body with an aluminum frame, this swing-style door operates automatically via built-in sensors and remote control. With 50 Hz frequency, 12 W power usage, and 240V voltage compatibility, it provides both style and functionality for residential and commercial environments.',
  images: [
    '/Solutions/Access Control/Door/swing2.png',
  ],
  dataAiHints: [
    'sensor glass door',
    'automatic swing glass door',
    'glass door with remote operator',
    'future plus auto door',
    'aluminum frame glass swing door'
  ],
  specifications: [
    { key: 'Material', value: 'Glass' },
    { key: 'Frame Material', value: 'Aluminium' },
    { key: 'Opening Style', value: 'Swing' },
    { key: 'Frequency', value: '50 Hz' },
    { key: 'Power', value: '12 W' },
    { key: 'Voltage', value: '240 V' },
    { key: 'Remote Operator', value: 'Yes' },
    { key: 'Automation Grade', value: 'Automatic' },
    { key: 'Brand', value: 'Future Plus' }
  ],
  benefits: [
    'Hands-free sensor-based operation',
    'Modern and sleek glass finish with aluminum frame',
    'Energy efficient with only 12W power usage',
    'Remote control compatible for easy access',
    'Ideal for residential and office entrances'
  ],
  icon: DoorOpen
},
{
  id: '50',
  slug: 'aluminium-white-sliding-glass-door-opener',
  name: 'Aluminium Pristine White Automatic Sliding Glass Door Opener – Interior',
  category: 'Door Automation',

  shortDescription: 'Interior automatic sliding door with aluminum alloy frame in pristine white finish.',
  longDescription: 'The Aluminium Pristine White Automatic Sliding Glass Door Opener by RE Automation is an elegant and efficient solution for interior spaces. Designed with an aluminum alloy frame and pristine white finish, it blends seamlessly with modern interiors. It supports smooth partitioning with a mounting height of 8 feet and operates on 210–230V power supply, making it ideal for offices, homes, and commercial buildings.',
  images: [
    '/Solutions/Access Control/Door/slide1.png',

  ],
  dataAiHints: [
    'automatic sliding glass door',
    'interior glass partition door',
    'pristine white aluminum door',
    're automation sliding door',
    'electric glass sliding door opener'
  ],
  specifications: [
    { key: 'Material', value: 'Aluminium' },
    { key: 'Door Location', value: 'Interior' },
    { key: 'Frame Material', value: 'Glass' },
    { key: 'Sliding Door Type', value: 'Partition Doors' },
    { key: 'Frame Color', value: 'Pristine White' },
    { key: 'Door Material', value: 'Aluminum Alloy' },
    { key: 'Mounting Height', value: '8 feet' },
    { key: 'Power Supply', value: '210–230 V' },
    { key: 'Brand', value: 'RE Automation' }
  ],
  benefits: [
    'Stylish pristine white aluminum finish',
    'Perfect for interior partitioning in offices or homes',
    'Effortless automatic sliding operation',
    'Supports tall installations with 8 ft mounting height',
    'Energy-efficient and durable'
  ],
  icon: DoorOpen
},
{
  id: '51',
  slug: 'dorma-xl-c4100-automatic-sliding-door',
  name: 'Dorma XL-C 4100 Automatic Sliding Door Operator',
  category: 'Door Automation',

  shortDescription: 'High-performance automatic sliding door operator for interior office use, supports single and double panel doors.',
  longDescription: 'The Dorma XL-C 4100 is a premium automatic sliding door operator designed for modern offices. With its face-mounted aluminum frame and versatile control modes, it supports both single and double-panel configurations. It features adjustable speed, various access activators, and is compatible with RADAR sensors, pushbuttons, and remote controls. Ideal for secure, high-traffic office environments.',
  images: [
    '/Solutions/Access Control/Door/slide2.png',
  ],
  dataAiHints: [
    'dorma automatic sliding door',
    'xl-c 4100 door operator',
    'office sliding door motor',
    'interior aluminum sliding door',
    'radar sensor door system'
  ],
  specifications: [
    { key: 'Brand', value: 'Dorma' },
    { key: 'Model No.', value: 'XL-C 4100' },
    { key: 'Door Type', value: 'Sliding (Single & Double Panel)' },
    { key: 'Frame Material', value: 'Aluminium' },
    { key: 'Door Location', value: 'Interior' },
    { key: 'Power Supply', value: '230 VAC, 50/60 Hz' },
    { key: 'Max Door Weight', value: 'Single: 1 × 100 kg | Double: 2 × 85 kg' },
    { key: 'Clear Passage Width', value: '800–2000 mm' },
    { key: 'Opening Speed', value: '10–50 cm/sec (adjustable)' }
  ],
  benefits: [
    'Supports single and bi-parting configurations',
    'Smooth, adjustable opening/closing speed',
    'Multiple activation options: radar, remote, pushbutton',
    'Reliable for office and commercial interior use',
    'Comes with radar sensors and program switch included'
  ],
  icon: DoorOpen
},
{
  id: '52',
  slug: 'glass-pristine-white-automatic-sliding-door',
  name: 'Glass Pristine White Automatic Sliding Door for Office',
  category: 'Door Automation',

  shortDescription: 'Elegant automatic sliding glass door with pristine white frame, ideal for modern office interiors.',
  longDescription: 'This automatic sliding door is designed for office interiors, featuring a sleek glass panel with a pristine white aluminum frame. With support for up to 4 meters of opening and door weights of up to 200kg, it is ideal for heavy-duty use. Includes remote operation up to 200 feet, weatherproof construction, and safety features like overload and overheat protection. Offers smooth sliding with CE certification and a 1-year warranty.',
  images: [
    '/Solutions/Access Control/Door/slide3.png',
  ],
  dataAiHints: [
    'automatic glass sliding door office',
    'pristine white sliding door',
    'interior sliding door automation',
    'remote sliding glass door system',
    'livfuture sliding door for office'
  ],
  specifications: [
    { key: 'Brand', value: 'Livfuture' },
    { key: 'Material', value: 'Glass with Aluminium Frame' },
    { key: 'Door Location', value: 'Interior (Office)' },
    { key: 'Frame Color', value: 'Pristine White' },
    { key: 'Max Door Weight', value: '200 kg (both leaf)' },
    { key: 'Opening Width', value: 'Up to 4 meters' },
    { key: 'Opening Speed', value: '3–8 seconds' },
    { key: 'Remote Range', value: '100–200 feet' },
    { key: 'Temperature Range', value: '-20°C to +50°C (Rain Proof)' }
  ],
  benefits: [
    'Elegant glass design with durable aluminum frame',
    'Wide remote control range with smooth operation',
    'Supports heavy doors up to 200kg',
    'Weatherproof for indoor-outdoor environments',
    'Built-in safety: Overload & overheat protection',
    '1-year warranty with CE certified components'
  ],
  icon: DoorOpen
},
{
  id: '53',
  slug: 'qubo-video-doorbell-pro-tab',
  name: 'Qubo Instaview Video Doorbell Pro 2K + Home Tab',
  category: 'Door Automation',
  shortDescription: 'Smart video doorbell and tab combo by Qubo with 2K resolution, 2-way talk, Alexa/Google support, and full-head visibility.',
  longDescription: 'The Qubo Instaview Video Doorbell Pro 2K with Home Tab redefines home security and convenience. Featuring an 8-inch HD touch display, wireless installation, and full-body visibility, it offers real-time video calling from visitors to your tablet or smartphone. Supports two-way audio, tamper detection, night vision, and integration with Alexa and Google Assistant. Ideal for modern households seeking smart entry monitoring.',
  images: [
    '/Solutions/Access Control/phone/phone10.png',
    '/Solutions/Access Control/phone/phone11.png',
    '/Solutions/Access Control/phone/phone12.png',

  ],
  dataAiHints: [
    'qubo video doorbell pro 2k',
    'qubo home tab smart video call',
    'wireless video doorbell alexa',
    'qubo doorbell with 8-inch screen',
    'doorbell with full-body visitor view'
  ],
  specifications: [
    { key: 'Brand', value: 'Qubo (Hero Group)' },
    { key: 'Resolution', value: '1296P (3MP), Tab: 1280x800 HD' },
    { key: 'Display', value: '8-inch Capacitive Touchscreen' },
    { key: 'Audio', value: '2-Way Audio Communication' },
    { key: 'Connectivity', value: 'Wi-Fi (Wireless, Corded Electric)' },
    { key: 'Smart Control', value: 'Compatible with Alexa & OK Google' },
    { key: 'Usage', value: 'Outdoor (Doorbell), Indoor (Tab)' },
    { key: 'Mounting', value: 'Wall Mount / Tabletop Stand' },
    { key: 'Special Features', value: 'Night Vision, Tamper Detection, Time-Lapse' }
  ],
  benefits: [
    'Instant visitor video call to phone or tablet',
    'Full-body head-to-toe visitor visibility',
    'Wireless, easy-to-install system',
    '8-inch HD touch screen for clear visuals',
    'Real-time two-way talk with visitors',
    'Compatible with Alexa and Google Assistant',
    'Tamper alerts and night vision for 24/7 security'
  ],
  icon: DoorOpen
},
{
  id: '54',
  slug: 'hikvision-ip-video-doorbell-ds-kis602',
  name: 'HIKVISION IP Video Door Phone | DS-KIS602 VDP Bundle',
  category: 'Door Automation',

  shortDescription: '7-inch IP video door phone with TFT LCD, Wi-Fi, 2-way audio, night vision, and noise cancellation from HIKVISION.',
  longDescription: 'The HIKVISION DS-KIS602 IP Video Door Phone Bundle offers a professional-grade video intercom system ideal for home and small office use. Featuring a 7-inch colorful TFT LCD screen, built-in omnidirectional microphone and loudspeaker, and smart functions like noise suppression and echo cancellation, it ensures clear communication. Wireless connectivity, night vision, and sleek desk mount design make it perfect for modern home security setups.',
  images: [
    '/Solutions/Access Control/phone/phone20.png',
    '/Solutions/Access Control/phone/phone21.png',
    '/Solutions/Access Control/phone/phone22.png',
  ],
  dataAiHints: [
    'hikvision ip video doorbell',
    'ds-kis602 vdp bundle features',
    '7 inch hikvision video door phone',
    'wifi video doorbell with echo cancellation',
    'hikvision doorbell with night vision'
  ],
  specifications: [
    { key: 'Brand', value: 'HIKVISION' },
    { key: 'Model', value: 'DS-KIS602 VDP Bundle' },
    { key: 'Display', value: '7-inch TFT LCD (1024 × 600)' },
    { key: 'Audio', value: 'Built-in Microphone & Loudspeaker' },
    { key: 'Audio Features', value: 'Noise Suppression & Echo Cancellation' },
    { key: 'Connectivity', value: 'Wi-Fi, Wireless' },
    { key: 'Power Source', value: 'Battery Powered' },
    { key: 'Mounting', value: 'Desk Mount' },
    { key: 'Special Features', value: 'Night Vision, 2-Way Audio' }
  ],
  benefits: [
    'High-quality 7-inch HD touch display',
    'Wireless setup for easy installation',
    'Clear 2-way communication with echo cancellation',
    'Night vision ensures visibility in low light',
    'Compact, modern design with desk mount option',
    'Omnidirectional mic captures audio accurately',
    'Ideal for home and office security'
  ],
  icon: DoorOpen
},
{
  id: '55',
  slug: 'godrej-seethru-re7-lite-video-door-phone',
  name: 'Godrej Seethru RE7 Lite Video Door Phone',
  category: 'Door Automation',

  shortDescription: 'Smart video door phone from Godrej with 7-inch display, door unlock control, photo storage, and indoor-outdoor camera integration.',
  longDescription: 'The Godrej Seethru RE7 Lite Video Door Phone is an advanced home security solution featuring a 7-inch (17.78 cm) indoor monitor, door unlock functionality, and night vision support. It allows image and video capture, expandable SD card support, and connectivity with up to 3 indoor and 2 outdoor units. Designed for ease of use, it also includes a "Do Not Disturb" mode, digital photo frame feature, and adjustable brightness, contrast, and volume settings.',
  images: [
    '/Solutions/Access Control/phone/phone30.png',
    '/Solutions/Access Control/phone/phone31.png',
  ],
  dataAiHints: [
    'godrej seethru re7 lite specs',
    'video door phone with sd card support',
    'smart doorbell with indoor and outdoor monitor support',
    'door phone system with camera and em lock control',
    '7 inch smart video door phone godrej'
  ],
  specifications: [
    { key: 'Display', value: '17.78 cm (7-inch) Indoor Monitor' },
    { key: 'Camera', value: '700 TVL Pinhole with Night Vision' },
    { key: 'Video/Image Storage', value: 'Up to 128 videos & 100 images on SD card' },
    { key: 'Unlocking', value: 'Supports EM Lock Configuration' },
    { key: 'View Angle', value: '120° Wide Angle' },
    { key: 'Indoor Monitor Support', value: 'Up to 3 Indoor Units' },
    { key: 'Outdoor Unit Support', value: 'Up to 2 Outdoor Cameras' },
    { key: 'Audio/Visual Control', value: 'Adjustable Brightness, Contrast, Volume' },
    { key: 'Special Features', value: 'DND Mode, Digital Photo Frame, 16 Melodies' }
  ],
  benefits: [
    'Affordable home security from Godrej at ₹7,999',
    'Night vision-enabled outdoor camera for clear view in dark',
    'Expandable with up to 3 indoor and 2 outdoor units',
    'Can unlock door remotely using EM lock integration',
    'Records and stores up to 128 videos and 100 images',
    'Customizable settings for brightness, contrast, and volume',
    'Includes Do Not Disturb and digital photo frame features'
  ],
  icon: DoorOpen
},
{
  id: '56',
  slug: 'panasonic-vl-sa72-video-door-phone',
  name: 'Panasonic VL-SA72 Video Door Phone with Memory',
  category: 'Door Automation',

  shortDescription: 'Panasonic VL-SA72 is a smart, weatherproof video door phone with SD card support, electric lock integration, and hands-free intercom.',
  longDescription: 'The Panasonic VL-SA72 Video Door Phone is a premium wired intercom system featuring a 7-inch wide color screen, hands-free communication, electric lock integration, and expandable memory via SD card (up to 32 GB). Designed for modern home and office security, it includes face detection, room-to-room intercom functionality, and color night vision. The system is IP65-rated for weatherproof outdoor usage and provides real-time video monitoring with recording support.',
  images: [
    '/Solutions/Access Control/phone/phone40.png',
    '/Solutions/Access Control/phone/phone41.png',
    '/Solutions/Access Control/phone/phone42.png',

  ],
  dataAiHints: [
    'panasonic video door phone vl-sa72 specs',
    'doorbell with sd card and night vision',
    'wired smart door phone ip65 panasonic',
    'video intercom with electric lock integration',
    'panasonic 7 inch video door phone sd support'
  ],
  specifications: [
    { key: 'Display', value: '7-inch Wide Color Monitor' },
    { key: 'Camera', value: 'Color Night Vision with Face Detection' },
    { key: 'Storage Support', value: 'Up to 32 GB SD Card' },
    { key: 'Intercom Function', value: 'Handsfree & Room-to-Room Intercom' },
    { key: 'Waterproof Rating', value: 'IP65 for Outdoor Use' },
    { key: 'Resolution', value: '720p Video Capture' },
    { key: 'Electric Lock', value: 'Supports Electric Lock Integration' },
    { key: 'Connectivity', value: 'Wired, Corded Electric Power' },
    { key: 'Dimensions', value: '28 x 25 x 18 cm; 1.08 kg' }
  ],
  benefits: [
    '7-inch wide display for clear visitor viewing',
    'Handsfree communication with built-in intercom',
    'Supports SD card storage up to 32GB for recordings',
    'Integrated electric lock support for remote door control',
    'Color night vision and face detection enhance security',
    'IP65-rated weatherproof outdoor camera unit',
    'Durable wired setup ideal for long-term usage'
  ],
  icon: DoorOpen
},
{
  id: '57',
  slug: 'xray-baggage-scanner-x6550-essl',
  name: 'X-Ray Baggage Scanner X6550 | eSSL',
  category: 'Door Automation',

  shortDescription: 'Advanced X-ray baggage scanner with dual-energy detection, high wire resolution, and intelligent threat identification features.',
  longDescription: 'The eSSL X6550 is a premium X-ray baggage scanner designed for high-security environments such as airports, government buildings, and public infrastructure. Equipped with a dual-energy X-ray inspection system, HAMAMATSU® detector, and a 17-inch LED display, the X6550 offers superior wire resolution (40 AWG), penetration power (up to 38mm steel), and real-time intelligent threat detection. It supports additional modules like video surveillance, energy-saving mode, and bidirectional scanning. Designed with radiation safety and fingerprint login, this machine ensures top-notch security with user-friendly operation.',
  images: [
    '/Solutions/Access Control/phone/bag.png',


  ],
  dataAiHints: [
    'x6550 xray baggage scanner essl',
    'dual energy x-ray inspection machine',
    'high security airport baggage scanner',
    'x-ray scanner with 38mm steel penetration',
    'baggage scanner with fingerprint login and TIP training'
  ],
  specifications: [
    { key: 'Tunnel Size', value: '660mm × 510mm' },
    { key: 'Wire Resolution', value: '40 AWG (0.0787mm)' },
    { key: 'Penetration', value: '38mm Steel Board' },
    { key: 'Belt Height & Load', value: '1000mm height, ≤180 kg load' },
    { key: 'Display Monitor', value: '17-inch LED' },
    { key: 'Scanning Speed', value: '0.20 m/s' },
    { key: 'Cooling System', value: 'Oil-Sealed Cooling (100%)' },
    { key: 'Radiation Safety', value: '≤0.1 μGy/h @ 5cm (Leakage)' },
    { key: 'Power Consumption', value: '1 kVA' }
  ],
  benefits: [
    'High wire resolution with HAMAMATSU® detector',
    'True-color image output with 64x zoom support',
    'Intelligent fingerprint console for secure access',
    'Supports TIP training, luggage count, and timers',
    'Optional bidirectional scan and energy-saving mode',
    'Complies with ASA/ISO1600 film safety standards',
    'Ideal for airports, metro stations, & sensitive facilities',
    'Radiation leak-proof and safe for human operation',
    'Expandable with surveillance and weighing system'
  ],
  icon: ShieldCheck
},
{
  id: '58',
  slug: 'xray-baggage-scanner-astrosonic',
  name: 'X-Ray Baggage Scanner – Astrosonic Imaging Systems',
  category: 'Door Automation',

  shortDescription: 'Durable, corrosion-resistant X-ray baggage scanner designed for high-risk security environments with user-friendly operation.',
  longDescription: 'Astrosonic Imaging Systems brings a robust and efficient X-ray Baggage Scanner designed for critical security checkpoints. With a corrosion-resistant build, this scanner ensures long-term durability and optimal performance in demanding environments. Easy to operate and maintain, it is ideal for security screening at airports, public buildings, malls, and transport hubs. Its design prioritizes user convenience, low maintenance, and reliable detection of prohibited items.',
  images: [
    '/Solutions/Access Control/phone/bag2.png',

  ],
  dataAiHints: [
    'astrosonic xray baggage scanner',
    'corrosion resistant security scanner',
    'xray machine user friendly design',
    'xray baggage scanner for airports',
    'xray luggage scanner low maintenance'
  ],
  specifications: [
    { key: 'Color', value: 'White and Grey' },
    { key: 'Power Supply', value: 'Electric (Standard Input)' },
    { key: 'Application', value: 'Security-risk areas (Airports, Metro, Offices)' },
    { key: 'Special Features', value: 'Corrosion-resistant, User-friendly' },
    { key: 'Packaging', value: 'As per requirements' },
    { key: 'Usage', value: 'To scan for unwanted materials' },
    { key: 'Delivery Time', value: '1 Month' },
    { key: 'Supply Ability', value: '15 Units per Month' },
    { key: 'Brand', value: 'Astrosonic Imaging Systems' }
  ],
  benefits: [
    'Corrosion-resistant body for long-term use',
    'Highly durable under frequent operation',
    'User-friendly and intuitive operation panel',
    'Minimal maintenance requirements',
    'Smooth and reliable scanning performance',
    'Ideal for high-risk security areas',
    'Hassle-free installation and servicing'
  ],
  icon: ShieldCheck,
},
{
  id: '59',
  slug: 'godrej-metal-detector-gscan-9z',
  name: 'Godrej GSCAN-9Z Door Frame Metal Detector',
  category: 'Door Automation',

  shortDescription: '9-zone intelligent door frame metal detector by Godrej with high throughput, interference immunity, and uniform detection.',
  longDescription: 'The Godrej GSCAN-9Z is a high-performance door frame metal detector designed for advanced security screening. It offers true multi-zone detection with uniform top-to-bottom coverage, high throughput rates, and strong resistance to environmental interference. Ideal for airports, government buildings, and corporate premises, this walk-through metal detector features an embedded microprocessor for digital signal processing, memory-based configurations, and sleek, durable construction reinforced with aluminum alloy.',
  images: [
    '/Solutions/Access Control/phone/metal.png',
  ],
  dataAiHints: [
    'godrej door frame metal detector',
    'gscan 9z 9 zone walk-through detector',
    'metal detector with interference immunity',
    'multiple operating frequency metal detector',
    'passcode protected metal detector gate'
  ],
  specifications: [
    { key: 'Detection Zones', value: '9 True Zones with Top-to-Bottom Uniformity' },
    { key: 'Power Supply', value: 'SMPS 90 to 270 VAC, 50 Hz' },
    { key: 'Operating Temperature', value: '-10°C to +55°C' },
    { key: 'Humidity', value: '≤90% non-condensing' },
    { key: 'System Throughput', value: '30+ persons/minute' },
    { key: 'Dimensions (Inside)', value: '72W x 200H x 60D cm' },
    { key: 'Dimensions (Outside)', value: '82W x 215H x 60D cm' },
    { key: 'Weight', value: 'Net: 65 kg / Gross: 75 kg' },
    { key: 'Warranty', value: '1 Year on Electronics' }
  ],
  benefits: [
    'True 9-zone detection with high accuracy',
    'High system throughput with rapid auto reset',
    'Uniform detection from head to toe',
    'Excellent immunity to electronic interference',
    'Embedded microprocessor with memory retention',
    'Multiple operating frequencies (11 modes)',
    'Passcode-protected configuration',
    'Durable aluminum alloy build for stability',
    'Ideal for high-security areas like airports and government buildings'
  ],
  icon: ShieldCheck
},

{
  id: '60',
  slug: 'siddhi-hhmd-metal-detector',
  name: 'Siddhi Hand Held Metal Detector (HHMD)',
  category: 'Door Automation',

  shortDescription: 'High-sensitivity hand held metal detector by Siddhi Equipments for detecting all types of metals with rugged ABS design.',
  longDescription: 'The Siddhi HHMD is a high-performance hand held metal detector designed for efficient security screening. Built with a durable ABS body, it detects even minute traces of metals including gold, silver, copper, stainless steel, and more. Featuring dual battery support, in-built charging, IP65 protection, and visual/audio indicators, it is ideal for airports, events, corporate offices, and high-security zones.',
  images: [
    '/Solutions/Access Control/phone/metal20.png',
    '/Solutions/Access Control/phone/metal21.png',
    '/Solutions/Access Control/phone/metal22.png',



  ],
  dataAiHints: [
    'hand held metal detector india',
    'siddhi hhmd metal detector',
    'portable gold silver metal scanner',
    'security scanner battery powered',
    'handheld detector with charger'
  ],
  specifications: [
    { key: 'Material', value: 'ABS (Acrylonitrile Butadiene Styrene)' },
    { key: 'Dimensions', value: '39 x 13 x 4 cm' },
    { key: 'Weight', value: '360 grams' },
    { key: 'Power Source', value: 'Battery Powered (Dry Cell + Rechargeable)' },
    { key: 'Battery Life', value: 'Up to 30 hours' },
    { key: 'Sensitivity', value: 'Ultra High Sensitivity and Stability' },
    { key: 'IP Rating', value: 'IP65 Rated – Water & Dust Resistant' },
    { key: 'Indication', value: 'Visual & Audio (Metal Detection, Battery Low)' },
    { key: 'Country of Origin', value: 'India' }
  ],
  benefits: [ 
    'Detects minute amounts of all common and precious metals',
    'Dual battery system with in-built charger for longer usage',
    'Does not interfere with pacemakers or magnetic media',
    'Lightweight yet rugged ABS body for durability',
    'Clear visual and audio indicators for real-time detection',
    'Ideal for handheld use in tight or high-security checkpoints',
    '30-hour battery life supports extended security operations',
    'Rated IP65 for outdoor and rugged environments',
    'Made in India with high build quality and support'
  ],
  icon: ShieldCheck
},        


// Office & Home Automations

{
  id: '61',
  slug: 'excluzo-wifi-touch-panel-switch-1gang',
  name: 'Excluzo 1-Gang WiFi Touch Panel Switch (Set of 2)',
  category: 'Wifi solutions',
  shortDescription: 'Smart 1-Gang WiFi Touch Switch with timing, remote control, and family sharing for home or office automation.',
  longDescription: 'The Excluzo 1-Gang WiFi Touch Panel Switch is designed to bring modern convenience to your home or office. This smart switch supports WiFi connectivity, allowing remote control via smartphone apps and voice assistants. With features like scheduling, family device sharing, and a sleek glass touch panel, it enhances both functionality and aesthetics. Perfect for controlling lights or appliances from anywhere, it fits standard electrical boxes and is easy to install.',
  images: [
    '/Solutions/Automation/Wifi solutions/wifi10.png',
    '/Solutions/Automation/Wifi solutions/wifi12.png',
    '/Solutions/Automation/Wifi solutions/wifi11.png',
    '/Solutions/Automation/Wifi solutions/wifi13.png',

 
  ],
  dataAiHints: [
    'smart wifi switch 1 gang',
    'touch panel wifi light switch excluzo',
    'remote control light switch india',
    'timing switch with app control',
    'wifi touch switch for home automation'
  ],
  specifications: [
    { key: 'Type', value: '1-Gang WiFi Touch Panel Switch' },
    { key: 'Connectivity', value: 'WiFi (App Controlled)' },
    { key: 'Color', value: 'White' },
    { key: 'Functions', value: 'Touch, Timer, Scheduling, Sharing' },
    { key: 'Remote Control', value: 'Yes (via mobile app)' },
    { key: 'Sharing', value: 'Multi-user control supported' },
    { key: 'Compatible With', value: 'Alexa, Google Assistant' },
    { key: 'Included Items', value: 'Set of 2 Switches' },
    { key: 'Country of Origin', value: 'Hong Kong' }
  ],
  benefits: [
    'Remotely control lights/appliances via smartphone',
    'Support for timer and scheduled on/off switching',
    'Elegant touch panel with modern design',
    'Supports voice commands via Alexa or Google',
    'Easy sharing with family members through the app',
    'Energy saving through automation features',
    'Easy to install in standard switch boxes',
    'Ideal for home and office automation',
    'Set includes 2 switches for dual-zone control'
  ],
  icon: Wifi,
},
{
  id: '62',
  slug: 'cisco-isr-4331-router',
  name: 'Cisco ISR 4331 Router',
  category: 'Wifi solutions',
  shortDescription: 'High-performance enterprise-grade router with integrated security, scalable throughput, and advanced Cisco IOS XE software.',
  longDescription: 'The Cisco ISR 4331 Router is a powerful and flexible network solution designed for enterprise branches. Featuring a multi-core Cisco proprietary processor, this router delivers up to 100 Mbps of scalable performance, with options to upgrade. It supports advanced services such as secure boot, hardware encryption, and integrated threat defense, all powered by Cisco IOS XE. With its compact rack-mountable form factor and multiple interface options including Gigabit Ethernet and NIM slots, the ISR 4331 is ideal for secure, high-availability networking in modern infrastructures.',
  images: [
    '/Solutions/Automation/Wifi solutions/wifi30.png',

  ],
  dataAiHints: [
    'cisco isr 4331 router specs',
    'enterprise router with hardware encryption',
    'rack mount cisco ios xe router',
    'network router with gigabit ethernet ports',
    'secure branch router 100mbps throughput'
  ],
  specifications: [
    { key: 'Form Factor', value: 'Rack-mountable' },
    { key: 'Processor', value: 'Multi-core Cisco proprietary' },
    { key: 'Memory', value: '4 GB DRAM, 4 GB Flash (up to 16 GB each)' },
    { key: 'Interfaces', value: '2 Gigabit Ethernet, 2 NIM slots, 1 ISC slot' },
    { key: 'Throughput Capacity', value: 'Up to 100 Mbps (upgradable)' },
    { key: 'Operating System', value: 'Cisco IOS XE' },
    { key: 'Security Features', value: 'Hardware encryption, Secure boot, Threat defense' },
    { key: 'Performance', value: 'Advanced QoS, Up to 100 Mbps' },
    { key: 'Support', value: '24/7 Technical Support' }
  ],
  benefits: [
    'Enterprise-grade performance and scalability',
    'Integrated threat protection with hardware encryption',
    'Future-ready with modular interface slots',
    'Compact and rack-mountable for space efficiency',
    'Advanced QoS for optimized traffic handling',
    'Upgradable throughput based on branch requirements',
    'Reliable Cisco IOS XE for secure operations',
    'Suitable for medium to large branch offices',
    '24/7 Cisco technical support included'
  ],
  icon: Network
},
{
  id: '63',
  slug: 'ubiquiti-u6-plus-wireless-access-point',
  name: 'Ubiquiti Networks U6+ Dual-Band Wireless Access Point',
  category: 'Wifi solutions',
  shortDescription: 'High-speed dual-band WiFi 6 access point with 3 Gbit/s throughput, PoE+, and robust security features for business or home networks.',
  longDescription: 'The Ubiquiti U6+ is a powerful dual-band wireless access point supporting the latest WiFi 6 (802.11ax) standard. Ideal for enterprise or high-performance home networks, it delivers up to 3 Gbit/s wireless transmission speed. With features like WPA3 encryption, PoE+ support, and wall/ceiling mountability, this access point ensures easy installation and secure, high-speed connectivity. Its compact form factor and low power usage make it suitable for dense wireless environments and modern office setups.',
  images: [
    '/Solutions/Automation/Wifi solutions/wifi40.png',
    '/Solutions/Automation/Wifi solutions/wifi41.png',
    '/Solutions/Automation/Wifi solutions/wifi42.png',
    '/Solutions/Automation/Wifi solutions/wifi43.png',

  ],
  dataAiHints: [
    'wifi 6 wireless access point ubiquiti',
    'dual band gigabit poe+ wifi router',
    'u6+ wireless ap for office home',
    '802.11ax high speed access point india',
    'ubiquiti wifi 6 ap wall ceiling mount'
  ],
  specifications: [
    { key: 'Model', value: 'U6+' },
    { key: 'Wireless Standard', value: 'IEEE 802.11 a/b/g/n/ac/ax (WiFi 6)' },
    { key: 'Frequency Bands', value: 'Dual-Band (2.4GHz / 5GHz)' },
    { key: 'Max Wireless Speed', value: 'Up to 3 Gbit/s' },
    { key: 'Ethernet Ports', value: '1 × Gigabit Ethernet (PoE+)' },
    { key: 'Power Supply', value: '48V DC via PoE+ (25.5W max)' },
    { key: 'Mounting Options', value: 'Wall or Ceiling Mountable' },
    { key: 'Dimensions', value: '19.8 × 18.3 × 5.3 cm' },
    { key: 'Weight', value: '336g' }
  ],
  benefits: [
    'Delivers blazing-fast 3 Gbit/s speeds for seamless connectivity',
    'Supports the latest WiFi 6 (802.11ax) standard',
    'Dual-band operation for better traffic distribution and performance',
    'Compact and sleek design for discreet installation',
    'Includes PoE+ support – no separate power supply needed',
    'Advanced data encryption and WPA3 security protocol',
    'Ideal for both enterprise-grade networks and smart homes',
    'Easy wall/ceiling mounting with included hardware',
    'Compatible with Ubiquiti UniFi controller for centralized management'
  ],
  icon: Wifi
},
{
  id: '64',
  slug: 'tplink-archer-ax73-ax5400-wifi6-router',
  name: 'TP-Link Archer AX73 AX5400 Dual Band Wi-Fi 6 Router',
  category: 'Wifi solutions',
  shortDescription: 'High-performance AX5400 dual-band Wi-Fi 6 router with MU-MIMO, OFDMA, USB sharing, and 8K streaming support for up to 200+ devices.',
  longDescription: 'The TP-Link Archer AX73 is a powerful Wi-Fi 6 router delivering blazing speeds up to 5400 Mbps, ideal for heavy tasks like 8K streaming, gaming, and smart home connectivity. Featuring MU-MIMO, OFDMA, Beamforming, and a 1.5 GHz triple-core CPU, it ensures fast, stable connections for over 200 devices. With enhanced cooling, six antennas, HomeShield security, USB 3.0 sharing, and Alexa compatibility, it offers a complete wireless solution for modern homes and offices.',
  images: [
    '/Solutions/Automation/Wifi solutions/wifi20.png',
    '/Solutions/Automation/Wifi solutions/wifi21.png',
    '/Solutions/Automation/Wifi solutions/wifi22.png',
    '/Solutions/Automation/Wifi solutions/wifi23.png',
    '/Solutions/Automation/Wifi solutions/wifi24.png',
  ],
  dataAiHints: [
    'tp link ax5400 wifi 6 router',
    'archer ax73 mu mimo ofdma usb',
    'wifi 6 router for 8k streaming india',
    'dual band gigabit router tp link',
    'tp link wifi router 200 devices'
  ],
  specifications: [
    { key: 'Model', value: 'Archer AX73' },
    { key: 'Wireless Standard', value: 'Wi-Fi 6 (802.11ax)' },
    { key: 'Frequency Band', value: 'Dual-Band (2.4GHz & 5GHz)' },
    { key: 'Max Speed', value: 'Up to 5400 Mbps' },
    { key: 'Processor', value: '1.5 GHz Triple-Core CPU' },
    { key: 'Device Support', value: 'Connects 200+ devices' },
    { key: 'Security Features', value: 'HomeShield, WPA/WPA2/WPA3' },
    { key: 'USB Ports', value: '1 × USB 3.0' },
    { key: 'Dimensions', value: '14.7 x 27.3 x 4.9 cm; 660g' }
  ],
  benefits: [
    'Ultra-fast 5400 Mbps speed for 8K streaming and gaming',
    'Supports MU-MIMO and OFDMA for simultaneous high-speed connections',
    '1.5 GHz triple-core processor ensures smooth performance',
    'Covers large areas with 6 high-gain antennas and Beamforming',
    'Advanced security via TP-Link HomeShield and WPA3',
    'USB 3.0 port for media sharing and private cloud',
    'Easy setup using the TP-Link Tether app',
    'Supports voice control via Alexa and Google Assistant',
    'Ideal for smart homes, offices, and high-demand environments'
  ],
  icon: Wifi
},
{
  id: '65',
  slug: 'tplink-er605-v2-gigabit-vpn-router',
  name: 'TP-Link ER605 V2 Gigabit Wired VPN Router with Omada SDN',
  category: 'Wifi solutions',

  shortDescription: 'Professional-grade VPN router with 3 WAN ports, USB WAN, Omada SDN integration, advanced SPI firewall, and load balancing for SMB networks.',
  longDescription: 'The TP-Link ER605 V2 is a powerful wired VPN router designed for small to medium-sized businesses (SMBs). Equipped with 3 configurable WAN ports, 1 USB WAN for 4G/3G backup, and Omada SDN integration, it offers exceptional flexibility and control. The ER605 V2 supports various VPN protocols (IPSec, PPTP, L2TP, OpenVPN) with up to 20 concurrent tunnels, along with enterprise-grade firewall protections, DoS defense, and IP/MAC/URL filtering. Perfect for offices requiring secure remote access, load balancing, and robust performance.',
  images: [
    '/Solutions/Automation/Wifi solutions/wifi50.png',
    '/Solutions/Automation/Wifi solutions/wifi51.png',
    '/Solutions/Automation/Wifi solutions/wifi52.png',
  ],
  dataAiHints: [
    'tp link er605 v2 vpn router',
    '3 wan router for office india',
    'omada sdn integrated router',
    'usb wan backup router 4g modem',
    'tp link gigabit vpn firewall router'
  ],
  specifications: [
    { key: 'Model', value: 'TP-Link ER605 V2' },
    { key: 'Ports', value: '1 × Gigabit WAN, 2 × Gigabit WAN/LAN, 2 × Gigabit LAN' },
    { key: 'WAN Backup', value: '1 × USB WAN (Supports 4G/3G Modems)' },
    { key: 'SDN Integration', value: 'Compatible with Omada SDN' },
    { key: 'VPN Support', value: '20 IPsec, 16 OpenVPN, 16 L2TP, 16 PPTP' },
    { key: 'Firewall', value: 'SPI Firewall, DoS Defense, ALG Protocols' },
    { key: 'Standards', value: 'IEEE 802.3, 802.3u, 802.3ab, 802.3x, 802.1q' },
    { key: 'Security Features', value: 'IP/MAC/URL filtering, Ping of Death prevention' },
    { key: 'Use Case', value: 'SMB networks, remote VPN, multi-WAN failover' }
  ],
  benefits: [
    'Up to 3 WAN ports for optimized load balancing and failover',
    'USB port supports 4G/3G modems for internet backup',
    'Integrated with Omada SDN for centralized management',
    'Supports 20 secure VPN tunnels for site-to-site or remote access',
    'Built-in SPI firewall and DoS protection for advanced security',
    'Plug-and-play setup with Omada Controller',
    'Compact and rack-mountable for professional environments',
    'Ideal for small to mid-sized businesses needing reliable uptime'
  ],
  icon: Wifi
},
{
  id: '66',
  slug: 'christie-microtiles-led',
  name: 'Christie MicroTiles® LED',
  category: 'Conference room solutions',
  shortDescription: 'Next-generation modular LED display system with unparalleled design freedom, superior visual quality, and intelligent auto-calibration.',
  longDescription: 'Christie MicroTiles® LED is a revolutionary modular LED display system engineered for the most demanding visualization and collaboration applications. Developed in North America, it builds on the legacy of the original MicroTiles® with advanced LED technology, cabinet-free design, and innovative features like Neighbor Detection™, AutoMatch™, and QuickMount™ system. Designed for limitless creativity, it supports 90-degree corners, curves, 4K@120Hz processing, HDR10, and robust Active 3D experiences. With TAA compliance and cinema-grade image fidelity, it’s a powerful solution for corporate, control rooms, broadcast, and architectural environments.',
  images: [
    '/Solutions/Automation/Conference room solutions/led10.png',
    '/Solutions/Automation/Conference room solutions/led11.png',

  ],
  dataAiHints: [
    'modular led display christie',
    'microtiles led 4k hdr',
    'click-n-go led tiles',
    'led wall active 3d visualization',
    'taa compliant led video wall'
  ],
  specifications: [
    { key: 'Pixel Pitch Options', value: '0.75mm, 1.0mm' },
    { key: 'Resolution Support', value: 'Up to 4K @ 120Hz, HDR10 compatible' },
    { key: 'Processing', value: '12-bit color input, cinema-grade color' },
    { key: 'Design Features', value: '90° inside/outside corners, convex/concave curves' },
    { key: 'Mounting System', value: 'QuickMount™ laser-cut steel with machined wall anchors' },
    { key: 'Self-Calibration', value: 'Neighbor Detection™ and AutoMatch™ technology' },
    { key: 'Uniformity', value: '≥97% color and brightness across display lifetime' },
    { key: '3D Support', value: 'Active 3D, 60Hz per eye' },
    { key: 'Compliance', value: 'TAA-compliant, manufactured in Canada' }
  ],
  benefits: [
    'Cabinet-free design allows limitless display configurations',
    'Stunning visual fidelity with high brightness and 12-bit color',
    'Fast, accurate installation with proprietary QuickMount™ system',
    'Self-calibrating tiles maintain visual uniformity long-term',
    'Ideal for creative architectural, broadcast, or enterprise displays',
    'Support for high-end 3D and collaborative design environments',
    'TAA compliance supports federal and enterprise projects',
    'Minimal maintenance, scalable architecture'
  ],
  icon: Video
},
{
  id: '67',
  slug: 'christie-core-series-iii',
  name: 'Christie Core Series III LED Video Wall',
  category: 'Conference room solutions',

  shortDescription: 'Award-winning LED video wall solution with high reliability, energy efficiency, and flexible installation options – ideal for corporate and signage applications.',
  longDescription: 'Christie Core Series III delivers performance, reliability, and affordability in a high-quality LED video wall solution. With pixel pitches ranging from 0.9mm to 2.5mm, Core Series III is designed for corporate lobbies, meeting rooms, and digital signage where price and simplicity matter. It features lower power consumption, a lighter design, and ADA-compliant mounting. Full-front serviceability, concealed cable design, and compatibility with Christie controllers make it easy to install, maintain, and integrate. With bundled options and expert support, it’s a complete LED solution built to last.',
  images: [
    '/Solutions/Automation/Conference room solutions/led20.png',
    '/Solutions/Automation/Conference room solutions/led20.png',
    '/Solutions/Automation/Conference room solutions/led20.png',


  ],
  dataAiHints: [
    'christie core series led wall',
    'led video wall 0.9mm 1.2mm 1.5mm',
    'ada compliant front service led panel',
    'corporate lobby video wall christie',
    'energy efficient indoor led signage'
  ],
  specifications: [
    { key: 'Pixel Pitch Options', value: '0.9mm, 1.2mm, 1.5mm, 1.8mm, 2.5mm' },
    { key: 'Brightness', value: '800 nits' },
    { key: 'Color Depth', value: 'Up to 8-bit (with E510/E600 controller)' },
    { key: 'Serviceability', value: 'Full-front access' },
    { key: 'Mounting System', value: 'ADA-compliant direct-mount system' },
    { key: 'Lifespan', value: '100,000 hours (typical)' },
    { key: 'Power Efficiency', value: 'Lower power consumption design' },
    { key: 'Operation', value: '24/7 continuous use' },
    { key: 'Cable Design', value: 'Simple, concealed cable routing' },
    { key: 'Integration', value: 'Works seamlessly with Christie display solutions' }
  ],
  benefits: [
    'High-performance LED wall with exceptional reliability',
    'Available in multiple pixel pitches to suit any space',
    'Ideal for price-sensitive installations like lobbies and meeting rooms',
    'Supports Christie controllers for enhanced processing',
    'Front-access panels simplify maintenance and installation',
    'ADA-compliant, space-saving mounting system',
    'Lightweight design for easier handling',
    'Designed for 24/7 continuous operation',
    'Energy efficient, reducing total cost of ownership',
    'Backed by Christie’s 3-year warranty and technical support'
  ],
  icon: Video
},

{
  id: '68',
  slug: 'logitech-rally-board-65',
  name: 'Rally Board 65 All-in-One Video Conferencing Device',
  category: 'Conference room solutions',

  shortDescription: 'All-in-one 65" touchscreen conferencing device with integrated camera, speakers, mics, and sensors – designed for seamless hybrid collaboration.',
  longDescription: 'The Logitech Rally Board 65 is a next-gen collaboration device designed to simplify video conferencing with a single, elegant solution. It features a 65-inch UHD touchscreen with anti-glare and anti-fingerprint coatings, a powerful digital PTZ camera, high-fidelity speakers, far-field microphones, and integrated environmental sensors. With support for 4K60 HDMI, wired and wireless connectivity, AI-powered RightSound 2 audio, and beamforming technology, Rally Board 65 creates a professional-grade meeting experience. Ideal for conference rooms and hybrid workplaces, it is available in Graphite and Off-White color options with optional accessories like mobile carts.',
  images: [
    '/Solutions/Automation/Conference room solutions/led31.png',
    '/Solutions/Automation/Conference room solutions/led32.png',
    '/Solutions/Automation/Conference room solutions/led30.png',

  ],
  dataAiHints: [
    'rally board 65 logitech conferencing device',
    'video conferencing 65 inch smart board',
    'interactive display with ptz camera',
    'rally board for zoom microsoft teams',
    'all-in-one conference board with sensors'
  ],
  specifications: [
    { key: 'Display Size', value: '65-inch UHD (3840 x 2160), 16:9 aspect ratio' },
    { key: 'Touch Capability', value: 'IR-based touch with 20-point multitouch' },
    { key: 'Camera', value: '1-inch, 20.3MP, 4K/30fps with 4x digital zoom, 115.7° diagonal FoV' },
    { key: 'Speakers', value: 'Dual full-range 70mm + dual 31mm tweeters, 8W each' },
    { key: 'Microphones', value: 'Front array, pickup range up to 7m, beamforming AI' },
    { key: 'Audio Tech', value: 'RightSound 2 AI speech enhancement, echo cancellation' },
    { key: 'Sensors', value: 'Temperature, Humidity, CO2, PM2.5/PM10, VOCs, Radar, Ambient light' },
    { key: 'Operating System Support', value: 'Wired/Wireless internet required; compatible with Zoom, MS Teams, etc. (license not included)' },
    { key: 'Connectivity', value: 'HDMI In/Out, 3x USB-A, 1x USB-C (DP Alt), 1G Ethernet, Wi-Fi 6, Bluetooth LE' },
    { key: 'Security', value: 'AES-256 encryption, Arm TrustZone, PKI-based authentication' },
    { key: 'Power Supply', value: '100-240V AC built-in, 3m power cable' },
    { key: 'Weight (with Stand)', value: '50 kg' },
    { key: 'Warranty', value: '2-Year Hardware Warranty (1/3-Year Extended available)' }
  ],
  benefits: [
    'Simplifies conferencing with integrated AV and touchscreen in one device',
    'Crystal-clear visuals on a 4K anti-glare, anti-fingerprint screen',
    'AI-powered beamforming microphones and stereo audio with tweeters',
    'Motorized privacy shutter and depth-mapping camera enhance security and precision',
    'Built-in environmental and presence sensors for smart room analytics',
    'Compatible with major conferencing platforms like Zoom and Teams',
    'Easy installation with included table stand; cart accessory available',
    'Multiple I/O ports for expansion and dual-screen support',
    'Modern, professional aesthetic in Graphite or Off-White',
    'Trusted Logitech reliability and available extended warranty'
  ],
  icon: Video
},

{
  id: '69',
  slug: 'logitech-rally-bar-huddle',
  name: 'Rally Bar Huddle All-in-One Video Conferencing Device',
  category: 'Conference room solutions',

  shortDescription: 'Compact all-in-one conferencing device optimized for small rooms, offering 4K video, powerful audio, and AI-driven enhancements.',
  longDescription: 'The Logitech Rally Bar Huddle is an all-in-one video bar built for small spaces and huddle rooms. With a wide 120° field of view, 6-mic array with adaptive beamforming, powerful speaker, and integrated cable management, it ensures clear communication and neat installations. It supports full HD output, features AI noise suppression, and is compatible with popular collaboration platforms. The Rally Bar Huddle is easy to deploy and manage with Logitech Sync, and its replaceable front cover and mounting options make it highly flexible and maintenance-friendly.',
  images: [
    '/Solutions/Automation/Conference room solutions/sound.png',
    '/Solutions/Automation/Conference room solutions/sound11.png',
    '/Solutions/Automation/Conference room solutions/sound12.png',


  ],
  dataAiHints: [
    'logitech rally bar huddle small meeting rooms',
    'huddle room video conferencing system',
    'rally bar huddle 4k video bar',
    'logitech video bar with AI beamforming',
    'rally bar huddle for zoom and teams'
  ],
  specifications: [
    { key: 'Video Resolution', value: '4K (supports 1080p output)' },
    { key: 'Camera FoV', value: '120° diagonal, 113° horizontal, 80° vertical' },
    { key: 'Zoom & Pan', value: '4x HD digital zoom, ±48° pan, ±32° tilt' },
    { key: 'Speaker Driver', value: '55mm full-range ported speaker, 8W' },
    { key: 'Microphone Array', value: '6 DMIC MEMS microphones with 7m range' },
    { key: 'Beamforming', value: '5 adaptive acoustic broadside beams' },
    { key: 'Audio Enhancements', value: 'AI de-noising, AEC, VAD' },
    { key: 'Connectivity', value: 'HDMI In/Out, USB-A, USB-C, Gigabit Ethernet, WiFi, Bluetooth LE' },
    { key: 'Device Management', value: 'Logitech Sync' },
    { key: 'Mounting Options', value: 'Wall Mount, TV Mount (sold separately)' },
    { key: 'Touch Control Support', value: 'Compatible with Logitech Tap and Tap IP' },
    { key: 'Power', value: 'Auto-sensing, 100–240V input, 19V/2.1A output' },
    { key: 'Operating Temperature', value: '0–40°C' },
    { key: 'Storage Temperature', value: '-25–70°C' },
    { key: 'Security', value: 'AES-128, PKI, Arm TrustZone, API-authenticated access' },
    { key: 'Dimensions', value: '549.6 x 78.9 x 76.0 mm; Weight: 1.8 kg' },
    { key: 'Warranty', value: '2-Year Limited Hardware Warranty (1/3-year extended available)' }
  ],
  benefits: [
    'Optimized for small and huddle spaces with wide 120° field of view',
    'Crisp 4K visuals with motorized privacy shutter for security',
    'AI-based beamforming mics capture voices clearly even in noisy environments',
    'Compact and lightweight all-in-one design with replaceable fabric cover',
    'Easy to deploy, manage, and update remotely via Logitech Sync',
    'Supports HDMI input and output for flexible content sharing',
    'Multiple mounting options and clean cable management system',
    'Future-ready with upcoming support for second display',
    'Compatible with leading video conferencing software like Zoom and Teams',
    'Trusted Logitech design with long-term support and warranty options'
  ],
  icon: Video
},
{
  id: '70',
  slug: 'logitech-meetup-video-conferencing',
  name: 'Logitech MeetUp ConferenceCam',
  category: 'Conference room solutions',

  shortDescription: 'All-in-one conference camera for small meeting rooms with 4K optics, beamforming mics, and wide field-of-view.',
  longDescription: 'Logitech MeetUp is a premium ConferenceCam designed specifically for small meeting rooms and huddle spaces. With an ultra-wide 120° field of view, integrated beamforming microphones, and a custom 4K lens with motorized pan/tilt, MeetUp ensures everyone in the room is seen and heard. It supports 4K Ultra HD video and delivers crystal-clear audio with acoustic echo cancellation and noise suppression. RightSight auto-framing automatically adjusts the camera to frame participants. Easy to mount and manage, it is ideal for professional video collaboration.',
  images: [
    '/Solutions/Automation/Conference room solutions/cam10.png',
    '/Solutions/Automation/Conference room solutions/cam11.png',
    '/Solutions/Automation/Conference room solutions/cam12.png',
  ],
  dataAiHints: [
    'logitech meetup conference camera',
    'small room video conferencing solution',
    '4k conferencecam for huddle room',
    'beamforming mic speaker camera all in one',
    'logitech meetup with rightsight auto framing'
  ],
  specifications: [
    { key: 'Video Resolution', value: 'Up to 4K Ultra HD (3840x2160 @ 30fps)' },
    { key: 'Field of View', value: '120° diagonal, 113° horizontal, 80.7° vertical' },
    { key: 'Zoom & PTZ', value: '5x HD Zoom, ±25° Pan, ±15° Tilt (motorized)' },
    { key: 'Camera Presets', value: '3 camera position presets' },
    { key: 'Auto Framing', value: 'RightSight (Windows 10 64-bit/macOS 10.14+)' },
    { key: 'Microphones', value: '3 beamforming mics with 4m range (5m with Expansion Mic)' },
    { key: 'Microphone Features', value: 'AEC, VAD, background noise suppression, 32KHz sampling' },
    { key: 'Speaker Volume', value: 'Up to 95 dB SPL at 0.5 meter' },
    { key: 'Speaker Distortion', value: '<3% (200–300Hz), <1% (3K–10KHz)' },
    { key: 'Connectivity', value: 'USB, Bluetooth, RF Remote' },
    { key: 'Mounting', value: 'Integrated table/wall mount, optional TV mount' },
    { key: 'Security', value: 'Kensington security slot' },
    { key: 'Dimensions', value: '400 x 104 x 85 mm (Camera), 83 x 83 x 10 mm (Remote)' },
    { key: 'Weight', value: '1.04 kg (Camera)' },
    { key: 'Recommended Users', value: 'Up to 6 (8 with expansion mic)' },
    { key: 'Warranty', value: '2-Year Limited Hardware Warranty (1/3-Year Extension Available)' }
  ],
  benefits: [
    'Wide 120° field of view captures everyone in small rooms',
    'High-definition 4K optics with pan, tilt, and 5x zoom',
    'Beamforming microphone array ensures clear voice pickup',
    'RightSight auto-framing keeps participants centered',
    'Compact design with integrated mounting options',
    'Built-in speaker optimized for voice clarity with anti-vibration tech',
    'Bluetooth support for wireless audio connectivity',
    'Compatible with Zoom, Microsoft Teams, Google Meet, and more',
    'Ideal for professional-grade small room video conferencing',
    'Expandable mic support for larger group conversations'
  ],
  icon: Video
},
{
  id: '71',
  slug: 'POINTER-wireless-pointer-pen',
  name: ' Pointer Pen Presenter with Red Laser',
  category: 'Conference room solutions',

  shortDescription: 'Wireless PowerPoint and Keynote remote with red laser pointer, plug-and-play support, and 50ft range.',
  longDescription: 'The Jihaan Wireless Pointer Pen Presenter is a reliable presentation tool with a built-in red laser pointer and intuitive slide controls. Designed for teachers, students, and professionals, it supports PowerPoint, Keynote, Prezi, and more. Featuring plug-and-play functionality, a USB receiver, and up to 50 feet control distance, this sleek and ergonomic device ensures seamless presentations without interruptions. Its 2.4GHz wireless connection and broad OS compatibility make it ideal for both Mac and Windows users.',
  images: [
    '/Solutions/Automation/Conference room solutions/pen10.png',
    '/Solutions/Automation/Conference room solutions/pen11.png',
  ],
  dataAiHints: [
    'wireless powerpoint clicker with laser',
    'red laser presentation remote pen',
    'jihaan wireless presenter for teachers',
    'presentation pointer for windows mac linux',
    'plug and play ppt remote'
  ],
  specifications: [
    { key: 'Brand', value: 'Jihaan' },
    { key: 'Color', value: 'Black' },
    { key: 'Material', value: 'Plastic (ABS)' },
    { key: 'Weight', value: '120g' },
    { key: 'Dimensions', value: '13.4 x 7.2 x 4.2 cm' },
    { key: 'Control Distance', value: 'Up to 50 feet (15 meters)' },
    { key: 'Battery Type', value: '2 x 1.5V AAA (Not Included)' },
    { key: 'Radio Frequency', value: '2.4GHz' },
    { key: 'Laser Output Power', value: '<5mW (Red Laser)' },
    { key: 'Supported OS', value: 'Windows 2000/XP/Vista/7/8/10, Mac OS, Linux' },
    { key: 'Interface', value: 'USB 1.1, 2.0, 3.0' },
    { key: 'Functions', value: 'Next/Previous Slide, Blank Screen, Slide Show Launch, Laser Pointer' }
  ],
  benefits: [
    'Plug-and-play setup, no pairing required',
    'Compatible with PowerPoint, Keynote, Prezi, and more',
    'Built-in red laser pointer helps emphasize key points',
    'Wireless range up to 50 feet allows free room movement',
    'Ergonomic, lightweight, and compact design',
    'Supports multiple operating systems and USB standards',
    'Intuitive button layout for easy slide control',
    'Ideal for educators, professionals, and trainers',
    'Includes USB receiver and user manual for easy setup'
  ],
  icon: Pen
},
{
  id: '72',
  slug: 'knddt-a11-operator-console',
  name: 'KNDDT-A11 11.6-Inch Operator Console',
  category: 'Conference room solutions',

  shortDescription: 'Industrial-grade 11.6-inch touchscreen operator console with multi-OS support, dual display, and rich I/O for PA systems.',
  longDescription: 'The KNDDT-A11 11.6-Inch Operator Console is a robust industrial panel PC featuring a projected capacitive touchscreen, compact form factor, and extensive connectivity options. Built with an integrated chassis using cold-rolled steel and aluminum alloy, it supports dual display, Windows/Linux OS, and high-performance audio-visual controls, making it ideal for use in public address systems and industrial control applications.',
  images: [
    '/Solutions/Automation/Conference room solutions/phone10.png',
    '/Solutions/Automation/Conference room solutions/phone11.png',
    '/Solutions/Automation/Conference room solutions/phone12.png',
 
  ],
  dataAiHints: [
    'industrial touchscreen console',
    '11.6 inch operator console for PA system',
    'projected capacitive screen industrial pc',
    'KNDDT-A11 panel pc with dual display',
    'public address operator station'
  ],
  specifications: [
    { key: 'Model', value: 'KNDDT-A11' },
    { key: 'Screen Size', value: '11.6" TFT-LCD' },
    { key: 'Resolution', value: '1920 x 1080' },
    { key: 'Touch Type', value: 'Projected capacitive touch' },
    { key: 'Touch Resolution', value: '4096 x 4096' },
    { key: 'Click Life', value: 'More than 50 million times' },
    { key: 'Processor', value: 'Intel J6412 SOC' },
    { key: 'Memory', value: '4GB' },
    { key: 'Storage', value: '128GB SSD' },
    { key: 'Display Outputs', value: 'VGA, HDMI – supports three-screen synchronous/asynchronous output' },
    { key: 'Expansion Slot', value: '1*M.2 Key B & Key A for SATA SSD/4G/5G/WiFi6/Bluetooth' },
    { key: 'Audio Interface', value: '1* Audio Line-Out, 1* MIC In' },
    { key: 'Network', value: '1* Gigabit Ethernet' },
    { key: 'I/O Ports', value: '1* RJ45, 4* USB' },
    { key: 'Power Supply', value: '12V 5A adapter, AC220V input' },
    { key: 'Operating Temperature', value: '0°C ~ 50°C' },
    { key: 'Humidity', value: '5% ~ 90% (non-condensing)' },
    { key: 'Mounting', value: 'Desktop detachable bracket, angle adjustable' },
    { key: 'Microphone', value: '30mm gooseneck with aviation plug' },
    { key: 'Built-in Speaker', value: '8Ω 3W speaker' },
    { key: 'System Support', value: 'Windows / Linux' }
  ],
  benefits: [
    'Compact 11.6-inch touchscreen with Full HD resolution',
    'Durable build with cold rolled steel and aluminum alloy',
    'Supports Windows and Linux systems',
    'Multiple display outputs and rich I/O interface',
    'Industrial-grade reliability and service life (15,000 hours)',
    'Ideal for public address and control room applications',
    'Built-in speaker and gooseneck microphone',
    'Touch accuracy ±1mm with high transmittance (90%)',
    'Powerful Intel J6412 processor for multitasking performance',
    'Convenient bracket installation and angle adjustability'
  ],
  icon: Video
},
{
  id: '73',
  slug: 'knpa800plus-remote-microphone',
  name: 'KNPA800Plus Remote Microphone',
  category: 'PA system',
  shortDescription: 'Intelligent remote microphone with 7-inch touchscreen, PoE support, and zone-based paging for IP-based PA systems.',
  longDescription: 'The KNPA800Plus Remote Microphone is a robust, touch-controlled paging console ideal for advanced public address systems. With a built-in 7-inch touchscreen, internal speaker, gooseneck microphone, dual power and network redundancy, and AES67/AES70 protocol support, it is designed for precision paging, real-time control, and integration with complex zone-based audio systems.',
  images: [
    '/Solutions/Automation/Conference room solutions/phone21.png',
    '/Solutions/Automation/Conference room solutions/phone22.png',
  ],
  dataAiHints: [
    'remote microphone for pa system',
    'KNPA800Plus paging console',
    'AES67 AES70 touch paging station',
    'IP microphone with zone control',
    'microphone with PoE for public address'
  ],
  specifications: [
    { key: 'Model', value: 'KNPA800Plus' },
    { key: 'Touch Screen', value: '7-inch touch screen for control and zone selection' },
    { key: 'Microphone Type', value: 'Gooseneck Unidirectional Microphone' },
    { key: 'Audio Performance', value: 'Frequency Response: 100 Hz - 20 kHz' },
    { key: 'Signal-to-Noise Ratio', value: '≥ 60 dB' },
    { key: 'Audio Input', value: '0 dBV, 600 ohm (3.5mm socket) for background music' },
    { key: 'Monitor Speaker', value: 'Internal speaker, 80 dB SPL at 1m' },
    { key: 'Chime', value: 'Built-in chime with single, dual, and quad-tone options' },
    { key: 'Controls', value: 'Push-to-talk button, adjustable mic sensitivity, 192 DSS keys' },
    { key: 'Power Source', value: 'PoE or 24VDC via external power box' },
    { key: 'Power Consumption', value: '24VDC @ 24W' },
    { key: 'Audio Processing', value: 'Software-configurable Parametric EQ and Limiting' },
    { key: 'Data Communication', value: 'Digital IP with AES67 and AES70 protocol, encrypted' },
    { key: 'Integration', value: 'Supports zone, group-zone, and all-call paging' },
    { key: 'Cable Distance', value: 'Cat 5 within 100m; Fiber + Pair up to 3km' },
    { key: 'Power Redundancy', value: 'PoE or external 24VDC dual input support' },
    { key: 'Network Redundancy', value: 'Dual Ethernet ports for failover' },
    { key: 'Monitoring', value: 'Status indicators for power, failure, and switching' },
    { key: 'Operating Temp', value: '0°C to +40°C' },
    { key: 'Humidity', value: '35% to 80% RH (non-condensing)' },
    { key: 'Housing', value: 'Cold-rolled steel & ABS (Acrylonitrile Butadiene Styrene)' },
    { key: 'Dimensions', value: '340 x 320 x 97.9 mm (excluding microphone)' },
    { key: 'Weight', value: '4 kg' },
    { key: 'Expansion', value: 'Supports up to 192 paging buttons via extension modules' },
    { key: 'Functionality', value: 'Supports pre-recorded message distribution with zone targeting' },
    { key: 'Compliance', value: 'EN 54-16, ISO 7240-16, IEC 61082, 60300, 60068, 60050, 62368, 60601-1-1/-2' }
  ],
  benefits: [
    '7-inch touchscreen with intuitive UI for zone control',
    'Built-in chime and speaker for real-time audio feedback',
    'High-fidelity mic with software-based EQ and limiting',
    'Supports AES67/AES70 standards for secure IP audio',
    'Dual network and power redundancy for reliability',
    'Expandable up to 192 paging buttons',
    'Compatible with advanced zone-based paging applications',
    'PoE powered or external 24VDC supply options'
  ],
  icon: Mic
},

{
  id: '74',
  slug: 'knl9-ceiling-mounted-speaker',
  name: 'KNL9 Ceiling Mounted Speaker',
  category: 'PA system',

  shortDescription: 'Ceiling-mounted IP55-rated speaker available in fixed resistance and transformer models, designed for PA systems and indoor/outdoor installations.',
  longDescription: 'The KNL9 Ceiling Mounted Speaker offers high-quality sound performance and durability for public address and background music systems. Available in both fixed resistance (8 Ohm) and transformer-based (70V/100V) models with 6W or 15W power options, this speaker supports various deployment scenarios. The speaker is IP55 rated for dust and water resistance, features a 6.5-inch unit, aluminum grille with white powder finish, and is ceiling-mountable for discreet installation.',
  images: [
   '/Solutions/Automation/Conference room solutions/sound21.png',
    '/Solutions/Automation/Conference room solutions/sound22.png',
  ],
  dataAiHints: [
    'ceiling speaker for PA system',
    'IP55 waterproof ceiling speaker',
    'KNL9 transformer and 8 ohm speaker',
    '6.5 inch flush mounted speaker',
    'KNL9 ceiling mounted 15W audio speaker'
  ],
  specifications: [
    { key: 'Model', value: 'KNL9' },
    { key: 'Mounting', value: 'Ceiling Mounted' },
    { key: 'Speaker Unit', value: '6.5″ speaker driver' },
    { key: 'IP Rating', value: 'IP55' },
    { key: 'Material Finish', value: 'Aluminum with white powder painting' },
    { key: 'Audio Port', value: '2-pin terminal audio input' },

    // Fixed resistance 6W
    { key: 'Fixed Resistance Version (6W)', value: '8 Ohm, 6W, Freq. Range 80Hz–18kHz (-10dB), SPL 105±3dB (1W/1M), Rated SPL 125±3dB' },

    // Fixed resistance 15W
    { key: 'Fixed Resistance Version (15W)', value: '8 Ohm, 15W, Freq. Range 80Hz–18kHz (-10dB), SPL 105±3dB (1W/1M), Rated SPL 125±3dB' },

    // Transformer 6W
    { key: 'Transformer Version (6W)', value: '70V / 100V with transformer, 6W, Freq. Range 80Hz–18kHz (-10dB)' },

    // Transformer 15W
    { key: 'Transformer Version (15W)', value: '70V / 100V with transformer, 15W, Freq. Range 80Hz–18kHz (-10dB)' },

    { key: 'Speaker Dimensions', value: 'Φ240 × 142 mm' },
    { key: 'Weight', value: '3 kg' },

    // Packing
    { key: 'Inner Packing Box', value: '290 × 210 × 285 mm, 1 pc, G.W. 2.8 kg' },
    { key: 'Outer Packing Box', value: '740 × 275 × 545 mm, 8 pcs, G.W. 22 kg' }
  ],
  benefits: [
    'Available in both 8 Ohm and 70V/100V models',
    'Supports both 6W and 15W power configurations',
    'High SPL for clear audio in large spaces',
    'IP55-rated for dust and water resistance',
    'Compact ceiling-mountable design with clean finish',
    'Durable aluminum body with aesthetic powder coating',
    'Ideal for public address and music playback in indoor/outdoor areas'
  ],
  icon: Mic
},

{
  id: '75',
  slug: 'pa-power-supply-box',
  name: 'PA Power Supply Box',
  category: 'PA system',
  shortDescription: 'Multi-output PA system power supply supporting PoE, DC outputs, and advanced control and supervision interfaces.',
  longDescription: 'This PA Power Supply Box is a robust and intelligent power distribution unit designed for public address and IP-based audio systems. It supports multiple DC output levels including 48V, 24V, and 18V, with built-in PoE capabilities. It features control interfaces, network supervision, AES128 encryption, and watchdog security for fault tolerance. Ideal for modern audio networks requiring high reliability and multi-interface connectivity.',
  images: [
   '/Solutions/Automation/PA system/pa10.png',
   '/Solutions/Automation/PA system/pa11.png',

  ],
  dataAiHints: [
    'pa power supply with poe',
    '48v dc audio power box',
    'network powered public address system',
    'audio controller power management',
    'watchdog power supply with AES encryption'
  ],
  specifications: [
    { key: 'Mains Power Supply Input', value: '115 to 240 VRMS' },
    { key: 'Input Voltage Tolerance', value: '102 to 264 VRMS' },
    { key: 'Frequency Range', value: '50 to 60 Hz' },
    { key: 'Inrush Current', value: '< 20 A' },
    { key: 'Power Factor (PF)', value: '0.9 to 1.0' },
    { key: 'Leakage Current', value: '< 0.75 mA (120V), < 1.5 mA (240V)' },

    // DC Outputs
    { key: '48V DC Output (1-3)', value: '5.5A continuous, 7.0A peak' },
    { key: '24V DC Output', value: '0.7A continuous, 1.0A peak' },
    { key: '18V DC Lifeline Output (1-3)', value: '0.7A continuous, 1.0A peak' },

    // PoE
    { key: 'Power over Ethernet (PoE)', value: '48V, IEEE 802.3af (mode B), Max PD load: 12.95W' },

    // Power Consumption
    { key: 'Active Mode Consumption', value: '< 1000W' },

    // Audio Interface
    { key: 'Audio Output Level (100V / 70V mode)', value: '-0.6 dBV / -6 dBV' },
    { key: 'Frequency Response (±0.3 dB)', value: '120 Hz – 16.5 kHz' },
    { key: 'Signal-to-Noise Ratio (SNR)', value: '≥ 80 dBA' },

    // Control Interface
    { key: 'Contact Closed Resistance', value: '8 to 12 kΩ' },
    { key: 'Contact Open Resistance', value: '18 to 22 kΩ' },
    { key: 'Minimum Hold Time', value: '100 ms' },
    { key: 'Max Voltage to Ground (Input)', value: '24V' },
    { key: 'Control Output Contacts (1-8)', value: 'Relay SPDT 9 to 15V' },
    { key: 'Max Contact Voltage', value: '110VDC, 125VAC' },
    { key: 'Max Contact Current', value: '1A' },
    { key: 'Max Voltage to Ground (Output)', value: '500V' },

    // Supervision
    { key: 'Fan', value: 'Monitors rotation speed' },
    { key: 'Controller Continuity', value: 'Watchdog enabled' },
    { key: 'Network Interface Supervision', value: 'Link presence check' },

    // Network Interface
    { key: 'Ethernet', value: '100BASE-TX, 1000BASE-T' },
    { key: 'Protocol', value: 'TCP/IP' },
    { key: 'Audio Latency', value: '10 ms' },
    { key: 'Encryption', value: 'AES128' },
    { key: 'Control Data Security', value: 'Watchdog monitored' },
    { key: 'Ports', value: '5 x RJ45 (2 with PoE), 1 x SFP' }
  ],
  benefits: [
    'Multiple DC outputs: 48V, 24V, 18V',
    'Integrated PoE outputs with IEEE 802.3af support',
    'Built-in watchdog and system monitoring',
    'Audio SNR of ≥ 80 dBA for clarity',
    'AES128 encrypted audio communication',
    'Redundant and safe with contact isolation & high-voltage control support',
    'Compact and industrial-grade design'
  ],
  icon: Mic
},
{
  id: '76',
  slug: 'explosion-proof-pa-horn',
  name: 'Explosion Proof PA Horn (KNLB-EX10)',
  category: 'PA system',
  shortDescription: 'Durable 10W explosion-proof PA horn speaker with 105 dB SPL, suitable for industrial and hazardous zones.',
  longDescription: 'The KNLB-EX10 is a rugged explosion-proof horn speaker designed for high-performance audio broadcasting in hazardous environments. Featuring an 8-ohm AC impedance and transformer support for 70V/100V constant pressure systems, it delivers a powerful sound pressure level of 105 dB at 1W/m at 1000 Hz. Ideal for public address and emergency systems in oil & gas, mining, chemical plants, and other industrial areas requiring certified explosion-proof audio equipment.',
  images: [
    '/Solutions/Automation/PA system/sound10.png',
    '/Solutions/Automation/PA system/sound11.png',

  ],
  dataAiHints: [
    'explosion proof horn speaker',
    '10w industrial PA horn',
    '105 dB hazardous zone speaker',
    'knlb-ex10 pa horn',
    '8 ohm ex speaker with transformer'
  ],
  specifications: [
    { key: 'Model', value: 'KNLB-EX10' },
    { key: 'Resistance Horn AC Impedance', value: '8Ω' },
    { key: 'Transformer Support', value: '70V/100V constant pressure, 8Ω with transformer' },
    { key: 'Power Handling', value: '10W' },
    { key: 'Sound Pressure Level (SPL)', value: '105 dB @ 1W/m @ 1000Hz' },
    { key: 'Power Taps', value: 'Not specified' }
  ],
  benefits: [
    'Explosion-proof design for hazardous environments',
    'High SPL of 105 dB for loud and clear communication',
    'Supports both resistance and transformer-based audio systems',
    'Compact and durable for long-term industrial use',
    'Reliable performance in emergency and announcement systems'
  ],
  icon: Volume
},

{
  id: '77',
  slug: 'projection-loudspeaker-knl29-10w',
  name: 'Projection Loudspeaker (KNL29-10W)',
  category: 'PA system',
  shortDescription: 'Compact 10W projection loudspeaker ideal for announcements and background music in commercial spaces.',
  longDescription: 'The KNL29-10W projection loudspeaker delivers clear, wide-frequency sound performance in a compact and durable ABS housing. With a 2x5" full-range woofer, 86±3 dB sensitivity, and 100V line input, this speaker is ideal for distributed audio systems in public areas, corridors, or commercial buildings. It features selectable power taps of 2.5W, 5W, and 10W and supports a broad frequency response from 180Hz to 16kHz. Designed with a ferrite magnet, iron basket, and powder-coated iron mesh grille for durability.',
  images: [
    '/Solutions/Automation/PA system/sound20.png',
    '/Solutions/Automation/PA system/sound21.png',
  ],
  dataAiHints: [
    'projection loudspeaker',
    'knl29-10w speaker',
    '10w wall mount audio speaker',
    '100v abs speaker',
    'commercial announcement speaker'
  ],
  specifications: [
    { key: 'Model No', value: 'KNL29-10W' },
    { key: 'Sensitivity (1m/1W)', value: '86±3 dB' },
    { key: 'Dimensions', value: 'Φ138 mm × 200 mm' },
    { key: 'Material', value: 'ABS' },
    { key: 'Frequency Response', value: '180Hz–16kHz' },
    { key: 'Woofer Speaker Size', value: '2 × 5" full-range speaker' },
    { key: 'Rated Power', value: '10W' },
    { key: 'Power Options', value: '2.5W / 5W / 10W' },
    { key: 'Input Voltage', value: '100V' },
    { key: 'Grille', value: 'Powder coated iron mesh' },
    { key: 'Voice Coil Size', value: 'Φ0.12" × 2 Layer' },
    { key: 'Product Weight', value: '1.7 kg' },
    { key: 'Impedance', value: '6.8Ω' },
    { key: 'Voice Coil Frame', value: 'Paper' },
    { key: 'Magnet', value: 'Ferrite, φ60 × φ32 × 15 (Y30)' },
    { key: 'Basket', value: 'Iron' },
    { key: 'Diaphragm Material', value: 'Paper' },
    { key: 'Diaphragm', value: 'Fabric' },
    { key: 'Dust Cap', value: 'Mylar' }
  ],
  benefits: [
    'High-sensitivity full-range output',
    '100V line compatible for public address systems',
    'Selectable power taps allow system flexibility',
    'Durable ABS and iron construction for long life',
    'Ideal for indoor projection and corridor announcements'
  ],
  icon: Volume
},
{
  id: '78',
  slug: 'analog-epabx-system-genx12sac',
  name: 'Analog EPABX System (GENX12SAC)',
  category: 'PA system',

  shortDescription: '512-line Analog EPABX system for enterprise-level telephony with VoIP, GSM, and ISDN integration.',
  longDescription: 'The MATRIX GENX12SAC is a robust and scalable analog EPABX system designed for large-scale communication requirements. Supporting up to 512 lines, it integrates seamlessly with SARVAM UCS SME server software and offers support for VOIP, GSM/3G, ISDN (BRI/PRI), and digital subscribers. Ideal for organizations requiring a high-density telephony system with versatile trunk and subscriber support.',
  images: [
    '/Solutions/Automation/PA system/epa.png',
  ],
  dataAiHints: [
    '512 line epabx system',
    'matrix genx12sac pbx',
    'voip gsm isdn analog epabx',
    'large scale epabx for enterprises',
    'sarvam ucs sme compatible pbx'
  ],
  specifications: [
    { key: 'Model Name/Number', value: 'GENX12SAC' },
    { key: 'Brand', value: 'MATRIX' },
    { key: 'Number of Lines Supported', value: '512' },
    { key: 'Power Supply', value: '100-240V AC' },
    { key: 'Compatible Server Software', value: 'SARVAM UCS SME' },
    { key: 'VOIP (SIP) Trunks', value: 'Up to 99' },
    { key: 'GSM/3G Trunks', value: 'Up to 40' },
    { key: 'ISDN/T1/E1/PRI Channels', value: 'Up to 240 (8 ports)' },
    { key: 'ISDN BRI Channels', value: 'Up to 64 (32 ports)' },
    { key: 'IP Subscribers', value: 'Up to 999' },
    { key: 'Digital Subscribers', value: 'Up to 96' },
    { key: 'Usage/Application', value: 'Large Level Use' }
  ],
  benefits: [
    'Supports high-density analog and digital telephony',
    'Integrated support for SIP, GSM, ISDN BRI/PRI trunks',
    'Compatible with IP-based telephony (up to 999 IP subscribers)',
    'Scalable for growing enterprise communication needs',
    'SARVAM UCS SME compatibility enables unified communication'
  ],
  icon: Mic
},
{
  id: '79',
  slug: 'intercom-epabx-system-iris-ivdx-lite',
  name: 'Intercom EPABX System – IRIS IVDX Lite',
  category: 'PA system',

  shortDescription: 'Enterprise-grade EPABX system with VoIP, conferencing, ISDN, hot standby redundancy, and intelligent call routing.',
  longDescription: 'IRIS IVDX Lite is a high-performance intercom EPABX system tailored for large-scale communication. Featuring advanced VoIP integration, ISDN U interface support, conferencing capabilities of up to 128 parties, and full Q-Sig protocol compliance, it ensures seamless and reliable communication. The system also offers automatic failover (hot duplication), intelligent call distribution, and extensive MIS reporting, making it an ideal solution for mission-critical environments like enterprises, institutions, and government setups.',

  images: [
    '/Solutions/Automation/PA system/epa2.png',

  ],

  dataAiHints: [
    'intercom epabx system with voip',
    'iris ivdx lite pbx features',
    'epabx system with hot duplication',
    'conference supported epabx system',
    'acd call routing pbx'
  ],

  specifications: [
    { key: 'Mode Of Advertisement', value: 'Online' },
    { key: 'Installation Service Needed', value: 'Yes' },
    { key: 'Country of Origin', value: 'Made in India' },
    { key: 'Service Mode', value: 'Offline' },
    { key: 'Service Location', value: 'Pan India' },
    { key: 'Service Duration', value: '2 Days' }
  ],

  

  benefits: [
    'Ensures non-stop service with automatic backup control',
    'Compatible with both ISDN and IP for wider connectivity',
    'Allows advanced audio conferencing for teams',
    'Supports long-range ISDN connectivity',
    'Ideal for call centers with intelligent routing & MIS tracking'
  ],

  icon: Mic
},
{
  id: '80',
  slug: 'matrix-prasar-ucs-spark200',
  name: 'Matrix PRASAR UCS – SPARK200',
  category: 'PA system',

  shortDescription: 'Unified communication server supporting up to 250 IP subscribers, SIP trunks, voicemail, and redundancy.',
  longDescription: 'Matrix PRASAR UCS – SPARK200 is a robust unified communication server designed for IP-based enterprise telephony. With support for up to 250 IP subscribers, 99 SIP trunks, and 248 VoIP vocoder channels, it delivers seamless and high-capacity VoIP communication. Featuring 64 voicemail channels and active-active 1+1 redundancy, it ensures uninterrupted connectivity. Built with a powerful 900 MHz dual-core processor and compact design, it is ideal for medium to large enterprises requiring reliable and scalable IP communication infrastructure.',

  images: [
    '/Solutions/Automation/PA system/epa30.png',
    '/Solutions/Automation/PA system/epa31.png',
    '/Solutions/Automation/PA system/epa32.png',

  ],

  dataAiHints: [
    'matrix prasar ucs spark200',
    'ip pbx for 250 users',
    'voip communication server',
    'sip trunk supported pbx',
    'redundant ucs system'
  ],

  specifications: [
    { key: 'Product Type', value: 'PRASAR UCS (SPARK 200)' },
    { key: 'Model Name/Number', value: 'PRASAR UCS - SPARK200' },
    { key: 'Number of Lines Supported', value: '128' },
    { key: 'VoIP (SIP) Trunks', value: 'Up to 99' },
    { key: 'VoIP (VOCODER) Channels', value: 'Up to 248' },
    { key: 'Voice Mail Channels', value: 'Up to 64' },
    { key: 'IP Subscribers', value: 'Up to 250' },
    { key: 'Type of Switching', value: 'IP at Core' },
    { key: 'Processor Speed', value: '900 MHz Dual Core' },
    { key: 'Redundancy', value: '1+1 Active-Active' },
    { key: 'Country of Origin', value: 'Made in India' },
    { key: 'Dimensions (mm)', value: '275 (W) x 43.75 (H) x 185.6 (D)' }
  ],

  benefits: [
    'Supports up to 250 IP extensions for scalable communication',
    'Handles large volumes with 248 vocoder and 99 SIP trunks',
    'Built-in 64 voicemail channels for efficient messaging',
    'Ensures uptime with active-active redundancy',
    'Compact form factor with powerful dual-core processing'
  ],

  icon: Server
},

{
  id: '81',
  slug: 'casq-uc501-ippbx-device',
  name: 'CASQ UC-501 IPPBX Device',
  category: 'PA system',

  shortDescription: 'Blue CASQ UC-501 IPPBX with built-in UPS, up to 800 extensions, and modular FXO/FXS port support.',
  longDescription: 'The CASQ UC-501 is a feature-rich IPPBX device designed for flexible communication scenarios. It supports up to 800 extensions, 100 concurrent calls using G.729, and 300 with G.711 codec. With a modular design, the UC501 allows for easy customization of FXO/FXS analog ports. It features a built-in UPS, HD voice/video codec support, voicemail, call recording, conferencing, and advanced PBX features like IVR, Click2Call, WebRTC, and more. Ideal for organizations seeking a scalable, open-source SIP/IP PBX solution with optional PSTN integration.',

  images: [
    '/Solutions/Automation/PA system/epa40.png',
    '/Solutions/Automation/PA system/epa41.png',
    '/Solutions/Automation/PA system/epa42.png',


  ],

  dataAiHints: [
    'casq uc-501 ippbx',
    '800 extension ippbx',
    'blue ip pbx device with ups',
    'sip and iax2 trunk pbx',
    'modular fxofxs pbx system'
  ],

  specifications: [
    { key: 'Model Name/Number', value: 'UC-501' },
    { key: 'Color', value: 'Blue' },
    { key: 'Size/Dimension', value: '250 x 147 x 44 mm' },
    { key: 'Mounting', value: 'Table Top' },
    { key: 'Pri Card', value: 'No' },
    { key: 'Extension Register', value: 'Up to 800' },
    { key: 'Concurrent Calls (G.729)', value: '100' },
    { key: 'Concurrent Calls (G.711)', value: '300' },
    { key: 'Recording Capacity', value: '86,000 mins (.gsm), 9,500 mins (.wav)' },
    { key: 'Voicemail Capacity', value: '86,000 mins (.gsm), 9,500 mins (.wav)' },
    { key: 'Network Interfaces', value: '1x LAN, 1x WAN (10/100M)' },
    { key: 'USB Port', value: '1x USB 2.0' },
    { key: 'External Storage', value: '1x SD slot (up to 128GB)' },
    { key: 'Telephony Interfaces', value: 'FXS/FXO optional, up to 8' },
    { key: 'Onboard Storage', value: '16GB Flash' },
    { key: 'RAM', value: '1GB DDR3' },
    { key: 'Audio Interfaces', value: '1x MIC, 1x SPK' }
  ],

  benefits: [
    'Built-in UPS for uninterrupted telephony operations',
    'Modular and scalable with flexible FXO/FXS port configuration',
    'Supports HD voice and video codecs including OPUS, G.722, SILK, VP8',
    'Robust PBX features including IVR, CDR, call routing, paging and WebRTC',
    'Ideal for VoIP, SIP, PSTN and IAX2 integration in a compact form factor'
  ],

  icon: Phone
},
{
  id: '82',
  slug: 'alcatel-lucent-omnipcx-office-aleoxo',
  name: 'Analog Lines Alcatel Lucent Omnipcx Office (ALE OXO)',
  category: 'PA system',

  shortDescription: 'Scalable hybrid communication system with analog, digital, IP, and SIP support for SMB and enterprise use.',
  longDescription: 'The Alcatel Lucent Omnipcx Office (ALE OXO) is a versatile hybrid PBX system designed to support analog, digital, IP, and SIP-based endpoints and trunks. It offers seamless scalability for businesses with advanced collaboration tools and cloud integration. Available in multiple form factors including Compact, Small, Medium, and Large, OXO supports modular slot expansion and 100% IP connectivity via OXO Connect Evolution. Designed for reliability and flexibility, it is ideal for small to large organizations requiring a robust, hybrid cloud communications platform.',

  images: [
    '/Solutions/Automation/PA system/epa50.png',
    '/Solutions/Automation/PA system/epa51.png',

  ],

  dataAiHints: [
    'alcatel lucent omnipcx office',
    'ale oxo hybrid pbx system',
    'analog digital ip sip pbx',
    'omnipcx oxo connect evolution',
    'scalable enterprise communication system'
  ],

  specifications: [
    { key: 'Model Name/Number', value: 'ALE OXO' },
    { key: 'Brand', value: 'Alcatel Lucent' },
    { key: 'Color', value: 'Black' },
    { key: 'Power Supply', value: 'AC/DC' },
    { key: 'Connectivity', value: 'Analog Lines' },
    { key: 'Networking Type', value: 'WAN, LAN' },
    { key: 'Number Of Ports/Channels', value: '32' },
    { key: 'Ethernet', value: 'Yes' },
    { key: 'PoE Support', value: 'Yes (OXO Connect Evolution)' },
    { key: 'Rack Options', value: '1U to 3U, Wall-mount and Stackable' },
    { key: 'Modular Slots', value: 'Up to 8 (varies by edition)' },
    { key: 'Fanless Options', value: 'Available (Compact and Evolution models)' },
    { key: 'Weight', value: '610 g (OXO Connect Evolution)' }
  ],

  benefits: [
    'Supports hybrid connectivity: analog, digital, IP, SIP',
    'Scalable for small, medium, and large business environments',
    'Fanless, compact designs available for silent operation',
    'Cloud-ready with enterprise-grade voice and collaboration services',
    'Easy wall-mount or rack installation with modular expandability'
  ],

  icon: Server
},
{
  id: '83',
  slug: 'ucm6202-ippbx-system-grandstream',
  name: 'UCM6202 IPPBX System',
  category: 'PA system',

  shortDescription: 'Enterprise-grade IP PBX system by Grandstream with voice, video, data, and mobility features, ideal for small to medium businesses.',
  longDescription: 'The Grandstream UCM6202 IPPBX System is designed to meet the centralized communication needs of modern businesses. This appliance integrates voice, video calling, conferencing, surveillance, and access control features into a unified solution. With up to 5-layer IVR, 2 FXS ports with lifeline capability, and an intuitive LCD interface, it’s an affordable and scalable system. It comes without any licensing or recurring costs, making it a secure, powerful, and cost-effective IP communication platform for growing businesses.',

  images: [
    '/Solutions/Automation/PA system/epa60.png',
    '/Solutions/Automation/PA system/epa61.png',


  ],

  dataAiHints: [
    'grandstream ip pbx system',
    'ucm6202 ippbx for business',
    'centralized communication system',
    'ip pbx with voice and video',
    'grandstream ucm6200 series'
  ],

  specifications: [
    { key: 'Model', value: 'UCM6202' },
    { key: 'Brand', value: 'Grandstream' },
    { key: 'Size/Dimension', value: '226mm x 155mm x 34.5mm' },
    { key: 'Weight', value: '0.51kg' },
    { key: 'LCD Display', value: '128x32 graphic LCD with DOWN & OK button' },
    { key: 'Analog Telephone FXS Ports', value: '2 ports with lifeline support' },
    { key: 'Customizable Auto Attendant', value: 'Up to 5 layers of IVR' },
    { key: 'Operating Temperature', value: '0 to 40°C' },
    { key: 'Storage Temperature', value: '-10 to 60°C' },
    { key: 'Humidity', value: '10-90%' }
  ],

  benefits: [
    'Unifies voice, video, data, and access control in one system',
    'Supports up to 5-level IVR for advanced call routing',
    'No licensing fees or recurring costs',
    'Easy remote management and configuration',
    'Reliable lifeline support in case of power outage'
  ],

  icon: Phone
},
{
  id: '84',
  slug: 'purple-ippbx-e1000-tec',
  name: 'Purple IP PBX (E1000, TEC Certified)',
  category: 'PA system',

  shortDescription: 'Asterisk-based, TEC certified IP PBX with 120 channels and multi-interface connectivity including PRI, GSM, SIP, and Analog.',
  longDescription: 'The Purple E1000 IP PBX from *astTECS is an Asterisk-based, TEC certified IP telephony solution designed for enterprise-level deployments. Supporting up to 120 channels and compatible with PRI, GSM, SIP trunks, and analog lines, it provides advanced features like IVR, call recording, voice conferencing, and web-based receptionist console. With no vendor lock-in, it ensures easy integration with existing systems and offers high flexibility at low cost.',

  images: [
    '/Solutions/Automation/PA system/epa70.png',
    '/Solutions/Automation/PA system/epa71.png',
    '/Solutions/Automation/PA system/epa72.png',
  ],

  dataAiHints: [
    'purple ip pbx e1000',
    'asterisk ip pbx tec certified',
    'enterprise ip pbx with pri gsm',
    '*astTECS ippbx system',
    '120 channel rack mount pbx'
  ],

  specifications: [
    { key: 'Model Number', value: 'E1000' },
    { key: 'Brand', value: '*astTECS' },
    { key: 'Number Of Channels', value: '120' },
    { key: 'Packaging Type', value: 'As per industry standards' },
    { key: 'Connectivity', value: 'Analog, GSM, PRI, SIP trunk' },
    { key: 'Color', value: 'Purple' },
    { key: 'PRI Card', value: 'Express' },
    { key: 'Mounting', value: 'Rack Mount' },
    { key: 'Weight', value: '12 - 15 kg' },
    { key: 'Dimension', value: '19 inch' },
    { key: 'Temperature', value: '0 - 50 °C' },
    { key: 'Power Consumption', value: '100 / 240 AC' },
    { key: 'Frequency', value: '50-60Hz' },
    { key: 'Network Interface', value: '2X Ethernet 10/100 base-RJ-45' },
    { key: 'ISDN', value: 'PRI Interface (optional)' }
  ],

  benefits: [
    'TEC certified by DoT, Government of India',
    'Supports PRI, GSM, Analog, and SIP trunks',
    'Asterisk-based platform with no vendor lock-in',
    'Web-based console, IVR, call logging, conferencing',
    'Easy software integration (SMS, WhatsApp, Email)'
  ],

  icon: Phone
},
{
  "id": "107",
  "slug": "tecmojo-12u-open-frame-network-rack",
  "name": "Tecmojo 12U Open Frame Network Rack",
  "category": "Conference room solutions",

  "shortDescription": "12U open-frame network rack by Tecmojo for 19\" IT and AV equipment, floor standing or wall-mounted, includes 2x 1U rack shelves and mounting hardware.",
  "longDescription": "The Tecmojo 12U Open Frame Network Rack is a durable, versatile rack designed to support 19-inch standard networking, AV, and server equipment. Made from robust alloy steel, it can be used as a floor-standing or wall-mounted unit. Ideal for IT rooms, studios, or telecom setups, the rack comes with two 1U shelves and all necessary mounting hardware. With a compact design and flexible mounting options, it's perfect for organizing patch panels, switches, and AV gear efficiently.",

  "images": [
    '/Solutions/Automation/Conference room solutions/rack10.png',
    '/Solutions/Automation/Conference room solutions/rack11.png',
    '/Solutions/Automation/Conference room solutions/rack12.png',
 

  ],

  "dataAiHints": [
    "12u open frame rack for it gear",
    "av network rack wall mount or floor standing",
    "rack for 19 inch server switch",
    "tecmojo network rack for server room",
    "network cabinet with shelves included"
  ],

  "specifications": [
    { "key": "Brand", "value": "Tecmojo" },
    { "key": "Rack Size", "value": "12U" },
    { "key": "Mount Type", "value": "Wall Mount / Floor Standing" },
    { "key": "Form Factor", "value": "AT (19-inch standard)" },
    { "key": "Material", "value": "Alloy Steel" },
    { "key": "Included Accessories", "value": "2 x 1U Rack Shelves, Mounting Hardware" },
    { "key": "Dimensions (L x W x H)", "value": "51.18 x 51.99 x 53.39 cm" },
    { "key": "Weight", "value": "13 kg" },
    { "key": "Compatible Devices", "value": "Server, AV, and Networking Equipment" },
    { "key": "Batteries Included", "value": "No" },
    { "key": "ASIN", "value": "B0CSJR2RZB" },
    { "key": "Customer Rating", "value": "4.5 out of 5 stars (145 reviews)" },
    { "key": "First Available", "value": "16 April 2024" }
  ],

  "benefits": [
    "Strong alloy steel construction ensures durability and stability.",
    "12U rack space ideal for organizing switches, routers, patch panels, and more.",
    "Dual functionality: can be wall-mounted or placed as a floor-standing unit.",
    "Includes 2 x 1U shelves for additional storage convenience.",
    "Perfect for IT infrastructure, AV setups, and home networking.",
    "Efficient airflow and cable management with open-frame design."
  ],

  icon: Server
},
{
  "id": "108",
  "slug": "star-work-5-shelf-metal-storage-rack",
  "name": "STAR WORK 5-Shelf Adjustable Metal Storage Rack – 63\" Black Freestanding Utility Rack",
  "category": "Conference room solutions",


  "shortDescription": "Adjustable 5-shelf black metal storage rack by STAR WORK. Ideal for garage, bedroom, office or library with 800 lbs load capacity.",
  "longDescription": "The STAR WORK 5-Shelf Adjustable Metal Storage Rack offers a durable and space-efficient solution for organizing your space. Constructed with engineered wood shelves and steel bootless rivets, this freestanding rack is designed for tool storage, home organization, or office use. With adjustable shelves, anti-slip foot mats, and easy DIY assembly, it provides both functionality and style in one package. With a maximum weight capacity of over 360 kg and sleek black finish, it's perfect for heavy-duty or aesthetic use in bedrooms, libraries, garages, and more.",

  "images": [
    '/Solutions/Automation/Conference room solutions/rack20.png',
    '/Solutions/Automation/Conference room solutions/rack21.png',
    '/Solutions/Automation/Conference room solutions/rack22.png',
    '/Solutions/Automation/Conference room solutions/rack23.png',

  
  ],

  "dataAiHints": [
    "adjustable metal storage rack black",
    "garage utility 5 shelf rack",
    "steel bootless rivet rack 63 inches",
    "star work display shelving unit",
    "freestanding black rack for bedroom or office"
  ],

  "specifications": [
    { "key": "Brand", "value": "STAR WORK" },
    { "key": "Material", "value": "Engineered Wood & Steel Frame" },
    { "key": "Number of Shelves", "value": "5" },
    { "key": "Color", "value": "Black" },
    { "key": "Dimensions (H x W x D)", "value": "92 x 33 x 7.5 cm (converted from inches: 63\" x 24\" x 12\")" },
    { "key": "Weight Capacity", "value": "362.87 kg (800 lbs)" },
    { "key": "Style", "value": "5 Shelf Premium" },
    { "key": "Assembly Required", "value": "Yes (tool-free rivet system)" },
    { "key": "Room Type", "value": "Bedroom, Library, Playroom, Office" },
    { "key": "Special Features", "value": "Adjustable, Durable, Detachable, Non-Slip Foot Mats" },
    { "key": "Installation Type", "value": "Freestanding" },
    { "key": "Product Care", "value": "Wipe with Dry Cloth" },
    { "key": "Furniture Finish", "value": "Black Coating" },
    { "key": "Item Weight", "value": "6 kg" },
    { "key": "Model Number", "value": "STRK6SET-25" },
    { "key": "ASIN", "value": "B09SZGXHN3" },
    { "key": "Customer Rating", "value": "4.0 out of 5 stars (6,752 reviews)" },
    { "key": "Country of Origin", "value": "India" },
    { "key": "Date First Available", "value": "9 November 2021" }
  ],

  "benefits": [
    "Heavy-duty weight capacity supports up to 362.87 kg for reliable storage.",
    "Adjustable shelving to fit items of various heights and sizes.",
    "Steel rivet construction ensures stability and strength without tools.",
    "Ideal for organizing tools, books, decor, or office supplies.",
    "Sleek black finish blends with modern interiors.",
    "Quick and easy installation – tool-free with detachable design."
  ],

  icon: Server
},
{
  "id": "109",
  "slug": "plantex-2u-wall-mount-cctv-dvr-nvr-rack",
  "name": "Plantex 2U Wall Mount CCTV/DVR/NVR Rack with Power Socket & Glass Door – White",
  "category": "Conference room solutions",


  "shortDescription": "2U wall-mounted DVR/NVR rack by Plantex, made from rust-proof metal with lockable glass door, power socket, and cable management – ideal for CCTV and networking devices.",
  "longDescription": "The Plantex 2U Wall Mount DVR/NVR Rack offers a durable, secure, and organized solution for housing your CCTV, server, or networking equipment. Made with high-quality 0.7 mm 24-gauge metal sheets and finished with 7-layer powder coating, this white metal cabinet is rust-proof and sturdy. It comes equipped with a transparent locking glass door, built-in 3-socket power board with a 6A plug, ventilation provision for fan installation, and two cable entry ports. Conforming to 19-inch standards, this rack is ideal for homes, offices, ATMs, shops, and server rooms.",

  "images": [
    '/Solutions/Automation/Conference room solutions/rack30.png',
    '/Solutions/Automation/Conference room solutions/rack31.png',
    '/Solutions/Automation/Conference room solutions/rack32.png',
    '/Solutions/Automation/Conference room solutions/rack33.png',
   
  ],

  "dataAiHints": [
    "2U DVR wall mount rack",
    "plantex network cabinet white",
    "lockable glass door rack for CCTV",
    "dvr box with power socket and ventilation",
    "metal server rack 2U wall mount"
  ],

  "specifications": [
    { "key": "Brand", "value": "Plantex" },
    { "key": "Color", "value": "White" },
    { "key": "Rack Size", "value": "2U" },
    { "key": "Material", "value": "Metal (0.7 mm 24-gauge steel)" },
    { "key": "Coating", "value": "7-layer powder coated for rust resistance" },
    { "key": "Dimensions (L x W x H)", "value": "40 x 40.5 x 15.5 cm" },
    { "key": "Mounting Type", "value": "Wall mount" },
    { "key": "Front Door", "value": "Transparent glass door with keylock" },
    { "key": "Sockets Included", "value": "3 power sockets + 6A plug" },
    { "key": "Fan Mount Provision", "value": "Yes (fan not included)" },
    { "key": "Cable Management", "value": "2 cable entry holes" },
    { "key": "Compatibility", "value": "Fits 4/8 channel DVRs and 19” standard devices" },
    { "key": "Use Case", "value": "Suitable for Home, Office, ATMs, Shops, Server rooms" },
    { "key": "Country of Origin", "value": "India" },
    { "key": "Assembly", "value": "Wall mounting materials included" }
  ],

  "benefits": [
    "Secure and compact 2U rack for storing DVRs, routers, or servers.",
    "Transparent locking door ensures both visibility and safety.",
    "Built-in power sockets eliminate the need for extra power strips.",
    "Ventilation-ready with fan mount option to prevent overheating.",
    "Heavy-duty construction with rust-proof powder coating.",
    "Ideal for multiple environments – homes, offices, ATMs, and more."
  ],

  icon: Lock
},
{
  "id": "110",
  "slug": "42u-floor-standing-network-server-rack",
  "name": "42U Floor Standing Network Server Rack – 600mm x 1000mm",
  "category": "Conference room solutions",


  "shortDescription": "Heavy-duty 42U floor standing server/network rack made of powder-coated mild steel – ideal for data centers and network equipment installations.",
  "longDescription": "This 42U Floor Standing Network Server Rack is built from durable mild steel and is ideal for organizing and securing IT equipment in data centers, network closets, or server rooms. The 600mm wide and 1000mm deep design allows for ample cable management and ventilation space. Powder-coated for rust resistance and designed for stability, this rack supports various 19-inch networking components including servers, switches, patch panels, and power distribution units (PDUs).",

  "images": [
    '/Solutions/Automation/Conference room solutions/rack40.png',
    '/Solutions/Automation/Conference room solutions/rack41.png',

  ],

  "dataAiHints": [
    "42U floor standing server rack",
    "network equipment cabinet 600x1000mm",
    "data center rack enclosure",
    "mild steel server cabinet",
    "floor mounted 19-inch rack"
  ],

  "specifications": [
    { "key": "Model Number", "value": "PR-FS-27U-600" },
    { "key": "Rack Size", "value": "42U" },
    { "key": "Material", "value": "Mild Steel" },
    { "key": "Finish", "value": "Powder Coated" },
    { "key": "Width", "value": "600 mm" },
    { "key": "Depth", "value": "1000 mm" },
    { "key": "Installation Type", "value": "Floor Standing" },
    { "key": "Rack Standard", "value": "Compatible with 19\" equipment" },
    { "key": "Ventilation", "value": "Perforated panels or fan tray support (optional)" },
    { "key": "Doors", "value": "Front and rear doors (optional glass or perforated)" },
    { "key": "Cable Management", "value": "Side and rear cable entry points" }
  ],

  "benefits": [
    "High-capacity 42U design accommodates multiple servers and network devices.",
    "Built from mild steel for enhanced strength and longevity.",
    "Powder-coated finish ensures rust resistance and sleek appearance.",
    "Ideal for data centers, telecom rooms, and enterprise-grade setups.",
    "Large depth (1000mm) allows for better airflow and cable routing."
  ],



  icon: Lock

},

{
  "id": "111",
  "slug": "22u-stainless-steel-floor-mounted-network-rack",
  "name": "22U Stainless Steel Floor Mounted Network Rack with Standard Accessories",
  "category": "Conference room solutions",


  "shortDescription": "Durable 22U floor-mounted stainless steel network rack with curved ventilated doors, side locks, and standard accessories for small networking and telecom setups.",
  "longDescription": "This 22U Stainless Steel Floor Mounted Network Rack is designed for compact IT setups, telecom, AV labs, and automation systems. Built with a premium stainless steel frame and finished with a high-quality powder coating, it offers durability, aesthetic appeal, and excellent ventilation. Side panels are independently lockable for ease of maintenance, and multifunction cable routing options are included. Curved front and double rear screen doors allow for optimal airflow. The rack supports simultaneous installation of casters and support feet, and optional pedestals enhance stability and routing flexibility. Certified under stringent ISO manufacturing standards.",

  "images": [
    '/Solutions/Automation/Conference room solutions/rack50.png',

  ],

  "dataAiHints": [
    "22U stainless steel server rack",
    "floor mounted AV/networking rack",
    "telecom rack 600x600",
    "network cabinet with cable routing",
    "ISO certified electronics rack"
  ],

  "specifications": [
    { "key": "Model Number", "value": "PR-FS-22U-600" },
    { "key": "Rack Size", "value": "22U" },
    { "key": "Material", "value": "Stainless Steel" },
    { "key": "Finish", "value": "Powder Coated" },
    { "key": "Dimensions (W x D x H)", "value": "600 x 600 x 1048 mm" },
    { "key": "Installation Type", "value": "Floor Mounted" },
    { "key": "Panel Access", "value": "Independently lockable side panels" },
    { "key": "Cable Routing", "value": "Multi-functional rear routing panels" },
    { "key": "Door Type", "value": "Curved front screen door and double rear screen door" },
    { "key": "Accessories", "value": "Casters, support feet, optional pedestals" },
    { "key": "Brand Compatibility", "value": "Netrack, Valrack, MRS, APW, D-Link, Rittal" },
    { "key": "Certifications", "value": "ISO 9001, ISO 14001, ISO 27001, ISO 45001" }
  ],

  "benefits": [
    "Strong stainless steel construction with precision design.",
    "Side panels with individual locks for secure and easy maintenance.",
    "Excellent airflow from screen doors to prevent overheating.",
    "Supports both casters and support feet simultaneously.",
    "Ideal for small network rooms, automation labs, and AV equipment."
  ],



  icon: Lock

}
,
{
  "id": "112",
  "slug": "homemate-smart-home-control-panel",
  "name": "HomeMate Smart Home Control Panel – WiFi, ZigBee, Bluetooth Smart Scene Wall Switch with LCD Touchscreen",
  "category": "Wifi solutions",

  "shortDescription": "4-inch LCD touch smart wall panel to control lights, temperature, and smart scenes via WiFi, ZigBee, or Bluetooth – compatible with HomeMate app for remote access.",
  "longDescription": "The HomeMate Smart Home Control Panel offers an intuitive and powerful smart control interface for modern homes. With its 4-inch LCD touch screen, users can manage lighting, temperature, and customized smart scenes directly from the wall or remotely via smartphone. Compatible with ZigBee and Bluetooth for seamless integration into smart ecosystems, this panel includes real-time weather and temperature display, replacing traditional switches with intelligent control. Perfect for homes aiming to modernize their automation experience.",

  "images": [
    '/Solutions/Automation/Wifi solutions/switch10.png',
    '/Solutions/Automation/Wifi solutions/switch11.png',
    '/Solutions/Automation/Wifi solutions/switch12.png',

  ],

  "dataAiHints": [
    "WiFi smart home panel with LCD screen",
    "HomeMate ZigBee touch control switch",
    "Bluetooth wall-mounted smart scene controller",
    "Smart home switch with weather display",
    "WiFi ZigBee LCD home controller with app support"
  ],

  "specifications": [
    { "key": "Brand", "value": "HomeMate" },
    { "key": "Model Number", "value": "HCP101" },
    { "key": "Panel Size", "value": "4-inch LCD Touch Screen" },
    { "key": "Operation Mode", "value": "Off" },
    { "key": "Current Rating", "value": "6 Amps" },
    { "key": "Operating Voltage", "value": "230 Volts" },
    { "key": "Contact Type", "value": "Normally Open" },
    { "key": "Mounting Type", "value": "Wall Mount" },
    { "key": "Switch Type", "value": "Rocker" },
    { "key": "Material", "value": "Glass" },
    { "key": "Connectivity Protocol", "value": "Wi-Fi, ZigBee, Bluetooth" },
    { "key": "Control Method", "value": "Remote via iOS, Android App" },
    { "key": "Features", "value": "Clock, Date, Temperature & Weather Display, Smart Scene Customization" },
    { "key": "Actuator Type", "value": "Touch Button" },
    { "key": "Mounting Hardware", "value": "Included" },
    { "key": "Country of Origin", "value": "India" }
  ],

  "benefits": [
    "All-in-one control panel for lights, devices, and smart scenes.",
    "4-inch LCD touch display with intuitive interface.",
    "Real-time weather, date, and temperature display.",
    "App-based remote access for control from anywhere.",
    "Supports Wi-Fi, ZigBee, and Bluetooth connectivity for wide compatibility."
  ],



  icon: Lock

},
{
  "id": "113",
  "slug": "remote-touch-switch-board-18-module",
  "name": "Remote Touch Switch Board – 8 Lights, 2 Fans, 2 Switches, 2 Sockets (18 Module, Black)",
  "category": "Wifi solutions",


  "shortDescription": "18-module remote touch switchboard to control 8 lights, 2 fans, 2 switches, and 2 sockets. Operable via touch and remote, supports home automation integration.",
  "longDescription": "The Remote Touch Switch Board is a modern smart switch system designed for intuitive home control. With a sleek black 18-module design, it supports 8 lights, 2 fans, 2 switches, and 2 sockets. Operable by both touch and remote (up to 50 ft range), it combines elegance with functionality. Easy to install by any electrician, this board is perfect for smart home upgrades. It’s compatible with automation systems, offering potential voice/app control and programmable schedules for energy efficiency and convenience.",

  "images": [    
    '/Solutions/Automation/Wifi solutions/switch20.png',
    '/Solutions/Automation/Wifi solutions/switch21.png',
    '/Solutions/Automation/Wifi solutions/switch22.png',

  ],

  "dataAiHints": [
    "touch remote switch board 18 module",
    "smart modular switch panel for lights and fans",
    "remote control light switchboard with sockets",
    "black touch switch panel for home automation",
    "18-module smart wall switch board"
  ],

  "specifications": [
    { "key": "Module Size", "value": "18 Module" },
    { "key": "Color", "value": "Black" },
    { "key": "Material", "value": "Plastic" },
    { "key": "Current Rating", "value": "6A" },
    { "key": "Circuit Type", "value": "Two Way" },
    { "key": "Switch Type", "value": "Modular Touch Switch" },
    { "key": "LED Indicators", "value": "Blue & White" },
    { "key": "Control Method", "value": "Touch & Remote" },
    { "key": "Remote Range", "value": "50 feet" },
    { "key": "Device Compatibility", "value": "8 Lights, 2 Fans, 2 Switches, 2 Sockets" },
    { "key": "Installation", "value": "Wall-mount; electrician installable" },
    { "key": "Home Automation", "value": "Compatible (Voice/App control optional)" },
    { "key": "Included Components", "value": "1 Touch Switch Board, 1 Remote, 1 Remote Cell, 1 Installation Manual, 4 Screws" },
    { "key": "Price (INR)", "value": "₹4,799" }
  ],

  "benefits": [
    "Operate up to 14 electrical points with a single board.",
    "Touch-sensitive and remote-controlled for easy access.",
    "Stylish design enhances interior aesthetics.",
    "Fast installation by any certified electrician.",
    "Ideal for modern smart homes with automation compatibility."
  ],

},
{
  "id": "114",
  "slug": "smarteefi-touch-5-port-wifi-smart-switch-board",
  "name": "Smarteefi Touch 5 Port Modular WiFi Smart Switch Board – 3 Lights, 1 Fan, 1 Smart Plug (Black, 6M)",
  "category": "Wifi solutions",


  "shortDescription": "WiFi-enabled 5-port smart touch switchboard with 3 switch controls, 1 fan regulator, and 1 smart plug. Compatible with Alexa & Google Home, offers scheduling, timers, and manual override.",
  "longDescription": "The Smarteefi Touch 5 Port Modular WiFi Smart Switch Board is a 6-module (6M) smart panel that replaces traditional switchboards. It includes 3 independent light switches, 1 fan speed regulator, and 1 smart plug, all controllable via the Smarteefi app, voice commands (Alexa & Google Home), and manual touch. The device supports daily/weekly scheduling, countdown timers, power state restoration, and notification alerts. Ideal for modern smart homes, the board enables seamless automation and remote access while supporting multiple user control.",
  
  "images": [
    '/Solutions/Automation/Wifi solutions/switch30.png',
    '/Solutions/Automation/Wifi solutions/switch31.png',

  ],

  "dataAiHints": [
    "smarteefi wifi switchboard with fan control",
    "smart modular switch panel for lights and plug",
    "alexa compatible smart touch switch board",
    "5 port smart switch board with app and timer",
    "black 6M smart wifi switch panel"
  ],

  "specifications": [
    { "key": "Size", "value": "6M (220mm x 90mm x 40mm)" },
    { "key": "Color", "value": "Black" },
    { "key": "Material", "value": "Plastic" },
    { "key": "Current Rating", "value": "6A" },
    { "key": "Operating Voltage", "value": "230V" },
    { "key": "Switch Type", "value": "Touch Switch" },
    { "key": "Mounting Type", "value": "Wall Mount" },
    { "key": "Switches", "value": "3 Switches for Lights, 1 for Plug, 1 Fan Speed Regulator" },
    { "key": "Connectivity", "value": "Wi-Fi (App Controlled)" },
    { "key": "Voice Assistant Support", "value": "Alexa & Google Home" },
    { "key": "Manual Control", "value": "Touch + Remote Override" },
    { "key": "Scheduling", "value": "Daily/Weekly Schedule with Offline Execution" },
    { "key": "Countdown Timer", "value": "Supported" },
    { "key": "Last State Memory", "value": "Restore / Always ON / Always OFF options" },
    { "key": "Notifications", "value": "Mobile alerts for switch ON/OFF activity" },
    { "key": "Multiple User Access", "value": "Supported via shared access" },
    { "key": "Product Dimensions", "value": "22 x 9 x 4 cm" },
    { "key": "Item Weight", "value": "300 g" }
  ],

  "benefits": [
    "Control lights, fan, and plug remotely or manually.",
    "Works with Alexa and Google Home for voice automation.",
    "Offline scheduling supported with inbuilt memory and clock.",
    "Touch operation with sleek and modern design.",
    "Ideal for home automation upgrades and energy-efficient routines."
  ],
  icon: Lock
},












// --- Intruder Detection System ---


{
  id: '85',
  slug: 'perimeter-security-intrusion-alarms',
  name: 'Perimeter Security & Intrusion Alarms',
  category: 'Perimeter Security',

  shortDescription: 'Advanced intrusion detection and perimeter protection system supporting multiple sensor types and centralized alert management.',
  longDescription: 'This Perimeter Security & Intrusion Alarm system combines advanced sensor technologies such as infrared, microwave, fiber optic, and seismic detection with multi-zone control and real-time alerting. The system supports up to 2,000 meters of fence coverage, offers >95% detection accuracy, and operates in harsh environments. Integrated alarm and control software enables real-time monitoring, logging, and remote management.',

  images: [
    '/Solutions/Intruder/Perimeter Security/intr1.png',

  ],

  dataAiHints: [
    'perimeter intrusion detection system',
    'multi-zone alarm and alert system',
    'infrared and microwave sensor alarm',
    'tamper detection intrusion alert',
    'security system with remote control panel'
  ],

  specifications: [
    { key: 'Sensor Types', value: 'Infrared (IR beam), Microwave, Fiber Optic, Seismic, Electrostatic, Vibration' },
    { key: 'Detection Range', value: 'IR: 30–200m; Microwave: 10–300m; Fence sensors: up to 2,000m' },
    { key: 'Detection Accuracy', value: '>95%, with adjustable sensitivity levels' },
    { key: 'Operating Conditions', value: 'Weather-resistant (IP65+); -20°C to +60°C' },
    { key: 'Installation', value: 'Pole-mounted, buried, wall/fence-mounted, or surface-mounted' },
    { key: 'Tamper Detection', value: 'Built-in anti-tamper and sabotage alarms' },
    { key: 'Alarm Types', value: 'Audible Sirens (≥110 dB), Flashing Lights, Remote Alerts' },
    { key: 'Communication Protocols', value: 'GSM, LTE, Wi-Fi, Ethernet, RS485, Modbus' },
    { key: 'Alert Outputs', value: 'SMS, App Notification, Control Room Interface, Auto-dialer' },
    { key: 'Backup Battery', value: '12V/7Ah; ≥8 hours backup' },
    { key: 'Central Controller', value: 'ARM-based microprocessor; multi-zone (4 to 64 zones)' },
    { key: 'User Interface', value: 'LCD/Touchscreen, Web dashboard, Mobile app' },
    { key: 'Event Logging', value: 'Stores 1000+ events with timestamps' },
    { key: 'Remote Management', value: 'Via mobile app or desktop software' }
  ],

  benefits: [
    'Supports diverse sensor technologies for reliable perimeter protection',
    'High detection accuracy with anti-tamper and sabotage alarms',
    'Multi-zone monitoring and centralized alert control',
    'Real-time notifications via SMS, app, or auto-dial',
    'Remote management and event logging enabled'
  ],

  icon: Server
},
{
  id: '86',
  slug: 'smart-sensor-unauthorized-access-alerts',
  name: 'Smart Sensor for Unauthorized Access Alerts',
  category: 'Smart Sensors',

  shortDescription: 'Multi-sensor smart device for detecting unauthorized access via motion, magnetic field, or vibration.',
  longDescription: 'The Smart Sensor for Unauthorized Access Alerts is a compact, intelligent device designed to detect intrusion through changes in magnetic fields, motion, vibrations, or beam interruptions. Supporting wireless connectivity and real-time alerts, it’s compatible with leading smart home platforms and suitable for both indoor and outdoor use. Ideal for homes, offices, and restricted areas requiring automated intrusion detection and notification.',

  images: [
    '/Solutions/Intruder/Smart Sensors/intr2.png',

  ],

  dataAiHints: [
    'motion sensor with mobile alert',
    'wireless magnetic contact alarm',
    'smart home unauthorized access sensor',
    'PIR motion sensor with Wi-Fi and Zigbee',
    'remote intrusion detector with Alexa support'
  ],

  specifications: [
    { key: 'Sensor Type', value: 'Magnetic contact sensor, PIR motion sensor, Vibration, IR beam, Ultrasonic' },
    { key: 'Detection Method', value: 'Magnetic field change, motion detection, shock/vibration, beam interruption' },
    { key: 'Detection Range', value: 'PIR: 6–12m; IR Beam: up to 200m; Magnetic: ≤25mm gap' },
    { key: 'Detection Angle', value: 'PIR: 110° horizontal / 60° vertical' },
    { key: 'Response Time', value: '<1 second' },
    { key: 'Power Supply', value: '3V CR123A battery (1–2 years) or 5V USB-powered' },
    { key: 'Communication', value: 'Wi-Fi (2.4 GHz), Zigbee, Z-Wave, LoRaWAN, GSM (optional SIM slot)' },
    { key: 'Alert Modes', value: 'Mobile app notification, SMS, control panel, cloud alert' },
    { key: 'Smart Features', value: 'Remote arming/disarming, user rules, real-time alerts, event logging' },
    { key: 'Integration', value: 'Alexa, Google Home, Apple HomeKit, IFTTT' },
    { key: 'Tamper Protection', value: 'Anti-tamper switch triggers alert if removed or opened' },
    { key: 'Environmental Rating', value: 'IP65 weather-resistant' },
    { key: 'Operating Temperature', value: '-10°C to +60°C' },
    { key: 'Installation', value: 'Surface mount with adhesive or screws; plug-and-play' },
    { key: 'Dimensions', value: '75mm x 30mm x 20mm' }
  ],

  benefits: [
    'Real-time intrusion alerts via app or SMS',
    'Supports various communication protocols including Zigbee and GSM',
    'Easily integrates with smart home ecosystems like Alexa and Google Home',
    'Quick response time and remote configuration features',
    'Tamper-proof design with IP65 outdoor durability'
  ],

  icon: AlarmCheck
},
{
  id: '87',
  slug: 'door-sensor-magnetic-contact',
  name: 'Door Sensor (Magnetic Contact)',
  category: 'Smart Sensors',

  shortDescription: 'Compact magnetic contact sensor for detecting open/close events on doors and windows.',
  longDescription: 'The Door Sensor is a magnetic contact-based intrusion detection device designed to sense the opening and closing of doors or windows. Featuring surface or recessed mounting options, low power consumption, and optional wireless capabilities (Zigbee, Z-Wave, Wi-Fi, Bluetooth), it is ideal for residential, commercial, or industrial security systems. It provides real-time alerts and can integrate into smart home setups with tamper-proof, durable housing.',

  images: [
    '/Solutions/Intruder/Smart Sensors/intr3.png',

  ],

  dataAiHints: [
    'magnetic door contact sensor',
    'reed switch door sensor',
    'smart door sensor with Wi-Fi',
    'Zigbee door open detector',
    'dry contact door switch'
  ],

  specifications: [
    { key: 'Type', value: 'Magnetic Contact Sensor / Reed Switch' },
    { key: 'Operating Principle', value: 'Magnetic field disruption' },
    { key: 'Installation', value: 'Surface-mounted or recessed' },
    { key: 'Material', value: 'ABS plastic / Polycarbonate housing' },
    { key: 'Operating Voltage', value: '3V to 12V DC (commonly 5V or 12V)' },
    { key: 'Current Consumption', value: '< 50 mA (passive sensors draw minimal or no current when idle)' },
    { key: 'Contact Type', value: 'Normally Closed (NC) or Normally Open (NO)' },
    { key: 'Switching Distance', value: '10–25 mm (varies by model)' },
    { key: 'Output Type', value: 'Dry contact / Digital signal' },
    { key: 'Wireless Option', value: 'Yes (Zigbee, Z-Wave, Wi-Fi, Bluetooth available in smart variants)' },
    { key: 'Operating Temperature', value: '-10°C to +50°C (standard)' },
    { key: 'Dimensions', value: '~50 x 15 x 10 mm per part (typical)' },
    { key: 'Mounting', value: 'Adhesive backing or screw-mountable' }
  ],

  benefits: [
    'Reliable open/close detection for doors and windows',
    'Supports integration with various smart home systems',
    'Low power consumption with long-lasting battery life in smart models',
    'Flexible mounting options for easy installation',
    'Available in wired and wireless variants'
  ],

  icon: Lock
},

{
  id: '88',
  slug: 'beam-sensor-photoelectric-infrared',
  name: 'Beam Sensor (Photoelectric / Infrared)',
  category: 'Smart Sensors',


  shortDescription: 'Infrared beam sensor for intrusion detection using light beam interruption technology.',
  longDescription: 'Beam sensors, also known as photoelectric or infrared sensors, detect the presence or movement of objects or individuals by monitoring interruptions in a light beam between a transmitter and receiver. Available in through-beam, retroreflective, and diffuse reflective types, these sensors offer reliable intrusion detection across a wide range of industrial and security applications. They feature robust weather-resistant housings, fast response time, and versatile mounting options for both indoor and outdoor setups.',

  images: [
    '/Solutions/Intruder/Smart Sensors/intr4.png',

  ],

  dataAiHints: [
    'infrared beam sensor',
    'photoelectric motion detector',
    'through beam retroreflective sensor',
    'IR beam security detector',
    'industrial photoelectric sensor'
  ],

  specifications: [
    { key: 'Sensor Type', value: 'Infrared Beam / Photoelectric Sensor' },
    { key: 'Operation Type', value: 'Through-beam / Retroreflective / Diffuse reflective' },
    { key: 'Detection Range', value: '1–100 meters (depending on model and type)' },
    { key: 'Power Supply', value: '12–24V DC (some models support 110–240V AC)' },
    { key: 'Output Type', value: 'Relay (NO/NC), NPN/PNP open collector, digital output' },
    { key: 'Response Time', value: '<20 ms (typical)' },
    { key: 'Beam Type', value: 'Infrared LED or Laser' },
    { key: 'Alignment', value: 'Required for through-beam; easier with built-in indicators (LED)' },
    { key: 'Current Consumption', value: 'Typically <100 mA' },
    { key: 'Operating Temperature', value: '-20°C to +60°C (model dependent)' },
    { key: 'Protection Rating', value: 'IP65 / IP66 (for outdoor/industrial models)' },
    { key: 'Housing Material', value: 'ABS, polycarbonate, or aluminum alloy' },
    { key: 'Dimensions', value: 'Varies – small compact to larger weatherproof units' },
    { key: 'Mounting', value: 'Wall-mount or bracket mount' },
    { key: 'Indicators', value: 'Power and signal LEDs' },
    { key: 'Wavelength', value: 'Typically 850–950 nm (IR spectrum)' }
  ],

  benefits: [
    'Accurate object or person detection using infrared beam interruption',
    'Available in multiple operation modes for different use cases',
    'Ideal for perimeter security, automation, and industrial sensing',
    'High weather resistance for outdoor deployment',
    'Fast response time with multiple output options for easy integration'
  ],

  icon: Lock
},


{
  id: '89',
  slug: 'vibration-sensor-accelerometer-detector',
  name: 'Vibration Sensor (Accelerometer)',
  category: 'Smart Sensors',

  shortDescription: 'Sensor for detecting vibration, shock, or mechanical movement in security and industrial applications.',
  longDescription: 'A vibration sensor, also known as a vibration detector or accelerometer, is designed to detect mechanical oscillations, shocks, or displacement in equipment, windows, doors, or structural surfaces. These sensors are widely used in security systems for tampering detection, as well as in industrial environments for machine condition monitoring. Available in piezoelectric, MEMS, capacitive, and resistive types, they support analog or digital outputs and are suited for a wide range of environmental conditions.',

  images: [
    '/Solutions/Intruder/Smart Sensors/intr5.png',

  ],

  dataAiHints: [
    'vibration detector for window security',
    'piezoelectric vibration sensor',
    'accelerometer sensor for tamper detection',
    'machine monitoring vibration sensor',
    'shock and displacement sensor'
  ],

  specifications: [
    { key: 'Sensor Type', value: 'Piezoelectric / MEMS / Capacitive / Resistive' },
    { key: 'Measurement Types', value: 'Acceleration, Velocity, Displacement, Shock' },
    { key: 'Output Type', value: 'Analog (voltage), Digital, or Switch-type (on/off)' },
    { key: 'Frequency Range', value: '1 Hz – 10 kHz (varies by application)' },
    { key: 'Sensitivity', value: '10–100 mV/g (for analog types)' },
    { key: 'Range', value: '±2g to ±200g or more (depending on model)' },
    { key: 'Power Supply', value: '3.3V to 24V DC (typical)' },
    { key: 'Operating Temperature', value: '-40°C to +85°C (standard industrial grade)' },
    { key: 'Output Signal', value: 'Analog Voltage / Digital Pulse / Alarm Signal' },
    { key: 'Mounting', value: 'Screw-in, magnetic base, adhesive, or PCB mounted' },
    { key: 'Housing Material', value: 'ABS plastic, stainless steel, aluminum, or ceramic' },
    { key: 'Protection Level', value: 'IP65 / IP67 / ATEX (for hazardous environments)' },
    { key: 'Response Time', value: '<1 ms (switch types), higher for signal-processing types' }
  ],

  benefits: [
    'Detects vibration, shock, or tampering on windows, doors, or surfaces',
    'Available in both analog and digital output variants',
    'Can be integrated into security systems or industrial IoT platforms',
    'Operates reliably in harsh industrial and outdoor environments',
    'Flexible mounting options for various installation scenarios'
  ],

  icon: AlertTriangle
},
{
  id: '90',
  slug: 'animal-intrusion-detection-repellent-system',
  name: 'Animal Intrusion Detection and Repellent System (AIDRS)',
  category: 'ANIDERS',

  shortDescription: 'Smart sensor-based system to detect and deter animal intrusion in farmlands, solar plants, and sensitive areas.',
  longDescription: 'The Animal Intrusion Detection and Repellent System (AIDRS) is an intelligent, multi-sensor solution designed to detect, monitor, and repel animals from entering restricted zones. Ideal for agricultural fields, solar farms, airports, and industrial sites, it integrates PIR, radar, LiDAR, thermal imaging, and optional AI modules for animal recognition. The system issues real-time alerts and uses deterrents like ultrasonic sound, predator calls, or water jets to humanely repel animals without harm.',

  images: [
    '/Solutions/Intruder/aniders/intr6.png',

  ],

  dataAiHints: [
    'animal detection and repellent system',
    'wildlife intrusion prevention',
    'AIDRS for farms and solar plants',
    'AI-based animal detection system',
    'smart repellent system for animal intrusion'
  ],

  specifications: [
    { key: 'Detection Technologies', value: 'PIR, Radar, LiDAR, Thermal Imaging, IR cameras' },
    { key: 'Detection Range', value: '10 – 100 meters (adjustable)' },
    { key: 'Detection Angle', value: '90° – 180° depending on configuration' },
    { key: 'Animal Type Detection', value: 'Small (rodents, birds), Medium (dogs, monkeys), Large (deer, elephants)' },
    { key: 'Camera Integration', value: 'HD/IR camera (optional) for monitoring and recording' },
    { key: 'AI/ML Capability', value: 'Optional module for animal recognition and behavior prediction' },
    { key: 'Alert Mechanisms', value: 'Mobile app, SMS, Email, Local alarm, Control center integration' },
    { key: 'Repellent Options', value: 'Ultrasonic sound, Strobe lights, Water jets, Predator calls' },
    { key: 'Power Supply', value: '220V AC / Solar with 12V battery backup' },
    { key: 'Connectivity', value: 'Wi-Fi / GSM / LoRa / Zigbee' },
    { key: 'Weather Resistance', value: 'IP65 or higher for outdoor use' },
    { key: 'Operating Temperature', value: '-10°C to +60°C' },
    { key: 'Mounting Options', value: 'Pole mount, Wall mount, Ground stake' }
  ],

  benefits: [
    'Detects and deters animals of various sizes without harm',
    'Reduces crop damage and human-wildlife conflict',
    'AI capabilities for intelligent animal classification',
    'Multiple deterrent options ensure humane repulsion',
    'Flexible power and connectivity options for remote locations'
  ],

  icon: AlertTriangle
},
{
  id: '91',
  slug: 'kynet-net-gun',
  name: 'KyNet Net Gun',
  category: 'KyNet Net Gun',

  shortDescription: 'Handheld CO₂-powered net launcher for safe capture and relocation of wild animals.',
  longDescription: 'KyNet is a handheld automatic net gun engineered for the humane capture and relocation of wild animals such as leopards, jackals, wild boars, deer, and more. Designed for forest departments, wildlife rescue teams, and conservationists, KyNet is effective in both urban and rural landscapes. Using a CO₂ propulsion system and a high-strength net, it ensures safe and non-lethal animal control for relocation or rehabilitation efforts. It is especially useful in human-wildlife conflict zones like highways, rail tracks, and forest fringes.',

  images: [
    '/Solutions/Intruder/kynet-net-gun/intr7.png',

  ],

  dataAiHints: [
    'wildlife net gun',
    'kynet animal capture tool',
    'CO2 net launcher for wildlife rescue',
    'net gun for leopards and wild boars',
    'non-lethal animal control equipment'
  ],

  specifications: [
    { key: 'Propulsion', value: 'CO₂-powered system' },
    { key: 'Material', value: 'High-strength Dyneema or Polyethylene net' },
    { key: 'Effective Range', value: '6–15 meters (20–50 ft)' },
    { key: 'Launch Speed', value: '~15 m/s' },
    { key: 'Net Size', value: '2–4 meters square (4–16 m²)' },
    { key: 'CO₂ Cartridges', value: '16g, single-use; typically ~20 included' },
    { key: 'Mesh Size', value: '5–20 cm depending on animal type' },
    { key: 'Device Length', value: '~310 mm' },
    { key: 'Weight (loaded)', value: '1.1 – 1.4 kg' }
  ],

  benefits: [
    'Enables safe and humane capture of medium to large animals',
    'Effective for rescue, rehabilitation, and relocation',
    'Reduces human-wildlife conflict without harming animals',
    'Usable in diverse environments including urban zones',
    'Compact and lightweight for easy operation in the field'
  ],

  icon: AlertTriangle
},
{
  id: '92',
  slug: 'smart-stick-multipurpose-outdoor',
  name: 'Smart Stick',
  category: 'Smart Stick & Drone',

  shortDescription: 'Multipurpose tech-enabled stick for safety, lighting, electroshock deterrence, and outdoor use.',
  longDescription: 'The Smart Stick is an all-in-one outdoor companion designed for forest rangers, adventure seekers, and wildlife personnel. Crafted from aircraft-grade aluminium and used by 17+ Indian state forest departments, this multipurpose stick integrates powerful lighting, panic alarm, electroshock deterrent, and USB power bank. It is ideal for night patrolling, self-defense, river crossings, and emergency situations in the wild. Durable, portable, and weather-resistant, it’s the ultimate smart tool for challenging terrains and scenarios.',

  images: [
    '/Solutions/Intruder/smart-stick-drone/intr8.png',

  ],

  dataAiHints: [
    'smart walking stick with torch and alarm',
    'electroshock safety stick',
    'forest ranger smart stick',
    'wildlife protection stick with LED and siren',
    'IP54 outdoor walking stick with power bank'
  ],

  specifications: [
    { key: 'Material', value: 'Aircraft-grade aluminium (Alloy 6063)' },
    { key: 'Water & Dust Proofing', value: 'IP54 rated' },
    { key: 'LEDs', value: '2 forward + 1 downward LEDs' },
    { key: 'LED Output', value: '80 lumens per LED, 1.5 W each, ~120° beam' },
    { key: 'Lighting Modes', value: '7 combinations (spot, throbbing, path lighting)' },
    { key: 'Panic Alarm', value: '>110 dB hooter with flashing LEDs' },
    { key: 'Electroshock Voltage', value: '~10,000 V' },
    { key: 'Shock Current', value: '~1 mA (1000 shocks of 2 sec per charge)' },
    { key: 'Battery', value: 'Rechargeable, with USB output for charging devices' },
    { key: 'Charging Output', value: 'USB power bank function' },
    { key: 'Model Variants', value: 'Available in V4+, V4s+, Mini+ (not in base Mini)' }
  ],

  benefits: [
    'Combines illumination, deterrence, alarm, and power backup',
    'Strong, durable, and water-resistant body for rugged use',
    'Ideal for forest patrolling, trekking, and night navigation',
    'Portable with foldable designs for easy carrying',
    'Field-proven in wildlife and ranger operations across India'
  ],

  icon: Camera

},
{
  id: '93',
  slug: 'dronelab-industrial-agriculture-drone',
  name: 'Dronelab Drone',
  category: 'Smart Stick & Drone',

  shortDescription: 'Multi-role drone for mapping, agriculture, inspection, and surveillance with RTK/PPK and payload options.',
  longDescription: 'Dronelab Drone is a professional-grade, multi-rotor UAV tailored for industrial, agricultural, and security applications. Engineered for precision and durability, it supports RTK/PPK navigation, fully autonomous flight, and interchangeable payloads such as RGB, thermal, and multispectral cameras. Ideal for surveying, crop spraying, infrastructure inspection, and live surveillance, Dronelab delivers accurate, high-resolution data and integrates seamlessly into GIS and monitoring systems.',

  images: [
    '/Solutions/Intruder/smart-stick-drone/intr9.png',

  ],

  dataAiHints: [
    'agricultural mapping drone',
    'drone with RTK PPK for survey',
    'thermal drone for inspection',
    'construction site drone with photogrammetry',
    'live surveillance drone with long range'
  ],

  specifications: [
    { key: 'Navigation System', value: 'RTK / PPK for high-precision positioning' },
    { key: 'Camera Payload Options', value: 'RGB (20–48MP), Thermal (640×512), Multispectral (5-band)' },
    { key: 'Flight Time', value: '30–45 minutes (depending on payload)' },
    { key: 'Mapping Accuracy', value: '±2 cm horizontal, ±3 cm vertical' },
    { key: 'Spraying Tank Capacity', value: '10–30 L' },
    { key: 'Spray Width', value: '4–7 meters' },
    { key: 'Flow Rate', value: '2–6 L/min' },
    { key: 'Range', value: 'Up to 10 km (LOS)' },
    { key: 'Live Video Feed', value: '1080p real-time, <150ms latency' },
    { key: 'Thermal Sensitivity', value: '≤50 mK (NETD)' },
    { key: 'Flight Modes', value: 'Autonomous grid, terrain-following, manual + object tracking' },
    { key: 'Export Formats', value: '.GeoTIFF, .OBJ, .DXF, .KML, .LAS, .PDF' }
  ],

  benefits: [
    'Multi-industry application including agriculture, construction, and surveillance',
    'High-precision mapping and inspection with RTK/PPK',
    'Live video monitoring with long-range and low-latency transmission',
    'AI-based analysis for solar inspection and structural integrity',
    'Modular payload support for flexibility across projects'
  ],

  icon: Camera
},
{
  id: '103',
  slug: 'tplink-cpe510-outdoor-wireless-cpe',
  name: 'TP-Link 5GHz N300 Long Range Outdoor CPE (CPE510)',
  category: 'Remote Surveillance and Monitoring Solutions',


  shortDescription: 'TP-Link 5GHz 300Mbps 13dBi Outdoor CPE for long-range PtP and PtMP wireless transmission. Ideal for surveillance, remote access, and rural connectivity.',
  longDescription: 'The TP-Link CPE510 is a 5GHz 300Mbps outdoor CPE designed for cost-effective long-distance wireless networking. With a built-in 13dBi directional antenna and passive PoE support, it provides stable point-to-point (PtP) and point-to-multipoint (PtMP) connections over distances exceeding 15 km. Ideal for video surveillance, Wi-Fi expansion in remote areas, and bridging buildings without cabling. Includes Pharos Control centralized management software.',

  images: [
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem10.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem11.png',
  ],

  dataAiHints: [
    'point to point wireless bridge 5GHz',
    'tplink outdoor wifi extender CPE510',
    'long range wifi device for CCTV',
    '13dBi wireless bridge with PoE',
    'tplink CPE510 for PtP and PtMP links'
  ],

  specifications: [
    { key: 'Model Number', value: 'CPE510' },
    { key: 'Frequency Band', value: '5GHz (802.11n)' },
    { key: 'Wireless Speed', value: '300Mbps (N300)' },
    { key: 'Antenna', value: 'Built-in 13dBi directional antenna' },
    { key: 'Range', value: '15+ km (line of sight)' },
    { key: 'RAM', value: '64MB' },
    { key: 'Power Supply', value: 'Passive PoE, 24V 0.5A (PoE adapter included)' },
    { key: 'Power Consumption', value: '13 Watts' },
    { key: 'Dimensions', value: '22.4 x 7.9 x 6 cm' },
    { key: 'Weight', value: '190g' },
    { key: 'Mounting', value: 'Pole mounting with included straps' },
    { key: 'Management Software', value: 'Pharos Control' },
    { key: 'Operating Mode', value: 'AP / Client / Bridge / Repeater' },
    { key: 'Voltage', value: '24V DC (via PoE)' },
    { key: 'Body Color', value: 'White' },
    { key: 'Weatherproofing', value: 'Outdoor use (IP-level not explicitly specified)' },
    { key: 'Country of Origin', value: 'China' }
  ],

  benefits: [
    'Long-range wireless transmission over 15 km (PtP or PtMP)',
    'Ideal for rural Wi-Fi expansion and CCTV backhaul',
    'Built-in 13dBi directional antenna for high-gain focused transmission',
    'Centralized management with Pharos Control software',
    'Easy pole mounting with included accessories',
    'Supports passive PoE for simplified installation'
  ],

  icon: Wifi
},
{
  id: '104',
  slug: 'ubiquiti-powerbeam-m5-pbe-m5-400',
  name: 'Ubiquiti PowerBeam M5 25dBi 5GHz AirMAX CPE (2-Pack)',
  category: 'Remote Surveillance and Monitoring Solutions',


  shortDescription: 'High-performance 5GHz AirMAX CPE designed for long-range point-to-point (PtP) wireless bridging with 25dBi gain and 150+ Mbps throughput.',
  longDescription: 'The Ubiquiti PowerBeam M5 PBE-M5-400 is a 2-pack of 5GHz outdoor wireless bridge units designed for long-range point-to-point (PtP) applications. Featuring a 400mm dish and 25dBi directional antenna, it offers excellent performance and signal focus. Powered by airMAX technology, it supports speeds over 150 Mbps and is ideal for connecting remote buildings, rural internet distribution, or CCTV backhaul over long distances.',

  images: [
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem20.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem21.png',
  ],

  dataAiHints: [
    'ubiquiti point to point wireless bridge',
    'powerbeam m5 25dBi long range 5ghz',
    'ubiquiti airMAX outdoor CPE PBE-M5-400',
    'ubiquiti wireless bridge for long distance',
    'ubiquiti 5ghz 25dbi ptp bridge device'
  ],

  specifications: [
    { key: 'Model Name', value: 'PBE-M5-400' },
    { key: 'Frequency Band', value: '5 GHz (airMAX)' },
    { key: 'Antenna Gain', value: '25 dBi' },
    { key: 'Wireless Speed', value: '150+ Mbps' },
    { key: 'Form Factor', value: '400mm Dish Antenna' },
    { key: 'Connector Type', value: 'airMAX' },
    { key: 'Operating System', value: 'RouterOS (airOS)' },
    { key: 'Wireless Protocol', value: '802.11a/n with airMAX TDMA' },
    { key: 'Voltage Input', value: '24V Passive PoE' },
    { key: 'Ports', value: '1x 10/100 Ethernet Port' },
    { key: 'Dimensions (Package)', value: '50.2 x 44.8 x 22.4 cm' },
    { key: 'Weight', value: '4.54 kg (approx for 2 units)' },
    { key: 'Compatibility', value: 'Compatible with Laptops, Routers, Switches' },
    { key: 'Color', value: 'White' },
    { key: 'Power Supply', value: 'Passive PoE Injector (not specified if included)' },
    { key: 'Weatherproofing', value: 'Outdoor Rated (exact IP not specified)' }
  ],

  benefits: [
    'Long-range wireless point-to-point bridging up to 20+ km (line of sight)',
    'High-performance 25 dBi directional antenna for strong signal focus',
    'airMAX technology for low latency and high throughput',
    'Ideal for CCTV backhaul, rural internet distribution, or building interconnect',
    'Robust and weatherproof design suitable for outdoor use',
    'Includes two PBE-M5-400 units for complete PtP setup'
  ],

  icon: Wifi
},
{
  id: '105',
  slug: 'sonicwall-tz270-firewall',
  name: 'SonicWall TZ270 Network Security Appliance (02-SSC-2821)',
  category: 'Remote Surveillance and Monitoring Solutions',


  shortDescription: 'Next-Generation Firewall with zero-touch deployment, designed for small to mid-size businesses with advanced threat protection and high-speed connectivity.',
  longDescription: 'The SonicWall TZ270 is a compact yet powerful next-generation firewall tailored for small businesses, branch offices, and distributed enterprises. It delivers enterprise-grade security with features like intrusion prevention, content filtering, malware protection, and application control. Powered by SonicOS 7.0, the TZ270 supports up to 2.5 Gbps firewall throughput and includes 8x 1GbE ports, making it ideal for multi-gigabit environments. It supports Zero-Touch Deployment for streamlined onboarding and integration.',

  images: [
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem30.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem31.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem32.png',
  ],

  dataAiHints: [
    'sonicwall tz270 firewall device',
    'next-gen firewall for small business',
    'sonicos 7.0 security appliance',
    'sonicwall 8 port 1gbe network security',
    '02-SSC-2821 sonicwall model'
  ],

  specifications: [
    { key: 'Model', value: 'TZ270' },
    { key: 'Part Number', value: '02-SSC-2821' },
    { key: 'Firewall Throughput', value: 'Up to 2.5 Gbps' },
    { key: 'Threat Prevention Throughput', value: 'Up to 1.0 Gbps (varies with subscription)' },
    { key: 'Ports', value: '8 x 1GbE' },
    { key: 'Deployment', value: 'Zero-Touch Deployment supported' },
    { key: 'Wireless Capability', value: 'Yes, 802.11ac (dual-band)' },
    { key: 'Operating System', value: 'SonicOS 7.0' },
    { key: 'Power Supply', value: '220V AC' },
    { key: 'Dimensions (LxWxH)', value: '13.5 x 19 x 3.5 cm' },
    { key: 'Weight', value: '820 g' },
    { key: 'Security Features', value: 'Advanced Threat Protection, Application Control, IPS, Malware Filtering' },
    { key: 'Management', value: 'Cloud-based and local GUI with SonicOS 7.0' },
    { key: 'Country of Origin', value: 'China' }
  ],

  benefits: [
    'Advanced security features to protect networks from modern threats',
    'Zero-Touch Deployment enables rapid remote setup',
    '8 Gigabit Ethernet ports support flexible LAN/WAN configurations',
    'Compact form factor perfect for small offices or retail deployments',
    'Supports VPN, SD-WAN, DPI-SSL, and cloud security integrations',
    'High throughput firewall ideal for gigabit-speed environments'
  ],

  icon: ShieldCheck
},
{
  id: '106',
  slug: 'watchguard-firebox-m590-firewall',
  name: 'WatchGuard Firebox M590 Network Security/Firewall Appliance',
  category: 'Remote Surveillance and Monitoring Solutions',


  shortDescription: 'Enterprise-grade firewall offering up to 29.7 Gbps throughput, redundant power supplies, and advanced threat protection — ideal for mid-to-large businesses.',
  longDescription: 'The WatchGuard Firebox M590 is a high-performance, next-generation firewall appliance engineered for businesses requiring advanced threat detection and prevention. It provides up to 29.7 Gbps firewall throughput and 4.6 Gbps UTM throughput with all security engines enabled. The M590 includes an extensive suite of logging, analytics, and customizable port configurations for evolving network needs. With built-in redundant power supplies and included 1-year Total Security Suite, the M590 delivers both power and reliability for mission-critical operations.',

  images: [
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem40.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem41.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/rem42.png',


  ],

  dataAiHints: [
    'watchguard m590 firewall device',
    'high throughput enterprise firewall',
    'utm security appliance with reporting',
    'watchguard total security suite included',
    'm590 29.7 gbps network firewall'
  ],

  specifications: [
    { key: 'Model', value: 'Firebox M590' },
    { key: 'Part Number', value: 'WGM59000801' },
    { key: 'Firewall Throughput', value: 'Up to 29.7 Gbps' },
    { key: 'UTM Throughput', value: 'Up to 4.6 Gbps with full security features' },
    { key: 'Security Suite', value: 'Includes 1-Year Total Security Suite' },
    { key: 'Port Configuration', value: 'Customizable for future scalability' },
    { key: 'Redundancy', value: 'Dual power supplies for high availability' },
    { key: 'Logging & Reporting', value: 'Over 100 dashboards and reports included' },
    { key: 'Dimensions (LxWxH)', value: '23 x 16.5 x 4 inches (58.4 x 41.9 x 10.2 cm)' },
    { key: 'Weight', value: '14.92 lbs (6.77 kg)' },
    { key: 'Country of Origin', value: 'Imported from USA' },
    { key: 'First Available', value: 'October 12, 2021' },
    { key: 'Manufacturer', value: 'WatchGuard Technologies, Inc' }
  ],

  benefits: [
    'Blazing-fast firewall throughput up to 29.7 Gbps for high-performance networks',
    'Robust UTM protection with 4.6 Gbps throughput including all scanning engines',
    'Built-in redundant power supplies ensure system uptime and fault tolerance',
    'Customizable ports allow network expansion and segmentation',
    'Includes 1-year Total Security Suite for advanced protection out of the box',
    'Real-time visibility and analytics through 100+ dashboards and reports'
  ],

  icon: ShieldCheck
},
















{
  id: '94',
  slug: 'remote-surveillance-monitoring-solutions',
  name: 'Remote Surveillance & Monitoring Solutions',
  category: 'Remote Surveillance and Monitoring Solutions',

  shortDescription: 'Real-time remote surveillance system with live video, sensors, and AI-powered alerts for enhanced security and monitoring.',
  longDescription: 'Remote Surveillance and Monitoring Solutions enable real-time or recorded observation and event tracking from any location. These systems integrate CCTV/IP cameras, IoT sensors, and cloud platforms to provide comprehensive coverage across residential, commercial, and industrial spaces. With advanced features like motion detection, AI analytics, mobile access, and cloud storage, these systems ensure operational security, safety, and situational awareness from afar.',

  images: [
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/comm1.png',
    '/Solutions/Command/Remote Surveillance and Monitoring Solutions/comm1.png',
  ],
  

  dataAiHints: [
    'remote security camera system',
    'live cctv surveillance solution',
    'iot based monitoring system',
    'cloud surveillance and recording',
    'remote motion and intrusion detection'
  ],

  specifications: [
    { key: 'CCTV/IP Cameras', value: 'HD, night vision, PTZ, audio-video capable' },
    { key: 'NVR/DVR Systems', value: 'Network or analog video storage and management' },
    { key: 'Sensors', value: 'Motion, door, vibration, temperature, intrusion detection' },
    { key: 'IoT Devices', value: 'Environmental and mechanical data collection' },
    { key: 'Gateways', value: 'Edge devices for data aggregation and processing' },
    { key: 'Cloud Platform', value: 'Real-time and historical data storage & analytics' },
    { key: 'Mobile/PC Apps', value: 'Live access, control, notifications, video playback' },
    { key: 'Connectivity', value: 'Wi-Fi, Ethernet, 4G/5G, LoRa, Satellite' },
    { key: 'Power Supply', value: 'Mains, solar, battery, PoE' }
  ],

  benefits: [
    '24/7 remote monitoring and surveillance',
    'AI-powered analytics for facial, vehicle, and anomaly detection',
    'Real-time alerts via SMS, app, or email',
    'Supports hybrid and cloud-based video storage',
    'Integrates with access control and equipment monitoring systems'
  ],

  icon: Camera
}
,
{
  id: '95',
  slug: 'ai-powered-threat-detection',
  name: 'AI Powered Analytics for Proactive Threat Detection',
  category: 'AI Powered Analytics for Proactive Threat Detection',

  shortDescription: 'AI-based real-time analytics to detect threats proactively using video, audio, and sensor data integration.',
  longDescription: 'AI Powered Analytics for Proactive Threat Detection leverages machine learning, deep learning, and computer vision to monitor environments in real time. These systems detect anomalies, identify suspicious behavior, recognize faces and license plates, and analyze audio cues to forecast and prevent threats before they escalate. Integrating data from cameras, access control, and IoT sensors, it enables proactive security management and rapid incident response.',

  images: [
    '/Solutions/Command/AI Powered Analytics for Proactive Threat Detection/ai1.png',
    '/Solutions/Command/AI Powered Analytics for Proactive Threat Detection/ai1.png',


  ],

  dataAiHints: [
    'ai surveillance system',
    'proactive threat detection analytics',
    'computer vision based security',
    'ai anomaly behavior recognition',
    'real-time ai facial license plate detection'
  ],

  specifications: [
    { key: 'Anomaly Detection', value: 'Learns normal behavior patterns and flags deviations like loitering or trespassing' },
    { key: 'Facial Recognition', value: 'Real-time identification of known or blacklisted individuals' },
    { key: 'Behavioral Analysis', value: 'Detects running, crowd formation, aggression, or other unusual activities' },
    { key: 'License Plate Recognition', value: 'Monitors entry/exit of flagged vehicles' },
    { key: 'Object Detection', value: 'Identifies weapons, abandoned bags, or restricted objects in camera feed' },
    { key: 'Audio Analytics', value: 'Detects gunshots, shouting, distress sounds, or glass breaking' },
    { key: 'Predictive Analytics', value: 'Forecasts threats based on patterns and historical data' },
    { key: 'Data Sources Integrated', value: 'Video feeds, access control systems, sensors, cybersecurity logs, IoT devices' }
  ],

  benefits: [
    'Real-time threat detection and alerts',
    'Reduces dependency on manual monitoring',
    'Enables proactive security measures and faster response',
    'Integrates with existing surveillance and IoT systems',
    'Improves situational awareness through multi-sensor fusion'
  ],

  icon: ShieldCheck
}
,
{
  id: '96',
  slug: 'centralized-control-room-setup',
  name: 'Centralized Control Room Setup',
  category: 'Centralized Control Room Setup',

  shortDescription: 'Integrated command center setup for monitoring, analysis, and response with multi-source data and video feeds.',
  longDescription: 'A Centralized Control Room Setup acts as a nerve center for real-time monitoring and incident management. It integrates multiple systems—such as surveillance cameras, industrial sensors, SCADA, IT infrastructure, and communication tools—into a single operational hub. Equipped with high-resolution video walls, ergonomic operator workstations, and redundant power and network systems, this setup ensures operational continuity, situational awareness, and rapid response.',

  images: [
    '/Solutions/Command/Centralized Control Room Setup/central1.png',
    '/Solutions/Command/Centralized Control Room Setup/central1.png',


  ],

  dataAiHints: [
    'centralized monitoring system',
    'control room with video wall',
    'command center design',
    'real-time surveillance management',
    'multi-source control room integration'
  ],

  specifications: [
    { key: 'Visual Displays', value: 'Video walls, LED panels, and multi-monitor desks for live feed monitoring' },
    { key: 'Workstations', value: 'Ergonomic operator consoles with dual or multi-monitor setups' },
    { key: 'Data Sources', value: 'CCTV, SCADA, sensors (motion, gas, vibration), IoT, IT infrastructure' },
    { key: 'Servers & Storage', value: 'NVRs, DVRs, application servers, data backup and archival systems' },
    { key: 'Communication Systems', value: 'Intercoms, VoIP, radios, public announcement systems' },
    { key: 'Software Platforms', value: 'VMS, BMS, SCADA systems, AI analytics tools' },
    { key: 'Network Infrastructure', value: 'LAN/WAN, fiber optic backbone, routers, switches, firewalls' },
    { key: 'Power Supply', value: 'UPS systems, redundant power lines, diesel generators' },
    { key: 'Access Control', value: 'Biometric, fingerprint, or RFID secured entry' },
    { key: 'Environmental Control', value: 'HVAC, fire suppression, soundproofing, and adaptive lighting' }
  ],

  benefits: [
    'Real-time decision-making and incident response',
    'Consolidated monitoring of multiple systems and data sources',
    'Enhanced operational efficiency and situational awareness',
    'High system availability with redundant power and networking',
    'Improved security with access control and environmental safeguards'
  ],

  icon: Monitor
},
































  
  










  // --- DVRs/NVRs ---
  {
    id: '2',
    slug: 'smart-dvr-recorder',
    name: 'Smart DVR Recorder S16',
    category: 'DVRs/NVRs',
    shortDescription: 'Intelligent 16-channel DVR for reliable video recording.',
    longDescription: 'The Smart DVR Recorder S16 supports up to 16 analog camera inputs, offers extensive storage options, and features smart analytics for efficient incident review. Secure your footage with our dependable recording solution.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['dvr device security'],
    specifications: [
      { key: 'Channels', value: '16 Channels' },
      { key: 'Max Storage', value: '16TB (2x8TB HDD)' },
      { key: 'Compression', value: 'H.265+' },
      { key: 'Smart Features', value: 'Motion Detection, Face Recognition (optional)' },
    ],
    benefits: ['Long-term video archiving', 'Easy playback and search', 'Scalable storage solutions', 'Integration with existing analog cameras'],
    icon: HardDrive,
  },
  {
    id: '13',
    slug: 'compact-dvr-recorder-s8',
    name: 'Compact DVR Recorder S8',
    category: 'DVRs/NVRs',
    shortDescription: 'Space-saving 8-channel DVR for smaller setups.',
    longDescription: 'The Compact DVR S8 is ideal for small businesses or homes, offering 8 channels, H.265+ compression, and remote viewing capabilities in a small footprint.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['compact dvr security'],
    specifications: [
      { key: 'Channels', value: '8 Channels' },
      { key: 'Max Storage', value: '8TB (1x8TB HDD)' },
      { key: 'Compression', value: 'H.265+' },
      { key: 'Mobile App', value: 'Yes' },
    ],
    benefits: ['Cost-effective solution for fewer cameras', 'Easy to install and configure', 'Reliable recording performance'],
    icon: HardDrive,
  },
  // ... (other DVR/NVR products) ...
  {
    id: '14',
    slug: 'poe-nvr-solution-n32',
    name: '32-Channel PoE NVR N32',
    category: 'DVRs/NVRs',
    shortDescription: '32-channel NVR with built-in PoE for easy IP camera setup.',
    longDescription: 'The N32 NVR simplifies IP camera installation with its built-in 16-port PoE switch, supporting up to 32 cameras. Features 4K output and advanced network management.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['poe nvr system'],
    specifications: [
      { key: 'Channels', value: '32 IP Cameras' },
      { key: 'PoE Ports', value: '16 built-in' },
      { key: 'Max Resolution', value: '8MP (4K)' },
      { key: 'Bandwidth', value: '256 Mbps' },
    ],
    benefits: ['Simplified IP camera installation', 'Reduced cabling complexity', 'High-resolution recording and playback', 'Scalable for growing needs'],
    icon: Network,
  },
  {
    id: '15',
    slug: 'hybrid-dvr-nvr-hvr64',
    name: 'Hybrid DVR/NVR HVR64',
    category: 'DVRs/NVRs',
    shortDescription: 'Versatile 64-channel hybrid recorder for analog and IP cameras.',
    longDescription: 'The HVR64 offers maximum flexibility, supporting a mix of analog and IP cameras up to 64 channels. Ideal for upgrading existing systems or new mixed-technology deployments.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['hybrid dvr nvr'],
    specifications: [
      { key: 'Total Channels', value: '64 (Analog + IP)' },
      { key: 'IP Channels Max', value: '32' },
      { key: 'Analog Channels Max', value: '64 (with compatible cards)' },
      { key: 'Supported Tech', value: 'TVI, AHD, CVI, CVBS, IP' },
    ],
    benefits: ['Supports legacy and modern cameras', 'Phased upgrade path', 'Centralized management for mixed systems', 'Cost-effective for large installations'],
    icon: HardDrive,
  },
  {
    id: '3',
    slug: 'enterprise-nvr-solution',
    name: 'Enterprise NVR E128',
    category: 'DVRs/NVRs',
    shortDescription: 'High-performance NVR for up to 128 IP cameras.',
    longDescription: 'Our Enterprise NVR E128 is designed for demanding environments, supporting up to 128 IP cameras with robust performance, advanced management features, and seamless scalability. Features RAID support for data redundancy.',
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    dataAiHints: ['network video recorder', 'server rack security'],
    specifications: [
      { key: 'Channels', value: 'Up to 128 IP Cameras' },
      { key: 'Throughput', value: '512 Mbps' },
      { key: 'RAID Support', value: 'RAID 0/1/5/6/10' },
      { key: 'Remote Access', value: 'Web, Mobile, CMS' },
    ],
    benefits: ['Centralized IP camera management', 'High reliability and redundancy', 'Advanced video analytics capabilities', 'Suitable for large facilities'],
    icon: Network,
  },
  {
    id: 'dvr-advanced-32',
    slug: 'dvr-advanced-32',
    name: 'Advanced 32-Channel DVR ProSeries',
    category: 'DVRs/NVRs',
    shortDescription: 'High-capacity 32-channel DVR with advanced analytics.',
    longDescription: 'The ProSeries 32-channel DVR offers robust recording for larger analog setups, featuring H.265+ compression, 4K HDMI output, and intelligent video analytics like line crossing and intrusion detection.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['32 channel dvr'],
    specifications: [
      { key: 'Channels', value: '32 Analog Channels' },
      { key: 'Max Storage', value: '32TB (4x8TB HDD)' },
      { key: 'Video Output', value: 'HDMI (4K), VGA' },
      { key: 'Analytics', value: 'Line Crossing, Intrusion Detection' },
    ],
    benefits: ['Supports a large number of analog cameras', 'High-efficiency video compression', 'Smart event detection and alerts', 'Reliable long-term storage'],
    icon: HardDrive,
  },
  {
    id: 'nvr-ultra-64',
    slug: 'nvr-ultra-64',
    name: 'Ultra Series 64-Channel NVR',
    category: 'DVRs/NVRs',
    shortDescription: 'High-performance 64-channel NVR for extensive IP surveillance.',
    longDescription: 'The Ultra Series NVR handles up to 64 IP cameras, supporting resolutions up to 12MP. It offers massive storage capacity with multiple HDD bays and advanced network features for enterprise-level deployments.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['64 channel nvr'],
    specifications: [
      { key: 'IP Channels', value: '64 Channels' },
      { key: 'Max Resolution Support', value: '12MP per camera' },
      { key: 'HDD Bays', value: '8 SATA Bays (up to 10TB each)' },
      { key: 'Network Bandwidth', value: '320 Mbps incoming' },
    ],
    benefits: ['Ideal for large-scale IP camera systems', 'Ultra-high-definition recording', 'Extensive storage options', 'Advanced network and camera management'],
    icon: Network,
  },

  // --- Access Control ---
  {
    id: '4',
    slug: 'secure-access-control',
    name: 'Secure Access Control Pro',
    category: 'Access Control',
    shortDescription: 'Comprehensive access control with biometric and card readers.',
    longDescription: 'Implement robust security with our Secure Access Control Pro system. Manage entry permissions for over 10,000 users, track access logs, and integrate with other security systems for a complete solution. Options include card readers, biometric scanners, and keypads.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['access control panel'],
    specifications: [
      { key: 'User Capacity', value: '10,000+' },
      { key: 'Reader Types', value: 'RFID, Biometric, Keypad' },
      { key: 'Integration', value: 'CCTV, Alarm Systems' },
      { key: 'Software', value: 'Centralized Management Platform' },
    ],
    benefits: ['Control who enters your premises', 'Detailed audit trails', 'Time-based access rules', 'Enhanced employee and asset safety'],
    icon: KeyRound,
  },
  // ... (other Access Control products) ...
  {
    id: '16',
    slug: 'standalone-fingerprint-reader-bio1',
    name: 'BioAccess Fingerprint Reader Bio1',
    category: 'Access Control',
    shortDescription: 'Standalone fingerprint reader for single door access.',
    longDescription: 'The Bio1 is a simple and effective standalone fingerprint reader, ideal for securing individual offices or sensitive areas. Stores up to 500 fingerprints.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['fingerprint access reader'],
    specifications: [
      { key: 'User Capacity', value: '500 Fingerprints' },
      { key: 'Verification', value: 'Fingerprint, PIN' },
      { key: 'Relay Output', value: 'Yes, for door lock' },
      { key: 'Power', value: '12V DC' },
    ],
    benefits: ['Keyless entry', 'High security with biometrics', 'Easy to enroll users', 'Cost-effective for single doors'],
    icon: KeyRound,
  },
  {
    id: '17',
    slug: 'rfid-card-reader-cr100',
    name: 'RFID Card Reader CR100',
    category: 'Access Control',
    shortDescription: 'Durable weatherproof RFID card reader.',
    longDescription: 'The CR100 is a robust RFID card reader suitable for indoor and outdoor use. Supports standard proximity cards and fobs, providing reliable access control.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['rfid card reader'],
    specifications: [
      { key: 'Card Type', value: 'EM Proximity (125KHz)' },
      { key: 'Read Range', value: 'Up to 10cm' },
      { key: 'Output', value: 'Wiegand 26/34 bit' },
      { key: 'Protection', value: 'IP65 Weatherproof' },
    ],
    benefits: ['Reliable card-based access', 'Durable for outdoor installation', 'Compatible with most control panels'],
    icon: KeyRound,
  },
  {
    id: '18',
    slug: 'network-access-controller-acp4',
    name: '4-Door Network Access Controller ACP4',
    category: 'Access Control',
    shortDescription: 'Networked controller for managing up to 4 doors.',
    longDescription: 'The ACP4 is a networkable access control panel that can manage up to 4 doors (8 readers). Features advanced access rules, event logging, and integration capabilities via TCP/IP.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['access control board'],
    specifications: [
      { key: 'Doors Supported', value: '4 Doors (In/Out)' },
      { key: 'Reader Inputs', value: '8 Wiegand' },
      { key: 'User Capacity', value: '30,000 Cards' },
      { key: 'Event Log', value: '100,000 Events' },
    ],
    benefits: ['Centralized management of multiple doors', 'Scalable for larger systems', 'Advanced access control features', 'Network connectivity for remote management'],
    icon: KeyRound,
  },
  {
    id: '19',
    slug: 'elevator-access-control-ec10',
    name: 'Elevator Access Control EC10',
    category: 'Access Control',
    shortDescription: 'Controller for secure elevator floor access.',
    longDescription: 'The EC10 system provides restricted access to elevator floors, ensuring only authorized personnel can access specific levels. Integrates with standard elevator systems.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['elevator control panel'],
    specifications: [
      { key: 'Floors Supported', value: 'Up to 10 (expandable)' },
      { key: 'Card Capacity', value: '20,000' },
      { key: 'Communication', value: 'RS485, TCP/IP' },
      { key: 'Integration', value: 'With main access control system' },
    ],
    benefits: ['Enhanced building security by controlling floor access', 'Time-based floor permissions', 'Audit trail of elevator usage'],
    icon: KeyRound,
  },
  {
    id: 'ac-keypad-reader-kp200',
    slug: 'ac-keypad-reader-kp200',
    name: 'Weatherproof Keypad Reader KP200',
    category: 'Access Control',
    shortDescription: 'Durable keypad reader with card and PIN access options.',
    longDescription: 'The KP200 is a rugged, weatherproof keypad reader that supports multiple authentication modes: Card only, PIN only, or Card + PIN for enhanced security. Suitable for outdoor installations.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['access control keypad'],
    specifications: [
      { key: 'Modes', value: 'Card, PIN, Card+PIN' },
      { key: 'Keypad', value: 'Backlit, 12-key' },
      { key: 'Weatherproof', value: 'IP67 rated' },
      { key: 'Card Type', value: 'Mifare/EM optional' },
    ],
    benefits: ['Flexible authentication methods', 'Suitable for harsh environments', 'Backlit keypad for night use', 'Increased security with dual authentication'],
    icon: KeyRound,
  },
  {
    id: 'ac-two-door-controller-acp2',
    slug: 'ac-two-door-controller-acp2',
    name: 'Compact 2-Door Access Controller ACP2',
    category: 'Access Control',
    shortDescription: 'Small-form-factor controller for two doors.',
    longDescription: 'The ACP2 is a compact yet powerful access control panel designed for managing up to two doors. Ideal for small offices or specific zones within a larger building. Supports standard Wiegand readers.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['small access controller'],
    specifications: [
      { key: 'Doors Supported', value: '2 Doors (In/Out or In only)' },
      { key: 'Reader Inputs', value: '4 Wiegand' },
      { key: 'User Capacity', value: '10,000 Cards' },
      { key: 'Communication', value: 'TCP/IP, RS485' },
    ],
    benefits: ['Cost-effective for small installations', 'Easy to mount in tight spaces', 'Full access control features for two doors', 'Networkable for central management'],
    icon: KeyRound,
  },

  // --- Voice Logger ---
  


  // --- Fire & Emergency System ---
  

  // --- Intruder Detection System ---
  {
    id: 'ids001',
    slug: 'motion-sensor-pro-msp500',
    name: 'Motion Sensor Pro MSP500',
    category: 'Intruder Detection System',
    shortDescription: 'Advanced PIR motion sensor with pet immunity.',
    longDescription: 'The MSP500 offers reliable intrusion detection using passive infrared technology. Features pet immunity to reduce false alarms and adjustable sensitivity.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['motion sensor security'],
    specifications: [
      { key: 'Detection Range', value: 'Up to 15 meters' },
      { key: 'Pet Immunity', value: 'Up to 25kg' },
      { key: 'Connectivity', value: 'Wired/Wireless options' },
      { key: 'Coverage Angle', value: '90 degrees' },
    ],
    benefits: ['Accurate intruder detection', 'Reduced false alarms', 'Wide coverage area', 'Easy integration with alarm panels'],
    icon: Siren,
  },
  {
    id: 'ids002',
    slug: 'glass-break-detector-gbd10',
    name: 'Acoustic Glass Break Detector GBD10',
    category: 'Intruder Detection System',
    shortDescription: 'Detects the sound of breaking glass for perimeter security.',
    longDescription: 'The GBD10 uses advanced acoustic analysis to detect the specific sound frequencies of breaking glass, providing an early warning of forced entry through windows or glass doors.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['glass break sensor'],
    specifications: [
      { key: 'Detection Radius', value: 'Up to 8 meters' },
      { key: 'Sensor Type', value: 'Dual-frequency acoustic' },
      { key: 'Compatibility', value: 'Most alarm systems' },
      { key: 'Power', value: '12V DC' },
    ],
    benefits: ['Early detection of break-ins', 'Protects vulnerable glass perimeters', 'High immunity to false alarms', 'Discreet design'],
    icon: Siren,
  },

  // --- Networking Jammers ---
  {
    id: 'nj001',
    slug: 'signal-disruptor-x1',
    name: 'Signal Disruptor X1 (Gov/Mil Use)',
    category: 'Networking Jammers',
    shortDescription: 'Multi-band signal jammer for restricted environments.',
    longDescription: 'The Signal Disruptor X1 is designed for authorized government or military use to block various communication frequencies in sensitive areas. (Note: Use of jammers is highly regulated).',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['signal jammer device'],
    specifications: [
      { key: 'Frequency Bands', value: 'Cellular, WiFi, GPS (configurable)' },
      { key: 'Range', value: 'Up to 50 meters (variable)' },
      { key: 'Power', value: 'AC/DC options' },
      { key: 'Use Case', value: 'Restricted for official use only' },
    ],
    benefits: ['Prevents unauthorized communications', 'Secures sensitive locations', 'Customizable frequency blocking'],
    icon: SignalZero,
  },
   {
    id: 'nj002',
    slug: 'drone-defense-jammer-ddj500',
    name: 'Drone Defense Jammer DDJ500',
    category: 'Networking Jammers',
    shortDescription: 'Anti-drone jammer for protecting airspaces.',
    longDescription: 'The DDJ500 is a specialized jammer designed to disrupt drone control signals, preventing unauthorized drone activity over restricted areas. (Subject to legal restrictions).',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['anti drone technology'],
    specifications: [
      { key: 'Target Frequencies', value: 'Common drone control bands (2.4GHz, 5.8GHz, GPS)' },
      { key: 'Effective Range', value: 'Up to 1km' },
      { key: 'Deployment', value: 'Fixed or portable' },
      { key: 'Operation', value: 'Directional antenna system' },
    ],
    benefits: ['Protects against unauthorized drone surveillance', 'Secures sensitive airspace', 'Prevents drone-based threats'],
    icon: SignalZero,
  },

  // --- Command Control Room ---
  {
    id: 'ccr001',
    slug: 'central-monitoring-console-cmc3000',
    name: 'Central Monitoring Console CMC3000',
    category: 'Command Control Room',
    shortDescription: 'Integrated console for managing multiple security systems.',
    longDescription: 'The CMC3000 provides a unified interface for security operators to monitor CCTV, access control, alarms, and other systems from a central command point. Supports video walls and GIS mapping.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['security control room'],
    specifications: [
      { key: 'System Integration', value: 'CCTV, Access, Alarms, PA' },
      { key: 'Display Support', value: 'Multiple Monitors, Video Wall' },
      { key: 'Mapping', value: 'GIS Integration, Interactive Maps' },
      { key: 'Workflow', value: 'Incident Management, SOPs' },
    ],
    benefits: ['Situational awareness for operators', 'Efficient incident response', 'Centralized system management', 'Customizable dashboards'],
    icon: ScreenShare,
  },
   {
    id: 'ccr002',
    slug: 'video-wall-processor-vwp8x8',
    name: 'Video Wall Processor VWP-8x8',
    category: 'Command Control Room',
    shortDescription: 'High-performance processor for large video walls.',
    longDescription: 'The VWP-8x8 drives complex video wall configurations, allowing flexible display of numerous video feeds and data sources for command and control centers.',
    images: ['https://placehold.co/600x400.png'],
    dataAiHints: ['video wall display'],
    specifications: [
      { key: 'Inputs/Outputs', value: 'Configurable (e.g., 8x8, 16x16 HDMI/IP)' },
      { key: 'Layouts', value: 'Customizable, dynamic layouts' },
      { key: 'Control', value: 'Software-based, Crestron/AMX integration' },
      { key: 'Resolution', value: 'Up to 4K per display' },
    ],
    benefits: ['Manages large, complex video displays', 'Flexible content arrangement', 'High-resolution visual information', 'Reliable 24/7 operation'],
    icon: ScreenShare,
  },
];

export const coreOfferings: CoreOfferingItem[] = [
  {
    gifSrc: '/icons/cctv.gif',
    dataAiHint: 'cctv surveillance animation',
    title: 'Surveillance Systems',
    description: 'High-definition CCTV, NVRs, and DVRs for comprehensive monitoring of your premises, day and night, ensuring maximum visibility and security.',
    link: '/solutions?category=Surveillance%20Systems',
    linkText: 'Explore Cameras',
  },
  {
    gifSrc: '/icons/access-control.gif',
    dataAiHint: 'access control lock animation',
    title: 'Access Control',
    description: 'Secure and manage entry to your facilities with advanced card readers, biometric scanners, and integrated systems for robust protection.',
    link: '/solutions?category=Access%20Control',
    linkText: 'Manage Access',
  },
  {
    gifSrc: '/icons/cyber-security.gif',
    dataAiHint: 'gears turning solution animation',
    title: 'Integrated Solutions',
    description: 'Comprehensive systems including Fire & Emergency, Intruder Detection, and Command Control Rooms for holistic security.',
    link: '/solutions',
    linkText: 'Discover All Solutions',
  },
];


export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'retail-chain-security-overhaul',
    title: 'Retail Chain Security Overhaul',
    customer: 'ShopSecure Inc.',
    industry: 'Retail',
    challenge: 'High instances of shoplifting and internal theft across multiple store locations.',
    solutionProvided: 'Implemented a network of Advanced CCTV Systems with Smart DVRs, integrated with point-of-sale data to flag suspicious transactions.',
    results: 'Reduced shrinkage by 35% within the first year and improved staff accountability.',
    image: '/images/success in action/retail.png',
    dataAiHint: 'retail store interior',
    date: '2023-05-15',
  },
  {
    id: '2',
    slug: 'government-facility-access-control',
    title: 'Government Facility Access Control Upgrade',
    customer: 'Federal Secure Department',
    industry: 'Government',
    challenge: 'Outdated access control system leading to security vulnerabilities and inefficient personnel management.',
    solutionProvided: 'Deployed a comprehensive Secure Access Control system with biometric readers and centralized management software across all entry points.',
    results: 'Enhanced security posture, streamlined employee access, and provided robust audit trails for compliance.',
    image: '/images/success in action/govt.png',
    dataAiHint: 'government building entrance',
    date: '2022-11-20',
  },
  {
    id: '3',
    slug: 'factory-surveillance-optimization',
    title: 'Factory Surveillance Optimization for Safety',
    customer: 'ManuPro Industries',
    industry: 'Manufacturing',
    challenge: 'Need for improved worker safety monitoring and prevention of equipment misuse in a large factory complex.',
    solutionProvided: 'Installed Enterprise NVR solution with high-definition IP cameras covering critical production areas and perimeters. Implemented video analytics for anomaly detection.',
    results: 'Improved response time to safety incidents by 50% and reduced unauthorized equipment use, leading to lower maintenance costs.',
    image: '/images/success in action/industry.png',
    dataAiHint: 'factory interior production',
    date: '2023-01-30',
  },
];

export const industries: Industry[] = [
  {
    id: '1',
    slug: 'retail-security',
    name: 'Retail',
    description: 'Tailored security solutions for retail environments, focusing on loss prevention, customer safety, and operational efficiency.',
    iconName: Building2,
    representativeImage: '/images/success in action/retail.png',
    dataAiHint: 'retail store busy'
  },
  {
    id: '2',
    slug: 'government-security',
    name: 'Government',
    description: 'High-security systems for government facilities, ensuring compliance, data protection, and public safety.',
    iconName: Landmark,
    representativeImage: '/images/success in action/govt.png',
    dataAiHint: 'government building modern'
  },
  {
    id: '3',
    slug: 'factory-manufacturing-security',
    name: 'Factories & Manufacturing',
    description: 'Robust surveillance and access control for industrial sites, enhancing worker safety, protecting assets, and monitoring production processes.',
    iconName: Factory,
    representativeImage: '/images/success in action/industry.png',
    dataAiHint: 'industrial factory'
  },
  {
    id: '4',
    slug: 'corporate-office-security',
    name: 'Corporate Offices',
    description: 'Integrated security solutions to protect employees, data, and intellectual property in corporate environments.',
    iconName: Briefcase,
    representativeImage: '/images/success in action/corporate.png',
    dataAiHint: 'modern office building'
  },
];

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: House },
  {
    href: '/solutions',
    label: 'Solutions',
    icon: Layers,
    isMegaMenu: true,
  },
  { href: '/industries', label: 'B2G', icon: Building2 },
  { href: '/about', label: 'About Us', icon: Info },
];


export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: '1',
    icon: ShieldCheck,
    title: 'Expertise & Reliability',
    description: 'Years of experience in delivering robust security solutions you can trust. Our team ensures top-notch installation and support.',
  },
  {
    id: '2',
    icon: Users2,
    title: 'Customer-Centric Approach',
    description: 'We listen to your needs and tailor solutions to fit your specific requirements, ensuring your complete satisfaction.',
  },
  {
    id: '3',
    icon: Lightbulb,
    title: 'Innovative Technology',
    description: 'Utilizing the latest advancements in security technology to provide you with cutting-edge protection and peace of mind.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "GenX Secure transformed our company's security. Their CCTV systems are top-quality, and the support team is always responsive. Highly recommended!",
    authorName: 'Sarah L.',
    authorRole: 'Operations Manager',
    company: 'Tech Solutions Ltd.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional woman portrait',
  },
  {
    id: '2',
    quote: "The access control system installed by GenX Secure has greatly improved our facility's safety and efficiency. A seamless experience from start to finish.",
    authorName: 'John B.',
    authorRole: 'Facilities Director',
    company: 'Innovate Hub',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man business headshot',
  },
   {
    id: '3',
    quote: "We've seen a significant reduction in incidents since upgrading to GenX Secure's NVR solutions. Their expertise is unmatched.",
    authorName: 'Maria G.',
    authorRole: 'Security Chief',
    company: 'Secure Logistics Co.',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'security professional woman',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Alex Chen',
    role: 'Founder & CEO',
    bio: 'With over 20 years in the security industry, Dr. Chen leads GenX Secure with a vision for innovation and excellence. He is passionate about creating safer environments through technology and fosters a culture of continuous improvement within the team. Dr. Chen believes in a hands-on approach, often engaging directly with clients to understand their unique challenges and ensure GenX Secure delivers optimal solutions.',
    image: '/about-us/member/jishan1.png',
    dataAiHint: 'ceo business portrait',
    email: 'alex.chen@example.com',
    phone: '+1-555-0101',
  },
  {
    id: '2',
    name: 'Jane Doe',
    role: 'Head of Technology',
    bio: 'Jane is a tech visionary, driving the development of our cutting-edge security solutions and platforms. She has a knack for identifying emerging technologies and integrating them into practical, user-friendly systems. Her leadership in the R&D department keeps GenX Secure at the forefront of the security tech landscape, ensuring our products are both innovative and reliable.',
    image: '/about-us/member/jishan2.png',
    dataAiHint: 'woman technology leader',
    email: 'jane.doe@example.com',
    phone: '+1-555-0102',
  },
  {
    id: '3',
    name: 'Robert Smith',
    role: 'Director of Operations',
    bio: 'Robert ensures seamless project delivery and exceptional customer service for all GenX Secure clients. His meticulous attention to detail and strong organizational skills are key to our operational success. Robert manages the logistics of installations, oversees the support team, and is dedicated to maintaining the highest standards of quality and efficiency in all our projects.',
    image: '/about-us/member/jishan3.png',
    dataAiHint: 'operations director man',
    email: 'robert.smith@example.com',
    phone: '+1-555-0103',
  },
  {
    id: '4',
    name: 'Emily White',
    role: 'Lead Security Consultant',
    bio: 'Emily specializes in creating bespoke security strategies for complex enterprise environments. She works closely with clients to assess their vulnerabilities and design comprehensive security plans. Her expertise spans various industries, and she is known for her ability to translate intricate security requirements into actionable and effective solutions that provide long-term value and peace of mind.',
    image: '/about-us/member/jishan4.png',
    dataAiHint: 'security consultant woman',
    email: 'emily.white@example.com',
    phone: '+1-555-0104',
  },
];

export const clientLogos: ClientLogo[] = [
  { id: '1', name: 'Innovate Corp', logoUrl: 'https://placehold.co/150x60.png?text=InnovateCorp&font=roboto', dataAiHint: 'innovate corp logo', description: 'Pioneering new technologies for a better future.' },
  { id: '2', name: 'SecureNet', logoUrl: 'https://placehold.co/150x60.png?text=SecureNet&font=lato', dataAiHint: 'securenet logo', description: 'Providing robust cybersecurity solutions globally.' },
  { id: '3', name: 'AlphaTech', logoUrl: 'https://placehold.co/150x60.png?text=AlphaTech&font=montserrat', dataAiHint: 'alphatech logo', description: 'Leading the way in AI and machine learning innovations.' },
  { id: '4', name: 'Global Solutions', logoUrl: 'https://placehold.co/150x60.png?text=Global+Solutions&font=oswald', dataAiHint: 'global solutions logo', description: 'Connecting businesses with worldwide opportunities.' },
  { id: '5', name: 'Future Systems', logoUrl: 'https://placehold.co/150x60.png?text=Future+Systems&font=raleway', dataAiHint: 'future systems logo', description: 'Building the next generation of enterprise software.' },
  { id: '6', name: 'CyberGuard', logoUrl: 'https://placehold.co/150x60.png?text=CyberGuard&font=playfair', dataAiHint: 'cyberguard logo', description: 'Your trusted partner in digital defense mechanisms.' },
  { id: '7', name: 'NetSentry', logoUrl: 'https://placehold.co/150x60.png?text=NetSentry&font=merriweather', dataAiHint: 'netsentry logo', description: 'Advanced network monitoring and threat detection.' },
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What types of security systems do you offer?',
    answer: 'We offer a comprehensive range of security solutions including advanced CCTV systems, DVR/NVR recorders, access control systems, intruder alarms, fire & emergency systems, networking jammers (for authorized use), command & control room setups, and custom-integrated security solutions tailored to your specific needs.'
  },
  {
    id: 'faq2',
    question: 'Can I view my CCTV footage remotely?',
    answer: 'Yes, most of our modern CCTV and NVR systems support remote viewing via dedicated mobile apps or web interfaces, allowing you to monitor your premises from anywhere with an internet connection.'
  },
  {
    id: 'faq3',
    question: 'How long does a typical installation take?',
    answer: 'The duration of an installation depends on the complexity and scale of the system. A basic home CCTV setup might take a few hours, while a large commercial installation with access control and command room integration could take several days or weeks. We provide a time estimate after the initial site survey.'
  },
  {
    id: 'faq4',
    question: 'Do you provide maintenance and support after installation?',
    answer: 'Absolutely. We offer various maintenance packages and dedicated support to ensure your security system remains in optimal working condition. Our team is available for troubleshooting and assistance.'
  },
  {
    id: 'faq5',
    question: 'Are your solutions scalable for future expansion?',
    answer: 'Yes, we design our security systems with scalability in mind. Whether you need to add more cameras, expand access control points, integrate new technologies like HPC for analytics, or upgrade your command center, our systems can grow with your business.'
  },
  {
    id: 'faq6',
    question: 'What are Networking Jammers used for?',
    answer: 'Networking Jammers are specialized devices intended for authorized government or military use in highly restricted environments to prevent unauthorized wireless communications. Their use is strictly regulated by law.'
  },
  {
    id: 'faq7',
    question: 'How can a Command Control Room benefit my organization?',
    answer: 'A Command Control Room centralizes your security operations, providing a unified platform to monitor all systems (CCTV, access, alarms, etc.), manage incidents efficiently, and improve overall situational awareness for rapid response.'
  }
];

export const solutionCategoriesData: SolutionCategory[] = [
  { id: 'cat_surveillance', name: 'Surveillance Systems', description: 'Comprehensive monitoring technologies including CCTV, Voice Loggers, and HPC for analytics.', icon: Video, dataAiHint: 'surveillance system overview' },
  { id: 'cat_fire_emergency', name: 'Fire & Emergency System', description: 'Advanced systems for early fire detection, alerts, and emergency communication.', icon: Flame, dataAiHint: 'fire alarm system' },
  { id: 'cat_access_control', name: 'Access Control', description: 'Manage and control entry with biometric scanners, card readers, and robust controllers.', icon: KeyRound, dataAiHint: 'access control security' },
  { id: 'cat_intruder_detection', name: 'Intruder Detection System', description: 'Reliable sensors and alarms to detect and deter unauthorized access attempts.', icon: Siren, dataAiHint: 'intruder alarm system' },
  { id: 'cat_networking_jammers', name: 'Networking Jammers', description: 'Specialized signal disruption tools for authorized use in restricted environments. (Regulated)', icon: SignalZero, dataAiHint: 'signal jammer' },
  { id: 'cat_command_control', name: 'Command Control Room', description: 'Integrated solutions for central monitoring, incident management, and operational command.', icon: ScreenShare, dataAiHint: 'control room console' },
  // Sub-categories for direct linking if needed, or just rely on product category filtering
  { id: 'cat_cctv', name: 'CCTV Cameras', description: 'Explore a wide range of high-definition cameras for comprehensive indoor and outdoor surveillance.', icon: Camera, dataAiHint: 'cctv camera stack' },
  { id: 'cat_dvr_nvr', name: 'DVRs/NVRs', description: 'Secure your footage with our reliable Digital and Network Video Recorders, offering extensive storage and smart features.', icon: HardDrive, dataAiHint: 'dvr nvr devices' },
  { id: 'cat_voice_logger', name: 'Voice Logger', description: 'Capture, store, and manage audio communications for compliance, quality assurance, and security.', icon: Mic, dataAiHint: 'voice recording equipment' },
  { id: 'cat_hpc', name: 'HPC', description: 'Leverage High-Performance Computation for advanced video analytics and real-time processing.', icon: Cpu, dataAiHint: 'server processing unit' },
];


export const footerSolutionsLinks = [
  { href: '/solutions?category=Surveillance%20Systems', label: 'Surveillance Systems' },
  { href: '/solutions?category=Access%20Control', label: 'Access Control' },
  { href: '/solutions?category=Fire%20%26%20Emergency%20System', label: 'Fire & Emergency' },
  { href: '/solutions?category=Intruder%20Detection%20System', label: 'Intruder Detection' },
];

export const footerCompanyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
];

export const footerResourcesLinks = [
  { href: '/faq', label: 'FAQs' },
  { href: '/industries', label: 'Industries Served' },
  { href: '/success-stories', label: 'Success Stories' },
];


export const getProductBySlug = (slug: string): Product | undefined => products.find(p => p.slug === slug);
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => caseStudies.find(cs => cs.slug === slug);
export const getIndustryBySlug = (slug: string): Industry | undefined => industries.find(i => i.slug === slug);

