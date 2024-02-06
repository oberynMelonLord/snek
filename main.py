head: Sprite = None
tail: Sprite = None
nom: Sprite = None

def on_on_overlap(spriteOne, spriteTwo):
    pass

scene.set_background_color(13)
head = sprites.create(img("""
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
"""), SpriteKind.player)