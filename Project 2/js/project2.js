let data = [
    {
        name : 'Hadeel',
        age : 27
    },
    {
        name : 'Deyaa Aldeen',
        age : 20
    },
    {
        name : 'Sura',
        age : 24
    },
    {
        name : 'Huda',
        age : 30
    },
    {
        name : 'Ali',
        age : 32
    },
    {
        name : 'Tariq',
        age : 33
    },
]

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return('<div>'+ item.name + ' -------  '+ item.age  + '</div>') ;
});

info.innerHTML = details.join('\n');