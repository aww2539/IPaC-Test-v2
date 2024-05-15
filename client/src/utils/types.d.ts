type Vid = {
    id: number
}

type Sid = {
    id: number
    val: string
}

export type Category = {
    id: number
    isResourceCategory: boolean
    name: string
    optionalDisplayDescription: string
    optionalDescription: string
    sid: number
    sortOrder: number
}

export type Feature = {
    categoryId: number
    categorySid: number
    displayName: string
    epKeywords: string[]
    id: number
    isDeleted: boolean
    optionalEndDate: date
    optionalDescription: string
    sid: number
    startDate: date
    statusCode: string
    vid: number
}