import { motion } from "framer-motion";

interface AchievementCardProps {
  count: string;
  label: string;
  delay: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  count,
  label,
  delay,
}) => {
  return (
    <motion.div
      className="flex h-full flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <motion.span
        className="mb-2 text-4xl font-bold text-red-500 md:text-5xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {count}
      </motion.span>
      <span className="text-sm font-semibold text-red-800 md:text-base">
        {label}
      </span>
    </motion.div>
  );
};

export default AchievementCard;
