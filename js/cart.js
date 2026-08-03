/*=========================================
        MIAMI BEAUTY LOUNGE
=========================================*/

const services = [

   {
    category: "Feet Care",
    icon: "fa-shoe-prints",
    items: [
        {
            id: 1,
            name: "Spa Manicare",
            description: "A luxurious spa pedicure including foot soak, exfoliation, cuticle care, massage, mask, and nail finishing.",
            duration: "30 mins",
            price: 600,
            image: "img/services/spamanipure.webp"
        },
        {
            id: 2,
            name: "Regular Manicare",
            description: "A luxurious spa pedicure including foot soak, exfoliation, cuticle care, massage, mask, and nail finishing.",
            duration: "20 mins",
            price: 350,
            image: "img/services/spamanipure.webp"
        },
        {
            id: 3,
            name: "Spa Pedicure (MTS)",
            description: "A luxurious spa pedicure including foot soak, exfoliation, cuticle care, massage, mask, and nail finishing.",
            duration: "60 mins",
            price: 1100,
            image: "img/services/spapedi.webp"
        },
        {
            id: 4,
            name: "Regular Pedicure",
            description: "Classic pedicure with foot soak, nail trimming, cuticle care, scrub, and regular polish.",
            duration: "45 mins",
            price: 800,
            image: "img/services/spapedi.webp"
        },
        {
            id: 5,
            name: "Luxury Pedicure",
            description: "Premium pedicure with intensive foot care, deep exfoliation, relaxing massage, mask, and premium products.",
            duration: "90 mins",
            price: 2500,
            image: "img/services/spapedi.webp"
        },
        {
            id: 6,
            name: "Heel Peel Treatment",
            description: "Specialized treatment for dry, rough, and cracked heels using advanced exfoliation and hydration therapy.",
            duration: "60 mins",
            price: 1800,
            image: "img/services/heelpeel.webp"
        },
        {
            id: 7,
            name: "Nail Paint - Regular Polish",
            description: "Professional application of regular nail polish with your preferred shade.",
            duration: "15 mins",
            price: 200,
            image: "img/services/nailpolish.webp"
        },
        {
            id: 8,
            name: "Nail Paint - Gel Polish",
            description: "Long-lasting gel nail polish with a glossy finish and chip-resistant protection.",
            duration: "30 mins",
            price: 500,
            image: "img/services/nailpolish.webp"
        }
    ]
},
{
    category: "Hand Cleaning",
    icon: "fa-paint-brush",
    items: [
        {
            id: 9,
            name: "Hand Dressing",
            description: "Professional hand grooming service including cleaning, nail shaping, and cuticle care for neat and healthy hands.",
            duration: "20 mins",
            price: 200,
            image: "img/services/handclean.webp"
        },
        {
            id: 10,
            name: "Full Arms Pack",
            description: "Nourishing full arms pack that cleanses, hydrates, and brightens the skin, leaving it soft and refreshed.",
            duration: "30 mins",
            price: 500,
            image: "img/services/handclean.webp"
        },
        {
            id: 11,
            name: "Paraffin Hand Care",
            description: "Warm paraffin wax treatment that deeply moisturizes dry hands and improves skin softness.",
            duration: "45 mins",
            price: 500,
            image: "img/services/handcare.webp"
        },
        {
            id: 12,
            name: "Luxury Candle Hand Spa",
            description: "Premium candle wax hand spa with exfoliation, massage, and hydration for silky smooth hands.",
            duration: "60 mins",
            price: 3000,
            image: "img/services/handcare.webp"
        },
        {
            id: 13,
            name: "Premium Paraffin Hand Spa",
            description: "Complete hand spa with paraffin wax therapy, massage, and intensive moisturizing treatment.",
            duration: "60 mins",
            price: 1500,
            image: "img/services/handcare.webp"
        }
    ]
},

{
    category: "Waxing (Normal)",
    icon: "fa-spa",
    items: [
        {
            id: 14,
            name: "Eyebrows",
            description: "Professional eyebrow shaping using premium wax for a clean and defined look.",
            duration: "10 mins",
            price: 50,
            image: "img/waxing.webp"},
        {
            id: 15,
            name: "Upper Lip",
            description: "Quick and gentle upper lip hair removal with minimal discomfort.",
            duration: "10 mins",
            price: 50,
            image: "img/waxing.webp"  },
        {
            id: 16,
            name: "Forehead",
            description: "Smooth forehead waxing for a neat and polished appearance.",
            duration: "10 mins",
            price: 200,
            image: "img/waxing.webp" },
        {
            id: 17,
            name: "Underarms",
            description: "Gentle underarm waxing for smooth and long-lasting results.",
            duration: "20 mins",
            price: 300,
            image: "img/waxing.webp" },
        {
            id: 18,
            name: "Half Arms",
            description: "Hair removal from elbow to wrist using premium wax.",
            duration: "20 mins",
            price: 300,
            image: "img/waxing.webp"  },
        {
            id: 19,
            name: "Half Legs",
            description: "Waxing service for smooth and silky lower legs.",
            duration: "30 mins",
            price: 350,
            image: "img/waxing.webp"  },
        {
            id: 20,
            name: "3/4 Legs",
            description: "Waxing from ankle to above the knee for longer-lasting smoothness.",
            duration: "35 mins",
            price: 500,
            image: "img/waxing.webp"
        },
        {
            id: 21,
            name: "Full Arms",
            description: "Complete arm waxing from shoulder to wrist.",
            duration: "35 mins",
            price: 500,
            image: "img/waxing.webp"  },
        {
            id: 22,
            name: "Full Legs",
            description: "Complete leg waxing for soft and smooth skin.",
            duration: "45 mins",
            price: 700,
            image: "img/waxing.webp"  },
        {
            id: 23,
            name: "Full Body Wax",
            description: "Complete body waxing using standard premium wax.",
            duration: "120 mins",
            price: 2200,
            image: "img/waxing.webp"  }
    ]
},
{
    category: "Waxing (Rich)",
    icon: "fa-crown",
    items: [
        {
            id: 24,
            name: "Eyebrows",
            description: "Luxury eyebrow waxing with skin-friendly rich wax for sensitive skin.",
            duration: "10 mins",
            price: 100,
            image: "img/waxing.webp",
        },
        {
            id: 25,
            name: "Upper Lip",
            description: "Premium rich wax for gentle and comfortable upper lip hair removal.",
            duration: "10 mins",
            price: 100,
            image: "img/waxing.webp" },
        {
            id: 26,
            name: "Forehead",
            description: "Luxury forehead waxing with premium rich wax for smoother skin.",
            duration: "10 mins",
            price: 400,
            image: "img/waxing.webp"},
        {
            id: 27,
            name: "Underarms",
            description: "Rich wax treatment suitable for sensitive skin and long-lasting smoothness.",
            duration: "20 mins",
            price: 500,
            image: "img/waxing.webp"},
        {
            id: 28,
            name: "Half Arms",
            description: "Premium rich wax for softer and irritation-free arm waxing.",
            duration: "20 mins",
            price: 560,
            image: "img/waxing.webp" },
        {
            id: 29,
            name: "Half Legs",
            description: "Luxury rich wax treatment for silky smooth lower legs.",
            duration: "30 mins",
            price: 600,
            image: "img/waxing.webp" },
        {
            id: 30,
            name: "3/4 Legs",
            description: "Premium waxing with rich wax for maximum comfort and smoothness.",
            duration: "35 mins",
            price: 700,
            image: "img/waxing.webp"
        },
        {
            id: 31,
            name: "Full Arms",
            description: "Complete arm waxing using luxury rich wax.",
            duration: "35 mins",
            price: 700,
            image: "img/waxing.webp" },
        {
            id: 32,
            name: "Full Legs",
            description: "Luxury full leg waxing for smooth and radiant skin.",
            duration: "45 mins",
            price: 1200,
            image: "img/waxing.webp" },
        {
            id: 33,
            name: "Full Body Wax",
            description: "Premium full body waxing using rich wax suitable for all skin types.",
            duration: "120 mins",
            price: 3500,
            image: "img/waxing.webp" }
    ]
},
{
    category: "Threading",
    icon: "fa-spa",
    items: [
        {
            id: 34,
            name: "Eyebrow Threading",
            description: "Professional eyebrow shaping using precise threading for a clean and natural look.",
            duration: "15 mins",
            price: 50,
           image: "img/threading.webp"       },
        {
            id: 35,
            name: "Upper Lip Threading",
            description: "Quick and gentle upper lip hair removal using traditional threading techniques.",
            duration: "10 mins",
            price: 50,
           image: "img/threading.webp"
        },
        {
            id: 36,
            name: "Forehead Threading",
            description: "Removes unwanted hair from the forehead for a neat and polished appearance.",
            duration: "10 mins",
            price: 50,
           image: "img/threading.webp"        },
        {
            id: 37,
            name: "Full Face Threading",
            description: "Complete facial hair removal including eyebrows, forehead, upper lip, chin, and side locks.",
            duration: "30 mins",
            price: 300,
           image: "img/threading.webp"
        },
        {
            id: 38,
            name: "Eyebrow Tint (Dye)",
            description: "Enhance your eyebrows with a professional eyebrow tint for a fuller and defined look.",
            duration: "20 mins",
            price: 500,
           image: "img/threading.webp"  }
    ]
},{
    category: "Body Massage",
    icon: "fa-spa",
    items: [
        {
            id: 39,
            name: "Full Body Polish",
            description: "A luxurious body polishing treatment that exfoliates dead skin cells, improves skin texture, and leaves your skin soft, smooth, and glowing.",
            duration: "90 mins",
            price: 5500,
            image: "img/bodymassege.webp"    },
        {
            id: 40,
            name: "Back Massage",
            description: "A relaxing back massage that relieves muscle tension, reduces stress, and improves blood circulation.",
            duration: "30 mins",
            price: 1000,
            image: "img/bodymassege.webp"},
        {
            id: 41,
            name: "Full Body Oil Massage",
            description: "A rejuvenating full body massage using premium aromatic oils to relax muscles and restore energy.",
            duration: "45 mins",
            price: 3200,
            image: "img/bodymassege.webp"
        },
        {
            id: 42,
            name: "Full Leg Massage",
            description: "A soothing leg massage that reduces fatigue, improves circulation, and relaxes tired muscles.",
            duration: "30 mins",
            price: 1000,
            image: "img/bodymassege.webp"    },
        {
            id: 43,
            name: "Full Hand Massage",
            description: "A therapeutic hand and arm massage that relieves stress and improves flexibility and circulation.",
            duration: "30 mins",
            price: 800,
            image: "img/bodymassege.webp"     },
        {
            id: 44,
            name: "Back & Neck Massage",
            description: "A focused massage for the back and neck to ease stiffness, reduce pain, and promote relaxation.",
            duration: "20 mins",
            price: 1000,
            image: "img/bodymassege.webp"     }
    ]
},{
    category: "Bleach & De-Tan",
    icon: "fa-umbrella-beach",
    items: [
        {
            id: 45,
            name: "Oxy Life Bleach",
            description: "A gentle oxygen-based facial bleach that brightens the skin and gives an instant natural glow.",
            duration: "15 mins",
            price: 300,
            image: "img/bleach.webp"},
        {
            id: 46,
            name: "Gold Bleach",
            description: "Premium gold bleach that lightens facial hair and enhances skin radiance with a golden glow.",
            duration: "20 mins",
            price: 300,
            image: "img/bleach.webp"       
        },
        {
            id: 47,
            name: "Face & Neck De-Tan",
            description: "Removes tanning from the face and neck while restoring the skin's natural brightness.",
            duration: "20 mins",
            price: 400,
            image: "img/bleach.webp"},
        {
            id: 48,
            name: "Front & Back De-Tan",
            description: "Deep cleansing and de-tan treatment for the front and back to remove sun tan and dullness.",
            duration: "30 mins",
            price: 400,
            image: "img/bleach.webp" },
        {
            id: 49,
            name: "Full Arms De-Tan",
            description: "Professional de-tan treatment for both arms, leaving the skin brighter and smoother.",
            duration: "25 mins",
            price: 800,
            image: "img/bleach.webp"},
        {
            id: 50,
            name: "3/4 Arms De-Tan",
            description: "De-tan treatment for three-quarter arms to reduce sun tan and uneven skin tone.",
            duration: "25 mins",
            price: 600,
            image: "img/bleach.webp"
        },
        {
            id: 51,
            name: "Half Legs De-Tan",
            description: "Brightening de-tan treatment for the lower legs to restore smooth and even-toned skin.",
            duration: "25 mins",
            price: 200,
            image: "img/bleach.webp"},
        {
            id: 52,
            name: "Full Legs De-Tan",
            description: "Complete de-tan treatment for both legs to remove tanning and improve skin texture.",
            duration: "30 mins",
            price: 1200,
            image: "img/bleach.webp"},
        {
            id: 53,
            name: "3/4 Legs De-Tan",
            description: "Professional de-tan treatment for three-quarter legs with skin-brightening benefits.",
            duration: "20 mins",
            price: 800,
            image: "img/bleach.webp"
        },
        {
            id: 54,
            name: "Herbal Hand De-Tan",
            description: "Natural herbal de-tan treatment specially designed to brighten and nourish your hands.",
            duration: "20 mins",
            price: 400,
            image: "img/bleach.webp"  }
    ]
},{
    category: "Chemical Peel Treatment",
    icon: "fa-leaf",
    items: [
        {
            id: 55,
            name: "Pigmentation Treatment",
            description: "Advanced chemical peel treatment to reduce pigmentation, dark spots, and uneven skin tone.",
            duration: "60 mins",
            price: 3500,
            image: "img/pig.webp"
        },
        {
            id: 56,
            name: "Acne Peel (APC)",
            description: "Specialized peel treatment designed to reduce acne, control oil production, and improve skin texture.",
            duration: "45 mins",
            price: 2500,
            image: "img/pig.webp"   
        }, 
               {
            id: 57,
            name: "Neck Pigmentation Treatment",
            description: "Chemical peel treatment that helps lighten neck pigmentation and restore an even skin tone.",
            duration: "45 mins",
            price: 2500,
            image: "img/pig.webp"    },
        {
            id: 58,
            name: "Under Eye Treatment",
            description: "Professional treatment to reduce dark circles, fine lines, and tired-looking eyes.",
            duration: "30 mins",
            price: 800,
            image: "img/pig.webp"      },
        {
            id: 59,
            name: "Skin Whitening Treatment",
            description: "Skin brightening peel treatment that enhances complexion and improves overall skin radiance.",
            duration: "60 mins",
            price: 4500,
            image: "img/pig.webp" },
        {
            id: 60,
            name: "Hand De-Tan Treatment",
            description: "Chemical peel treatment to remove tanning, pigmentation, and dullness from the hands.",
            duration: "45 mins",
            price: 5000,
            image: "img/pig.webp"       },
        {
            id: 61,
            name: "Feet De-Tan Treatment",
            description: "Professional peel treatment to remove tanning and improve the appearance of the feet.",
            duration: "45 mins",
            price: 2500,
            image: "img/pig.webp"       },
        {
            id: 62,
            name: "Underarm Pigmentation Treatment",
            description: "Specialized peel treatment to reduce underarm pigmentation and brighten the skin.",
            duration: "40 mins",
            price: 2000,
            image: "img/pig.webp"        },
        {
            id: 63,
            name: "Intimate Area Pigmentation Treatment",
            description: "Safe and professional treatment to reduce pigmentation in intimate areas and improve skin tone.",
            duration: "60 mins",
            price: 10000,
            image: "img/pig.webp"        },
        {
            id: 64,
            name: "Micro Needling",
            description: "Collagen induction therapy that helps reduce acne scars, fine lines, enlarged pores, and improves skin texture.",
            duration: "60 mins",
            price: 5000,
            image: "img/pig.webp" },
        {
            id: 65,
            name: "Scar Reduction Treatment",
            description: "Advanced treatment to reduce acne scars, blemishes, and improve skin smoothness.",
            duration: "60 mins",
            price: 3000,
            image: "img/pig.webp" },
        {
            id: 66,
            name: "Green Sea Peel",
            description: "Natural herbal peel treatment that deeply exfoliates the skin, improves texture, and restores a healthy glow.",
            duration: "75 mins",
            price: 6000,
            image: "img/pig.webp" }
    ]
},
{
    category: "Facial Treatment",
    icon: "fa-spa",
    items: [
        {
            id: 67,
            name: "Fruit Facial",
            description: "Refreshing fruit-based facial that cleanses, hydrates, and restores your natural glow.",
            duration: "30 mins",
            price: 900
,
image: "img/facial.webp"        },
        {
            id: 68,
            name: "Clean Up",
            description: "Deep cleansing treatment to remove dirt, excess oil, and impurities from the skin.",
            duration: "20 mins",
            price: 500
,
image: "img/facial.webp"        },
        {
            id: 69,
            name: "Hydra Glow Clean Up",
            description: "Hydrating clean-up treatment that refreshes dull skin and improves skin texture.",
            duration: "30 mins",
            price: 1000
           , image: "img/facial.webp"
        },
        {
            id: 70,
            name: "Hydra Facial",
            description: "Advanced hydration facial that deeply nourishes, exfoliates, and rejuvenates the skin.",
            duration: "60 mins",
            price: 2500
           , image: "img/facial.webp"
        },
        {
            id: 71,
            name: "Hydra Facial Plus",
            description: "Premium Hydra Facial with intensive hydration and anti-aging benefits.",
            duration: "75 mins",
            price: 1500
           , image: "img/facial.webp"
        },
        {
            id: 72,
            name: "De-Tan Facial",
            description: "Removes tanning, brightens the complexion, and restores even skin tone.",
            duration: "45 mins",
            price: 1200
           , image: "img/facial.webp"
        },
        {
            id: 73,
            name: "Gold Facial",
            description: "Luxurious gold facial that improves skin elasticity and adds a radiant glow.",
            duration: "60 mins",
            price: 2500
           , image: "img/facial.webp"
        },
        {
            id: 74,
            name: "24K Gold Facial (Signature)",
            description: "Premium signature 24K gold facial for intense nourishment, brightness, and skin rejuvenation.",
            duration: "90 mins",
            price: 3500
           , image: "img/facial.webp"
        },
        {
            id: 75,
            name: "Age Reversal Facial",
            description: "Anti-aging facial that helps reduce fine lines, wrinkles, and improves skin firmness.",
            duration: "40 mins",
            price: 2000
           , image: "img/facial.webp"
        },
        {
            id: 76,
            name: "Herbal Facial",
            description: "Natural herbal facial suitable for sensitive skin, leaving it fresh and healthy.",
            duration: "45 mins",
            price: 800
,
image: "img/facial.webp"        },
        {
    id: 77,
    name: "Skin Whitening Facial",
    description: "Brightening facial treatment that improves skin tone, reduces dullness, and enhances natural radiance.",
    duration: "60 mins",
    price: 1800
   , image: "img/facial.webp"
},
{
    id: 78,
    name: "Korean Peel Mask",
    description: "Advanced Korean peel-off mask that deeply hydrates, tightens pores, and leaves the skin glowing.",
    duration: "45 mins",
    price: 800
,
image: "img/facial.webp"},
{
    id: 79,
    name: "Korean Glass Skin Facial",
    description: "Premium Korean facial designed to achieve smooth, radiant, and glass-like skin.",
    duration: "90 mins",
    price: 4000
   , image: "img/facial.webp"
},
{
    id: 80,
    name: "Acne Facial",
    description: "Specialized facial that helps control acne, reduce oil production, and soothe inflamed skin.",
    duration: "60 mins",
    price: 1400
   , image: "img/facial.webp"
},
{
    id: 81,
    name: "Acne Treatment",
    description: "Professional acne treatment targeting pimples, acne marks, and skin inflammation.",
    duration: "75 mins",
    price: 2500
   , image: "img/facial.webp"
},
{
    id: 82,
    name: "Dark Neck Treatment",
    description: "Treatment to reduce neck pigmentation and restore an even skin tone.",
    duration: "60 mins",
    price: 2500
   , image: "img/facial.webp"
},
{
    id: 83,
    name: "Pigmentation Treatment",
    description: "Advanced facial treatment that reduces pigmentation, dark spots, and uneven skin tone.",
    duration: "75 mins",
    price: 3500
   , image: "img/facial.webp"
},
{
    id: 84,
    name: "Tan Removal Treatment",
    description: "Professional de-tan therapy that removes sun tan and restores the skin's natural brightness.",
    duration: "60 mins",
    price: 5000
   , image: "img/facial.webp"
},
{
    id: 85,
    name: "Melasma Treatment",
    description: "Specialized treatment for melasma, helping reduce stubborn pigmentation and skin discoloration.",
    duration: "90 mins",
    price: 5000
   , image: "img/facial.webp"
},
{
    id: 86,
    name: "Korean Glass Skin Treatment",
    description: "Luxury Korean skincare treatment for deep hydration, pore refinement, and flawless glass skin.",
    duration: "120 mins",
    price: 5500
   , image: "img/facial.webp"
},
{
    id: 87,
    name: "Under Eye Treatment",
    description: "Targets dark circles, puffiness, and fine lines for a refreshed and youthful appearance.",
    duration: "30 mins",
    price: 800
,
image: "img/facial.webp"}
    ]
},

{
    category: "Hair Spa Treatment",
    icon: "fa-spa",
    items: [
        {
            id: 88,
            name: "Keratin Hair Spa",
            description: "Deep keratin nourishment that repairs damaged hair, reduces frizz, and adds natural shine.",
            duration: "60 mins",
            price: 3500,
            image: "img/hairspa.webp"  },
        {
            id: 89,
            name: "Hair Spa (Short Hair)",
            description: "Hydrating hair spa specially designed for short hair with scalp massage.",
            duration: "45 mins",
            price: 1000,
            image: "img/hairspa.webp"},
        {
            id: 90,
            name: "Hair Spa (Medium Hair)",
            description: "Nourishing spa treatment for medium-length hair to improve softness and strength.",
            duration: "60 mins",
            price: 1200,
            image: "img/hairspa.webp" },
        {
            id: 91,
            name: "Hair Spa (Long Hair)",
            description: "Complete spa therapy for long hair with deep conditioning and scalp rejuvenation.",
            duration: "75 mins",
            price: 1500,
            image: "img/hairspa.webp",
        },
        {
            id: 92,
            name: "Hair Hydrating Spa",
            description: "Intensive moisture treatment that restores hydration to dry and damaged hair.",
            duration: "45 mins",
            price: 500,
            image: "img/hairspa.webp" 
           },
        {
            id: 93,
            name: "Premium Hair Spa (Short Hair)",
            description: "Luxury hair spa using premium products for healthy, silky, and shiny short hair.",
            duration: "60 mins",
            price: 1500,
            image: "img/hairspa.webp"        },
        {
            id: 94,
            name: "Premium Hair Spa (Medium Hair)",
            description: "Premium nourishment treatment with advanced repair formula for medium-length hair.",
            duration: "75 mins",
            price: 1800,
            image: "img/hairspa.webp"
        },
        {
            id: 95,
            name: "Premium Hair Spa (Long Hair)",
            description: "Luxury spa treatment for long hair with protein repair, hydration, and shine enhancement.",
            duration: "90 mins",
            price: 2000,
            image: "img/hairspa.webp"       },
        {
            id: 96,
            name: "Hair Smoothing (Short Hair)",
            description: "Professional hair smoothing treatment for short hair to reduce frizz and improve manageability.",
            duration: "120 mins",
            price: 3000,
            image: "img/hairspa.webp"      },
        {
            id: 97,
            name: "Hair Smoothing (Medium Hair)",
            description: "Long-lasting smoothing treatment for medium-length hair with a silky finish.",
            duration: "150 mins",
            price: 4500,
            image: "img/hairspa.webp"       },
        {
            id: 98,
            name: "Hair Smoothing (Long Hair)",
            description: "Premium hair smoothing service for long hair, leaving it straight, soft, and glossy.",
            duration: "180 mins",
            price: 6000,
            image: "img/hairspa.webp"     }
    ]
},
{
    category: "Makeup & Hair Style",
    icon: "fa-spa",
    items: [
        {
            id: 99,
            name: "Saree Changeover",
            description: "Professional saree change and styling for special occasions.",
            duration: "30 mins",
            price: 2000,
            image: "img/makeupanhair.webp"       },
        {
            id: 100,
            name: "Trial Makeup",
            description: "Trial makeup session to finalize your bridal or event look.",
            duration: "120 mins",
            price: 3000,
            image: "img/makeupanhair.webp"   },
        {
            id: 101,
            name: "Saree Draping",
            description: "Elegant and secure saree draping by professional stylists.",
            duration: "10 mins",
            price: 1000,
            image: "img/makeupanhair.webp"    },
        {
            id: 102,
            name: "Saree Pre-Pleating",
            description: "Perfect saree pleating for a neat and ready-to-wear look.",
            duration: "30 mins",
            price: 500,
            image: "img/makeupanhair.webp"        },
        {
            id: 103,
            name: "Light Makeup (Salon)",
            description: "Natural and elegant makeup for parties and family functions.",
            duration: "60 mins",
            price: 5000,
            image: "img/makeupanhair.webp"
        },
        {
            id: 104,
            name: "Light Makeup (On-Site)",
            description: "Professional light makeup service at your preferred location.",
            duration: "60 mins",
            price: 8000,
            image: "img/makeupanhair.webp"
        },
        {
            id: 105,
            name: "Bridesmaid Makeup",
            description: "Beautiful makeup specially designed for bridesmaids.",
            duration: "90 mins",
            price: 3500,
            image: "img/makeupanhair.webp"        },
        {
            id: 106,
            name: "Classic Hair Style",
            description: "Elegant hairstyle suitable for weddings, receptions, and parties.",
            duration: "45 mins",
            price: 2000,
            image: "img/makeupanhair.webp" },
        {
            id: 107,
            name: "Creative Hair Style",
            description: "Designer hairstyles with curls, braids, buns, and accessories.",
            duration: "60 mins",
            price: 3000,
            image: "img/makeupanhair.webp"
        },
        {
            id: 108,
            name: "HD Makeup",
            description: "High-definition makeup for flawless photography and videography.",
            duration: "120 mins",
            price: 15000,
            image: "img/makeupanhair.webp"},
        {
            id: 109,
            name: "Airbrush Makeup",
            description: "Premium airbrush makeup for a long-lasting, lightweight finish.",
            duration: "150 mins",
            price: 29000,
            image: "img/makeupanhair.webp"      },
        {
            id: 110,
            name: "Skin Finish Makeup",
            description: "Luxury makeup with a radiant, natural skin finish.",
            duration: "120 mins",
            price: 12000,
            image: "img/makeupanhair.webp"
        },
        {
            id: 111,
            name: "Semi HD Makeup",
            description: "Semi HD makeup that offers a smooth and natural appearance.",
            duration: "120 mins",
            price: 10000,
            image: "img/makeupanhair.webp"     },
        {
            id: 112,
            name: "Transportation Charges (Outside City)",
            description: "Additional travel charges for on-location makeup services outside the city.",
            duration: "-",
            price: 2000,
            image: "img/makeupanhair.webp"       }
    ]
},

{
    category: "Hair Services",
    icon: "fa-spa",
    items: [
        {
            id: 113,
            name: "Basic Hair Cut",
            description: "Professional basic haircut with precision finishing.",
            duration: "30 mins",
            price: 250,
            image: "img/hairservice.webp"  },

        {
            id: 114,
            name: "V Hair Cut",
            description: "Stylish V-shaped haircut for a trendy look.",
            duration: "45 mins",
            price: 500,
            image: "img/hairservice.webp"     
        },
            {
            id: 115,
            name: "U Hair Cut",
            description: "Classic U-shaped haircut with smooth finishing.",
            duration: "45 mins",
            price: 400,
            image: "img/hairservice.webp"     
            },{
            id: 116,
            name: "Deep Hair Cut",
            description: "Professional deep layered haircut with customized styling.",
            duration: "60 mins",
            price: 700,
            image: "img/hairservice.webp" },
        {
            id: 117,
            name: "Step Cut",
            description: "Fashionable step haircut that adds volume and movement.",
            duration: "60 mins",
            price: 750,
            image: "img/hairservice.webp"        
        },{
            id: 118,
            name: "Layer Cut",
            description: "Elegant layered haircut suitable for all hair types.",
            duration: "60 mins",
            price: 800,
            image: "img/hairservice.webp"
        },
        {
            id: 119,
            name: "Multi Layer Cut",
            description: "Multiple layers for extra texture and stylish volume.",
            duration: "75 mins",
            price: 950,
            image: "img/hairservice.webp"    },
        {
            id: 120,
            name: "Feather Cut",
            description: "Soft feather cut that creates a light and voluminous look.",
            duration: "60 mins",
            price: 1000,
            image: "img/hairservice.webp"},
        {
            id: 121,
            name: "Butterfly Cut",
            description: "Trending butterfly haircut with face-framing layers.",
            duration: "75 mins",
            price: 1200,
            image: "img/hairservice.webp"  },
        {
            id: 122,
            name: "Bangs Hair Cut",
            description: "Stylish front bangs customized to suit your face shape.",
            duration: "30 mins",
            price: 400,
            image: "img/hairservice.webp"
        },
        {
            id: 123,
            name: "Hair Colouring",
            description: "Professional hair colouring using premium quality products.",
            duration: "60 mins",
            price: 350,
            image: "img/hairservice.webp"   },
        {
            id: 124,
            name: "Hair Streaks",
            description: "Fashionable hair streaks for a bold and vibrant look.",
            duration: "90 mins",
            price: 1500,
            image: "img/hairservice.webp" },
        {
            id: 125,
            name: "Pre-Lightening Colour",
            description: "Hair lightening before applying fashion shades for better results.",
            duration: "180 mins",
            price: 4500,
            image: "img/hairservice.webp"   },
        {
            id: 126,
            name: "Direct Fashion Colour",
            description: "Premium direct hair colouring with vibrant fashion shades.",
            duration: "240 mins",
            price: 20000,
            image: "img/hairservice.webp"  },
        {
            id: 127,
            name: "Global Hair Colour (Medium)",
            description: "Complete hair colouring for medium-length hair.",
            duration: "180 mins",
            price: 2500,
            image: "img/hairservice.webp"
        },
        {
            id: 128,
            name: "Global Hair Colour (Long)",
            description: "Complete premium hair colouring for long hair.",
            duration: "240 mins",
            price: 3500,
            image: "img/hairservice.webp"       }
    ]
},
{
    category: "Hair Removal",
    icon: "fa-user-minus",
    items: [
        {
            id: 129,
            name: "Permanent Hair Reduction Consultation",
            description: "Professional consultation for permanent hair reduction treatments using advanced technology.",
            duration: "30 mins",
            price: 250,
           image: "img/hairservice.webp"
        },
        {
            id: 130,
            name: "Facial Threading",
            description: "Precise threading service for eyebrows, upper lip, forehead, chin, and facial shaping.",
            duration: "15 mins",
            price: 100,
          image: "img/hairservice.webp"
        },
        {
            id: 131,
            name: "Hair Removal Waxing",
            description: "Quick and hygienic waxing service for smooth, soft, and hair-free skin.",
            duration: "30 mins",
            price: 400,
           image: "img/hairservice.webp"
        }
    ]
},

{
    category: "Hair Wash & Hair Coloring",
    icon: "fa-shower",
    items: [
        {
            id: 132,
            name: "Hair Wash (Blow Dry)",
            description: "Professional hair wash followed by a smooth blow-dry finish for fresh, manageable hair.",
            duration: "30 mins",
            price: 500,
           image: "img/haircolouring.webp"        },
        {
            id: 133,
            name: "Hair Wash (BBW Treatment)",
            description: "Refreshing hair wash with BBW nourishing treatment for soft, healthy-looking hair.",
            duration: "30 mins",
            price: 700,
           image: "img/haircolouring.webp"   },
        {
            id: 134,
            name: "Hair Coloring (Root Touch-Up - Short Hair)",
            description: "Professional root touch-up color service for short hair with natural-looking coverage.",
            duration: "60 mins",
            price: 600,
           image: "img/haircolouring.webp"        },
        {
            id: 135,
            name: "Hair Coloring (Root Touch-Up - Medium Hair)",
            description: "Premium root touch-up coloring service designed for medium-length hair.",
            duration: "75 mins",
            price: 1000,
           image: "img/haircolouring.webp"
        },
        {
            id: 136,
            name: "Full Hair Color Coverage",
            description: "Complete hair coloring service that provides rich, even color from roots to ends.",
            duration: "120 mins",
            price: 1500,
           image: "img/haircolouring.webp"     }
    ]
},
{
    category: "MI AMI Signature Treatments",
    icon: "fa-spa",
    items: [
        {
            id: 137,
            name: "Hydra Facial (Signature 14 Steps)",
            description: "Our exclusive 14-step Signature Hydra Facial deeply cleanses, exfoliates, hydrates, nourishes, and rejuvenates the skin, leaving you with an instant radiant glow and healthier-looking complexion.",
            duration: "90 mins",
            price: 3000,
            image: "img/contact3.webp"
        },
        {
            id: 138,
            name: "Earlobe Treatment (Both Sides)",
            description: "Professional cosmetic earlobe repair treatment for torn, stretched, or damaged earlobes, restoring their natural appearance safely and effectively.",
            duration: "60 mins",
            price: 4000,
            image: "img/contact3.webp"
        },
        {
            id: 139,
            name: "Full Cut",
            description: "Complete professional skin tag, mole, or cosmetic lesion removal treatment performed with precision and advanced techniques for safe and effective results.",
            duration: "60 mins",
            price: 5000,
            image: "img/contact3.webp"
        },
        {
            id: 140,
            name: "Skin Whitening Treatment",
            description: "Advanced skin whitening treatment designed to brighten dull skin and improve overall complexion. One-time investment with a single session offering up to four visible shades of improvement depending on individual skin condition.",
            duration: "90 mins",
            price: 20000,
            image: "img/contact3.webp"
        },
        {
            id: 141,
            name: "Korean Glass Skin Treatment",
            description: "Premium Korean-inspired skin therapy that deeply hydrates, refines pores, improves skin texture, and delivers a radiant, smooth, glass-like complexion.",
            duration: "90 mins",
            price: 8000,
            image: "img/contact3.webp"
        },
        {
            id: 142,
            name: "Heel Peel Treatment",
            description: "Advanced heel peel therapy that removes dead skin, repairs cracked heels, and restores soft, smooth, and healthy-looking feet.",
            duration: "45 mins",
            price: 3000,
            image: "img/contact3.webp"
        }
    ]
},
{
    category: "Nail Services",
    icon: "fa-hand-pointer",
    items: [
        {
            id: 147,
            name: "Gel Polish (Hands)",
            description: "Long-lasting gel polish application for beautifully polished nails with a glossy finish.",
            duration: "30 mins",
            price: 600,
            image: "img/nail.webp"    },
        {
            id: 148,
            name: "Gel Polish (Feet)",
            description: "Professional gel polish application for toenails with a durable, chip-resistant finish.",
            duration: "30 mins",
            price: 500,
            image: "img/nail.webp"   },
        {
            id: 149,
            name: "Soft Gel Nail Extensions",
            description: "Lightweight soft gel nail extensions for a natural and elegant appearance.",
            duration: "90 mins",
            price: 1500,
            image: "img/nail.webp"      },
        {
            id: 150,
            name: "Gel Nail Extensions",
            description: "Premium gel nail extensions with a strong, glossy, and long-lasting finish.",
            duration: "120 mins",
            price: 2500,
            image: "img/nail.webp" },
        {
            id: 151,
            name: "Acrylic Nail Extensions",
            description: "Durable acrylic nail extensions customized to your preferred shape and length.",
            duration: "120 mins",
            price: 3000,
            image: "img/nail.webp"     },
        {
            id: 152,
            name: "Cat Eye Nail Extensions",
            description: "Stylish cat-eye magnetic gel finish with premium nail extensions.",
            duration: "150 mins",
            price: 3500,
            image: "img/nail.webp"     },
        {
            id: 153,
            name: "Nail Art",
            description: "Creative custom nail art designs to match your personal style.",
            duration: "20 mins",
            price: 100,
            image: "img/nail.webp"       },{
            id: 154,
            name: "Cat Eye Gel Polish",
            description: "Trendy magnetic cat-eye gel polish that creates a unique shimmering effect.",
            duration: "45 mins",
            price: 1200,
            image: "img/nail.webp"      },
        {
            id: 155,
            name: "Gel Polish Removal",
            description: "Safe and gentle removal of gel polish without damaging your natural nails.",
            duration: "20 mins",
            price: 200,
            image: "img/nail.webp"      },
        {
            id: 156,
            name: "Nail Extension Removal",
            description: "Professional removal of acrylic or gel nail extensions with proper nail care.",
            duration: "30 mins",
            price: 1000,
            image: "img/nail.webp"     },
        {
            id: 157,
            name: "Customized Nail Extensions with Gel Polish",
            description: "Personalized nail extensions with your choice of shape, length, and premium gel polish finish.",
            duration: "180 mins",
            price: 3000,
            image: "img/nail.webp"
        }
    ]
},
{
    category: "PMU (Semi-Permanent Makeup)",
    icon: "fa-paint-brush",
    items: [
        {
            id: 158,
            name: "Eyebrow Embroidery",
            description: "Natural-looking semi-permanent eyebrow embroidery to enhance shape and fullness.",
            duration: "120 mins",
            price: 12000,
            image : "img/pwv.webp"
        },
        {
            id: 159,
            name: "Powder Brows",
            description: "Soft powder-filled brows with a natural makeup finish for long-lasting beauty.",
            duration: "120 mins",
            price: 12000,
            image : "img/pwv.webp"   },
        {
            id: 160,
            name: "Ombre Brows",
            description: "Gradient-style semi-permanent brows with a soft front and defined tail.",
            duration: "150 mins",
            price: 10000,
            image : "img/pwv.webp"  },
        {
            id: 161,
            name: "Combo Brows",
            description: "Combination of hair strokes and powder shading for perfectly defined eyebrows.",
            duration: "150 mins",
            price: 15000,
            image : "img/pwv.webp"  },
        {
            id: 162,
            name: "Lip Blush",
            description: "Semi-permanent lip tinting treatment that enhances natural lip color and definition.",
            duration: "180 mins",
            price: 15000,
            image : "img/pwv.webp"}
    ]
}


];


/*=========================================
        GLOBAL VARIABLES
=========================================*/

let selectedCategory = 0;
let cart = [];

const categoryList = document.getElementById("categoryList");
const serviceContainer = document.getElementById("serviceContainer");
const categoryTitle = document.getElementById("categoryTitle");
const serviceCount = document.getElementById("serviceCount");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotal = document.getElementById("subtotal");
const gst = document.getElementById("gst");
const discount = document.getElementById("discount");
const grandTotal = document.getElementById("grandTotal");

const coupons = {
    "MIAMI10": 10,
    "WELCOME20": 20,
    "BEAUTY15": 15
};

let appliedCoupon = "";
let couponDiscount = 0;


/*=========================================================
        EVERYTHING THAT TOUCHES THE DOM RUNS AFTER
        THE PAGE HAS FULLY LOADED
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- initial page setup ---------- */
    renderCategories();
    renderServices(0);
    setupSearch();
    loadCart();

    /* ---------- coupon button ---------- */
    const couponBtn = document.querySelector(".coupon-box button");
    if (couponBtn) {
        couponBtn.addEventListener("click", applyCoupon);
    }

    /* ---------- checkout button (old flow, kept if present) ---------- */
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                showToast("Please select services first.", "error");
                return;
            }
            showToast("Redirecting to Checkout...", "success");
        });
    }

    /* =========================================================
            BOOKING MODAL - ELEMENTS
       ========================================================= */

    const openBookingModalBtn = document.getElementById("openBookingModalBtn");
    const bookingItems = document.getElementById("bookingItems");
    const summarySubtotal = document.getElementById("summarySubtotal");
    const summaryGST = document.getElementById("summaryGST");
    const summaryTotal = document.getElementById("summaryTotal");
    const customerName = document.getElementById("customerName");
    const customerMobile = document.getElementById("customerMobile");
    const appointmentDate = document.getElementById("appointmentDate");
    const appointmentTime = document.getElementById("appointmentTime");
    const bookingNotes = document.getElementById("bookingNotes");
    const sendBookingWhatsapp = document.getElementById("sendBookingWhatsapp");
    const bookingMessage = document.getElementById("bookingMessage");

    // Safety check - if the modal isn't on this page, skip all of this
    if (!openBookingModalBtn) return;

    // Today's date as the minimum selectable appointment date
    const today = new Date();
    appointmentDate.min = today.toISOString().split("T")[0];

    // Open Booking Modal
    openBookingModalBtn.addEventListener("click", function () {

        if (cart.length === 0) {
            alert("Please add at least one service.");
            return;
        }

        loadBookingSummary();

    });

    function loadBookingSummary() {

        bookingItems.innerHTML = "";

        let subtotalAmt = 0;

        cart.forEach(item => {

            subtotalAmt += item.price * item.qty;

            bookingItems.innerHTML += `
            <div class="booking-item">
                <div class="booking-item-left">
                    <img src="${item.image}" alt="">
                    <div>
                        <h6>${item.name}</h6>
                        <p>Qty : ${item.qty}</p>
                    </div>
                </div>
                <div class="booking-item-right">
                    <h5>₹${(item.price * item.qty).toLocaleString()}</h5>
                    <span>₹${item.price} Each</span>
                </div>
            </div>
            `;

        });

        const gstAmt = subtotalAmt * 0.18;
        const grand = subtotalAmt + gstAmt;

        summarySubtotal.innerHTML = "₹" + subtotalAmt.toFixed(2);
        summaryGST.innerHTML = "₹" + gstAmt.toFixed(2);
        summaryTotal.innerHTML = "₹" + grand.toFixed(2);

        bookingMessage.classList.remove("show");
        bookingMessage.innerHTML = "";

        validateBookingForm();

    }

    // Validation events
    customerName.addEventListener("input", validateBookingForm);
    customerMobile.addEventListener("input", validateBookingForm);
    appointmentDate.addEventListener("change", validateBookingForm);
    appointmentTime.addEventListener("change", validateBookingForm);

    function isValidMobile(number) {
        return /^[6-9]\d{9}$/.test(number);
    }

    function validateBookingForm() {

        const validName = customerName.value.trim().length >= 3;
        const validMobile = isValidMobile(customerMobile.value.trim());
        const validDate = appointmentDate.value !== "";
        const validTime = appointmentTime.value !== "";

        sendBookingWhatsapp.disabled =
            !(validName && validMobile && validDate && validTime);

    }

    // Send booking to WhatsApp
    sendBookingWhatsapp.addEventListener("click", sendBooking);

    function sendBooking() {

        const customer = customerName.value.trim();
        const mobile = customerMobile.value.trim();
        const date = appointmentDate.value;
        const time = appointmentTime.value;
        const notes = bookingNotes.value.trim();

        let subtotalAmt = 0;
        let servicesText = "";

        cart.forEach((item, index) => {

            const total = item.price * item.qty;
            subtotalAmt += total;

            servicesText +=
`${index + 1}. ${item.name}
   Qty : ${item.qty}
   Price : ₹${item.price}
   Total : ₹${total}

`;

        });

        const gstAmt = subtotalAmt * 0.18;
        const grand = subtotalAmt + gstAmt;

        const message =
`🌸 *MIAMI BEAUTY LOUNGE*
━━━━━━━━━━━━━━━━━━
📅 *NEW APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━
👤 *Customer Details*
Name : ${customer}
Mobile : ${mobile}
━━━━━━━━━━━━━━━━━━
💇 *Selected Services*
${servicesText}
━━━━━━━━━━━━━━━━━━
💰 *Payment Summary*
Subtotal : ₹${subtotalAmt.toFixed(2)}
GST (18%) : ₹${gstAmt.toFixed(2)}
Grand Total : ₹${grand.toFixed(2)}
━━━━━━━━━━━━━━━━━━
📆 Appointment Date
${date}
🕒 Appointment Time
${time}
━━━━━━━━━━━━━━━━━━
📝 Notes
${notes || "No Notes"}
━━━━━━━━━━━━━━━━━━
Thank You ❤️
Miami Beauty Lounge`;

        const salonWhatsapp = "919876543210";
        const url = `https://wa.me/${salonWhatsapp}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        bookingMessage.classList.add("show");
        bookingMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Booking Created Successfully!</strong>
            <br><br>
            WhatsApp has been opened.
            Please click the <b>Send</b> button in WhatsApp
            to complete your booking.
        `;

        sendBookingWhatsapp.disabled = true;

        // Clear cart
        cart = [];
        renderCart();
        saveCart();

        // Reset form
        customerName.value = "";
        customerMobile.value = "";
        appointmentDate.value = "";
        appointmentTime.value = "";
        bookingNotes.value = "";
        bookingItems.innerHTML = "";
        summarySubtotal.innerHTML = "₹0.00";
        summaryGST.innerHTML = "₹0.00";
        summaryTotal.innerHTML = "₹0.00";

        // Close modal after a short delay
        setTimeout(function () {

            const modal = bootstrap.Modal.getInstance(
                document.getElementById("bookingModal")
            );

            if (modal) {
                modal.hide();
            }

            bookingMessage.classList.remove("show");
            bookingMessage.innerHTML = "";

        }, 3000);

    }

}); // end DOMContentLoaded


/*=========================================================
                CATEGORY LIST
=========================================================*/

function renderCategories() {

    categoryList.innerHTML = "";

    services.forEach((category, index) => {

        const li = document.createElement("li");

        if (index === 0) {
            li.classList.add("active");
        }

        li.innerHTML = `
            <a href="javascript:void(0)">
                <i class="fas ${category.icon}"></i>
                <span>${category.category}</span>
            </a>
        `;

        li.onclick = () => {

            document
                .querySelectorAll("#categoryList li")
                .forEach(x => x.classList.remove("active"));

            li.classList.add("active");
            selectedCategory = index;
            renderServices(index);

        };

        categoryList.appendChild(li);

    });

}


/*=========================================================
                SERVICE CARDS
=========================================================*/

function renderServices(index) {

    serviceContainer.innerHTML = "";

    const category = services[index];

    categoryTitle.innerHTML = category.category;
    serviceCount.innerHTML = `${category.items.length} Services`;

    category.items.forEach(service => {

        serviceContainer.innerHTML += `
        <div class="service-card">
            <div class="service-image">
                <img src="${service.image}" alt="${service.name}">
            </div>
            <div class="service-details">
                <div class="service-top">
                    <h4>${service.name}</h4>
                    <span class="price">₹${service.price}</span>
                </div>
                <p class="description">${service.description}</p>
                <div class="service-bottom">
                    <div class="duration">
                        <i class="far fa-clock"></i>
                        ${service.duration}
                    </div>
                    <button class="add-btn" onclick="addToCart(${service.id})">
                        <i class="fas fa-plus"></i>
                        Add
                    </button>
                </div>
            </div>
        </div>
        `;

    });

}


/*=========================================================
                    SEARCH
=========================================================*/

function setupSearch() {

    const search = document.getElementById("searchInput");
    if (!search) return;

    search.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();
        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(keyword) ? "flex" : "none";

        });

    });

}


/*=========================================
        FIND SERVICE
=========================================*/

function findService(id) {

    for (const category of services) {

        const service = category.items.find(x => x.id === id);
        if (service) return service;

    }

    return null;

}


/*=========================================
        ADD TO CART
=========================================*/

function addToCart(id) {

    const service = findService(id);
    if (!service) return;

    const existing = cart.find(x => x.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: service.id,
            name: service.name,
            price: service.price,
            image: service.image,
            qty: 1
        });
    }

    renderCart();

}


/*=========================================
        RENDER CART
=========================================*/

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <div class="empty-cart">
            <img src="img/empty-cart.png">
            <h5>No Services Added</h5>
            <p>Select beauty services to begin your booking.</p>
        </div>
        `;

        cartCount.innerHTML = "0 Services";
        updateSummary();
        return;

    }

    cartItems.innerHTML = "";

    cart.forEach(item => {

        cartItems.innerHTML += `
        <div class="cart-item">
            <div class="cart-left">
                <img src="${item.image}" alt="">
                <div>
                    <h5>${item.name}</h5>
                    <span>₹${item.price}</span>
                </div>
            </div>
            <div class="cart-right">
                <div class="qty-box">
                    <button onclick="decreaseQty(${item.id})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increaseQty(${item.id})">+</button>
                </div>
                <button class="remove-btn" onclick="removeItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `;

    });

    cartCount.innerHTML = `${cart.length} Services`;
    updateSummary();

}


/*=========================================
        INCREASE / DECREASE / REMOVE
=========================================*/

function increaseQty(id) {

    const item = cart.find(x => x.id === id);
    if (!item) return;

    item.qty++;
    renderCart();

}

function decreaseQty(id) {

    const item = cart.find(x => x.id === id);
    if (!item) return;

    item.qty--;

    if (item.qty <= 0) {
        cart = cart.filter(x => x.id !== id);
    }

    renderCart();

}

function removeItem(id) {

    cart = cart.filter(x => x.id !== id);
    renderCart();

}


/*=========================================
        UPDATE SUMMARY (single, merged version)
=========================================*/

function updateSummary() {

    let subtotalAmount = 0;

    cart.forEach(item => {
        subtotalAmount += item.price * item.qty;
    });

    let discountAmount = 0;

    // 10% automatic discount above ₹5000
    if (subtotalAmount >= 5000) {
        discountAmount += subtotalAmount * 0.10;
    }

    // coupon discount (stacks with the automatic discount)
    if (couponDiscount > 0) {
        discountAmount += subtotalAmount * (couponDiscount / 100);
    }

    let taxable = subtotalAmount - discountAmount;
    if (taxable < 0) taxable = 0;

    const gstAmount = taxable * 0.18;
    const grand = taxable + gstAmount;

    subtotal.innerHTML = "₹" + subtotalAmount.toLocaleString("en-IN");
    discount.innerHTML = "- ₹" + discountAmount.toFixed(0);
    gst.innerHTML = "₹" + gstAmount.toFixed(0);
    grandTotal.innerHTML = "₹" + grand.toFixed(0);

    saveCart();

}


/*=========================================
        TOTAL ITEMS
=========================================*/

function totalItems() {

    let total = 0;
    cart.forEach(item => { total += item.qty; });
    cartCount.innerHTML = total + " Service(s)";

}


/*=========================================
        APPLY COUPON
=========================================*/

function applyCoupon() {

    const input = document.querySelector(".coupon-box input");
    const code = input.value.trim().toUpperCase();

    if (code === "") {
        showToast("Enter Coupon Code", "error");
        return;
    }

    if (coupons[code]) {

        appliedCoupon = code;
        couponDiscount = coupons[code];
        updateSummary();
        showToast(`${code} Applied Successfully`, "success");

    } else {

        showToast("Invalid Coupon Code", "error");

    }

}


/*=========================================
        LOCAL STORAGE
=========================================*/

function saveCart() {
    localStorage.setItem("miamiCart", JSON.stringify(cart));
}

function loadCart() {

    const data = localStorage.getItem("miamiCart");

    if (data) {
        cart = JSON.parse(data);
        renderCart();
    }

}


/*=========================================
        CLEAR CART
=========================================*/

function clearCart() {

    cart = [];
    renderCart();
    saveCart();

}


/*=========================================
        TOAST
=========================================*/

function showToast(message, type) {

    const toast = document.createElement("div");
    toast.className = "booking-toast " + type;

    toast.innerHTML = `
        <i class="fas ${type === "success" ? "fa-check-circle" : "fa-times-circle"}"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    setTimeout(() => { toast.classList.add("show"); }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => { toast.remove(); }, 300);
    }, 2500);

}

