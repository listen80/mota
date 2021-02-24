main.floors.MT5=
{
    "floorId": "MT5",
    "title": "第5层",
    "name": "第5层",
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
        "2,8": [
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "openShop",
                "id": "expShop1"
            }
        ],
        "11,4": [
            {
                "type": "openShop",
                "id": "keyShop1"
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "10,11": {
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
    [  3, 26,  1, 31,  1, 32,217,  0,  0,217, 21, 22,  3],
    [  3,  0,  1, 27,  1,217,  0,  0,  0,  0,217, 21,  3],
    [  3,206,  1,  0,  1,210,  0,  1,  1, 81,  1,  1,  3],
    [  3,  0, 81,217,  1, 36,210,  1,  0,213,210,122,  3],
    [  3,206,  1,  0,  1,  1,  1,  1,  0,  0,  0,210,  3],
    [  3, 27,  1,  0,  0,  0,205,209,  0,  0,  0,  0,  3],
    [  3, 28,  1,  1,203,  1,  1,  1,  1,  0,  0,  0,  3],
    [  3,  0,121,  1,203,  1,  0,  0,  0,213,221,  0,  3],
    [  3,  1,  1,  1,205,  1, 81,  1, 82,  1, 81,  1,  3],
    [  3,  0,  0,  1,  0,  1,205,  1, 28, 81,  0,  1,  3],
    [  3, 88,  0,205,  0,  0,  0,  1, 21,  1, 87,  1,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgm": "area1.mp3",
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        10,
        10
    ],
    "downFloor": [
        1,
        10
    ]
}