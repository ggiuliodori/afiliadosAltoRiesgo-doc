module.exports = {
    title: 'EPEC Grandes Clientes',
    description: 'Epec Grandes clientes',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Jira', link: 'https://jira.ascentio.com.ar/secure/RapidBoard.jspa?rapidView=90&view=detail' },
        { text: 'Gitlab', link: 'https://gitlab.ascentio.com.ar/teleco/epec' },
        { text: 'Jenkins', link: 'https://traduccionesitaliano.files.wordpress.com/2016/04/work-in-progress.png?w=487' }
      ],
      sidebar:[
        ['/', 'Inicio'],
        ['/docs/arquitectura', 'Arquitectura'],
        {
          title: 'Decisiones',
          children: [ 
            ['/docs/decisiones/adr0001.md', 'ADR0001'],
            ['/docs/decisiones/adr0002.md', 'ADR0002'],
            ['/docs/decisiones/adr0003.md', 'ADR0003'],
            ['/docs/decisiones/adr0004.md', 'ADR0004']
           ]
        },
        {
          title: 'Estimaciones',
          children: [ 
            ['/docs/estimaciones/est0001.md', 'EST0001'],
            ['/docs/estimaciones/est0002.md', 'EST0002']
           ]
        },
        {
          title: 'Reuniones',
          children: [ 
            ['/docs/reuniones/reu0001.md', 'REU0001'],
            ['/docs/reuniones/reu0002.md', 'REU0002'],
            ['/docs/reuniones/reu0003.md', 'REU0003'],
            ['/docs/reuniones/reu0004.md', 'REU0004']
           ]
        },
        {
          title: 'Medidores',
          children: [ 
            ['/docs/hexing.md', 'Hexing'],
            ['/docs/itron.md', 'Itron'],
            ['/docs/circutor.md', 'Circutor']
           ]
        },
        {
          title: 'Indicadores',
          children: [ 
            ['/docs/indicadores/ntm.md', 'NTM']
           ]
        }
      ]
  }
}

  