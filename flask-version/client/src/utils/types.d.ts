type Vid = {
    id: number
}

type Sid = {
    id: number
    val: string
}

export type Category = {
    id: number
    is_resource_category: boolean
    name: string
    optional_display_description: string
    optional_description: string
    sid: number
    sort_order: number
}

export type Feature = {
    category_id: number
    category_sid: number
    display_name: string
    ep_keywords: string[]
    id: number
    isDeleted: boolean
    optional_end_date: date
    optional_description: string
    sid: number
    start_date: date
    status_code: string
    vid: number
}