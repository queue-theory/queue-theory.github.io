// Text-size picker labels per language, keyed by Lily's DEFAULT_SIZES slugs
// (largest … smallest). A language without an entry falls back to English.
const K = ['largest', 'larger', 'large', 'normal', 'small', 'smaller', 'smallest'];
/** @param {string} s seven labels separated by "|" */
const L = (s) => Object.fromEntries(s.split('|').map((v, i) => [K[i], v]));

/** @type {Record<string, Record<string, string>>} */
export const SIZE_LABELS = {
	en: L('Largest|Larger|Large|Normal|Small|Smaller|Smallest'),
	ar: L('الأكبر|أكبر|كبير|عادي|صغير|أصغر|الأصغر'),
	bn: L('সবচেয়ে বড়|আরও বড়|বড়|সাধারণ|ছোট|আরও ছোট|সবচেয়ে ছোট'),
	cy: L('Mwyaf|Mwy|Mawr|Arferol|Bach|Llai|Lleiaf'),
	da: L('Størst|Større|Stor|Normal|Lille|Mindre|Mindst'),
	de: L('Am größten|Größer|Groß|Normal|Klein|Kleiner|Am kleinsten'),
	es: L('Máximo|Más grande|Grande|Normal|Pequeño|Más pequeño|Mínimo'),
	fa: L('بزرگ‌ترین|بزرگ‌تر|بزرگ|عادی|کوچک|کوچک‌تر|کوچک‌ترین'),
	fi: L('Suurin|Suurempi|Suuri|Normaali|Pieni|Pienempi|Pienin'),
	fr: L('Très grand|Plus grand|Grand|Normal|Petit|Plus petit|Très petit'),
	ga: L('Is mó|Níos mó|Mór|Gnáth|Beag|Níos lú|Is lú'),
	gd: L('As motha|Nas motha|Mòr|Àbhaisteach|Beag|Nas lugha|As lugha'),
	gu: L('સૌથી મોટું|વધુ મોટું|મોટું|સામાન્ય|નાનું|વધુ નાનું|સૌથી નાનું'),
	ha: L('Mafi girma|Ya fi girma|Babba|Na al\'ada|Ƙarami|Ya fi ƙanƙanta|Mafi ƙanƙanta'),
	he: L('הגדול ביותר|גדול יותר|גדול|רגיל|קטן|קטן יותר|הקטן ביותר'),
	hi: L('सबसे बड़ा|और बड़ा|बड़ा|सामान्य|छोटा|और छोटा|सबसे छोटा'),
	hr: L('Najveće|Veće|Veliko|Normalno|Malo|Manje|Najmanje'),
	hu: L('Legnagyobb|Nagyobb|Nagy|Normál|Kicsi|Kisebb|Legkisebb'),
	id: L('Terbesar|Lebih besar|Besar|Normal|Kecil|Lebih kecil|Terkecil'),
	is: L('Stærst|Stærri|Stór|Venjuleg|Lítil|Minni|Minnst'),
	it: L('Massimo|Più grande|Grande|Normale|Piccolo|Più piccolo|Minimo'),
	ja: L('最大|より大きい|大|標準|小|より小さい|最小'),
	jv: L('Paling ageng|Langkung ageng|Ageng|Limrah|Alit|Langkung alit|Paling alit'),
	km: L('ធំបំផុត|ធំជាង|ធំ|ធម្មតា|តូច|តូចជាង|តូចបំផុត'),
	kn: L('ಅತಿ ದೊಡ್ಡದು|ಇನ್ನೂ ದೊಡ್ಡದು|ದೊಡ್ಡದು|ಸಾಮಾನ್ಯ|ಚಿಕ್ಕದು|ಇನ್ನೂ ಚಿಕ್ಕದು|ಅತಿ ಚಿಕ್ಕದು'),
	ko: L('가장 크게|더 크게|크게|보통|작게|더 작게|가장 작게'),
	kw: L('An brassa|Brassa|Bras|Usadow|Byghan|Le|An lyha'),
	lb: L('Am gréissten|Méi grouss|Grouss|Normal|Kleng|Méi kleng|Am klengsten'),
	lo: L('ໃຫຍ່ທີ່ສຸດ|ໃຫຍ່ກວ່າ|ໃຫຍ່|ປົກກະຕິ|ນ້ອຍ|ນ້ອຍກວ່າ|ນ້ອຍທີ່ສຸດ'),
	lt: L('Didžiausias|Didesnis|Didelis|Įprastas|Mažas|Mažesnis|Mažiausias'),
	lv: L('Vislielākais|Lielāks|Liels|Parasts|Mazs|Mazāks|Vismazākais'),
	mr: L('सर्वात मोठा|अधिक मोठा|मोठा|सामान्य|लहान|अधिक लहान|सर्वात लहान'),
	ms: L('Paling besar|Lebih besar|Besar|Biasa|Kecil|Lebih kecil|Paling kecil'),
	mt: L('L-akbar|Akbar|Kbir|Normali|Żgħir|Iżgħar|L-iżgħar'),
	nb: L('Størst|Større|Stor|Normal|Liten|Mindre|Minst'),
	nl: L('Grootst|Groter|Groot|Normaal|Klein|Kleiner|Kleinst'),
	pa: L('ਸਭ ਤੋਂ ਵੱਡਾ|ਹੋਰ ਵੱਡਾ|ਵੱਡਾ|ਆਮ|ਛੋਟਾ|ਹੋਰ ਛੋਟਾ|ਸਭ ਤੋਂ ਛੋਟਾ'),
	pcm: L('Big pass all|Bigger|Big|Normal|Small|Smaller|Small pass all'),
	pl: L('Największy|Większy|Duży|Normalny|Mały|Mniejszy|Najmniejszy'),
	pt: L('Máximo|Maior|Grande|Normal|Pequeno|Menor|Mínimo'),
	ro: L('Cel mai mare|Mai mare|Mare|Normal|Mic|Mai mic|Cel mai mic'),
	ru: L('Самый крупный|Крупнее|Крупный|Обычный|Мелкий|Мельче|Самый мелкий'),
	sco: L('Biggest|Bigger|Big|Normal|Smaw|Smawer|Smawest'),
	sk: L('Najväčšie|Väčšie|Veľké|Normálne|Malé|Menšie|Najmenšie'),
	sl: L('Največja|Večja|Velika|Običajna|Majhna|Manjša|Najmanjša'),
	sv: L('Störst|Större|Stor|Normal|Liten|Mindre|Minst'),
	sw: L('Kubwa zaidi kabisa|Kubwa zaidi|Kubwa|Kawaida|Ndogo|Ndogo zaidi|Ndogo zaidi kabisa'),
	ta: L('மிகப் பெரியது|இன்னும் பெரியது|பெரியது|இயல்பானது|சிறியது|இன்னும் சிறியது|மிகச் சிறியது'),
	te: L('అతి పెద్దది|మరింత పెద్దది|పెద్దది|సాధారణం|చిన్నది|మరింత చిన్నది|అతి చిన్నది'),
	th: L('ใหญ่ที่สุด|ใหญ่กว่า|ใหญ่|ปกติ|เล็ก|เล็กกว่า|เล็กที่สุด'),
	ur: L('سب سے بڑا|مزید بڑا|بڑا|عام|چھوٹا|مزید چھوٹا|سب سے چھوٹا'),
	vi: L('Lớn nhất|Lớn hơn|Lớn|Bình thường|Nhỏ|Nhỏ hơn|Nhỏ nhất'),
	zh: L('最大|更大|大|标准|小|更小|最小')
};

/** @type {Record<string, Record<string, string>>} */
export const SIZE_LABEL_OVERRIDES = {
	'zh-tw': L('最大|更大|大|標準|小|更小|最小')
};
