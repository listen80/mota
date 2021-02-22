main.floors.MT23e=
{
    "floorId": "MT23e",
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
    "eachArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "resumeBgm"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,6": {
            "floorId": "MT22",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "9,6": [
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "left"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "left"
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
                        7,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "autoText",
                "text": "\t[得到心之灵杖]\b[down,hero] ",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 32,  0,  4,  0,  0,  0, 28, 28, 28,  0,228,  3],
    [  3,  4,  0, 82,  0,  4,  4,  4,  4,  4,  4,  0,  3],
    [  3,  4,  0,  4,  0,228,228,228,247,  4,  4, 28,  3],
    [  3,  4,  0,  4,  4,  4,  4,  4, 50,  4,  4, 28,  3],
    [  3,  4,  0, 63,  4,  4,  4,  4,  4,  4,247,  0,  3],
    [  3, 88,  0, 82, 63,  4,  4, 73, 86,208, 83,  4,  3],
    [  3,  4,  0, 63,  4,  4,  4,  4,  4,  4,247,  0,  3],
    [  3,  4,  0,  4,  4,  4,  4,  4, 50,  4,  4, 28,  3],
    [  3,  4,  0,  4,  0,228,228,228,247,  4,  4, 28,  3],
    [  3,  4,  0, 82,  0,  4,  4,  4,  4,  4,  4,  0,  3],
    [  3, 32,  0,  4,  0,  0,  0, 28, 28, 28,  0,228,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        2,
        6
    ],
    "upFloor": [
        2,
        6
    ]
}