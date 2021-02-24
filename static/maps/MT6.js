main.floors.MT6=
{
    "floorId": "MT6",
    "title": "第6层",
    "name": "第6层",
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
        "10,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "5,11": {
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
    [  3, 50,211,  1, 28,  1, 21,204, 63,  1, 32, 32,  3],
    [  3,211, 21,  1, 27,  1,  0, 21,204,  1,215, 32,  3],
    [  3, 21,207, 82,  0, 82,207,  0, 21,  1,  0,215,  3],
    [  3,  0,  0,  1,221,  1,  0,  0,  0,  1,220,  0,  3],
    [  3,  1,  1,  1, 83,  1,  1,  1,  1,  1, 81,  1,  3],
    [  3,  0,  0,218,  0, 21, 21, 21,  0,218,  0,  0,  3],
    [  3,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  3],
    [  3,  0,  1,206, 81,206,  0,  0,  0,  0,  0,  1,  3],
    [  3,  0,  1, 81,  1, 81,  1,  1,  1,  1, 82,  1,  3],
    [  3,  0,  1,206,  1,  0,  0,  1,  1,  0,  0,  1,  3],
    [  3,  0,  0,  0,  1, 87,  0, 81, 81,  0, 88,  1,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        11
    ],
    "downFloor": [
        10,
        10
    ]
}