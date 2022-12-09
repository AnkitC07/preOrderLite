const get_products_query = (filter) => `
query
  {
    products(${filter}) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          title
          description        
      }
    }
  }
}
`
// Get active 5 products
export const Get_Products = (filterBy) => get_products_query(`first:${filterBy.first}`)

// Get active 5 next products
export const Get_Next_Products = (filterBy) => get_products_query(`first:${filterBy.first},after:"${filterBy.after}"`)

// Get active 5 prev products
export const Get_Prev_Products = (filterBy) => get_products_query(`last:${filterBy.last},before:"${filterBy.before}"`)