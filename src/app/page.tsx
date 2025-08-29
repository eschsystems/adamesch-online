import CharacterCard from "@/components/CharacterCard";
import CharacterDetailsCard from "@/components/CharacterDetailsCard";
import SavingThrowsCard from "@/components/SavingThrowsCard";
import SkillsCard from "@/components/SkillsCard";
import FeaturesTraitsCard from "@/components/FeaturesTraitsCard";
import CharacterAppearanceCard from "@/components/CharacterAppearanceCard";
import AlliesOrganizationsCard from "@/components/AlliesOrganizationsCard";
import BackstoryCard from "@/components/BackstoryCard";
import AliasCard from "@/components/AliasCard";
import SpellsCard from "@/components/SpellsCard";
import JournalCard from "@/components/JournalCard";
import Footer from "@/components/Footer";
import { socialLinks } from "@/data/socialLinks";
import { getRecentPosts } from "@/lib/blog";

export default function Home() {
  const savingThrows = [
    { ability: "STR", modifier: "+1", proficient: false },
    { ability: "DEX", modifier: "-1", proficient: false },
    { ability: "CON", modifier: "+2", proficient: false },
    { ability: "INT", modifier: "+8", proficient: true },
    { ability: "WIS", modifier: "+2", proficient: false },
    { ability: "CHA", modifier: "+6", proficient: true },
  ];

  const skills = [
    { name: "acrobatics", ability: "DEX", modifier: "-1", proficient: false, expertise: false },
    { name: "animal handling", ability: "WIS", modifier: "+4", proficient: true, expertise: false },
    { name: "arcana", ability: "INT", modifier: "+10", proficient: false, expertise: true },
    { name: "athletics", ability: "STR", modifier: "+1", proficient: false, expertise: false },
    { name: "deception", ability: "CHA", modifier: "+4", proficient: false, expertise: false },
    { name: "history", ability: "INT", modifier: "+6", proficient: false, expertise: false },
    { name: "insight", ability: "WIS", modifier: "+4", proficient: true, expertise: false },
    { name: "intimidation", ability: "CHA", modifier: "+6", proficient: true, expertise: false },
    { name: "investigation", ability: "INT", modifier: "+6", proficient: false, expertise: false },
    { name: "medicine", ability: "WIS", modifier: "+2", proficient: false, expertise: false },
    { name: "nature", ability: "INT", modifier: "+8", proficient: true, expertise: false },
    { name: "perception", ability: "WIS", modifier: "+6", proficient: false, expertise: true },
    { name: "performance", ability: "CHA", modifier: "+4", proficient: false, expertise: false },
    { name: "persuasion", ability: "CHA", modifier: "+6", proficient: true, expertise: false },
    { name: "religion", ability: "INT", modifier: "+6", proficient: false, expertise: false },
    { name: "sleight of hand", ability: "DEX", modifier: "+3", proficient: false, expertise: true },
    { name: "stealth", ability: "DEX", modifier: "-1", proficient: false, expertise: false },
    { name: "survival", ability: "WIS", modifier: "+4", proficient: true, expertise: false },
  ];

  const features = [
    {
      name: "curse: adhd",
      description: "your mind is a swirling maelstrom of simultaneous interests and half-finished projects. you have disadvantage on concentration checks but gain advantage on knowledge checks across all domains. new hobbies appear in your life like random encounters.",
      source: "human, variant"
    },
    {
      name: "greybeard",
      description: "\"do not cite the deep magic to me, witch! i was there when it was written\"",
      source: "computer whisperer"
    },
    {
      name: "aquatic adventurer",
      description: "you have trained in the ancient art of underwater exploration, able to navigate the crushing depths and commune with the creatures of the abyss. you can breathe underwater for extended periods and move through aquatic environments with supernatural grace.",
      source: "artificer"
    },
    {
      name: "platinum star gay",
      description: "you are so fucking fabulous that you had to be delivered via c-section.",
      source: "human, variant"
    },
    {
      name: "eagle scout",
      description: "you once were obsessed with collecting useless trinkets known as 'merit badges.'",
      source: "druid"
    },
    {
      name: "high school valedictorian",
      description: "your mastery of test-taking transcends mere knowledge. you have advantage on all standardized tests and can achieve perfect scores without studying through pure academic intuition and pattern recognition.",
      source: "wizard"
    },
    {
      name: "alchemical mastery",
      description: "through sheer force of will and arcane knowledge, you have purified your soul by escaping the clutches of hell itself. your spirit has been transmuted into something stronger, granting you resistance to all forms of corruption and the ability to cleanse toxins from body and mind.",
      source: "occultist"
    },
    {
      name: "curse: debtbound resurrection",
      description: "to escape a particularly litigious lich, you were forced to declare personal bankruptcy and suffer from a permanent level of exhaustion until sometime in 2029. your very soul is collateral, preventing true death but binding you to mortal suffering.",
      source: "paladin"
    },
    {
      name: "rizz 'em with the 'tism",
      description: "your neurodivergent charm is so powerful that you instructed a robot to help you build an entire d&d character sheet website just to showcase your personality. advantage on persuasion checks when discussing hyperfixations.",
      source: "human, variant"
    },
    {
      name: "lazy programmer",
      description: "you are physically and morally incapable of performing the same task manually more than once. the mere thought of repetitive work fills you with existential dread. you automatically seek to automate, script, or delegate any process that needs to be done twice.",
      source: "computer whisperer"
    }
  ];

  const alliesOrganizations = [
    {
      name: "esch systems",
      type: "organization" as const,
      relationship: "founder & ceo",
      description: "ai-first consultancy for modern empire builders, specializing in agentic systems"
    },
    {
      name: "wellford gallery",
      type: "organization" as const,
      relationship: "gallerist",
      description: "contemporary art gallery showcasing homoerotic artists with a focus on analog, non-digital art"
    },
    {
      name: '"snacks & stimulants"',
      type: "organization" as const,
      relationship: "assistant manager",
      description: "nocturnal purveyor of essential supplies for late-night adventurers and caffeine-dependent denizens"
    }
  ];



  const recentPosts = getRecentPosts(6);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Top Row */}
          <div className="lg:col-span-2">
            <CharacterCard name="ADAM ESCH" title="systems engineer" />
          </div>
          <CharacterDetailsCard 
            classAndLevel="generalist"
            background="computer whisperer"
            playerName="he/him/they"
            race="human, variant"
            alignment="chaotic evil"
            experiencePoints={9001}
          />
          
          {/* Second Row - Character Appearance, Allies & Organizations, Backstory */}
          <div className="h-full">
            <CharacterAppearanceCard 
              imageSrc="/profile.jpg"
              age={(() => {
                const birthDate = new Date(1989, 4, 10); // May 10, 1989 (month is 0-indexed)
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                  age--;
                }
                return age.toString();
              })()}
              height="1.7 m"
              weight="66.6 kg"
              eyes="green"
              skin="pale (sunscreen required)"
              hair="n/a"
            />
          </div>
          
          <div className="h-full">
            <AlliesOrganizationsCard alliesOrganizations={alliesOrganizations} />
          </div>
          
          <div className="lg:col-span-1 h-full">
            <BackstoryCard 
              backstory="a computer engineer from indiana who has professionally managed entire datacenters and architected cloud infrastructure for fortune 500 companies. despite these accomplishments, he considers his corporate tech career to have failed due to a series of unfortunate managers who failed to recognize his brilliance. he now reserves his out-of-the-box, unconventional approaches for his own company's clients and pays the bills working nights at a gas station/convenience store, where all that walking around has resulted in him having a *fantastic* ass"
              personalityTraits=""
              ideals="believes ai represents a paradigm shift as transformative as the internet was in the 1990s"
              bonds="loves cats 🐱"
              flaws="hates boomers, wants to be a billionaire, has too many ideas, cannot perceive time"
            />
          </div>
          
          {/* Third Row */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow">
            <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">PROFICIENCIES & LANGUAGES</h3>
            <div className="space-y-1 text-sm font-mono">
              <div className="text-[var(--neon-orange)]">• javascript</div>
              <div className="text-[var(--neon-orange)]">• typescript</div>
              <div className="text-[var(--neon-orange)]">• react</div>
              <div className="text-[var(--neon-orange)]">• node.js</div>
              <div className="text-[var(--neon-orange)]">• python</div>
              <div className="text-[var(--neon-orange)]">• powershell</div>
              <div className="text-[var(--neon-orange)]">• automation</div>
              <div className="text-[var(--neon-orange)]">• excel-fu</div>
            </div>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow">
            <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">EQUIPMENT</h3>
            <div className="space-y-1 text-sm font-mono">
              <div className="text-[var(--neon-green)]">• &quot;zora&quot; (m1 mac studio)</div>
              <div className="text-[var(--neon-green)]">• &quot;chappie&quot; (m1 macbook air)</div>
              <div className="text-[var(--neon-green)]">• &quot;liberty prime&quot; (iphone 13 pro)</div>
              <div className="text-[var(--neon-green)]">• &quot;lady lovelace&quot; (ipad mini 6)</div>
              <div className="text-[var(--neon-green)]">• &quot;nick valentine&quot; (ipad pro)</div>
              <div className="text-[var(--neon-green)]">• caffeinated beverages, various</div>
              <div className="text-[var(--neon-green)]">• lesser bag of holding</div>
              <div className="text-[var(--neon-green)]">• +1 ring of protection</div>
              <div className="text-[var(--neon-green)]">• +1 knife of box opening</div>
              <div className="text-[var(--neon-green)]">• &quot;the duke&quot; (2019 mini cooper s)</div>
            </div>
          </div>

          <FeaturesTraitsCard features={features} />
          
          {/* Fourth Row */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow flex flex-col">
            <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">STATS</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-[var(--neon-cyan)]">STR</span>
                <span className="text-white">12 (+1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--neon-cyan)]">DEX</span>
                <span className="text-white">8 (-1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--neon-cyan)]">CON</span>
                <span className="text-white">14 (+2)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--neon-cyan)]">INT</span>
                <span className="text-white">22 (+6)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--neon-cyan)]">WIS</span>
                <span className="text-white">14 (+2)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--neon-cyan)]">CHA</span>
                <span className="text-white">18 (+4)</span>
              </div>
            </div>
          </div>

          <SkillsCard skills={skills} />
          <SavingThrowsCard savingThrows={savingThrows} />
        </div>
        
        {/* Full-width alias card at bottom */}
        <div className="mt-6">
          <AliasCard socialLinks={socialLinks} />
        </div>
        
        {/* Full-width spells card */}
        <div className="mt-6">
          <SpellsCard />
        </div>
        
        {/* Full-width journal card */}
        <div className="mt-6">
          <JournalCard posts={recentPosts} />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
