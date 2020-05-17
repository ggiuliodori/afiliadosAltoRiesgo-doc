module.exports = {
    title: 'AAR - DOCUMENTACIÓN',
    description: 'Documentación',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Demo', link: 'http://167.99.51.107:8080/login' },
        { text: 'Github', link: 'https://github.com/ggiuliodori/afiliadosAltoRiesgo-doc' },
      ],
      sidebar:[
        ['/', 'Inicio'],
        ['/docs/inicio/flujos_negocio', 'Flujos de Negocio'],
        {
          title: 'Funcionalidades',
          children: [ 
            ['/docs/funcionalidades/adr0001.md', 'ADR0001'],
            ['/docs/funcionalidades/adr0002.md', 'ADR0002'],
            ['/docs/funcionalidades/adr0003.md', 'ADR0003'],
            ['/docs/funcionalidades/adr0004.md', 'ADR0004']
           ]
        },
        {
          title: 'Módulos',
          children: [ 
            ['/docs/modulos/est0001.md', 'EST0001'],
            ['/docs/modulos/est0002.md', 'EST0002']
           ]
        },
        {
          title: 'Incompatibilidades',
          children: [ 
            ['/docs/incompatibilidades/reu0001.md', 'REU0001'],
            ['/docs/incompatibilidades/reu0002.md', 'REU0002'],
            ['/docs/incompatibilidades/reu0003.md', 'REU0003'],
            ['/docs/incompatibilidades/reu0004.md', 'REU0004']
           ]
        },
        {
          title: 'Configuración',
          children: [ 
            ['/docs/config/hexing.md', 'Hexing'],
            ['/docs/config/itron.md', 'Itron'],
            ['/docs/config/circutor.md', 'Circutor']
           ]
        },
        {
          title: 'Scheduler',
          children: [ 
            ['/docs/schedul/ntm.md', 'NTM']
           ]
        },
        {
          title: 'Tags',
          children: [ 
            ['/docs/tags/ntm.md', 'NTM']
           ]
        },
        {
          title: 'Arquitectura',
          children: [ 
            ['/docs/arquitectura/ntm.md', 'NTM']
           ]
        }
      ]
  }
}

  