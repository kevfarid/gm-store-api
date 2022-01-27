import { Schema, model } from 'mongoose'

const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Tag', TagSchema)
