main.floors.MT23w=
{
    "floorId": "MT23w",
    "title": "第23层",
    "name": "第23层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "startText.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,6": {
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
                    "right"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "right"
                ]
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "autoText",
                "text": "\t[得到炎之灵杖]\b[down,hero] ",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,228,  0, 27, 27, 27,  0,  0,  0,  4,  0, 32,  3],
    [  3,  0,  4,  4,  4,  4,  4,  4,  0, 82,  0,  4,  3],
    [  3, 27,  4,  4,247,228,228,228,  0,  4,  0,  4,  3],
    [  3, 27,  4,  4, 50,  4,  4,  4,  4,  4,  0,  4,  3],
    [  3,  0,247,  4,  4,  4,  4,  4,  4, 63,  0,  4,  3],
    [  3,  4, 83,208, 86, 72,  4,  4, 63, 82,  0, 88,  3],
    [  3,  0,247,  4,  4,  4,  4,  4,  4, 63,  0,  4,  3],
    [  3, 27,  4,  4, 50,  4,  4,  4,  4,  4,  0,  4,  3],
    [  3, 27,  4,  4,247,228,228,228,  0,  4,  0,  4,  3],
    [  3,  0,  4,  4,  4,  4,  4,  4,  0, 82,  0,  4,  3],
    [  3,228,  0, 27, 27, 27,  0,  0,  0,  4,  0, 32,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        10,
        6
    ],
    "upFloor": [
        10,
        6
    ]
}