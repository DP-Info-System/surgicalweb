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
  'shoulder': ['arthroscopy'],
  'face': ['cmf'],
  'leg': ['trauma', 'external-fixator']
};

export const ANATOMICAL_HOTSPOTS = [
  { id: 'face', label: 'Cranio Maxillofacial', category: 'CMF', top: '6.5%', left: '50%', delay: 0.2, description: 'Advanced solutions for facial trauma and reconstructive surgery.' },
  { id: 'shoulder', label: 'Shoulder Arthroplasty', category: 'Orthopedics', top: '20.5%', left: '39%', delay: 0.5, description: 'Total and reverse shoulder replacement systems.' },
  { id: 'cardiac', label: 'Cardiac Implants', category: 'Cardiac', top: '28%', left: '54%', delay: 0, description: 'Specialized implants for cardiovascular procedures.' },
  { id: 'spine', label: 'Disc Replacement', category: 'Spine', top: '42%', left: '50%', delay: 1.2, description: 'Motion-preserving spinal disc replacement technology.' },
  { id: 'hip', label: 'Hip Reconstruction', category: 'Orthopedics', top: '52%', left: '43%', delay: 0.8, description: 'Primary and revision hip arthroplasty solutions.' },
  { id: 'knee', label: 'Knee Surgery Portfolio', category: 'Orthopedics', top: '73.5%', left: '42%', delay: 1.5, description: 'Comprehensive knee systems for all surgical approaches.' },
  { id: 'leg', label: 'Trauma & Fixators', category: 'Trauma', top: '91.5%', left: '42.5%', delay: 1.8, description: 'External and internal fixation for complex trauma.' },
];
