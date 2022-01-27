import Book from './Book.model'

export const getBooks = async (req, res) => {
  const books = await Book.find()
  return res.json(books)
}

export const registerBook = async (req, res) => {
  const { title, author, img, publishing, edition, year, genere, description, tags, type, state } =
    req.body

  const newBook = new Book({
    title,
    author,
    img,
    publishing,
    edition,
    year,
    genere,
    description,
    tags,
    type,
    state,
  })

  await newBook.save()
  return res.status(201).send(newBook)
}

export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  return res.send(book)
}

export const deleteBook = async (req, res) => {
  await Book.findByIdAndRemove(req.params.id)
  return res.sendStatus(204)
}
