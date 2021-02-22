main.floors.MT19=
{
    "floorId": "MT19",
    "title": "第19层",
    "name": "第19层",
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
        "6,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": false,
            "data": [
                "\t[hero]\b[hero]大魔头，你的死期到了！",
                {
                    "type": "playSound",
                    "name": "dialogue.mp3"
                },
                "\t[冥灵魔王：,vampire]\b[up,6,7]哈哈哈……\n你也真是有意思，",
                {
                    "type": "playSound",
                    "name": "dialogue.mp3"
                },
                "\t[冥灵魔王：,vampire]\b[up,6,7]别以为蝶仙那家伙给了你力量你就可以打败我，",
                {
                    "type": "playSound",
                    "name": "dialogue.mp3"
                },
                "\t[冥灵魔王：,vampire]\b[up,6,7]想打败我你还早着呢！",
                {
                    "type": "playSound",
                    "name": "dialogue.mp3"
                },
                "\t[hero]\b[hero]废话少说，去死吧！",
                {
                    "type": "hide",
                    "time": 0
                }
            ]
        }
    },
    "changeFloor": {
        "6,4": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "3,6": [
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "down"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    3,
                    7
                ]
            }
        ],
        "9,6": [
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "down"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    9,
                    7
                ]
            }
        ],
        "6,7": [
            "\t[冥灵魔王：,vampire]看不出你还有两下子，有本领的话来21楼。",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            "\t[冥灵魔王：,vampire]在那里，你就可以见识到我真正的实力了！",
            {
                "type": "playSound",
                "name": "dialogue.mp3"
            },
            {
                "type": "updateEnemys"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  4,  0,  4,  4,  4,  4,  4,  0,  4,  0,  3],
    [  3,  0,  4,  0,  4,  4,  4,  4,  4,  0,  4,  0,  3],
    [  3,  0,  4,  0,  4,  4, 87,  4,  4,  0,  4,  0,  3],
    [  3,  0,  4,  0,  4,  4,  0,  4,  4,  0,  4,  0,  3],
    [  3,  0,  4,245,  4,  4,  0,  4,  4,245,  4,  0,  3],
    [  3,  0,  4, 86,  4,  4,208,  4,  4, 86,  4,  0,  3],
    [  3,  0,  4, 43,  4,  4,  0,  4,  4, 44,  4,  0,  3],
    [  3,  0,  4,  4,  4,  4,  0,  4,  4,  4,  4,  0,  3],
    [  3,  0,  4,  4,  4,  4,  0,  4,  4,  4,  4,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 88,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "startText.mp3",
    "upFloor": [
        6,
        5
    ],
    "downFloor": [
        10,
        11
    ]
}