import { Paper, Stack } from "@mui/material"
import { Category } from "src/utils/types"

type CategoryListProps = {
    categories: Category[]
    selectedCategorySid: number
    setSelectedCategory: (category: Category) => void
    isSearching: boolean
    setSearch: (searchString: string) => void
}

export const CategoriesList = ({ 
    categories, 
    selectedCategorySid, 
    setSelectedCategory, 
    isSearching, 
    setSearch 
}: CategoryListProps) => {

    const currentCategoryColor = (categorySidId: number) => {
        if (categorySidId === selectedCategorySid && isSearching) {
            return '#828282'
        }
    }

    const hoverColor = (categorySidId: number) => {
        if (categorySidId === selectedCategorySid) {
            return {}
        } else {
            return { cursor: 'pointer', backgroundColor: '#e0e0e0' }
        }
    }

    return (
        <>
            <Stack direction='column' spacing={1} className='category-list'>
                {categories.map((category) => (
                    <Paper 
                        key={category.sid}
                        className='category-list-item'
                        sx={{ 
                            fontWeight: 'bold',
                            paddingX: '15px', 
                            paddingY: '15px',
                            background: `${currentCategoryColor(category.sid)}`,
                            ':hover': { ...hoverColor(category.sid) },
                            "&:active": {
                                boxShadow: 'none',
                                background: '#828282'
                            }              
                        }}
                        onClick={() => {
                            setSearch('')
                            setSelectedCategory(category)
                        }}
                    >
                        {category.name}
                    </Paper>
                ))}
            </Stack>
        </>

    )
}