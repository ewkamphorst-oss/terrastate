/* Playterra worlds: lore for the Codex, cards, chronicle and heroes.
   Unit names and numbers come from the games themselves (data.js). This file only adds the story. */
window.PT_LORE={
ts:{
 name:'Terrastate',era:'Modern, 2026',game:'play.html',accent:'#2dd4bf',accent2:'#f97316',
 tagline:'A modern world of invented nations, one prize, and one season to take it.',
 intro:[
  'Terrastate is our world with the names changed. Twenty-five theaters stretch from Europe to Oceania, and every region on the map belongs to a nation that did not exist a year ago. Hundreds of them rose at once when the old order cracked, each with a flag, a cabinet and a plan.',
  'At the centre of it all sits the Nexus, a sealed region that hums with data and power. Whoever builds a Command Center there and holds it until the season ends writes the next chapter. Everyone else tries to stop them.',
  'Nations here trade, spy, sign pacts and break them. Alliances are formed in the morning and tested by night. Nobody wins alone for long.'],
 facts:[['Prize','The Nexus'],['Win','Build the Command Center and hold it for 12 turns'],['Theaters','25, Europe to Oceania'],['Rivals','Hundreds of AI nations']],
 units:{
  militia:'Neighbours with rifles and a radio. They will not win a war, but they make every street cost something.',
  infantry:'The backbone of every modern army. Divisions dig in, hold the line and take what the tanks leave behind.',
  spec_ops:'Small teams that arrive before anyone knows there is a war. They see first and strike where it hurts.',
  tank:'Steel, tracks and a long gun. Battle Tanks break open the front so the rest of the army can pour through.',
  artillery:'Heavy guns far behind the line. When they open up, the defender learns what a bad morning sounds like.',
  cyber_cell:'Rooms full of screens and coffee. A good Cyber Cell blinds an enemy without firing a shot.',
  supply_truck:'Nobody writes songs about them. Every general who forgot them lost.',
  interceptor:'Fast jets that own the sky above home. Enemy bombers come in confident and go home fewer.',
  strike_fighter:'Precision from above. Strike Fighters hit the target, turn, and are gone before the alarm ends.',
  sam:'Missile batteries hidden in fields and on rooftops. They turn your airspace into a place nobody wants to fly.',
  powered_armor:'One soldier, one suit, the strength of ten. Powered Armor walks through fire that stops a squad.',
  strat_bomber:'Long-range strikes that reach the heart of a nation. Rare, expensive and never forgotten.',
  quantum_hacker:'They do not break codes. They make the code break itself. Few nations have them, and fewer can stop them.',
  loitering_munition:'A swarm that circles and waits. Cheap, fast and fragile, but there are always more.',
  ghost_squad:'Elite recon that leaves no trace. Ghost Squadrons know your defences before you finish building them.',
  titan_mech:'Walking fortresses from the Juggernaut doctrine. A handful of Titans can decide a season.',
  mobile_shield:'Emitters that throw a dome of energy over an army. Hard to kill, harder to get past.',
  field_hospital:'Tents, surgeons and a promise that nobody is left behind. Armies with a hospital stay in the fight.',
  ew_drone:'Drones that jam, confuse and send false signals. They do little damage and save a great many lives.'},
 cmd:{
  general:{bio:'A former tank officer who believes the best defence is arriving first.',story:{t:'The Long Road to the Nexus',p:[
   'General Novak never liked waiting rooms. When the old order cracked, he was sitting in one, outside a ministry that no longer had a minister. By evening he had a desk, a staff of eleven and a map with too many new borders.',
   'His first campaign was a mistake. He pushed too far, too fast, and lost half his armour in a river valley he had not scouted. He kept a photo of that valley on his desk for the rest of the season. Next to it he wrote one word: look.',
   'Since then his nation sends Spec-Ops ahead of every strike. His soldiers joke that he would scout his own breakfast. But when the tanks roll under his command, they roll fast, and they do not stop until the job is done.']}},
  admiral:{bio:'A patient strategist who counts supply lines before soldiers.',story:{t:'The Wall at Harbor Seven',p:[
   'Admiral Zhao had never lost a harbor, and she did not plan to start. When three nations moved against Harbor Seven at once, her advisers wanted to strike back. Zhao asked for coffee and the logistics report.',
   'She dug in. SAM batteries on the cranes, militia in the warehouses, every road into the port covered by artillery. Then she waited. The attackers came in waves and broke on the harbor walls, one after another.',
   'On the fourth day the coalition split over who was to blame. Zhao sent one message to each of them, the same message: "My door is open for trade." Two of the three signed within a week.']}},
  minister:{bio:'A minister who can turn a crisis into a budget surplus.',story:{t:'The Spreadsheet War',p:[
   'Minister Van Dijk does not own a uniform. She owns three calculators, and she trusts them more than most generals. While others counted tanks, she counted the price of steel in every market on the map.',
   'When a rival nation started buying fuel in bulk, Van Dijk noticed before the spies did. She bought first, quietly, through four different traders. By the time the rival was ready to attack, its tanks had nothing to drink.',
   'The war that followed was short and polite. Van Dijk sold the fuel back at a fair price, plus a peace treaty. She still says it was the best trade of her life.']}},
  scientist:{bio:'A brilliant researcher who sleeps in the lab more often than at home.',story:{t:'Moonshot',p:[
   'Dr. Ada Reyes keeps a whiteboard in her lab with one question on it: what if? Every morning her team adds an answer. Most are crossed out by lunch. One of them became the Quantum Systems program.',
   'Her government almost cancelled it twice. Too expensive, too slow, too strange. Reyes asked for one more season and a quiet corner of the budget. She got half of what she asked for and made it work anyway.',
   'Now every rival wants to know how her nation sees through their defences. Reyes just smiles and points at the whiteboard. The question is still there.']}},
  diplomat:{bio:'A warm voice in a cold room, and the reason half the alliances still stand.',story:{t:'Three Chairs',p:[
   'Envoy Okoro always brings three chairs to a negotiation, even when only two nations attend. When people ask why, he says the third one is for the future, and it likes to be included.',
   'His most famous evening began with two alliances on the edge of war over a single border region. Okoro listened for six hours. He did not take sides. He asked questions until both delegations were answering each other instead of him.',
   'By midnight they had agreed to share the region and its mines. Nobody remembers who suggested it first. Okoro prefers it that way.']}},
  spymaster:{bio:'Nobody knows where Director Sato was born. Sato prefers it that way.',story:{t:'The Empty Office',p:[
   'Visitors to the intelligence bureau are always shown Director Sato\'s office. It is clean, bright and completely empty. There is a chair, a desk and a single plant. Nobody has ever seen Sato sit there.',
   'Rival spies spent a whole season watching that office. They photographed the plant. They studied the light switches. Meanwhile, Sato\'s Ghost Squadrons mapped every one of their bases.',
   'When the season ended, a small parcel arrived for each rival intelligence chief. Inside was a cutting from the plant, and a note: "Thank you for watching. We were watching too."']}}},
 paper:{name:'The Terrastate Wire',motto:'News from every theater, every turn',issue:'Issue 1 · Season zero',
  lead:{h:'Hundreds of new nations rise as the old order falls',sub:'The race for the Nexus begins',p:[
   'The map changed overnight. Borders that held for decades dissolved, and in their place rose hundreds of nations with new flags and old ambitions. Most of them are small. A few are already hungry.',
   'All eyes turn to the Nexus, the sealed region at the heart of the world. Experts agree on one thing: whoever holds its Command Center at the end of the season will shape what comes next. Experts disagree on everything else.']},
  items:[
   {h:'Steel prices climb as nations rearm',p:'Traders report record demand for steel and electronics. Analysts warn that nations who forget food and energy may find their armies hungry by mid-season.'},
   {h:'First alliance founded within hours',p:'Seven nations in the southern theaters signed a mutual defence pact before most capitals had finished painting their flags. Critics call it hasty. Members call it insurance.'},
   {h:'Opinion: the quiet nations will win',p:'Our columnist argues that the loudest nations rarely last. The ones to watch build farms, research and friendships first, and tanks later.'},
   {h:'Weather',p:'Clear skies over most theaters. Scattered storms of rumour expected near the Nexus.'}]}
},
ro:{
 name:'Romaterra',era:'Antiquity, Anno I',game:'romaterra.html',accent:'#e0b04a',accent2:'#b91c1c',
 tagline:'The Roman world, from Britannia to Parthia. All roads lead to Roma, and so do all armies.',
 intro:[
  'Romaterra is the ancient world at the moment it could have gone any way. Provinces from Britannia to Parthia are ruled by peoples who each believe the future belongs to them. Roads, tribute and legions bind the land together, and hold it apart.',
  'In the centre stands Roma. Whoever raises the Imperial Palace there and keeps it until the season turns will be remembered as the master of the world. Many have tried. The city does not care who rules it, only that someone does.',
  'Here, a republic can turn into an empire in a single season, and a tribal confederation can bring a legion to its knees. Grain feeds the cities, timber builds the forts, and iron decides the rest.'],
 facts:[['Prize','Roma'],['Win','Raise the Imperial Palace and hold it for 12 turns'],['World','Britannia to Parthia'],['Rivals','Hundreds of peoples and city states']],
 units:{
  militia:'Farmers and fishermen called from their fields. Give them spears and a wall, and they will hold it longer than you expect.',
  infantry:'The legion is a machine of shields and discipline. Cohorts march twenty miles, build a camp, and fight in the morning.',
  spec_ops:'Scouts and messengers who travel light and see far. A good general hears from them before he hears from anyone else.',
  tank:'Rider and horse wrapped in scale armour from head to hoof. When Cataphracts charge, the ground shakes before the line breaks.',
  artillery:'Twisted rope, iron bolts and patient engineers. A Ballista can pin a man to a gate from three hundred paces.',
  cyber_cell:'Whispers in the market, letters under the door, a servant who hears everything. Spy Networks win wars before they start.',
  supply_truck:'Oxen, carts and grain. An army marches on its stomach, and the wagons carry it.',
  interceptor:'Young, quick skirmishers with javelins. They run in, throw, and are gone before the enemy can form up.',
  strike_fighter:'Riders who shoot while galloping away. Horse Archers bleed an army slowly, then disappear over the hill.',
  sam:'Shields locked edge to edge. Arrows rattle off it, and the line does not move.',
  powered_armor:'The best soldiers in the world, chosen one by one. The Praetorian Guard does not retreat, because it has never needed to.',
  strat_bomber:'Great throwing engines that hurl stones over walls. When the Onagers arrive, a siege stops being a waiting game.',
  quantum_hacker:'Daggers in crowded streets. Nobody sees the Sicarii arrive, and nobody sees them leave.',
  loitering_munition:'Hundreds of slingers in loose order. Each stone is small. Together they are a hailstorm.',
  ghost_squad:'Scouts who move through forests like smoke. The Shadow Exploratores know your camp better than your own sentries.',
  titan_mech:'Living towers of muscle and tusk. Few armies stand their ground when the War Elephants come.',
  mobile_shield:'The tortoise. Shields above, shields in front, shields on every side. Slow, steady and nearly impossible to break.',
  field_hospital:'Physicians with herbs, bandages and steady hands. A wounded legionary who walks again is worth two new recruits.',
  ew_drone:'Campfires with nobody beside them, banners on empty hills. Decoy Pickets make the enemy fight shadows.'},
 cmd:{
  general:{bio:'A legate who has never lost a standard and never intends to.',story:{t:'The Standard of the Ninth',p:[
   'Legate Corvus was a junior officer the day the Ninth lost its eagle standard in a fog-filled valley. He spent three days searching for it with eight men and a borrowed horse. He found it in a farmer\'s barn, being used to hang onions.',
   'He brought it back without a word. The legion has followed him ever since, and the onion story is told to every new recruit.',
   'Corvus fights the same way he searched: patiently, then all at once. He scouts, he waits, and when he strikes, the cohorts move as one. His enemies say he is lucky. His soldiers say he simply does not give up.']}},
  admiral:{bio:'A prefect who would rather build a wall than lose a soldier.',story:{t:'The Fort That Would Not Fall',p:[
   'Prefect Varro was sent to a forgotten fort on the edge of the empire with two hundred levies and orders to "hold if possible". She read the orders twice, crossed out "if possible" and got to work.',
   'She dug ditches, raised a second wall, and trained the farmers to lock their shields. When the raiders came in spring, they found a hedgehog of spears where they expected an open gate.',
   'The siege lasted forty days. On the forty-first, the raiders asked for terms. Varro gave them bread, water and a road home. Two summers later, their sons came back to join her garrison.']}},
  minister:{bio:'A quaestor who can find coins in an empty treasury.',story:{t:'The Grain Ships',p:[
   'When the harvest failed in three provinces, the city panicked. Prices tripled. Crowds gathered outside the senate. Quaestor Crassus went to the harbour instead.',
   'She had been buying small amounts of grain from distant ports for two years, a little each month, and storing it in warehouses nobody remembered. Now he opened them all at once.',
   'Prices fell by evening. The crowds went home. A senator asked her how she knew. Crassus said she did not know. She just never trusted a good harvest.']}},
  scientist:{bio:'A scholar who believes every problem has a geometry.',story:{t:'The Bridge in Seven Days',p:[
   'Scholar Aemilia was told a legion needed to cross a river that had no bridge, no ford and no boats. The general gave her a month. She asked for seven days, three hundred men and all the rope in the province.',
   'She drew the bridge on the sand first, then on wax, then on the river itself with stakes and string. The men laughed at the string. They stopped laughing on day four, when the first timbers met in the middle.',
   'On day seven the legion crossed. Aemilia stood at the far end and counted every man. Then she went home and started on a better design.']}},
  diplomat:{bio:'An orator whose words have stopped more wars than swords have.',story:{t:'The Speech at the Ford',p:[
   'Two armies faced each other across a shallow ford, and both were too proud to cross first. Orator Tullius walked into the middle of the river with water up to his knees, and began to talk.',
   'He spoke about harvests, about grandchildren, about how cold the water was. Soldiers on both banks started to laugh. Then they started to listen.',
   'By sunset the two commanders were standing in the river next to him, arguing about border stones instead of battles. Tullius went home with wet sandals and a treaty.']}},
  spymaster:{bio:'A spymaster who hears every whisper from Britannia to Parthia.',story:{t:'The Baker of the Subura',p:[
   'Everyone in the Subura buys bread from the same small bakery. The bread is good, the baker is friendly, and he always asks how the family is doing. Spymaster Sertorius has owned that bakery for eleven years.',
   'Through it pass a hundred conversations a day. Soldiers on leave, servants of senators, traders from the east. Sertorius listens to all of them, and forgets nothing.',
   'When a plot against the city was uncovered, the conspirators never learned how. They had met only once, in a quiet corner, over fresh bread and a friendly question about their health.']}}},
 paper:{name:'The Romaterra Herald',motto:'Acta Diurna of the known world',issue:'Scroll I · Before the first season',
  lead:{h:'The old empire breaks, a hundred peoples rise',sub:'All eyes on Roma',p:[
   'Messengers ride day and night with the same news: the great provinces have broken apart. Governors have become kings, tribes have become nations, and every road now has a toll gate.',
   'Roma stands unclaimed. The senate argues, the people wait, and in a hundred camps across the world, generals sharpen their plans. Whoever raises the Imperial Palace and keeps it will be remembered for a thousand years.']},
  items:[
   {h:'Grain prices rise in the eastern markets',p:'Merchants report long queues at the harbours. The wise buy now. The foolish wait for a good harvest.'},
   {h:'Elephants sighted near the southern passes',p:'Travellers swear they saw great grey beasts moving north under painted towers. The garrison laughed. The garrison has since asked for more ballistae.'},
   {h:'Letters: why every legion needs a physician',p:'A veteran centurion writes that half his cohort survived the last campaign because of one good doctor. "Build the tents," he writes, "before you build the walls."'},
   {h:'Omens',p:'Clear skies over the Mare Nostrum. Strong winds of ambition expected near Roma.'}]}
},
if:{
 name:'Ironfront',era:'Europe at war, 1944',game:'ironfront.html',accent:'#a3b56b',accent2:'#c9a227',
 tagline:'Real fronts and towns, invented nations and leaders. Battle orders every turn.',
 intro:[
  'Ironfront takes place on the fields, hedgerows and rivers of Europe in 1944, but the nations are invented. No real flags, no real leaders. Just fronts that move with every turn, and commanders who must decide where to push and where to hold.',
  'Three Capital Sectors lie on the map. Whoever holds two of them with a GHQ Bunker for 12 turns decides how the war ends. Every nation knows it. Every nation is coming.',
  'This is a world of field works and radio intel, of supply lines stretched thin and bridges that matter more than any battle. Plan carefully. The front forgives nothing.'],
 facts:[['Prize','The Capital Sectors'],['Win','Hold 2 of the 3 with a GHQ Bunker for 12 turns'],['Map','Europe, 1944'],['Nations','Invented, with invented leaders']],
 units:{
  militia:'Postmen, farmers and schoolteachers in borrowed helmets. The Home Guard knows every lane and every cellar.',
  infantry:'Rifles, boots and grit. Infantry Divisions hold the line, take the towns, and do the hardest work of every war.',
  spec_ops:'Commandos who land at night and leave before dawn. A bridge here, a radar there, and the enemy wonders what happened.',
  tank:'Armour that breaks through hedgerows and rolls across open ground. Tank Battalions turn a breach into a breakthrough.',
  artillery:'Guns that speak before every attack. The infantry move forward the moment the barrage lifts.',
  cyber_cell:'Quiet people with heavy bags. Saboteur Cells cut wires, blow rails and make the enemy\'s map lie.',
  supply_truck:'Fuel, food and ammunition on the move day and night. An army without its trucks stops where it stands.',
  interceptor:'Fast fighters that climb to meet the raiders. Every bomber they turn back is a town that sleeps safely.',
  strike_fighter:'Low and fast over the treetops. Strike Fighters hit columns on the road before they reach the front.',
  sam:'Guns pointed at the sky, filling it with black puffs of smoke. Flak Batteries make every bombing run expensive.',
  powered_armor:'Hand-picked troops trained for the first wave. Shock Troopers go where the fighting is hardest.',
  strat_bomber:'Heavy bombers that fly for hours to reach the factories that feed an army. Rare and costly, but they change the map.',
  quantum_hacker:'Spies who live a double life for years. One Master Spy in the right office is worth a whole division.',
  loitering_munition:'Small bands that strike from the woods and vanish. Partisan Raiders turn every road into a risk.',
  ghost_squad:'Patrols that work only in the dark. Night Raiders find the gaps in the line and slip through.',
  titan_mech:'The heaviest armour on the field. Few guns can stop a Heavy Tank Battalion, and everyone knows it.',
  mobile_shield:'Canisters, wind and timing. A good smoke screen lets an army cross open ground it could never cross in daylight.',
  field_hospital:'Tents near the front, and medics who never stop. A field hospital turns a lost division into a tired one.',
  ew_drone:'Inflatable tanks, plywood guns and fake radio traffic. Decoy Tanks pull enemy fire toward nothing at all.'},
 cmd:{
  general:{bio:'A field general who reads the land before he reads the reports.',story:{t:'The Hedgerow Map',p:[
   'General Voss keeps an old farmer\'s map in his coat pocket. It shows every hedgerow, ditch and gate in the valley where he first commanded a battalion. The official maps were wrong. The farmer\'s map was not.',
   'Since then, Voss asks the locals before he asks his staff. Where does the river flood? Which lane is too narrow for a tank? Where do the cows cross?',
   'His officers once found it funny. Then his battalions started reaching objectives a day before anyone else. Now every new officer under Voss is handed a pencil and sent to talk to a farmer.']}},
  admiral:{bio:'A defender who believes every river is a wall waiting to be used.',story:{t:'The Last Bridge',p:[
   'Admiral Hart commanded the river fleet the week the front collapsed. Twenty bridges stood between the enemy and the capital. Hart had boats, engineers and very little time.',
   'She did not blow the bridges. She blew nineteen of them, and left the twentieth standing, covered by every gun she had. The enemy saw one road open and took it. They walked straight into his line.',
   'The front held for six weeks at that bridge. When asked why she spared it, Hart said: "If you leave a door open, at least you know where the guests will come in."']}},
  minister:{bio:'A minister who keeps the factories running and the lights on.',story:{t:'The Night Shift',p:[
   'Minister Colville spends more time in factories than in parliament. She knows the foremen by name and the machines by their noises. When a production line goes quiet, she hears it before the report arrives.',
   'When the bombing raids began, she moved the night shift into the hills, into old mines and tunnels. Workers grumbled about the cold and the long walk. Colville walked it with them, every night for a month.',
   'The factories in the hills never stopped. By spring, the nation was building more than before the raids. Colville still walks the tunnels sometimes, just to listen.']}},
  scientist:{bio:'A scientist who thinks in waves, radio and the spaces between.',story:{t:'Signals in the Dark',p:[
   'Dr. Lindqvist listens to static. Most people hear noise. Lindqvist hears patterns: the hum of an engine, the rhythm of a radio operator, the gap where a message should be.',
   'Her small team broke three enemy codes in one winter, working in a cold attic above a bakery. She insisted on the bakery. She said warm bread helped her think.',
   'The generals never quite understood what she did. They only knew that, after Lindqvist moved into the attic, the enemy always seemed to arrive exactly where the guns were already waiting.']}},
  diplomat:{bio:'An envoy who can find common ground on any battlefield.',story:{t:'The Christmas Line',p:[
   'Envoy Marchetti has a habit of turning up where nobody expects a diplomat: in trenches, at field kitchens, next to burned-out trucks. He says peace has to be made where the war is.',
   'One winter he crossed a frozen no-man\'s-land with a white flag and a basket of oranges. He came back with a three-day ceasefire to collect the wounded on both sides.',
   'The ceasefire held. Three days became a week. The week became a conversation, and the conversation became a treaty. Marchetti still keeps the empty basket in his office.']}},
  spymaster:{bio:'A spymaster who trusts no one and remembers everyone.',story:{t:'The Chess Game',p:[
   'Spymaster Orlov plays chess by post with six people in six different countries. None of them know each other. All of them, in their own way, work for him.',
   'Each move hides a message. A knight to F3 might mean a train schedule. A pawn sacrifice might mean a new radar station. Orlov has never lost a game, and has never written down a single secret.',
   'Rival agencies once intercepted his letters for a whole year. Their best analysts studied every move. In the end, they concluded only that Orlov played a very aggressive Sicilian defence.']}}},
 paper:{name:'The Ironfront Dispatch',motto:'From the front, every turn',issue:'Dispatch No. 1 · Before the first season',
  lead:{h:'Fronts open across the continent',sub:'Every nation turns toward the Capital Sectors',p:[
   'Radio stations across the map broadcast the same news: the fronts are moving. Invented nations with old grudges have mobilised, and the roads are full of trucks, tanks and marching columns.',
   'At the centre of every plan lie the three Capital Sectors. Whoever holds two of them with a GHQ Bunker for 12 turns decides how the war ends. Staff officers are already drawing arrows toward it.']},
  items:[
   {h:'Fuel rationing begins in the western sectors',p:'Depots report long queues. Commanders are advised to plan short supply lines, or plan to walk.'},
   {h:'Bridges become the most valuable ground on the map',p:'Engineers report that every crossing over the main rivers is now guarded. Sappers are in high demand.'},
   {h:'Letter from a medic',p:'"We set up the tents in a barn near the front. Every soldier we patch up goes back to his unit. Build hospitals, commanders. They win more battles than you think."'},
   {h:'Weather',p:'Fog in the river valleys at dawn, good for crossings. Clear by noon, good for the air forces.'}]}
}};
/* Rivals and famous places (added 10 Nov 2026). Fiction: invented nations and people. */
(function(L){
L.ts.rivals=[
 {n:'The Obsidian Accord',tag:'OBS',flag:'r/ts-r1-flag.jpg',lead:'r/ts-r1-lead.jpg',who:'Marshal Teren Kaito',p:'A tight bloc of technocracies that believes the Nexus belongs to whoever understands it best. They research first and strike late, and when they strike, it is with Quantum Hackers and Ghost Squadrons nobody saw coming.',style:'Patient, secretive, dangerous late in the season'},
 {n:'The Azure Phoenix Union',tag:'APU',flag:'r/ts-r2-flag.jpg',lead:'r/ts-r2-lead.jpg',who:'Chancellor Amara Osei',p:'Born from three small coastal states that refused to be swallowed. The Union rises again every time it is knocked down, and its Chancellor never forgets who did the knocking.',style:'Defensive, loyal to allies, slow to forgive'},
 {n:'The Red Vanguard',tag:'RVG',flag:'r/ts-r3-flag.jpg',p:'Loud, fast and always first across the border. The Vanguard wins early and often burns out by mid-season. Hold the line against them and they usually break themselves.',style:'Early aggression'},
 {n:'The Ashen Coalition',tag:'ASH',flag:'r/ts-r4-flag.jpg',p:'What is left of nations that lost a war and joined together to survive. They trade hard, fight dirty and remember every border they once had.',style:'Opportunists, raiders'}];
L.ts.places=[
 {n:'The Nexus',img:'p/ts-p1.jpg',p:'The sealed heart of the world, where a spire of light rises from a city of data. Whoever builds the Command Center here and holds it to the end of the season decides what comes next.'},
 {n:'The Continental Grid',img:'p/ts-p2.jpg',p:'A whole continent seen from orbit, lit by cities and power lines. Rich, crowded and hard to defend, it changes hands more often than any other theater.'},
 {n:'Ironhaven',img:'p/ts-p3.jpg',p:'Chimneys, steel mills and endless smoke. Ironhaven builds the tanks of half the world, and every alliance wants it on their side or in ruins.'},
 {n:'The Southern Command',img:'p/ts-p4.jpg',p:'A vast continent with one fortified base at its centre. Whoever controls it controls the roads between three theaters.'},
 {n:'The Iron Archipelago',img:'p/ts-p5.jpg',p:'Green islands with fortress walls and hidden harbours. Slow to take, nearly impossible to starve, and a favourite hiding place for fleets.'}];
L.ro.rivals=[
 {n:'Regnum Aquilae',tag:'AQL',flag:'r/ro-r1-flag.jpg',lead:'r/ro-r1-lead.jpg',who:'Rex Marcus Severanus',p:'The Kingdom of the Eagle claims to be the true heir of the old empire. Its king is a soldier first and a politician never, and his legions march as if Roma already belongs to them.',style:'Proud, aggressive, strong infantry'},
 {n:'Res Publica Lupina',tag:'LUP',flag:'r/ro-r2-flag.jpg',lead:'r/ro-r2-lead.jpg',who:'Consul Livia Aurelia',p:'The Wolf Republic is ruled by its senate and spoken for by its sharpest consul. Livia Aurelia wins more with letters and marriages than with swords, and keeps the swords for the moments that count.',style:'Diplomats, spies, deadly alliances'},
 {n:'The Old Guard of the Capitol',tag:'CAP',flag:'r/ro-r3-flag.jpg',p:'Veterans and noble families who swore to protect the city, whoever rules it. They rarely attack, but anyone who marches on Roma meets them first.',style:'Defenders of Roma'}];
L.ro.places=[
 {n:'Roma',img:'p/ro-p1.jpg',p:'Temples, forums and seven hills. The city has seen kings, consuls and emperors come and go. Raise the Imperial Palace here and keep it, and the season is yours.'},
 {n:'Portus Fortis',img:'p/ro-p2.jpg',p:'A walled town on a rocky coast, guarding the sea road to the west. Grain ships stop here, and so do invasions.'},
 {n:'Aegyptus',img:'p/ro-p3.jpg',p:'The temples along the Nile feed half the world with their grain. Lose Aegyptus and your cities go hungry within a season.'},
 {n:'Achaea',img:'p/ro-p4.jpg',p:'Mountains, islands and old cities full of scholars. Hard to conquer, harder to rule, and the source of many of the world\'s best ideas.'}];
L.if.rivals=[
 {n:'The Federated Republic of Vallmark',tag:'VLM',flag:'r/if-r1-flag.jpg',lead:'r/if-r1-lead.jpg',who:'Marshal Edmund Kessler',p:'A large republic with a big army and a careful marshal. Kessler never attacks without three plans and a full supply depot behind him, which makes him slow, and almost impossible to surprise.',style:'Methodical, strong artillery'},
 {n:'The Northern Commonwealth of Ostra',tag:'OST',flag:'r/if-r2-flag.jpg',lead:'r/if-r2-lead.jpg',who:'Field Marshal Ren Arashi',p:'A cold, disciplined commonwealth of forests and fortresses. Its field marshal is a master of the night attack and the sudden river crossing.',style:'Night raids, fast crossings'}];
L.if.places=[
 {n:'The Cliff Coast',img:'p/if-p1.jpg',p:'Beaches under high cliffs, watched by bunkers and gun pits. Every landing here is a gamble with the tide and the weather.'},
 {n:'The Danube Front',img:'p/if-p2.jpg',p:'A great river, a burning town and a single bridge still standing. Whoever holds the crossing decides where the war goes next.'},
 {n:'Burgwald Castle',img:'p/if-p3.jpg',p:'An old castle in a dark forest, turned into a headquarters. Its walls were built for arrows, but its cellars are perfect for radios and maps.'},
 {n:'Fort Grauwald',img:'p/if-p4.jpg',p:'A star-shaped fortress deep in the woods. Armies have tried to go around it for three hundred years. Most of them regretted it.'}];
})(window.PT_LORE);
/* More rivals, places, card backs and press archive (added 10 Nov 2026). */
(function(L){
L.ts.rivals.push(
 {n:'The Violet Syndicate',tag:'VIO',flag:'r/ts-r5-flag.jpg',p:'Bankers, brokers and very quiet bodyguards. The Syndicate owns a piece of almost every market on the map and lends money to both sides of most wars.',style:'Traders, kingmakers'},
 {n:'The Teal Ascendancy',tag:'TEA',flag:'r/ts-r6-flag.jpg',p:'A young nation of engineers and drone pilots. It grows fast, takes risks and has a habit of turning up where nobody expected it.',style:'Fast growth, swarm tactics'});
L.ts.places.push(
 {n:'The Deep Mines',img:'p/ts-p6.jpg',p:'A scar in the earth, kilometres wide. Steel and rare metals come out of it day and night, and every nation within reach wants a share.'},
 {n:'The Drowned Delta',img:'p/ts-p7.jpg',p:'A river city half under water, rebuilt on stilts and bridges. Its harbours never close, whatever the weather or the war.'},
 {n:'The Broken Capital',img:'p/ts-p8.jpg',p:'Once the seat of a great government, now a city of empty ministries and full black markets. Whoever holds it gains prestige, and a lot of problems.'});
L.ro.rivals.push(
 {n:'The Bull Legions of Hispania',tag:'TAU',flag:'r/ro-r4-flag.jpg',p:'Hard men from hard mountains, who fight under a green banner with a charging bull. They do not win often, but they never stop coming.',style:'Stubborn, mountain fighters'},
 {n:'Gens Taurina',tag:'GTA',flag:'r/ro-r5-flag.jpg',p:'A rich old family with a private army and a red bull banner. They back whoever is winning, until the moment they back someone else.',style:'Rich, unpredictable allies'});
L.ro.places.push(
 {n:'Alexandria',img:'p/ro-p5.jpg',p:'The great city at the mouth of the Nile, with its harbour, library and pyramids on the horizon. Grain, gold and knowledge all pass through here.'},
 {n:'Athenae',img:'p/ro-p6.jpg',p:'Marble temples on a hill above the sea. Athenae has more philosophers than soldiers, and its academies are worth more than its walls.'},
 {n:'The Limes',img:'p/ro-p7.jpg',p:'A wooden wall through the dark northern forests, guarded by watchtowers and tired legionaries. Beyond it, the tribes are always watching.'},
 {n:'Sicilia',img:'p/ro-p8.jpg',p:'Golden fields, rocky coasts and a temple on every headland. The island feeds Roma, and whoever holds it can starve the city.'});
L.if.rivals.push(
 {n:'The Grey Shield Union',tag:'GSU',flag:'r/if-r3-flag.jpg',p:'A union of small border states behind one grey banner. They dig in, hold the line and make every attacker pay for each field.',style:'Defensive, fortifications'});
L.if.places.push(
 {n:'The Old Town',img:'p/if-p5.jpg',p:'A city hall with a clock tower, cobbled squares and empty windows. The front has passed through three times, and the town still stands.'},
 {n:'The Ardenwald',img:'p/if-p6.jpg',p:'Endless forest, old ruins and narrow roads. Armies vanish in here for days, and some of them come out where nobody expected them.'});
L.ts.back='back-ts.jpg';L.ro.back='back-ro.jpg';L.if.back='back-if.jpg';
L.ts.archive=[{img:'n/ts-n1.jpg',t:'An early edition from Nexus City'}];
L.ro.archive=[{img:'n/ro-n1.jpg',t:'From the northern front'},{img:'n/ro-n2.jpg',t:'Acta Diurna: the harbour of Ostia'},{img:'n/ro-n3.jpg',t:'Acta Diurna: Roma Aeterna'}];
L.if.archive=[];
})(window.PT_LORE);
/* History before Season 1, and unit tips (added 10 Nov 2026). Fiction. */
(function(L){
L.ts.timeline=[
 {y:'The last summer',t:'The old order cracks',p:'Markets crash, alliances dissolve and governments stop answering the phone. Within a month, the map that everyone knew no longer exists.',img:'ts-hero.jpg'},
 {y:'Day 1',t:'Hundreds of new flags',p:'Regions declare themselves nations overnight. Some are run by generals, some by engineers, some by whoever had the keys to the radio station.',img:'r/ts-r4-flag.jpg'},
 {y:'Day 9',t:'The Nexus goes dark',p:'At the heart of the world, the great data city seals itself behind a wall of light. Nobody knows who closed it. Everybody wants to open it.',img:'p/ts-p1.jpg'},
 {y:'Day 30',t:'The Red Vanguard crosses first',p:'The first war of the new age lasts eleven days. The Vanguard wins three regions and loses half its tanks, and every other nation takes notes.',img:'r/ts-r3-flag.jpg'},
 {y:'Day 47',t:'Three coasts refuse to fall',p:'Three small coastal states sign a pact in a harbour office and call themselves the Azure Phoenix Union. Their first law: no member is ever left alone.',img:'r/ts-r2-flag.jpg'},
 {y:'Day 80',t:'Ironhaven never stops',p:'The steel city builds tanks for anyone who pays. By winter, half the armies on the map roll on Ironhaven tracks.',img:'p/ts-p3.jpg'},
 {y:'Day 112',t:'The Obsidian Accord is born',p:'A quiet bloc of technocracies forms around one idea: the Nexus belongs to whoever understands it. They build laboratories while others build barracks.',img:'r/ts-r1-flag.jpg'},
 {y:'Day 150',t:'The Deep Mines open',p:'A crater kilometres wide begins to pour out steel and rare metals. Within a week, three nations claim it. Within a month, two of them are gone.',img:'p/ts-p6.jpg'},
 {y:'Season 1',t:'The race for the Nexus begins',p:'The wall of light around the Nexus flickers. Whoever builds the Command Center there and holds it for 12 turns writes the next chapter. Your nation is one of hundreds. Make it count.',img:'ts-map.jpg'}];
L.ro.timeline=[
 {y:'The old days',t:'One empire, one road',p:'For centuries, every road led to Roma, and every province paid its tribute. Then the money stopped, and the legions stopped being paid.',img:'p/ro-p1.jpg'},
 {y:'The year of four kings',t:'Governors become kings',p:'Provincial governors keep the taxes for themselves and crown their own heads. In a single year, the empire becomes a hundred kingdoms.',img:'ro-hero.jpg'},
 {y:'Spring',t:'The Limes is left empty',p:'The garrisons along the northern wall march home to fight for their new kings. Beyond the wooden wall, the tribes notice.',img:'p/ro-p7.jpg'},
 {y:'Summer',t:'The Eagle claims the throne',p:'King Marcus Severanus raises the blue eagle banner and declares Regnum Aquilae the true heir of the empire. His neighbours declare war within the week.',img:'r/ro-r1-flag.jpg'},
 {y:'Summer',t:'The Wolf Republic answers',p:'The senate of Res Publica Lupina refuses to bow to any king. Consul Livia Aurelia wins her first war without a battle, with three letters and one wedding.',img:'r/ro-r2-flag.jpg'},
 {y:'Autumn',t:'Grain ships from Alexandria',p:'Whoever controls the Nile controls the bread of the world. The harbour of Alexandria fills with warships pretending to be merchants.',img:'p/ro-p5.jpg'},
 {y:'Autumn',t:'The Old Guard swears its oath',p:'Veterans and noble families gather on the Capitol and swear to defend Roma, whoever rules it. Their red eagle has never fallen.',img:'r/ro-r3-flag.jpg'},
 {y:'Winter',t:'The Bull Legions come down',p:'From the mountains of Hispania, hard men under a green bull banner march east. They lose often, and they never go home.',img:'r/ro-r4-flag.jpg'},
 {y:'Anno I',t:'Roma stands unclaimed',p:'The city waits. Whoever raises the Imperial Palace and holds it for 12 turns will be remembered for a thousand years. Your people are one of hundreds. March.',img:'ro-map.jpg'}];
L.if.timeline=[
 {y:'Winter 1943',t:'The old treaties burn',p:'One after another, the treaties that kept the peace are torn up. Invented nations with old grudges begin to fill their depots.',img:'if-hero.jpg'},
 {y:'January',t:'Vallmark mobilises',p:'The Federated Republic of Vallmark calls up three classes of reservists. Marshal Kessler orders fuel, shells and patience, in that order.',img:'r/if-r1-flag.jpg'},
 {y:'February',t:'The night crossing',p:'Ostra\'s Field Marshal Arashi takes a river town in a single night, without firing a gun. Every staff college on the continent studies it by spring.',img:'r/if-r2-flag.jpg'},
 {y:'March',t:'The Grey Shield Union',p:'Small border states stand behind one grey banner. They have few tanks and many shovels, and they mean to use both.',img:'r/if-r3-flag.jpg'},
 {y:'April',t:'The Cliff Coast is fortified',p:'Bunkers and gun pits appear along the high cliffs. Every beach below becomes a gamble with the tide.',img:'p/if-p1.jpg'},
 {y:'May',t:'Burgwald becomes a headquarters',p:'An old castle in a dark forest fills with radios and maps. Its walls were built for arrows. Its cellars are perfect for secrets.',img:'p/if-p3.jpg'},
 {y:'June',t:'The Danube Front opens',p:'A great river, a burning town and one bridge still standing. Both sides know that whoever holds the crossing decides where the war goes next.',img:'p/if-p2.jpg'},
 {y:'Summer',t:'The Capital Sectors are named',p:'Three sectors on the map become the targets of every plan. Hold two of them with a GHQ Bunker for 12 turns, and the war is yours.',img:'if-map.jpg'},
 {y:'1944',t:'Season 1',p:'The fronts are drawn, the depots are full and the radios are warm. Your nation is one of many. Give the first order.',img:'p/if-p5.jpg'}];
L.tips={
 inf:'Cheap and sturdy. Keep a solid core at home, so a surprise attack never finds an empty region.',
 recon:'Send them before every strike. Knowing what waits on the other side is worth more than ten extra tanks.',
 armor:'Your breakthrough unit. Strong on open ground, slow in mountains and cities.',
 arty:'Huge attack, weak defence. Always cover them with infantry.',
 cyber:'They win without fighting. Use them to blind a target before your army moves in.',
 support:'They keep a big army in the field. Add some as soon as your army starts to grow.',
 airdef:'A defensive unit. Place them where enemy strikes hurt you most.',
 sam:'A defensive unit. Place them where enemy strikes hurt you most.',
 air:'Fast and hard-hitting. Strike deep, then pull back before the enemy answers.'};
})(window.PT_LORE);
