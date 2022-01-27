import { Router } from 'express'
import * as books from './books.controllers'

const router = Router()

router.get('/', books.getBooks)
router.post('/', books.registerBook)
router.put('/:id', books.updateBook)
router.delete('/:id', books.deleteBook)

export default router
