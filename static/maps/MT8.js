main.floors.MT8=
{
    "floorId": "MT8",
    "title": "第8层",
    "name": "第8层",
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
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,5": {
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
    [  3, 88,  1,  0,  0,  0,  0,  1,  0, 21,211,  0,  3],
    [  3,  0,  1,  0,  1,  1, 81,  1, 81,  1,  1,  0,  3],
    [  3,  0,  1,  0,  1,  0,  0, 82,  0,  0,  1, 27,  3],
    [  3,  0,  1,  0,  1,219,  1,  1,  1,206,  1,203,  3],
    [  3,206,  1,  0,  1, 31,  1, 87,  0,  0,  1,203,  3],
    [  3,207,  1, 28,  1, 31,  1,  1,  1,  1,  1,  0,  3],
    [  3,206,  1,203,  1,  0,  0,  0,  1,  0,207,  0,  3],
    [  3,  0,  1,203,  1,  1,  1,221,  1, 81,  1,  1,  3],
    [  3,  0,  1,  0,211,  0,  1,211,  1,  0,  0,  0,  3],
    [  3,  0,  1,  1,  1, 81,  1,  0,  1,  1,  1,  0,  3],
    [  3,  0,  0,219,  0,  0,  1,  0,204,246,204,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        8,
        5
    ],
    "downFloor": [
        1,
        2
    ],
    "bgm": "area2.mp3"
}