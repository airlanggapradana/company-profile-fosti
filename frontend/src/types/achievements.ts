export type AchievementCategory =
  | "All"
  | "Project"
  | "Competition"
  | "Research"
  | "Program";

export interface Achievement {
  id: string;
  rank: string;
  title: string;
  organization: string;
  year: string;
  category: Exclude<AchievementCategory, "All">;
  image?: string;
  color?: string;
}
