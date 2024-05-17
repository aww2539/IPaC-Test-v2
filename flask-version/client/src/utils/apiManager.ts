import { SetStateAction } from "react";
import { Feature, Category } from "./types"

type SetState<Type> = { (value: SetStateAction<Type>): void; (arg0: Type): void };

export const getAndSetCategories = async (
  setCategories: SetState<Category[]>,
  setSelectedCategory: SetState<Category | undefined>
) => {
  try {
    const res = await fetch('http://localhost:5000/api/categories')
    const data = await res.json()

    setCategories(data)
    setSelectedCategory(data[0])
  } catch (error) {
    console.trace(`Error fetching categories: ${error}`)
  }
}

export const getAndSetFeaturesByCategory = async (categorySid: number, setFeaturesByCategory: SetState<Feature[]>,) => {
  try {
    const res = await fetch(`http://localhost:5000/api/features?category_sid=${categorySid}`)
    const data = await res.json()

    setFeaturesByCategory(data)
  } catch (error) {
    console.trace(`Error fetching features: ${error}`)
  }
}