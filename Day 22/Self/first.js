const quotes = [
  "खुद पर भरोसा रखो, the best is yet to come.",
  "Dream big, क्योंकि छोटे सपने motivation नहीं देते।",
  "Life tough है, but you are tougher.",
  "मेहनत इतनी करो कि success खुद तुम्हारे पास आए।",
  "Stay focused, distractions हर जगह मिलेंगे।",
  "जो आज struggle है, वही कल strength बनेगा।",
  "Believe in yourself, क्योंकि तुम capable हो।",
  "हर दिन एक new opportunity है।",
  "Work hard, सपने अपने आप पूरे नहीं होते।",
  "सफलता उन्हीं को मिलती है जो हार नहीं मानते।",

  "Keep going, मंज़िल ज़रूर मिलेगी।",
  "Life is short, इसलिए बड़े सपने देखो।",
  "खामोशी से मेहनत करो, success शोर मचाएगी।",
  "Fear temporary है, regret permanent।",
  "अपने goals पर focus करो।",
  "Dreams don't work unless you do.",
  "हर मुश्किल तुम्हें और मजबूत बनाती है।",
  "Be positive, अच्छे दिन आएंगे।",
  "Success patience और hard work मांगती है।",
  "तुम्हारा future आज की मेहनत पर depend करता है।",

  "Never stop learning, growth वहीं से शुरू होती है।",
  "जो खुद पर जीत जाता है, वही असली winner है।",
  "Stay humble, but know your worth.",
  "ज़िंदगी आसान नहीं, लेकिन खूबसूरत ज़रूर है।",
  "Work until you become proud of yourself.",
  "हर दिन खुद का बेहतर version बनो।",
  "Confidence सबसे बड़ा weapon है।",
  "Success एक journey है, destination नहीं।",
  "खुद को underestimate मत करो।",
  "Small steps भी progress होते हैं।",

  "अपनी कहानी खुद लिखो।",
  "Believe it, achieve it.",
  "मेहनत का कोई substitute नहीं होता।",
  "Life में excuses नहीं, results चाहिए।",
  "हर setback comeback की तैयारी है।",
  "Stay strong, better days are coming.",
  "सपने वो नहीं जो सोते समय आते हैं।",
  "Discipline beats motivation.",
  "जो रुक गया, वो चूक गया।",
  "Your mindset creates your future.",

  "असंभव सिर्फ एक सोच है।",
  "Hard work never goes out of fashion.",
  "अपने डर से आगे बढ़ो।",
  "Success earned होती है, gifted नहीं।",
  "Good things take time.",
  "हर दिन एक नई शुरुआत है।",
  "Focus on progress, not perfection.",
  "ज़िंदगी में सीखना कभी मत छोड़ो।",
  "Your only limit is your mind.",
  "सपनों को हकीकत बनाने का समय आज है।",

  "Keep moving forward.",
  "खुद की race दौड़ो।",
  "Great things never come from comfort zones.",
  "हर चुनौती एक अवसर है।",
  "Stay patient and trust the process.",
  "मेहनत कभी बेकार नहीं जाती।",
  "Work smart, work hard.",
  "अपनी energy सही जगह invest करो।",
  "Winners focus on winning.",
  "सफलता की चाबी consistency है।",

  "Believe in your journey.",
  "जो आज दर्द है, कल ताकत बनेगा।",
  "Success starts with self-belief.",
  "अपना best देना कभी मत छोड़ो।",
  "Every day is a fresh start.",
  "सपनों को deadline दो।",
  "Stay hungry, stay focused.",
  "तुम जितना सोचते हो उससे ज्यादा कर सकते हो।",
  "Work in silence, shine later.",
  "खुद से competition रखो।",

  "Your future is watching you.",
  "ज़िंदगी में risk लेना ज़रूरी है।",
  "Dream it. Plan it. Achieve it.",
  "हर सफलता की शुरुआत एक कदम से होती है।",
  "Be the reason someone smiles today.",
  "अपने आप पर विश्वास रखो।",
  "Success follows dedication.",
  "हर दिन कुछ नया सीखो।",
  "Stay real, stay kind.",
  "तुम्हारी मेहनत तुम्हारी पहचान बनेगी।",

  "Make yourself proud.",
  "सकारात्मक सोच बड़ा बदलाव लाती है।",
  "Never lose hope.",
  "जो मेहनत करता है वही चमकता है।",
  "Life rewards consistency.",
  "खुद को रोज़ बेहतर बनाओ।",
  "Success loves discipline.",
  "हर दिन एक नया मौका है।",
  "Be fearless in the pursuit of greatness.",
  "तुम्हारी कहानी अभी खत्म नहीं हुई है।",

  "Dreams need action.",
  "मेहनत ही सफलता का रास्ता है।",
  "Keep believing, keep growing.",
  "हर अंधेरी रात के बाद सुबह आती है।",
  "Your journey matters.",
  "खुद को कभी कम मत समझो।",
  "Stay focused on your purpose.",
  "सपनों के लिए लड़ना पड़ता है।",
  "Success begins today.",
  "तुम कर सकते हो, बस शुरू करो।"
];
// function generateQuote(){
// const element=document.querySelector("h3");
// let index=Math.floor(Math.random()*quotes.length);
//  element.innerHTML=quotes[index];
// }
// setInterval(generateQuote,300)
const button =document.querySelector("button");
button.addEventListener('click',()=>{
 
const element=document.querySelector("h3");
let index=Math.floor(Math.random()*quotes.length);
 element.innerHTML=quotes[index];
}
)