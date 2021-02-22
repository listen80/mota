main.floors.MT0 = {
  floorId: "MT0",
  title: "序章",
  name: "序章",
  canFlyTo: true,
  canUseQuickShop: true,
  cannotViewMap: false,
  defaultGround: "ground",
  images: [],
  item_ratio: 1,
  map: [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 4, 4, 4, 1, 87, 1, 4, 4, 4, 1, 3],
    [3, 1, 4, 4, 4, 1, 0, 1, 4, 4, 4, 1, 3],
    [3, 1, 4, 4, 4, 1, 0, 1, 4, 4, 4, 1, 3],
    [3, 1, 4, 4, 4, 1, 0, 1, 4, 4, 4, 1, 3],
    [3, 1, 4, 4, 4, 1, 0, 1, 4, 4, 4, 1, 3],
    [3, 1, 4, 4, 4, 1, 0, 1, 4, 4, 4, 1, 3],
    [3, 1, 1, 4, 4, 1, 0, 1, 4, 4, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 81, 1, 1, 1, 1, 1, 3],
    [3, 5, 1, 5, 1, 0, 124, 0, 1, 5, 1, 5, 3],
    [3, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 3],
    [3, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  ],
  firstArrive: [],
  parallelDo: "",
  events: {
    "6,9": [
      "\t[hero]\b[hero]……",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]你醒了！",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]……\n你是谁，我在哪里？",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]我是这里的仙子，刚才你被这里的小怪打昏了。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]……\n剑，剑，我的剑呢？",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]你的剑被他们抢走了，我只来得及将你救出来。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]那，公主呢？我是来救公主的。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]公主还在里面，你这样进去是打不过里面的小怪的。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]那我怎么办，我答应了国王一定要把公主救出来的。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]那我现在应该怎么办呢？",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]放心吧，我把我的力量借给你，你就可以打赢那些小怪了。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]不过，你得先帮我去找一样东西，找到了再来这里找我。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]找东西？找什么东西？",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]是一个十字架，中间有一颗红色的宝石。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]那个东西有什么用吗？",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]我本是这座塔的守护者，可不久前，从北方来了一批恶魔，",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]他们占领了这座塔，并将我的魔力封在了这个十字架里面，",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]如果你能将它带出塔来，那我的魔力便会慢慢地恢复，",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]到那时我便可以把力量借给你去救出公主了。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]要记住：只有用我的魔力才可以打开二十一层的门。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]……\n好吧，我试试看。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]刚才我去看过了，你的剑被放在三楼，你的盾在五楼上，",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]而那个十字架被放在七楼。要到七楼，你得先取回你的剑和盾。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]另外，在塔里的其他楼层上，还有一些存放了好几百年的宝剑和宝物，",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]如果得到它们，对于你对付这里面的怪物将有很大的帮助。",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[hero]\b[hero]……\n可是，我怎么进去呢？",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]我这里有三把钥匙，你先拿去，在塔里面还有很多这样的钥匙，",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      "\t[fairy]\b[up]你一定要珍惜使用。勇敢地去吧，勇士！",
      {
        type: "playSound",
        name: "dialogue.mp3",
      },
      {
        type: "playSound",
        name: "unlockCtrl.mp3",
      },
      {
        type: "setBlock",
        number: "fairy",
        loc: [[5, 9]],
      },
      {
        type: "hide",
        time: 0,
      },
      {
        type: "function",
        function:
          "function(){\ncore.addItem('yellowKey');core.addItem('blueKey');core.addItem('redKey');\n}",
      },
    ],
    "5,9": [
      {
        type: "if",
        condition: "flag:16==1",
        true: [
          "\t[fairy]\b[up]嗯？！你手里的那个东西是什么？",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[hero]\b[hero]这个？这是一个老人交给我的，是他叫我带它来找你的。",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[hero]\b[hero]他说你知道它的来历和作用。",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]这个东西是仙界的圣物\n名叫“灵之杖”，",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]是很久以前的一个圣者留下的。它们一共有三个，",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]分别镶着红、绿、蓝三种颜色的宝石。",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]你现在拿着的是镶有一颗蓝宝石的“冰之灵杖”",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]应该还有一个镶有绿宝石的“心之灵杖”",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]和镶有红宝石的“炎之灵杖”。",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]在这座塔的下面，封印着一只魔界的世兽，名叫“血影”，",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]这三把“灵之杖”就是封印的钥匙。",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[hero]\b[hero]封印钥匙？",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]每一个“灵之杖”里面\n都有着很强的魔法力量，",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]如果被恶魔得到了将会使它的力量倍增。",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]如果被恶魔将它们三个找齐的话，",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]那么“血影”的封印便会解除！",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]勇士，你还是快去把我要的东西找来吧，等我恢复了魔力，",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          "\t[fairy]\b[up]我就可以帮你将“灵之杖”中的魔力都开放出来！",
          {
            type: "playSound",
            name: "dialogue.mp3",
          },
          {
            type: "playSound",
            name: "unlockCtrl.mp3",
          },
          {
            type: "setValue",
            name: "flag:16",
            value: "0",
          },
          {
            type: "setValue",
            name: "flag:22",
            value: "1",
          },
        ],
        false: [
          {
            type: "if",
            condition: "item:cross",
            true: [
              "\t[hero]\b[hero]仙子，我已经将那个十字架找到了。",
              {
                type: "playSound",
                name: "dialogue.mp3",
              },
              "\t[fairy]\b[up]你做得很好。\n那么，现在我就开始授与你更强的力量！",
              {
                type: "playSound",
                name: "dialogue.mp3",
              },
              "\t[fairy]\b[up]咪啦哆咪哗……",
              {
                type: "playSound",
                name: "dialogue.mp3",
              },
              "\t[fairy]\b[up]好了，我已经将你现在的能力提升了！",
              {
                type: "playSound",
                name: "dialogue.mp3",
              },
              "\t[fairy]\b[up]记住：如果你没有足够的实力的话，不要去第二十一层！",
              {
                type: "playSound",
                name: "dialogue.mp3",
              },
              "\t[fairy]\b[up]在那一层里，你所有宝物的法力都会失去作用！",
              {
                type: "playSound",
                name: "dialogue.mp3",
              },
              {
                type: "if",
                condition: "flag:22",
                true: [
                  "\t[fairy]\b[up]快走吧，杀死魔王后，来第二十二层上找我！",
                  {
                    type: "playSound",
                    name: "dialogue.mp3",
                  },
                ],
              },
              {
                type: "playSound",
                name: "unlockCtrl.mp3",
              },
              {
                type: "hide",
                time: 0,
              },
              {
                type: "show",
                loc: [[6, 8]],
                floorId: "MT20",
                time: 0,
              },
              {
                type: "setValue",
                name: "item:cross",
                value: "0",
              },
              {
                type: "setValue",
                name: "status:hp",
                value: "status:hp*4/3",
              },
              {
                type: "setValue",
                name: "status:atk",
                value: "status:atk*4/3",
              },
              {
                type: "setValue",
                name: "status:def",
                value: "status:def*4/3",
              },
            ],
            false: ["\t[fairy]\b[up]勇敢地去吧，勇士！"],
          },
        ],
      },
    ],
  },
  changeFloor: {
    "6,1": {
      floorId: ":next",
      stair: "downFloor",
    },
  },
  afterBattle: {},
  afterGetItem: {},
  afterOpenDoor: {},
  cannotMove: {},
  bgmap: [],
  fgmap: [],
  width: 13,
  height: 13,
  eachArrive: [],
  bgm: "prologue.mp3",
  upFloor: [6, 2],
};