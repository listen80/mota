main.floors.MT11=
{
    "floorId": "MT11",
    "title": "第11层",
    "name": "第11层",
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
        "6,9": [
            {
                "type": "openShop",
                "id": "moneyShop2"
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [  3, 31,  1, 21,  1, 22,  1, 23,  1, 32, 40, 32,  3],
    [  3, 31,  1, 21,  1, 22,  1, 23,  1,222,223,222,  3],
    [  3, 31,  1, 21,  1, 22,  1, 23,  1,  0,222,  0,  3],
    [  3, 81,  1, 81,  1, 81,  1, 81,  1,  1, 82,  1,  3],
    [  3,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  3],
    [  3, 81,  1,  1, 82,  1,  1,  1, 82,  1,  1, 81,  3],
    [  3, 28,  1,  0,222, 32,224, 32,222,  0,  1, 27,  3],
    [  3, 28,  1,214,  1,  1,  1,  1,  1,214,  1, 27,  3],
    [  3, 28,  1,214,  1,  7,131,  8,  1,214,  1, 27,  3],
    [  3,  1,  1, 83,  1, 31,  0, 31,  1, 83,  1,  1,  3],
    [  3, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0, 87,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        10,
        11
    ],
    "downFloor": [
        2,
        11
    ],
    "bgm": "area2.mp3"
}