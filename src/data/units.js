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
      label: "R. Astrolábio, 20A · Ponta D'Areia",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=R.+Astrol%C3%A1bio%2C+20A+-+Ponta+D%27Areia%2C+S%C3%A3o+Luis+-+MA",
      mapsEmbedUrl: "https://www.google.com/maps?cid=17377254542620206727&output=embed",
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
        images: [
          '/Cardapio_Vistamar_01.jpg',
          '/Cardapio_Vistamar_02.jpg',
          '/Cardapio_Vistamar_03.jpg',
          '/Cardapio_Vistamar_04.jpg',
          '/Cardapio_Vistamar_05.jpg',
          '/Cardapio_Vistamar_06.jpg',
          '/Cardapio_Vistamar_07.jpg',
          '/Cardapio_Vistamar_08.jpg',
          '/Cardapio_Vistamar_09.jpg',
          '/Cardapio_Vistamar_10.jpg',
          '/Cardapio_Vistamar_11.jpg',
          '/Cardapio_Vistamar_12.jpg',
          '/Cardapio_Vistamar_13.jpg',
        ],
      },
      {
        icon: 'clock',
        title: 'Menu Happy Hour',
        subtitle: 'Terça a sábado, 15h às 20h · Domingo, 15h às 18h',
        image: '/Cardapio_Happy_Vistamar_Bodega.jpg',
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
        images: ['/Cardapio_Golden_Frente.png', '/Cardapio_Golden_Bebidas.png'],
      },
      {
        icon: 'clock',
        title: 'Menu Happy Hour',
        subtitle: 'Segunda a segunda, 15h às 20h',
        images: ['/Cardapio_Happy_Golden_1.png', '/Cardapio_Happy_Golden_2.png'],
      },
      {
        icon: 'menu',
        title: 'Menu Executivo',
        subtitle: 'Segunda a quinta, 11h às 21h · R$69,90',
        image: '/Cardapio_Menu_Executivo_Golden.png',
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
