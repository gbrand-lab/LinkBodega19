// All copy and links for each unit live here — edit this file to update
// addresses, phone numbers, menu images or opening times without touching
// any component code. Menu art (JPG/PNG) lives in /public, pulled from the
// gbrand-lab/LinkBodega19 source repo.

export const units = [
  {
    id: 'vistamar',
    name: 'Vista Mar',
    accent: 'orange',
    address: {
      label: "R. Quarenta, 0 · Ponta D'Areia",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=R.+Quarenta%2C+0+-+Ponta+D%27Areia%2C+S%C3%A3o+Luis+-+MA",
      mapsEmbedUrl:
        "https://www.google.com/maps?q=R.+Quarenta%2C+0+-+Ponta+D%27Areia%2C+S%C3%A3o+Luis+-+MA&output=embed",
    },
    hours: [
      { day: 'Segunda', time: 'Fechado' },
      { day: 'Ter a Sáb', time: '11h às 22h' },
      { day: 'Domingo', time: '11h às 18h' },
    ],
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-luis-ma/bodega19---vista-mar-ponta-dareia/48dc8c65-c032-4c38-831c-47579231e9e7',
    whatsappUrl: 'https://wa.me/5598984560555',
    menus: [
      {
        icon: 'menu',
        title: 'Cardápio Bodega19',
        subtitle: 'Menu completo da unidade Vista Mar',
        image: '/Cardapio_Vistamar_Frente.jpg',
      },
      {
        icon: 'clock',
        title: 'Menu Happy Hour',
        subtitle: 'Promoções e petiscos do dia',
        image: '/Cardapio_Happy_Vistamar.png',
      },
      {
        icon: 'menu',
        title: 'Menu Executivo',
        subtitle: 'Terça a quinta, 11h às 22h',
        image: '/Cardapio_Menu_Executivo.png',
      },
    ],
  },
  {
    id: 'golden',
    name: 'Golden Shopping',
    accent: 'blue',
    address: {
      label: 'Av. dos Holandeses, 200 · Calhau',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Av.+dos+Holandeses%2C+200+-+Calhau%2C+S%C3%A3o+Luis+-+MA',
      mapsEmbedUrl:
        'https://www.google.com/maps?q=Av.+dos+Holandeses%2C+200+-+Calhau%2C+S%C3%A3o+Luis+-+MA&output=embed',
    },
    hours: [{ day: 'Todos os dias', time: '10h às 22h' }],
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-luis-ma/bodega-19-calhau/f592de6a-e78a-4241-84fe-33fb7d752868',
    whatsappUrl: 'https://wa.me/559884334344',
    menus: [
      {
        icon: 'menu',
        title: 'Cardápio Bodega19',
        subtitle: 'Menu completo da unidade Golden Shopping',
        image: '/Cardapio_Golden.jpg',
      },
      {
        icon: 'menu',
        title: 'Menu Executivo',
        subtitle: 'Terça a quinta, 11h às 22h',
        image: '/Cardapio_Menu_Executivo.png',
      },
    ],
  },
]

// Maps each unit's accent key to the CSS custom properties that color its
// section (buttons, icons, pin, section labels).
export const accentTokens = {
  orange: { accent: 'var(--orange)', accentDeep: 'var(--orange-deep)' },
  blue: { accent: 'var(--blue)', accentDeep: 'var(--blue-deep)' },
}
