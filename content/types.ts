export interface ContentReviewStamp {
  reviewerName: string;
  qualification: string;
  lastReviewed: string;
  nextReview: string;
}

export interface SourceItem {
  id: string;
  name: string;
  citation: string;
  url?: string;
  isPlaceholder?: boolean;
}

export interface MythItem {
  id: number;
  myth: string;
  verdict: string;
  oneLineFact: string;
  fullExplanation: string;
  visualIcon: string;
  visualCaption?: string;
  source: string;
  sourceId: string;
}

export interface RegionCard {
  region: string;
  body: string;
  fullExplanation?: string;
}

export interface ExploreTile {
  title: string;
  description: string;
  iconName: string;
  href: string;
}

export interface AudienceTile {
  id: number;
  iconName: string;
  label: string;
  description: string;
  href: string;
  colorName: 'blue' | 'lilac' | 'mint' | 'peach';
}
