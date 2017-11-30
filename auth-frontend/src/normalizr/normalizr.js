import { schema, normalize } from 'normalizr'

const comment = new schema.Entity("comments")
const post = new schema.Entity('posts')
const user = new schema.Entity('users', {
  posts: [post],
  comments: [comment]
})

const UserList = [user]

export const userNormalizr = (payload) => normalize(payload, UserList)

export default { userNormalizr }
