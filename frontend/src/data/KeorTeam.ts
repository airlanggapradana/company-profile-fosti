import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const keorTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) => member.role === "Keorganisasian",
);
