function initSlider() {
  const slider = document.querySelector('.swiper-wrapper');
  const fragment = document.createDocumentFragment();
  fragment.append(...peopleData.map((data) => {
    const container = document.createElement('div');
    container.classList.add('swiper-slide');
    const link = document.createElement('a');
    link.href = `./detailed.html?id=${data.id}`;
    link.style.backgroundImage = `url("${data.photo}")`;
    link.textContent = data.fio;
    container.appendChild(link);
    return container;
  })); 
  slider.appendChild(fragment);
}

const squads = [...new Set(peopleData.map((data) => data.squad))];

function initSearch() {
  function initSelect(select) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = `<option value='any' disabled selected>Отряд</option>
    <option value="any">Любой</option>`;
    fragment.append(...squads.map((squad) => {
      const option = document.createElement('option');
      option.value = squad;
      option.text = squad;
      return option;
    }));
    select.appendChild(fragment);
    console.log(select);
  }
  
  function createCard(data) {
    return `<div class="list__item">
    <div class="item__img">
      <img src="${data.photo}" alt="">
    </div>
    <div class="item__content">
      <a href="./detailed.html?id=${data.id}" class="item__name">${data.fio}</a>
      <div class="item__infos">
        <div class="item__info">Дата рождения: ${data.birthday}</div>
        <div class="item__info">Место рождения: ${data.birthplace}</div>
        <div class="item__info">Национальность: ${data.nationality}</div>
        <div class="item__info">${data.squad}</div>
        <div class="item__info">Должность: ${data.post}</div>
      </div>
    </div>
  </div>`
  }

  const wrapper = document.querySelector('.search__wrapper');
  const input = document.querySelector('.search__input'); 
  const select = document.querySelector('.search__select');
  const list = document.querySelector('.search__list');
  const count = document.querySelector('.search__found > .search__title');
  const btn = document.querySelector('.search__btn');

  initSelect(select);

  btn.addEventListener('click', () => {
    if (input.value) {
      wrapper.classList.add('active');
    } else {
      wrapper.classList.remove('active');
    }
  })

  btn.addEventListener('click', () => {
    if (!input.value) return;
    if (input.value.toLowerCase() === 'вагичев') {
      count.innerHTML = `Найдено 1`;
      list.innerHTML = createCard(vagichData[0]);
      return;
    }
    let filterData = peopleData
      .filter(
        (data) => data.fio.toLowerCase().includes(input.value.toLowerCase())
      );
    switch (select.value) {
      case 'any': {
        break;
      }
      default: {
        filterData = filterData.filter((data) => data.squad === select.value);
      }
    }
    count.innerHTML = `Найдено ${filterData.length}`;
    list.innerHTML = filterData
      .map((data) => createCard(data))
      .reduce((acc, val) => acc + val, '');;
    
  });
}

function toggleModal() {
  if (document.body.classList.contains('show-squad')) {
    document.body.classList.remove('show-squad');
  } else {
    document.body.classList.add('show-squad');
  }
}

function initSquads() {
  const list = document.querySelector('.squads__list');

  list.append(...squadData.map((data) => {
    const btn = document.createElement('button');
    btn.dataset.id = data.id;
    btn.textContent = data.name;
    const div = document.createElement('div');
    div.classList.add('squads__item')
    div.appendChild(btn);
    return div;
  }));

  const title = document.querySelector('.squad-mdl__title');
  const articles = document.querySelector('.squad-mdl__articles');
  const people = document.querySelector('.squad-mdl__people');
  const wrapperArticles = document.querySelector('.wrapper-articles')
  const wrapperPeople = document.querySelector('.wrapper-people')

  list.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'button') return;
    const id = Number(e.target.dataset.id);
    const squad = squadData.find((data) => data.id === id);
    if (!squad) return;
    title.textContent = squad.name;
    if (squad.articles.length === 0) {
      wrapperArticles.style.display = 'none';
    } else {
      wrapperArticles.style.display = 'grid';
      articles.innerHTML = '';
      articles.append(...squad.articles.map((article) => {
        const link = document.createElement('a');
        link.href = article.link;
        link.textContent = article.name;
        return link;
      }));
    }
    const data = peopleData.filter((people) => people.squad === squad.name);
    if (data.length === 0) {
      wrapperPeople.style.display = 'none';
    } else {
      wrapperPeople.style.display = 'grid';
      people.innerHTML = '';
      people.append(...data.map((people) => {
        const link = document.createElement('a');
        link.href = `./detailed.html?id=${people.id}`;
        link.textContent = people.fio;
        return link;
      }));
    }
    toggleModal();
  });
}

function initModal() {
  const modal = document.querySelector('.squad-mdl');
  const btn = document.querySelector('.squad-mdl__close');

  btn.addEventListener('click', toggleModal);
  modal.addEventListener('click', (e) => {
    if (e.target.className === 'squad-mdl') {
      toggleModal();
    } 
  });
}

async function init() {
  initSlider();
  initSearch();
  initSquads();
  initModal();
}

init();