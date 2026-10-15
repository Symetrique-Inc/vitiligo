// import type { Metadata } from 'next';
// import Link from 'next/link';
// import { Header } from '@/components/Header';
// import { Footer } from '@/components/Footer';
// import { Breadcrumbs } from '@/components/Breadcrumbs';
// import { ContentReviewStamp } from '@/components/ContentReviewStamp';
// import { SourcesBlock } from '@/components/SourcesBlock';
// import { commonSources } from '@/content/siteContent';
// import { PlaceholderTag } from '@/components/PlaceholderTag';
// import { Stethoscope, Search, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'Find a Dermatologist — Search Treatment Centres | Vitiligo Hub',
//   description:
//     'Search for dermatologists and treatment centres near you. Verified directory of vitiligo specialists, clinics, and phototherapy centres.',
// };

// export default function FindDoctorPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-pastel-mesh">
//       <Header />

//       <Breadcrumbs items={[{ label: 'Find a Doctor' }]} />

//       <main className="flex-1 pb-16">
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Hero Section */}
//           <section className="py-8 sm:py-12 bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-sm mt-4 mb-10">
//             <div className="max-w-3xl space-y-3">
//               <div className="inline-flex items-center space-x-2">
//                 <span className="text-xs font-bold text-[#1FA37A] bg-[#E3F6EF] px-3.5 py-1 rounded-full uppercase tracking-wider">
//                   Care Network
//                 </span>
//                 <PlaceholderTag label="Coming Soon" />
//               </div>
//               <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#0B1F6B] tracking-tight">
//                 Find a dermatologist
//               </h1>
//               <p className="text-base sm:text-lg text-[#5B6785] leading-relaxed">
//                 Search for dermatologists and treatment centres near you.
//               </p>
//             </div>
//           </section>

//           {/* Directory Search Interface (Disabled / Coming Soon state) */}
//           <section className="bg-white rounded-3xl border border-[#DDE5F5] p-6 sm:p-10 shadow-xs mb-14 space-y-8">
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2 text-[#0B1F6B]">
//                 <Search className="w-5 h-5 text-[#1D5FE0]" />
//                 <h2 className="text-xl sm:text-2xl font-bold font-serif">
//                   Search by City, State, or PIN Code
//                 </h2>
//               </div>
//               <p className="text-sm text-[#5B6785]">
//                 We are actively curating and verifying an international directory of certified dermatologists, phototherapy centres, and pigmentary disorder clinics.
//               </p>
//             </div>

//             {/* Mocked disabled search inputs */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 opacity-75">
//               <div className="md:col-span-8 relative">
//                 <MapPin className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
//                 <input
//                   type="text"
//                   disabled
//                   placeholder="Enter city, postal/PIN code, or hospital name..."
//                   className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 text-sm text-gray-400 cursor-not-allowed"
//                 />
//               </div>

//               <div className="md:col-span-4">
//                 <button
//                   type="button"
//                   disabled
//                   className="w-full py-3.5 rounded-2xl bg-gray-200 text-gray-500 font-bold text-sm cursor-not-allowed flex items-center justify-center space-x-2"
//                 >
//                   <Search className="w-4 h-4" />
//                   <span>Search Directory</span>
//                 </button>
//               </div>
//             </div>

//             {/* Information Notice */}
//             <div className="p-6 rounded-2xl bg-[#EAF2FF] border border-[#D5E2FA] space-y-3">
//               <div className="flex items-center space-x-2 text-[#1D5FE0]">
//                 <Clock className="w-5 h-5" />
//                 <h3 className="font-bold text-base text-[#0B1F6B]">
//                   Specialist Directory Launching Soon
//                 </h3>
//               </div>
//               <p className="text-xs sm:text-sm text-[#1E2A4A] leading-relaxed">
//                 Symetrique is partnering with dermatology societies (such as IADVL, AAD, and national vitiligo taskforces) to provide a trusted, uncommercialised directory where patients can connect with clinicians experienced in vitiligo care.
//               </p>
//               <div className="pt-2 flex flex-wrap gap-4">
//                 <Link
//                   href="/understand-vitiligo"
//                   className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#0B1F6B] text-white hover:bg-[#1D5FE0] transition-colors"
//                 >
//                   <span>Explore Understand Vitiligo</span>
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </Link>
//                 <Link
//                   href="/treatment-and-care#checklist"
//                   className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold bg-white text-[#0B1F6B] border border-[#DDE5F5] hover:bg-gray-50 transition-colors"
//                 >
//                   <span>Prepare Doctor Checklist</span>
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </Link>
//               </div>
//             </div>
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
