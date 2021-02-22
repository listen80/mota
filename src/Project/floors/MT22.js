main.floors.MT22=
{
    "floorId": "MT22",
    "title": "第22层",
    "name": "第22层",
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
        "7,3": [
            {
                "type": "if",
                "condition": "core.getBlock(5,6,'MT23w')||core.getBlock(7,6,'MT23e')",
                "true": [
                    "\t[fairy]\b[down]做得很好。现在你已经将那个可恶的冥灵魔王给杀了，",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]快去找另外的两个“灵杖”吧，找齐了以后再来找我！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]要记住，如果我不把封印解开的话，最底层的怪物你是杀不了的！"
                ],
                "false": [
                    "\t[hero]\b[hero]快看，我全部都找到了，我找齐所有了！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]嗯，不错，现在我们可以接触这里面的封印了！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]那就让我们开始吧！\n神之“灵杖”呀，",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]放射出你们的魔力吧！\n哈哩咪哆唏咪啦~~~~~~~~~",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[hero]\b[hero]……\n（又来了！）",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]……\n好了，我已经将它们三个“灵之杖”的魔力都开放出来了！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]公主就由我来救出去，你快去最底层杀了那个大魔头吧！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]要记住，如果没有万分的把握，一定不要去开最后那扇花形门！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[fairy]\b[down]一旦进去了，你将不能再回来！",
                    {
                        "type": "setBlock",
                        "number": "181",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "182",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "183",
                        "loc": [
                            [
                                7,
                                2
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "184",
                        "loc": [
                            [
                                5,
                                3
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "185",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "186",
                        "loc": [
                            [
                                7,
                                3
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "187",
                        "loc": [
                            [
                                5,
                                4
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "octopus",
                        "loc": [
                            [
                                6,
                                4
                            ]
                        ],
                        "floorId": "MT_1"
                    },
                    {
                        "type": "setBlock",
                        "number": "188",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ],
                        "floorId": "MT_1"
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
            },
            {
                "type": "playSound",
                "name": "unlockCtrl.mp3"
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,6": {
            "floorId": "MT23e",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "MT23s",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  4,  4,  4,  4,  4, 88,  4,  4,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4,  0,  0,124,  4,  4,  4,  4,  3],
    [  3, 86, 86, 86,  4,  4, 83,  4,  4, 86, 86, 86,  3],
    [  3, 27, 27, 86,  4,  4, 63,  4,  4, 86, 28, 28,  3],
    [  3, 87, 27,228, 83, 63,  0, 63, 83,228, 28, 87,  3],
    [  3, 27, 27, 86,  4,  4, 63,  4,  4, 86, 28, 28,  3],
    [  3, 86, 86, 86,  4,  4, 83,  4,  4, 86, 86, 86,  3],
    [  3,  4,  4,  4, 86, 86,228, 86, 86,  4,  4,  4,  3],
    [  3,  4,  4,  4, 86, 32, 32, 32, 86,  4,  4,  4,  3],
    [  3,  4,  4,  4, 86, 32, 87, 32, 86,  4,  4,  4,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "startText.mp3",
    "downFloor": [
        6,
        6
    ],
    "upFloor": [
        6,
        6
    ]
}