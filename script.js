const heroes = [
  {
    name: 'Pudge',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png',
   
    description: 'Пудж использует свой крюк, чтобы притянуть врагов, после чего наносит урон и может выдержать множество атак.'
  },
  {
    name: 'Invoker',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png',
    
    description: 'Инвокер владеет 10 заклинаниями, которые комбинируются с помощью трёх элементов, делая его сложным, но мощным героем.'
  },
  {
    name: 'Juggernaut',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png',
    
    description: 'ближний боец с сильным уроном и лечением. Умеет быстро атаковать и восстанавливаться, а его ультимейт — серия быстрых ударов по врагам.'
  },
  {
    name: 'Lina',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png',
   
    description: 'Лина управляет огнём, быстро уничтожая врагов мощными заклинаниями на расстоянии.'
  },
  {
    name: 'Phantom Assassin',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png',
    
    description: 'Мастер убийств с высоким шансом на критический удар. Становится сильнее по мере игры.'
  },
  {
    name: 'Crystal Maiden',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png',
    
    description: 'Замораживает врагов, замедляет их и обеспечивает союзников маной.'
  },
  {
    name: 'Sven',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png',
   
    description: 'Сильный боец ближнего боя с массовым оглушением и высоким уроном.'
  },
  {
    name: 'Zeus',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png',
    
    description: 'Мастер молний, который может наносить урон всем врагам на карте.'
  },
  {
    name: 'Drow Ranger',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png',
    
    description: 'Стрелок с высоким уроном, замедляющий врагов и усиливающий союзников.'
  },
  {
    name: 'Axe',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png',
    
    description: 'Провоцирует врагов на атаку, чтобы затем нанести контрудар.'
  },
  {
    name: 'Anti-Mage',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
   
    description: 'Идеален против магов, сжигает ману врагов и быстро телепортируется.'
  },
  {
    name: 'Sniper',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png',
  
    description: 'Атакует с большой дистанции и наносит критический урон.'
  },
  {
    name: 'Witch Doctor',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png',
  
    description: 'Лечит союзников и наносит урон врагам с помощью вуду и проклятий.'
  },
  {
    name: 'Earthshaker',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png',
  
    description: 'Мощные оглушающие заклинания, особенно эффективны в командных боях.'
  },
  {
    name: 'Lifestealer',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png',
    
    description: 'Восстанавливает здоровье, нанося урон, и может спрятаться в союзниках.'
  },
  {
    name: 'Storm Spirit',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png',
    
    description: 'Быстро передвигается по карте и наносит урон заклинаниями.'
  },
  {
    name: 'Shadow Fiend',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png',
    
    description: 'Поглощает души врагов для увеличения урона и выпускает мощные волны тьмы.'
  },
  {
    name: 'Lion',img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png',
    
    description: 'Имеет мощный контроль и способный уничтожить врага с одного удара ультой.'
  },
  {
    name: 'Mirana',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png',
   
    description: 'Использует лук и стрелы, может становиться невидимой и оглушать издалека.'
  },
  {
    name: 'Bristleback',
    img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png',
  
    description: 'Чем дольше живёт, тем опаснее становится. Получает меньше урона со спины.'
  }
];

const heroGrid = document.getElementById('heroGrid');

heroes.forEach(hero => {
  const card = document.createElement('div');
  card.className = 'hero-card';

  card.innerHTML = `
    <img src="${hero.img}" alt="${hero.name}">
    <span class="hero-name">${hero.name}</span>
  `;

  const desc = document.createElement('p');
  desc.className = 'hero-desc';
  desc.textContent = hero.description;
  desc.style.display = 'none'; // Скрыт по умолчанию
  card.appendChild(desc);

  card.addEventListener('click', () => {
    const isVisible = desc.style.display === 'block';

    // Скрыть описания у всех карточек
    document.querySelectorAll('.hero-desc').forEach(d => d.style.display = 'none');

    // Показать/скрыть описание только у этой карточки
    desc.style.display = isVisible ? 'none' : 'block';
  });

  heroGrid.appendChild(card);
});

function playNow() {
  alert('Функция временно недоступна. Зато ты красавчик(а), раз сюда добрался 👀');
}
function buyItem(itemName) {
  alert("Вы купили: " + itemName + " 🎉 Спасибо за заказ!");
}
