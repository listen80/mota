main.floors.MT4=
{
    "floorId": "MT4",
    "title": "第4层",
    "name": "第4层",
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
        "6,1": [
            {
                "type": "if",
                "condition": "item:icePickaxe",
                "true": [
                    "\t[hero]\b[hero]哈，快看，我找到了什么！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down]太好了，这个东西果然是在这里。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down]好吧，我这就去帮你修好第十八层的路面。",
                    {
                        "type": "setValue",
                        "name": "item:icePickaxe",
                        "value": "0"
                    },
                    {
                        "type": "hide",
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                9
                            ],
                            [
                                6,
                                10
                            ]
                        ],
                        "floorId": "MT18",
                        "time": 0
                    }
                ],
                "false": [
                    "\t[thief]\b[down]如果你找到那个铁锒头的话，还是来这里找我！"
                ]
            },
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "6,4": [
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "forward"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    7
                ],
                "floorId": "MT2"
            },
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "up",
                    "up"
                ]
            },
            {
                "type": "if",
                "condition": "!item:icePickaxe",
                "true": [
                    "\t[hero]\b[hero]你已经得救了！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]啊，那真是太好了，我又可以在这里面寻宝了！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]哦，还没有自我介绍，我叫杰克，是这附近有名的小偷，",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]什么金银财宝我样样都偷过。不过这次运气可不是太好，",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]刚进来就被抓了。现在你帮我打开了门，那我就帮你做一件事吧。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[hero]\b[hero]快走吧，外面还有很多怪物，我可能顾不上你。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]不，不，不会有事的。\n快说吧，叫我做什么？",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[hero]\b[hero]……\n你会开门吗？",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]那当然。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[hero]\b[hero]那就请你帮我打开第二层的门吧！",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]那个简单，不过，如果你能帮我找到一把嵌了红宝石的铁锒头的话，",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]我还帮你打通第十八层的路。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[hero]\b[hero]嵌了红宝石的铁锒头？\n好吧，我帮你找找。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    },
                    "\t[thief]\b[down,6,1]非常地感谢。一会我便会将第二层的门打开。",
                    {
                        "type": "playSound",
                        "name": "dialogue.mp3"
                    }
                ]
            },
            {
                "type": "trigger",
                "loc": [
                    6,
                    1
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,203,  0,  1,  0,123,  0,  1,  0,203,  0,  3],
    [  3, 81,  1, 81,  1,  0,  0,  0,  1, 81,  1, 81,  3],
    [  3,  0,  1,  0,  1,  1, 86,  1,  1,  0,  1,  0,  3],
    [  3,  0,  1,209,  1,206,207,206,  1,209,  1,  0,  3],
    [  3,205,  1, 31,  1, 28,206, 28,  1, 31,  1,205,  3],
    [  3,205,  1, 31,  1,  1, 83,  1,  1, 31,  1,205,  3],
    [  3,202,  1,  0,  1,213,221,213,  1,  0,  1,202,  3],
    [  3,  0,  1,  0,  1, 27,213, 27,  1,  0,  1,  0,  3],
    [  3,  0,  1,  0,  1,  1, 82,  1,  1,  0,  1,  0,  3],
    [  3,  0,  1,  0,  1, 21,  0, 21,  1,  0,  1,  0,  3],
    [  3, 87,  1,  0,203,  0,  0,  0,203,  0,  1, 88,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        1,
        10
    ],
    "downFloor": [
        11,
        10
    ]
}