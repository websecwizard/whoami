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
  module.trauma = [
    'Lost a loved one under mysterious circumstances.',
    'Witnessed something in the darkness.',
    'Something is lurking in your dreams.',
    'Cult activity (perhaps they recruited someone significant).',
    'You read something not meant for mortal minds.',
    'The evidence online is too much to be ignored.',
    'You survived an attack you cannot explain.',
    'Someone close to you is pulling you in, or pushing you away.',
    'You may be a card carrying member in a secret society.',
    'You haven’t yet, that’s what session 1 is for!'
    ];
  module.misfortunes = [
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
    'There are deep truths that others are not aware of. The answers are out there.',
    'Individuals can make a difference.',
    'A specific religion guides you.',
    'You believe in fate and it directly impacts your life.',
    'Free will is the only truth.',
    'You believe in the power of community.'
    ];
  module.social = [
    'Family member',
    'Lover (current or former)',
    'Friend',
    'Mentor',
    'Protege',
    'Online associate',
    'Hero',
    'Rival',
    'A Specialist',
    'NPC'
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
    'improvised or crude weapon',
    'Dagger, Baton, Taser/Mace or pistol',
    'Rifle or Shotgun',
    '[Magic]'
    ];
  module.startingGear = [
    'Night Vision Gaggles',
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
    'Momento',
    'Gear',
    'Weapon',
    'Magic'
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
