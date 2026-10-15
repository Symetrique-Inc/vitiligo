// import type { Metadata } from 'next';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Header } from '@/components/Header';
// import { Footer } from '@/components/Footer';
// import { Breadcrumbs } from '@/components/Breadcrumbs';
// import { ContentReviewStamp } from '@/components/ContentReviewStamp';
// import { SourcesBlock } from '@/components/SourcesBlock';
// import { commonSources, treatmentContent } from '@/content/siteContent';
// import { DoctorChecklist } from '@/components/DoctorChecklist';
// import {
//   Sparkles,
//   Sun,
//   Scissors,
//   Microscope,
//   Stethoscope,
//   ArrowRight,
//   Info,
//   CheckCircle2,
//   AlertCircle,
// } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'Treatment and care options | Vitiligo Hub',
//   description:
//     'Understand the journey and what to expect. Evidence-based information on topical creams, phototherapy, surgical options, emerging research, and questions for your dermatologist.',
// };

// export default function TreatmentAndCarePage() {
//   const exploreSections = [
//     { title: 'Treatment Overview', icon: Sparkles, href: '#overview', color: 'text-[#1FA37A]', bg: 'bg-[#E3F6EF]' },
//     { title: 'Topical Treatments', icon: Sparkles, href: '#topicals', color: 'text-[#1D5FE0]', bg: 'bg-[#EAF2FF]' },
//     { title: 'Light Therapy (Phototherapy)', icon: Sun, href: '#phototherapy', color: 'text-[#F2884B]', bg: 'bg-[#FFEDE3]' },
//     { title: 'Surgical Options', icon: Scissors, href: '#surgical', color: 'text-[#7C5CE0]', bg: 'bg-[#EFEAFF]' },
//     { title: 'Emerging Treatments', icon: Microscope, href: '#emerging', color: 'text-[#E8456B]', bg: 'bg-[#FDE8EE]' },
//     { title: 'What to Discuss with Doctor', icon: Stethoscope, href: '#checklist', color: 'text-[#0B1F6B]', bg: 'bg-[#EAF2FF]' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-pastel-mesh">
//       <Header />

//       <Breadcrumbs items={[{ label: 'Treatment & Care' }]} />

//       <main className="flex-1 pb-16">
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Hero Section */}
//           <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10 overflow-hidden relative">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//               <div className="lg:col-span-7 space-y-3">
//                 <div className="inline-flex items-center space-x-2">
//                   <span className="text-xs font-bold text-[#1FA37A] bg-[#E3F6EF] px-3.5 py-1 rounded-full uppercase tracking-wider">
//                     {treatmentContent.header.eyebrow}
//                   </span>
//                 </div>
//                 <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
//                   {treatmentContent.header.h1}
//                 </h1>
//                 <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed max-w-xl">
//                   {treatmentContent.header.subheading}
//                 </p>

//                 {/* Country approval note */}
//                 <div className="pt-2">
//                   <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#FFF6EE] border border-[#FEDDC7] text-xs font-semibold text-[#B34F18]">
//                     <AlertCircle className="w-4 h-4 shrink-0 text-[#F2884B]" />
//                     <span>{treatmentContent.header.countryNote}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="lg:col-span-5 relative">
//                 <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md mx-auto shadow-md border-4 border-white">
//                   <Image
//                     src="/images/card-treatment.jpg"
//                     alt="Close-up of caring hands during skin examination and consultation."
//                     fill
//                     priority
//                     sizes="(max-width: 1024px) 100vw, 40vw"
//                     className="object-cover object-center"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Explore this section */}
//           <section className="mb-14">
//             <h2 className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider mb-4">
//               Explore in this section
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {exploreSections.map((item, idx) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={idx}
//                     href={item.href}
//                     className="p-4 rounded-2xl bg-white border border-[#DDE5F5] hover:border-[#1FA37A] hover:shadow-xs transition-all flex items-center justify-between group"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
//                         <Icon className="w-4 h-4" />
//                       </div>
//                       <span className="text-xs sm:text-sm font-bold text-[#0B1F6B] group-hover:text-[#1FA37A] transition-colors">
//                         {item.title}
//                       </span>
//                     </div>
//                     <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1FA37A] shrink-0" />
//                   </a>
//                 );
//               })}
//             </div>
//           </section>

//           {/* Section: Treatment Overview */}
//           <section id="overview" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-4">
//             <span className="text-xs font-bold text-[#1FA37A] uppercase tracking-wider">
//               Overview
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B]">
//               Treatment Overview
//             </h2>
//             <p className="text-base text-[#1E2A4A] leading-relaxed">
//               {treatmentContent.header.intro}
//             </p>
//             <div className="space-y-3 pt-2 text-sm sm:text-base text-[#1E2A4A] leading-relaxed">
//               {treatmentContent.overview.paragraphs.map((p, idx) => (
//                 <p key={idx}>{p}</p>
//               ))}
//             </div>
//           </section>

//           {/* Section: Topical Treatments */}
//           <section id="topicals" className="mb-14">
//             <div className="mb-6">
//               <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider">
//                 Prescription Creams & Ointments
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
//                 Topical Treatments
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {treatmentContent.topicals.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="p-6 rounded-3xl bg-white border border-[#DDE5F5] shadow-xs flex flex-col justify-between hover:border-[#1D5FE0] transition-colors"
//                 >
//                   <div className="space-y-3">
//                     <div className="w-9 h-9 rounded-xl bg-[#EAF2FF] text-[#1D5FE0] font-bold text-xs flex items-center justify-center">
//                       0{idx + 1}
//                     </div>
//                     <h3 className="font-bold text-lg text-[#0B1F6B]">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-[#1E2A4A] leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Section: Light Therapy (Phototherapy) */}
//           <section id="phototherapy" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-6">
//             <div>
//               <span className="text-xs font-bold text-[#F2884B] uppercase tracking-wider">
//                 Phototherapy
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
//                 Light Therapy (Phototherapy)
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="p-6 rounded-2xl bg-[#FFEDE3] border border-[#FEDDC7] space-y-3">
//                 <h3 className="font-bold text-base sm:text-lg text-[#0B1F6B]">
//                   Narrowband UVB phototherapy
//                 </h3>
//                 <p className="text-sm text-[#1E2A4A] leading-relaxed">
//                   The most widely used light treatment for vitiligo. It involves exposing affected skin to a specific wavelength of ultraviolet light, usually two to three times per week at a clinic. Many people see gradual repigmentation over several months.
//                 </p>
//               </div>

//               <div className="p-6 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] space-y-3">
//                 <h3 className="font-bold text-base sm:text-lg text-[#0B1F6B]">
//                   Excimer laser
//                 </h3>
//                 <p className="text-sm text-[#1E2A4A] leading-relaxed">
//                   A targeted form of light therapy that focuses on individual patches. It can be effective for small, stable areas of vitiligo.
//                 </p>
//               </div>
//             </div>

//             <div className="p-4 rounded-xl bg-[#F8FAFF] border border-[#DDE5F5] flex items-center space-x-3 text-xs sm:text-sm text-[#5B6785]">
//               <Info className="w-4 h-4 text-[#1D5FE0] shrink-0" />
//               <span>Light therapy is often combined with topical treatments for better results.</span>
//             </div>
//           </section>

//           {/* Section: Surgical Options */}
//           <section id="surgical" className="mb-14">
//             <div className="mb-6">
//               <span className="text-xs font-bold text-[#7C5CE0] uppercase tracking-wider">
//                 For Stable Vitiligo
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
//                 Surgical Options
//               </h2>
//               <p className="text-sm sm:text-base text-[#5B6785] mt-2">
//                 {treatmentContent.surgical.intro}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//               {treatmentContent.surgical.options.map((opt, idx) => (
//                 <div
//                   key={idx}
//                   className="p-6 rounded-3xl bg-white border border-[#DDE5F5] shadow-xs space-y-2 hover:border-[#7C5CE0] transition-colors"
//                 >
//                   <h3 className="font-bold text-lg text-[#0B1F6B]">
//                     {opt.title}
//                   </h3>
//                   <p className="text-sm text-[#1E2A4A] leading-relaxed">
//                     {opt.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <p className="text-xs sm:text-sm text-[#5B6785] italic">
//               {treatmentContent.surgical.note}
//             </p>
//           </section>

//           {/* Section: Emerging Treatments */}
//           <section id="emerging" className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-6">
//             <div>
//               <span className="text-xs font-bold text-[#E8456B] uppercase tracking-wider">
//                 Future Directions
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F6B] mt-1">
//                 Emerging Treatments
//               </h2>
//               <p className="text-sm sm:text-base text-[#5B6785] mt-1">
//                 {treatmentContent.emerging.intro}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {treatmentContent.emerging.areas.map((area, idx) => (
//                 <div
//                   key={idx}
//                   className="p-4 rounded-2xl bg-[#FDE8EE] border border-[#F8C8D4] flex items-center space-x-3"
//                 >
//                   <CheckCircle2 className="w-5 h-5 text-[#E8456B] shrink-0" />
//                   <span className="text-sm font-semibold text-[#0B1F6B]">
//                     {area}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="p-4 rounded-xl bg-[#F8FAFF] border border-[#DDE5F5] flex items-center space-x-3 text-xs sm:text-sm text-[#5B6785]">
//               <Info className="w-4 h-4 text-[#1D5FE0] shrink-0" />
//               <span>{treatmentContent.emerging.trialNote}</span>
//             </div>
//           </section>

//           {/* Section: What to Discuss with Your Doctor (Interactive Checklist) */}
//           <section id="checklist" className="mb-14">
//             <DoctorChecklist />
//           </section>

//           {/* CTA Band: Find a Doctor */}
//           <section className="bg-gradient-to-r from-[#0B1F6B] via-[#142B7E] to-[#1D5FE0] rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 mb-14">
//             <div className="space-y-2 max-w-2xl">
//               <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
//                 Next Steps
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-bold font-serif">
//                 Ready to speak with a specialist?
//               </h2>
//               <p className="text-sm text-blue-100">
//                 A qualified dermatologist can confirm diagnosis, assess disease stability, and tailor a safe, effective care plan for you.
//               </p>
//             </div>

//             <Link
//               href="/find-a-doctor"
//               className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#1FA37A] text-white hover:bg-[#188060] shadow-md transition-colors whitespace-nowrap"
//             >
//               <Stethoscope className="w-4 h-4" />
//               <span>Find a Doctor</span>
//             </Link>
//           </section>

//           {/* G4 Content Review Stamp */}
//           <ContentReviewStamp />

//           {/* G5 Collapsible Sources Block */}
//           <SourcesBlock sources={commonSources.p03} />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
