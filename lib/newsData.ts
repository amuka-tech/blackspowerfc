export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
  author?: string;
  readTime?: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export const newsData: NewsItem[] = [
  {
    id: "warriors-secure-promotion",
    title: "Warriors Secure Promotion to Uganda Premier League",
    excerpt: "It's official! Blacks Power FC will play in the top tier next season after a hard-fought victory secured their place in the Uganda Premier League. The Lira-based club capped off a remarkable campaign to join the elite.",
    category: "Match Report",
    imageUrl: "/images/celebration.jpg",
    date: "Jun 06, 2026",
    author: "Club Reporter",
    readTime: "4 min read",
    content: [
      "In front of thousands of roaring fans, Blacks Power FC officially secured their promotion to the top tier of Ugandan football. The journey to the Uganda Premier League has been paved with resilience, strategic brilliance, and unmatched determination.",
      "The Black Warriors demonstrated exceptional tactical discipline throughout the campaign, turning Akiibua Stadium in Lira into an impenetrable fortress. With key victories against local rivals and crucial away points, the team finished at the pinnacle of the FUFA Big League table.",
      "Speaking after the final match, the club management expressed immense pride in the technical team, players, and dedicated supporters who stood by the club across every match day.",
      "Preparations are already underway for the 2026/2027 Uganda Premier League season, with stadium upgrades, squad reinforcements, and pre-season friendlies being finalized."
    ],
    quote: {
      text: "This promotion belongs to the entire city of Lira and all our supporters across Uganda. We came, we fought, and we conquered.",
      author: "Michael Lukyamuzi Skills, Head Coach"
    }
  },
  {
    id: "lukyamuzi-skills-extends-contract",
    title: "Lukyamuzi Skills Extends Contract",
    excerpt: "Head Coach Michael Lukyamuzi Skills has committed his future to Blacks Power FC, signing a new deal that will keep him at the club for the upcoming Uganda Premier League campaign. The tactician masterminded the club's FUFA Big League title run.",
    category: "Club News",
    imageUrl: "/images/presentation.jpg",
    date: "May 20, 2026",
    author: "Media Team",
    readTime: "3 min read",
    content: [
      "Blacks Power FC is delighted to announce that Head Coach Michael Lukyamuzi Skills has signed a two-year contract extension, cementing his leadership ahead of our debut campaign in the Uganda Premier League.",
      "Under his tutelage, the Warriors maintained the best defensive record in the division while executing high-intensity attacking football. His tactical acumen and player management were pivotal in guiding the squad to a 55-point title-winning finish.",
      "The board reaffirmed its total trust in Lukyamuzi's vision, promising full backing in the upcoming transfer window to strengthen key positions.",
      "Coach Lukyamuzi expressed his excitement about the journey ahead, stating that the target for next season is not merely survival, but competing courageously against the nation's football heavyweights."
    ],
    quote: {
      text: "Building something special here in Lira is a dream come true. We have built a winning culture, and we are ready for the Premier League.",
      author: "Michael Lukyamuzi Skills"
    }
  },
  {
    id: "crowned-fufa-big-league-champions",
    title: "Blacks Power FC Crowned FUFA Big League 2025/26 Champions",
    excerpt: "Blacks Power FC are champions! The Black Warriors finished the 2025/26 FUFA Big League season on top with 55 points, clinching the title on the final day with a 0-0 draw against Onduparaka FC at the Onduparaka Grounds.",
    category: "Club News",
    imageUrl: "/images/celebration.jpg",
    date: "Jun 06, 2026",
    author: "Sports Desk",
    readTime: "5 min read",
    content: [
      "Tears of joy, golden medals, and confetti filled the air as Blacks Power FC lifted the coveted FUFA Big League trophy. It was a golden afternoon that marked the climax of 30 grueling match days.",
      "Amassing 55 points with 18 wins and crucial draws, Blacks Power FC held off fierce competition from Ntugasaze FC, Kataka FC, and Kigezi HomeBoyz to claim the championship trophy.",
      "Captain Martin Ssenkoto Kalanda held the trophy high amidst cheer from traveling fans who made the trip to witness history. Awards were also presented to the technical staff for outstanding leadership throughout the season.",
      "The club will host an official trophy parade in Lira City starting from the club headquarters through the main streets, culminating in a celebration rally at Akiibua Stadium."
    ],
    quote: {
      text: "Every sweat, every tackle, and every sprint brought us to this moment. We are proud to bring the trophy home to Lira!",
      author: "Martin Ssenkoto Kalanda, Team Captain"
    }
  },
  {
    id: "demolition-of-mbale-heroes",
    title: "4-0 Demolition of Mbale Heroes Sends Title Message",
    excerpt: "Blacks Power FC recorded their biggest win of the season with a commanding 4-0 thrashing of Mbale Heroes in Match Day 29. The result all but confirmed the title as the Warriors showed their dominance heading into the final game.",
    category: "Match Report",
    imageUrl: "/images/lineup.jpg",
    date: "May 24, 2026",
    author: "Matchday Desk",
    readTime: "3 min read",
    content: [
      "Blacks Power FC put on a masterclass performance on Match Day 29, tearing apart Mbale Heroes in a breathtaking 4-0 victory before a packed home crowd.",
      "Innocent Maduka opened the scoring in the 14th minute with a bullet header, before Baker Buyala doubled the lead right on the stroke of half-time following a fluid team counter-attack.",
      "The second half continued in the same vein of dominance, with Nathan Oloro slotting home from close range and Collins Alinaitwe capping off the night with a spectacular 25-yard strike into the top corner.",
      "The resounding victory left the Warriors needing just a single point on the final day to guarantee the FUFA Big League crown, a task they successfully accomplished."
    ]
  },
  {
    id: "akiibua-stadium-renovations",
    title: "Akiibua Stadium Renovations Underway",
    excerpt: "As part of the AFCON 2027 preparations, Blacks Power FC's home ground — Akiibua Stadium in Lira — is receiving a major facelift. The renovations are expected to be completed before the start of the Uganda Premier League season.",
    category: "Stadium",
    imageUrl: "https://placehold.co/600x400/D21022/FFFFFF?text=Stadium+Upgrade",
    date: "May 25, 2026",
    author: "Club Infrastructure",
    readTime: "3 min read",
    content: [
      "Major civil engineering work is currently underway at Akiibua Stadium in Lira as part of the broader national infrastructure preparation for AFCON 2027 and the upcoming Uganda Premier League season.",
      "The renovation project encompasses a complete relaying of the natural grass playing pitch, installation of modern floodlights for evening fixtures, expansion of spectator stands, and upgrading player dressing rooms to international CAF standards.",
      "The club executive expressed gratitude to the government and FUFA for prioritizing Akiibua Stadium, which will serve as an elite sports hub for Northern Uganda.",
      "Works are scheduled for completion ahead of the Premier League kickoff in August 2026, ensuring fans enjoy world-class facilities and matchday experience."
    ]
  },
  {
    id: "season-review-road-to-title",
    title: "Season Review: The Road to the FUFA Big League Title",
    excerpt: "From a hard-fought opening day 2-0 win over Onduparaka FC to the title-clinching draw on the final day, we look back at Blacks Power FC's incredible 30-match journey to the 2025/26 FUFA Big League championship.",
    category: "Feature",
    imageUrl: "/images/lineup.jpg",
    date: "Jun 10, 2026",
    author: "Editorial Team",
    readTime: "6 min read",
    content: [
      "30 matches, 55 points, 18 victories, and endless unforgettable memories — the 2025/2026 FUFA Big League campaign will forever be etched in the history of Blacks Power FC.",
      "The campaign kicked off in September 2025 with a statement 2-0 win over Onduparaka FC at home. From the early stages, the squad exhibited unmatched unity and tactical discipline under Coach Michael Lukyamuzi Skills.",
      "Key victories against Soltilo Bright Stars (3-1), Wakiso Giants (2-1), and the decisive 4-0 triumph against Mbale Heroes highlighted a season filled with grit and attacking flair.",
      "With promotion and the championship trophy secured, Blacks Power FC steps into the top tier with confidence, ready to write the next chapter of greatness in Ugandan football."
    ]
  }
];
