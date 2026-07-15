// Full service menu for Tran Hang Spa, transcribed from the printed menu.
// All prices are expressed in THOUSANDS of VND (e.g. 400 => 400,000₫).

export type Bilingual = { en: string; vi: string };

export type Duration = { min: number; price: number };

export type ServiceItem = {
  id: string;
  name: Bilingual;
  desc?: Bilingual;
  durations?: Duration[];
  flatPrice?: number;
  priceRange?: [number, number];
  image?: string;
};

export type ServiceCategory = {
  id: string;
  name: Bilingual;
  blurb: Bilingual;
  image: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "body",
    name: { en: "Body Massage", vi: "Massage Toàn Thân" },
    blurb: {
      en: "Full-body therapies that melt away tension and restore your energy.",
      vi: "Liệu trình toàn thân giúp tan biến căng thẳng và phục hồi năng lượng.",
    },
    image: "/images/services/herbal.jpg",
    items: [
      {
        id: "vietnamese-massage",
        name: { en: "Vietnamese Massage", vi: "Massage Việt Nam" },
        desc: {
          en: "A gentle, relaxing therapy that leaves you feeling refreshed and calm.",
          vi: "Liệu trình nhẹ nhàng, thư giãn, giúp bạn sảng khoái và thư thái.",
        },
        durations: [
          { min: 60, price: 400 },
          { min: 75, price: 480 },
          { min: 90, price: 600 },
          { min: 120, price: 780 },
          { min: 180, price: 950 },
        ],
        image: "/images/gallery/interior.jpg",
      },
      {
        id: "thai-massage",
        name: { en: "Thai Massage", vi: "Massage Thái" },
        desc: {
          en: "Light-to-medium pressure and stretching to boost circulation and release muscle stress.",
          vi: "Lực vừa phải kết hợp kéo giãn, tăng tuần hoàn máu và giải toả căng cơ.",
        },
        durations: [
          { min: 60, price: 450 },
          { min: 75, price: 500 },
          { min: 90, price: 650 },
          { min: 120, price: 800 },
          { min: 180, price: 950 },
        ],
      },
      {
        id: "hot-stone-massage",
        name: { en: "Hot Stone Massage", vi: "Massage Đá Nóng" },
        desc: {
          en: "Warm basalt stones clear blocked meridians, ease fatigue and help you sleep well.",
          vi: "Đá nóng khai thông kinh lạc, giảm mệt mỏi và giúp ngủ ngon.",
        },
        durations: [
          { min: 60, price: 500 },
          { min: 75, price: 550 },
          { min: 90, price: 650 },
          { min: 120, price: 750 },
          { min: 180, price: 950 },
        ],
        image: "/images/gallery/relax.jpg",
      },
      {
        id: "herbal-therapy",
        name: {
          en: "Tran Hang Herbal Therapy",
          vi: "Trị Liệu Thảo Dược Trần Hằng",
        },
        desc: {
          en: "Our signature deep-tissue treatment with warm herbs — relieves pain, detoxifies and beautifies the skin.",
          vi: "Liệu trình trị liệu chuyên sâu đặc trưng với thảo dược ấm — giảm đau, thải độc và làm đẹp da.",
        },
        durations: [
          { min: 60, price: 600 },
          { min: 75, price: 650 },
          { min: 90, price: 750 },
          { min: 120, price: 850 },
          { min: 180, price: 950 },
        ],
        image: "/images/services/herbal.jpg",
      },
      {
        id: "body-scrub",
        name: { en: "Full-Body Scrub", vi: "Tẩy Da Chết Toàn Thân" },
        desc: {
          en: "Removes dead skin cells, unclogs pores, brightens skin and improves circulation.",
          vi: "Loại bỏ tế bào chết, thông thoáng lỗ chân lông, làm sáng da và tăng tuần hoàn.",
        },
        durations: [
          { min: 60, price: 450 },
          { min: 75, price: 500 },
          { min: 90, price: 600 },
          { min: 120, price: 700 },
          { min: 180, price: 800 },
        ],
      },
    ],
  },
  {
    id: "foot",
    name: { en: "Foot Massage", vi: "Massage Chân" },
    blurb: {
      en: "Your feet carry you all day — let us give them the care they deserve.",
      vi: "Đôi chân nâng đỡ bạn cả ngày — hãy để chúng tôi chăm sóc thật kỹ.",
    },
    image: "/images/services/foot.png",
    items: [
      {
        id: "foot-oil",
        name: { en: "Foot Massage with Oil", vi: "Massage Chân Với Dầu" },
        desc: {
          en: "Soothing reflexology with warm aromatic oil.",
          vi: "Bấm huyệt bàn chân thư giãn với dầu thơm ấm.",
        },
        durations: [
          { min: 15, price: 150 },
          { min: 30, price: 200 },
          { min: 45, price: 250 },
          { min: 60, price: 350 },
          { min: 90, price: 500 },
        ],
        image: "/images/services/foot.png",
      },
      {
        id: "foot-hotstone",
        name: {
          en: "Foot Massage — Hot Stone & Herbs",
          vi: "Massage Chân — Đá Nóng & Thảo Dược",
        },
        desc: {
          en: "Reflexology enhanced with hot stones and herbal compress.",
          vi: "Bấm huyệt kết hợp đá nóng và túi chườm thảo dược.",
        },
        durations: [
          { min: 15, price: 150 },
          { min: 30, price: 250 },
          { min: 45, price: 300 },
          { min: 60, price: 400 },
          { min: 90, price: 550 },
        ],
      },
    ],
  },
  {
    id: "head",
    name: { en: "Head, Neck & Shoulder", vi: "Đầu, Cổ, Vai, Gáy" },
    blurb: {
      en: "Targeted upper-body relief with natural oils and warm herbs.",
      vi: "Thư giãn vùng thân trên với tinh dầu tự nhiên và thảo dược ấm.",
    },
    image: "/images/gallery/interior.jpg",
    items: [
      {
        id: "neck-shoulder-back",
        name: {
          en: "Neck – Shoulder – Back",
          vi: "Cổ – Vai – Lưng",
        },
        durations: [
          { min: 30, price: 250 },
          { min: 45, price: 350 },
          { min: 60, price: 450 },
          { min: 90, price: 550 },
        ],
        image: "/images/gallery/interior.jpg",
      },
      {
        id: "head-neck-shoulder-hand",
        name: {
          en: "Head – Neck – Shoulder – Hand",
          vi: "Đầu – Cổ – Vai – Tay",
        },
        durations: [
          { min: 30, price: 250 },
          { min: 45, price: 350 },
          { min: 60, price: 450 },
          { min: 90, price: 550 },
        ],
      },
      {
        id: "head-wash",
        name: { en: "Head Wash & Scalp Massage", vi: "Gội Đầu Dưỡng Sinh" },
        desc: {
          en: "Shampooing with scalp and face massage to boost circulation and relieve stress.",
          vi: "Gội đầu kết hợp massage da đầu và mặt, tăng tuần hoàn và giảm căng thẳng.",
        },
        durations: [
          { min: 15, price: 150 },
          { min: 30, price: 250 },
          { min: 45, price: 350 },
          { min: 60, price: 450 },
          { min: 90, price: 500 },
        ],
        image: "/images/services/hair-wash.jpg",
      },
    ],
  },
  {
    id: "facial",
    name: { en: "Facial & Skin Care", vi: "Chăm Sóc Da Mặt" },
    blurb: {
      en: "Cleanse, extract, lift and mask for brighter, firmer, younger-looking skin.",
      vi: "Làm sạch, hút mụn, nâng cơ và đắp mặt nạ cho làn da sáng, săn chắc, trẻ trung.",
    },
    image: "/images/services/facial.png",
    items: [
      {
        id: "facial-combo",
        name: {
          en: "Facial Skin Care Combo",
          vi: "Combo Chăm Sóc Da Mặt",
        },
        desc: {
          en: "Makeup removal, cleansing, exfoliation, steaming, acne extraction, face massage, lifting & mask.",
          vi: "Tẩy trang, làm sạch, tẩy tế bào chết, xông hơi, lấy mụn, massage mặt, nâng cơ & đắp mặt nạ.",
        },
        durations: [
          { min: 30, price: 300 },
          { min: 45, price: 400 },
          { min: 60, price: 500 },
          { min: 90, price: 700 },
        ],
        image: "/images/services/facial.png",
      },
      {
        id: "face-massage",
        name: { en: "Relaxing Face Massage", vi: "Massage Mặt Thư Giãn" },
        desc: {
          en: "Gentle facial massage to relax muscles and brighten the complexion.",
          vi: "Massage mặt nhẹ nhàng giúp thư giãn cơ và làm sáng da.",
        },
        image: "/images/services/face-massage.jpg",
        flatPrice: 300,
      },
    ],
  },
  {
    id: "nails",
    name: { en: "Nail Care", vi: "Làm Nail" },
    blurb: {
      en: "Manicure, pedicure, gel and nail art by careful, hygienic technicians.",
      vi: "Làm móng tay, móng chân, sơn gel và vẽ nghệ thuật, sạch sẽ và tỉ mỉ.",
    },
    image: "/images/services/nail.jpg",
    items: [
      { id: "nail-cleaning", name: { en: "Nail Cleaning", vi: "Làm Sạch Móng" }, flatPrice: 50 },
      { id: "nail-cut", name: { en: "Cut Nails & Clean Skin", vi: "Cắt Móng & Làm Sạch Da" }, flatPrice: 150 },
      { id: "mani-pedi", name: { en: "Colorless Manicure / Pedicure", vi: "Làm Sạch Móng Tay / Chân" }, flatPrice: 200 },
      { id: "regular-paint", name: { en: "Regular Polish", vi: "Sơn Thường" }, flatPrice: 200 },
      { id: "gel-polish", name: { en: "Gel Polish", vi: "Sơn Gel" }, flatPrice: 250 },
      { id: "nail-repair", name: { en: "Nail Repair / File", vi: "Rũa / Sửa Móng" }, flatPrice: 100 },
      { id: "gel-removal", name: { en: "Gel Removal", vi: "Phá Sơn Gel" }, flatPrice: 150 },
      { id: "nail-extension", name: { en: "Artificial Nail Extension", vi: "Nối Móng Giả" }, flatPrice: 400 },
      { id: "nail-art", name: { en: "Custom Nail Art", vi: "Vẽ Móng Theo Yêu Cầu" }, flatPrice: 500 },
      { id: "nail-sticker", name: { en: "Nail Stickers", vi: "Dán Hình Móng" }, flatPrice: 400 },
      { id: "heels-scrub", name: { en: "Heels Scrub", vi: "Chà Gót Chân" }, flatPrice: 150 },
    ],
  },
  {
    id: "lashes",
    name: { en: "Lashes & Brows", vi: "Mi & Chân Mày" },
    blurb: {
      en: "Lash lifts, extensions and brow tinting to frame your eyes beautifully.",
      vi: "Uốn mi, nối mi và nhuộm chân mày tôn lên ánh mắt của bạn.",
    },
    image: "/images/services/lash.jpg",
    items: [
      { id: "lash-lift", name: { en: "Lash Lift / Curling", vi: "Uốn Mi" }, flatPrice: 250, image: "/images/services/lash.jpg" },
      { id: "brow-lash-tint", name: { en: "Brow & Lash Tinting", vi: "Nhuộm Chân Mày & Lông Mi" }, flatPrice: 250, image: "/images/services/brow-dye.jpg" },
      { id: "lash-extension", name: { en: "Eyelash Extensions", vi: "Nối Mi" }, priceRange: [400, 800], image: "/images/services/brow.jpg" },
    ],
  },
  {
    id: "waxing",
    name: { en: "Waxing", vi: "Tẩy Lông" },
    blurb: {
      en: "Smooth, gentle hair removal for face and body.",
      vi: "Tẩy lông nhẹ nhàng cho khuôn mặt và cơ thể, da mịn màng.",
    },
    image: "/images/services/waxing.jpg",
    items: [
      { id: "wax-face", name: { en: "Face", vi: "Mặt" }, flatPrice: 200 },
      { id: "wax-hands", name: { en: "Hands / Arms", vi: "Tay" }, flatPrice: 300 },
      { id: "wax-armpits", name: { en: "Armpits", vi: "Nách" }, flatPrice: 300 },
      { id: "wax-legs", name: { en: "Legs", vi: "Chân" }, flatPrice: 400 },
      { id: "wax-chest", name: { en: "Chest", vi: "Ngực" }, flatPrice: 400 },
      { id: "wax-back", name: { en: "Back", vi: "Lưng" }, flatPrice: 500 },
      { id: "wax-bikini", name: { en: "Bikini", vi: "Vùng Kín" }, priceRange: [400, 700] },
    ],
  },
  {
    id: "haircut",
    name: { en: "Haircut", vi: "Cắt Tóc" },
    blurb: {
      en: "Haircuts and styling for men and women.",
      vi: "Cắt và tạo kiểu tóc cho nam và nữ.",
    },
    image: "/images/services/hair-wash.jpg",
    items: [
      {
        id: "haircut-all",
        name: { en: "Haircut for Men & Women", vi: "Cắt Tóc Nam & Nữ" },
        desc: {
          en: "Price varies by style and length.",
          vi: "Giá thay đổi theo kiểu tóc và độ dài.",
        },
        priceRange: [250, 700],
      },
    ],
  },
  {
    id: "combos",
    name: { en: "Spa Combos", vi: "Combo Spa" },
    blurb: {
      en: "Curated packages that pair our most-loved treatments — the best value.",
      vi: "Gói dịch vụ kết hợp những liệu trình được yêu thích nhất — tiết kiệm nhất.",
    },
    image: "/images/gallery/relax.jpg",
    items: [
      {
        id: "combo-1",
        name: { en: "Spa Combo 1", vi: "Combo Spa 1" },
        desc: {
          en: "Body massage + facial skin care treatment.",
          vi: "Massage body + chăm sóc da mặt.",
        },
        durations: [
          { min: 100, price: 690 },
          { min: 130, price: 890 },
        ],
        image: "/images/gallery/guests-foot-spa.jpg",
      },
      {
        id: "combo-2",
        name: { en: "Spa Combo 2", vi: "Combo Spa 2" },
        desc: {
          en: "Full-body scrub + body massage.",
          vi: "Tẩy da chết toàn thân + massage body.",
        },
        durations: [
          { min: 100, price: 690 },
          { min: 130, price: 890 },
        ],
      },
      {
        id: "combo-3",
        name: { en: "Spa Combo 3", vi: "Combo Spa 3" },
        desc: {
          en: "Body scrub + Vietnamese body massage + purifying facial treatment.",
          vi: "Tẩy da chết + massage body Việt Nam + điều trị da mặt.",
        },
        durations: [{ min: 160, price: 990 }],
      },
    ],
  },
];

// Curated highlights shown on the home page (id must match a category above).
export const highlightIds = [
  "herbal-therapy",
  "hot-stone-massage",
  "foot-oil",
  "facial-combo",
  "vietnamese-massage",
  "combo-1",
] as const;

/** Lowest price across a service item's durations / flat / range (in thousands). */
export function itemFromPrice(item: ServiceItem): number {
  if (item.durations?.length) {
    return Math.min(...item.durations.map((d) => d.price));
  }
  if (typeof item.flatPrice === "number") return item.flatPrice;
  if (item.priceRange) return item.priceRange[0];
  return 0;
}

/** Flatten all items for lookups (e.g. highlights, booking select). */
export function allItems(): (ServiceItem & { categoryId: string })[] {
  return serviceCategories.flatMap((c) =>
    c.items.map((i) => ({ ...i, categoryId: c.id })),
  );
}
