import { schema, normalize } from 'normalizr'

const comment = new schema.Entity('comments')
const post = new schema.Entity('posts', {
  comments: [comment]
})
const user = new schema.Entity('users', {
  posts: [post],
  comments: [comment]
})

const userList = [user]
const postList = [post]

export const userNormalizr = (userData) => normalize(userData, userList)
export const postNormalizr = (postData) => normalize(postData, postList)

export default { userNormalizr, postNormalizr }
