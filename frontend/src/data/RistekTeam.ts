import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const ristekTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) =>
    member.role.includes("RISTEK") ||
    member.role.includes("Research and Technology"),
);
