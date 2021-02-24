main.floors.MT14=
{
    "floorId": "MT14",
    "title": "第14层",
    "name": "第14层",
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
    "events": {},
    "changeFloor": {
        "5,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "moveHero",
                "time": 125,
                "steps": [
                    "up"
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    5
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  1,  0,228, 26, 87,  0,  0,  0,  0,  0,  1,  3],
    [  3,  1,  0, 32,  1,  1,  1,  1,  1, 32,  0,  1,  3],
    [  3,  1,  0,  1,  1,  1,  1,  1,  1,  1,  0,  1,  3],
    [  3,  1,  0,  1,  1,  1, 56,  1,  1,  1,  0,  1,  3],
    [  3,  1,  0,  1,  1,  1, 86,  1,  1,  1,  0,  1,  3],
    [  3,  1,  0, 31,  1,  1,225,  1,  1, 31,  0,  1,  3],
    [  3,  1,  0,  4,  4,  1,212,  1,  4,  4,  0,  1,  3],
    [  3,  1,  0,  4,  4,  1,225,  1,  4,  4,  0,  1,  3],
    [  3,  1,  0,  4,  4,  1, 82,  1,  4,  4,  0,  1,  3],
    [  3,  1,222,223,222, 82,  0, 82,222,223,222,  1,  3],
    [  3,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        1
    ],
    "downFloor": [
        6,
        10
    ],
    "bgm": "area2.mp3"
}