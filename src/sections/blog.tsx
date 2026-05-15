"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, X, ChevronLeft, Share2, Twitter, Linkedin, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  color: string;
  views?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of DeFi: Trends to Watch in 2024",
    excerpt: "Exploring the emerging trends in decentralized finance and what they mean for the future of banking and financial services.",
    content: `Decentralized Finance (DeFi) has revolutionized the way we think about financial services. As we move through 2024, several key trends are shaping the future of this rapidly evolving ecosystem.

## 1. Real World Assets (RWA) Tokenization

One of the most significant developments in DeFi is the tokenization of real-world assets. From real estate to commodities, traditional assets are finding their way onto the blockchain. This trend bridges the gap between traditional finance and DeFi, offering:
- Increased liquidity for illiquid assets
- Fractional ownership opportunities
- 24/7 global trading access
- Reduced transaction costs

## 2. Institutional DeFi Adoption

Major financial institutions are no longer just observing from the sidelines. They're actively building DeFi infrastructure:
- JPMorgan's Onyx platform processing billions in daily transactions
- Goldman Sachs launching digital asset trading
- Traditional banks offering crypto custody services

## 3. Cross-Chain Interoperability

The future of DeFi is multi-chain. Protocols like LayerZero, Wormhole, and Axelar are enabling seamless asset transfers across different blockchains, solving one of DeFi's biggest challenges.

## 4. Regulatory Clarity

As regulations become clearer, especially in regions like the EU with MiCA (Markets in Crypto-Assets), DeFi protocols are adapting with:
- Compliance-first architecture
- Decentralized identity solutions
- Transparent governance mechanisms

## 5. AI-Powered DeFi

Artificial Intelligence is enhancing DeFi through:
- Predictive analytics for yield farming
- Automated risk assessment
- Smart contract optimization
- Fraud detection systems

## Conclusion

The DeFi landscape in 2024 is maturing rapidly. With institutional adoption, regulatory clarity, and technological innovation, we're witnessing the foundation of a new financial system that promises to be more inclusive, efficient, and transparent than ever before.`,
    category: "DeFi",
    readTime: "8 min",
    date: "Jan 15, 2024",
    featured: true,
    color: "from-purple-500 to-pink-500",
    views: "12.5K",
  },
  {
    id: "2",
    title: "Understanding Layer 2 Solutions: The Key to Ethereum Scaling",
    excerpt: "A comprehensive guide to Ethereum Layer 2 scaling solutions and their impact on blockchain adoption.",
    content: `Ethereum's success brought with it a significant challenge: scalability. With thousands of decentralized applications competing for limited block space, transaction fees soared and confirmation times lagged. Layer 2 solutions emerged as the answer to this critical problem.

## What Are Layer 2 Solutions?

Layer 2 (L2) solutions are protocols built on top of the Ethereum mainnet (Layer 1) that process transactions off-chain while inheriting Ethereum's security guarantees. Think of them as express lanes on a busy highway.

## Major Layer 2 Technologies

### Optimistic Rollups
**Examples: Arbitrum, Optimism**
- Assume transactions are valid by default
- Use fraud proofs for dispute resolution
- 7-day withdrawal period for security
- Compatible with existing Ethereum tooling

### Zero-Knowledge Rollups (ZK-Rollups)
**Examples: zkSync, StarkNet, Polygon zkEVM**
- Use cryptographic proofs to validate transactions
- Instant withdrawals
- Higher throughput than optimistic rollups
- Computationally intensive proof generation

### State Channels
**Examples: Lightning Network (Bitcoin), Raiden (Ethereum)**
- Off-chain state updates between participants
- Only opening/closing transactions hit mainnet
- Ideal for frequent micro-transactions
- Limited to fixed participant sets

## The Impact on Users

### For Developers
- Lower deployment costs
- Faster iteration cycles
- Access to growing L2 ecosystems
- Grants and incentive programs

### For Users
- 10-100x lower transaction fees
- Near-instant confirmations
- Same security as Ethereum mainnet
- Seamless wallet integrations

## TVL Growth in Layer 2

As of early 2024, total value locked (TVL) in Layer 2 solutions exceeded $15 billion, with Arbitrum and Optimism leading the market. This represents a 300% growth from the previous year.

## Future Outlook

The Ethereum roadmap explicitly includes Layer 2 as a core component. With Proto-Danksharding (EIP-4844) implementation, L2 transaction costs are expected to drop by another 10-100x, making Ethereum accessible to billions of users.

## Conclusion

Layer 2 solutions are not just a temporary fix—they're the permanent scaling strategy for Ethereum. As these technologies mature, we're approaching a future where blockchain applications can compete with traditional web apps in terms of speed and cost while maintaining decentralization.`,
    category: "Blockchain",
    readTime: "10 min",
    date: "Jan 12, 2024",
    featured: false,
    color: "from-blue-500 to-cyan-500",
    views: "8.2K",
  },
  {
    id: "3",
    title: "AI Meets Blockchain: The Rise of Decentralized Machine Learning",
    excerpt: "How artificial intelligence and blockchain are converging to create new possibilities for decentralized computing.",
    content: `The convergence of Artificial Intelligence and blockchain technology represents one of the most exciting frontiers in tech. This fusion is creating entirely new categories of applications that were previously impossible.

## The Problem: Centralized AI

Current AI systems suffer from several centralized limitations:
- Data monopolies controlled by tech giants
- Black-box algorithms with no transparency
- Single points of failure
- Censorship and bias concerns

## Blockchain Solutions for AI

### 1. Decentralized Data Markets
Platforms like Ocean Protocol and SingularityNET enable:
- Data owners monetizing their information
- AI developers accessing diverse datasets
- Transparent data provenance tracking
- Privacy-preserving computation

### 2. Decentralized Model Training
Projects like Gensyn and Together are building:
- Distributed GPU networks
- Incentivized computation markets
- Federated learning on blockchain
- Reduced AI training costs by 80%+

### 3. Verifiable AI
Blockchain enables:
- Proof of model execution
- Transparent training data sourcing
- Auditable decision-making
- Trustless AI oracles

## Real-World Applications

### Healthcare
- Privacy-preserving medical AI
- Cross-border research collaboration
- Patient-owned health data

### Finance
- DeFi risk assessment models
- Automated trading strategies
- Fraud detection systems

### Supply Chain
- Predictive logistics optimization
- Automated quality control
- Transparent provenance tracking

## Investment Landscape

Venture capital is flowing into AI+Blockchain projects:
- $500M+ invested in 2023
- Major players: a16z, Paradigm, Polychain
- Focus areas: infrastructure, tooling, applications

## Challenges Ahead

### Technical
- On-chain computation costs
- Model size limitations
- Latency requirements

### Regulatory
- AI governance frameworks
- Data protection laws
- Cross-border compliance

## Conclusion

The intersection of AI and blockchain is still in its early stages, but the potential is enormous. As both technologies mature, we can expect to see decentralized AI systems that are more transparent, accessible, and equitable than their centralized counterparts.`,
    category: "AI",
    readTime: "12 min",
    date: "Jan 8, 2024",
    featured: false,
    color: "from-green-500 to-emerald-500",
    views: "15.3K",
  },
  {
    id: "4",
    title: "Crypto Trading Psychology: Mastering Your Mind for Market Success",
    excerpt: "Understanding the emotional and psychological aspects of cryptocurrency trading to make better decisions.",
    content: `Cryptocurrency markets are notorious for their volatility. While technical analysis and fundamental research are crucial, mastering trading psychology often separates successful traders from those who consistently lose money.

## The Unique Psychology of Crypto Markets

### 24/7 Market Stress
Unlike traditional markets, crypto never sleeps. This creates:
- Constant market monitoring anxiety
- Fear of missing out (FOMO) at all hours
- Sleep disruption and burnout
- Impulsive decision-making

### Extreme Volatility
Double-digit daily moves trigger intense emotions:
- Euphoria during bull runs
- Despair during corrections
- Revenge trading after losses
- Overconfidence after wins

## Common Psychological Traps

### 1. FOMO (Fear Of Missing Out)
**Symptoms:**
- Buying at local tops
- Chasing green candles
- Ignoring risk management
- Social media-driven decisions

**Solution:**
- Predefined entry strategies
- Patience and discipline
- Focus on process over profits

### 2. Loss Aversion
**The Psychology:**
- Losses feel 2x more painful than equivalent gains
- Holding losing positions too long
- Selling winners too early
- Avoiding necessary stop losses

**Solution:**
- Accept losses as business expenses
- Automated stop-loss orders
- Portfolio diversification

### 3. Confirmation Bias
**The Problem:**
- Seeking information that confirms existing beliefs
- Ignoring contradictory data
- Echo chamber participation
- Overconfidence in predictions

**Solution:**
- Actively seek opposing views
- Maintain a decision journal
- Regular strategy review

## Building Mental Resilience

### 1. Pre-Trade Planning
Before entering any position:
- Define entry and exit points
- Calculate position size
- Set stop-loss levels
- Document the rationale

### 2. Position Sizing
Never risk more than you can afford to lose:
- 1-2% risk per trade (professional standard)
- Portfolio heat monitoring
- Correlation awareness
- Dry powder preservation

### 3. Trading Journal
Document every trade:
- Entry/exit prices
- Emotional state
- Market conditions
- Lessons learned

## The Role of Community

Crypto communities can be both helpful and harmful:
- **Positive:** Education, support, idea sharing
- **Negative:** Pump schemes, panic spreading, echo chambers

Choose your information sources carefully.

## Long-Term Success Factors

### 1. Process Over Outcome
Focus on executing your strategy correctly rather than individual trade results.

### 2. Continuous Learning
Markets evolve. Stay updated with:
- Technical developments
- Regulatory changes
- Macroeconomic trends
- Trading psychology research

### 3. Physical Health
Trading performance correlates with:
- Sleep quality
- Exercise habits
- Nutrition
- Stress management

## Conclusion

Successful crypto trading is 80% psychology and 20% strategy. By mastering your emotions, implementing robust risk management, and maintaining disciplined execution, you position yourself for long-term success in these challenging markets.`,
    category: "Trading",
    readTime: "15 min",
    date: "Jan 5, 2024",
    featured: false,
    color: "from-orange-500 to-red-500",
    views: "22.1K",
  },
  {
    id: "5",
    title: "My Research Journey: From Academic Papers to Blockchain Innovation",
    excerpt: "Sharing my experience conducting blockchain research and publishing academic papers in the field.",
    content: `My journey into blockchain research began not in a computer science lab, but with a simple question: How can we make financial systems more accessible to everyone? This curiosity led me down a path of academic inquiry, countless hours of research, and eventually, published papers that I'm proud to share with the world.

## The Beginning

### First Encounter with Blockchain (2019)
I first encountered Bitcoin during my undergraduate studies. While many saw it as a speculative asset, I was fascinated by the underlying technology:
- Decentralized consensus mechanisms
- Cryptographic security guarantees
- Transparent yet pseudonymous transactions
- Programmable money through smart contracts

### Research Questions
The questions that drove my initial research:
1. How can blockchain improve financial inclusion in developing countries?
2. What are the scalability limitations of current systems?
3. How do consensus mechanisms impact energy consumption?
4. Can decentralized systems compete with traditional banking?

## My Published Research

### Paper 1: Blockchain Scalability Solutions
**Conference:** IEEE International Conference on Blockchain Technology
**Focus:** Comparative analysis of Layer 2 scaling solutions
**Key Findings:**
- Rollups can achieve 100x throughput improvements
- Trade-offs between security and speed
- User experience challenges in cross-chain bridges

### Paper 2: DeFi Risk Assessment Framework
**Conference:** ACM Conference on Decentralized Finance
**Focus:** Quantitative risk modeling for DeFi protocols
**Key Contributions:**
- Novel risk scoring methodology
- Historical analysis of major exploits
- Preventive measures for protocol developers

## Research Methodology

### Data Collection
- On-chain data analysis (The Graph, Dune Analytics)
- Smart contract code review
- Protocol documentation examination
- Community sentiment analysis

### Tools Used
- Python for data analysis (Pandas, NumPy)
- Ethereum nodes for raw data access
- Jupyter notebooks for visualization
- LaTeX for paper writing

### Validation Process
- Peer review by domain experts
- Reproduction of experimental results
- Community feedback integration
- Continuous refinement

## Challenges Faced

### Technical Challenges
- **Data Availability:** Accessing historical blockchain data at scale
- **Reproducibility:** Ensuring experiments can be replicated
- **Benchmarking:** Comparing protocols with different architectures
- **Tooling:** Limited academic-grade analysis tools

### Academic Challenges
- **Reviewer Education:** Explaining blockchain concepts to traditional CS reviewers
- **Publication Bias:** Overcoming skepticism about cryptocurrency research
- **Funding:** Securing grants for blockchain-related studies
- **Time to Publication:** Lengthy review cycles in emerging fields

## Impact and Recognition

### Citations
My papers have been cited in:
- Subsequent academic research
- Industry whitepapers
- Regulatory consultation documents
- Technical standards committees

### Practical Applications
Research findings have influenced:
- Protocol design decisions
- Security audit methodologies
- Regulatory framework development
- Educational curriculum design

## Current Research Focus

### Ongoing Projects
1. **Cross-chain interoperability security analysis**
2. **MEV (Maximum Extractable Value) impact on decentralization**
3. **Zero-knowledge proof applications in privacy-preserving systems**
4. **Decentralized identity verification mechanisms**

### Future Directions
- Integration of AI with blockchain systems
- Quantum-resistant cryptography preparation
- Sustainable consensus mechanism design
- DAO governance effectiveness studies

## Advice for Aspiring Researchers

### Getting Started
1. **Build a strong foundation:** Understand cryptography, distributed systems, and economics
2. **Stay hands-on:** Run nodes, deploy contracts, use protocols
3. **Engage with the community:** Twitter, Discord, forums
4. **Document everything:** Maintain detailed research logs

### Publishing Tips
1. **Start with preprints:** ArXiv, SSRN for early feedback
2. **Target appropriate venues:** Blockchain-specific conferences
3. **Collaborate:** Joint research with industry practitioners
4. **Be patient:** Review cycles are lengthy but worthwhile

## Conclusion

Blockchain research sits at the intersection of computer science, economics, and sociology. It's a field that rewards curiosity, persistence, and interdisciplinary thinking. Whether you're an academic, developer, or enthusiast, there's never been a better time to contribute to our collective understanding of this transformative technology.

My research journey continues, and I'm excited to share more findings with the community. If you're interested in collaboration or have questions about my work, don't hesitate to reach out.`,
    category: "Research",
    readTime: "18 min",
    date: "Dec 28, 2023",
    featured: false,
    color: "from-primary to-secondary",
    views: "9.7K",
  },
  {
    id: "6",
    title: "Building CryptoPedia Bangla: A Journey of Crypto Education",
    excerpt: "The story behind Bangladesh's largest crypto education channel and lessons learned along the way.",
    content: `In 2021, I started CryptoPedia Bangla with a simple mission: make cryptocurrency education accessible to Bangla speakers. What began as a passion project has grown into a community of over 26,000 subscribers. Here's the story of how it happened and what I've learned.

## The Beginning

### Why Crypto Education in Bangla?
Bangladesh has:
- 170+ million population
- Growing internet penetration
- Young, tech-savvy demographic
- Limited financial literacy resources in local language

Yet, most crypto content was in English, creating a significant barrier to entry.

### First Video (March 2021)
My first video: "What is Bitcoin? (বাংলায়)"
- Shot on a basic smartphone
- Uploaded with zero expectations
- 500 views in the first week
- Comments asking for more content

## Growth Journey

### Milestones
| Date | Milestone |
|------|-----------|
| Mar 2021 | Channel launched |
| Aug 2021 | 1,000 subscribers |
| Jan 2022 | 10,000 subscribers |
| Jun 2022 | 50,000+ views on single video |
| Dec 2023 | 26,000+ subscribers |
| 2024 | 1M+ total views |

### Content Evolution

**Phase 1: Basics (2021)**
- What is Bitcoin?
- How do cryptocurrencies work?
- Wallet setup tutorials
- Exchange registrations

**Phase 2: Intermediate (2022)**
- Technical analysis basics
- DeFi protocols explained
- NFT marketplace guides
- Security best practices

**Phase 3: Advanced (2023-2024)**
- Smart contract development
- Layer 2 solutions
- Institutional adoption analysis
- Regulatory landscape

## Content Strategy

### What Works
1. **Visual explanations:** Complex concepts with simple graphics
2. **Real examples:** Actual transactions and use cases
3. **News analysis:** Breaking crypto news in Bangla
4. **Q&A sessions:** Community-driven content
5. **Guest experts:** Interviews with industry professionals

### Production Process
1. **Research:** 2-3 hours per video
2. **Script writing:** Making technical concepts simple
3. **Recording:** Screen recording + voiceover
4. **Editing:** Graphics, animations, B-roll
5. **Thumbnail design:** Click-worthy but accurate
6. **Upload & promotion:** Optimal timing for Bangladesh audience

## Community Impact

### Success Stories
Received messages from viewers who:
- Started their crypto careers
- Avoided scams thanks to education
- Built successful trading strategies
- Secured jobs in blockchain companies

### Educational Partnerships
- Collaborated with local universities
- Conducted workshops in Dhaka
- Mentored aspiring content creators
- Consulting for crypto startups

## Challenges Faced

### Technical
- **Internet connectivity:** Bangladesh's inconsistent broadband
- **Power outages:** Uninterrupted recording challenges
- **Equipment limitations:** Started with basic gear
- **Software costs:** Professional editing tools

### Content Challenges
- **Regulatory uncertainty:** Navigating Bangladesh's crypto stance
- **Scam awareness:** Fighting misinformation
- **Language barriers:** Translating technical terms
- **Time constraints:** Balancing full-time job + content

### Personal Sacrifices
- Late nights editing videos
- Weekend research sessions
- Personal investment in equipment
- Continuous learning pressure

## Monetization Journey

### Revenue Streams
1. **YouTube AdSense:** Primary income source
2. **Sponsorships:** Selective crypto project partnerships
3. **Consulting:** Advisory for Bangladeshi crypto startups
4. **Affiliate marketing:** Exchange referrals (with disclosures)

### Philosophy
- **Transparency:** Always disclose sponsorships
- **Integrity:** Never promote scams or questionable projects
- **Value-first:** Content quality over quick monetization

## Lessons Learned

### For Content Creators
1. **Consistency beats perfection:** Regular uploads matter more than perfect videos
2. **Community engagement:** Reply to every comment early on
3. **Niche expertise:** Specialization attracts dedicated audience
4. **Adapt to platform:** YouTube algorithm changes require flexibility

### For Crypto Educators
1. **Emphasize risks:** Always discuss downsides and scams
2. **Update regularly:** Crypto evolves fast, content needs refresh
3. **Cultural relevance:** Local context improves understanding
4. **Build trust:** Accuracy and honesty create loyal following

## Future Plans

### Channel Expansion
- **Live streams:** Weekly market analysis
- **Course creation:** Structured crypto curriculum
- **Mobile app:** CryptoPedia Bangla app
- **Regional expansion:** Other South Asian languages

### Educational Initiatives
- **Crypto literacy program:** Partner with schools
- **Women in crypto:** Dedicated content series
- **Developer bootcamps:** Blockchain development training
- **Regulatory advocacy:** Work with policymakers

## Conclusion

Building CryptoPedia Bangla has been one of the most rewarding experiences of my life. The opportunity to educate thousands, help them avoid scams, and potentially change their financial futures is a responsibility I don't take lightly.

To everyone who's subscribed, commented, shared, or reached out—thank you. This journey is just beginning, and I'm excited to continue learning and growing together.

If you're considering starting your own educational channel, my advice is simple: Start today. You don't need perfect equipment or massive expertise. You just need passion, consistency, and a genuine desire to help others learn.`,
    category: "Crypto",
    readTime: "20 min",
    date: "Dec 20, 2023",
    featured: false,
    color: "from-yellow-500 to-orange-500",
    views: "18.9K",
  },
];

const categories = ["All", "Crypto", "Blockchain", "DeFi", "AI", "Trading", "Research"];

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Blog
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Insights on blockchain, crypto, AI, and the future of technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white/5 text-muted hover:bg-white/10 hover:text-foreground border border-border/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 lg:row-span-2"
              >
                <div
                  onClick={() => setSelectedPost(featuredPost)}
                  className="group relative h-full glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className={`h-64 lg:h-80 bg-gradient-to-br ${featuredPost.color} flex items-center justify-center`}>
                    <BookOpen className="w-20 h-20 text-white/50" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="accent">{featuredPost.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      {featuredPost.views && (
                        <span className="text-xs text-muted">• {featuredPost.views} views</span>
                      )}
                    </div>

                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-muted mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                      <span className="font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regular Posts */}
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  onClick={() => setSelectedPost(post)}
                  className="group h-full glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                    <BookOpen className="w-12 h-12 text-white/50" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted">{post.readTime}</span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">{post.date}</span>
                      <div className="flex items-center gap-1 text-primary text-sm">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Articles Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-12 h-12 text-muted mx-auto mb-4" />
            <p className="text-muted">No articles found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-primary hover:underline"
            >
              View all articles
            </button>
          </motion.div>
        )}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-border/50"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border/50 bg-background/95 backdrop-blur-sm">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back to Blog</span>
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const url = window.location.href;
                      navigator.clipboard.writeText(url);
                    }}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    title="Copy link"
                  >
                    <Link2 className="w-5 h-5 text-muted" />
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-muted" />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 lg:p-10">
                {/* Hero Image */}
                <div className={`h-48 lg:h-64 rounded-xl bg-gradient-to-br ${selectedPost.color} flex items-center justify-center mb-8`}>
                  <BookOpen className="w-16 h-16 text-white/50" />
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge variant="accent">{selectedPost.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </span>
                  {selectedPost.views && (
                    <span className="text-sm text-muted">• {selectedPost.views} views</span>
                  )}
                </div>

                {/* Title */}
                <h1 className="font-heading text-2xl lg:text-4xl font-bold text-foreground mb-6">
                  {selectedPost.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  {selectedPost.excerpt}
                </p>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="font-heading text-xl lg:text-2xl font-bold text-foreground mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="font-heading text-lg lg:text-xl font-semibold text-foreground mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-muted">
                          {paragraph.split('\n').map((item, i) => (
                            <li key={i} className="ml-4">{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.includes('|')) {
                      // Simple table rendering
                      const rows = paragraph.split('\n').filter(row => row.includes('|'));
                      if (rows.length > 0) {
                        return (
                          <div key={index} className="overflow-x-auto mb-6">
                            <table className="w-full text-sm text-left text-muted">
                              <tbody>
                                {rows.map((row, i) => (
                                  <tr key={i} className="border-b border-border/30">
                                    {row.split('|').filter(cell => cell.trim()).map((cell, j) => (
                                      <td key={j} className="py-2 px-4">{cell.trim()}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                    }
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <p key={index} className="font-semibold text-foreground mb-2">
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      );
                    }
                    return (
                      <p key={index} className="text-muted leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted mb-4">Share this article:</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${selectedPost.title}\n\n${selectedPost.excerpt}\n\n${typeof window !== 'undefined' ? window.location.href : ''}`);
                      }}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-8 p-6 rounded-xl bg-white/5 border border-border/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="font-bold text-white">AR</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">MD. Ashikur Rahaman</p>
                      <p className="text-sm text-muted">Blockchain Researcher & Crypto Educator</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
