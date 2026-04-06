import { 
  Activity, 
  Bone, 
  Stethoscope, 
  Zap, 
  Layers, 
  User, 
  Footprints,
  Hospital,
  ShieldCheck,
  Scissors,
  Truck,
  Building2,
  HeartPulse,
  Share2
} from 'lucide-react';

export interface ProductItem {
  name: string;
  description?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  icon: any;
  items: ProductItem[];
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export const ORTHOPEDIC_CATEGORIES: SubCategory[] = [
  {
    id: 'trauma',
    name: 'Trauma',
    icon: Activity,
    items: [{ name: 'Plating' }, { name: 'Nailing' }]
  },
  {
    id: 'arthroscopy',
    name: 'Arthroscopy (Sports Medicine)',
    icon: Stethoscope,
    items: [
      { name: 'Shoulder' },
      { name: 'Knee' },
      { name: 'Hip' },
      { name: 'Elbow' },
      { name: 'Hand & Wrist' },
      { name: 'Foot & Ankle' },
      { name: 'Osteotomy' }
    ]
  },
  {
    id: 'arthroplasty',
    name: 'Arthroplasty (Joint Replacement)',
    icon: Bone,
    items: [
      { name: 'Hip Replacement' },
      { name: 'Knee Replacement' },
      { name: 'Elbow' },
      { name: 'Wrist' },
      { name: 'Ankle' }
    ]
  },
  {
    id: 'spine',
    name: 'Spine',
    icon: Layers,
    items: [
      { name: 'Thoracolumbar' },
      { name: 'Cervical' },
      { name: 'MIS (Minimally Invasive Spine)' }
    ]
  },
  {
    id: 'external-fixator',
    name: 'External Fixator',
    icon: Zap,
    items: [
      { name: 'Tubular Fixator' },
      { name: 'Rail Fixator' },
      { name: 'Ring Fixator' },
      { name: 'Finger Fixator' },
      { name: 'Ilizarov Fixator' }
    ]
  },
  {
    id: 'cmf',
    name: 'CMF (Cranio Maxillofacial)',
    icon: User,
    items: [
      { name: 'Maxillofacial Systems' },
      { name: 'Cranial Systems' },
      { name: 'Facial Trauma' }
    ]
  },
  {
    id: 'foot-ankle',
    name: 'Foot & Ankle',
    icon: Footprints,
    items: [
      { name: 'Trauma' },
      { name: 'Arthroscopy' },
      { name: 'Reconstruction' }
    ]
  }
];

export const OTHER_SERVICES = [
  { name: 'Hospital Furniture', icon: Hospital },
  { name: 'Operation Assistance', icon: HeartPulse },
  { name: 'ETO Sterilization', icon: ShieldCheck },
  { name: 'Surgical Instruments', icon: Scissors },
  { name: 'TPA / Government Supply', icon: Truck },
  { name: 'PMJAY Empanelment', icon: Building2 },
  { name: 'NABH Assistance', icon: ShieldCheck },
  { name: 'Social Media Marketing', icon: Share2 }
];

export const BODY_PART_MAPPING: Record<string, string[]> = {
  'knee': ['arthroscopy', 'arthroplasty'],
  'spine': ['spine'],
  'shoulder': ['arthroscopy', 'arthroplasty'],
  'face': ['cmf'],
  'hip': ['arthroplasty'],
  'cardiac': [],
  'leg': ['trauma', 'external-fixator']
};

export const ANATOMICAL_HOTSPOTS = [
  { id: 'face', label: 'Cranio Maxillofacial', category: 'CMF', top: '6.5%', left: '50%', delay: 0.2, description: 'Micro-plates and meshes engineered to restore anatomical contours in severe facial trauma and orthognathic anomalies.' },
  { id: 'shoulder', label: 'Shoulder Arthroplasty', category: 'Orthopedics', top: '20.5%', left: '39%', delay: 0.5, description: 'Modular total and reverse shoulder prostheses designed to replicate native kinematics in rotator cuff arthropathy.' },
  { id: 'cardiac', label: 'Cardiac Implants', category: 'Cardiac', top: '28%', left: '54%', delay: 0, description: 'Biocompatible valves and stents crafted for optimal hemodynamics in critical cardiovascular interventions.' },
  { id: 'spine', label: 'Disc Replacement', category: 'Spine', top: '42%', left: '50%', delay: 1.2, description: 'Cervical and lumbar motion-preserving implants mapped to reduce adjacent segment degeneration (ASD).' },
  { id: 'hip', label: 'Hip Reconstruction', category: 'Orthopedics', top: '52%', left: '43%', delay: 0.8, description: 'Cementless, porous-coated stems providing immediate primary stability and long-term biological fixation.' },
  { id: 'knee', label: 'Knee Surgery Portfolio', category: 'Orthopedics', top: '73.5%', left: '42%', delay: 1.5, description: 'High-flexion condylar geometries enabling deep knee bends while minimizing patellofemoral complication rates.' },
  { id: 'leg', label: 'Trauma & Fixators', category: 'Trauma', top: '91.5%', left: '42.5%', delay: 1.8, description: 'Intramedullary nails and external ring fixators facilitating crucial load-sharing for diaphyseal fractures.' },
];
