import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaMedal } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { PiPuzzlePieceLight } from "react-icons/pi";

const achievements = [
  {
    id: 1,
    title: "LeetCode Knight",
    description: "Reached Knight level on LeetCode — 1902 rating — by solving over 1000+ competitive programming problems across various difficulty levels",
    icon: <SiLeetcode className="text-yellow-500 text-xl" />,
    stats: "1000+ Problems",
    badgeColor: "bg-black",
    link: "https://leetcode.com/u/avinash_4579/"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Completed over 1100+ DSA problems across various platforms including LeetCode, GeeksforGeeks, CodeChef, and Codeforces.",
    icon: <FaCode className="text-violet-500 text-xl" />,
    stats: "1300+ Problems",
    badgeColor: "bg-black",
    link: "#"
  },
  // {
  //   id: 3,
  //   title: "CodeChef 4 Star",
  //   description: "Achieved 4-star rating on CodeChef with consistent participation in monthly competitions.",
  //   icon: <SiCodechef className="text-amber-700 text-xl" />,
  //   stats: "4★ Rating",
  //   badgeColor: "bg-black",
  //   link: "https://www.codechef.com/users/avinash_kumar"
  // },
  // {
  //   id: 4,
  //   title: "HackerRank Gold",
  //   description: "Gold badge in Problem Solving, Python, and SQL on HackerRank with 5-star ratings in multiple domains.",
  //   icon: <SiHackerrank className="text-green-400 text-xl" />,
  //   stats: "Gold Badge",
  //   badgeColor: "bg-black",
  //   link: "https://www.hackerrank.com/avinash_kumar"
  // }
];

const competitiveStats = [
  {
    label: "Problems Solved",
    value: "1300+",
    icon: <PiPuzzlePieceLight className="text-3xl text-violet-400" />
  },
  {
    label: "Global Rank",
    value: "Top 5%",
    icon: <FaTrophy className="text-3xl text-yellow-400" />
  },
  {
    label: "Contests",
    value: "50+",
    icon: <FaMedal className="text-3xl text-blue-400" />
  },
  {
    label: "Languages",
    value: "4",
    icon: <FaCode className="text-3xl text-green-400" />
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-12 md:py-16 bg-[#050816] relative">
      <div className="container mx-auto px-6 md:px-0 lg:px-44">
        <div className="text-center mb-10 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-white"
          >
            Competitive <span className="text-violet-400">Programming</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4"
          >
            My achievements in algorithmic problem-solving and competitive programming challenges.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <div className="mb-10 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {competitiveStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#151A2D] rounded-xl p-4 md:p-6 text-center"
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  {stat.icon}
                </div>
                <h4 className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#151A2D] rounded-xl p-4 md:p-6"
            >
              <div className="flex flex-col sm:flex-row items-start">
                <div className="p-3 bg-[#111] rounded-xl mb-3 sm:mb-0 sm:mr-4">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 sm:mb-0">{achievement.title}</h4>
                    <span className={`px-3 py-1 ${achievement.badgeColor} text-white rounded-full text-xs font-medium inline-block w-fit mt-1 sm:mt-0`}>
  {achievement.stats}
</span>

                  </div>
                  <p className="text-sm md:text-base text-gray-300 mb-4">{achievement.description}</p>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 md:mt-16"
        >
          <p className="text-lg md:text-xl text-gray-400 mb-6 px-4">
            I enjoy tackling algorithmic challenges and constantly improving my problem-solving skills
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="https://leetcode.com/u/avinash_4579/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-8 py-2 md:py-3 bg-violet-500 hover:bg-violet-600 rounded-full text-white text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center space-x-2"
            >
              <SiLeetcode className="mr-2" />
              <span>View My LeetCode Profile</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 left-10 w-32 md:w-64 h-32 md:h-64 bg-violet-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-36 md:w-72 h-36 md:h-72 bg-violet-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default AchievementsSection;