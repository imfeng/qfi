let projects: Array<{
  disabled?: boolean;
  projectName: string;
  tagline: string;
  description: string;
  ethereumAddress: string;
  website: string;
  thumbnailImageLink: string;
  logoCdnUrl: string;
  bannerImageLink: string;
  recipientId: number;
  id: string;
  video?: string;
  github?: string;
  email?: string;
  teamName?: string;
  ppt?: string;
}> = [
{
  disabled: false,
  "recipientId": 1,
  "id": "1",
  "email": "kidneyweak@gmail.com",
  "teamName": "HollowLeaf",
  "projectName": "Tobi",
  "ethereumAddress": "0xC0B392F014ca3FFD4BC98c43Db2D947d804AcCDE",
  "description": "我們是hollowleaf虛空之葉，利用零知識的力量在黑暗中守護．如同落葉一般，在虛空中繪製新的軌跡，並空洞的不透露任何資訊，研究零知識的真諦．",
  "tagline": "Tobi 是結合零知識證明和機器學習的權重市場",
  "github": "https://github.com/hollow-leaf/tobi",
  "website": "https://hollowleaf.dev/tobi/",
  "ppt": "https://www.canva.com/design/DAFt1gArYSY/eq6izFmPIpX0uO_yKcKGXg/view",
  "logoCdnUrl": "/assets/1-logo.png",
  "thumbnailImageLink": "/assets/1-logo.png",
  "bannerImageLink": "/assets/1-banner.png",
  "video": "https://youtu.be/8AZRagy8k9g"
}, {
  disabled: false,
  "recipientId": 2,
  "id": "2",
  "email": "mingyuhe22@gmail.com",
  "teamName": "CCLab",
  "projectName": "ZK Democracy",
  "ethereumAddress": "0x776D3cB593034695873DD35c5807d70Fd9391BE2",
  "description": "We are the CCLab from NTNU. In recent years, our lab has been focused on blockchain technology. More recently, we have embarked on research in the field of zero-knowledge proofs. Our research encompasses both the foundational academic theories of zero-knowledge proofs and their practical applications in real-world scenarios. This is aimed at exploring the potential integration of zero-knowledge proofs into everyday life.",
  "tagline": "Can Ethereum transaction speed be increased? Can Ethereum transaction fees be reduced? Can ZK Rollup be decentralized? For ZK Democracy, the answer to all of these questions is yes. ZK Democracy is dedicated to researching how to pack more transactions into ZK Rollup, even allowing everyone to be an operator. We narrow down the types of transactions we pack to just transfers. However, this allows us to make better optimizations in terms of data structures for transfer transactions. We aim to add the missing piece of decentralization to ZK Rollup, trying to complete the Blockchain Trilemma. Additionally, we aim to align Ethereum transactions with real-world transaction activities.",
  "github": "https://github.com/MingyuHeTKS/zk-democracy",
  "website": "",
  "ppt": "",
  "logoCdnUrl": "/assets/3-logo.png",
  "thumbnailImageLink": "/assets/3-logo.png",
"bannerImageLink": "/assets/3-banner.png",
"video": "https://youtu.be/0Qv_-6r7nDM"
}, {
  disabled: false,
  "recipientId": 3,
  "id": "3",
  "email": "wsp151515@gmail.com",
  "teamName": "zkblk",
  "projectName": "whirl-auction",
  "ethereumAddress": "0xe79c90cE8c5152338348f50B5873fAf2d0EC88cD",
  "description": "成員一 Tony Chen  在Ethereum, Polygon, 和 Avalanche平台上開發過NFT. 協助公司在Polygon與OpenSea上架歌唱獎盃NFT. 協助Gamefi project(Arcade Galaxy) 在Avalanche上架遊戲資產NFT盲盒.撰寫過upgradeable smart contract. 希望能將zkp應用於現在開發的專案中.  成員二 Young Wang  在工作上主要會使用solidity在Ethereum上開發合約，接觸過ERC1155和ERC721的專案還有ERC20相關的專案。之前有對Ethereum的擴容技術做一些研究，比較各個rollup的區別及其發展還有測試Immutable X的平台，因為其中的zk-rollup使用到ZKP相關的技術對其產生興趣，希望可以更深入了解並應用到其他專案。",
  "tagline": "Two layer Dutch auction system hiding bidding price, and payment. The Seller submits an initial Dutch auction price commitment and convinces a limited number of bidders on the on-chain commitment. Use circom circuit to check hidden bidding prices submitted by bidders, and leverage Tornado cash to implement hidden payment.",
  "github": "https://github.com/gn0uchat/whirl-auction",
  "website": "",
  "ppt": "",
  "logoCdnUrl": "/assets/4-logo.png",
  "thumbnailImageLink": "/assets/4-logo.png",
"bannerImageLink": "/assets/4-banner.png",
"video": "https://youtu.be/mok0TTbH448"
}, {
  disabled: false,
  "recipientId": 4,
  "id": "4",
  "email": "t108590035@ntut.org.tw",
  "teamName": "Zebra’s Ketchup Pasta",
  "projectName": "老師不管，男模會館",
  "ethereumAddress": "0xb5E52cD79Fec0f61AF55A42f2b214F3Cb5d46f23",
  "description": "大家好我們是Zebra’s Ketchup Pasta，是第一次參加ZK Playground，是完全zkp小白，我們對zkp領域感興趣。雖然我們可能不擁有專業經驗，但我們熱愛學習並不斷提升自己。 我們的目標是:是不斷學習zkp相關知識和如何把該技術帶到現實生活中幫助改善生活。我們歡迎大家建議、指導和機會，以幫助我們實現這些目標，更佳了解zkp知識技術。",
  "tagline": "人們進入特殊場所往往不願透漏自己的真實身分，於是乎產生了這個透過匿名登入來保護使用者的系統。 凡是男模會館的會員，我們進場首先須登入以零知識概念建立的 Semaphore，以此驗證身分與登入系統，當確定是會員後，Semaphore 會產生一把驗證金鑰， 當成我們訓練的決策樹的輸入值，藉此來告知目前的會員等級，以及當天可以享用的套餐或服務。 我們希望會員既能保有其個人真實身分的隱私，也能在會館玩得盡興！",
  "github": "https://github.com/t108590035/Zebra-s-Ketchup-Pasta-zkp-project.git",
  "website": "",
  "ppt": "",
  "logoCdnUrl": "/assets/5-logo.png",
  "thumbnailImageLink": "/assets/5-logo.png",
"bannerImageLink": "/assets/5-banner.png",
"video": "https://youtu.be/XCHv0H3Qvjk"
}, {
  disabled: false,
  "recipientId": 5,
  "id": "5",
  "email": "alex640702070829@gmail.com",
  "teamName": "MoonMathLovers",
  "projectName": "Transparent LootBox Revolution",
  "ethereumAddress": "0x000000Ff50d24fAF11E9ea7B1Ff89b968ADdafC6",
  "description": "MoontMathLovers 由一群於 web3 社群當中隨機認識的成員所組成組成。雖然彼此的年齡、背景各有不同，然而藉著對於 ZK 知識的熱愛，及對用密碼學改善世界的信仰，而攜手組隊開發創新專案。",
  "tagline": "LootBox 已經成為遊戲業的常見特點，為玩家提供了機會和驚喜的樂趣。然而，> LootBox 的廣泛使用引發了有關其結果的公平性擔憂。作為對這些挑戰的回應，我們的專案，透過 Unbiased Entropy 和 Verified Fisher-Yates Shuffle 以達到公平可信的抽獎，旨在提供一種變革性解決方案，承諾為所有人提供更公平和愉快的遊戲體驗",
  "github": "https://github.com/MoonMathLover/demo-repository",
  "website": "",
  "ppt": "",
  "logoCdnUrl": "/assets/6-logo.png",
  "thumbnailImageLink": "/assets/6-logo.png",
"bannerImageLink": "/assets/6-banner.png",
"video": "https://youtu.be/gX_u7Phva5A"
}, {
  disabled: false,
  "recipientId": 6,
  "id": "6",
  "email": "jbjyuan@gmail.com",
  "teamName": "我擔心組員沒填表單",
  "projectName": "SilentImpact",
  "ethereumAddress": "0xD1D922B55f1E040A994885821baf504eed905447",
  "description": "四個互不熟識的人，在 ZK Playground 組成的團隊。",
  "tagline": " 當我們設計 SilentImpact 時，我們的主要目標是促進匿名資訊分享，同時確保可信性和隱私保護，以擴大公共參與、提升信息透明度，並促進社會正義。我們的平台提供了多種功能，包括身份部分揭露、匿名投稿文章以及匿名捐款，以實現這一目標。  在我們的平台上，用戶可以選擇部分揭露自己的身份，這樣可以增加信息的可信度，同時保護個人隱私。他們可以匿名地分享文章，讓重要信息得以傳播，而不需要害怕身份曝光。此外，我們支持匿名捐款，讓用戶能夠以隱匿的方式支持他們喜歡的內容和社會事業。",
  "github": "https://github.com/hugebing/SilentImpact",
  "website": "",
  "ppt": "https://docs.google.com/presentation/d/1gbrneRkHYB4FrKoQoYs1V_kVp6MLFsUyMAcWmCN3-0w/edit?usp=sharing",
  "logoCdnUrl": "/assets/7-logo.png",
  "thumbnailImageLink": "/assets/7-logo.png",
"bannerImageLink": "/assets/7-banner.png",
"video": "https://youtu.be/WpsjFVNJ7TQ"
}, {
  disabled: true,
  "recipientId": 7,
  "id": "7",
  "email": "kbjkuo@gmail.com",
  "teamName": "啊ㄟ姆 減啊ㄟ斧 斜線",
  "projectName": "SANBAO - Street Alert Network: Blockchain Assisted Oracle",
  "ethereumAddress": "0xF55651e9b14e125c0C1499e50e618bF82d3d760d",
  "description": "zk研究團隊",
  "tagline": "利用區塊鏈的公開去中心化特性，幫助大家記錄駕使行為，讓三寶行為在公開世界中被量化。而記錄的人以 zk 來保護身份，不被究責。",
  "github": "",
  "website": "",
  "ppt": "https://docs.google.com/presentation/d/1AIhcjp1mFcO4ruvL0GoY4evQup-1rg-5AAyjhjFXiWA/edit?usp=sharing",
  "logoCdnUrl": "/assets/8-logo.png",
  "thumbnailImageLink": "/assets/8-logo.png",
"bannerImageLink": "/assets/8-banner.png",
"video": ""
},
// {
//   "recipientId": ?,
//   "id": "?",
//   "email": "garden.shyu@gmail.com",
//   "teamName": "Maverick",
//   "projectName": "zkSeed",
//   "ethereumAddress": "0x0C2f124b968B537AA15d852094008Bf8491e284c",
//   "description": "隊如其名，獨行俠。",
//   "tagline": "zkSeed 是一個創新匿名募資平台，旨在為資金籌集活動提供更多隱私、安全及透明度。我們整合了 ZK 技術和區塊鏈技術，為資金籌集活動引入了新的保密和可靠性標準。平台主要目標是為個人贊助者和初創項目提供安全、私密的募資解決方案。個人贊助者可以隱匿身份，確保其捐款細節得以保密。初創企業可以安全地籌集資金，並透過平台項向匿名贊助者提供分潤。所有過程透過 ZK 技術以確保所有交易都得到隱私保護，同時保持透明度及可驗證性。",
//   "github": "https://github.com/gardennn/zkSeed",
//   "website": "",
//   "ppt": "製作中...",
//   "logoCdnUrl": "/assets/2-logo.png",
//   "thumbnailImageLink": "/assets/2-logo.png",
//   "bannerImageLink": "/assets/2-banner.png",
//   "video": ""
// }, 
];

export function getProjects() {
  return projects.filter((p) => !p.disabled);
}

export function getRecipientIdbyId(id) {
  console.log(id);
  const p = getProjects().find((p) => p.id === id);

  return p.recipientId;
}

export function getProject(id: string) {
  return (
    getProjects().find((p) => p.id === id) ?? {
      projectName: "404 Project not found",
      tagline: "404 Tagline not found",
      description: "404 Description not found",
      ethereumAddress: "404 Address not found",
      website: "404 URL not found",
      thumbnailImageLink: "https://source.unsplash.com/random",
      logoCdnUrl: "https://source.unsplash.com/random",
      bannerImageLink: "https://source.unsplash.com/random",
      recipientId: 0,
      id: "0",
    }
  );
}

function shuffleFisherYates(array: any) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

//return shuffled version of allprojects array
export function getShuffledProjects() {
  return shuffleFisherYates(getProjects());
}
