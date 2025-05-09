"use client";
import { achievements } from "@/data/achievements";
import { Achievement, AchievementCategory } from "@/types/achievements";
import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import AchievementsGrid from "./AchievementsGrid";

const categories: AchievementCategory[] = [
  "All",
  "Project",
  "Competition",
  "Research",
  "Program",
];

const RistekAchievements = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<AchievementCategory>("All");
  const [filteredAchievements, setFilteredAchievements] =
    useState(achievements);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredAchievements(achievements);
    } else {
      setFilteredAchievements(
        achievements.filter(
          (achievement) => achievement.category === selectedCategory,
        ),
      );
    }
  }, [selectedCategory]);
  return (
    <main className="my-8">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {filteredAchievements.length > 0 ? (
        <AchievementsGrid achievements={filteredAchievements} />
      ) : (
        <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
          <div className="mb-4 rounded-full bg-gray-100 p-6">
            <Trophy className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="mb-1 text-xl font-bold text-gray-900">
            No achievements found
          </h3>
          <p className="max-w-lg text-lg font-semibold italic text-gray-500">
            Something remarkable is being prepared. Stay tuned for the
            masterpiece!
          </p>
        </div>
      )}
    </main>
  );
};

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCardRistek: React.FC<AchievementCardProps> = ({
  achievement,
}) => {
  // Color mapping for achievement ranks
  const getRankColor = (rank: string) => {
    switch (rank.toLowerCase()) {
      case "1st":
        return "text-red-500";
      case "2nd":
        return "text-rose-500";
      case "3rd":
        return "text-amber-600";
      case "champion":
        return "text-fuchsia-500";
      case "finalist":
        return "text-blue-500";
      case "semifinalist":
        return "text-emerald-500";
      case "honorable mention":
        return "text-purple-500";
      default:
        return "text-orange-500";
    }
  };

  return (
    <Card className="rounded-xl">
      <div className="relative h-36 overflow-hidden">
        <Image
          src={achievement.image}
          alt={`${achievement.organization} achievement`}
          priority
          fill
          className="h-full w-full rounded-t-xl object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-lg font-bold ${getRankColor(achievement.rank)}`}
            >
              {achievement.rank}
            </span>
            <span className="font-medium text-gray-700 dark:text-white">
              {achievement.rank.toLowerCase() !== "honorable mention"
                ? "place of"
                : ""}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {achievement.title || achievement.organization}
          </h3>
          <div className="mt-2 text-sm font-medium text-gray-600 dark:text-muted-foreground">
            <p>{achievement.organization}</p>
            <p className="text-sm">{achievement.year}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RistekAchievements;
