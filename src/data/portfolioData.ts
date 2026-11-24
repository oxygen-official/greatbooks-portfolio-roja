export interface StudentProfile {
  fullName: string;
  course: string;
  yearAndSection: string;
  institution: string;
  department: string;
  courseTitle: string;
  photoDataUrl: string | null;
  personalIntro: string;
  readingInterests: string;
  greatBooksStatement: string;
}

export interface LiteraryWork {
  id: string;
  romanIndex: string;
  numericIndex: string;
  title: string;
  syllabusLabel: string;
  author: string;
  tradition: string;
  era: string;
  approximateDate: string;
  literaryLens: string;
  lensCategory: 'Mythological & Archetypal' | 'Moral & Philosophical' | 'Historical & Cultural' | 'Formalist & Structural' | 'Aesthetic & Feminist';
  epigraph: string;
  epigraphSource: string;
  figureCaption: string;
  overview: string;
  analysisSections: {
    heading: string;
    body: string;
  }[];
  keyThemes: string[];
  realLifeConnection: string;
  favoriteStudy: {
    reasonsForChoosing: string;
    themesCharactersLessons: string;
    personalRealizations: string;
  };
}

export interface LearningPillar {
  index: string;
  title: string;
  summary: string;
  evidenceWorks: string;
}

export interface ReflectionEntry {
  number: string;
  question: string;
  answer: string[];
}

export const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  fullName: 'Mark Roja',
  course: 'Bachelor of Science in Mechanical Engineering',
  yearAndSection: '2nd Year',
  institution: 'University of Nueva Caceres',
  department: 'School of Social and Natural Sciences',
  courseTitle: 'Great Books (World Literature)',
  photoDataUrl: '/assets/aistudio/image_e9e2bc8f.png',
  personalIntro:
    'I am Mark Roja, a Bachelor of Science in Mechanical Engineering student at the University of Nueva Caceres. While engineering trains me to analyze physical systems, forces, and structural precision, studying Great Books revealed that human choices, ethics, and cultural memory follow equally intricate dynamics.',
  readingInterests:
    'Outside technical coursework, I gravitate toward foundational epics, strategic fables, and historical narratives that test how individuals respond under pressure. Exploring voices from Ancient Near Eastern wisdom poetry and Indian dharmic epics to Homeric voyages and Heian court prose has broadened my appreciation for timeless storytelling.',
  greatBooksStatement:
    'Entering Great Books, I expected to memorize plots and historical dates. Instead, the course taught me to apply critical literary lenses, evaluate human motives with nuance, and bridge technical discipline with ethical reflection and empathy.',
};

export const SEVEN_LITERARY_WORKS: LiteraryWork[] = [
  {
    id: 'job-38',
    romanIndex: 'I',
    numericIndex: '01',
    title: 'Voice Out of the Whirlwind (Job 38)',
    syllabusLabel: 'Voice Out of the Whirlwind (Job 38)',
    author: 'Anonymous (Hebrew Wisdom Tradition)',
    tradition: 'Ancient Near East',
    era: 'Biblical Wisdom Poetry',
    approximateDate: 'c. 6th–4th Century BCE',
    literaryLens: 'Archetypal & Mythological Criticism',
    lensCategory: 'Mythological & Archetypal',
    epigraph:
      'Where were you when I laid the earth’s foundation? Tell me, if you understand.',
    epigraphSource: 'Book of Job 38:4',
    figureCaption: 'Plate I — Cosmological geometry of the whirlwind, sea-gates, and Pleiades.',
    overview:
      'Chapter 38 marks the decisive turning point in the Book of Job. After thirty-seven chapters of human debate over why the righteous suffer, God finally breaks silence—speaking not in gentle consolation, nor in courtroom legalism, but out of a tempest, confronting Job with a sweeping panoramic interrogation of cosmic creation.',
    analysisSections: [
      {
        heading: 'Thesis & Literary Context',
        body: 'In Job 38, the text shifts the problem of suffering from an anthropocentric courtroom to a vast cosmological canvas. Rather than answering Job’s demand for a moral ledger explaining his pain, the Voice Out of the Whirlwind reframes human limitation through sublime poetic scale, revealing that divine order encompasses forces far beyond transactional human justice.',
      },
      {
        heading: 'Application of the Archetypal Lens',
        body: 'Through an Archetypal and Mythological lens, the whirlwind functions as a primordial threshold symbol—echoing ancient Near Eastern storm-theophanies where chaos and order collide. The imagery of measuring lines, cornerstones, locked sea-doors, and bound constellations (the Pleiades and Orion) invokes the archetype of the Cosmic Architect who continually restrains primordial chaos (Leviathan and the deep) without erasing mystery.',
      },
      {
        heading: 'Poetic Structure & Rhetorical Force',
        body: 'Built on Hebrew synonymous and antithetical parallelism, the seventy-plus rhetorical questions overwhelm linear logic. Each strophe descends from architecture to oceanography, dawn, snow storehouses, and wild creatures—moving systematically from the macrocosm to ecosystems entirely unconcerned with human utility, such as rain falling on uninhabited deserts.',
      },
    ],
    keyThemes: ['Sublime Humility', 'Limits of Human Reason', 'Cosmos vs. Chaos', 'Theodicy & Mystery'],
    realLifeConnection:
      'Job 38 resonates deeply when facing unearned hardship or uncertainty in modern life: it reminds us that dignity does not require possessing every answer, and that intellectual honesty begins when we acknowledge the vastness of what lies beyond our control.',
    favoriteStudy: {
      reasonsForChoosing:
        'Job 38 stands out for its breathtaking poetic sublimity and intellectual courage—refusing easy platitudes about suffering.',
      themesCharactersLessons:
        'The Voice in the Whirlwind teaches awe, epistemic humility, and resilience amid unanswered questions.',
      personalRealizations:
        'I realized that genuine wisdom often begins where rigid certainty ends, allowing room for wonder even in difficult seasons.',
    },
  },
  {
    id: 'panchatantra',
    romanIndex: 'II',
    numericIndex: '02',
    title: 'The Panchatantra',
    syllabusLabel: 'The Panchatantra',
    author: 'Vishnu Sharma (attributed)',
    tradition: 'Classical India',
    era: 'Sanskrit Didactic Fable',
    approximateDate: 'c. 3rd Century BCE – 3rd Century CE',
    literaryLens: 'Formalist & Structuralist Criticism',
    lensCategory: 'Formalist & Structural',
    epigraph:
      'Knowledge that remains in books and wealth that lies in another’s hands are both useless when the hour of need arrives.',
    epigraphSource: 'The Panchatantra, Book I',
    figureCaption: 'Plate II — Five-fold nested frame narrative of Niti (practical wisdom) and beast fable.',
    overview:
      'Composed as a pedagogical manual for three unmotivated royal princes, The Panchatantra ("Five Treatises") weaves anthropomorphic animal fables into an intricate frame-narrative architecture. Across its five books—Loss of Friends, Winning of Friends, Crows and Owls, Loss of Gains, and Ill-Considered Action—it teaches statecraft, discernment, and practical worldly wisdom (Niti).',
    analysisSections: [
      {
        heading: 'Thesis & Narrative Architecture',
        body: 'The genius of The Panchatantra lies in its Chinese-box framing structure, where one character’s cautionary proverb triggers an embedded tale that in turn branches into another. Rather than preaching abstract commandments, the form trains the reader’s judgment by simulating cause, deception, alliance, and consequence.',
      },
      {
        heading: 'Application of the Structuralist & Formalist Lens',
        body: 'Examined formally, every book operates as a binary dialectic of strategy and folly. The prose carries forward rapid action while epigrammatic verse stanzas pause the story to crystallize moral principles. Animal archetypes—such as the cunning jackal Damanaka, the trusting bull Sanjivaka, or the cautious crow—act as modular narrative tokens whose predictable traits expose human political psychology.',
      },
      {
        heading: 'Pragmatism Over Naive Idealism',
        body: 'Unlike simplistic children’s fables, The Panchatantra refuses naive sentimentality. It demonstrates that goodness without discernment invites exploitation, and that true friendship requires both loyalty and situational awareness.',
      },
    ],
    keyThemes: ['Niti (Prudent Conduct)', 'Nested Frame Structure', 'Discernment in Alliances', 'Consequence of Rashness'],
    realLifeConnection:
      'Its lessons on evaluating counsel, avoiding impulsive decisions, and distinguishing genuine allies from opportunistic flatterers remain directly relevant to teamwork, leadership, and digital-age media literacy.',
    favoriteStudy: {
      reasonsForChoosing:
        'Its interlocking story-within-a-story design turns ethics and critical thinking into unforgettable narrative puzzles.',
      themesCharactersLessons:
        'Characters like Karataka and Damanaka illustrate how persuasive rhetoric can mask self-interest.',
      personalRealizations:
        'It sharpened my habit of questioning motives behind persuasive speech before acting on incomplete information.',
    },
  },
  {
    id: 'mahabharata',
    romanIndex: 'III',
    numericIndex: '03',
    title: 'The Mahabharata',
    syllabusLabel: 'The Mahabharata',
    author: 'Vyasa (Krishna-Dwaipayana)',
    tradition: 'Classical India',
    era: 'Sanskrit Itihasa Epic',
    approximateDate: 'c. 400 BCE – 400 CE',
    literaryLens: 'Moral-Philosophical & Dharma Lens',
    lensCategory: 'Moral & Philosophical',
    epigraph:
      'Do your duty without attachment to the fruits of action; equanimity in success and failure is true yoga.',
    epigraphSource: 'Bhagavad Gita 2.47–48 (within The Mahabharata)',
    figureCaption: 'Plate III — Eighteen-spoked wheel of Kurukshetra, charioteer Krishna, and the dice of fate.',
    overview:
      'As one of the longest epics in world literature, The Mahabharata chronicles the generational dynastic conflict between the five Pandava brothers and their hundred Kaurava cousins, culminating in the catastrophic eighteen-day Battle of Kurukshetra. At its moral heart stands the Bhagavad Gita, where Krishna counsels the paralyzed warrior Arjuna on duty, detachment, and cosmic order.',
    analysisSections: [
      {
        heading: 'Thesis & Ethical Complexity',
        body: 'The Mahabharata rejects simplistic hero-versus-villain binaries, asserting instead that human morality unfolds within tangled webs of conflicting obligations. Even the noblest figures—Yudhishthira, Bhishma, Karna, and Draupadi—commit tragic compromises, proving that adherence to Dharma requires agonizing moral discernment rather than mechanical rule-following.',
      },
      {
        heading: 'Application of the Moral-Philosophical Lens',
        body: 'Viewed through a Moral-Philosophical lens, the epic stages an exhaustive inquiry into Dharma (righteous duty), Karma (moral causality), and Nishkama Karma (selfless action). Arjuna’s crisis on the battlefield represents the universal human paralysis when every available choice carries sorrow. Krishna’s counsel resolves this crisis by separating moral duty from egoistic attachment to outcomes.',
      },
      {
        heading: 'Tragic Humanity of Draupadi and Karna',
        body: 'Draupadi’s courtroom challenge during the dice game exposes the hypocrisy of elders who hide behind technicalities while permitting injustice, while Karna’s torn loyalties embody the tragedy of noble potential trapped by birth and obligation.',
      },
    ],
    keyThemes: ['Conflict of Dharma', 'Detached Action', 'Cost of Pride & Vengeance', 'Moral Ambiguity of War'],
    realLifeConnection:
      'In academic and civic life, The Mahabharata reminds us that silence in the face of unfairness is itself a moral choice, and that integrity means performing our responsibilities faithfully without obsessing over applause or outcomes.',
    favoriteStudy: {
      reasonsForChoosing:
        'Few texts capture the psychological weight of conflicting loyalties with such philosophical grandeur.',
      themesCharactersLessons:
        'Arjuna, Draupadi, and Karna show how honor, compassion, and social prejudice collide in human affairs.',
      personalRealizations:
        'It taught me to focus on ethical effort and principle rather than letting anxiety over results paralyze good action.',
    },
  },
  {
    id: 'iliad',
    romanIndex: 'IV',
    numericIndex: '04',
    title: 'The Iliad',
    syllabusLabel: 'The Illiad by Homer',
    author: 'Homer',
    tradition: 'Archaic Greece',
    era: 'Homeric Oral Epic',
    approximateDate: 'c. 8th Century BCE',
    literaryLens: 'Historical-Cultural & Heroic Code Lens',
    lensCategory: 'Historical & Cultural',
    epigraph:
      'Sing, O goddess, the anger of Achilles son of Peleus, that brought countless ills upon the Achaeans.',
    epigraphSource: 'The Iliad, Book I, lines 1–2',
    figureCaption: 'Plate IV — Concentric rings of the Shield of Achilles: war, harvest, law, and Oceanus.',
    overview:
      'Rather than recounting the entire ten-year Trojan War, The Iliad concentrates on fifty-one days in its ninth year—beginning with Achilles’ devastating quarrel with Agamemnon over honor (timē) and culminating in the death of Hector and Achilles’ nocturnal reconciliation with King Priam.',
    analysisSections: [
      {
        heading: 'Thesis & Critique of Heroic Wrath',
        body: 'While celebrating martial valor, The Iliad simultaneously delivers a piercing critique of heroic pride. Achilles’ wrath (mēnis) isolates him from his comrades, destroys Patroclus, and pushes him toward monstrous dehumanization—until shared grief with Priam restores his humanity.',
      },
      {
        heading: 'Application of the Historical-Cultural Lens',
        body: 'Through a Historical-Cultural lens, the poem reveals an Archaic Greek shame-and-honor society governed by kleos (undying glory won in battle) and timē (tangible public status). Agamemnon’s seizure of Briseis is not merely petty theft; it strips Achilles of social validation in a warrior economy where honor outweighs survival. Yet Homer juxtaposes this harsh code against domestic tenderness—Hector’s farewell to Andromache and Astyanax—forcing audiences to feel the human price of glory.',
      },
      {
        heading: 'The Shield of Achilles as Moral Microcosm',
        body: 'In Book 18, Hephaestus forges a shield depicting two cities—one at peace with weddings and courts, one besieged by war—alongside harvests, dances, and the encircling Ocean. This ekphrasis frames the Trojan battlefield inside the larger beauty and fragility of ordinary human civilization.',
      },
    ],
    keyThemes: ['Wrath & Reconciliation', 'Kleos vs. Domestic Peace', 'Mortality of Heroes', 'Empathy Across Enmity'],
    realLifeConnection:
      'Achilles’ arc demonstrates how unchecked pride and resentment poison entire communities, while his tearful meeting with Priam proves that compassion can cross even the bitterest divisions.',
    favoriteStudy: {
      reasonsForChoosing:
        'Its refusal to glorify war without mourning its casualties makes it astonishingly humane.',
      themesCharactersLessons:
        'Hector’s civic devotion and Priam’s courage balance Achilles’ fierce intensity.',
      personalRealizations:
        'Recognizing our shared vulnerability is what breaks cycles of anger and restores genuine community.',
    },
  },
  {
    id: 'odyssey',
    romanIndex: 'V',
    numericIndex: '05',
    title: 'The Odyssey',
    syllabusLabel: 'The Odyssey by Homer',
    author: 'Homer',
    tradition: 'Archaic Greece',
    era: 'Homeric Nostos Epic',
    approximateDate: 'c. 8th Century BCE',
    literaryLens: 'Archetypal Hero’s Journey & Psychological Lens',
    lensCategory: 'Mythological & Archetypal',
    epigraph:
      'Tell me, O Muse, of the man of many turns, who wandered far and wide after he sacked the sacred citadel of Troy.',
    epigraphSource: 'The Odyssey, Book I, lines 1–2',
    figureCaption: 'Plate V — Navigation across the wine-dark Aegean: Sirens, Phaeacia, and the olive-tree bed.',
    overview:
      'Following the fall of Troy, The Odyssey traces Odysseus’s ten-year voyage home (nostos) to Ithaca alongside Telemachus’s coming-of-age and Penelope’s resourceful endurance against greedy suitors. Unlike Achilles’ brute strength, Odysseus survives through mētis—cunning intelligence, adaptability, and patience.',
    analysisSections: [
      {
        heading: 'Thesis & The Intelligence of Homecoming',
        body: 'The Odyssey redefines heroism from glorious death on the battlefield to resourceful survival, self-restraint, and fidelity to home. Through Odysseus’s encounters with monsters, immortals, and the dead, Homer explores how identity is tested by temptation, amnesia, and time.',
      },
      {
        heading: 'Application of the Archetypal & Psychological Lens',
        body: 'Seen through an Archetypal Hero’s Journey lens, every obstacle along Odysseus’s sea voyage externalizes a psychological temptation. The Lotus-Eaters symbolize escapist oblivion; Polyphemus punishes boastful hubris; the Sirens embody the paralyzing allure of living purely in past glory; and Calypso offers ageless immortality at the cost of human purpose and memory. Only by descending into the Underworld (Nekyia) and confronting mortality does Odysseus earn his return.',
      },
      {
        heading: 'Penelope’s Equal Craft (Mētis)',
        body: 'Far from a passive waiting wife, Penelope mirrors Odysseus’s intellect. Her weaving and unweaving of Laertes’ shroud and her final test of the immovable olive-tree marriage bed establish that true homecoming requires mutual recognition between equals.',
      },
    ],
    keyThemes: ['Nostos (Homecoming)', 'Mētis (Resourceful Mind)', 'Xenia (Sacred Hospitality)', 'Memory vs. Oblivion'],
    realLifeConnection:
      'Every student and adult journeys through unfamiliar setbacks and distractions; The Odyssey teaches that perseverance is sustained not by brute force, but by clarity about where—and who—we truly belong to.',
    favoriteStudy: {
      reasonsForChoosing:
        'I chose The Odyssey as my favorite masterpiece because it blends thrilling adventure with profound psychological truth: heroism is measured not by how dramatically one dies, but by how wisely and faithfully one endures to return home.',
      themesCharactersLessons:
        'Key themes include nostos (homecoming), mētis (crafty intelligence), and xenia (hospitality). Odysseus’s hard-won humility—learning to suppress pride after shouting his name to Polyphemus—and Penelope’s patient, brilliant resilience through the weaving of the shroud and the olive-tree bed test shaped my deepest appreciation for the text.',
      personalRealizations:
        'Reading The Odyssey helped me realize that setbacks and detours are rarely wasted time; like Odysseus’s wanderings, our detours forge the patience, discernment, and humility required to appreciate the people and purposes waiting for us.',
    },
  },
  {
    id: 'song-of-roland',
    romanIndex: 'VI',
    numericIndex: '06',
    title: 'The Song of Roland',
    syllabusLabel: 'The Song of Roland',
    author: 'Anonymous (Turoldus, attributed)',
    tradition: 'Medieval France',
    era: 'Chanson de Geste',
    approximateDate: 'c. 11th Century CE',
    literaryLens: 'Historical-Cultural & Feudal Chivalry Lens',
    lensCategory: 'Historical & Cultural',
    epigraph:
      'Roland is brave and Oliver is wise; both have marvelous courage.',
    epigraphSource: 'The Song of Roland, Laisse 87',
    figureCaption: 'Plate VI — The Oliphant horn at the narrow defile of Roncevaux Pass.',
    overview:
      'Rooted in the 778 CE Battle of Roncevaux Pass, The Song of Roland is the oldest surviving masterpiece of Old French epic poetry. It portrays Charlemagne’s rearguard, betrayed by Roland’s stepfather Ganelon and ambushed in the Pyrenees, centering on Roland’s fateful refusal to sound the Oliphant horn until destruction is inevitable.',
    analysisSections: [
      {
        heading: 'Thesis & The Tragic Flaw of Feudal Pride',
        body: 'The Song of Roland captures the tension between feudal loyalty and personal pride. While celebrated as a Christian martyr-hero, Roland’s refusal to heed Oliver’s counsel—choosing spectacle over prudence—transforms a tactical ambush into a devastating tragedy for twenty thousand comrades.',
      },
      {
        heading: 'Application of the Historical-Cultural Lens',
        body: 'Analyzed historically and culturally, the poem illuminates eleventh-century feudal values: sacred vassalage, the blood-bond between lord and knight, and the Crusading worldview that divided Christendom and its adversaries into stark binary camps. Within its rhythmic ten-syllable laisses, the contrast between Roland (fortitudo—fierce bravery) and Oliver (sapientia—reasoned foresight) reflects an ongoing medieval debate over ideal leadership.',
      },
      {
        heading: 'The Oliphant as Moral Reckoning',
        body: 'Sounding the horn only when mortally wounded—splitting his own temples in the effort—becomes Roland’s delayed confession. His death beneath the pine trees, offering his right-hand glove to Heaven as a vassal to his sovereign, reveals how deeply feudal ritual shaped medieval spirituality.',
      },
    ],
    keyThemes: ['Bravery vs. Wisdom', 'Feudal Loyalty & Betrayal', 'Pride (Desmesure)', 'Sacrifice & Martyrdom'],
    realLifeConnection:
      'Roland and Oliver’s debate remains timeless in leadership and group collaboration: refusing to ask for help out of ego jeopardizes the very people entrusted to our care.',
    favoriteStudy: {
      reasonsForChoosing:
        'The tragic contrast between Roland’s courage and Oliver’s wisdom creates gripping moral tension.',
      themesCharactersLessons:
        'Oliver’s loyalty to his friend even after disagreeing with his fatal pride leaves an enduring mark.',
      personalRealizations:
        'True courage includes knowing when to swallow pride and summon support before a crisis becomes irreversible.',
    },
  },
  {
    id: 'tale-of-genji',
    romanIndex: 'VII',
    numericIndex: '07',
    title: 'The Tale of Genji',
    syllabusLabel: 'The Tale of Genji',
    author: 'Murasaki Shikibu',
    tradition: 'Heian Japan',
    era: 'Courtly Monogatari Novel',
    approximateDate: 'c. 1008 CE',
    literaryLens: 'Aesthetic (Mono no Aware) & Feminist Lens',
    lensCategory: 'Aesthetic & Feminist',
    epigraph:
      'Things that fall away like dew on the morning grass leave behind a beauty sharper for its vanishing.',
    epigraphSource: 'Thematic Synthesis of Heian Mono no Aware',
    figureCaption: 'Plate VII — Heian court screen, calligraphy scroll, and drifting cherry blossoms.',
    overview:
      'Written by court lady Murasaki Shikibu at the height of Japan’s Heian period, The Tale of Genji is widely recognized as the world’s first great psychological novel. Following the radiant prince Hikaru Genji and his descendants through courtly romance, political exile, grief, and spiritual reckoning, the work turns inward to trace the subtle weather of the human heart.',
    analysisSections: [
      {
        heading: 'Thesis & Interiority as Epic',
        body: 'Unlike Western and Indian epics defined by war and external conquest, The Tale of Genji locates human grandeur in emotional sensitivity, aesthetic discernment, and memory. Murasaki Shikibu demonstrates that fleeting gestures—a poem folded around a blossom, a koto chord in autumn wind—carry profound moral and psychological weight.',
      },
      {
        heading: 'Application of Aesthetic & Feminist Lenses',
        body: 'Through the Japanese aesthetic lens of mono no aware (the gentle pathos of impermanence), love and beauty in Genji are inseparable from transience and loss. Simultaneously, a Feminist reading uncovers the quiet vulnerability of Heian noblewomen—Fujitsubo, Lady Rokujo, Murasaki, and Ukifune—confined behind silk screens yet possessing fierce interior agency, artistic brilliance, and tragic awareness of patriarchal constraints.',
      },
      {
        heading: 'From Radiance to Renunciation',
        body: 'As Genji ages, youthful charm gives way to melancholy and Buddhist detachment. The later Uji chapters strip away courtly illusion altogether, concluding on a note of quiet restraint that refuses neat romantic closure.',
      },
    ],
    keyThemes: ['Mono no Aware (Impermanence)', 'Psychological Interiority', 'Women Behind the Screens', 'Art as Emotional Bridge'],
    realLifeConnection:
      'In a fast-paced digital culture obsessed with permanence and spectacle, Genji invites us to practice attentiveness, empathy for unspoken feelings, and grace toward life’s changing seasons.',
    favoriteStudy: {
      reasonsForChoosing:
        'Murasaki Shikibu’s psychological nuance and poetic sensitivity make thousand-year-old emotions feel astonishingly modern.',
      themesCharactersLessons:
        'Lady Murasaki and Ukifune highlight quiet endurance, emotional depth, and the search for inner peace.',
      personalRealizations:
        'Paying attention to subtle human feelings—and accepting change with grace—deepens empathy in everyday relationships.',
    },
  },
];

export const LEARNING_PILLARS: LearningPillar[] = [
  {
    index: '01',
    title: 'Cross-Cultural & Historical Literacy',
    summary:
      'Tracing literature across the Ancient Near East, Classical India, Archaic Greece, Medieval Europe, and Heian Japan revealed how distinct societies wrestle with universal questions—suffering, governance, honor, love, and mortality—using radically different genres, from Hebrew wisdom poetry and Sanskrit frame fables to courtly psychological prose.',
    evidenceWorks: 'Job 38 · Panchatantra · Mahabharata · Iliad · Odyssey · Song of Roland · Tale of Genji',
  },
  {
    index: '02',
    title: 'Mastery of Critical Literary Lenses',
    summary:
      'Rather than reading purely for plot summary, I learned to deliberately shift analytical perspectives—applying Archetypal, Formalist-Structuralist, Moral-Philosophical, Historical-Cultural, and Aesthetic/Feminist lenses. Each lens illuminates hidden architecture, ideological assumptions, and emotional subtext within the same narrative.',
    evidenceWorks: '5 Core Analytical Frameworks Applied Across 7 Masterpieces',
  },
  {
    index: '03',
    title: 'Literature as Mirror of Human Experience',
    summary:
      'These seven masterpieces proved that great books survive not because their worlds are simple, but because their characters remain painfully human: Job’s anguish, Arjuna’s hesitation, Achilles’ grief, Penelope’s patience, Roland’s fatal pride, and Genji’s awareness of fleeting time mirror real human vulnerability across centuries.',
    evidenceWorks: '',
  },
  {
    index: '04',
    title: 'Critical Thinking, Close Reading & Academic Writing',
    summary:
      'Synthesizing dense epics into structured, evidence-based essays strengthened my ability to isolate central theses, verify textual details, evaluate competing ethical claims, and articulate nuanced interpretations clearly—skills that transfer directly into research, technical communication, and civic reasoning.',
    evidenceWorks: '',
  },
];

export const PERSONAL_REFLECTIONS: ReflectionEntry[] = [
  {
    number: '01',
    question: 'How has your understanding and appreciation of literature changed throughout the course?',
    answer: [
      'Before taking Great Books, I largely viewed classic literature as an intimidating archive of archaic language and distant legends meant only for memorization. Throughout this course, my perspective shifted from passive reading to active dialogue.',
      'I now see each masterpiece as an enduring conversation across civilizations—one where ancient poets and thinkers wrestled with the exact anxieties we still confront today: unfairness, leadership under pressure, grief, loyalty, and the fleeting nature of time. Appreciating literature now means noticing not just what happened in a story, but why its author shaped every metaphor, structure, and moral dilemma the way they did.',
    ],
  },
  {
    number: '02',
    question: 'What challenges did you encounter when reading and analyzing literary masterpieces, and how did you overcome them?',
    answer: [
      'The greatest challenge was navigating unfamiliar cultural frameworks, vast character genealogies, and translated poetic styles—especially in monumental epics like The Mahabharata, Homeric verse, and the subtle courtly etiquette of Heian Japan in The Tale of Genji.',
      'I overcame this by slowing down my reading pace, mapping character relationships and historical contexts before diving into close passages, and breaking dense works into focused thematic questions. Pairing primary excerpts with structured literary lenses gave me a clear compass whenever a text felt overwhelming.',
    ],
  },
  {
    number: '03',
    question: 'Which literary lens or approach influenced your interpretation of literature the most? Why?',
    answer: [
      'The Archetypal and Moral-Philosophical lenses influenced my reading most profoundly. Watching how recurring human patterns—the threshold storm in Job 38, the journey home in The Odyssey, and the crisis of duty in The Mahabharata—reappear across unconnected civilizations convinced me that literature speaks a shared symbolic language.',
      'More importantly, these lenses trained me to suspend quick judgment and ask deeper questions about why characters act as they do when duty, pride, and survival collide.',
    ],
  },
  {
    number: '04',
    question: 'What important realizations about life, society, culture, or human nature have you gained?',
    answer: [
      'Across all seven stories, one realization stands above the rest: human beings rarely fail from lack of intelligence alone—more often, we stumble through unchecked pride (desmesure in Roland, wrath in Achilles), misplaced certainty (Job’s friends), or short-sighted opportunism (the fools of The Panchatantra).',
      'At the same time, every culture preserves a counterweight to that flaw: humility before mystery, wise counsel, sacred hospitality, compassion across enmity, and attentiveness to quiet beauty. Great literature reminds us that empathy and self-awareness are never automatic; they must be practiced deliberately.',
    ],
  },
  {
    number: '05',
    question: 'How can you apply the lessons and values learned from Great Books in your personal, academic, or future professional life?',
    answer: [
      'Academically and professionally, close literary analysis sharpened my ability to read complex documents carefully, synthesize opposing viewpoints fairly, and communicate structured arguments with clarity—essential habits in technology, research, and collaborative teams.',
      'Personally, carrying the patience of Penelope, the reflective discernment of The Panchatantra, the principled action of the Gita, and the empathetic sensitivity of Genji encourages me to lead with humility, listen before reacting, and remain grounded in integrity regardless of shifting circumstances.',
    ],
  },
];

export const WORKS_CITED = [
  'The Holy Bible (Book of Job, Chapter 38). New Revised Standard Version / Literary Wisdom Tradition.',
  'Sharma, Vishnu. The Panchatantra. Translated by Arthur W. Ryder / Patrick Olivelle.',
  'Vyasa. The Mahabharata & The Bhagavad Gita. Translated by J.A.B. van Buitenen & Eknath Easwaran.',
  'Homer. The Iliad & The Odyssey. Translated by Emily Wilson / Robert Fagles.',
  'Anonymous. The Song of Roland. Translated by Dorothy L. Sayers / Glyn Burgess.',
  'Murasaki Shikibu. The Tale of Genji. Translated by Royall Tyler / Edward Seidensticker.',
  'University of Nueva Caceres, School of Social and Natural Sciences. Great Books Final Project Guidelines & Assessment Rubric.',
];
