import React from 'react';
import { MarqueeLogoScroller } from '../ui/marquee-logo-scroller';
import {
  IndianRailwaysLogo,
  DfccilLogo,
  JmrcLogo,
  PuneMetroLogo,
  KmrcLogo,
  IrconLogo,
  RvnlLogo,
  AdaniLogo,
  NpcilLogo,
  DefenseLogo,
  BpclLogo,
  HpclLogo,
  IoclLogo,
  SbiLogo,
  BoiLogo,
  DlfLogo,
  RcfLogo,
  MclLogo,
  GenericClientLogo
} from '../common/ClientLogos';

export default function OurClientsSection() {
  const clientsList = [
    {
      alt: 'Indian Railways',
      icon: IndianRailwaysLogo,
      gradient: { from: '#00E5FF', via: '#0284C7', to: '#0369A1' },
    },
    {
      alt: 'DFCCIL Corridor',
      icon: DfccilLogo,
      gradient: { from: '#00C2CB', via: '#0284C7', to: '#0369A1' },
    },
    {
      alt: 'JMRC Jaipur Metro',
      icon: JmrcLogo,
      gradient: { from: '#38BDF8', via: '#0284C7', to: '#1E3A8A' },
    },
    {
      alt: 'Pune Metro Rail',
      icon: PuneMetroLogo,
      gradient: { from: '#00E5FF', via: '#0284C7', to: '#0F172A' },
    },
    {
      alt: 'Kolkata Metro (KMRC)',
      icon: KmrcLogo,
      gradient: { from: '#38BDF8', via: '#0369A1', to: '#0F172A' },
    },
    {
      alt: 'Ircon International',
      icon: IrconLogo,
      gradient: { from: '#F2A623', via: '#D97706', to: '#78350F' },
    },
    {
      alt: 'RVNL Rail Vikas',
      icon: RvnlLogo,
      gradient: { from: '#00E5FF', via: '#0284C7', to: '#1E293B' },
    },
    {
      alt: 'Sarguja Rail (Adani)',
      icon: AdaniLogo,
      gradient: { from: '#00E5FF', via: '#0284C7', to: '#0F172A' },
    },
    {
      alt: 'Nuclear Power (NPCIL)',
      icon: NpcilLogo,
      gradient: { from: '#10B981', via: '#059669', to: '#064E3B' },
    },
    {
      alt: 'Ministry of Defense / IAF',
      icon: DefenseLogo,
      gradient: { from: '#6366F1', via: '#4F46E5', to: '#1E1B4B' },
    },
    {
      alt: 'Indian Ordnance Factory',
      icon: DefenseLogo,
      gradient: { from: '#FBBF24', via: '#D97706', to: '#451A03' },
    },
    {
      alt: 'Bharat Petroleum (BPCL)',
      icon: BpclLogo,
      gradient: { from: '#F59E0B', via: '#0284C7', to: '#1E3A8A' },
    },
    {
      alt: 'Hindustan Petroleum (HPCL)',
      icon: HpclLogo,
      gradient: { from: '#EF4444', via: '#0284C7', to: '#1E3A8A' },
    },
    {
      alt: 'Indian Oil (IOCL)',
      icon: IoclLogo,
      gradient: { from: '#F97316', via: '#0284C7', to: '#1E3A8A' },
    },
    {
      alt: 'RCF Chemicals',
      icon: RcfLogo,
      gradient: { from: '#10B981', via: '#047857', to: '#064E3B' },
    },
    {
      alt: 'Mahanadi Coalfields (MCL)',
      icon: MclLogo,
      gradient: { from: '#FBBF24', via: '#64748B', to: '#0F172A' },
    },
    {
      alt: 'State Bank of India (SBI)',
      icon: SbiLogo,
      gradient: { from: '#0284C7', via: '#0369A1', to: '#0F172A' },
    },
    {
      alt: 'Bank of India (BOI)',
      icon: BoiLogo,
      gradient: { from: '#FBBF24', via: '#D97706', to: '#78350F' },
    },
    {
      alt: 'DLF India',
      icon: DlfLogo,
      gradient: { from: '#EF4444', via: '#B91C1C', to: '#7F1D1D' },
    },
    {
      alt: 'HEG Limited',
      icon: GenericClientLogo,
      gradient: { from: '#38BDF8', via: '#0284C7', to: '#1E293B' },
    },
    {
      alt: 'VE Commercial Vehicles',
      icon: GenericClientLogo,
      gradient: { from: '#00E5FF', via: '#0284C7', to: '#0F172A' },
    },
    {
      alt: 'ACG Group',
      icon: GenericClientLogo,
      gradient: { from: '#10B981', via: '#0284C7', to: '#0F172A' },
    },
    {
      alt: 'Kalpataru Group',
      icon: GenericClientLogo,
      gradient: { from: '#FBBF24', via: '#D97706', to: '#1E293B' },
    },
    {
      alt: 'Kolhapur Municipal Corp',
      icon: GenericClientLogo,
      gradient: { from: '#38BDF8', via: '#0284C7', to: '#0F172A' },
    },
    {
      alt: 'CIPET',
      icon: GenericClientLogo,
      gradient: { from: '#6366F1', via: '#4F46E5', to: '#1E1B4B' },
    },
    {
      alt: 'Urja Vikas Nigam',
      icon: GenericClientLogo,
      gradient: { from: '#10B981', via: '#F59E0B', to: '#064E3B' },
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <MarqueeLogoScroller
        title="Trusted by 26+ Enterprise & Public Sector Leaders"
        description="Deployed across Indian Railways, defence infrastructure, nuclear energy power plants, public water departments, and MSME manufacturing hubs."
        logos={clientsList}
        speed="normal"
      />
    </div>
  );
}
