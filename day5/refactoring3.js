// (function(){})();
(function(){
  const response = {"c":"44","i":"https://itemimgs.pstatic.net/personacon","l":[
      {"m":"suhokim2","n":"김수호","p":"/71/3/480371.gif"},
      {"m":"limjjing","n":"웹스터디","p":"N"},
      {"m":"panginma","n":"팽팽","p":"N"},
      {"m":"godsarangi","n":"불꽃놀이","p":"/90/73/977390.gif"},
      {"m":"dlwo12345","n":"불줄","p":"N"},
      {"m":"kd789","n":"pubho","p":"N"},
      {"m":"sf36","n":"만성피로","p":"/42/9/2980942.gif"},
      {"m":"hosuk054","n":"흠흠","p":"/25/33/1403325.gif"},
      {"m":"klilil","n":"noony","p":"N"},
      {"m":"eunhye0406","n":"블루제이스","p":"/16/46/2354616.gif"},
      {"m":"jcyoum912","n":"달리는말","p":"N"},
      {"m":"wlsdlejdtod","n":"뚝우리","p":"N"},
      {"m":"naraorda","n":"Naraorda","p":"/21/31/2703121.gif"},
      {"m":"method_hyun","n":"곱게자랐더염","p":"/79/47/1074779.gif"},
      {"m":"dydska07","n":"명탄절코난","p":"N"},
      {"m":"gg5803","n":"H퍼블리셔","p":"/87/93/959387.gif"},
      {"m":"user830","n":"user038","p":"N"},
      {"m":"holygod89","n":"생성자","p":"/54/34/2553454.gif"},
      {"m":"lastpoem","n":"무한열정","p":"/21/31/2703121.gif"},
      {"m":"tlrud0621","n":"tlrud0621","p":"N"},
      {"m":"eunjee1504","n":"팅코코","p":"/66/15/1111566.gif"},
      {"m":"zzamtime","n":"싱싱고","p":"/68/10/2831068.gif"},
      {"m":"art-1st","n":"art1st","p":"N"},
      {"m":"tobehonest97","n":"돼랑이","p":"/24/75/987524.gif"},
      {"m":"eomji_90","n":"eomji","p":"N"},
      {"m":"radlohead","n":"크로스핏","p":"N"},
      {"m":"danmi2857","n":"ppungppu","p":"/39/83/2878339.gif"},
      {"m":"ghgfhfg2","n":"DeSY","p":"/64/40/1114064.gif"},
      {"m":"5hyemi5","n":"쏠려","p":"/96/63/2726396.gif"},
      {"m":"dltndks21","n":"퍼블이","p":"N"},
      {"m":"mulder21c","n":"멀더끙","p":"/54/43/1124354.gif"},
      {"m":"dark602","n":"긴자손","p":"/2/94/959402.gif"},
      {"m":"vldzmdnpf","n":"호밑","p":"/21/31/2703121.gif"},
      {"m":"mycarton","n":"미켈러","p":"/75/8/2920875.gif"},
      {"m":"jun88429","n":"프록시","p":"N"},
      {"m":"lsy8906","n":"퍼블리숑","p":"/19/49/1044919.gif"},
      {"m":"gygud98","n":"금괴","p":"/75/5/1480575.gif"},
      {"m":"hdmswjd","n":"댈리양","p":"N"},
      {"m":"qhdud1484","n":"플르네","p":"/11/39/1073911.gif"},
      {"m":"hyesoo_kim06","n":"khyehye","p":"N"},
      {"m":"jurip_","n":"하양튤립","p":"N"},
      {"m":"surfwon","n":"CodingBear","p":"/40/83/2878340.gif"},
      {"m":"slackware10","n":"SlackWare","p":"N"},
      {"m":"kiyoesjh","n":"jhjhjh","p":"N"}
    ]};

  /*
  const totalCount = response.c;
  const imagePath = response.i;
  const members = response.l;
  */

  const {
    c: totalCount,
    i: imagePath,
    l: members
  } = response;

  const memberLiElement = () => {
    const randomNumber = Math.floor((Math.random() * totalCount));
    /*const newMembers = members.filter((v, i) => {
      return i > randomNumber;
    });*/
    const newMembers = members.filter((v, i) => i > randomNumber);

    return {
      totalCount: newMembers.length,
      members: newMembers.map(v => {
        const src = v.p !== 'N' ? imagePath + v.p : '';
        const className = src ? '' : 'no-image';
        return `
        <li>
          <span>
            <img src="${src}" />
          </span>
          <span class="${className}">
            ${v.n}
          </span>
        </li>`;
      }).join('')
    };
  };

  function rootComponent({totalCount, members}) {
    //const {totalCount, members} = memberElement;

    return {
      root: `<div>접속 멤버${totalCount}명
              <ul>${members}</ul>
             </div>`
    };
  }
  function render(component, container) {
    container.innerHTML = component.root;
  }

  setInterval(() => {
    const memberElement = memberLiElement();
    render(rootComponent(memberElement), document.getElementById('app'))
  }, 1000);

  document.getElementById('btn').addEventListener('click', function() {
    console.log(this);
  });

})();

