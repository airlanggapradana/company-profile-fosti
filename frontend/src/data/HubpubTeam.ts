import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const hubpubTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) =>
    member.role.includes("Hubungan Publik") ||
    member.role.includes("Public Relations"),
);
