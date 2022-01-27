import Tag from './Tag.model'

export const getTags = async (req, res) => {
  const tags = await Tag.find()
  return res.json(tags)
}

export const createdTag = async (req, res) => {
  const { name } = req.body

  const newTag = new Tag({
    name,
  })

  await newTag.save()
  return res.status(201).send(newTag)
}

export const updateTag = async (req, res) => {
  const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  return res.send(tag)
}
