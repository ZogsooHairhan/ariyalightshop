/* ============================================================
   БҮТЭЭГДЭХҮҮНИЙГ ЭНДЭЭС ЗАСНА
   img: images/ хавтсанд зургаа хийж нэрийг нь тааруулна.
   price: "" хоосон бол "Лавлах" гэж харагдана. Жишээ: "450,000₮"
   ============================================================ */
const PRODUCTS = [
  {cat:"chandelier", name:"Crystal Flower Chandelier", sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлттэй уур амьсгал.", img:"images/crystal-flowerchandlier.jpg", color:"Алтлаг", size:"", power:"", price:""},
  {cat:"chandelier", name:"Crystal Oval",   sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-oval.jpg", color:"Мөнгөлөг / тунгалаг", size:"", power:"", price:""},
  {cat:"chandelier", name:"Crystal Curve",  sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-curve.jpg", color:"Мөнгөлөг / Алтлаг", size:"120 см (1.2 метр)", power:"", price:""},
  {cat:"chandelier", name:"Crystal Triple Ring", sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-triple-ring.jpg", color:"Мөнгөлөг / Алтлаг", size:"", power:"", price:""},
  {cat:"chandelier", name:"Crystal Flower Linear", sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлттэй уур амьсгал.", img:"images/crystal-flowerLinear.jpg", color:"Алтлаг", size:"", power:"", price:""},
  {cat:"chandelier", name:"Crystal Ring",   sub:"Chandelier", desc:"Орон зайг илүү тансаг, дулаан уур амьсгалтай болгоно.", img:"images/crystal-ring-chandelier.jpg", color:"Алтлаг", size:"", power:"", price:""},
  {cat:"chandelier", name:"Crystal Wave",   sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-wave.jpg", color:"Алтлаг / Хар", size:"", power:"", price:""},
  {cat:"chandelier", name:"Gold Crystal",   sub:"Linear Chandelier", desc:"Алтлаг металл ба болор дусал бүхий тансаг шугаман лаа.", img:"images/gold-crystal-linear.jpg", color:"Алтлаг", size:"90 × 50 см", power:"", price:""},
  {cat:"chandelier", name:"Crystal Frower",   sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-flower.jpg", color:"Алтлаг / Хар", size:"", power:"", price:""},
   {cat:"chandelier", name:"Black Gold",   sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/BlackGold.jpg", color:"Алтлаг / Хар", size:"", power:"", price:""},
   {cat:"chandelier", name:"Crystal Bloom",   sub:"Chandelier", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystalbloom.jpg", color:"Алтлаг / Хар", size:"", power:"", price:""},


  {cat:"pendant", name:"Crystal Linear", sub:"Luxury Pendant Light", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-linear.jpg", color:"Мөнгөлөг / тунгалаг", size:"1 метр (100 см)", power:"", price:""},
  {cat:"pendant", name:"Crystal Ring",   sub:"Pendant Light", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-ring-pendant.jpg", color:"Мөнгөлөг", size:"60 см", power:"", price:""},
  {cat:"pendant", name:"Crystal Loop",   sub:"Luxury Pendant Light", desc:"Орчин үеийн тансаг өнгө, гэрэлтэй уур амьсгал.", img:"images/crystal-loop.jpg", color:"Алтлаг", size:"", power:"", price:""},
  {cat:"pendant", name:"Crystal Loop",   sub:"Ring Pendant Light", desc:"Орон зайг илүү тансаг, дулаан уур амьсгалтай болгоно.", img:"images/crystal-loop-ring.jpg", color:"Алтлаг", size:"50 см", power:"", price:""},

  {cat:"ceiling", name:"Crystal Trio", sub:"Ceiling Light", desc:"Жижиг өрөөнд төгс тохирно.", img:"images/crystal-trio.jpg", color:"Хар / Алтлаг", size:"3 дугуй", power:"", price:""},
  {cat:"ceiling", name:"Crystal Halo", sub:"Ceiling Light", desc:"Гэрт тань гэрэл гэгээ, тансаг уур амьсгал.", img:"images/crystal-halo.jpg", color:"Цагаан", size:"Ø 50 см", power:"20W", price:""},
  {cat:"ceiling", name:"Speaker Light", sub:"Modern Ceiling Light", desc:"Гэрэл, хөгжмийн төгс хослол. Bluetooth чанга яригчтай.", img:"images/speaker-light.jpg", color:"Мөнгөлөг / Алтлаг", size:"Жижиг өрөөнд тохиромжтой", power:"", price:""},

  {cat:"kids", name:"Space Rocket", sub:"Kids' LED Ceiling Light", desc:"Бяцхан үрсийн өрөөнд гэрэл гэгээ нэмье.", img:"images/space-rocket.jpg", color:"Цагаан / Цэнхэр", size:"", power:"", price:""},
  {cat:"kids", name:"Space Dream", sub:"Kids' LED Ceiling Light", desc:"Бяцхан үрсийн өрөөнд гэрэл гэгээ нэмье.", img:"images/space-dream.jpg", color:"Цагаан", size:"", power:"", price:""},
  {cat:"kids", name:"Winter Dream", sub:"Kids' LED Ceiling Light", desc:"Бяцхан үрсийн өрөөнд дулаан гэрэл, аз жаргал нэмье.", img:"images/winter-dream.jpg", color:"Цагаан / Нил ягаан", size:"", power:"", price:""},
  {cat:"kids", name:"Dreamy Bunny", sub:"Kids' LED Ceiling Light", desc:"Бяцхан үрсийн өрөөнд дулаан гэрэл, аз жаргал нэмье.", img:"images/dreamy-bunny.jpg", color:"Ягаан / Цагаан", size:"", power:"", price:""}
];
