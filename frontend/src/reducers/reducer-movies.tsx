
// denne skal bare returnere et array med filmer
// dette er en liste av filmer vi vil lagre i storen vår
// men nå skal vi ikke lengre ha watchlist, så det jeg egentlig vil lagre som state nå er
// hvilken film som skal displayes i "mer info". Og sa skal jeg jo ikke egentlig lagre flere
// filmer i store. Da vil jeg jo bare ha kontrollen på staten til title, year, directors osv.
// Så egentlig vil jeg bare ha én av disse filmene i guess. Men så skal dette igjen kobles
// mot hva det trykkes på, det skal ikke bare hardkodes inn her. Men der tror jeg at han kommer
// til senere da. Men det jeg synes er rart er om jeg trenger liksom dette med combine og allMovies
// osv. når jeg bare vil ha én film. Men kanskje det som displayes er/allMovies skal være alle moviene
// som vises ved søk, og så kan man klikke på dem for å få frem mer informasjon. Ja jeg tror det.
// Så da holder jeg det bare sånn for nå i guess.
export default function() {
    return [
        {
            id: 1,
            title: "Avengers: End Game",
            duration: 2.3,
            year: 2019
        },
        {
            id: 2,
            title: "Titanic",
            duration: 2.8,
            year: 1984
        },
        {
            id: 3,
            title: "Home Alone",
            duration: 1.5,
            year: 2000
        }
    ]
}