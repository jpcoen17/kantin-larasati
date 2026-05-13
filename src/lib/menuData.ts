export type MenuItem = {
  id: string
  name: string
  price: number
  category: string
  isBestSeller?: boolean
  description?: string
  spiceLevel?: number
  emoji?: string
  pairing?: string
  image?: string
}

export const menuCategories = [
  { id: 'paket', label: 'Paket Hemat', emoji: '🍱' },
  { id: 'sayur', label: 'Sayur', emoji: '🥬' },
  { id: 'lauk', label: 'Lauk', emoji: '🐟' },
  { id: 'snack', label: 'Snack', emoji: '🍌' },
  { id: 'tambahan', label: 'Tambahan', emoji: '➕' },
  { id: 'minuman', label: 'Minuman', emoji: '🥤' },
]

export const menuItems: MenuItem[] = [
  // PAKET MAKAN HEMAT
  {
    id: 'paket-1',
    image: '/images/menu/nasi-jotos.jpg',
    name: 'Nasi Jotos',
    price: 15000,
    category: 'paket',
    emoji: '🍚',
    description: 'Nasi porsi jumbo dipadati lauk pilihan. Kenyang maksimal harga minimal — favorit anak kos sejak dulu.',
    spiceLevel: 1,
    pairing: 'Cocok sama Es Teh manis biar makin seger',
  },
  {
    id: 'paket-2',
    image: '/images/menu/nasi-telur-kriwil-plus-1-sayur.jpg',
    name: 'Nasi Telur Kriwil + 1 Sayur',
    price: 16000,
    category: 'paket',
    emoji: '🍳',
    description: 'Telur kriwil — telur orak-arik bumbu khas Larasati yang gurih dan harum. Sederhana tapi selalu bikin kangen.',
    spiceLevel: 1,
    pairing: 'Enak sama Oseng Tempe atau Tumis Kangkung',
  },
  {
    id: 'paket-3',
    image: '/images/menu/nasi-ikan-pindang-goreng-plus-1-sayur.jpg',
    name: 'Nasi Ikan Pindang Goreng + 1 Sayur',
    price: 17000,
    category: 'paket',
    emoji: '🐠',
    description: 'Pindang goreng renyah dengan bumbu tradisional. Crispy di luar, lembut di dalam, nagih sampe habis.',
    spiceLevel: 2,
    pairing: 'Paling pas sama Tumis Kangkung dan sambal',
  },
  {
    id: 'paket-4',
    name: 'Nasi Tongkol Suwir Kemangi + 1 Sayur',
    image: '/images/menu/nasi-tongkol-suwir-kemangi-plus-1-sayur.jpg',
    price: 17000,
    category: 'paket',
    isBestSeller: true,
    emoji: '⭐',
    description: 'Ikan tongkol segar disuwir halus, ditumis dengan kemangi segar, cabai, dan rempah khas. Harum kemanginya menguar dari jauh. Ini bukan sekadar lauk — ini adalah alasan orang Jogja balik ke Larasati.',
    spiceLevel: 3,
    pairing: 'Wajib sama Es Teh Kampul dan Tempe Mendoan',
  },
  {
    id: 'paket-5',
    name: 'Nasi Ayam Suwir Kuning + 1 Sayur',
    image: '/images/menu/ayam-suwir-kuning.jpg',
    price: 17000,
    category: 'paket',
    emoji: '🍗',
    description: 'Ayam kampung suwir dengan bumbu kuning yang kaya rempah. Lembut, gurih, dan terasa seperti masakan Eyang.',
    spiceLevel: 1,
    pairing: 'Cocok sama Oseng Buncis yang segar',
  },
  {
    id: 'paket-6',
    image: '/images/menu/nasi-ceker-mercon-tanpa-tulang-plus-1-sayur.jpg',
    name: 'Nasi Ceker Mercon Tanpa Tulang + 1 Sayur',
    price: 21000,
    category: 'paket',
    emoji: '🌶️',
    description: 'Ceker empuk dimasak dengan bumbu mercon super pedas. Tanpa tulang, tinggal lahap! Buat yang suka tantangan.',
    spiceLevel: 5,
    pairing: 'Harus pake Es Teh banyak-banyak!',
  },
  {
    id: 'paket-7',
    name: 'Nasi Ayam Goreng + 1 Sayur',
    image: '/images/menu/ayam-goreng.jpg',
    price: 23000,
    category: 'paket',
    emoji: '🍗',
    description: 'Ayam goreng crispy bumbu kuning Jawa yang renyah dan juicy. Klasik yang tidak pernah salah.',
    spiceLevel: 2,
    pairing: 'Mantap sama Terong Balado dan Es Jeruk',
  },
  {
    id: 'paket-8',
    name: 'Nasi Paru Balado + 1 Sayur',
    image: '/images/menu/nasi-paru.jpg',
    price: 24000,
    category: 'paket',
    emoji: '🥩',
    description: 'Paru sapi renyah dimasak dengan balado merah yang pedas dan kaya rempah. Tekstur unik yang bikin ketagihan.',
    spiceLevel: 4,
    pairing: 'Pas banget sama Oseng Tempe dan Es Teh Kampul',
  },
  {
    id: 'paket-9',
    image: '/images/menu/nasi-cumi-cabe-ijo-plus-1-sayur.jpg',
    name: 'Nasi Cumi Cabe Ijo + 1 Sayur',
    price: 25000,
    category: 'paket',
    emoji: '🦑',
    description: 'Cumi segar dimasak dengan cabe ijo dan bumbu rahasia. Pedas segar, kenyal, dan bikin nagih dari suapan pertama.',
    spiceLevel: 4,
    pairing: 'Terbaik sama Es Jeruk yang seger',
  },

  // SAYUR
  { id: 'sayur-1',
    image: '/images/menu/oseng-buncis.jpeg', name: 'Oseng Buncis', price: 5000, category: 'sayur', emoji: '🥦', description: 'Buncis segar ditumis bumbu bawang yang gurih dan renyah.' },
  { id: 'sayur-2',
    image: '/images/menu/oseng-soun.jpeg', name: 'Oseng Soum', price: 5000, category: 'sayur', emoji: '🧅', description: 'Sayur tradisional Jawa dengan bumbu sederhana yang menghangatkan.' },
  { id: 'sayur-3',
    image: '/images/menu/oseng-tempe.jpeg', name: 'Oseng Tempe', price: 5000, category: 'sayur', emoji: '🟫', description: 'Tempe lokal ditumis kecap dan cabai. Sederhana tapi selalu enak.' },
  { id: 'sayur-4',
    image: '/images/menu/kering-tempe.jpeg', name: 'Kering Tempe', price: 5000, category: 'sayur', emoji: '✨', description: 'Tempe kering renyah dengan bumbu manis pedas khas Jawa.' },
  { id: 'sayur-5',
    image: '/images/menu/terong-balado.jpeg', name: 'Terong Balado', price: 5000, category: 'sayur', emoji: '🍆', description: 'Terong lembut dengan balado merah yang harum dan pedas.' },
  { id: 'sayur-6',
    image: '/images/menu/tumis-kangkung.jpeg', name: 'Tumis Kangkung', price: 5000, category: 'sayur', emoji: '🥬', description: 'Kangkung segar ditumis bumbu bawang putih dan terasi.' },
  { id: 'sayur-7',
    image: '/images/menu/tumis-toge-tahu.jpg', name: 'Tumis Tahu Toge', price: 5000, category: 'sayur', emoji: '🌱', description: 'Perpaduan tahu sutra dan toge renyah dalam bumbu yang segar.' },

  // LAUK
  { id: 'lauk-1', name: 'Tempe Mendoan',
    image: '/images/menu/mendoan.jpg', price: 3000, category: 'lauk', emoji: '🟤', description: 'Tempe tipis digoreng tepung yang gurih dan renyah. Khas Purwokerto, legend di kantin ini.', spiceLevel: 1 },
  { id: 'lauk-2', name: 'Telur Asin', price: 6000, category: 'lauk', emoji: '🥚', description: 'Telur asin asli dengan yolk berminyak yang kaya rasa.', spiceLevel: 0 },
  { id: 'lauk-3',
    image: '/images/menu/telur-ceplok.jpg', name: 'Telur Ceplok', price: 6000, category: 'lauk', emoji: '🍳', description: 'Telur mata sapi goreng crispy di pinggiran, lembut di tengah.', spiceLevel: 0 },
  { id: 'lauk-4',
    image: '/images/menu/telur-kriwil.jpg', name: 'Telur Kriwil', price: 7000, category: 'lauk', emoji: '🥚', description: 'Telur orak-arik bumbu Larasati yang gurih dan harum.', spiceLevel: 1 },
  { id: 'lauk-5',
    image: '/images/menu/ikan-pindang.jpg', name: 'Ikan Pindang Goreng', price: 8000, category: 'lauk', emoji: '🐟', description: 'Pindang goreng kering dengan bumbu tradisional yang crispy.', spiceLevel: 2 },
  {
    id: 'lauk-6',
    name: 'Tongkol Suwir Kemangi',
    price: 8000,
    category: 'lauk',
    image: '/images/menu/tongkol.jpg',
    isBestSeller: true,
    emoji: '⭐',
    description: 'Ikan tongkol segar disuwir dan ditumis dengan kemangi segar, cabai merah, dan rempah khas. Menu paling dicari di Kantin Larasati.',
    spiceLevel: 3,
    pairing: 'Paling enak sama nasi putih hangat dan Es Teh',
  },
  { id: 'lauk-7', name: 'Ayam Suwir Kuning',
    image: '/images/menu/ayam-suwir-kuning.jpg', price: 8000, category: 'lauk', emoji: '🍗', description: 'Ayam suwir bumbu kuning Jawa yang lembut dan gurih.', spiceLevel: 1 },
  { id: 'lauk-8',
    image: '/images/menu/ceker-mercon-tanpa-tulang.jpg', name: 'Ceker Mercon Tanpa Tulang', price: 12000, category: 'lauk', emoji: '🌶️', description: 'Ceker empuk pedas mercon tanpa tulang. Siap makan langsung!', spiceLevel: 5 },
  { id: 'lauk-9', name: 'Ayam Goreng',
    image: '/images/menu/ayam-goreng.jpg', price: 14000, category: 'lauk', emoji: '🍗', description: 'Ayam goreng bumbu kuning crispy klasik khas Larasati.', spiceLevel: 2 },
  { id: 'lauk-10', name: 'Paru Balado',
    image: '/images/menu/nasi-paru.jpg', price: 15000, category: 'lauk', emoji: '🥩', description: 'Paru sapi renyah dengan balado pedas yang kaya rempah.', spiceLevel: 4 },
  { id: 'lauk-11',
    image: '/images/menu/cumi-cabe-ijo.jpg', name: 'Cumi Cabe Ijo', price: 16000, category: 'lauk', emoji: '🦑', description: 'Cumi segar dimasak cabe ijo pedas segar yang nagih.', spiceLevel: 4 },

  // SNACK
  { id: 'snack-1',
    image: '/images/menu/pisang-goreng.jpeg', name: 'Pisang Goreng', price: 12000, category: 'snack', emoji: '🍌', description: 'Pisang kepok goreng renyah diluar lembut didalam. Klasik!' },
  { id: 'snack-2', name: 'Pisang Lemu',
    image: '/images/menu/pisang-lemu.jpeg', price: 15000, category: 'snack', emoji: '🍫', description: 'Pisang goreng dengan topping keju yang manis dan gurih, lembut di dalam.' },
  { id: 'snack-3',
    image: '/images/menu/pisang-owol.jpeg', name: 'Pisang Owol', price: 15000, category: 'snack', emoji: '🌟', description: 'Pisang goreng geprek dengan paduan manis gurih yang unik.' },

  // TAMBAHAN
  { id: 'tambahan-1',
    image: '/images/menu/krupuk-solo.jpg', name: 'Krupuk Solo', price: 1000, category: 'tambahan', emoji: '🪨', description: 'Krupuk Solo renyah pelengkap makan yang wajib ada.' },
  { id: 'tambahan-2',
    image: '/images/menu/krupuk-ikan.jpg', name: 'Krupuk Ikan', price: 3000, category: 'tambahan', emoji: '🐟', description: 'Krupuk ikan gurih dan renyah, cocok untuk teman makan.' },
  { id: 'tambahan-3',
    image: '/images/menu/nasi.jpeg', name: 'Nasi', price: 5000, category: 'tambahan', emoji: '🍚', description: 'Nasi putih pulen tambahan buat yang kurang.' },

  // MINUMAN
  { id: 'minum-1',
    image: '/images/menu/air-mineral-600ml.jpg', name: 'Air Mineral 600ml', price: 4000, category: 'minuman', emoji: '💧', description: 'Air mineral segar untuk menghilangkan dahaga.' },
  { id: 'minum-2',
    image: '/images/menu/es-teh.jpg', name: 'Es Teh', price: 5000, category: 'minuman', emoji: '🧊', description: 'Teh manis dingin yang segar. Pasangan sempurna makan siang.' },
  { id: 'minum-3',
    image: '/images/menu/teh-panas.jpg', name: 'Teh Panas', price: 5000, category: 'minuman', emoji: '☕', description: 'Teh hangat manis yang menenangkan.' },
  { id: 'minum-4',
    image: '/images/menu/es-teh-kampul.jpg', name: 'Es Teh Kampul', price: 6000, category: 'minuman', emoji: '🍋', description: 'Es teh dengan jeruk nipis segar yang mengapung. Seger banget!' },
  { id: 'minum-5',
    image: '/images/menu/teh-kampul-panas.jpg', name: 'Teh Kampul Panas', price: 6000, category: 'minuman', emoji: '🍵', description: 'Teh panas dengan perasan jeruk nipis segar.' },
  { id: 'minum-6',
    image: '/images/menu/es-jeruk.jpg', name: 'Es Jeruk', price: 7000, category: 'minuman', emoji: '🍊', description: 'Jus jeruk segar dingin yang menyegarkan di siang hari.' },
  { id: 'minum-7', name: 'Jeruk Panas', price: 7000, category: 'minuman', emoji: '🍊', description: 'Jeruk panas manis yang menenangkan dan menyehatkan.' },
  { id: 'minum-8', name: 'Es Setup',
    image: '/images/menu/es-setup.jpg', price: 8000, category: 'minuman', emoji: '🌟', description: 'Minuman tradisional Jawa dari campuran rempah yang menyegarkan.' },
]

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)
