/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoseidonT4, PoseidonT4Interface } from "../PoseidonT4";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "input",
        type: "uint256[3]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x38600c6000396130af6000f37c010000000000000000000000000000000000000000000000000000000060003504806325cc70e81490635a53025d14176200003757fe5b7f236d13393ef85cc48a351dd786dd7a1de5e39942296127fd87947223ae5108ad6020527f277686494f7644bbc4a9b194e10724eb967f1dc58718e59e3cedc821b2a7ae196040527f023db68784e3f0cc0b85618826a9b3505129c16479973b0a84a4529e66b09c626060527f1d359d245f286c12d50d663bae733f978af08cdbd63017c57b3a75646ff382c16080527f2a75a171563b807db525be259699ab28fe9bc7fb1f70943ff049bc970e841a0c60a0527f083abff5e10051f078e2827d092e1ae808b4dd3e15ccc3706f38ce4157b6770e60c0527f1a5ad71bbbecd8a97dc49cfdbae303ad24d5c4741eab8b7568a9ff8253a1eb6f60e0527f0d745fd00dd167fb86772133640f02ce945004a7bc2c59e8790f725c5d84f0af610100527f2070679e798782ef592a52ca9cef820d497ad2eecbaa7e42f366b3e521c4ed42610120527f2e18c8570d20bf5df800739a53da75d906ece318cd224ab6b3a2be979e2d7eab610140527f0fa86f0f27e4d3dd7f3367ce86f684f1f2e4386d3e5b9f38fa283c6aa723b608610160527f03f3e6fab791f16628168e4b14dbaeb657035ee3da6b2ca83f0c2491e0b403eb610180527f2f545e578202c9732488540e41f783b68ff0613fd79375f8ba8b3d30958e76776101a0527f23810bf82877fc19bff7eefeae3faf4bb8104c32ba4cd701596a15623d01476e6101c0527f014fcd5eb0be6d5beeafc4944034cf321c068ef930f10be2207ed58d2a34cdd66101e0527f00c15fc3a1d5733dd835eae0823e377f8ba4a8b627627cc2bb661c25d20fb52a610200527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016044356024356004356000847f19b849f69450b06848da1d39bd5e4a4302bb86744edc26238b0878e269ed23e582089050847f265ddfe127dd51bd7239347b758f0a1320eb2cc7450acc1dad47f80c8dcf34d683089150847f199750ec472f1809e0f66a545e1e51624108ac845015c2aa3dfc36bab497d8aa84089250847f157ff3fe65ac7208110f06a5f74302b14d743ea25067f0ffd032f787c7f1cdf8850893508481818082800980090990508482818082800980090991508483818082800980090992508484818082800980090993506200038160005262003015565b847f2e49c43c4569dd9c5fd35ac45fca33f10b15c590692f8beefe18f4896ac9490282089050847f0e35fb89981890520d4aef2b6d6506c3cb2f0b6973c24fa82731345ffa2d1f1e83089150847f251ad47cb15c4f1105f109ae5e944f1ba9d9e7806d667ffec6fe723002e0b99684089250847f13da07dc64d428369873e97160234641f8beb56fdd05e5f3563fa39d9c22df4e850893508481818082800980090990508482818082800980090991508483818082800980090992508484818082800980090993506200045660005262003015565b847f0c009b84e650e6d23dc00c7dccef7483a553939689d350cd46e7b89055fd473882089050847f011f16b1c63a854f01992e3956f42d8b04eb650c6d535eb0203dec74befdca0683089150847f0ed69e5e383a688f209d9a561daa79612f3f78d0467ad45485df07093f36754984089250847f04dba94a7b0ce9e221acad41472b6bbe3aec507f5eb3d33f463672264c9f789b850893508481818082800980090990508482818082800980090991508483818082800980090992508484818082800980090993506200052b60005262003015565b847f0a3f2637d840f3a16eb094271c9d237b6036757d4bb50bf7ce732ff1d4fa28e882089050847f259a666f129eea198f8a1c502fdb38fa39b1f075569564b6e54a485d1182323f83089150847f28bf7459c9b2f4c6d8e7d06a4ee3a47f7745d4271038e5157a32fdf7ede0d6a184089250847f0a1ca941f057037526ea200f489be8d4c37c85bbcce6a2aeec91bd6941432447850893508481818082800980090990508482818082800980090991508483818082800980090992508484818082800980090993506200060060005262003015565b847f0c6f8f958be0e93053d7fd4fc54512855535ed1539f051dcb43a26fd926361cf82089050847f123106a93cd17578d426e8128ac9d90aa9e8a00708e296e084dd57e69caaf81183089150847f26e1ba52ad9285d97dd3ab52f8e840085e8fa83ff1e8f1877b074867cd2dee7584089250847f1cb55cad7bd133de18a64c5c47b9c97cbe4d8b7bf9e095864471537e6a4ae2c585089350848181808280098009099050620006b160005262003015565b847f1dcd73e46acd8f8e0e2c7ce04bde7f6d2a53043d5060a41c7143f08e6e9055d082089050847f011003e32f6d9c66f5852f05474a4def0cda294a0eb4e9b9b12b9bb4512e557483089150847f2b1e809ac1d10ab29ad5f20d03a57dfebadfe5903f58bafed7c508dd2287ae8c84089250847f2539de1785b735999fb4dac35ee17ed0ef995d05ab2fc5faeaa69ae87bcec0a5850893508481818082800980090990506200076260005262003015565b847f0c246c5a2ef8ee0126497f222b3e0a0ef4e1c3d41c86d46e43982cb11d77951d82089050847f192089c4974f68e95408148f7c0632edbb09e6a6ad1a1c2f3f0305f5d03b527b83089150847f1eae0ad8ab68b2f06a0ee36eeb0d0c058529097d91096b756d8fdc2fb5a60d8584089250847f179190e5d0e22179e46f8282872abc88db6e2fdc0dee99e69768bd98c5d06bfb850893508481818082800980090990506200081360005262003015565b847f29bb9e2c9076732576e9a81c7ac4b83214528f7db00f31bf6cafe794a9b3cd1c82089050847f225d394e42207599403efd0c2464a90d52652645882aac35b10e590e6e691e0883089150847f064760623c25c8cf753d238055b444532be13557451c087de09efd454b23fd5984089250847f10ba3a0e01df92e87f301c4b716d8a394d67f4bf42a75c10922910a78f6b5b8785089350848181808280098009099050620008c460005262003015565b847f0e070bf53f8451b24f9c6e96b0c2a801cb511bc0c242eb9d361b77693f21471c82089050847f1b94cd61b051b04dd39755ff93821a73ccd6cb11d2491d8aa7f921014de252fb83089150847f1d7cb39bafb8c744e148787a2e70230f9d4e917d5713bb050487b5aa7d74070b84089250847f2ec93189bd1ab4f69117d0fe980c80ff8785c2961829f701bb74ac1f303b17db850893508481818082800980090990506200097560005262003015565b847f2db366bfdd36d277a692bb825b86275beac404a19ae07a9082ea46bd8351792682089050847f062100eb485db06269655cf186a68532985275428450359adc99cec6960711b883089150847f0761d33c66614aaa570e7f1e8244ca1120243f92fa59e4f900c567bf41f5a59b84089250847f20fc411a114d13992c2705aa034e3f315d78608a0f7de4ccf7a72e494855ad0d8508935084818180828009800909905062000a2660005262003015565b847f25b5c004a4bdfcb5add9ec4e9ab219ba102c67e8b3effb5fc3a30f317250bc5a82089050847f23b1822d278ed632a494e58f6df6f5ed038b186d8474155ad87e7dff62b37f4b83089150847f22734b4c5c3f9493606c4ba9012499bf0f14d13bfcfcccaa16102a29cc2f69e084089250847f26c0c8fe09eb30b7e27a74dc33492347e5bdff409aa3610254413d3fad795ce58508935084818180828009800909905062000ad760005262003015565b847f070dd0ccb6bd7bbae88eac03fa1fbb26196be3083a809829bbd626df348ccad982089050847f12b6595bdb329b6fb043ba78bb28c3bec2c0a6de46d8c5ad6067c4ebfd4250da83089150847f248d97d7f76283d63bec30e7a5876c11c06fca9b275c671c5e33d95bb7e8d72984089250847f1a306d439d463b0816fc6fd64cc939318b45eb759ddde4aa106d15d9bd9baaaa8508935084818180828009800909905062000b8860005262003015565b847f28a8f8372e3c38daced7c00421cb4621f4f1b54ddc27821b0d62d3d6ec7c56cf82089050847f0094975717f9a8a8bb35152f24d43294071ce320c829f388bc852183e1e2ce7e83089150847f04d5ee4c3aa78f7d80fde60d716480d3593f74d4f653ae83f4103246db2e8d6584089250847f2a6cf5e9aa03d4336349ad6fb8ed2269c7bef54b8822cc76d08495c12efde1878508935084818180828009800909905062000c3960005262003015565b847f2304d31eaab960ba9274da43e19ddeb7f792180808fd6e43baae48d7efcba3f382089050847f03fd9ac865a4b2a6d5e7009785817249bff08a7e0726fcb4e1c11d39d199f0b083089150847f00b7258ded52bbda2248404d55ee5044798afc3a209193073f7954d4d63b0b6484089250847f159f81ada0771799ec38fca2d4bf65ebb13d3a74f3298db36272c5ca65e92d9a8508935084818180828009800909905062000cea60005262003015565b847f1ef90e67437fbc8550237a75bc28e3bb9000130ea25f0c5471e144cf4264431f82089050847f1e65f838515e5ff0196b49aa41a2d2568df739bc176b08ec95a79ed82932e30d83089150847f2b1b045def3a166cec6ce768d079ba74b18c844e570e1f826575c1068c94c33f84089250847f0832e5753ceb0ff6402543b1109229c165dc2d73bef715e3f1c6e07c168bb1738508935084818180828009800909905062000d9b60005262003015565b847f02f614e9cedfb3dc6b762ae0a37d41bab1b841c2e8b6451bc5a8e3c390b6ad1682089050847f0e2427d38bd46a60dd640b8e362cad967370ebb777bedff40f6a0be27e7ed70583089150847f0493630b7c670b6deb7c84d414e7ce79049f0ec098c3c7c50768bbe29214a53a84089250847f22ead100e8e482674decdab17066c5a26bb1515355d5461a3dc06cc85327cea98508935084818180828009800909905062000e4c60005262003015565b847f25b3e56e655b42cdaae2626ed2554d48583f1ae35626d04de5084e0b6d2a6f1682089050847f1e32752ada8836ef5837a6cde8ff13dbb599c336349e4c584b4fdc0a0cf6f9d083089150847f2fa2a871c15a387cc50f68f6f3c3455b23c00995f05078f672a9864074d412e584089250847f2f569b8a9a4424c9278e1db7311e889f54ccbf10661bab7fcd18e7c7a7d835058508935084818180828009800909905062000efd60005262003015565b847f044cb455110a8fdd531ade530234c518a7df93f7332ffd2144165374b246b43d82089050847f227808de93906d5d420246157f2e42b191fe8c90adfe118178ddc723a531902583089150847f02fcca2934e046bc623adead873579865d03781ae090ad4a8579d2e7a680035584089250847f0ef915f0ac120b876abccceb344a1d36bad3f3c5ab91a8ddcbec2e060d8befac8508935084818180828009800909905062000fae60005262003015565b847f1797130f4b7a3e1777eb757bc6f287f6ab0fb85f6be63b09f3b16ef2b1405d3882089050847f0a76225dc04170ae3306c85abab59e608c7f497c20156d4d36c668555decc6e583089150847f1fffb9ec1992d66ba1e77a7b93209af6f8fa76d48acb664796174b5326a31a5c84089250847f25721c4fc15a3f2853b57c338fa538d85f8fbba6c6b9c6090611889b797b9c5f850893508481818082800980090990506200105f60005262003015565b847f0c817fd42d5f7a41215e3d07ba197216adb4c3790705da95eb63b982bfcaf75a82089050847f13abe3f5239915d39f7e13c2c24970b6df8cf86ce00a22002bc15866e52b5a9683089150847f2106feea546224ea12ef7f39987a46c85c1bc3dc29bdbd7a92cd60acb4d391ce84089250847f21ca859468a746b6aaa79474a37dab49f1ca5a28c748bc7157e1b3345bb0f959850893508481818082800980090990506200111060005262003015565b847f05ccd6255c1e6f0c5cf1f0df934194c62911d14d0321662a8f1a48999e34185b82089050847f0f0e34a64b70a626e464d846674c4c8816c4fb267fe44fe6ea28678cb09490a483089150847f0558531a4e25470c6157794ca36d0e9647dbfcfe350d64838f5b1a8a2de0d4bf84089250847f09d3dca9173ed2faceea125157683d18924cadad3f655a60b72f5864961f145585089350848181808280098009099050620011c160005262003015565b847f0328cbd54e8c0913493f866ed03d218bf23f92d68aaec48617d4c722e5bd433582089050847f2bf07216e2aff0a223a487b1a7094e07e79e7bcc9798c648ee3347dd5329d34b83089150847f1daf345a58006b736499c583cb76c316d6f78ed6a6dffc82111e11a63fe412df84089250847f176563472456aaa746b694c60e1823611ef39039b2edc7ff391e6f2293d2c404850893508481818082800980090990506200127260005262003015565b847f2ef1e0fad9f08e87a3bb5e47d7e33538ca964d2b7d1083d4fb0225035bd3f8db82089050847f226c9b1af95babcf17b2b1f57c7310179c1803dec5ae8f0a1779ed36c817ae2a83089150847f14bce3549cc3db7428126b4c3a15ae0ff8148c89f13fb35d35734eb5d4ad0def84089250847f2debff156e276bb5742c3373f2635b48b8e923d301f372f8e550cfd4034212c7850893508481818082800980090990506200132360005262003015565b847f2d4083cf5a87f5b6fc2395b22e356b6441afe1b6b29c47add7d0432d1d4760c782089050847f0c225b7bcd04bf9c34b911262fdc9c1b91bf79a10c0184d89c317c53d7161c2983089150847f03152169d4f3d06ec33a79bfac91a02c99aa0200db66d5aa7b835265f9c9c8f384089250847f0b61811a9210be78b05974587486d58bddc8f51bfdfebbb87afe8b7aa7d3199c85089350848181808280098009099050620013d460005262003015565b847f203e000cad298daaf7eba6a5c5921878b8ae48acf7048f16046d637a533b6f7882089050847f1a44bf0937c722d1376672b69f6c9655ba7ee386fda1112c0757143d1bfa914683089150847f0376b4fae08cb03d3500afec1a1f56acb8e0fde75a2106d7002f59c5611d4daa84089250847f00780af2ca1cad6465a2171250fdfc32d6fc241d3214177f3d553ef363182185850893508481818082800980090990506200148560005262003015565b847f10774d9ab80c25bdeb808bedfd72a8d9b75dbe18d5221c87e9d857079bdc31d582089050847f10dc6e9c006ea38b04b1e03b4bd9490c0d03f98929ca1d7fb56821fd19d3b6e883089150847f00544b8338791518b2c7645a50392798b21f75bb60e3596170067d00141cac1684089250847f222c01175718386f2e2e82eb122789e352e105a3b8fa852613bc534433ee428c850893508481818082800980090990506200153660005262003015565b847f2840d045e9bc22b259cfb8811b1e0f45b77f7bdb7f7e2b46151a1430f608e3c582089050847f062752f86eebe11a009c937e468c335b04554574c2990196508e01fa5860186b83089150847f06041bdac48205ac87adb87c20a478a71c9950c12a80bc0a55a8e83eaaf0474684089250847f04a533f236c422d1ff900a368949b0022c7a2ae092f308d82b1dcbbf51f5000d85089350848181808280098009099050620015e760005262003015565b847f13e31d7a67232fd811d6a955b3d4f25dfe066d1e7dc33df04bde50a2b2d05b2a82089050847f011c2683ae91eb4dfbc13d6357e8599a9279d1648ff2c95d2f79905bb13920f183089150847f0b0d219346b8574525b1a270e0b4cba5d56c928e3e2c2bd0a1ecaed015aaf6ae84089250847f14abdec8db9c6dc970291ee638690209b65080781ef9fd13d84c7a726b5f1364850893508481818082800980090990506200169860005262003015565b847f1a0b70b4b26fdc28fcd32aa3d266478801eb12202ef47ced988d0376610be10682089050847f278543721f96d1307b6943f9804e7fe56401deb2ef99c4d12704882e7278b60783089150847f16eb59494a9776cf57866214dbd1473f3f0738a325638d8ba36535e011d5825984089250847f2567a658a81ffb444f240088fa5524c69a9e53eeab6b7f8c41c3479dcf8c644a850893508481818082800980090990506200174960005262003015565b847f29aa1d7c151e9ad0a7ab39f1abd9cf77ab78e0215a5715a6b882ade840bb13d882089050847f15c091233e60efe0d4bbfce2b36415006a4f017f9a85388ce206b91f99f2c98483089150847f16bd7d22ff858e5e0882c2c999558d77e7673ad5f1915f9feb679a8115f014cf84089250847f02db50480a07be0eb2c2e13ed6ef4074c0182d9b668b8e08ffe676925004202585089350848181808280098009099050620017fa60005262003015565b847f05e4a220e6a3bc9f7b6806ec9d6cdba186330ef2bf7adb4c13ba866343b7311982089050847f1dda05ebc30170bc98cbf2a5ee3b50e8b5f70bc424d39fa4104d37f1cbcf7a4283089150847f0184bef721888187f645b6fee3667f3c91da214414d89ba5cd301f22b0de899084089250847f1498a307e68900065f5e8276f62aef1c37414b84494e1577ad1a6d64341b78ec85089350848181808280098009099050620018ab60005262003015565b847f25f40f82b31dacc4f4939800b9d2c3eacef737b8fab1f864fe33548ad46bd49d82089050847f09d317cc670251943f6f5862a30d2ea9e83056ce4907bfbbcb1ff31ce5bb965083089150847f2f77d77786d979b23ba4ce4a4c1b3bd0a41132cd467a86ab29b913b6cf3149d084089250847f0f53dafd535a9f4473dc266b6fccc6841bbd336963f254c152f89e785f729bbf850893508481818082800980090990506200195c60005262003015565b847f25c1fd72e223045265c3a099e17526fa0e6976e1c00baf16de96de85deef2fa282089050847f2a902c8980c17faae368d385d52d16be41af95c84eaea3cf893e65d6ce4a8f6283089150847f1ce1580a3452ecf302878c8976b82be96676dd114d1dc8d25527405762f8352984089250847f24a6073f91addc33a49a1fa306df008801c5ec569609034d2fc50f7f0f4d00568508935084818180828009800909905062001a0d60005262003015565b847f25e52dbd6124530d9fc27fe306d71d4583e07ca554b5d1577f256c68b0be2b7482089050847f23dffae3c423fa7a93468dbccfb029855974be4d0a7b29946796e5b6cd70f15d83089150847f06342da370cc0d8c49b77594f6b027c480615d50be36243a99591bc9924ed6f584089250847f2754114281286546b75f09f115fc751b4778303d0405c1b4cc7df0d8e9f639258508935084818180828009800909905062001abe60005262003015565b847f15c19e8534c5c1a8862c2bc1d119eddeabf214153833d7bdb59ee197f8187cf582089050847f265fe062766d08fab4c78d0d9ef3cabe366f3be0a821061679b4b3d2d77d5f3e83089150847f13ccf689d67a3ec9f22cb7cd0ac3a327d377ac5cd0146f048debfd098d3ec7be84089250847f17662f7456789739f81cd3974827a887d92a5e05bdf3fe6b9fbccca4524aaebd8508935084818180828009800909905062001b6f60005262003015565b847f21b29c76329b31c8ef18631e515f7f2f82ca6a5cca70cee4e809fd624be7ad5d82089050847f18137478382aadba441eb97fe27901989c06738165215319939eb17b01fa975c83089150847f2bc07ea2bfad68e8dc724f5fef2b37c2d34f761935ffd3b739ceec4668f37e8884089250847f2ddb2e376f54d64a563840480df993feb4173203c2bd94ad0e602077aef9a03e8508935084818180828009800909905062001c2060005262003015565b847f277eb50f2baa706106b41cb24c602609e8a20f8d72f613708adb25373596c3f782089050847f0d4de47e1aba34269d0c620904f01a56b33fc4b450c0db50bb7f87734c9a1fe583089150847f0b8442bfe9e4a1b4428673b6bd3eea6f9f445697058f134aae908d0279a29f0c84089250847f11fe5b18fbbea1a86e06930cb89f7d4a26e186a65945e96574247fddb720f8f58508935084818180828009800909905062001cd160005262003015565b847f224026f6dfaf71e24d25d8f6d9f90021df5b774dcad4d883170e4ad89c33a0d682089050847f0b2ca6a999fe6887e0704dad58d03465a96bc9e37d1091f61bc9f9c62bbeb82483089150847f221b63d66f0b45f9d40c54053a28a06b1d0a4ce41d364797a1a7e0c96529f42184089250847f30185c48b7b2f1d53d4120801b047d087493bce64d4d24aedce2f4836bb84ad48508935084818180828009800909905062001d8260005262003015565b847f23f5d372a3f0e3cba989e223056227d3533356f0faa48f27f8267318632a61f082089050847f2716683b32c755fd1bf8235ea162b1f388e1e0090d06162e8e6dfbe4328f3e3b83089150847f0977545836866fa204ca1d853ec0909e3d140770c80ac67dc930c69748d5d4bc84089250847f1444e8f592bdbfd8025d91ab4982dd425f51682d31472b05e81c43c0f9434b318508935084818180828009800909905062001e3360005262003015565b847f26e04b65e9ca8270beb74a1c5cb8fee8be3ffbfe583f7012a00f874e7718fbe382089050847f22a5c2fa860d11fe34ee47a5cd9f869800f48f4febe29ad6df69816fb1a914d283089150847f174b54d9907d8f5c6afd672a738f42737ec338f3a0964c629f7474dd44c5c8d784089250847f1db1db8aa45283f31168fa66694cf2808d2189b87c8c8143d56c871907b39b878508935084818180828009800909905062001ee460005262003015565b847f1530bf0f46527e889030b8c7b7dfde126f65faf8cce0ab66387341d813d1bfd182089050847f0b73f613993229f59f01c1cec8760e9936ead9edc8f2814889330a2f2bade45783089150847f29c25a22fe2164604552aaea377f448d587ab977fc8227787bd2dc0f36bcf41e84089250847f2b30d53ed1759bfb8503da66c92cf4077abe82795dc272b377df57d77c8755268508935084818180828009800909905062001f9560005262003015565b847f12f6d703b5702aab7b7b7e69359d53a2756c08c85ede7227cf5f0a2916787cd282089050847f2520e18300afda3f61a40a0b8837293a55ad01071028d4841ffa9ac70636411383089150847f1ec9daea860971ecdda8ed4f346fa967ac9bc59278277393c68f09fa03b8b95f84089250847f0a99b3e178db2e2e432f5cd5bef8fe4483bf5cbf70ed407c08aae24b830ad725850893508481818082800980090990506200204660005262003015565b847f07cda9e63db6e39f086b89b601c2bbe407ee0abac3c817a1317abad7c577849282089050847f08c9c65a4f955e8952d571b191bb0adb49bd8290963203b35d48aab38f8fc3a383089150847f2737f8ce1d5a67b349590ddbfbd709ed9af54a2a3f2719d33801c9c17bdd9c9e84089250847f1049a6c65ff019f0d28770072798e8b7909432bd0c129813a9f179ba627f7d6a85089350848181808280098009099050620020f760005262003015565b847f18b4fe968732c462c0ea5a9beb27cecbde8868944fdf64ee60a5122361daeddb82089050847f2ff2b6fd22df49d2440b2eaeeefa8c02a6f478cfcf11f1b2a4f7473483885d1983089150847f2ec5f2f1928fe932e56c789b8f6bbcb3e8be4057cbd8dbd18a1b352f5cef42ff84089250847f265a5eccd8b92975e33ad9f75bf3426d424a4c6a7794ee3f08c1d100378e545e85089350848181808280098009099050620021a860005262003015565b847f2405eaa4c0bde1129d6242bb5ada0e68778e656cfcb366bf20517da1dfd4279c82089050847f094c97d8c194c42e88018004cbbf2bc5fdb51955d8b2d66b76dd98a2dbf6041783089150847f2c30d5f33bb32c5c22b9979a605bf64d508b705221e6a686330c9625c2afe0b884089250847f01a75666f6241f6825d01cc6dcb1622d4886ea583e87299e6aa2fc716fdb6cf5850893508481818082800980090990506200225960005262003015565b847f0a3290e8398113ea4d12ac091e87be7c6d359ab9a66979fcf47bf2e87d382fcb82089050847f154ade9ca36e268dfeb38461425bb0d8c31219d8fa0dfc75ecd21bf69aa0cc7483089150847f27aa8d3e25380c0b1b172d79c6f22eee99231ef5dc69d8dc13a4b5095d02877284089250847f2cf4051e6cab48301a8b2e3bca6099d756bbdf485afa1f549d395bbcbd806461850893508481818082800980090990506200230a60005262003015565b847f301e70f729f3c94b1d3f517ddff9f2015131feab8afa5eebb0843d7f84b23e7182089050847f298beb64f812d25d8b4d9620347ab02332dc4cef113ae60d17a8d7a4c91f83bc83089150847f1b362e72a5f847f84d03fd291c3c471ed1c14a15b221680acf11a3f02e46aa9584089250847f0dc8a2146110c0b375432902999223d5aa1ef6e78e1e5ebcbc1d9ba41dc1c73785089350848181808280098009099050620023bb60005262003015565b847f0a48663b34ce5e1c05dc93092cb69778cb21729a72ddc03a08afa1eb922ff27982089050847f0a87391fb1cd8cdf6096b64a82f9e95f0fe46f143b702d74545bb314881098ee83089150847f1b5b2946f7c28975f0512ff8e6ca362f8826edd7ea9c29f382ba8a2a0892fd5d84089250847f01001cf512ac241d47ebe2239219bc6a173a8bbcb8a5b987b4eac1f533315b6b850893508481818082800980090990506200246c60005262003015565b847f2fd977c70f645db4f704fa7d7693da727ac093d3fb5f5febc72beb17d8358a3282089050847f23c0039a3fab4ad3c2d7cc688164f39e761d5355c05444d99be763a97793a9c483089150847f19d43ee0c6081c052c9c0df6161eaac1aec356cf435888e79f27f22ff03fa25d84089250847f2d9b10c2f2e7ac1afddccffd94a563028bf29b646d020830919f9d5ca1cefe59850893508481818082800980090990506200251d60005262003015565b847f2457ca6c2f2aa30ec47e4aff5a66f5ce2799283e166fc81cdae2f2b9f83e426782089050847f0abc392fe85eda855820592445094022811ee8676ed6f0c3044dfb54a7c10b3583089150847f19d2cc5ca549d1d40cebcd37f3ea54f31161ac3993acf3101d2c2bc30eac1eb084089250847f0f97ae3033ffa01608aafb26ae13cd393ee0e4ec041ba644a3d3ab546e98c9c885089350848181808280098009099050620025ce60005262003015565b847f16dbc78fd28b7fb8260e404cf1d427a7fa15537ea4e168e88a166496e88cfeca82089050847f240faf28f11499b916f085f73bc4f22eef8344e576f8ad3d1827820366d5e07b83089150847f0a1bb075aa37ff0cfe6c8531e55e1770eaba808c8fdb6dbf46f8cab58d9ef1af84089250847f2e47e15ea4a47ff1a6a853aaf3a644ca38d5b085ac1042fdc4a705a7ce089f4d850893508481818082800980090990506200267f60005262003015565b847f166e5bf073378348860ca4a9c09d39e1673ab059935f4df35fb14528375772b682089050847f18b42d7ffdd2ea4faf235902f057a2740cacccd027233001ed10f96538f0916f83089150847f089cb1b032238f5e4914788e3e3c7ead4fc368020b3ed38221deab1051c3770284089250847f242acd3eb3a2f72baf7c7076dd165adf89f9339c7b971921d9e70863451dd8d1850893508481818082800980090990506200273060005262003015565b847f174fbb104a4ee302bf47f2bd82fce896eac9a068283f326474af860457245c3b82089050847f17340e71d96f466d61f3058ce092c67d2891fb2bb318613f780c275fe1116c6b83089150847f1e8e40ac853b7d42f00f2e383982d024f098b9f8fd455953a2fd380c4df7f6b284089250847f0529898dc0649907e1d4d5e284b8d1075198c55cad66e8a9bf40f92938e2e96185089350848181808280098009099050620027e160005262003015565b847f2162754db0baa030bf7de5bb797364dce8c77aa017ee1d7bf65f21c4d4e5df8f82089050847f12c7553698c4bf6f3ceb250ae00c58c2a9f9291efbde4c8421bef44741752ec683089150847f292643e3ba2026affcb8c5279313bd51a733c93353e9d9c79cb723136526508e84089250847f00ccf13e0cb6f9d81d52951bea990bd5b6c07c5d98e66ff71db6e74d5b87d158850893508481818082800980090990506200289260005262003015565b847f185d1e20e23b0917dd654128cf2f3aaab6723873cb30fc22b0f86c15ab645b4b82089050847f14c61c836d55d3df742bdf11c60efa186778e3de0f024c0f13fe53f8d8764e1f83089150847f0f356841b3f556fce5dbe4680457691c2919e2af53008184d03ee1195d72449e84089250847f1b8fd9ff39714e075df124f887bf40b383143374fd2080ba0c0a6b6e8fa5b3e8850893508481818082800980090990506200294360005262003015565b847f0e86a8c2009c140ca3f873924e2aaa14fc3c8ae04e9df0b3e9103418796f602482089050847f2e6c5e898f5547770e5462ad932fcdd2373fc43820ca2b16b0861421e79155c883089150847f05d797f1ab3647237c14f9d1df032bc9ff9fe1a0ecd377972ce5fd5a0c01460484089250847f29a3110463a5aae76c3d152875981d0c1daf2dcd65519ef5ca8929851da8c00885089350848181808280098009099050620029f460005262003015565b847f2974da7bc074322273c3a4b91c05354cdc71640a8bbd1f864b732f816388331482089050847f1ed0fb06699ba249b2a30621c05eb12ca29cb91aa082c8bfcce9c522889b47dc83089150847f1c793ef0dcc51123654ff26d8d863feeae29e8c572eca912d80c8ae36e40fe9b84089250847f1e6aac1c6d3dd3157956257d3d234ef18c91e82589a78169fbb4a8770977dc2f8508935084818180828009800909905062002aa560005262003015565b847f1a20ada7576234eee6273dd6fa98b25ed037748080a47d948fcda33256fb6bf582089050847f191033d6d85ceaa6fc7a9a23a6fd9996642d772045ece51335d49306728af96c83089150847f006e5979da7e7ef53a825aa6fddc3abfc76f200b3740b8b232ef481f5d06297b84089250847f0b0d7e69c651910bbef3e68d417e9fa0fbd57f596c8f29831eff8c0174cdb06d8508935084818180828009800909905062002b5660005262003015565b847f25caf5b0c1b93bc516435ec084e2ecd44ac46dbbb033c5112c4b20a25c9cdf9d82089050847f12c1ea892cc31e0d9af8b796d9645872f7f77442d62fd4c8085b2f150f72472a83089150847f16af29695157aba9b8bbe3afeb245feee5a929d9f928b9b81de6dadc78c32aae84089250847f0136df457c80588dd687fb2f3be18691705b87ec5a4cfdc168d31084256b67dc8508935084818180828009800909905062002c0760005262003015565b847f1639a28c5b4c81166aea984fba6e71479e07b1efbc74434db95a285060e7b08982089050847f03d62fbf82fd1d4313f8e650f587ec06816c28b700bdc50f7e232bd9b5ca9b7683089150847f11aeeb527dc8ce44b4d14aaddca3cfe2f77a1e40fc6da97c249830de1edfde5484089250847f13f9b9a41274129479c5e6138c6c8ee36a670e6bc68c7a49642b645807bfc8248508935084818180828009800909905062002cb860005262003015565b847f0e4772fa3d75179dc8484cd26c7c1f635ddeeed7a939440c506cae8b7ebcd15b82089050847f1b39a00cbc81e427de4bdec58febe8d8b5971752067a612b39fc46a68c5d4db483089150847f2bedb66e1ad5a1d571e16e2953f48731f66463c2eb54a245444d1c0a3a25707e84089250847f2cf0a09a55ca93af8abd068f06a7287fb08b193b608582a27379ce35da915dec8508935084818180828009800909905084828180828009800909915084838180828009800909925084848180828009800909935062002d8d60005262003015565b847f2d1bd78fa90e77aa88830cabfef2f8d27d1a512050ba7db0753c8fb863efb38782089050847f065610c6f4f92491f423d3071eb83539f7c0d49c1387062e630d7fd283dc339483089150847f2d933ff19217a5545013b12873452bebcc5f9969033f15ec642fb464bd60736884089250847f1aa9d3fe4c644910f76b92b3e13b30d500dae5354e79508c3c49c8aa99e0258b8508935084818180828009800909905084828180828009800909915084838180828009800909925084848180828009800909935062002e6260005262003015565b847f027ef04869e482b1c748638c59111c6b27095fa773e1aca078cea1f1c8450bdd82089050847f2b7d524c5172cbbb15db4e00668a8c449f67a2605d9ec03802e3fa136ad0b8fb83089150847f0c7c382443c6aa787c8718d86747c7f74693ae25b1e55df13f7c3c1dd735db0f84089250847f00b4567186bc3f7c62a7b56acf4f76207a1f43c2d30d0fe4a627dcdd9bd790788508935084818180828009800909905084828180828009800909915084838180828009800909925084848180828009800909935062002f3760005262003015565b847f1e41fc29b825454fe6d61737fe08b47fb07fe739e4c1e61d0337490883db4fd582089050847f12507cd556b7bbcc72ee6dafc616584421e1af872d8c0e89002ae8d3ba0653b683089150847f13d437083553006bcef312e5e6f52a5d97eb36617ef36fe4d77d3e97f71cb5db84089250847f163ec73251f85443687222487dda9a65467d90b22f0b38664686077c6a4486d5850893508481818082800980090990508482818082800980090991508483818082800980090992508484818082800980090993506200300c60005262003015565b60005260206000f35b8460205182098560405184098691088560605185098691088560805186098691088560a05183098660c05185098791088660e05186098791088661010051870987910886610120518409876101405186098891088761016051870988910887610180518809889108876101a0518509886101c0518709899108886101e051880989910888610200518909899108965094509250905060005156";

type PoseidonT4ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoseidonT4ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoseidonT4__factory extends ContractFactory {
  constructor(...args: PoseidonT4ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoseidonT4> {
    return super.deploy(overrides || {}) as Promise<PoseidonT4>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoseidonT4 {
    return super.attach(address) as PoseidonT4;
  }
  connect(signer: Signer): PoseidonT4__factory {
    return super.connect(signer) as PoseidonT4__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonT4Interface {
    return new utils.Interface(_abi) as PoseidonT4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT4 {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT4;
  }
}
