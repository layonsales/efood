class Food {
    name: string
    note: string
    origin: string
    description: string
    image: string

    constructor(name: string, note: string, origin: string, description: string, image: string) {
        this.name = name
        this.note = note
        this.origin = origin
        this.description = description
        this.image = image
    }
}

export default Food