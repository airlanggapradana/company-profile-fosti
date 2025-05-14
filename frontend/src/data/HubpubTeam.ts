import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const hubpubTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) => member.role === "Hubungan Publik",
);
