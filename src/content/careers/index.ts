import id from './id.json';
import en from './en.json';

export type CareerApplication = {
  method?: string;
  url?: string;
  email?: string;
  subject?: string;
  documents?: string[];
  steps?: string[];
};

export type Vacancy = {
  slug: string;
  isActive?: boolean;
  title: string;
  department?: string;
  level?: string;
  location: string;
  employmentType: string;
  workModel?: string;
  experience?: string;
  salaryRange?: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  postedDate?: string;
  applicationDeadline?: string;
  summary: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  application?: CareerApplication;
};

export type JobPostingPostalAddress = {
  streetAddress: string;
  addressRegion: string;
  postalCode: string;
  addressLocality?: string;
};

export type CareerContent = {
  badge: string;
  title: string;
  description: string;
  sectionTitle: string;
  sectionDescription: string;
  emptyTitle: string;
  emptyDescription: string;
  applyLabel: string;
  email: string;
  jobPostingAddress?: JobPostingPostalAddress;
  vacancies: Vacancy[];
};

const contentByLocale: Record<'id' | 'en', CareerContent> = { id, en };

function normalizeLocale(locale: string): 'id' | 'en' {
  return locale === 'id' ? 'id' : 'en';
}

export function getCareerContent(locale: string): CareerContent {
  return contentByLocale[normalizeLocale(locale)];
}

export function getActiveVacancies(locale: string): Vacancy[] {
  return getCareerContent(locale).vacancies.filter((vacancy) => vacancy.isActive !== false);
}

export function getVacancyBySlug(locale: string, slug: string): Vacancy | undefined {
  return getActiveVacancies(locale).find((vacancy) => vacancy.slug === slug);
}
