import React from 'react'
import Form from './Form'
import BadIdea from './BadIdea'

export default class GetIdeaPage extends React.Component {

    state = {
        formSubmit: false,
        title: '',
        idea: '',
        tags: []
    }

    badArr = [{
            title: 'Hibachi Bed and Breakfast!',
            idea: 'Wake up to the aroma of coffee, the sound of sizzling bacon, and the peaceful clanging of a blade wielding food ninja.',
            tags: ['food', 'restaurant', 'hibachi', 'ninja', 'ninjas', 'bed', 'breakfast', 'knives', 'clanging'],
            goal: ['innovation', 'making friends', 'deliciousness'],
            segment: ['restaurant', 'food service', 'food', 'service industry', 'hotel', 'airBnB', 'accomodations', 'vacation', 'travel']
          },
          {
            title: 'Inside out Ice Cream Bars!',
            idea: 'Ice Cream on the outside and cookie in the middle. Napkins not included. Sell during heatwaves for highest napkin profits.',
            tags: ['ice cream', 'chocolate', 'food', 'napkins', 'messy', 'desserts', 'treats', 'sugar'],
            goal: ['innovation', 'immoral company profitability', 'ill-gotten financial gain', 'deliciousness'],
            segment: ['restaurant', 'food service', 'food', 'food truck', 'ice cream', 'froyo', 'sweet frog', 'service', 'service industry', 'travel', 'sales']
          },
          {
            title: 'Boxed Wine Waterbeds!',
            idea: 'Waterbeds made out of bagged wine.  Can\'t sleep...have a drink.  Proprietary refill valves to ensure you own the refill survice.  Mark up boxed wine by 50%.',
            tags: ['liquor', 'wine', 'beverage', 'beverages', 'sleep', 'bed', 'beds', 'furniture', 'alcoholism', 'alcohol', 'lush', 'lushes', 'enabling'],
            goal: ['immoral company profitability', 'ill-gotten financial gain', 'innovation', 'deliciousness'],
            segment: ['furniture', 'alcohol', 'wine shop', 'liquor store', 'sales', 'beverage service']
          },
          {
            title: 'Fake a Disaster!',
            idea: 'Steps are as follows.  Gather immense amount of tires.  The older the better.  Find a town near a mountain that looks like it could be a dormant volcano.  Climb the mountain.  Pile the vast amount of old tires into a hole near the top of the mountain.  Any hole will do so long as they all fit.  Light those bitches on fire.  Run down the mountain screaming that she\'s gonna blow.  Tell anyone that will listen that your GrandDaddy always thought this rock would sing.  Wait out the mass evacuation.  Claim the town as your own.  Possession is nine tenths of the law.',
            tags: ['crazy','mountain', 'volcano', 'stealing', 'steal', 'theft', 'grand theft', 'mayor', 'ownership', 'town', 'city', 'tires', 'tire', 'old tires', 'granddaddy', 'fire', 'fires', 'deviant'],
            goal: ['ill-gotten financial gain', 'innovation', 'widespread panic', 'losing friends'],
            segment: ['thief', 'thievery', 'looting', 'panic', 'fire', 'disaster', 'chaos', 'deception']
          },
          {
            title: 'The \'ol Switcheroo!',
            idea: 'Start a public access tv show about gladiators fighting dinosaurs to gain viewership.  Attract network execs with goofy side segments a la Wayne\'s World.  Once you go national, switch programming to ultra right wing religious conservatism.  Talk about stuff like the "end times" and "prophets" and "laser car wash franchises".  Demand people send you money for salvation and franchise ownership possiblites. Launch international network of sub public access channels and repeat process worldwide. Use your money to light your cuban cigars in your private jet apocalypse palace.',
            tags: ['apocalypse', 'religion', 'christ', 'church', 'insanity', 'cable access', 'wayne\'s world', 'party time', 'excellent', 'bunker', 'bible', 'god', 'jesus', 'multi level marketing scheme', 'scheme', 'private jet', 'jets'],
            goal: ['creating your own religion', 'ill-gotten financial gain', 'immoral company profitability', 'unhealthy side-effects', 'making friends'],
            segment: ['church', 'religion', 'faith', 'fear', 'lies', 'deceit', 'treachery', 'television', 'drama', 'acting', 'film', 'acting', 'tv star', 'televangalist', 'joel osteen', 'teeth']
          },
          {
            title: 'Baby Changing Robot and Diaper Catapult 4.0!',
            idea: 'Using advanced AI technology the robot is able to detect a soiled diaper from up to 100 meters away. With a cutting edge 3rd generation carbon fiber catapult arm, the diapers are launched almost a full kilometer. Improving on version 2.0 and the absolutely disastrous 3.0 model, the 4.0 is now the industry leader with an incredible accidental baby launch rate under 1/10,000!',
            tags: ['baby', 'diaper', 'diapers', 'catapult', 'carbon fiber', 'soiled', 'easy', 'AI', 'technology', 'convenience', 'ease of use', 'internet of things', 'kilometer', 'meter', 'meters', 'cutting edge', 'babies', 'safety', 'not safe', 'disaster'],
            goal: ['ill-gotten financial gain', 'innovation', 'widespread panic', 'unhealthy side-effects'],
            segment: ['technology', 'science', 'artificial intelligence', 'engineering', 'design', 'startup', 'venture capital', 'mechanical', 'cad', 'robot', 'robots', 'robotics', 'sanitation']
          },
          {
            title: 'Mercury-based Finger Paints for Kids!',
            idea: 'Watch as your small children light up with amazement as they try to make our mercury based finger paints soak into the canvas. Cleanup is a breeze. When you are done, just rinse the mercury down the sink! Or use it to fill a glass tube and have a new DIY thermometer!',
            tags: ['mercury', 'thermometer', 'children', 'paint', 'painting', 'paints', 'art', 'artistic', 'poison', 'death', 'dying', 'entertainment', 'canvas', 'kids', 'activities for kids', 'pollution'],
            goal: ['innovation', 'unhealthy side-effects', 'revenge'],
            segment: ['education', 'kids', 'teaching', 'crafts', 'artist', 'painting', 'science', 'health']
          },
          {
            title: 'Ninja Donut Shop Franchise!',
            idea: 'Employ only Ninjas. The only currency accepted is death.  You have to kill a Ninja to get your donut.  If you fail, the Ninja eats your donut over your mutilated corpse.  Ninja Donut Shop is now the sole heir to the deceased estate.  Make sure you swap out the Ninjas after they have gotten fat by eating the all donuts of their dead victims, otherwise profits could suffer.',
            tags: ['ninja', 'ninjas', 'donut', 'donuts', 'donut shop', 'death', 'currency', 'murder', 'estate planning', 'franchise', 'restaurant', 'restaurants', 'franchises', 'estate', 'heir', 'heirs', 'failure'],
            goal: ['ill-gotten financial gain', 'innovation', 'immoral company profitability', 'revenge', 'deliciousness'],
            segment: ['food', 'food service', 'restaurant', 'restaurant chain', 'martial art', 'martial', 'martial arts', 'finance', 'health', 'economics']
          },
          {
            title: 'Snack Collars!',
            idea: 'Design shirts with fruit roll ups for collars. Long meeting? Pop your collar like a boss and eat like a 12 year old King. Replacement collars cost twice as much as the actual shirt, but are literally just a package of fruit roll ups, so profit margins are huge. Being machine washable is lame, these shirts are Fruit Dry Cleaning ONLY!  You own and operate the only Fruit Dry Cleaning Shop in the State.  You don\'t actually even clean the shirt, you just spritz them with Febreeze.  Advertise that Fruit Dry Cleaning is environmentally conscious.  You\'re not even lying because you use no actual cleaning products.',
            tags: ['fruit', 'roll', 'up', 'ups', 'fruit roll ups', 'collar', 'collars', 'shirt', 'shirts', 'clothing', 'dry cleaning', 'cleaning', 'febreeze', 'treats', 'sweets', 'candy', 'food', 'franchise', 'business', 'profits', 'profit'],
            goal: ['ill-gotten financial gain', 'innovation', 'immoral company profitability', 'deliciousness'],
            segment: ['food', 'fashion', 'artisan', 'sewing', 'stitch', 'stiching', 'artist', 'clothing', 'economics', 'sweat shop']
          },
          {
            title: 'Ride Share meets GTA!',
            idea: 'Carrying a gun can be inconvenient.  They are bulky and heavy...at least the cool ones are.  Download the Mobile Gun App!  With the convenience of Uber (think Uber Eats), you can now get a fully loaded gun delivered to you at any location at any time.  You are only charged based on usage, time of possession and potential surge up charges (think riots).  When done, just leave the gun at any Bird Scooter Charging station.',
            tags: ['trucking', 'logistics', 'sharknado', 'uber', 'bird', 'scooter', 'rampage', 'gun', 'guns', 'fully loaded', 'make my day', 'dirty harry', 'clint eastwood', 'convenience', 'time of possession'],
            goal: ['innovation', 'making friends', 'losing friends', 'immoral company profitabilty', 'widespread panic', 'unhealthy side-effects', 'revenge'],
            segment: ['ride share', 'law', 'military', 'service', 'enforcement', 'innovation', 'government', 'lobbying', 'gun', 'gun sales', 'death', 'funeral']
          },
          {
            title: 'Rename a Felon!',
            idea: 'Tired of paying to rename stupid stuff like stars and celestial objects after loved ones?  Now you can pay to legally rename felons after your worst enemies!  For an extra "Cambridge Analytica" fee, any future crimes your renamed felon commits can be boosted using advanced search engine optimization and facebook saturation ads.',
            tags: ['felon', 'felons', 'crime', 'jail', 'enemy', 'enemies', 'stars', 'celestial objects', 'moon', 'sun', 'planet', 'planets', 'legal', 'legally', 'rename', 'facebook', 'cambridge analytica', 'fee', 'extra fee', 'fees', 'upcharges', 'worst enemy', 'worst enemies', 'search engine', 'optimization'],
            goal: ['losing friends', 'innovation', 'immoral company profitability', 'revenge'],
            segment: ['finance', 'legal', 'law', 'prison', 'social service', 'service']
          },
          {
            title: 'Pocket Nuke!',
            idea: 'Have you ever gone to the park only to be blinded by flashes as doting parents do nothing but photograph their stupid babies and children?  Are you sick of it?  Order the MagnaBlast!  The MagnaBlast is an exteremly powerful electromagnet you can carry in your pocket!  Just charge your MagnaBlast for the prescribed 64 hour time frame and you are ready to go!  Flip the power toggle while walking through the park to instantly disable any electronic device within a 40 meter radius with our patented DEMPF (Dangerous Electro Magnetic Pulse Field) technology!  Watch with delight as parents can no longer capture their ugly children doing mundane things.  Left your MagnaBlast at home but need to wipe your hard drives fast?  No worries!!  MagnaBlast can be connected to your home wifi and controlled with our propietary App.  This way you can trigger MagnaBlast remotely! Suck that early crime prevention unit! The possibilites and cancer clusters are endless!',
            tags: ['cancer', 'magnets', 'electromagnetic pulse', 'electromagnetic pulses', 'emp', 'kids', 'babies', 'stupid parents', 'parents', 'annoying', 'park', 'parks', 'parks and rec', 'technology', 'camera', 'cameras', 'cancer clusters', 'wifi', 'hard drives', 'pocket nuke'],
            goal: ['immoral company profitability', 'innovation'],
            segment: ['photography', 'physics', 'particle physics', 'nuclear', 'nuclear physicist', 'parent', 'radiologist', 'science', 'scientist', 'technology', 'communication', 'designer', 'inventor']
          },
          {
            title: 'Babysitters Club!',
            idea: 'Are you tired of your married friends always cancelling plans with you because they have kids?  You\'re not alone!  Every day millions of single and lonely losers like yourself get cancelled on because their married kid-riddled friends have kid-riddled excuses.  Start a Surpirse Child Babysitting Service!  Just rent a large window-less cargo van (preferrably from the 1970\'s) and approach your friend\'s kids as they walk home from school.  Offer them candy and puppies to get in your van!  Speed away and drive them to one of thousands of remote Surprise Babysitting facilities and let the fun begin.  The kids will be looked after by a registered full time staff and your friends will now be free to go see that movie!  A blocked phone call (for privacy) will be made to your friend\'s house within the next few hours demanding the fee for (your services) to return their kid(s).  Thanks Surprise Babysitting Service!',
            tags: ['kidnapping', 'kids', 'kid', 'children', 'child', 'baby', 'babies', 'babysitting', 'stood up', 'cancelled', 'lame', 'millenials', 'kid riddled', 'excuses', 'lonely', 'loser', 'candy', 'cargo van', 'surprise', 'felony'],
            goal: ['losing friends', 'ill-gotten financial gain', 'immoral company profitability'],
            segment: ['self-employed', 'babysitter', 'babysitting', 'criminal', 'kids', 'child care', 'children', 'Innovation', 'self-starter']
          },
          {
            title: 'Robots Heart Relationships!',
            idea: 'Do you have a partner?  Do they text you and actually expect responses back, like in a timely fashion?  Are they constantly telling you that you never say nice things?  Just follow your HART!  No not your meaty flesh bag, your HART, Heuristic Automated Response Text!  That\'s right, never again be burdened with actually having to communicate, just let our patented and lifeless/loveless application do it for you!  Enter a few seemingly meaningless data points for the annoying person in your life that texts you all the time, like height, weight, number of times you\'ve considered suicide in their presence, and HART will customize and automate no less than 5 basically normal human responses!  Simply allow our app to read all your texts and online activity and the next time THAT PERSON texts you, a randomized response will be sent within 37 seconds! Just read this testimonial from Trey in New Jersey! "My wife used to nag me when I\'d go fishing and not come home for 7 weeks.  With HART, my phone just automatically told her I\'d been drafted by the CIA to save the world. When I got home, she wasn\'t even there to yell at me, and she\'d even cleaned out our house!  Thanks HART!" - Trey (actual customer)',
            tags: ['divorce', 'heuristic', 'automated', 'texts', 'communication', 'hart', 'love', 'husband', 'wife', 'partner', 'AI', 'robots', 'app', 'better life'],
            goal: ['losing friends', 'innovation', 'immoral company profitability'],
            segment: ['technology', 'artificial intelligence', 'communication', 'relationships', 'robots', 'computers', 'therapy', 'therapist']
          },
          {
            title: 'Exploit the Sporties!',
            idea: 'Take advantage of today\'s extreme athletes and organize a World\'s Toughest Event Event!  Buy stretchy nylon attire and camp out in the whole foods aisles of your local grocery store.  Act like your talking on your phone to your friend, Lazer, about the most ridiculous and extreme event you just signed up for.  Mention that it\'s like a Ninja Warrior Marathon Triathlon Obstical Mudder Navy Seal Endurance Vision Quest.  Scream loudly that no one has ever finished it!  Also yell loudly that signups are at *insert random park location here*.  Act like the call drops and repeat this process for several hours.  Draw a treasure map with no distinct directions or instructions, just write at the bottom that "The markers are EVERYWHERE". Make 600 copies at Kinkos buy $3.00 worth of lanyards (this should be roughly 18,000 lanyards). Set up a table at the location you screamed and charge $500.00 per person for signup. Give them a map and a lanyard (this will add to your legitimacy).  Sell granola and trail mix for $20.00 a bag.  Tell everyone you\'ll see them at the finish line!  Pack up shop and repeat this in the next state over.  Be your own Boss, retire when you want!',
            tags: ['hoax', 'race', 'obstacle', 'course', 'navy seal', 'ninja warrior', 'false advertising', 'whole foods', 'lazer', 'athlete', 'extreme', 'stretchy nylon', 'treasure map'],
            goal: ['making friends', 'ill-gotten financial gain', 'losing friends', 'immoral company profitability', 'revenge', 'widespread panic'],
            segment: ['fitness', 'personal trainer', 'training', 'health', 'marathon', 'running', 'gym', 'gymnast', 'event', 'event planner']
          },
          {
            title: 'Flatten Everything!',
            idea: 'You\'ve heard of the Flat Earth Society right?  You might even have heard of the Flat Moon Society and Flat Jupiter.  But you know what you haven\'t heard of?  The Flat Asteroid Society.  And you know what that means?  Opportunity! Treasure!  First, found the society. Second, make t-shirts!  Third, THERE IS NO THIRD! NOTHING IS THREE DIMENSIONAL!',
            tags: ['flat', 'earth', 'celestial', 'moon', 'star', 'galaxy', 'asteroid', 'space', 'society'],
            goal: ['making friends', 'ill-gotten financial gain'],
            segment: ['scientist', 'astronaut', 'entrepreneur', 'society', 'organization', 'space', 'clothing']
          },
          {
            title: 'Exploit Old People!',
            idea: 'Want a Butler but can\'t afford one? Not to mention you don\'t want your crazy lifestyle to be judged or leaked to media outlets.  Feel like the Alzheimers community isn\'t pulling their weight?  Introducing Alzheimers Butlers!!  It\'s an absolute win!  We finally put the forgetful slobs to work AND they\'ll never judge you for eating cereal naked on the toilet BECAUSE they won\'t freaking remember it even happened!  Can\'t pay your Alzheimers Butler this week because you spent all your money on columbian blow?  Don\'t worry about it!  They don\'t even know they have a job!',
            tags: ['blow', 'alzheimers', 'butler', 'lifestyle', 'posh', 'servant', 'toilet cereal', 'slavery', 'exploitation'],
            goal: ['ill-gotten financial gain', 'immoral company profitability', 'making friends'],
            segment: ['playboy', 'playgirl', 'monopoly', 'rich kid', 'service', 'service industry', 'social science', 'elder care', 'elder', 'nursing', 'nursing home']
          },
          {
            title: 'Dump the Construction Problem!',
            idea: 'Launch your own Contruction Immune Uber Service.  Call it D-Uber (Dumptruck-Uber).  Instead of picking people up in your Prius and getting stuck in the multitude of construction nightmares scattered throughout any given city, pick people up in a bonafide construction immune Dump Truck.  Gain access to the hitherto unusable "Truck Entry" points or use the super fun "Truck Lane" you\'ve always dreamt about.  If you get stopped by other construction workers or the Fuzz, just explain that it\'s your first day on the job and you are delivering a State Inspector (point to your fare) to the "Boss".  Throw in a comment about the bad coffee at the last union meeting. You\'ll be waived through instantly!  For extra believe-ability (and profits!), fill your dump truck with dirt and use it as a daycare facility!  Call it Danger Dirks Dirty Day Care!  Just tell the kids to dive really deep in the dirt any time the truck comes to full stop or if they hear talking.  You know, like a game!  It\'ll be fun!  The kids will be exposed to all kinds of new bacteria which will make their microbiomes stronger.  Also, KIDS LOVE GAMES!  Charge extra for the diverse number of gross bacteria you offer.',
            tags: ['transportation', 'logistics', 'ride share', 'uber', 'dump truck', 'daycare', 'kid', 'bacteria', 'infection', 'profits', 'construction', 'union', 'illegal', 'lying', 'lie', 'danger', 'lawsuit'],
            goal: ['ill-gotten financial gain', 'innovation', 'immoral company profitability'],
            segment: ['transportation', 'taxi', 'uber', 'ride share', 'daycare', 'construction', 'lyft', 'logistics', 'labor']
           },
           {
            title: 'The Random Office!',
            idea: 'Do you know what the downside to office buildings are?  Of course you do.  It\'s the fact that they are stationary and boring and filled with disease.  For centuries we\'ve been made to believe office buildings should have foundations and be safe and stuff. Lies!  How many times have you looked out your office window and seen the same depressing scenery day after day?  Imagine this!!  Drag race office day!!  Have a rickety trailer filled with your employees pulled behind 20,000 lbs of torque and 12,000 horsepower!  HEEELLLOOOOO productivity!  Or, imagine velcro-ing desks to a Falcon Heavy International Space Station resupply Rocket!!  What\'s that Karen?  You love your job again??  I can\'t hear you Todd, did you say you want to work overtime for FREE??  With The Random Office you can offer companies a work environment that changes daily/weekly/monthly!  The only limitation is your imagination (and your liability insurance).  Deluxe packages include a washed up celebrity announcer with bullhorn, red sheet, and cardboard sign for the workplace of the day/week/month reveal (adds pizzazz), gently used vomit bags, and an option to race other Random Offices for Glory!  Imagine a Random Office Race to the bottom of the Mariana Trench!!',
            tags: ['vomit', 'random', 'office', 'building', 'lunacy', 'liability', 'insurance', 'international space station', 'falcon heavy', 'iss', 'karen', 'todd', 'certain death', 'mariana trench', 'race', 'velcro', 'rickety', 'trailer', 'boring', 'scenery', 'drag race'],
            goal: ['innovation', 'widespread panic', 'immoral company profitability', 'losing friends'],
            segment: ['facilities', 'hvac', 'creative', 'corporate', 'office', 'organization', 'service', 'rental', 'consultant']
          },
          {
            title: 'Waterboarding Role-Play Game!',
            idea: 'Do you love spy shows like Homeland and Jack Ryan but never feel close enough to the action?  Tried to be a spy but didn\'t make it past the psychological profile?  Don\'t Worry!  Now you can feel like a spy in your very own home with the Waterboarding Role-Play Game!  Our kit comes with everything you need to start waterboarding your friends and family!  Kit includes: (1) Towel, (1) Empty gallon jug, (1) Interrogation script, (1) Game board, (1) Six-sided die, (1) Deck of action cards, (6) Pewter game pieces, (6) Espionage secret cards (1) Interrogation make-up kit - be a ruthless warlord or a sadistic siren!  *water not included* Just roll the die and move your game piece on the board towards the "Save the World" square. Take an action card, but watch out for the "Convicted of Espionage" event!  Who will get waterboarded first?? Will they crack and give up their Espionage Secret?? Provides endless fun and variety for hours!  Multiple play modes!  Including the all new Tom Clancy Mode where each die roll is cut in half allowing for more chances of getting caught!  Ages 3 and Up.',
            tags: ['spy', 'espionage', 'water', 'child', 'endangerment', 'illegal', 'sadistic', 'thriller', 'tom clancy', 'jack ryan', 'homeland', 'torture', 'board', 'game', 'die', 'death', 'irresponsible', 'warlord', 'siren', 'double agent', 'secret', 'agent', 'lawsuit'],
            goal: ['immoral company profitability', 'revenge', 'losing friends'],
            segment: ['espionage', 'cia', 'fbi', 'security', 'homeland', 'spy', 'enforcement', 'games', 'game', 'creative', 'design']
          },
          {
            title: 'Smells like Awesome in here!',
            idea: 'Need a good home defense system, but don\'t want to pay the professionals to monitor your home?  I feel you Fam!  Imagine this!  Dynamite insulated walls!  Instead of boring insulation that only keeps your house warm and stuff, fill your walls with massively explosive dynamite instead! Next time a burglar breaks into your house they will get the surprise of their life!  Just make sure your family and small pets have been evacuated and then use any one of our patented "blow points" throughout the house to start the party (please note a blow point is just an exposed fuse coming out of the wall, but don\'t worry, it is completely safe!).  Yell something cool as you jump out the window after ingniting the blow point, like "Yipee Kiyay Normie!".  Who needs ADT when you can just bathe in glow of your burning home and vanquished enemy.',
            tags: ['dynamite', 'explode', 'explosion', 'insulation', 'house', 'home', 'dead', 'death', 'irresponsible', 'not safe', 'felony', 'murder', 'burglar', 'security', 'ADT', 'building code violation', 'violation', 'revenge'],
            goal: ['innovation', 'immoral company profitability', 'widespread panic'],
            segment: ['home', 'construction', 'security', 'revenge', 'defense', 'explosives', 'munitions', 'insulation']
          },
          {
            title: 'The Glockenspiel Sidewalk!',
            idea: 'Have you ever thought that sidewalks are sad, miserable and boring?  Have you ever thought that sidewalks should be large metal musically tuned tiles fastened dangerously across two parellel planks of wood?  Of course you haven\'t!  Imagine this!  Develop and manufacture enormous glockenspiel sidewalk panels.  Sell New York City planners on the benefits of citizens frolicking to and fro on your colorful and musical glockenspiel "glidewalks".  Provide fake data around how much happier and less violent people would be!  Use a pie chart without a legend!  No one will notice!  People love shapes!  NYC is just the start.  Pitch idea to cities all over the world.  Build your contract to include ownership of any music created on your "glidewalks".  Become Time Person of the Year/Century.',
            tags: ['glockenspiel', 'sidewalk', 'happy', 'music', 'pie chart', 'pie', 'data', 'fake data', 'tiles', 'dangerous', 'frolicking', 'famous', 'infamous', 'rich', 'powerful', 'aesthetic', 'shapes', 'charts', 'city planning', 'infrastructure'],
            goal: ['innovation', 'ill-gotten financial gain', 'widespread panic'],
            segment: ['city planning', 'infrastructure', 'music', 'data', 'social', 'experiments', 'tile', 'tiling', 'construction']
          },
          {
            title: 'The Un-Social Network!',
            idea: 'You know what there are just not enought of? Social Platforms.  Create a social platform for things that are inherently anti-social!  Imagine this!  ":Space"  Only it\'s not a punctuation forum. No No, it\'s a Social Platform for sharing information about your Colon!  Post about wild rides your colon has been on recently!  Get likes on things like colon output and exam results!  Build an offshoot social platform called ";Space" for people who only have partial colons.  The possibilities are endless!  It\'s time to break open the anti-social Social Platform arena!  Uncomfortable DNA results Twittersphere!  .Book - again not about punctuation but about period pain and blood volumes!  PeanutAllergyDisasters.com - more likes if someone was hospitalized and if you have gross pics!',
            tags: ['social', 'twitter', 'facebook', 'networks', 'anti-social', 'platform', 'gross', 'inappropriate', 'wrong', 'uncomfortable', 'dna', 'peanut allergy', 'colon', 'period', 'semi-colon', 'puns', 'instagram', 'tumblr', 'reddit'],
            goal: ['innovation', 'losing friends', 'making friends', 'immoral company profitability'],
            segment: ['social', 'science', 'data', 'design', 'technology', 'coding', 'programming', 'innovation', 'psychology', 'behavior']
          },
          {
            title: 'Shut up or Fight!',
            idea: 'A new Social Media/Political Discussion App called "ShutupOrFight.com"!  The premise is if you don\'t like what someone is saying you can click the patented "shut up or fight" button"... it\'s like getting a like or a mad face on Facebook.  The person then has a choice to aplogize and shut up about it, or fight.  If they choose fight, an Uber-like map app will set up the fight details and alert everyone that follows you.  If you apologize, your "Wuss" score in your visible profile goes up which deprioritizes your posts.  If you bail on a fight that you\'ve openly committed to, we take your money ($500.00), as you agreed to in your terms of service.',
            tags: ['social', 'network', 'political', 'politics', 'shut up', 'fight', 'uber', 'facebook', 'twitter', 'instagram', 'tumblr', 'wuss', 'respect', 'online fight club', 'google maps', 'likes', 'follows', 'app', 'app store', 'google play', 'troll', 'troll fights'],
            goal: ['immoral company profitability', 'innovation', 'making friends', 'losing friends', 'revenge', 'unhealthy side-effects'],
            segment: ['politics', 'social', 'science', 'pundit', 'correspondent', 'fighter', 'fight', 'club', 'networking', 'technology']
          },
          {
            title: 'You are Driving me to Sleep!',
            idea: 'Tired of being judged for sleeping in your semi-autonomous car just because other people can\'t afford them and are jeolous?  At FakeAwake.com, we hear you!  That\'s why we created the industry first inflatable designed around you!! Yes you!!  Our patented app uses artificial intelligence as well as state of the art three dimensional imaging to model your entire body!  Just prop you phone up on any surface and follow the onscreen instructions, like "pretend to drink coffee", "act mad at the driver in front of you", "act like your favorite song just came on the radio".  In no time at all we\'ll send you your inflatable doppelganger, complete with adjustable velcro straps to fit any steering wheel!  Use the app to set randomized behaviour!  Drive to work is 20 minutes? Set your FakeAwake to rock out to invisible music for 10 mins then switch over to Anger mode for the last 10 mins!  Simulate coffee spills and other classics like "dropped your phone behind the gas pedal" and "getting dressed while driving"!  All while you are sleeping like a baby in the backseat!  No more salty looks, horn beeps or attempted vehicular homicide charges!  Just quality car naps with FakeAwake!',
            tags: ['autonomous', 'artificial intelligence', 'tesla', 'doppelganger', 'sleeping', 'homicide', 'vehicular', 'car', 'automobile', 'inflatable', 'velcro', '3d', 'three dimensional', 'model', 'app', 'deception', 'nap', 'not safe', 'salty', 'judgey', 'random', 'imaging'],
            goal: ['immoral company profitability', 'innovation', 'unhealthy side-effects'],
            segment: ['technology', 'automobile', 'cars', 'science', 'artificial intelligence', 'automation', 'transportation', 'designer', 'application', 'imaging', 'websites']
          }]

    randNum = (arr) => {
        const ran = Math.floor(Math.random() * arr.length)
        return arr[ran]
    }

    removeIdea = () => {
        this.setState(() => ({ 
          formSubmit: false, 
          title: '', 
          idea: '',
          tags: []
        }))
    }
    
    handleIdea = ({ passion, segment, attribute }) => {
      console.log(passion, segment, attribute)
        let lowQArr = []
        let highQArr = []
        let myBadIdeaObj = {}
        this.badArr.forEach((arr) => {
            if (arr.tags.includes(passion)) {
                highQArr.push(arr)
                highQArr.push(arr)
            }
            if (arr.segment.includes(segment)) {
                highQArr.push(arr)
            }
            if (arr.goal.includes(attribute)) {
                lowQArr.push(arr)
            }

        })
       
        if (highQArr.length > 0) {
            myBadIdeaObj = this.randNum(highQArr)
        } else {
            myBadIdeaObj = this.randNum(lowQArr)
        }
        
        const tagsArr = myBadIdeaObj.tags.concat(myBadIdeaObj.segment, myBadIdeaObj.goal)


        this.setState(() => ({ 
            formSubmit: true,
            title: myBadIdeaObj.title,
            idea: myBadIdeaObj.idea,
            tags: tagsArr.join()
        }))
    }
        
    componentDidMount() {
      console.log('mounted get idea')

      try {
          const json = localStorage.getItem('formSubmit')
          const formSubmit = JSON.parse(json)
          const title = localStorage.getItem('title')
          const idea = localStorage.getItem('idea')
          const tags = localStorage.getItem('tags')
          if (formSubmit) {
          this.setState(() => ({ formSubmit, title, idea, tags }))
          }
      } catch(e) {

      }
      
  }

  componentDidUpdate(prevProps, prevState) {
        console.log('updated get idea')
        localStorage.setItem('formSubmit', this.state.formSubmit)
        localStorage.setItem('title', this.state.title)
        localStorage.setItem('idea', this.state.idea)
        localStorage.setItem('tags', this.state.tags)
      
  }

    render() {

        return (
          <div className="container__flex-footer">
            <div className="container">
                <h2>Idea <span className="text-transform">Town</span></h2>
                <p className="container__ptext">Our patented algorithmic system requires only 
                a few responses from you and is *guaranteed to match you
                to your **perfect start-up idea!  Our ridiculously complicated process applies
                the most weighting to what you are passionate about and your desired business segment.  
                Finally, we attempt to incorporate your selected business attribute for a bad business
                trifecta!  You are mere seconds away from the ***single greatest moment of your
                entire life! 
                </p>
                <p className="fineprint__warning">
                *not at all guaranteed and will absolutely fail
                **not at all perfect and will absolutely fail
                ***not even remotely comprable to the actual greatest moment of your life
                </p>
                <br />
                <h4 className="container__h4text">
                Give <span className="text-transform">us your data!</span>
                </h4>
                <Form 
                    handleIdea={this.handleIdea} 
                    disabled={this.state.formSubmit}
                    />
                {!this.state.formSubmit ? 
                    <h4 className="text-transform-margin__noidea">Give <span className="text-transform">us some data and Make it Rain to see your idea.</span></h4> : 
                    <BadIdea 
                        title={this.state.title}
                        idea={this.state.idea}
                        tags={this.state.tags}
                        removeIdea={this.removeIdea}
                    />}
            </div>
           </div> 
        )
    
    }
    
}
