main.floors.MT21=
{
    "floorId": "MT21",
    "title": "第21层",
    "name": "第21层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,8": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "6,2": [
            "\t[冥灵魔王：,vampire]啊……\n怎么可能，我怎么可能会被你打败呢！",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[冥灵魔王：,vampire]不，不要这样…………",
            {
                "type": "if",
                "condition": "flag:22==0",
                "true": [
                    {
                        "type": "hideStatusBar"
                    },
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "time": 0
                    },
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "10088-status:atk-status:def"
                    },
                    {
                        "type": "scrollText",
                        "text": "大魔头被杀死了,公主也被救出了塔,蝶仙的精力也恢复了\n当勇士和公主一起走出塔来的时候，\n国王也带着军队来到了岛外。一切都是那么地平常。\n回国后，国王为勇士和公主举行了隆重而且盛大的婚礼，\n并且宣布由勇士继承国王的位置。\n从此以后，勇士和公主就幸福地生活在一起了",
                        "time": 30000,
                        "lineHeight": 5
                    },
                    {
                        "type": "win",
                        "reason": "通关21层魔塔(LowAD)"
                    }
                ]
            },
            {
                "type": "updateEnemys"
            },
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            {
                "type": "setBlock",
                "number": "upFloor",
                "loc": [
                    [
                        6,
                        1
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 0
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  3],
    [  3,  4,  4,  0,  0,  4,208,  4,  0,  0,  4,  4,  3],
    [  3,  4,  0,  0,  4,  4,247,  4,  4,  0,  0,  4,  3],
    [  3,  4,  0,  0,  0,  4,247,  4,  0,  0,  0,  4,  3],
    [  3,  4,  4,  0,  0,  0,  0,  0,  0,  0,  4,  4,  3],
    [  3,  4,  4,  0,  0,  0,  0,  0,  0,  0,  4,  4,  3],
    [  3,  4,  4,  4,  0,  0,  4,  0,  0,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4, 86, 88, 86,  4,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  3],
    [  3,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  3],
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
        3
    ]
}