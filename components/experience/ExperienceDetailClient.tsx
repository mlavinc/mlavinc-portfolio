"use client";

import { ExperienceDetail } from "@/components/experience/ExperienceDetail";
import { getExperienceById } from "@/data/experience";
import { useLocale } from "@/lib/i18n/locale-context";

export function ExperienceDetailClient({ id }: { id: string }) {
  const { locale } = useLocale();
  const experience = getExperienceById(id, locale);

  if (!experience) {
    return null;
  }

  return <ExperienceDetail experience={experience} />;
}
