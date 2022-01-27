import { Router } from 'express'
import books from '../services/books/books.routes'
import tags from '../services/tags/tags.routes'

const router = Router()

router.use('/books', books)
router.use('/tags', tags)

export default router
