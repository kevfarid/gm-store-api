import { Router } from 'express'
import * as tags from './tags.controllers'

const router = Router()

router.get('/', tags.getTags)
router.post('/', tags.createdTag)
router.put('/:id', tags.updateTag)

export default router
