main.floors.MT20=
{
    "floorId": "MT20",
    "title": "第20层",
    "name": "第20层",
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
            "enable": false,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "changeFloor",
                    "floorId": "MT21",
                    "loc": [
                        6,
                        6
                    ],
                    "direction": "down",
                    "time": 100
                }
            ]
        }
    },
    "changeFloor": {
        "6,4": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,216, 27,246, 31,212, 23,212, 31,246, 27,216,  3],
    [  3, 32,  4, 21,  4, 22,  4, 22,  4, 21,  4, 32,  3],
    [  3,  4, 28,246,  0,228,  0,228,  0,246, 28,  4,  3],
    [  3, 31,  4, 21,  4,  0, 88,  0,  4, 21,  4, 31,  3],
    [  3,212, 22,228,  0,  0,  0,  0,  0,228, 22,212,  3],
    [  3, 23,  4,  0,  4,  0,  4,  0,  4,  0,  4, 23,  3],
    [  3,212, 22,228,  0,  0,  0,  0,  0,228, 22,212,  3],
    [  3, 31,  4, 21,  4,  0, 87,  0,  4, 21,  4, 31,  3],
    [  3,  4, 28,246,  0,228,  0,228,  0,246, 28,  4,  3],
    [  3, 32,  4, 21,  4, 22,  4, 22,  4, 21,  4, 32,  3],
    [  3,216, 27,246, 31,212, 23,212, 31,246, 27,216,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "startText.mp3",
    "downFloor": [
        6,
        5
    ],
    "upFloor": [
        6,
        7
    ]
}