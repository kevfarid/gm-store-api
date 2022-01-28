import { Router } from 'express'

const router = Router()
const pagesPath = 'pages'

router.use('/login', (req, res) => {
  res.render(`${pagesPath}/login`)
})

router.use('/book/new', (req, res) => {
  res.render(`${pagesPath}/books/new`)
})

export default router
