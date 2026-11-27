import React from 'react';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalOrganization',
        '@id': 'https://www.onevitiligo.com/#organization',
        'name': 'OneVitiligo',
        'url': 'https://www.onevitiligo.com',
        'logo': {
          '@type': 'ImageObject',
          '@id': 'https://www.onevitiligo.com/#logo',
          'url': 'https://www.onevitiligo.com/images/onevitiligo-logo.png',
          'caption': 'OneVitiligo Logo',
        },
        'description': 'OneVitiligo is an independent global educational platform providing evidence-based vitiligo information, clinical research updates, and community support in 7 languages.',
        'parentOrganization': {
          '@type': 'Organization',
          'name': 'Symetrique Inc.',
          'url': 'https://symetrique.com',
        },
        'medicalSpecialty': ['Dermatology'],
        'publishingPrinciples': 'https://www.onevitiligo.com/editorial-policy',
        'knowsAbout': [
          'Vitiligo',
          'Autoimmune depigmentation',
          'Phototherapy (nbUVB)',
          'JAK Inhibitors',
          'Melanocyte biology',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.onevitiligo.com/#website',
        'url': 'https://www.onevitiligo.com',
        'name': 'OneVitiligo',
        'description': 'Trusted, plain-language vitiligo guidance and clinical support across every journey.',
        'publisher': {
          '@id': 'https://www.onevitiligo.com/#organization',
        },
        'inLanguage': ['en', 'hi', 'mr', 'te', 'ta', 'kn', 'bn'],
      },
      {
        '@type': 'MedicalCondition',
        '@id': 'https://www.onevitiligo.com/#condition',
        'name': 'Vitiligo',
        'alternateName': ['Leukoderma', 'Autoimmune Depigmentation'],
        'code': [
          {
            '@type': 'MedicalCode',
            'code': 'L80',
            'codingSystem': 'ICD-10',
          },
          {
            '@type': 'MedicalCode',
            'code': '201400',
            'codingSystem': 'OMIM',
          },
        ],
        'associatedPathophysiology': 'Autoimmune destruction and oxidative stress causing progressive loss of epidermal melanocytes.',
        'signOrSymptom': [
          {
            '@type': 'MedicalSymptom',
            'name': 'Macular depigmentation (chalk-white patches with distinct margins)',
          },
          {
            '@type': 'MedicalSymptom',
            'name': 'Leukotrichia (premature whitening of hair in affected areas)',
          },
        ],
        'possibleTreatment': [
          {
            '@type': 'MedicalTherapy',
            'name': 'Topical Calcineurin Inhibitors (Tacrolimus, Pimecrolimus)',
          },
          {
            '@type': 'MedicalTherapy',
            'name': 'Topical Corticosteroids',
          },
          {
            '@type': 'MedicalTherapy',
            'name': 'Topical JAK Inhibitors (Ruxolitinib cream)',
          },
          {
            '@type': 'MedicalTherapy',
            'name': 'Narrowband UVB (nbUVB) Phototherapy',
          },
          {
            '@type': 'MedicalTherapy',
            'name': 'Autologous Non-Cultured Epidermal Cell Suspension (MKTP)',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

