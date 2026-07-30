/**
 * =================================================================
 * MASTER GRAPHICAL CONTROLLER ENGINE FOR ADVANCED SHOE REVIEWS    
 * Save this file exactly as 'script.js'                           
 * =================================================================
 */


const productsData = {
    "nike-air": {
        title: "Nike Air Max 2026 Core Analysis",
        imageURL: "pic/https://unsplash.com",
        desc: "Engineered heavily for lifestyle aesthetics and high-impact structural heel dampening. Features an oversized protective pressurized chamber optimized for urban concrete shock dispersion. While phenomenal for walking, the weight penalty restrains high-velocity sprint performance.",
        // 💰 Price & Affiliate Routing Parameters
        oldPrice: "$180.00",
        currentPrice: "$149.99",
        amazonLink: "https://amazon.com",
        marketVerifyLink: "https://stockx.com",

        // 📊 6 PROS Linear Line Matrix Points (Out of 10)
        comfort: 9, 
        breathability: 8, 
        energyReturn: 7, 
        ankleStability: 9, 
        flexGroove: 6, 
        lacingLock: 8,
        
        // 🛑 6 CONS Linear Line Matrix Points (Out of 10)
        weight: 7, 
        breakInTime: 3, 
        retailPrice: 8, 
        wetSlippage: 4, 
        rubberScuff: 5, 
        dirtRetention: 6,
        
        overallScore: 84, // Verdict Big Circle
        fitPercent: "52%", 
        fitVerdict: "Fit Profile: True to Size. We recommend purchasing your exact standard measurement. Standard D-width mapping matches comfortably without compressing toe box areas.",
        useCase: "Best suited for flat concrete urban paths, daily lifestyle standing shifts, and lower-intensity fitness walking.",
        testerNotes: "\"The sheer heel support is unmatched for long standing hours. Our physical lab tests confirmed slight lateral roll under high athletic loads, confirming its true utility lies within casual and mid-tier cross-training frameworks rather than professional track running.\"",
        
        // ⚔️ Competitor Grid Array Block
        competitors: [
            { name: "Nike Air Max 2026 (This Shoe)", cushion: "Max Cushion (Air)", durability: "750 KM Tracked", weight: "Heavy (360g)", status: "Current Selection", isCurrent: true },
            { name: "Adidas Ultraboost Light", cushion: "High Rebound (Boost)", durability: "1100 KM Tracked", weight: "Light (290g)", status: "Better Speed", isCurrent: false },
            { name: "Asics Gel-Kayano 31", cushion: "Gel Support Matrix", durability: "1000 KM Tracked", weight: "Balanced (305g)", status: "Better Stability", isCurrent: false }
        ],
        
        // 🧪 Telemetry Radar Indexing 
        telemetry: { fatigueRate: 1.42, archDeflection: 1.10, creaseLimit: 140, saltResistance: 4.8, gripCoefficient: 82, resaleValue: 78 },

        // 🦶 Biomechanical Pressure Distribution Map Data
        pressureForefoot: 42,
        pressureMidfoot: 18,
        pressureHeel: 68,

        // 🏃‍♂️ Foam Responsiveness Phases
        energyInitial: "72%",
        energyMid: "64%",
        energyToe: "78%",

        // 🗺️ Outsole Terrain Adaptation (Out of 10)
        radarRoad: 9,
        radarTrack: 7,
        radarTrail: 3,
        radarGym: 8,

        // 📉 Foam Profile Needle Position (Percentage: 0% = Firm, 50% = Balanced, 100% = Plush)
        foamNeedleLeft: "82%", 
        foamDensityRating: "Max Plush Recovery Foam Core",

        // 🔥 Thermal Upper Vent Maps
        heatToebox: 85,
        heatMidfoot: 62,
        heatHeel: 45,

        // 🛡️ Wear-Tear Lab Simulation Percentages
        degOutsole: 35,
        degMidsole: 55,
        degUpper: 20
    },
    "adidas-ultra": {
        title: "Adidas Ultraboost Light Tech Specs",
        imageURL: "pic/https://unsplash.com",
        desc: "Built explicitly around high-rebound recovery foam frameworks. The light variant reduces massive energy bleed across extensive runs while optimizing soft foot striking. Midfoot cage compression properties remain tight but ease dynamically over mileage sequences.",
        
        oldPrice: "$200.00",
        currentPrice: "$179.95",
        amazonLink: "https://amazon.com",
        marketVerifyLink: "https://stockx.com",

        comfort: 10, breathability: 9, energyReturn: 9, ankleStability: 8, flexGroove: 8, lacingLock: 9,
        weight: 4, breakInTime: 6, retailPrice: 9, wetSlippage: 3, rubberScuff: 4, dirtRetention: 3,
        
        overallScore: 91, 
        fitPercent: "35%", 
        fitVerdict: "Fit Profile: Slightly Narrow Sock-Fit. Due to the targeted Primeknit midfoot pressure cage, users with flat feet or wider steps are advised to go up a half-size (+0.5).",
        useCase: "Highly optimized for marathon recovery pacing, long continuous road running, and neutral gait conditioning.",
        testerNotes: "\"The ventilation properties are state-of-the-art across high temperatures. Midfoot compression structural points run narrow directly out of the box but stabilize perfectly into custom sock geometries after a standard 10KM adaptive run break-in phase.\"",
        
        competitors: [
            { name: "Adidas Ultraboost Light (This Shoe)", cushion: "High Rebound (Boost)", durability: "1100 KM Tracked", weight: "Light (290g)", status: "Current Selection", isCurrent: true },
            { name: "Nike Air Max 2026", cushion: "Max Cushion (Air)", durability: "750 KM Tracked", weight: "Heavy (360g)", status: "Better Casual Wear", isCurrent: false },
            { name: "Saucony Triumph 22", cushion: "Max PB Cushioning", durability: "1200 KM Tracked", weight: "Plush (310g)", status: "Better Lifespan", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 0.95, archDeflection: 1.45, creaseLimit: 180, saltResistance: 4.9, gripCoefficient: 76, resaleValue: 65 },

        pressureForefoot: 65,
        pressureMidfoot: 35,
        pressureHeel: 40,

        energyInitial: "88%",
        energyMid: "80%",
        energyToe: "92%",

        radarRoad: 10,
        radarTrack: 9,
        radarTrail: 4,
        radarGym: 7,

        foamNeedleLeft: "48%", 
        foamDensityRating: "Perfect Balanced Energy Foam",

        heatToebox: 92,
        heatMidfoot: 78,
        heatHeel: 55,

        degOutsole: 22,
        degMidsole: 40,
        degUpper: 15
    },
    // 1. Pehle Shoe ki ID
   
    "puma-nitro": {
        title: "Puma Deviate Nitro 3 Performance Review",
        imageURL: "pic/https://example.com", // Aapki shoe picture ka link
        desc: "An incredible carbon-plated training shoe built for high-speed endurance runs and massive energy bounce.",
        
        // 💰 Prices
        oldPrice: "$160.00",
        currentPrice: "$139.99",
        amazonLink: "https://amazon.com",
        marketVerifyLink: "https://stockx.com",

        // 📊 Pros (Sirf Numbers likhein, text nahi)
        comfort: 8, 
        breathability: 9, 
        energyReturn: 10, // Max energy return
        ankleStability: 7, 
        flexGroove: 8, 
        lacingLock: 9,
        
        // 🛑 Cons (Sirf Numbers)
        weight: 3, // Bohot halka hai isliye con score kam hai
        breakInTime: 4, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 4, 
        dirtRetention: 2,
        
        overallScore: 89, // Big Circle Verdict score
        fitPercent: "50%", // Absolute exact center (True to size)
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        // ⚔️ Competitors Array Matrix
        competitors: [
            { name: "Puma Deviate Nitro 3", cushion: "Nitro Elite Foam", durability: "900 KM Tracked", weight: "Ultra Light (260g)", status: "Current Selection", isCurrent: true },
            { name: "Nike Vaporfly 3", cushion: "ZoomX Plate Foam", durability: "400 KM Tracked", weight: "Featherweight (200g)", status: "More Expensive", isCurrent: false }
        ],
        
        // 🧪 Telemetry
        telemetry: { fatigueRate: 0.62, archDeflection: 1.05, creaseLimit: 210, saltResistance: 4.7, gripCoefficient: 88, resaleValue: 70 },

        // 🦶 Pressure Map Loads
        pressureForefoot: 70,
        pressureMidfoot: 20,
        pressureHeel: 30,

        // 🏃‍♂️ Energy Return Phases Text
        energyInitial: "85%",
        energyMid: "78%",
        energyToe: "94%",

        // 🗺️ Terrain Adaptation
        radarRoad: 9,
        radarTrack: 10,
        radarTrail: 2,
        radarGym: 6,

        // 📉 Foam Density Profile
        foamNeedleLeft: "30%", // Shifting needle towards Firm/Racing zone
        foamDensityRating: "Responsive Nitro Racing Compound",

        // 🔥 Heat Ventilation
        heatToebox: 95,
        heatMidfoot: 82,
        heatHeel: 60,

        // 🛡️ Damage Simulation Forecasting
        degOutsole: 18,
        degMidsole: 30,
        degUpper: 12
    }, // <-- Agar iske baad koi aur shoe nahi hai, toh comma mat lagayein
 "Nike-ACG-Pegasus-Trail": {
        title: "Nike ACG Pegasus Trail",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342306/nike_acg_pegasus_trail_2_vvygaq.jpg", 
        desc: "Nike ACG Pegasus Trail hybrid outdoor training shoes standard model layout review. Product performance testing covers technical trail running, light hiking, and wet weather commuting. React cushioning delivers balanced shock absorption under rocky trail strike impacts. Upper mesh materials focus on water resistance and high durability value. Outsole design utilizes aggressive traction lugs for loose off-road surfaces. Midsole structures cater specifically to users prioritizing rugged stability over pure speed. Long-term tracking reveals specialized flexibility trade-offs across hard city pavements. This structural breakdown delivers verified lab metrics and real-world user feedback parameters.",
        
        oldPrice: "$155.00",
        currentPrice: "$155.00",
        amazonLink: "https://amazon.com",
        marketVerifyLink: "https://stockx.com",

        comfort: 9, 
        breathability: 6, 
        energyReturn: 7, 
        ankleStability: 9, 
        flexGroove: 6, 
        lacingLock: 8,
        
        weight: 3, 
        breakInTime: 4, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 4, 
        dirtRetention: 4,
        
        overallScore: 82, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "Nike ACG Pegasus Trail (This Shoe)", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Balanced (320g)", status: "Current Selection", isCurrent: true },
            { name: "Salomon Speedcross 6", cushion: "Firm Protection (EnergyCell)", durability: "850 KM Tracked", weight: "Light (298g)", status: "Better Mud Grip", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.15, archDeflection: 0.8, creaseLimit: 180, saltResistance: 4.9, gripCoefficient: 0.94, resaleValue: 82 },

        pressureForefoot: 70,
        pressureMidfoot: 20,
        pressureHeel: 30,

        energyInitial: "75%",
        energyMid: "78%",
        energyToe: "70%",

        radarRoad: 6,
        radarTrack: 5,
        radarTrail: 9,
        radarGym: 6,

        foamNeedleLeft: "30%", 
        foamDensityRating: "Responsive Nitro Racing Compound",

        heatToebox: 95,
        heatMidfoot: 82,
        heatHeel: 60,

        degOutsole: 18,
        degMidsole: 30,
        degUpper: 12
    }, // <-- Agar iske baad koi aur shoe nahi hai, toh comma mat lagayein
    "New-Balance-997H": {
        title: "New Balance Men's 997H V1 Classic Sneaker",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342277/new_balance_997_h_fvnmhw.jpg", 
        desc: "New Balance 997H heritage-inspired casual lifestyle sneakers standard model layout review. Product performance testing covers daily city walking, workplace standing shifts, and casual street wear. GCEVA injection-molded cushioning delivers lightweight shock absorption under standard heel strike impacts. Upper mesh panels focus on daily casual breathability and multi-textured lifestyle aesthetics. Outsole design utilizes mixed rubber traction pads for standard concrete urban environments. Midsole structures cater specifically to users prioritizing classic retro styling over technical athletic running parameters. Long-term tracking reveals ground-contact durability trade-offs across rough multi-terrain trails.",
        
        oldPrice: "$150.00",
        currentPrice: "$149.95",
        amazonLink: "https://amzn.to/4fRrWCn",
        marketVerifyLink: "https://amzn.to/4fRrWCn",

        comfort: 8, 
        breathability: 7, 
        energyReturn: 5, 
        ankleStability: 7, 
        flexGroove: 8, 
        lacingLock: 7,
        
        weight: 3, 
        breakInTime: 5, 
        retailPrice: 4, 
        wetSlippage: 6, 
        rubberScuff: 5, 
        dirtRetention: 6,
        
        overallScore: 76, 
        fitPercent: "45%", 
        fitVerdict: "Fit Profile: Slightly Narrow Forefoot. Fits snug near the toe panel.",
        useCase: "Best optimized for casual walking, daily lifestyle wear, and street fashion styling.",
        testerNotes: "\"The GCEVA midsole feels incredibly lightweight for all-day city walks. However, the retro lifestyle structure lacks the advanced technical impact bounce required for high-mileage road running.\"",
        
        competitors: [
            { name: "New Balance 997H (This Shoe)", cushion: "Light Foam (GCEVA)", durability: "650 KM Tracked", weight: "Lightweight (272g)", status: "Current Selection", isCurrent: true },
            { name: "New Balance 574", cushion: "Firm Support (ENCAP)", durability: "850 KM Tracked", weight: "Heavy (340g)", status: "Better Durability", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.65, archDeflection: 1.4, creaseLimit: 110, saltResistance: 4.2, gripCoefficient: 0.78, resaleValue: 65 },

        pressureForefoot: 60,
        pressureMidfoot: 35,
        pressureHeel: 65,

        energyInitial: "62%",
        energyMid: "55%",
        energyToe: "58%",

        radarRoad: 8,
        radarTrack: 4,
        radarTrail: 4,
        radarGym: 7,

        foamNeedleLeft: "45%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 82,
        heatMidfoot: 75,
        heatHeel: 58,

        degOutsole: 32,
        degMidsole: 48,
        degUpper: 25
    },
    "Puma-Speedcat-OG": {
        title: "Puma Speedcat OG",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342412/puma_speedcat_og_lqpii3.jpg", 
        desc: "Puma Speedcat OG motorsport-inspired low-profile lifestyle sneakers standard model layout review. Product performance testing covers daily street walking, precision driving sessions, and casual urban wear. Ultra-thin low-profile midsoles deliver maximum ground feel and tactile responsiveness under standard pedal operations. Upper premium suede materials focus on retro athletic styling and a sleek narrow foot silhouette. Outsole design utilizes tire-tread wrap-around rubber traction for exceptional dry surface grip matrices. Midsole structures cater specifically to users prioritizing classic motorsport heritage over thick technical running cushioning parameters. Long-term tracking reveals high-impact shock absorption trade-offs across continuous hard concrete fitness walking loops.",
        
        oldPrice: "$100.00",
        currentPrice: "$98.00",
        amazonLink: "https://amzn.to/4gQWExu",
        marketVerifyLink: "https://amzn.to/4gQWExu",

        comfort: 6, 
        breathability: 6, 
        energyReturn: 4, 
        ankleStability: 5, 
        flexGroove: 9, 
        lacingLock: 8,
        
        weight: 2, 
        breakInTime: 6, 
        retailPrice: 5, 
        wetSlippage: 5, 
        rubberScuff: 6, 
        dirtRetention: 7,
        
        overallScore: 68, 
        fitPercent: "30%", 
        fitVerdict: "Fit Profile: Highly Narrow Silhouette. Snug racing fit requiring size-up.",
        useCase: "Best optimized for precision driving tracks, lifestyle casual wear, and vintage streetwear styling.",
        testerNotes: "\"The slim aesthetic and ground feel are unmatched for motorsport enthusiasts. However, the ultra-thin midsole provides minimal impact protection for long-distance pavement walking loops.\"",
        
        competitors: [
            { name: "Puma Speedcat OG (This Shoe)", cushion: "Ultra-Thin Foam Matrix", durability: "550 KM Tracked", weight: "Ultra Light (240g)", status: "Current Selection", isCurrent: true },
            { name: "Adidas Samba OG", cushion: "Low-Profile Rubber Core", durability: "750 KM Tracked", weight: "Lightweight (310g)", status: "Better Durability", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 2.10, archDeflection: 1.8, creaseLimit: 95, saltResistance: 3.8, gripCoefficient: 0.88, resaleValue: 72 },

        pressureForefoot: 55,
        pressureMidfoot: 40,
        pressureHeel: 70,

        energyInitial: "45%",
        energyMid: "40%",
        energyToe: "52%",

        radarRoad: 7,
        radarTrack: 3,
        radarTrail: 2,
        radarGym: 5,

        foamNeedleLeft: "15%", 
        foamDensityRating: "Ultra Firm (Racing)",

        heatToebox: 78,
        heatMidfoot: 70,
        heatHeel: 52,

        degOutsole: 38,
        degMidsole: 52,
        degUpper: 28
    },
    "adidas-Dropset-4-Training-Sneakers-Shoes-Black": {
        title: "adidas Dropset 4 Training Sneakers Shoes - Black",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785403907/Adidas_Dropset_4_kekbnx.jpg", 
        desc: "adidas Dropset 4 versatile high-performance functional strength and cross-training shoes standard model layout review. Product performance testing covers heavy barbell weightlifting, intense fitness competitions, high-impact box jumps, and short metabolic conditioning sprints. Full-length dual-density Repetitor foam cushioning paired with integrated rearfoot Energyrods delivers controlled lateral chassis stability under extreme structural compression loads. Upper engineered mesh materials featuring strategic haptic print overlays focus on enhanced breathability, upper stitch protection, and secure midfoot containment. Outsole design utilizes premium sticky Continental rubber pods on the forefoot and heel combined with dense Adiwear rubber across the midfoot wrap for rope-climb protection matrices. Midsole structures focus on weightlifting-specific parameters, catering directly to cross-functional athletes prioritizing a low-profile grounded base over thick maximalist running cushion zones. Long-term tracking reveals rigid sole characteristics over extended multi-mile urban asphalt pavement commutes.",
        
        oldPrice: "$145.00",
        currentPrice: "$145.00",
        amazonLink: "https://amzn.to/3TY91OC",
        marketVerifyLink: "https://amzn.to/3TY91OC",

        comfort: 8, 
        breathability: 8, 
        energyReturn: 7, 
        ankleStability: 9, 
        flexGroove: 6, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 5, 
        retailPrice: 5, 
        wetSlippage: 2, 
        rubberScuff: 2, 
        dirtRetention: 4,
        
        overallScore: 85, 
        fitPercent: "35%", 
        fitVerdict: "Fit Profile: Highly Narrow Silhouette. Snug anatomical midfoot lockdown requiring a half-size up for wide feet.",
        useCase: "Best optimized for heavy functional strength lifting, CrossFit competition circuits, and aggressive gym cross-training loops.",
        testerNotes: "\"The reengineered Repetitor midsole foam paired with integrated Energyrods feels beautifully stable and rigid during heavy 300-pound squatted sets. Shaving nearly 1.6 ounces off the legacy edition creates a beautifully nimble feel for quick box jumps, though the narrow forefoot geometry requires a break-in window to eliminate outer pinky-toe pinching.\"",
        
        competitors: [
            { name: "adidas Dropset 4 Training Shoes - Black (This Shoe)", cushion: "Balanced Foam (React)", durability: "800 KM Tracked", weight: "Lightweight (298g)", status: "Current Selection", isCurrent: true },
            { name: "New Balance Coco Delray V2", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Heavy (374g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.12, archDeflection: 0.6, creaseLimit: 180, saltResistance: 4.6, gripCoefficient: 0.94, resaleValue: 78 },

        pressureForefoot: 70,
        pressureMidfoot: 35,
        pressureHeel: 85,

        energyInitial: "65%",
        energyMid: "55%",
        energyToe: "72%",

        radarRoad: 6,
        radarTrack: 5,
        radarTrail: 2,
        radarGym: 10,

        foamNeedleLeft: "25%", 
        foamDensityRating: "Ultra Firm (Racing)",

        heatToebox: 88,
        heatMidfoot: 76,
        heatHeel: 64,

        degOutsole: 14,
        degMidsole: 25,
        degUpper: 18
    },

    "Nike-Air-Jordan-1-Mens-Retro-High-OG-Shattered-Backboard": {
        title: "Nike Air Jordan 1 Mens Retro High OG Shattered Backboard",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342095/Air_Jordan_1_Mens_Retro_High_OG_Shattered_Backboard_Shoes_nneakw.jpg", 
        desc: "Nike Air Jordan 1 Retro High OG Shattered Backboard premium leather lifestyle sneakers standard model layout review. Product performance testing covers urban street walking, high-top ankle stability evaluations, and archival fashion culture wear. Encapsulated heel Air cushioning units deliver classic court-style shock absorption under standard heel strike impacts. Upper full-grain tumbled leather panels focus on premium tactile smoothness and iconic Starfish orange color-blocking aesthetics. Outsole design utilizes traditional concentric pivot-circle rubber traction matrices for reliable dry asphalt pavement grip. Midsole structures cater specifically to sneaker collectors prioritizing historical basketball heritage over modern lightweight athletic technical parameters. Long-term tracking reveals rigid upper leather crease trade-offs across continuous daily rotation schedules.",
        
        oldPrice: "$180.00",
        currentPrice: "$179.00",
        amazonLink: "https://amzn.to/3RaMWM1",
        marketVerifyLink: "https://amzn.to/3RaMWM1",

        comfort: 7, 
        breathability: 5, 
        energyReturn: 4, 
        ankleStability: 9, 
        flexGroove: 5, 
        lacingLock: 9,
        
        weight: 4, 
        breakInTime: 7, 
        retailPrice: 8, 
        wetSlippage: 4, 
        rubberScuff: 3, 
        dirtRetention: 5,
        
        overallScore: 84, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for premium street styling, lifestyle daily wear, and sneaker collection curation.",
        testerNotes: "\"The premium tumbled leather panels deliver a true-to-era touch and exceptional ankle lockdown structure. However, the flat vintage rubber cupsole requires a notable break-in period for complete underfoot flexibility.\"",
        
        competitors: [
            { name: "Nike Air Jordan 1 Mens Retro High OG Shattered Backboard (This Shoe)", cushion: "Encapsulated Air-Sole Core", durability: "950 KM Tracked", weight: "Heavy (425g)", status: "Current Selection", isCurrent: true },
            { name: "Adidas Forum High", cushion: "Standard EVA Foam Insert", durability: "800 KM Tracked", weight: "Heavy (440g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.25, archDeflection: 0.9, creaseLimit: 160, saltResistance: 4.6, gripCoefficient: 0.84, resaleValue: 92 },

        pressureForefoot: 65,
        pressureMidfoot: 25,
        pressureHeel: 70,

        energyInitial: "55%",
        energyMid: "50%",
        energyToe: "58%",

        radarRoad: 8,
        radarTrack: 4,
        radarTrail: 3,
        radarGym: 6,

        foamNeedleLeft: "20%", 
        foamDensityRating: "Ultra Firm (Racing)",

        heatToebox: 70,
        heatMidfoot: 60,
        heatHeel: 40,

        degOutsole: 15,
        degMidsole: 25,
        degUpper: 35
    },
    "ASICS-Mens-Gel-Nimbus-28-Running-Shoes": {
        title: "ASICS Men's Gel-Nimbus 28 Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342106/ASICS_GEL-NIMBUS_28_wgawca.png", 
        desc: "ASICS Men's Gel-Nimbus 28 premium high-stack neutral daily training shoes standard model layout review. Product performance testing covers long-distance base building, active road recovery kilometers, and all-day lifestyle walking comfort. Upgraded lightweight FF BLAST PLUS cushioning integrated with a rearfoot PureGEL insert delivers a highly protective, dampening, and pillow-soft underfoot landing platform. Upper reengineered engineered knit textiles focus on a luxurious step-in feel and a heavily padded, body-mapped supportive wrap. Outsole design utilizes optimized minimal Hybrid ASICSGRIP rubber matrices to strip away dead weight without sacrificing wet pavement adhesion parameters. Midsole structures featuring a pronounced forefoot rocker geometric setup cater specifically to runners prioritizing joint impact protection over aggressive springy carbon-plated velocity returns. Long-term tracking reveals lower energy feedback trade-offs across fast uptempo velocity training segments.",
        
        oldPrice: "$170.00",
        currentPrice: "$169.97",
        amazonLink: "https://amzn.to/4baJQyp",
        marketVerifyLink: "https://amzn.to/4baJQyp",

        comfort: 10, 
        breathability: 6, 
        energyReturn: 5, 
        ankleStability: 8, 
        flexGroove: 7, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 4, 
        dirtRetention: 4,
        
        overallScore: 86, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "ASICS Men's Gel-Nimbus 28 (This Shoe)", cushion: "Max Plush Recovery", durability: "900 KM Tracked", weight: "Lightweight (278g)", status: "Current Selection", isCurrent: true },
            { name: "New Balance Fresh Foam Garoé V1 Midcut", cushion: "Max Plush Recovery", durability: "750 KM Tracked", weight: "Balanced (312g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.22, archDeflection: 1.2, creaseLimit: 165, saltResistance: 4.4, gripCoefficient: 0.91, resaleValue: 80 },

        pressureForefoot: 58,
        pressureMidfoot: 32,
        pressureHeel: 85,

        energyInitial: "80%",
        energyMid: "72%",
        energyToe: "58%",

        radarRoad: 10,
        radarTrack: 6,
        radarTrail: 2,
        radarGym: 7,

        foamNeedleLeft: "78%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 82,
        heatMidfoot: 74,
        heatHeel: 64,

        degOutsole: 22,
        degMidsole: 35,
        degUpper: 12
    },
    "ASICS-GEL-KAYANO-33": {
        title: "ASICS GEL-KAYANO 33",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342082/ASICS_GEL-KAYANO_33_cbegd9.png", 
        desc: "ASICS GEL-KAYANO 33 premium high-performance structured stability daily training shoes standard model layout review. Product performance testing covers extended road running loops, marathon mileage conditioning, and severe overpronation biomechanical support parameters. Dual-layer midsole configurations fusing a top layer of plush FF BLAST MAX with stable FF BLAST PLUS foam deliver a exceptionally soft yet guided underfoot ride. Upper refined engineered mesh fabrics focus on year-round multi-zone breathability and secure structural adaptive lockdown fits. Outsole design utilizes upgraded Hybrid ASICSGRIP and robust AHAR+ traction matrices for excellent wet weather pavement adhesion. Midsole structures featuring next-generation FLUIDSUPPORT technology cater specifically to runners requiring gentle structural correction over intrusive traditional plastic medial post frameworks. Long-term tracking reveals notable platform weight and indoor tile squeaking trade-offs across continuous daily rotations.",
        
        oldPrice: "$170.00",
        currentPrice: "$170.00",
        amazonLink: "https://amzn.to/3RO2MMK",
        marketVerifyLink: "https://amzn.to/3RO2MMK",

        comfort: 10, 
        breathability: 7, 
        energyReturn: 6, 
        ankleStability: 10, 
        flexGroove: 6, 
        lacingLock: 9,
        
        weight: 4, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 2, 
        dirtRetention: 4,
        
        overallScore: 87, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for long-distance base building, daily recovery kilometers, and overpronation structural support.",
        testerNotes: "\"The integration of the premium FLUIDSUPPORT system feels incredibly natural, completely removing the archaic intrusive block feel of legacy stability trainers. The dual-foam stack absorbs intense concrete impact loops beautifully, though the tacky hybrid rubber layout can emit an intensely loud, embarrassing squeak on smooth indoor hospital floorings.\"",
        
        competitors: [
            { name: "ASICS GEL-KAYANO 33 (This Shoe)", cushion: "Max Plush Recovery", durability: "1050 KM Tracked", weight: "Heavy (298g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS Men's Mach 7", cushion: "Balanced Foam (React)", durability: "700 KM Tracked", weight: "Lightweight (237g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.05, archDeflection: 0.6, creaseLimit: 195, saltResistance: 4.6, gripCoefficient: 0.93, resaleValue: 82 },

        pressureForefoot: 62,
        pressureMidfoot: 45,
        pressureHeel: 80,

        energyInitial: "76%",
        energyMid: "70%",
        energyToe: "64%",

        radarRoad: 10,
        radarTrack: 6,
        radarTrail: 4,
        radarGym: 6,

        foamNeedleLeft: "70%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 85,
        heatMidfoot: 74,
        heatHeel: 52,

        degOutsole: 12,
        degMidsole: 24,
        degUpper: 15
    },
    "New-Balance-Mens-Fresh-Foam-Garoe-V1-Midcut": {
        title: "New Balance Men's Fresh Foam Garoé V1 Midcut",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342294/New_Balance_Men_s_Fresh_Foam_Garo%C3%A9_V1_Midcut_qzkgmj.jpg", 
        desc: "New Balance Fresh Foam Garoé V1 Midcut lightweight mid-top outdoor training shoes standard model layout review. Product performance testing covers technical trail running, light trekking, and mixed off-road commuting. Precision-engineered Fresh Foam midsole cushioning delivers a highly responsive, plush, and well-cushioned underfoot ride. Upper multi-textured synthetic mesh panels feature an elevated collar configuration for optimal ankle protection and stability indicators. Outsole design utilizes all-terrain AT Tread lug matrices for versatile traction performance across both on-road and rugged off-road tracks. Midsole structures cater specifically to adventurous hikers prioritizing dynamic nimble protection over rigid traditional alpine combat boot frames. Long-term tracking reveals minor performance threshold trade-offs across highly technical rocky ridges.",
        
        oldPrice: "$71.00",
        currentPrice: "$71.00",
        amazonLink: "https://amzn.to/4x3806r",
        marketVerifyLink: "https://amzn.to/4x3806r",

        comfort: 9, 
        breathability: 7, 
        energyReturn: 7, 
        ankleStability: 9, 
        flexGroove: 7, 
        lacingLock: 8,
        
        weight: 3, 
        breakInTime: 3, 
        retailPrice: 5, 
        wetSlippage: 4, 
        rubberScuff: 4, 
        dirtRetention: 5,
        
        overallScore: 83, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for mixed trail excursions, lightweight weekend hiking, and off-road seasonal training loops.",
        testerNotes: "\"The elevated midcut collar offers exceptional trail stability across uneven dirt trails without mimicking the rigid weight of an archaic leather hiking boot. The AT Tread compound rolls cleanly through street pavement commutes, though dense muddy single-tracks do push its shallow lug profile limits.\"",
        
        competitors: [
            { name: "New Balance Fresh Foam Garoé V1 Midcut (This Shoe)", cushion: "Max Plush Recovery", durability: "750 KM Tracked", weight: "Balanced (312g)", status: "Current Selection", isCurrent: true },
            { name: "Karrimor Men's Bodmin Mid 4", cushion: "Balanced Foam (React)", durability: "600 KM Tracked", weight: "Heavy (500g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.32, archDeflection: 1.1, creaseLimit: 140, saltResistance: 4.4, gripCoefficient: 0.86, resaleValue: 70 },

        pressureForefoot: 60,
        pressureMidfoot: 30,
        pressureHeel: 70,

        energyInitial: "74%",
        energyMid: "68%",
        energyToe: "72%",

        radarRoad: 7,
        radarTrack: 5,
        radarTrail: 8,
        radarGym: 6,

        foamNeedleLeft: "65%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 85,
        heatMidfoot: 74,
        heatHeel: 60,

        degOutsole: 25,
        degMidsole: 40,
        degUpper: 20
    },

    "Karrimor-Mens-Bodmin-Mid-4-Hiking-Shoes": {
        title: "Karrimor Men's Bodmin Mid 4 Hiking Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342285/Karrimor_Men_s_Bodmin_Mid_4_Hiking_Shoes_jewedz.jpg", 
        desc: "Karrimor Men's Bodmin Mid 4 entry-level waterproof outdoor hiking boots standard model layout review. Product performance testing covers countryside trail rambling, moderate hill walking, and wet weather trekking paths. Phylon cushion inserts combine with structural FrameFlex elements to deliver reliable shock absorption under standard heel strike impacts. Upper suede and breathable textile mesh panels focus on affordable Weathertite membrane waterproofing and high ankle support aesthetics. Outsole design utilizes heavy-duty lugged DynaGrip rubber matrices for reliable multi-terrain mud and loose dirt traction. Midsole structures cater specifically to budget-conscious hikers prioritizing immediate out-of-the-box comfort over ultra-durable premium technical materials. Long-term tracking reveals component breakdown trade-offs across highly abrasive jagged alpine boulder fields.",
        
        oldPrice: "$152.00",
        currentPrice: "$151.00",
        amazonLink: "https://amzn.to/4b8Gw6L",
        marketVerifyLink: "https://amzn.to/4b8Gw6L",

        comfort: 8, 
        breathability: 6, 
        energyReturn: 5, 
        ankleStability: 8, 
        flexGroove: 6, 
        lacingLock: 8,
        
        weight: 4, 
        breakInTime: 3, 
        retailPrice: 2, 
        wetSlippage: 4, 
        rubberScuff: 5, 
        dirtRetention: 6,
        
        overallScore: 74, 
        fitPercent: "55%", 
        fitVerdict: "Fit Profile: Slightly Spacious Forefoot. Fits wide feet or thick hiking socks comfortably.",
        useCase: "Best optimized for weekend trail walks, light countryside hiking, and low-budget outdoor trekking.",
        testerNotes: "\"The immediate out-of-the-box cushion and padded ankle wrap feel fantastic for casual hillsides. While the price point is exceptionally friendly, the long-term upper structural durability begins to show signs of fabric strain after 400 kilometers of dense muck rotation.\"",
        
        competitors: [
            { name: "Karrimor Men's Bodmin Mid 4 (This Shoe)", cushion: "Balanced Foam (React)", durability: "600 KM Tracked", weight: "Heavy (500g)", status: "Current Selection", isCurrent: true },
            { name: "Nike ACG Pegasus Trail", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Balanced (320g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.85, archDeflection: 1.0, creaseLimit: 105, saltResistance: 4.1, gripCoefficient: 0.84, resaleValue: 45 },

        pressureForefoot: 55,
        pressureMidfoot: 30,
        pressureHeel: 75,

        energyInitial: "65%",
        energyMid: "58%",
        energyToe: "50%",

        radarRoad: 5,
        radarTrack: 3,
        radarTrail: 8,
        radarGym: 4,

        foamNeedleLeft: "45%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 74,
        heatMidfoot: 68,
        heatHeel: 72,

        degOutsole: 28,
        degMidsole: 45,
        degUpper: 32
    },

    "ASICS-Mens-Mach-7": {
        title: "ASICS Men's Mach 7",
        imageURL: "pic/https://example.com", 
        desc: "ASICS Men's Mach 7 lightweight high-performance daily road training shoes standard model layout review. Product performance testing covers progressive uptempo road mileage, track intervals, and everyday running execution loops. Supercritical EVA foam cushioning combined with Early Stage MetaRocker geometry delivers a natural fluid stride under active midfoot strike impacts. Upper creel jacquard engineered mesh elements focus on exceptional summer ventilation and secure narrow lock configurations. Outsole design utilizes updated sticky rubber and Durabrasion heel pads for exceptional wet pavement traction parameters. Midsole structures cater specifically to neutral runners prioritizing nimble unplated versatility over stiff carbon propulsion grids. Long-term tracking reveals bottom-loaded foam compression trade-offs across continuous multi-hour marathon long-distance efforts.",
        
        oldPrice: "$145.00",
        currentPrice: "$145.00",
        amazonLink: "https://amzn.to/4pvRFV3",
        marketVerifyLink: "https://stockx.com",

        comfort: 8, 
        breathability: 10, 
        energyReturn: 7, 
        ankleStability: 7, 
        flexGroove: 8, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 5, 
        wetSlippage: 2, 
        rubberScuff: 4, 
        dirtRetention: 3,
        
        overallScore: 84, 
        fitPercent: "40%", 
        fitVerdict: "Fit Profile: Slightly Narrow Forefoot. Fits snug near the toe panel.",
        useCase: "Best optimized for uptempo daily miles, fast interval workouts, and moderate pacing training.",
        testerNotes: "\"The creel jacquard mesh provides an incredible 96% airflow rating on hot days. While the supercritical EVA structure offers a smooth natural roll, it begins to feel a bit flat on long runs stretching beyond 10 miles.\"",
        
        competitors: [
            { name: "ASICS Men's Mach 7 (This Shoe)", cushion: "Balanced Foam (React)", durability: "700 KM Tracked", weight: "Lightweight (237g)", status: "Current Selection", isCurrent: true },
            { name: "Adidas Adizero Evo SL", cushion: "High Rebound (Boost)", durability: "800 KM Tracked", weight: "Balanced (245g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.28, archDeflection: 1.1, creaseLimit: 155, saltResistance: 4.7, gripCoefficient: 0.92, resaleValue: 76 },

        pressureForefoot: 65,
        pressureMidfoot: 25,
        pressureHeel: 70,

        energyInitial: "66%",
        energyMid: "61%",
        energyToe: "67%",

        radarRoad: 9,
        radarTrack: 8,
        radarTrail: 2,
        radarGym: 8,

        foamNeedleLeft: "40%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 96,
        heatMidfoot: 86,
        heatHeel: 54,

        degOutsole: 22,
        degMidsole: 42,
        degUpper: 14
    },

    "Nike-Mens-Air-Max-97-Gs-Track-Field-Shoes": {
        title: "Nike Men's Air Max 97 (Gs) Track & Field Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342315/Nike_Men_s_Air_Max_97_GS_Track_Field_Shoes_Review_Sizing_Guide_fdgll6.jpg", 
        desc: "Nike Men's Air Max 97 (Gs) Track & Field heritage-inspired lifestyle sneakers standard model layout review. Product performance testing covers casual urban walking, school-yard track running, and teenage athletic lifestyle routines. Full-length encapsulated Max Air cushioning grids deliver maximum underfoot shock absorption under standard heel strike impacts. Upper synthetic leather loops and wave-ripple textile panels focus on vintage Japanese bullet-train aesthetics and structural foot reinforcement. Outsole design utilizes signature solid rubber waffle traction patterns for exceptional urban track and street grip. Midsole structures cater specifically to younger athletes prioritizing iconic sportswear culture over lightweight technical marathon race engineering parameters. Long-term tracking reveals a notably rigid chassis break-in period across continuous multi-hour cross-training sessions.",
        
        oldPrice: "$166.00",
        currentPrice: "$166.00",
        amazonLink: "https://amzn.to/3RoCReu",
        marketVerifyLink: "https://amzn.to/3RoCReu",

        comfort: 7, 
        breathability: 6, 
        energyReturn: 5, 
        ankleStability: 8, 
        flexGroove: 5, 
        lacingLock: 8,
        
        weight: 4, 
        breakInTime: 6, 
        retailPrice: 7, 
        wetSlippage: 4, 
        rubberScuff: 3, 
        dirtRetention: 5,
        
        overallScore: 77, 
        fitPercent: "40%", 
        fitVerdict: "Fit Profile: Slightly Narrow Forefoot. Fits snug near the toe panel.",
        useCase: "Best optimized for casual urban walking, street fashion styling, and lifestyle daily wear.",
        testerNotes: "\"The full-length Air unit provides an iconic aesthetic and unmistakable heel impact protection. However, the upper textile layers feel notably stiff and narrow, requiring a half-size up for wide-foot users.\"",
        
        competitors: [
            { name: "Nike Men's Air Max 97 (Gs) (This Shoe)", cushion: "Max Plush Recovery Foam Core", durability: "700 KM Tracked", weight: "Heavy (365g)", status: "Current Selection", isCurrent: true },
            { name: "Adidas Ultraboost Light", cushion: "High Rebound (Boost)", durability: "1100 KM Tracked", weight: "Light (290g)", status: "Better Speed", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.55, archDeflection: 1.0, creaseLimit: 145, saltResistance: 4.6, gripCoefficient: 0.81, resaleValue: 75 },

        pressureForefoot: 65,
        pressureMidfoot: 30,
        pressureHeel: 75,

        energyInitial: "70%",
        energyMid: "64%",
        energyToe: "60%",

        radarRoad: 9,
        radarTrack: 6,
        radarTrail: 3,
        radarGym: 7,

        foamNeedleLeft: "30%", 
        foamDensityRating: "Max Plush Recovery Foam Core",

        heatToebox: 80,
        heatMidfoot: 72,
        heatHeel: 55,

        degOutsole: 20,
        degMidsole: 28,
        degUpper: 22
    },
    "New-Balance-Mens-Coco-Delray-V2-Hard-Court-Shoes": {
        title: "New Balance Men's Coco Delray V2 Hard Court Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342281/New_Balance_Men_s_Coco_Delray_V2_Hard_Court_Shoes_1_qfwhhh.png", 
        desc: "New Balance Coco Delray V2 versatile hard-court performance tennis shoes standard model layout review. Product performance testing covers dynamic lateral court slicing, aggressive sliding friction loops, and everyday off-court styling wear. Responsive full-length FuelCell foam cushioning integrated with an embedded torsional nylon plate delivers exceptional kinetic shock dampening. Upper lightweight engineered textile mesh panels feature structural protective film overlays to insulate against high-abrasion toe-dragging damage. Outsole design utilizes signature heavy-duty NDurance rubber compounds with an optimized hexagonal tread matrix for multi-court traction boundaries. Midsole structures featuring a lower supportive ankle collar profile cater specifically to agile players prioritizing lightning-fast cross-court coverage over rigid traditional basketball hi-top frames. Long-term tracking reveals minor forward forefoot edge creasing trade-offs across continuous abrasive hard-court matches.",
        
        oldPrice: "$95.00",
        currentPrice: "$90.99",
        amazonLink: "https://amzn.to/4fwa1SN",
        marketVerifyLink: "https://amzn.to/4fwa1SN",

        comfort: 9, 
        breathability: 8, 
        energyReturn: 8, 
        ankleStability: 8, 
        flexGroove: 7, 
        lacingLock: 9,
        
        weight: 4, 
        breakInTime: 3, 
        retailPrice: 4, 
        wetSlippage: 3, 
        rubberScuff: 2, 
        dirtRetention: 4,
        
        overallScore: 84, 
        fitPercent: "35%", 
        fitVerdict: "Fit Profile: Highly Narrow Silhouette. Snug performance fit requiring wide 2E options.",
        useCase: "Best optimized for aggressive hard-court tennis baseline play, dynamic multi-directional slicing, and casual off-court lifestyle transitions.",
        testerNotes: "\"The responsive FuelCell compound paired with the supportive nylon plate provides an incredibly bouncy, fluid turnover when chasing down cross-court volleys. The thick protective film guard successfully shrugs off severe toe-drag scuffing, though the narrow D-width configuration requires ordering wide layouts for typical foot volumes.\"",
        
        competitors: [
            { name: "New Balance Coco Delray V2 (This Shoe)", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Heavy (374g)", status: "Current Selection", isCurrent: true },
            { name: "adidas Men's Samba ADV Sneakers", cushion: "Ultra Firm (Racing)", durability: "800 KM Tracked", weight: "Lightweight (315g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.18, archDeflection: 0.9, creaseLimit: 170, saltResistance: 4.5, gripCoefficient: 0.94, resaleValue: 75 },

        pressureForefoot: 72,
        pressureMidfoot: 28,
        pressureHeel: 62,

        energyInitial: "76%",
        energyMid: "72%",
        energyToe: "80%",

        radarRoad: 7,
        radarTrack: 8,
        radarTrail: 2,
        radarGym: 8,

        foamNeedleLeft: "42%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 90,
        heatMidfoot: 82,
        heatHeel: 60,

        degOutsole: 14,
        degMidsole: 28,
        degUpper: 18
    },
    "New-Balance-Womens-Fresh-Foam-X-1080-V13-Running-Shoes": {
        title: "New Balance Women's Fresh Foam X 1080 V13 Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342288/New_Balance_Women_s_Fresh_Foam_X_1080_V13_Running_Shoes_2_cyboxa.jpg", 
        desc: "New Balance Women's Fresh Foam X 1080 V13 premium high-stack neutral daily road training shoes standard model layout review. Product performance testing covers long-distance base building, active road recovery kilometers, and all-day casual lifestyle walking comfort. Ultra-plush Fresh Foam X midsole cushioning engineered with dynamic bio-based profiles delivers an exceptionally soft, pillowy, and protective underfoot landing platform. Upper reengineered premium engineered Hypoknit fabrics focus on a luxurious step-in feel and a highly flexible, accommodating structural footprint wrap. Outsole design utilizes optimized vertical flex grooves and robust Ndurance rubber matrices to strip away dead weight without sacrificing wet pavement traction parameters. Midsole structures featuring a pronounced rocker geometric setup cater specifically to runners prioritizing maximum joint impact protection over stiff high-velocity carbon-plated propulsion returns. Long-term tracking reveals soft dynamic foam structural compression trade-offs across heavy continuous multi-month rotations.",
        
        oldPrice: "$165.00",
        currentPrice: "$125.00",
        amazonLink: "https://amzn.to/3TcrKWD",
        marketVerifyLink: "https://amzn.to/3TcrKWD",

        comfort: 10, 
        breathability: 8, 
        energyReturn: 6, 
        ankleStability: 7, 
        flexGroove: 9, 
        lacingLock: 8,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 5, 
        dirtRetention: 4,
        
        overallScore: 87, 
        fitPercent: "65%", 
        fitVerdict: "Fit Profile: Slightly Spacious Forefoot. Roomy and stretchable knit upper that fits wide feet comfortably.",
        useCase: "Best optimized for slow recovery runs, daily cruising kilometers, and max-comfort long distance walking.",
        testerNotes: "\"The sheer step-in comfort of the Fresh Foam X compound combined with the stretchy Hypoknit upper feels like walking on literal clouds, saving your legs on exhausted recovery days. However, the lack of a stabilizing plate means the squishy stack can feel a bit loose and sloppy when turning tight corners or trying to click into high-tempo paces.\"",
        
        competitors: [
            { name: "New Balance Women's Fresh Foam X 1080 V13 (This Shoe)", cushion: "Max Plush Recovery", durability: "800 KM Tracked", weight: "Ultra Light (206g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS GEL-NIMBUS 27", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Heavy (305g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.35, archDeflection: 1.3, creaseLimit: 140, saltResistance: 4.4, gripCoefficient: 0.88, resaleValue: 76 },

        pressureForefoot: 58,
        pressureMidfoot: 30,
        pressureHeel: 85,

        energyInitial: "82%",
        energyMid: "68%",
        energyToe: "62%",

        radarRoad: 10,
        radarTrack: 6,
        radarTrail: 2,
        radarGym: 7,

        foamNeedleLeft: "82%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 90,
        heatMidfoot: 82,
        heatHeel: 60,

        degOutsole: 26,
        degMidsole: 45,
        degUpper: 15
    },


    "New-Balance-Mens-FuelCell-Rebel-V5": {
        title: "New Balance Men's FuelCell Rebel V5",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342305/New_Balance_Men_s_FuelCell_Rebel_V5_5_jf4oth.jpg", 
        desc: "New Balance FuelCell Rebel V5 lightweight high-performance unplated daily road training shoes standard model layout review. Product performance testing covers progressive tempo mileage loops, spontaneous interval workouts, and high-volume daily running execution. Upgraded high-stack FuelCell midsole cushioning combining a dynamic PEBA and EVA foam blend delivers an exceptionally soft, energetic underfoot platform. Upper ultra-lightweight single-layer engineered mesh panels pair with premium FantomFit bonded overlays to focus on minimalist structural support. Outsole design utilizes a targeted distribution layout with increased forefoot rubber coverage for premium wet asphalt acceleration metrics. Midsole structures featuring wider geometric sole flares and raised sidewalls cater specifically to neutral runners prioritizing nimble plateless flexibility over stiff carbon propulsion grids. Long-term tracking reveals specialized upper mesh strain and midfoot foam abrasion trade-offs across continuous abrasive road rotations.",
        
        oldPrice: "$145.00",
        currentPrice: "$135.00",
        amazonLink: "https://amzn.to/3RdrBSb",
        marketVerifyLink: "https://amzn.to/3RdrBSb",

        comfort: 9, 
        breathability: 7, 
        energyReturn: 8, 
        ankleStability: 7, 
        flexGroove: 9, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 5, 
        wetSlippage: 3, 
        rubberScuff: 4, 
        dirtRetention: 3,
        
        overallScore: 85, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "New Balance Men's FuelCell Rebel V5 (This Shoe)", cushion: "Responsive Nitro Racing Compound", durability: "700 KM Tracked", weight: "Lightweight (223g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS Men's Mach 7", cushion: "Balanced Foam (React)", durability: "700 KM Tracked", weight: "Lightweight (237g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.30, archDeflection: 1.1, creaseLimit: 145, saltResistance: 4.4, gripCoefficient: 0.90, resaleValue: 74 },

        pressureForefoot: 70,
        pressureMidfoot: 20,
        pressureHeel: 30,

        energyInitial: "75%",
        energyMid: "78%",
        energyToe: "70%",

        radarRoad: 10,
        radarTrack: 8,
        radarTrail: 2,
        radarGym: 7,

        foamNeedleLeft: "35%", 
        foamDensityRating: "Responsive Nitro Racing Compound",

        heatToebox: 82,
        heatMidfoot: 75,
        heatHeel: 58,

        degOutsole: 24,
        degMidsole: 44,
        degUpper: 35
    },

    "Puma-Mens-Velocity-Nitro-5-Running-Shoes": {
        title: "Puma Men's Velocity Nitro 5 Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342316/vilocity_nitro_five_4_xenudl.webp", 
        desc: "Puma Velocity Nitro 5 premium all-purpose neutral daily road training shoes standard model layout review. Product performance testing covers frequent baseline running, daily workout building, and high-volume lifestyle concrete mileage loops. Reengineered full-length 100% aliphatic TPU NITROFOAM cushioning delivers a notably softer, resilient, and springy landing matrix. Upper updated breathable engineered mesh panels pair with a heavily padded lifestyle-oriented tongue framework for premium comfort variables. Outsole design utilizes signature heavy-coverage PUMAGRIP durable rubber compound matrices for exceptional all-surface traction thresholds. Midsole structures featuring a wider stable footprint platform and an 8mm drop geometry cater specifically to runners prioritizing versatile comfort configurations over ultra-stiff carbon racing speeds. Long-term tracking reveals lower structural weight drop dynamics alongside an expected lifespan benchmark stretching up to 800 kilometers.",
        
        oldPrice: "$140.00",
        currentPrice: "$139.00",
        amazonLink: "https://amzn.to/4vUTxsf",
        marketVerifyLink: "https://amzn.to/4vUTxsf",

        comfort: 9, 
        breathability: 8, 
        energyReturn: 8, 
        ankleStability: 8, 
        flexGroove: 8, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 5, 
        wetSlippage: 2, 
        rubberScuff: 3, 
        dirtRetention: 4,
        
        overallScore: 86, 
        fitPercent: "40%", 
        fitVerdict: "Fit Profile: Slightly Narrow Forefoot. Fits snug near the toe panel.",
        useCase: "Best optimized for versatile everyday running, daily mileage building, and casual training loops.",
        testerNotes: "\"The upgrade to a wider platform and full aliphatic TPU NITROFOAM delivers a beautifully balanced, lively turnover that handles both slow cruised recovery zones and fast tempo pacing loops effortlessly. The newly padded plush tongue layout wraps securely, though the added upper cushioning structure holds notable warmth on high-temperature summer days.\"",
        
        competitors: [
            { name: "Puma Men's Velocity Nitro 5 (This Shoe)", cushion: "Balanced Foam (React)", durability: "800 KM Tracked", weight: "Lightweight (230g)", status: "Current Selection", isCurrent: true },
            { name: "PUMA Men's Deviate Nitro 4", cushion: "Responsive Nitro Racing Compound", durability: "800 KM Tracked", weight: "Lightweight (247g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.15, archDeflection: 1.1, creaseLimit: 165, saltResistance: 4.5, gripCoefficient: 0.95, resaleValue: 78 },

        pressureForefoot: 65,
        pressureMidfoot: 25,
        pressureHeel: 70,

        energyInitial: "74%",
        energyMid: "68%",
        energyToe: "76%",

        radarRoad: 10,
        radarTrack: 7,
        radarTrail: 4,
        radarGym: 8,

        foamNeedleLeft: "45%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 88,
        heatMidfoot: 78,
        heatHeel: 52,

        degOutsole: 16,
        degMidsole: 30,
        degUpper: 18
    },

    
    "PUMA-Mens-Deviate-Nitro-4-Running-Shoes-Road": {
        title: "PUMA Men's Deviate Nitro-4 Running Shoes Road",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342315/puma_media-hub_article_deviate-nitro-4_img-06_vv38lg.webp", 
        desc: "PUMA Men's Deviate Nitro 4 high-performance plated daily road training shoes standard model layout review. Product performance testing covers high-velocity tempo loops, marathon baseline building, and daily interval asphalt strides. Upgraded dual-density NITROFOAM cushioning infused with nitrogen gas packs paired with an embedded carbon composite PWRPLATE matrix delivers elite mechanical energy returns. Upper lightweight reengineered mesh fabrics focus on high-zone summer airflow mechanics and PWRTAPE structural perimeter lockdowns. Outsole design utilizes full-traction heavy-duty PUMAGRIP rubber compound patterns for exceptional wet and dry pavement adhesion parameters. Midsole structures featuring a moderate 38mm stack geometry cater specifically to neutral runners prioritizing snappy aggressive propulsion over oversized unplated maximalist walking platforms. Long-term tracking reveals notable structural mesh fatigue thresholds across intensive high-intensity mileage block transitions.",
        
        oldPrice: "",
        currentPrice: "",
        amazonLink: "https://amzn.to/4wlmL4h",
        marketVerifyLink: "https://amzn.to/4wlmL4h",

        comfort: 8, 
        breathability: 9, 
        energyReturn: 9, 
        ankleStability: 7, 
        flexGroove: 5, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 4, 
        retailPrice: 6, 
        wetSlippage: 2, 
        rubberScuff: 2, 
        dirtRetention: 3,
        
        overallScore: 85, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "PUMA Men's Deviate Nitro 4 (This Shoe)", cushion: "Responsive Nitro Racing Compound", durability: "800 KM Tracked", weight: "Lightweight (247g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS NOVABLAST 6", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Lightweight (249g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.02, archDeflection: 1.1, creaseLimit: 180, saltResistance: 4.6, gripCoefficient: 0.96, resaleValue: 82 },

        pressureForefoot: 75,
        pressureMidfoot: 20,
        pressureHeel: 45,

        energyInitial: "75%",
        energyMid: "68%",
        energyToe: "85%",

        radarRoad: 10,
        radarTrack: 8,
        radarTrail: 2,
        radarGym: 6,

        foamNeedleLeft: "32%", 
        foamDensityRating: "Responsive Nitro Racing Compound",

        heatToebox: 94,
        heatMidfoot: 84,
        heatHeel: 58,

        degOutsole: 12,
        degMidsole: 26,
        degUpper: 28
    },

    "ASICS-Mens-Trabuco-14-Trail-Running-Shoes": {
        title: "ASICS Men's Trabuco 14 Trail Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342246/ASICS-Mens-Trabuco-14-Trail-Running-Shoes_2_zub29k.jpg", 
        desc: "ASICS Men's Trabuco 14 premium high-performance adaptive trail running shoes standard model layout review. Product performance testing covers progressive singletrack racing, high-velocity mountain descents, and rugged off-road crossover training loops. Upgraded trail-tuned FF BLAST MAX midsole foam matrices strip away older rearfoot Gel elements to deliver enhanced cloud-like softness and reactive velocity returns. Upper advanced engineered jacquard mesh fabrics feature a narrower, supportive midfoot lockdown profile alongside a anatomical wide forefoot toe-splay configuration. Outsole design utilizes signature aggressive ASICSGRIP rubber compounds paired with multi-directional chevron lugs for exceptional braking thresholds. Midsole structures incorporating a flexible split forefoot rock protection plate cater specifically to trail runners prioritizing torsional agility over rigid low-profile minimalist ground-feedback constraints. Long-term tracking reveals lower technical wet mud traction boundaries across highly slippery mountain trail terrains.",
        
        oldPrice: "$145.00",
        currentPrice: "$145.00",
        amazonLink: "https://amzn.to/4fhQx42",
        marketVerifyLink: "https://amzn.to/4fhQx42",

        comfort: 9, 
        breathability: 8, 
        energyReturn: 8, 
        ankleStability: 9, 
        flexGroove: 7, 
        lacingLock: 9,
        
        weight: 3, 
        breakInTime: 3, 
        retailPrice: 5, 
        wetSlippage: 4, 
        rubberScuff: 2, 
        dirtRetention: 4,
        
        overallScore: 86, 
        fitPercent: "60%", 
        fitVerdict: "Fit Profile: Slightly Spacious Forefoot. Roomy anatomical toe box with locked midfoot framework.",
        useCase: "Best optimized for moderate singletrack paths, gravel trails, and rugged road-to-trail crossover running.",
        testerNotes: "\"The upgrade to the trail-tuned FF BLAST MAX foam provides an incredibly lively bounce while entirely eliminating the clunky weight of old legacy Gel inserts. The wider Altra-style anatomical toe box provides amazing splay on multi-hour loops, though greasy clay mud segments quickly reveal the limits of its shallow lug spacing configurations.\"",
        
        competitors: [
            { name: "ASICS Men's Trabuco 14 (This Shoe)", cushion: "Balanced Foam (React)", durability: "950 KM Tracked", weight: "Balanced (281g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS Men's Gel-Trabuco 13", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Balanced (283g)", status: "Older Alternative", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.10, archDeflection: 0.7, creaseLimit: 185, saltResistance: 4.7, gripCoefficient: 0.94, resaleValue: 80 },

        pressureForefoot: 65,
        pressureMidfoot: 35,
        pressureHeel: 70,

        energyInitial: "76%",
        energyMid: "72%",
        energyToe: "78%",

        radarRoad: 7,
        radarTrack: 5,
        radarTrail: 9,
        radarGym: 6,

        foamNeedleLeft: "42%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 90,
        heatMidfoot: 80,
        heatHeel: 55,

        degOutsole: 15,
        degMidsole: 28,
        degUpper: 16
    },
    "ASICS-Mens-Gel-Kayano-32-Running-Shoes": {
        title: "ASICS Men's Gel-Kayano 32 Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342194/ASICS_GEL-KAYANO_32_2_1_oynjce.jpg", 
        desc: "ASICS Men's Gel-Kayano 32 premium max-stability daily road training shoes standard model layout review. Product performance testing covers progressive structural overpronation correction, long-distance marathon base building, and extensive concrete lifestyle walking loops. Reengineered eco-friendly FF BLAST PLUS ECO midsole cushioning integrated with a hidden rearfoot PureGEL insert delivers plush impact dampening under heavy heel strikes. Upper advanced engineered stretch mesh textiles focus on plush step-in comfort and secure structural adaptive midfoot lockdowns. Outsole design utilizes high-durability Hybrid ASICSGRIP and robust AHAR+ rubber matrices for superior multi-surface city traction. Midsole structures featuring the dynamic adaptive 4D GUIDANCE SYSTEM provide progressive non-intrusive medial arch correction over traditional archaic hard plastic posts. Long-term tracking reveals heavy platform profile traits and low hot-weather breathing dynamics across dense rotational routines.",
        
        oldPrice: "$165.00",
        currentPrice: "$165.00",
        amazonLink: "https://amzn.to/4gULAiU",
        marketVerifyLink: "https://amzn.to/4gULAiU",

        comfort: 10, 
        breathability: 6, 
        energyReturn: 6, 
        ankleStability: 10, 
        flexGroove: 5, 
        lacingLock: 9,
        
        weight: 4, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 2, 
        dirtRetention: 4,
        
        overallScore: 86, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for overpronation structural support, low-intensity recovery miles, and maximum lifestyle comfort.",
        testerNotes: "\"The updated 4D GUIDANCE SYSTEM guides overpronation seamlessly without the annoying rigid poke of legacy medial posts. The higher 40mm heel stack completely erases road vibrations on tired recovery days, though the dense plush upper mesh traps significant heat when temperatures cross 80 degrees.\"",
        
        competitors: [
            { name: "ASICS Men's Gel-Kayano 32 (This Shoe)", cushion: "Max Plush Recovery", durability: "1000 KM Tracked", weight: "Heavy (298g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS Men's Gel-Kayano 30", cushion: "Max Plush Recovery", durability: "1000 KM Tracked", weight: "Heavy (303g)", status: "Older Alternative", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.08, archDeflection: 0.5, creaseLimit: 195, saltResistance: 4.5, gripCoefficient: 0.93, resaleValue: 82 },

        pressureForefoot: 64,
        pressureMidfoot: 46,
        pressureHeel: 80,

        energyInitial: "76%",
        energyMid: "70%",
        energyToe: "62%",

        radarRoad: 10,
        radarTrack: 5,
        radarTrail: 4,
        radarGym: 6,

        foamNeedleLeft: "72%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 80,
        heatMidfoot: 70,
        heatHeel: 52,

        degOutsole: 13,
        degMidsole: 25,
        degUpper: 14
    },
    "ASICS-Mens-Gel-Trabuco-13-Running-Shoes": {
        title: "ASICS Men's Gel-Trabuco 13 Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342297/ASICS_GEL-TRABUCO_13_M8_3_bcrqnz.jpg", 
        desc: "ASICS Men's Gel-Trabuco 13 high-performance outdoor trail running shoes standard model layout review. Product performance testing covers technical singletrack racing, steep mountain descents, and rugged multi-surface off-road training loops. Eco-friendly FF BLAST PLUS ECO midsole cushioning combined with a hidden rearfoot PureGEL insert delivers a highly protective, bouncy, and protective landing matrix. Upper debris-resistant engineered mesh fabrics feature an integrated sand guard and lace lock band to maximize secure midfoot lockdown frames. Outsole design utilizes a reengineered aggressive ASICSGRIP rubber compound with deep multidirectional chevron lugs for exceptional traction thresholds across wet mud. Midsole structures featuring a flexible embedded rock protection plate cater specifically to trail runners prioritizing rugged defense over low-profile minimalist ground-feel parameters. Long-term tracking reveals ultra-rigid heel counter structural trade-offs across continuous slow-pace recovery walking routes.",
        
        oldPrice: "$207.00",
        currentPrice: "$207.00",
        amazonLink: "https://amzn.to/4wYvOIo",
        marketVerifyLink: "https://amzn.to/4wYvOIo",

        comfort: 9, 
        breathability: 7, 
        energyReturn: 8, 
        ankleStability: 9, 
        flexGroove: 6, 
        lacingLock: 9,
        
        weight: 3, 
        breakInTime: 4, 
        retailPrice: 5, 
        wetSlippage: 2, 
        rubberScuff: 3, 
        dirtRetention: 4,
        
        overallScore: 85, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for technical mountain running, long-distance trail training, and rugged off-road speed segments.",
        testerNotes: "\"The upgraded chevron-style ASICSGRIP outsole chomps down on slippery singletracks with absolute authority, providing top-tier stability when fatigue sets in. The flexible woven rock plate defends beautifully against sharp limestone, though the exceptionally rigid structure of the upper heel counter can cause notable rubbing during initial breakout sessions.\"",
        
        competitors: [
            { name: "ASICS Men's Gel-Trabuco 13 (This Shoe)", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Balanced (283g)", status: "Current Selection", isCurrent: true },
            { name: "Outdoor Terrex Agravic Speed Ultra 2", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Lightweight (265g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.14, archDeflection: 0.8, creaseLimit: 175, saltResistance: 4.6, gripCoefficient: 0.95, resaleValue: 80 },

        pressureForefoot: 68,
        pressureMidfoot: 22,
        pressureHeel: 72,

        energyInitial: "78%",
        energyMid: "72%",
        energyToe: "74%",

        radarRoad: 6,
        radarTrack: 5,
        radarTrail: 10,
        radarGym: 5,

        foamNeedleLeft: "38%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 84,
        heatMidfoot: 76,
        heatHeel: 52,

        degOutsole: 16,
        degMidsole: 32,
        degUpper: 18
    },

    "ASICS-Mens-Gel-Kayano-30-Running-Shoes": {
        title: "ASICS Men's Gel-Kayano 30 Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342173/ASICS_Mens_Gel_Kayano_30_Running_Shoes_1_f7srfo.png", 
        desc: "ASICS Men's Gel-Kayano 30 premium structural stability daily road training shoes standard model layout review. Product performance testing covers long-distance base building, severe overpronation biomechanical support, and daily high-mileage road running loops. Lightweight FF BLAST PLUS ECO cushioning combined with an internal rearfoot PureGEL insert delivers an exceptionally soft, well-dampened landing zone. Upper soft engineered stretch knit fabrics focus on enhanced midfoot lockdown safety and a adaptive plush fit. Outsole design utilizes reliable durable AHAR+ traction matrices for exceptional grip across wet and dry concrete urban paths. Midsole structures featuring the innovative 4D GUIDANCE SYSTEM technology cater specifically to runners requiring adaptive stability support over traditional rigid plastic medial post frameworks. Long-term tracking reveals heavy platform profile characteristics across high-pace tempo intervals.",
        
        oldPrice: "$207.00",
        currentPrice: "$207.00",
        amazonLink: "https://amzn.to/3RxYo4q",
        marketVerifyLink: "https://amzn.to/3RxYo4q",

        comfort: 10, 
        breathability: 6, 
        energyReturn: 5, 
        ankleStability: 10, 
        flexGroove: 6, 
        lacingLock: 9,
        
        weight: 4, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 2, 
        dirtRetention: 4,
        
        overallScore: 86, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for overpronation structural support, long-distance daily miles, and max-comfort recovery pacing.",
        testerNotes: "\"The introduction of the adaptive 4D GUIDANCE SYSTEM provides an incredibly smooth ride without the aggressive stiffness of older models. The high-stack premium foam setup absorbs road harshness beautifully, though the unplated textile chassis stays notably lazy during fast track workouts.\"",
        
        competitors: [
            { name: "ASICS Men's Gel-Kayano 30 (This Shoe)", cushion: "Max Plush Recovery", durability: "1000 KM Tracked", weight: "Heavy (303g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS GEL-KAYANO 33", cushion: "Max Plush Recovery", durability: "1050 KM Tracked", weight: "Heavy (298g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.10, archDeflection: 0.5, creaseLimit: 190, saltResistance: 4.5, gripCoefficient: 0.92, resaleValue: 80 },

        pressureForefoot: 60,
        pressureMidfoot: 48,
        pressureHeel: 82,

        energyInitial: "75%",
        energyMid: "68%",
        energyToe: "58%",

        radarRoad: 10,
        radarTrack: 5,
        radarTrail: 3,
        radarGym: 6,

        foamNeedleLeft: "75%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 82,
        heatMidfoot: 72,
        heatHeel: 50,

        degOutsole: 14,
        degMidsole: 26,
        degUpper: 15
    },
    "ASICS-GEL-NIMBUS-27": {
        title: "ASICS GEL-NIMBUS 27",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342148/ASICS_GEL_NIMBUS_27_4_sc98xn.jpg", 
        desc: "ASICS GEL-NIMBUS 27 premium high-stack neutral daily training shoes standard model layout review. Product performance testing covers long-distance base building, easy recovery runs, and everyday max-cushion walking routines. Upgraded high-volume FF BLAST PLUS ECO cushioning combined with an embedded rearfoot PureGEL insert delivers cloudlike dampening under heel strike impacts. Upper engineered jacquard mesh panels replace legacy knit materials to focus on enhanced summer breathability and a plush secure midfoot lockdown. Outsole design utilizes a weight-saving Hybrid ASICSGRIP configuration with minimal strategic rubber coverage zones. Midsole structures featuring a mega-max geometric chassis cater specifically to runners prioritizing absolute raw joint protection over energetic snappy racing velocity. Long-term tracking reveals bottom-heavy sluggishness trade-offs across continuous high-pace tempo intervals.",
        
        oldPrice: "$109.00",
        currentPrice: "$109.00",
        amazonLink: "https://amzn.to/4wUxFxP",
        marketVerifyLink: "https://amzn.to/4wUxFxP",

        comfort: 10, 
        breathability: 8, 
        energyReturn: 5, 
        ankleStability: 9, 
        flexGroove: 6, 
        lacingLock: 9,
        
        weight: 4, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 4, 
        rubberScuff: 4, 
        dirtRetention: 4,
        
        overallScore: 85, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for slow recovery runs, daily cruising kilometers, and max-comfort long distance walking.",
        testerNotes: "\"The mega 44mm stack height provides an incredibly protective barrier that saves your joints on tired days. The new jacquard mesh structure fixes old airflow issues perfectly, though the unplated EVA-based foam matrix stays noticeably heavy and lazy when trying to change gears quickly.\"",
        
        competitors: [
            { name: "ASICS GEL-NIMBUS 27 (This Shoe)", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Heavy (305g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS Men's Gel-Nimbus 28", cushion: "Max Plush Recovery", durability: "900 KM Tracked", weight: "Lightweight (278g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.25, archDeflection: 1.2, creaseLimit: 160, saltResistance: 4.5, gripCoefficient: 0.90, resaleValue: 78 },

        pressureForefoot: 60,
        pressureMidfoot: 30,
        pressureHeel: 85,

        energyInitial: "78%",
        energyMid: "70%",
        energyToe: "55%",

        radarRoad: 10,
        radarTrack: 5,
        radarTrail: 2,
        radarGym: 6,

        foamNeedleLeft: "80%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 88,
        heatMidfoot: 78,
        heatHeel: 56,

        degOutsole: 24,
        degMidsole: 38,
        degUpper: 15
    },
    "ASICS-NOVABLAST-6": {
        title: "ASICS NOVABLAST 6",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342208/ASICS_NOVABLAST_6_3_fn2gjs.png", 
        desc: "ASICS NOVABLAST 6 premium high-performance responsive neutral daily training shoes standard model layout review. Product performance testing covers progressive uptempo road mileage, long-distance marathon conditioning, and daily recovery running loops. Dual-density midsole configurations combining a full-length FF BLAST MAX foam core with an ultra-springy FF TURBO SQUARED forefoot trampoline pod deliver exceptional bounce. Upper premium engineered woven fabrics focus on maximized structural airflow, lightweight compliance, and adaptive security aesthetics. Outsole design utilizes a reengineered sticky ASICSGRIP rubber compound matrix for superior traction thresholds. Midsole structures featuring geometric trampoline-inspired carvings cater specifically to neutral runners prioritizing fun bouncy transitions over stiff carbon-plated track spikes. Long-term tracking reveals specialized rearfoot energy drop trade-offs across heavy heel-striking recovery paces.",
        
        oldPrice: "$155.00",
        currentPrice: "$155.00",
        amazonLink: "https://amzn.to/4gOM225",
        marketVerifyLink: "https://amzn.to/4gOM225",

        comfort: 9, 
        breathability: 8, 
        energyReturn: 8, 
        ankleStability: 7, 
        flexGroove: 7, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 5, 
        wetSlippage: 3, 
        rubberScuff: 3, 
        dirtRetention: 4,
        
        overallScore: 88, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "ASICS NOVABLAST 6 (This Shoe)", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Lightweight (249g)", status: "Current Selection", isCurrent: true },
            { name: "ASICS Men's Gel-Nimbus 28", cushion: "Max Plush Recovery", durability: "900 KM Tracked", weight: "Lightweight (278g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.12, archDeflection: 1.1, creaseLimit: 170, saltResistance: 4.6, gripCoefficient: 0.94, resaleValue: 84 },

        pressureForefoot: 70,
        pressureMidfoot: 20,
        pressureHeel: 30,

        energyInitial: "75%",
        energyMid: "78%",
        energyToe: "70%",

        radarRoad: 10,
        radarTrack: 7,
        radarTrail: 2,
        radarGym: 7,

        foamNeedleLeft: "55%", 
        foamDensityRating: "Balanced Zone",

        heatToebox: 92,
        heatMidfoot: 82,
        heatHeel: 60,

        degOutsole: 18,
        degMidsole: 30,
        degUpper: 12
    },

    "Outdoor-Terrex-Agravic-Speed-Ultra-2-Trail-Running-Shoes": {
        title: "Outdoor Terrex Agravic Speed Ultra 2 Trail Running Shoes",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785403993/Outdoor-Terrex-Agravic-Speed-Ultra-2-Trail-Running-Shoes_w0s4xs.jpg", 
        desc: "Adidas Terrex Agravic Speed Ultra 2 high-performance outdoor trail running shoes standard model layout review. Product performance testing covers ultra-distance trail racing, high-velocity singletrack loops, and rugged off-road speed training. Ultra-responsive Lightstrike Pro dual-density foam paired with integrated Energy Rods delivers maximum energetic propulsion under aggressive forefoot strike impacts. Upper reengineered mono mesh elements focus on elite summer breathability and micro-locked structural racing security aesthetics. Outsole design utilizes upgraded deeper Continental rubber traction lugs for exceptional wet and muddy terrain grip. Midsole structures cater specifically to competitive ultra-distance racers prioritizing maximum speed and rolling rocker transitions over stiff low-profile ground-feel parameters. Long-term tracking reveals specialized lateral stability trade-offs across highly technical rocky ridges.",
        
        oldPrice: "$218.00",
        currentPrice: "$218.00",
        amazonLink: "https://amzn.to/4pwPAbH",
        marketVerifyLink: "https://amzn.to/4pwPAbH",

        comfort: 9, 
        breathability: 10, 
        energyReturn: 10, 
        ankleStability: 6, 
        flexGroove: 7, 
        lacingLock: 9,
        
        weight: 2, 
        breakInTime: 3, 
        retailPrice: 9, 
        wetSlippage: 2, 
        rubberScuff: 3, 
        dirtRetention: 5,
        
        overallScore: 89, 
        fitPercent: "35%", 
        fitVerdict: "Fit Profile: Highly Narrow Silhouette. Snug racing fit requiring size-up.",
        useCase: "Best optimized for ultra-distance trail racing, high-velocity tempo trail runs, and marathon mountain pacing.",
        testerNotes: "\"The explosive energy return from the Lightstrike Pro and rolling rocker geometry feels unmatched on runnable paths. However, the towering 44mm stack height combined with a narrow rear chassis requires intense focus across highly technical off-camber rocky slopes.\"",
        
        competitors: [
            { name: "Outdoor Terrex Agravic Speed Ultra 2 (This Shoe)", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Lightweight (265g)", status: "Current Selection", isCurrent: true },
            { name: "Nike ACG Pegasus Trail", cushion: "Balanced Foam (React)", durability: "900 KM Tracked", weight: "Balanced (320g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 0.95, archDeflection: 0.7, creaseLimit: 190, saltResistance: 4.8, gripCoefficient: 0.96, resaleValue: 86 },

        pressureForefoot: 75,
        pressureMidfoot: 20,
        pressureHeel: 45,

        energyInitial: "82%",
        energyMid: "78%",
        energyToe: "88%",

        radarRoad: 5,
        radarTrack: 6,
        radarTrail: 10,
        radarGym: 4,

        foamNeedleLeft: "35%", 
        foamDensityRating: "Responsive Nitro Racing Compound",

        heatToebox: 96,
        heatMidfoot: 88,
        heatHeel: 65,

        degOutsole: 14,
        degMidsole: 28,
        degUpper: 16
    },

    "Mens-Nike-Zoom-Vomero-5": {
        title: "Men's Nike Zoom Vomero 5",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342318/Nike_Mens_Nike_Zoom_Vomero_5_toxnio.jpg", 
        desc: "Nike Vomero 5 retro-inspired technical running and premium lifestyle sneakers standard model layout review. Product performance testing covers daily urban walking, lifestyle street wear, and extended high-intensity standing shifts. Dual-density Cushlon foam combined with Zoom Air units delivers responsive shock absorption under standard heel strike impacts. Upper multi-layered mesh panels focus on exceptional summer breathability and intricate synthetic leather design aesthetics. Outsole design utilizes reliable durable BRS 1000 carbon rubber traction matrices for premium multi-surface urban road grip. Midsole structures cater specifically to users prioritizing maximum underfoot plushness over stiff high-velocity carbon-plated propulsion parameters. Long-term tracking reveals soft dynamic foam structural compression trade-offs across heavy continuous multi-month rotations.",
        
        oldPrice: "$170.00",
        currentPrice: "$147.00",
        amazonLink: "https://amzn.to/4hrXpgx",
        marketVerifyLink: "https://amzn.to/4hrXpgx",

        comfort: 10, 
        breathability: 9, 
        energyReturn: 7, 
        ankleStability: 8, 
        flexGroove: 8, 
        lacingLock: 8,
        
        weight: 3, 
        breakInTime: 3, 
        retailPrice: 7, 
        wetSlippage: 4, 
        rubberScuff: 5, 
        dirtRetention: 6,
        
        overallScore: 88, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "Men's Nike Zoom Vomero 5 (This Shoe)", cushion: "Max Plush Recovery", durability: "850 KM Tracked", weight: "Balanced (310g)", status: "Current Selection", isCurrent: true },
            { name: "Asics Gel-Kayano 31", cushion: "Gel Support Matrix", durability: "1000 KM Tracked", weight: "Balanced (305g)", status: "Better Stability", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.30, archDeflection: 1.2, creaseLimit: 150, saltResistance: 4.5, gripCoefficient: 0.85, resaleValue: 84 },

        pressureForefoot: 65,
        pressureMidfoot: 25,
        pressureHeel: 70,

        energyInitial: "78%",
        energyMid: "72%",
        energyToe: "75%",

        radarRoad: 9,
        radarTrack: 6,
        radarTrail: 4,
        radarGym: 8,

        foamNeedleLeft: "75%", 
        foamDensityRating: "Max Plush (Recovery)",

        heatToebox: 92,
        heatMidfoot: 85,
        heatHeel: 62,

        degOutsole: 24,
        degMidsole: 38,
        degUpper: 15
    },
    "adidas-Mens-Samba-ADV-Sneakers": {
        title: "adidas Men's Samba ADV Sneakers",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342099/adidas-Mens-Samba-ADV-Sneakers_etocwa.jpg", 
        desc: "adidas Men's Samba ADV performance skateboarding and low-profile lifestyle sneakers standard model layout review. Product performance testing covers technical skate park board feel, street skating degradation, and heritage terrace fashion culture wear. Internal drop-in EVA cushioning elements deliver minimalist impact shock absorption under standard heel strike impacts. Upper double-layered premium leather panels focus on upgraded Adituff T-toe suede reinforcement and structural abrasion resilience aesthetics. Outsole design utilizes heritage flexible vulcanized gum rubber cupsole matrices for exceptional multi-surface board grip. Midsole structures cater specifically to skateboarders prioritizing micro-tactile board control over thick plush technical running cushioning parameters. Long-term tracking reveals classic low-chassis rigid flat cupsole trade-offs across continuous long-distance concrete walking routes.",
        
        oldPrice: "$109.00",
        currentPrice: "$99.00",
        amazonLink: "https://amzn.to/3TEHhOY",
        marketVerifyLink: "https://amzn.to/3TEHhOY",

        comfort: 7, 
        breathability: 5, 
        energyReturn: 4, 
        ankleStability: 7, 
        flexGroove: 8, 
        lacingLock: 8,
        
        weight: 2, 
        breakInTime: 6, 
        retailPrice: 4, 
        wetSlippage: 5, 
        rubberScuff: 3, 
        dirtRetention: 5,
        
        overallScore: 78, 
        fitPercent: "45%", 
        fitVerdict: "Fit Profile: Slightly Narrow Forefoot. Fits snug near the toe panel.",
        useCase: "Best optimized for technical skateboarding, precise board control, and minimalist vintage street styling.",
        testerNotes: "\"The double-layered Adituff reinforcement provides fantastic skate durability panels. However, the flat low-profile vulcanized rubber cupsole requires a proper break-in phase for extensive urban concrete walking.\"",
        
        competitors: [
            { name: "adidas Men's Samba ADV Sneakers (This Shoe)", cushion: "Minimalist EVA Core Insert", durability: "800 KM Tracked", weight: "Lightweight (315g)", status: "Current Selection", isCurrent: true },
            { name: "Puma Speedcat OG", cushion: "Ultra-Thin Foam Matrix", durability: "550 KM Tracked", weight: "Ultra Light (240g)", status: "Alternative Option", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.85, archDeflection: 1.5, creaseLimit: 130, saltResistance: 4.4, gripCoefficient: 0.91, resaleValue: 80 },

        pressureForefoot: 65,
        pressureMidfoot: 30,
        pressureHeel: 60,

        energyInitial: "52%",
        energyMid: "48%",
        energyToe: "55%",

        radarRoad: 8,
        radarTrack: 3,
        radarTrail: 2,
        radarGym: 6,

        foamNeedleLeft: "25%", 
        foamDensityRating: "Ultra Firm (Racing)",

        heatToebox: 72,
        heatMidfoot: 65,
        heatHeel: 50,

        degOutsole: 20,
        degMidsole: 35,
        degUpper: 18
    },


    "Nike-Air-Force-1-07": {
        title: "Nike Air Force 1 '07",
        imageURL: "https://res.cloudinary.com/oxirfozc/image/upload/v1785342311/nike_air_force_1_07_yv2xpt.jpg", 
        desc: "Nike Air Force 1 '07 heritage basketball-inspired lifestyle sneakers standard model layout review. Product performance testing covers daily urban walking, street lifestyle wear, and all-day casual standing shifts. Encapsulated full-length Air cushioning delivers reliable shock absorption under standard heel strike impacts. Upper thick leather materials focus on classic retro aesthetics and structured structural foot support. Outsole design utilizes heritage pivot-circle rubber traction matrices for exceptional multi-surface city grip. Midsole structures cater specifically to users prioritizing timeless streetwear culture over lightweight technical running performance parameters. Long-term tracking reveals heavy chassis weight trade-offs across continuous high-intensity athletic training routines.",
        
        oldPrice: "$150.00",
        currentPrice: "$150.00",
        amazonLink: "https://amzn.to/4vI1j8E",
        marketVerifyLink: "https://stockx.com",

        comfort: 8, 
        breathability: 6, 
        energyReturn: 5, 
        ankleStability: 9, 
        flexGroove: 6, 
        lacingLock: 8,
        
        weight: 3, 
        breakInTime: 4, 
        retailPrice: 7, 
        wetSlippage: 3, 
        rubberScuff: 4, 
        dirtRetention: 4,
        
        overallScore: 82, 
        fitPercent: "50%", 
        fitVerdict: "Fit Profile: Perfect True to Size. Fits like a racing glove.",
        useCase: "Best optimized for marathon pacing, tempo runs, and speed training.",
        testerNotes: "\"The carbon plate delivers explosive propulsion. However, the upper heel collar can feel a bit stiff during the first 5 kilometers.\"",
        
        competitors: [
            { name: "Nike Air Force 1 '07 (This Shoe)", cushion: "Max Cushion (Air)", durability: "750 KM Tracked", weight: "Heavy (465g)", status: "Current Selection", isCurrent: true },
            { name: "Adidas Ultraboost Light", cushion: "High Rebound (Boost)", durability: "1100 KM Tracked", weight: "Light (290g)", status: "Better Speed", isCurrent: false }
        ],
        
        telemetry: { fatigueRate: 1.42, archDeflection: 1.1, creaseLimit: 140, saltResistance: 4.8, gripCoefficient: 0.82, resaleValue: 78 },

        pressureForefoot: 70,
        pressureMidfoot: 20,
        pressureHeel: 30,

        energyInitial: "75%",
        energyMid: "78%",
        energyToe: "70%",

        radarRoad: 9,
        radarTrack: 7,
        radarTrail: 3,
        radarGym: 8,

        foamNeedleLeft: "30%", 
        foamDensityRating: "Responsive Nitro Racing Compound",

        heatToebox: 85,
        heatMidfoot: 62,
        heatHeel: 45,

        degOutsole: 18,
        degMidsole: 30,
        degUpper: 12
    },



};

function loadProductReview() {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    if (!productId || !productsData[productId]) {
        productId = "nike-air"; 
    }

    const product = productsData[productId];

    // --- Dynamic Text & Image Elements Data Binding ---
    if(document.getElementById("product-title")) document.getElementById("product-title").innerText = product.title;
    if(document.getElementById("product-image")) {
        document.getElementById("product-image").src = product.imageURL;
        document.getElementById("product-image").alt = product.title;
    }
    if(document.getElementById("product-desc")) document.getElementById("product-desc").innerText = product.desc;
    if(document.getElementById("best-use-case")) document.getElementById("best-use-case").innerText = product.useCase;
    if(document.getElementById("tester-notes")) document.getElementById("tester-notes").innerHTML = product.testerNotes;
    
    // Price Matrix & Affiliate Linking Updates
    if(document.getElementById("product-original-price")) document.getElementById("product-original-price").innerText = product.oldPrice;
    if(document.getElementById("product-current-price")) document.getElementById("product-current-price").innerText = product.currentPrice;
    if(document.getElementById("amazon-buy-btn")) document.getElementById("amazon-buy-btn").href = product.amazonLink;
    if(document.getElementById("market-value-link")) document.getElementById("market-value-link").href = product.marketVerifyLink;

    // Sizing Dot positioning Mapping
    if(document.getElementById("fit-indicator-dot")) document.getElementById("fit-indicator-dot").style.left = product.fitPercent;
    if(document.getElementById("fit-verdict-text")) document.getElementById("fit-verdict-text").innerText = product.fitVerdict;

    // Foam profile timeline status updates
    if(document.getElementById("foam-indicator-needle")) document.getElementById("foam-indicator-needle").style.left = product.foamNeedleLeft;
    if(document.getElementById("txt-foam-density")) document.getElementById("txt-foam-density").innerText = product.foamDensityRating;

    // Static text indicators for Energy Return Curve Phases
    if(document.getElementById("txt-energy-initial")) document.getElementById("txt-energy-initial").innerText = product.energyInitial;
    if(document.getElementById("txt-energy-mid")) document.getElementById("txt-energy-mid").innerText = product.energyMid;
    if(document.getElementById("txt-energy-toe")) document.getElementById("txt-energy-toe").innerText = product.energyToe;

    // Cross Competitor Matrix Generator Table
    if(document.getElementById("comparison-rows")) {
        let tableHTML = "";
        product.competitors.forEach(comp => {
            tableHTML += `
                <tr class="${comp.isCurrent? 'current-shoe-row' : ''}">
                    <td>${comp.name}</td>
                    <td>${comp.cushion}</td>
                    <td>${comp.durability}</td>
                    <td>${comp.weight}</td>
                    <td><span class="comp-badge ${comp.isCurrent? 'badge-neutral' : 'badge-win'}">${comp.status}</span></td>
                </tr>
            `;
        });
        document.getElementById("comparison-rows").innerHTML = tableHTML;
    }

    // 5. Execution threshold delay timer for smooth loading visuals animation
    setTimeout(() => {
        // 6 PROS Lines Logic Configuration
        if(document.getElementById("bar-comfort")) document.getElementById("bar-comfort").style.width = `${product.comfort * 10}%`; 
        if(document.getElementById("num-comfort")) document.getElementById("num-comfort").innerText = product.comfort;
        if(document.getElementById("bar-breath")) document.getElementById("bar-breath").style.width = `${product.breathability * 10}%`; 
        if(document.getElementById("num-breath")) document.getElementById("num-breath").innerText = product.breathability;
        if(document.getElementById("bar-energy")) document.getElementById("bar-energy").style.width = `${product.energyReturn * 10}%`; 
        if(document.getElementById("num-energy")) document.getElementById("num-energy").innerText = product.energyReturn;
        if(document.getElementById("bar-ankle")) document.getElementById("bar-ankle").style.width = `${product.ankleStability * 10}%`; 
        if(document.getElementById("num-ankle")) document.getElementById("num-ankle").innerText = product.ankleStability;
        if(document.getElementById("bar-flex")) document.getElementById("bar-flex").style.width = `${product.flexGroove * 10}%`; 
        if(document.getElementById("num-flex")) document.getElementById("num-flex").innerText = product.flexGroove;
        if(document.getElementById("bar-lock")) document.getElementById("bar-lock").style.width = `${product.lacingLock * 10}%`; 
        if(document.getElementById("num-lock")) document.getElementById("num-lock").innerText = product.lacingLock;

        // 6 CONS Lines Logic Configuration
        if(document.getElementById("bar-weight")) document.getElementById("bar-weight").style.width = `${product.weight * 10}%`; 
        if(document.getElementById("num-weight")) document.getElementById("num-weight").innerText = product.weight;
        if(document.getElementById("bar-breakin")) document.getElementById("bar-breakin").style.width = `${product.breakInTime * 10}%`; 
        if(document.getElementById("num-breakin")) document.getElementById("num-breakin").innerText = product.breakInTime;
        if(document.getElementById("bar-price")) document.getElementById("bar-price").style.width = `${product.retailPrice * 10}%`; 
        if(document.getElementById("num-price")) document.getElementById("num-price").innerText = product.retailPrice;
        if(document.getElementById("bar-slip")) document.getElementById("bar-slip").style.width = `${product.wetSlippage * 10}%`; 
        if(document.getElementById("num-slip")) document.getElementById("num-slip").innerText = product.wetSlippage;
        if(document.getElementById("bar-scuff")) document.getElementById("bar-scuff").style.width = `${product.rubberScuff * 10}%`; 
        if(document.getElementById("num-scuff")) document.getElementById("num-scuff").innerText = product.rubberScuff;
        if(document.getElementById("bar-mud")) document.getElementById("bar-mud").style.width = `${product.dirtRetention * 10}%`; 
        if(document.getElementById("num-mud")) document.getElementById("num-mud").innerText = product.dirtRetention;

        // Big Verdict Circular Chart Score Target
         if (document.getElementById("circle-progress")) {
            document.getElementById("circle-progress").style.strokeDasharray = product.overallScore + ", 100";
        }
        if (document.getElementById("circle-text")) {
            document.getElementById("circle-text").textContent = product.overallScore + "%"; // Fixed with textContent for instant number changes
        }
        // Biomechanical Pressure Distribution Map Configuration
        if(document.getElementById("bar-pressure-forefoot")) document.getElementById("bar-pressure-forefoot").style.width = `${product.pressureForefoot}%`;
        if(document.getElementById("num-pressure-forefoot")) document.getElementById("num-pressure-forefoot").innerText = `${product.pressureForefoot}% Load`;
        if(document.getElementById("bar-pressure-midfoot")) document.getElementById("bar-pressure-midfoot").style.width = `${product.pressureMidfoot}%`;
        if(document.getElementById("num-pressure-midfoot")) document.getElementById("num-pressure-midfoot").innerText = `${product.pressureMidfoot}% Load`;
        if(document.getElementById("bar-pressure-heel")) document.getElementById("bar-pressure-heel").style.width = `${product.pressureHeel}%`;
        if(document.getElementById("num-pressure-heel")) document.getElementById("num-pressure-heel").innerText = `${product.pressureHeel}% Load`;

        // Outsole Surface Adaptation Radar Bars
        if(document.getElementById("bar-radar-road")) document.getElementById("bar-radar-road").style.width = `${product.radarRoad * 10}%`;
        if(document.getElementById("num-radar-road")) document.getElementById("num-radar-road").innerText = `${product.radarRoad}/10`;
        if(document.getElementById("bar-radar-track")) document.getElementById("bar-radar-track").style.width = `${product.radarTrack * 10}%`;
        if(document.getElementById("num-radar-track")) document.getElementById("num-radar-track").innerText = `${product.radarTrack}/10`;
        if(document.getElementById("bar-radar-trail")) document.getElementById("bar-radar-trail").style.width = `${product.radarTrail * 10}%`;
        if(document.getElementById("num-radar-trail")) document.getElementById("num-radar-trail").innerText = `${product.radarTrail}/10`;
        if(document.getElementById("bar-radar-gym")) document.getElementById("bar-radar-gym").style.width = `${product.radarGym * 10}%`;
        if(document.getElementById("num-radar-gym")) document.getElementById("num-radar-gym").innerText = `${product.radarGym}/10`;

        // Thermal Dissipation Ventilation Grids
        if(document.getElementById("bar-heat-toebox")) document.getElementById("bar-heat-toebox").style.width = `${product.heatToebox}%`;
        if(document.getElementById("num-heat-toebox")) document.getElementById("num-heat-toebox").innerText = `${product.heatToebox}%`;
        if(document.getElementById("bar-heat-midfoot")) document.getElementById("bar-heat-midfoot").style.width = `${product.heatMidfoot}%`;
        if(document.getElementById("num-heat-midfoot")) document.getElementById("num-heat-midfoot").innerText = `${product.heatMidfoot}%`;
        if(document.getElementById("bar-heat-heel")) document.getElementById("bar-heat-heel").style.width = `${product.heatHeel}%`;
        if(document.getElementById("num-heat-heel")) document.getElementById("num-heat-heel").innerText = `${product.heatHeel}%`;

        // Wear-Tear Simulation Degradation Forecasts
        if(document.getElementById("bar-deg-outsole")) document.getElementById("bar-deg-outsole").style.width = `${product.degOutsole}%`;
        if(document.getElementById("txt-deg-outsole")) document.getElementById("txt-deg-outsole").innerText = `${product.degOutsole}%`;
        if(document.getElementById("bar-deg-midsole")) document.getElementById("bar-deg-midsole").style.width = `${product.degMidsole}%`;
        if(document.getElementById("txt-deg-midsole")) document.getElementById("txt-deg-midsole").innerText = `${product.degMidsole}%`;
        if(document.getElementById("bar-deg-upper")) document.getElementById("bar-deg-upper").style.width = `${product.degUpper}%`;
        if(document.getElementById("txt-deg-upper")) document.getElementById("txt-deg-upper").innerText = `${product.degUpper}%`;

        // Specialized Micro Biomechanical Telemetry Circle Updates
      const tel = product.telemetry;

        // Box 1: Beta Mileage Fatigue Rate
        if (document.getElementById("t-circle-1")) {
            document.getElementById("t-circle-1").style.strokeDasharray = (tel.fatigueRate * 20) + ", 100";
        }
        if (document.getElementById("t-val-1")) {
            document.getElementById("t-val-1").textContent = tel.fatigueRate + "%"; 
        }

        // Box 2: Arch Deflection Index
        if (document.getElementById("t-circle-2")) {
            document.getElementById("t-circle-2").style.strokeDasharray = (tel.archDeflection * 30) + ", 100";
        }
        if (document.getElementById("t-val-2")) {
            document.getElementById("t-val-2").textContent = tel.archDeflection + "mm"; 
        }

        // Box 3: Sole Crease Limit
        if (document.getElementById("t-circle-3")) {
            document.getElementById("t-circle-3").style.strokeDasharray = ((tel.creaseLimit / 250) * 100) + ", 100";
        }
        if (document.getElementById("t-val-3")) {
            document.getElementById("t-val-3").textContent = tel.creaseLimit + "k"; 
        }

        // Box 4: Sweat Salt Resistance
        if (document.getElementById("t-circle-4")) {
            document.getElementById("t-circle-4").style.strokeDasharray = ((tel.saltResistance / 5) * 100) + ", 100";
        }
        if (document.getElementById("t-val-4")) {
            document.getElementById("t-val-4").textContent = tel.saltResistance; 
        }

        // Box 5: Outsole Grip Coefficient
        if (document.getElementById("t-circle-5")) {
            document.getElementById("t-circle-5").style.strokeDasharray = tel.gripCoefficient + ", 100";
        }
        if (document.getElementById("t-val-5")) {
            document.getElementById("t-val-5").textContent = "0." + tel.gripCoefficient + "μ"; 
        }

        // Box 6: Secondary Resale Value
        if (document.getElementById("t-circle-6")) {
            document.getElementById("t-circle-6").style.strokeDasharray = tel.resaleValue + ", 100";
        }
        if (document.getElementById("t-val-6")) {
            document.getElementById("t-val-6").textContent = tel.resaleValue + "%"; 
        }

        // (Aapke baki ke naye graphics sections ka code jaise pressure bars, thermal bars yahan chal raha hoga...)

    }, 200); // Is bracket aur number ke baad loadProductReview function khatam ho jata hai
}

// Dom content state validation tracker trigger loop
window.addEventListener('DOMContentLoaded', loadProductReview);


/**
 * Dynamic Foot Size Converter & Brand-Specific Fitting Algorithm
 */
function calculateGlobalSizes() {
    const cmInput = document.getElementById("foot-cm-input").value;
    const cm = parseFloat(cmInput);
    
    const resultsPanel = document.getElementById("size-results-panel");
    const errorText = document.getElementById("calc-error-text");

    // Input boundary check (Standard male/female adult constraints)
    if (isNaN(cm) || cm < 22 || cm > 32) {
        resultsPanel.style.display = "none";
        errorText.style.display = "block";
        return;
    }

    errorText.style.display = "none";

    // 1. Math-based Global Standard Interpolations
    let usSize = ((cm - 22) * 1.27) + 4; 
    usSize = Math.round(usSize * 2) / 2; // Rounds smoothly to nearest 0.5 step

    let ukSize = usSize - 1;
    if (ukSize < 3) ukSize = 3;

    let euSize = (cm * 1.5) + 2;
    euSize = Math.round(euSize);

    // Update Global Standards UI elements
    document.getElementById("res-us").innerText = `US ${usSize}`;
    document.getElementById("res-uk").innerText = `UK ${ukSize}`;
    document.getElementById("res-eu").innerText = `EU ${euSize}`;

    // 2. Brand Specific Matrix Array Maps (Lab Measured Core Charts)
    // Nike Mapping Model
    let nike = "US " + usSize;
    if(cm >= 26.2 && cm <= 26.6) nike = "US 8.5 (True)";
    else if(cm > 26.6 && cm <= 27.1) nike = "US 9 (Snug)";
    
    // Adidas Mapping Model (Adidas runs slightly wider/larger in standard foam steps)
    let adidas = "US " + usSize;
    if (usSize >= 8) {
        adidas = "US " + (usSize) + " 1/3";
    }

    // Asics Mapping Model (Asics architecture fits structurally narrow)
    let asics = "US " + (usSize + 0.5) + " (Suggest Half Size Up)";
    if(cm >= 26.5 && cm <= 27.0) asics = "US 9 (Performance Fit)";
    else if(cm > 27.0 && cm <= 27.5) asics = "US 9.5";

    // Update Brand Selection elements data outputs
    document.getElementById("match-nike").innerText = nike;
    document.getElementById("match-adidas").innerText = adidas;
    document.getElementById("match-asics").innerText = asics;

    // Reveal output layout dashboard view dynamically
    resultsPanel.style.display = "grid";
}
