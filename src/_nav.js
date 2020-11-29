


export default {
  items: [
    {
      name: 'Tableau de bord',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    

    {
      divider: true,
    },


    {
      name: 'Superviseur',
      url: '/superviseur',
      icon: 'icon-star',
      children: [
        {
          name: 'Journal opérations',
          url: '/journaloperation',
          icon: 'icon-star',
        },
        {
          name: 'journal commissions',
          url: '/journalcommission',
          icon: 'icon-star',
        },
        {
          name: 'Solde opérateurs',
          url: '/soldeoperateur',
          icon: 'icon-star',
        },
        {
          name: 'Positions',
          url: '/position',
          icon: 'icon-star',
        },
        {
          name: 'Comptabilité',
          url: '/comptabilite',
          icon: 'icon-star',
        },
        {
          name: 'Historique caisse',
          url: '/historiquecaissesuperviseur',
          icon: 'icon-star',
          
        },
      ],
    },

    {
      divider: true,
    },



    {
      divider: true,
    },

    {
      name: 'Gestion des comptes',
      url: '/gestioncompte',
      icon: 'icon-star',
      children: [
      {
        name: 'Créer compte',
        url: '/creercompte',
        icon: 'icon-star',
        
      },
      {
        name: 'Liste des comptes',
        url: '/users',
        icon: 'icon-star',
        
      },
      ],
    },


    // {
    //   title: true,
    //   name: 'Extras',
    // },
    {
      divider: true,
    },
    
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
    // {
    //   name: 'Download CoreUI',
    //   url: 'https://coreui.io/react/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'https://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
  ],
};
