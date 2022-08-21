export interface Restaurant {
    shortName: string;
    fullName: string;
    url: string;
}

export const restaurants: Restaurant[] = [
    {
        shortName: 'portoriko',
        fullName: 'Restaurace Portoriko',
        url: 'https://restauraceportoriko.cz/denni-menu/'
    },

    {
        shortName: 'jp',
        fullName: 'Jean Paul\'s',
        url: 'https://www.jpbistro.cz/menu-technopark/index.php'
    },

    {
        shortName: 'asport',
        fullName: 'A-Sport',
        url: 'https://www.a-sporthotel.cz/restaurace/denni-menu/'
    },

    {
        shortName: 'nepal',
        fullName: 'Nepal',
        url: 'https://nepalbrno.cz/weekly-menu/'
    },

    {
        shortName: 'u3opic',
        fullName: 'U 3 Opic',
        url: 'https://www.u3opic.cz/denni-menu'
    },

    {
        shortName: 'padagali',
        fullName: 'Padagali',
        url: 'https://padagali.cz/denni-menu/'
    },

    {
        shortName: 'na_purkince',
        fullName: 'Na Purkiňce',
        url: 'https://www.menicka.cz/api/iframe/?id=2647'
    },

    {
        shortName: 'kanas',
        fullName: 'Restaurace Kanas',
        url: 'http://www.kanas.cz/stranka/date/{date}/0#menu'
    },

]