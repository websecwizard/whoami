'use strict';

var data = data || {};
(function(module){
  module.physique = [
    'Athletic',
    'Brawny',
    'Curvy',
    'Lanky',
    'Rugged',
    'Scrawny',
    'Short',
    'Statuesque',
    'Stout',
    'Towering'
    ];
  module.face = [ 
    'Bony',
    'Broken',
    'Chiseled',
    'Elongated',
    'Dimpled',
    'Perfect',
    'Round',
    'Sharp',
    'Square',
    'Sunken'
    ];
  module.speech = [
    'Blunt',
    'Booming',
    'Cryptic',
    'Droning',
    'Formal',
    'Gravelly',
    'Precise',
    'Squeaky',
    'Choppy',
    'Whispery'
    ];
  module.virtue = [
    'Ambitious',
    'Cautious',
    'Courageous',
    'Disciplined',
    'Gregarious',
    'Honorable',
    'Humble',
    'Merciful',
    'Serene',
    'Tolerant'
    ];
  module.flaw = [
    'Aggressive',
    'Bitter',
    'Craven',
    'Deceitful',
    'Greedy',
    'Lazy',
    'Nervous',
    'Rude',
    'Vain',
    'Vengeful'
    ];
  module.weirdness = [
    'Lost a loved one under mysterious circumstances.',
    'Witnessed something in the darkness.',
    'Something is lurking in your dreams.',
    'Cult activity (perhaps they recruited someone significant).',
    'You read something not meant for mortal minds.',
    'The evidence online is too much to be ignored.',
    'You survived an attack you cannot explain.',
    'Someone close to you is pulling you in, or pushing you away.',
    'You may be a card carrying member in a secret society.',
    "Someone looking exactly like you is replacing you in society.'
    ];
  module.trauma = [
    'Abandoned',
    'Addicted',
    'Blackmailed',
    'Condemned',
    'Cursed',
    'Defrauded',
    'Demoted',
    'Discredited',
    'Disowned',
    'Exiled'
    ];
  module.beliefs = [
    'Everything has a rational explanation rooted in science.',
    'You ascribe to a specific political ideology.',
    'Morality is black and white.',
    'Belief in higher powers. Astrology, spirituality, etc.',
    'There TRUTH is out there but others are not aware of it.',
    'Individuals can make a difference.',
    'A specific religion guides you.',
    'You believe in fate and it directly impacts your life.',
    'Free will is the only truth.',
    'You believe in the power of community.'
    ];
  module.social = [
    'Create your Family member',
    'Create your Lover (current or former)',
    'Create your Friend',
    'Create your Mentor',
    'Create your Protege',
    'Create your Online associate',
    'Create your Hero',
    'Create your Rival',
    'Create your Specialist',
    'Create your Boss'
    ];
  module.startingBackground = [
    'Journalist',
    'Store Clerk',
    'Private Investigator',
    'Cleric (former)',
    'Medic',
    'Archivist',
    'Artist',
    'Athlete',
    'Criminal',
    'Drifter',
    'Old Money',
    'Author',
    'Professor',
    'Very Online',
    'Lawyer',
    'Gig-Worker',
    'Trades',
    'Therapist',
    'Finance',
    'Hospitality'
    ];
  module.startingMomento = [
    'A note from a lost love',
    'An item from your background',
    'A business card with a number written on the back',
    'A piece of jewelry carved from bone',
    'A will',
    'A letter in a language you cannot identify',
    'A book filled with names (Not your handwriting)',
    'A voice recording',
    'A heavily redacted file',
    'A small, old figurine'
    ];
  module.startingWeapon = [
    'Armored Vest',
    'Prison Shank',
    'Pen/Glass Breaker',
    'Walking Cane',
    'Fighting Dog',
    'Crowbar',
    'Almost useless stick',
    'Dagger',
    'Baton',
    'Mace Spray',
    'Touch Taser',
    'Taser Gun',
    'Pistol',
    'Samurai Sword',
    'Bow & Arrow Bundle',
    '8 pack of C-4',
    'Shotgun'
    'Rifle',
    '[Magic]'
    ];
  module.startingGear = [
    'Night Vision Goggles',
    'Zip Ties',
    'Binoculars',
    'Chain & Lock',
    'Ancient Tome',
    'Handcuffs',
    'Grappling Hook & Rope',
    'Body Bag',
    'Tactical Flashlight',
    'An Ivory Necklace (+1 Stability)',
    'Flashbang',
    'Directional Microphone',
    'Glass cutting tools',
    'A box with no seam',
    'Lockpicks',
    'Spray Paint',
    'Laptop & Printer',
    'Kevlar Rope',
    'Good Camera',
    'Bolt Cutters'
    ];
  module.startingBonus = [
    'Another Memento = A business card with a number written on the back',
    'Another Memento = A piece of jewelry carved from bone',
    'Another Memento = A will',
    'Another Memento = A letter in a language you cannot identify',
    'Another Memento = A book filled with names (Not your handwriting)',
    'More Gear = Handcuffs',
    'More Gear = Grappling Hook & Rope',
    'More Gear = Body Bag',
    'More Gear = Tactical Flashlight',
    'More Gear = An Ivory Necklace (+1 Stability)',
    'More Gear = Flashbang',
    'More Gear = Directional Microphone',
    'More Gear = Glass cutting tools',
    'Bonus Weapon = Fighting Dog',
    'Bonus Weapon = Crowbar',
    'Bonus Weapon = 8 pack of C-4',
    'Bonus Weapon = Shotgun'
    'Bonus Weapon = Armored Vest',
    'Bonus Weapon = Almost useless stick',
    'Bonus Weapon = [Magic]'
    ];
  module.meeting = [
    'The investigators meet in a diner. They may or may not know each other. Fluorescent lights hum over checkered linoleum.',
    'A simple “wrong place, wrong time.” The resulting event binds the investigators together.',
    'United through self guided research. Online paranatural forum? Club? Support group?',
    'A mysterious patron that has brought the investigators together.',
    'Members of the community respond to a series of mysterious events.',
    'Investigators (either professional or amateur) that are looking into an event.'
    ];
  module.party = [
    '____ is hiding something from me',
    '____ is my ex',
    '____ saved me from whatever it was that tried to attack me',
    '____ is my drinking buddy',
    '____ is my co-worker',
    '____ is my neighbor'
    ];
})(data);
