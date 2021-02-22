main.floors.MT10=
{
    "floorId": "MT10",
    "title": "第10层",
    "name": "第10层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "openDoor",
            "loc": [
                4,
                7
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,7": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
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
    [  3,  0,  1,  1, 28,214,  1,214, 27,  1,  1,  0,  3],
    [  3,  0,  0,  1,  1, 81,  1, 81,  1,  1,  0,220,  3],
    [  3,  0,  0,  0,  0,  0,  1,  0,  0,  0,220, 32,  3],
    [  3,  0,  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  3],
    [  3,206,  1,  0,  0, 21, 21, 21,  0,  0,  1, 21,  3],
    [  3,207,  1,  0,  1,  1,  1,  1, 81,  1,  1, 21,  3],
    [  3,206,  1,  0, 86,  0, 88,  1,  0, 81,207,  0,  3],
    [  3,  0,  1,  1,  1,  1,  1,  1, 81,  1,  1,  0,  3],
    [  3,  0,  1, 31, 28, 27,  1,  0,207,  0,  1, 21,  3],
    [  3,  0,  1, 31, 28, 27, 83,219,  1,219,  1, 21,  3],
    [  3, 87,  1, 31, 28, 27,  1, 22,  1, 22,  1, 31,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        1,
        10
    ],
    "downFloor": [
        5,
        7
    ],
    "bgm": "area2.mp3"
}