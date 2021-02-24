main.floors.MT15=
{
    "floorId": "MT15",
    "title": "第15层",
    "name": "第15层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,4": [
            "\t[man]\b[down]你好，勇敢的孩子，你终于来到这里了。",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[man]\b[down]我将给你一个非常好的宝物，它可以使你的攻击力提升120点，",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[man]\b[down]但这必须用你的500点经验来进行交换，考虑一下子吧！",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            {
                "type": "if",
                "condition": "status:experience<500",
                "true": [
                    "\t[hero]\b[hero]这，可我现在还没有那么多的经验。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[man]\b[down]那等你的经验够了而且想要的时候再来吧！"
                ],
                "false": [
                    "\t[hero]\b[hero]好吧，那就将那把剑给我吧！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[man]\b[down]那好吧，这把剑就给你了！",
                    {
                        "type": "tip",
                        "text": "得到圣光剑，攻击加120！"
                    },
                    {
                        "type": "addValue",
                        "name": "status:atk",
                        "value": "120"
                    },
                    {
                        "type": "addValue",
                        "name": "status:experience",
                        "value": "-500"
                    },
                    {
                        "type": "playSound",
                        "name": "unlockCtrl.mp3"
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            },
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            }
        ],
        "7,4": [
            "\t[woman]\b[down]啊哈，欢迎你的到来！\n我这里有一件对你来说非常好的宝物，",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[woman]\b[down]只要你出的起钱，我就卖给你。",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[hero]\b[hero]什么宝物？要多少钱？",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[woman]\b[down]是这个游戏里最好的盾牌，防御值可以增加120点，",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[woman]\b[down]而你只要出500个金币就可以买下。怎么样？你有500个金币吗？",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            {
                "type": "if",
                "condition": "status:money<500",
                "true": [
                    "\t[hero]\b[hero]这，可我现在还没有那么多的金币。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[woman]\b[down]那等你的金币够了而且想要的时候再来吧！"
                ],
                "false": [
                    "\t[hero]\b[hero]我有500个金币。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[woman]\b[down]好，成交！",
                    {
                        "type": "tip",
                        "text": "得到星光盾，防御加120！"
                    },
                    {
                        "type": "addValue",
                        "name": "status:def",
                        "value": "120"
                    },
                    {
                        "type": "addValue",
                        "name": "status:money",
                        "value": "-500"
                    },
                    {
                        "type": "playSound",
                        "name": "unlockCtrl.mp3"
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            },
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            }
        ]
    },
    "changeFloor": {
        "5,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0, 88,  4, 87,  0,  0,  0,  0,  3],
    [  3,  0,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  3],
    [  3,  0,  4,  4,  1,  1,  1,  1,  1,  4,  4,  0,  3],
    [  3,  0,  4,  1,  1,121,  1,122,  1,  1,  4,  0,  3],
    [  3,  0,  4,  1,  1, 28,  1, 28,  1,  1,  4,  0,  3],
    [  3,  0,  4,  1,  1, 27,  1, 27,  1,  1,  4,  0,  3],
    [  3,  0,  4,  4,  1,  0,  1,  0,  1,  4,  4,  0,  3],
    [  3,  0,  4,  4,  1, 81,  1, 81,  1,  4,  4,  0,  3],
    [  3,  0,  4,  4,  4,  0,  0,  0,  4,  4,  4,  0,  3],
    [  3,  0,  4,  4,  4,  4, 83,  4,  4,  4,  4,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        8,
        1
    ],
    "downFloor": [
        4,
        1
    ],
    "bgm": "area3.mp3"
}