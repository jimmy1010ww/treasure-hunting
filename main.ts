let 寶藏座標: Position[] = []
let position: Position = null
player.onChat("run", function () {
    寶藏搜尋大賽()
})
function 寶藏搜尋大賽 () {
    gameplay.title(mobs.target(ALL_PLAYERS), "尋找寶藏大賽", "快去尋找寶藏!")
    寶藏座標 = []
    player.execute(
    "/scoreboard objectives add \"找尋寶藏\" dummy"
    )
    player.execute(
    "/scoreboard objectives setdisplay sidebar \"找尋寶藏\""
    )
    for (let index = 0; index <= 4; index++) {
        position = world(randint(-300, -400), randint(61, 63), randint(70, 250))
        寶藏座標.push(position)
        blocks.place(IRON_BLOCK, position)
        player.execute(
        "/scoreboard players add " + "\"" + position + "\"" + " \"找尋寶藏\" 1"
        )
    }
}
function 偵測寶藏大賽方塊 () {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (!(blocks.testForBlock(IRON_BLOCK, 寶藏座標[index]))) {
                player.execute(
                "/scoreboard players set " + "\"" + 寶藏座標[index] + "\"" + "\"找尋寶藏\" 0"
                )
            } else {
                player.execute(
                "/scoreboard players set " + "\"" + 寶藏座標[index] + "\"" + "\"找尋寶藏\" 1"
                )
            }
        }
    }
}
