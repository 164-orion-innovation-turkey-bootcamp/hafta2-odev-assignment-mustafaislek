const ingredients = {
    lettuce: 5,
    pickle: 5,
    packageSauce: 5,
    onion: 5,
    meatball: 5,
    chicken: 5,
    tomato: 5,
    bread: 5,
    potato: 5,
    cola: 5,
  };
  
  function onOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('Siparis Aliniyor'));
      }, 1000);
    });
  }
  function onCheckStock() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let stockStatus = true;
        console.log('Stok Kontrol Ediliyor');
        for (const ingredient in ingredients) {
          if (ingredients[ingredient] <= 0) {
            stockStatus = false;
            console.error(`'${ingredient}' stokta yok`);
            reject('Hata: islem iptal edildi.');
          }
        }
        if (stockStatus) {
          resolve(console.log('stokta var'));
        }
      }, 3000);
    });
  }
  
  function onSelectChickenOrMeatball() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let selected = prompt('Tavuk mu kofte mi?').toLowerCase();
        // console.log(' selected lower', selected);
        // const selected = 'kofte';
        if (selected == 'kofte' || selected == 'köfte') {
          ingredients.meatball--;
          console.log('Kofte burger hazirlaniyor');
  
          let cookedStatus = prompt(
            'Pisme derecesi? [ 1:az pismis, 2:orta pismis, 3:cok pismis]'
          ).toLowerCase();
          // const cookedStatus = 'underCooked'; // 'medıumCooked' // 'overCooked'
  
          if (cookedStatus == 1) {
            setTimeout(() => {
              console.log('Az Pismis');
            }, 2000);
          } else if (cookedStatus == 2) {
            setTimeout(() => {
              console.log('Orta Pismis');
            }, 3000);
          } else if (cookedStatus == 3) {
            setTimeout(() => {
              console.log('Cok Pismis');
            }, 4000);
          }
        } else if (selected == 'tavuk') {
          ingredients.chicken--;
          console.log('Tavuk burger hazirlaniyor');
          setTimeout(() => {
            console.log('Tavuk Pisirildi');
          }, 3000);
        }
        resolve();
      }, 1000);
    });
  }
  
  function onBurgerPreparing() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ingredients.lettuce--;
        ingredients.tomato--;
        ingredients.pickle--;
        ingredients.onion--;
        ingredients.bread--;
      }, 0);
    });
  }
  
  function extras(work, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(work());
      }, time);
    });
  }
  
  async function main() {
    await onOrder();
    await onCheckStock();
    await onSelectChickenOrMeatball();
    onBurgerPreparing();
    await extras(() => {
      ingredients.potato--;
      console.log('Patates hazirlaniyor');
    }, 5000);
    extras(() => {
      ingredients.cola--;
      console.log('Icecek hazirlaniyor');
    }, 2000);
    await extras(() => {
      ingredients.packageSauce--;
      console.log('Soslar ve urunler tepsiye koyuluyor');
    }, 2000);
    extras(() => {
      console.log('Servis Hazir.');
    }, 1000);
  }
  
  main();
  