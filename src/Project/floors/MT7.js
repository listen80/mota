main.floors.MT7=
{
    "floorId": "MT7",
    "title": "第7层",
    "name": "第7层",
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
        "5,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "4,5": [
            {
                "type": "openDoor",
                "loc": [
                    5,
                    5
                ]
            }
        ]
    },
    "afterGetItem": {
        "6,5": [
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "floorId": "MT16"
            },
            {
                "type": "setText",
                "align": "center"
            },
            "\t[幸运十字架]把它交给序章中的仙子，可以将自身的所有能力提升三分之一（攻击、防御和生命值）。",
            {
                "type": "setText",
                "align": "left"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3, 87,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  3],
    [  3,  1,  1,  0,207,  1, 82,  1,211,  0,  1,  1,  3],
    [  3,  1,  0,207, 28,  1,246,  1, 27,211,  0,  1,  3],
    [  3,  0,  0,  1,  1,  1, 86,  1,  1,  1,  0,  0,  3],
    [  3,  0,  0, 82,246, 86, 55, 86,246, 82,  0,  0,  3],
    [  3,  0,  1,  1,  1,  1, 86,  1,  1,  1,  1,  0,  3],
    [  3,  0,  1, 31, 27,  1,246,  1, 28, 31,  1,  0,  3],
    [  3,  0,  1, 21, 31,  1, 82,  1, 31, 21,  1,  0,  3],
    [  3,  0,  1,  1, 22, 22, 32, 22, 22,  1,  1,  0,  3],
    [  3,  0,  0,  1,  1,  1, 83,  1,  1,  1,  0,  0,  3],
    [  3,  1,  0,  0, 81, 88,  0,  0, 81,  0,  0,  1,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        2,
        1
    ],
    "downFloor": [
        6,
        11
    ]
}