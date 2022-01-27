import { Schema, model } from 'mongoose'

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    publishing: {
      type: String,
      required: true,
    },
    edition: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genere: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    type: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Book', BookSchema)
