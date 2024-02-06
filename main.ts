let head : Sprite = null
let tail : Sprite = null
let nom : Sprite = null
function on_on_overlap(spriteOne: any, spriteTwo: any) {
    
}

scene.setBackgroundColor(13)
head = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . f f 5 f f . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . 2 3 f f f . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
